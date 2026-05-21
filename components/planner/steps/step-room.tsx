"use client";

// Stap 1 — Ruimte: eerst de ruimte maken. De gebruiker geeft de breedte,
// diepte en plafondhoogte op; daarna wordt er in de volgende stap getekend.

import { carcassColors } from "@/lib/data/metod";
import { usePlanner } from "@/lib/planner/store";
import { cn } from "@/lib/utils";
import { NumberField, StepHeading } from "../ui";

const COLOR_SWATCH: Record<string, string> = {
  wit: "#f1ece2",
  "houtpatroon-zwart": "#2c2620",
};
const COLOR_LABEL: Record<string, string> = {
  wit: "Wit",
  "houtpatroon-zwart": "Houtpatroon zwart",
};

export function StepRoom() {
  const { design, dispatch } = usePlanner();
  const { roomWidthCm: rw, roomDepthCm: rd } = design;

  return (
    <div className="space-y-8">
      <StepHeading
        title="Maak eerst je ruimte"
        intro="Geef de afmetingen van de keukenruimte op. Daarna teken je in de volgende stap de kasten en apparatuur er rechtstreeks in."
      />

      <div className="grid gap-8 lg:grid-cols-2">
        <div className="space-y-4">
          <div className="grid gap-4 sm:grid-cols-2">
            <NumberField
              label="Breedte van de ruimte"
              value={rw}
              min={120}
              max={1200}
              onChange={(cm) => dispatch({ type: "SET_ROOM_WIDTH", cm })}
            />
            <NumberField
              label="Diepte van de ruimte"
              value={rd}
              min={120}
              max={1200}
              onChange={(cm) => dispatch({ type: "SET_ROOM_DEPTH", cm })}
            />
            <NumberField
              label="Plafondhoogte"
              value={design.ceilingHeightCm}
              min={200}
              max={360}
              onChange={(cm) => dispatch({ type: "SET_CEILING", cm })}
            />
          </div>
          <p className="text-sm text-ink-soft">
            Twijfel je over de maten? Vul een schatting in — je kunt ze later
            altijd aanpassen.
          </p>
        </div>

        {/* Live voorbeeld van de lege ruimte (van bovenaf) */}
        <div className="flex flex-col items-center justify-center rounded-xl border border-sand-300 bg-sand-50 p-4 sm:p-6">
          <div className="text-xs text-ink-soft">{rw} cm</div>
          <div className="flex w-full items-stretch justify-center gap-1.5">
            <div
              className="flex items-center text-xs text-ink-soft"
              style={{ writingMode: "vertical-rl" }}
            >
              {rd} cm
            </div>
            <div
              className="w-full max-w-[280px] rounded-lg border-2 border-ink/40 bg-sand-100"
              style={{ aspectRatio: `${rw} / ${rd}` }}
            />
          </div>
          <div className="mt-3 text-sm text-ink-soft">Jouw ruimte, van bovenaf gezien</div>
        </div>
      </div>

      <section>
        <h3 className="mb-1 text-sm font-semibold uppercase tracking-wide text-ink-soft">
          Cascokleur
        </h3>
        <p className="mb-3 text-sm text-ink-soft">
          De kleur van de kale basiskasten. De fronten kies je later — die dekken
          de casco&apos;s grotendeels af.
        </p>
        <div className="flex flex-wrap gap-3">
          {carcassColors.map((c) => {
            const selected = design.carcassColor === c;
            return (
              <button
                key={c}
                type="button"
                onClick={() => dispatch({ type: "SET_CARCASS_COLOR", color: c })}
                className={cn(
                  "flex items-center gap-2.5 rounded-xl border px-4 py-3 transition-all",
                  selected
                    ? "border-terracotta-500 bg-terracotta-500/5 ring-1 ring-terracotta-500"
                    : "border-sand-300 bg-white hover:border-sand-400",
                )}
              >
                <span
                  className="h-7 w-7 rounded-md border border-sand-300"
                  style={{ backgroundColor: COLOR_SWATCH[c] }}
                />
                <span className="text-sm font-medium text-ink">{COLOR_LABEL[c]}</span>
              </button>
            );
          })}
        </div>
      </section>
    </div>
  );
}
