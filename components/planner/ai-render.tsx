"use client";

// "Genereer realistisch beeld" — legt het 3D-ontwerp vast en laat de AI er
// een fotorealistische impressie van maken.
//
// De client stuurt bewust GEEN prompt mee, alleen een descriptor met
// catalogus-ids; de server bouwt de prompt daaruit op (zie
// lib/planner/render-request.ts). Alle zichtbare teksten lopen via usePlannerT.

import { useState, type RefObject } from "react";
import { Download, Loader2, Sparkles, X } from "lucide-react";
import { describeDesign } from "@/lib/planner/render-request";
import { usePlanner } from "@/lib/planner/store";
import { usePlannerT } from "./i18n";

export function AiRenderPanel({
  captureRef,
}: {
  captureRef: RefObject<(() => string) | null>;
}) {
  const { design } = usePlanner();
  const { tf } = usePlannerT();
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  /**
   * Vertaalt een foutcode van /api/kitchen-render naar een bezoekerstekst.
   * De route stuurt uitsluitend deze vaste codes — nooit een upstream-melding.
   */
  function errorMessage(code: string | undefined): string {
    switch (code) {
      case "not-configured":
        return tf("aiRender.errNotConfigured", "De beeldgeneratie is nog niet geconfigureerd.");
      case "rate-limited":
        return tf(
          "aiRender.errRateLimited",
          "Je hebt net al een paar beelden gemaakt. Probeer het over een kwartier nog eens.",
        );
      case "busy":
        return tf(
          "aiRender.errBusy",
          "Het is nu erg druk bij de beeldgeneratie. Probeer het over een paar minuten nog eens.",
        );
      case "too-large":
      case "invalid-image":
        return tf(
          "aiRender.errImage",
          "De momentopname van het 3D-aanzicht kon niet verstuurd worden. Probeer het opnieuw.",
        );
      default:
        return tf("aiRender.errGeneric", "Het genereren is niet gelukt. Probeer het zo nog eens.");
    }
  }

  async function generate() {
    const capture = captureRef.current;
    setOpen(true);
    setResult(null);
    if (!capture) {
      setError(tf("aiRender.errNoCapture", "Open eerst het 3D-aanzicht en probeer dan opnieuw."));
      return;
    }
    setError(null);
    setLoading(true);
    try {
      const image = capture();
      const res = await fetch("/api/kitchen-render", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ image, design: describeDesign(design) }),
      });
      const data = (await res.json()) as { ok?: boolean; image?: string; error?: string };
      if (!res.ok || !data.ok || !data.image) {
        console.error("[kitchen-render] mislukt:", res.status, data.error);
        setError(errorMessage(data.error));
      } else {
        setResult(data.image);
      }
    } catch (err) {
      console.error("[kitchen-render] netwerkfout:", err);
      setError(tf("aiRender.errNetwork", "Er ging iets mis bij het genereren."));
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <button
        type="button"
        onClick={generate}
        className="inline-flex items-center gap-2 rounded-full bg-clay-700 px-4 py-2 text-sm font-semibold text-cream transition-colors hover:bg-clay-800"
      >
        <Sparkles className="h-4 w-4" />
        {tf("aiRender.button", "Genereer realistisch beeld")}
      </button>

      {open && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-clay-900/60 p-4 backdrop-blur-sm"
          onClick={() => !loading && setOpen(false)}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-label={tf("aiRender.title", "Realistisch beeld")}
            className="relative max-h-[92vh] w-full max-w-2xl overflow-auto rounded-3xl border border-sand-200 bg-cream p-6 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              aria-label={tf("quote.closeAria", "Sluiten")}
              onClick={() => setOpen(false)}
              className="absolute right-4 top-4 grid h-9 w-9 place-items-center rounded-full text-clay-700 transition-colors hover:bg-sand-200"
            >
              <X className="h-5 w-5" />
            </button>
            <h3 className="font-display text-2xl text-ink">
              {tf("aiRender.title", "Realistisch beeld")}
            </h3>
            <p className="mt-1 text-sm text-ink-soft">
              {tf("aiRender.intro", "De AI maakt een fotorealistische impressie van jouw ontwerp.")}
            </p>

            <div className="mt-4 flex min-h-[280px] items-center justify-center rounded-2xl border border-sand-200 bg-sand-50 p-3">
              {loading && (
                <div
                  role="status"
                  className="flex flex-col items-center gap-2 text-center text-sm text-ink-soft"
                >
                  <Loader2 className="h-7 w-7 animate-spin text-terracotta-500" />
                  {tf("aiRender.loading", "Bezig met genereren… dit duurt ongeveer 15 seconden.")}
                </div>
              )}
              {!loading && error && (
                <div className="flex flex-col items-center gap-3 text-center">
                  <p role="alert" className="text-sm text-terracotta-700">
                    {error}
                  </p>
                  <button type="button" onClick={generate} className="btn btn-primary">
                    {tf("aiRender.retry", "Opnieuw proberen")}
                  </button>
                </div>
              )}
              {!loading && result && (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={result}
                  alt={tf("aiRender.alt", "Realistische impressie van de keuken")}
                  className="max-h-[60vh] w-full rounded-xl object-contain"
                />
              )}
            </div>

            {result && !loading && (
              <div className="mt-4 flex flex-wrap justify-end gap-2">
                <a href={result} download="keuken-impressie.png" className="btn btn-ghost">
                  <Download className="h-4 w-4" />
                  {tf("aiRender.download", "Downloaden")}
                </a>
                <button type="button" onClick={generate} className="btn btn-primary">
                  <Sparkles className="h-4 w-4" />
                  {tf("aiRender.newVariant", "Nieuwe variant")}
                </button>
              </div>
            )}

            <p className="mt-3 text-xs text-ink-soft">
              {tf(
                "aiRender.disclaimer",
                "Dit is een AI-impressie — een sfeerbeeld, geen technische tekening. De bestellijst blijft leidend.",
              )}
            </p>
          </div>
        </div>
      )}
    </>
  );
}
