// Maakt van een ruwe 3D-momentopname van de keukenplanner een fotorealistisch
// beeld, via de Google Gemini API. Sleutel staat in
// GOOGLE_GENERATIVE_AI_API_KEY. Directe fetch, geen SDK, geen AI Gateway.
//
// Deze route kost geld per aanroep, dus hij is bewust dichtgezet:
//  1. same-origin — alleen verzoeken vanaf de eigen site (Origin/Referer);
//  2. rate limit  — per IP én een plafond per uur voor de hele instantie;
//  3. size cap    — content-length en de gedecodeerde beeldgrootte;
//  4. geen client-prompt — de prompt wordt server-side uit gevalideerde
//     catalogus-ids opgebouwd (lib/planner/render-request.ts);
//  5. geen upstream-details naar buiten — de client krijgt alleen stabiele
//     foutcodes, de volledige Google-fout gaat naar de serverlog.

import {
  buildRenderPrompt,
  parseImageDataUrl,
  parseRenderDescriptor,
} from "@/lib/planner/render-request";
import { createRateLimiter } from "@/lib/rate-limit";

// Beeldgeneratie kan 10-30s duren.
export const maxDuration = 120;

const MODEL = "gemini-2.5-flash-image";
const ENDPOINT = `https://generativelanguage.googleapis.com/v1beta/models/${MODEL}:generateContent`;

/** Maximale JSON-body: het beeld is base64 (≈4/3×) plus een kleine descriptor. */
const MAX_BODY_BYTES = 6 * 1024 * 1024;

/** Wachttijd op Google voordat we afbreken — voorkomt hangende functies. */
const UPSTREAM_TIMEOUT_MS = 90_000;

function envInt(name: string, fallback: number): number {
  const raw = process.env[name];
  const n = raw ? Number.parseInt(raw, 10) : NaN;
  return Number.isFinite(n) && n > 0 ? n : fallback;
}

// Per bezoeker een paar varianten per kwartier; daarnaast een hard plafond per
// uur voor de hele instantie zodat een botnet met veel IP's de rekening niet
// kan laten oplopen. Beide instelbaar via env.
const perIpLimiter = createRateLimiter({
  limit: envInt("KITCHEN_RENDER_PER_IP_LIMIT", 5),
  windowMs: 15 * 60 * 1000,
});
const globalLimiter = createRateLimiter({
  limit: envInt("KITCHEN_RENDER_HOURLY_LIMIT", 60),
  windowMs: 60 * 60 * 1000,
});

/** Stabiele foutcode + statuscode; de client vertaalt de code naar zijn taal. */
function fail(error: string, status: number, headers?: HeadersInit) {
  return Response.json({ ok: false, error }, { status, headers });
}

/**
 * True wanneer het verzoek van de eigen site komt. Een browser stuurt bij een
 * cross-origin POST altijd een Origin-header, dus een ontbrekende/afwijkende
 * origin duidt op een script buiten de site om.
 */
function isSameOrigin(req: Request): boolean {
  const host = req.headers.get("host");
  if (!host) return false;
  const source = req.headers.get("origin") ?? req.headers.get("referer");
  if (!source) return false;
  try {
    return new URL(source).host === host;
  } catch {
    return false;
  }
}

/** Eerste IP uit de proxyketen; "unknown" valt samen in één emmer. */
function clientIp(req: Request): string {
  const forwarded = req.headers.get("x-forwarded-for");
  if (forwarded) {
    const first = forwarded.split(",")[0]?.trim();
    if (first) return first;
  }
  return req.headers.get("x-real-ip")?.trim() || "unknown";
}

