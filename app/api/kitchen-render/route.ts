// Maakt van een ruwe 3D-momentopname van de keukenplanner een fotorealistisch
// beeld, via de Google Gemini API (gratis tier — "Nano Banana"-beeldmodel).
// Sleutel staat in GOOGLE_GENERATIVE_AI_API_KEY. Directe fetch, geen SDK, geen
// Vercel AI Gateway.

// Beeldgeneratie kan 10-30s duren.
export const maxDuration = 120;

const MODEL = "gemini-2.5-flash-image";
const ENDPOINT = `https://generativelanguage.googleapis.com/v1beta/models/${MODEL}:generateContent`;

interface Part {
  text?: string;
  inlineData?: { mimeType?: string; data?: string };
  inline_data?: { mime_type?: string; data?: string };
}

export async function POST(req: Request) {
  let body: { image?: string; prompt?: string };
  try {
    body = await req.json();
  } catch {
    return Response.json({ ok: false, error: "invalid-json" }, { status: 400 });
  }

  const { image, prompt } = body;
  if (!image || !prompt) {
    return Response.json({ ok: false, error: "missing-input" }, { status: 400 });
  }

  const apiKey = process.env.GOOGLE_GENERATIVE_AI_API_KEY;
  if (!apiKey) {
    return Response.json({ ok: false, error: "AI niet geconfigureerd (geen API-sleutel)." }, { status: 500 });
  }

  // De client stuurt een data-URL (data:image/png;base64,XXXX). Splits mime + data.
  const match = /^data:(?<mime>[^;]+);base64,(?<data>.+)$/s.exec(image);
  const inlineMime = match?.groups?.mime ?? "image/png";
  const inlineData = match?.groups?.data ?? image;

  try {
    const res = await fetch(ENDPOINT, {
      method: "POST",
      headers: { "content-type": "application/json", "x-goog-api-key": apiKey },
      body: JSON.stringify({
        contents: [
          {
            role: "user",
            parts: [
              { text: prompt },
              { inlineData: { mimeType: inlineMime, data: inlineData } },
            ],
          },
        ],
        generationConfig: { responseModalities: ["IMAGE"] },
      }),
    });

    if (!res.ok) {
      const detail = await res.text();
      console.error("[kitchen-render] google error", res.status, detail);
      let msg = `google-${res.status}`;
      try {
        msg = (JSON.parse(detail) as { error?: { message?: string } })?.error?.message ?? msg;
      } catch {
        /* niet-JSON antwoord — laat de statuscode staan */
      }
      return Response.json({ ok: false, error: msg }, { status: 502 });
    }

    const data = (await res.json()) as { candidates?: { content?: { parts?: Part[] } }[] };
    const parts = data.candidates?.[0]?.content?.parts ?? [];
    const imgPart = parts.find((p) => p.inlineData?.data || p.inline_data?.data);
    const out = (imgPart?.inlineData ?? imgPart?.inline_data) as
      | { mimeType?: string; mime_type?: string; data?: string }
      | undefined;
    if (!out?.data) {
      return Response.json({ ok: false, error: "no-image" }, { status: 502 });
    }
    const mime = out.mimeType ?? out.mime_type ?? "image/png";
    return Response.json({ ok: true, image: `data:${mime};base64,${out.data}` });
  } catch (err) {
    console.error("[kitchen-render]", err);
    return Response.json(
      { ok: false, error: err instanceof Error ? err.message : "render-failed" },
      { status: 502 },
    );
  }
}
