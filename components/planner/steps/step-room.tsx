"use client";

// Stap 1 — Ruimte: eerst de ruimte maken. De gebruiker geeft de breedte,
// diepte en plafondhoogte op, en geeft aan waar het raam en de deur zitten.

import { Plus, X } from "lucide-react";
import { carcassColors } from "@/lib/data/metod";
import { usePlanner, type PlannerAction } from "@/lib/planner/store";
import type { KitchenDesign, Opening, WallSide } from "@/lib/planner/types";
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

const WALLS: { id: WallSide; label: string }[] = [
  { id: "top", label: "Boven" },
  { id: "bottom", label: "Onder" },
  { id: "left", label: "Links" },
  { id: "right", label: "Rechts" },
];

const WINDOW_WIDTHS = [60, 80, 100, 120, 140, 160, 180, 200, 240];
const DOOR_WIDTHS = [70, 80, 90, 100, 110, 120];

export function StepRoom() {
  const { design, dispatch } = usePlanner();
  const { roomWidthCm: rw, roomDepthCm: rd } = design;

  return (
    <div className="space-y-8">
      <StepHeading
        title="Maak eerst je ruimte"
        intro="Geef de afmetingen op en geef aan waar het raam en de deur zitten. Daarna teken je in de volgende stap de keuken."
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

        <RoomPreview design={design} />
      </div>

      {/* Raam & deur */}
      <section>
        <h3 className="mb-1 text-sm font-semibold uppercase tracking-wide text-ink-soft">
          Raam &amp; deur
        </h3>
        <p className="mb-3 text-sm text-ink-soft">
          Geef ongeveer aan waar een raam en de deur zitten. Dit helpt bij de
          indeling en maakt het 3D-aanzicht realistischer.
        </p>

        {design.openings.length > 0 && (
          <div className="mb-3 space-y-2.5">
            {design.openings.map((o) => (
              <OpeningRow key={o.id} o={o} design={design} dispatch={dispatch} />
            ))}
          </div>
        )}

        <div className="flex flex-wrap gap-2.5">
          <button
            type="button"
            onClick={() => dispatch({ type: "ADD_OPENING", kind: "window" })}
            className="inline-flex items-center gap-1.5 rounded-xl border border-sand-300 bg-white px-3.5 py-2 text-sm font-medium text-ink transition-colors hover:border-sand-400"
          >
            <Plus className="h-4 w-4 text-sea-600" /> Raam toevoegen
          </button>
          <button
            type="button"
            onClick={() => dispatch({ type: "ADD_OPENING", kind: "door" })}
            className="inline-flex items-center gap-1.5 rounded-xl border border-sand-300 bg-white px-3.5 py-2 text-sm font-medium text-ink transition-colors hover:border-sand-400"
          >
            <Plus className="h-4 w-4 text-terracotta-600" /> Deur toevoegen
          </button>
        </div>
      </section>

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

/** Top-down voorbeeld van de ruimte met de ramen en deuren erin. */
function RoomPreview({ design }: { design: KitchenDesign }) {
  const { roomWidthCm: rw, roomDepthCm: rd } = design;
  return (
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
          className="relative w-full max-w-[280px] rounded-lg border-2 border-ink/40 bg-sand-100"
          style={{ aspectRatio: `${rw} / ${rd}` }}
        >
          {design.openings.map((o) => (
            <OpeningMark key={o.id} o={o} rw={rw} rd={rd} />
          ))}
        </div>
      </div>
      <div className="mt-3 flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-xs text-ink-soft">
        <span>Van bovenaf gezien</span>
        <span className="flex items-center gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-sea-400" /> Raam
        </span>
        <span className="flex items-center gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-terracotta-500" /> Deur
        </span>
      </div>
    </div>
  );
}

/** Eén raam/deur als gekleurde balk op de rand van het voorbeeld. */
function OpeningMark({ o, rw, rd }: { o: Opening; rw: number; rd: number }) {
  const horizontal = o.wall === "top" || o.wall === "bottom";
  const len = horizontal ? rw : rd;
  const startPct = ((o.offsetCm - o.widthCm / 2) / len) * 100;
  const sizePct = (o.widthCm / len) * 100;
  const style: React.CSSProperties = horizontal
    ? { left: `${startPct}%`, width: `${sizePct}%`, height: 6 }
    : { top: `${startPct}%`, height: `${sizePct}%`, width: 6 };
  style[o.wall] = -3;
  return (
    <span
      className={cn(
        "absolute rounded-full",
        o.kind === "window" ? "bg-sea-400" : "bg-terracotta-500",
      )}
      style={style}
    />
  );
}

/** Bewerkrij voor één raam of deur. */
function OpeningRow({
  o,
  design,
  dispatch,
}: {
  o: Opening;
  design: KitchenDesign;
  dispatch: React.Dispatch<PlannerAction>;
}) {
  const wallLen =
    o.wall === "left" || o.wall === "right" ? design.roomDepthCm : design.roomWidthCm;
  const widths = o.kind === "window" ? WINDOW_WIDTHS : DOOR_WIDTHS;
  const update = (patch: Partial<Pick<Opening, "wall" | "offsetCm" | "widthCm">>) =>
    dispatch({ type: "UPDATE_OPENING", id: o.id, patch });

  return (
    <div className="rounded-xl border border-sand-300 bg-white p-3">
      <div className="flex items-center justify-between">
        <span className="flex items-center gap-2 text-sm font-semibold text-ink">
          <span
            className={cn(
              "h-3 w-3 rounded-full",
              o.kind === "window" ? "bg-sea-400" : "bg-terracotta-500",
            )}
          />
          {o.kind === "window" ? "Raam" : "Deur"}
        </span>
        <button
          type="button"
          aria-label="Verwijderen"
          onClick={() => dispatch({ type: "REMOVE_OPENING", id: o.id })}
          className="rounded-full p-1 text-ink-soft transition-colors hover:bg-sand-100 hover:text-terracotta-600"
        >
          <X className="h-4 w-4" />
        </button>
      </div>

      <div className="mt-2.5 grid gap-3 sm:grid-cols-2">
        <div>
          <span className="mb-1 block text-xs font-medium text-ink-soft">Wand</span>
          <div className="flex flex-wrap gap-1.5">
            {WALLS.map((w) => (
              <button
                key={w.id}
                type="button"
                onClick={() => update({ wall: w.id })}
                className={cn(
                  "rounded-lg border px-2.5 py-1.5 text-xs font-medium transition-colors",
                  o.wall === w.id
                    ? "border-terracotta-500 bg-terracotta-500/5 text-terracotta-700"
                    : "border-sand-300 text-ink-soft hover:border-sand-400",
                )}
              >
                {w.label}
              </button>
            ))}
          </div>
        </div>

        <div>
          <span className="mb-1 block text-xs font-medium text-ink-soft">Breedte</span>
          <select
            value={o.widthCm}
            onChange={(e) => update({ widthCm: Number(e.target.value) })}
            className="w-full rounded-lg border border-sand-300 bg-white px-2.5 py-1.5 text-sm text-ink focus:border-terracotta-400 focus:outline-none"
          >
            {widths.map((w) => (
              <option key={w} value={w}>
                {w} cm
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="mt-3">
        <span className="mb-1 block text-xs font-medium text-ink-soft">
          Positie op de wand — {Math.round(o.offsetCm)} cm
        </span>
        <input
          type="range"
          min={0}
          max={wallLen}
          step={5}
          value={o.offsetCm}
          onChange={(e) => update({ offsetCm: Number(e.target.value) })}
          className="w-full accent-terracotta-500"
        />
      </div>
    </div>
  );
}
