"use client";

// "Genereer realistisch beeld" — legt het 3D-ontwerp vast en laat de AI er
// een fotorealistische impressie van maken.

import { useState, type RefObject } from "react";
import { Download, Loader2, Sparkles, X } from "lucide-react";
import { getAppliance } from "@/lib/planner/appliances";
import { getFrontFinish, getFrontStyle } from "@/lib/planner/catalog";
import { usePlanner } from "@/lib/planner/store";
import type { KitchenDesign, WallSide } from "@/lib/planner/types";

function wallLabel(w: WallSide): string {
  return w === "top"
    ? "achterwand"
    : w === "bottom"
      ? "voorzijde"
      : w === "left"
        ? "linkerwand"
        : "rechterwand";
}

/** Bouwt de beschrijving voor de beeld-AI uit het ontwerp. */
function buildPrompt(design: KitchenDesign): string {
  const style = getFrontStyle(design.frontStyleId)?.label ?? "vlakke";
  const finish = getFrontFinish(design.frontFinishId)?.label;
  const openings = design.openings.map(
    (o) => `${o.kind === "window" ? "een raam" : "een deur"} aan de ${wallLabel(o.wall)}`,
  );
  const appliances = [
    ...new Set(
      design.items
        .map((i) => (i.applianceId ? getAppliance(i.applianceId)?.label : null))
        .filter((l): l is string => !!l),
    ),
  ];
  return [
    "Maak van deze ruwe 3D-keukenweergave een fotorealistische interieurfoto.",
    "Behoud exact dezelfde indeling, kast- en apparaatposities, kleuren, raam- en",
    "deurposities en camerahoek.",
    `De kastfronten zijn in ${style} stijl${finish ? ` met een ${finish} afwerking` : ""}.`,
    appliances.length ? `Apparatuur: ${appliances.join(", ")}.` : "",
    openings.length ? `De ruimte heeft ${openings.join(" en ")}.` : "",
    "Natuurlijk daglicht, zachte schaduwen, professionele interieurfotografie,",
    "fotorealistisch, veel detail, warme moderne mediterrane keuken.",
    "Geen tekst of watermerk.",
  ]
    .filter(Boolean)
    .join(" ");
}

export function AiRenderPanel({
  captureRef,
}: {
  captureRef: RefObject<(() => string) | null>;
}) {
  const { design } = usePlanner();
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  async function generate() {
    const capture = captureRef.current;
    setOpen(true);
    setResult(null);
    if (!capture) {
      setError("Open eerst het 3D-aanzicht en probeer dan opnieuw.");
      return;
    }
    setError(null);
    setLoading(true);
    try {
      const image = capture();
      const res = await fetch("/api/kitchen-render", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ image, prompt: buildPrompt(design) }),
      });
      const data = (await res.json()) as { ok?: boolean; image?: string };
      if (!res.ok || !data.ok || !data.image) {
        setError("Het genereren is niet gelukt. Probeer het zo nog eens.");
      } else {
        setResult(data.image);
      }
    } catch {
      setError("Er ging iets mis bij het genereren.");
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
        Genereer realistisch beeld
      </button>

      {open && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-clay-900/60 p-4 backdrop-blur-sm"
          onClick={() => !loading && setOpen(false)}
        >
          <div
            className="relative max-h-[92vh] w-full max-w-2xl overflow-auto rounded-3xl border border-sand-200 bg-cream p-6 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              aria-label="Sluiten"
              onClick={() => setOpen(false)}
              className="absolute right-4 top-4 grid h-9 w-9 place-items-center rounded-full text-clay-700 transition-colors hover:bg-sand-200"
            >
              <X className="h-5 w-5" />
            </button>
            <h3 className="font-display text-2xl text-ink">Realistisch beeld</h3>
            <p className="mt-1 text-sm text-ink-soft">
              De AI maakt een fotorealistische impressie van jouw ontwerp.
            </p>

            <div className="mt-4 flex min-h-[280px] items-center justify-center rounded-2xl border border-sand-200 bg-sand-50 p-3">
              {loading && (
                <div className="flex flex-col items-center gap-2 text-center text-sm text-ink-soft">
                  <Loader2 className="h-7 w-7 animate-spin text-terracotta-500" />
                  Bezig met genereren… dit duurt ongeveer 15 seconden.
                </div>
              )}
              {!loading && error && (
                <div className="flex flex-col items-center gap-3 text-center">
                  <p className="text-sm text-terracotta-700">{error}</p>
                  <button type="button" onClick={generate} className="btn btn-primary">
                    Opnieuw proberen
                  </button>
                </div>
              )}
              {!loading && result && (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={result}
                  alt="Realistische impressie van de keuken"
                  className="max-h-[60vh] w-full rounded-xl object-contain"
                />
              )}
            </div>

            {result && !loading && (
              <div className="mt-4 flex flex-wrap justify-end gap-2">
                <a href={result} download="keuken-impressie.png" className="btn btn-ghost">
                  <Download className="h-4 w-4" />
                  Downloaden
                </a>
                <button type="button" onClick={generate} className="btn btn-primary">
                  <Sparkles className="h-4 w-4" />
                  Nieuwe variant
                </button>
              </div>
            )}

            <p className="mt-3 text-xs text-ink-soft">
              Dit is een AI-impressie — een sfeerbeeld, geen technische tekening.
              De bestellijst blijft leidend.
            </p>
          </div>
        </div>
      )}
    </>
  );
}
