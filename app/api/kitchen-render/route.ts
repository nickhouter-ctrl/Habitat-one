// Maakt van een ruwe 3D-momentopname van de keukenplanner een fotorealistisch
// beeld, via de Vercel AI Gateway (Gemini "Nano Banana"-beeldmodel).
// Op een Vercel-deploy logt de Gateway automatisch in via OIDC — geen sleutel.

import { generateText } from "ai";

// Beeldgeneratie kan 10-30s duren.
export const maxDuration = 120;

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

  try {
    const result = await generateText({
      model: "google/gemini-2.5-flash-image",
      messages: [
        {
          role: "user",
          content: [
            { type: "text", text: prompt },
            { type: "image", image },
          ],
        },
      ],
    });

    const file = result.files?.find((f) => f.mediaType?.startsWith("image/"));
    if (!file) {
      return Response.json({ ok: false, error: "no-image" }, { status: 502 });
    }
    return Response.json({
      ok: true,
      image: `data:${file.mediaType};base64,${file.base64}`,
    });
  } catch (err) {
    console.error("[kitchen-render]", err);
    return Response.json(
      { ok: false, error: err instanceof Error ? err.message : "render-failed" },
      { status: 502 },
    );
  }
}