export async function POST(req: Request) {
  if (!isSameOrigin(req)) {
    return fail("forbidden", 403);
  }

  const declared = Number.parseInt(req.headers.get("content-length") ?? "", 10);
  if (Number.isFinite(declared) && declared > MAX_BODY_BYTES) {
    return fail("too-large", 413);
  }

  // Body als tekst inlezen zodat een ontbrekende/gelogen content-length alsnog
  // op de echte grootte wordt afgerekend.
  let raw: string;
  try {
    raw = await req.text();
  } catch {
    return fail("invalid-json", 400);
  }
  if (raw.length > MAX_BODY_BYTES) {
    return fail("too-large", 413);
  }

  let body: unknown;
  try {
    body = JSON.parse(raw);
  } catch {
    return fail("invalid-json", 400);
  }
  if (typeof body !== "object" || body === null) {
    return fail("invalid-json", 400);
  }

  const { image, design } = body as { image?: unknown; design?: unknown };
  const parsedImage = parseImageDataUrl(image);
  if (!parsedImage) {
    return fail("invalid-image", 400);
  }
  const descriptor = parseRenderDescriptor(design);
  if (!descriptor) {
    return fail("missing-input", 400);
  }

  // Pas ná de payload-validatie: een fout in het verzoek hoort een 400 te geven,
  // ook wanneer de sleutel ontbreekt.
  const apiKey =
    process.env.GOOGLE_GENERATIVE_AI_API_KEY ||
    process.env.GEMINI_API_KEY ||
    process.env.GOOGLE_API_KEY ||
    process.env.GOOGLE_AI_API_KEY;
  if (!apiKey) {
    return fail("not-configured", 500);
  }

  // Pas limiet aftikken nadat de payload geldig blijkt — een kapot verzoek
  // mag het tegoed van een echte bezoeker niet opeten.
  const ipCheck = perIpLimiter.check(clientIp(req));
  if (!ipCheck.ok) {
    return fail("rate-limited", 429, { "retry-after": String(ipCheck.retryAfterSec) });
  }
  const globalCheck = globalLimiter.check("global");
  if (!globalCheck.ok) {
    console.warn("[kitchen-render] uurplafond bereikt");
    return fail("busy", 503, { "retry-after": String(globalCheck.retryAfterSec) });
  }

  try {
    const res = await fetch(ENDPOINT, {
      method: "POST",
      headers: { "content-type": "application/json", "x-goog-api-key": apiKey },
      signal: AbortSignal.timeout(UPSTREAM_TIMEOUT_MS),
      body: JSON.stringify({
        contents: [
          {
            role: "user",
            parts: [
              { text: buildRenderPrompt(descriptor) },
              { inlineData: { mimeType: parsedImage.mimeType, data: parsedImage.data } },
            ],
          },
        ],
        generationConfig: { responseModalities: ["IMAGE"] },
      }),
    });

    if (!res.ok) {
      // Alleen loggen: de Google-melding kan sleutel-/quota-details bevatten
      // en gaat daarom nooit naar de client.
      console.error("[kitchen-render] google error", res.status, await res.text());
      // 429/5xx bij Google is tijdelijk; de rest is aan ons verzoek.
      const status = res.status === 429 || res.status >= 500 ? 503 : 502;
      return fail(status === 503 ? "busy" : "render-failed", status);
    }

    const data = (await res.json()) as {
      candidates?: {
        content?: {
          parts?: {
            inlineData?: { mimeType?: string; data?: string };
            inline_data?: { mime_type?: string; data?: string };
          }[];
        };
      }[];
    };
    const parts = data.candidates?.[0]?.content?.parts ?? [];
    const imgPart = parts.find((p) => p.inlineData?.data || p.inline_data?.data);
    // Google levert camelCase óf snake_case, afhankelijk van de route/versie.
    const out = imgPart?.inlineData ?? {
      data: imgPart?.inline_data?.data,
      mimeType: imgPart?.inline_data?.mime_type,
    };
    if (!out.data) {
      return fail("no-image", 502);
    }
    return Response.json({
      ok: true,
      image: `data:${out.mimeType ?? "image/png"};base64,${out.data}`,
    });
  } catch (err) {
    console.error("[kitchen-render]", err);
    const timedOut = err instanceof Error && err.name === "TimeoutError";
    return fail(timedOut ? "busy" : "render-failed", timedOut ? 503 : 502);
  }
}
