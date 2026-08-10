"use client";

// Stap 1 — Ruimte: kies de opstelling (recht, L of U), geef de afmetingen op
// en geef aan waar het raam en de deur zitten. Een gekozen opstelling zet
// meteen een startopstelling van onderkasten langs de gekozen wanden neer.

import { Plus, X } from "lucide-react";
import { carcassColors, carcassesByType } from "@/lib/data/metod";
import { itemBounds, largestStandardFit } from "@/lib/planner/layout";
import { usePlanner } from "@/lib/planner/store";
import type {
  KitchenDesign,
  Opening,
  PlacedItem,
  Rotation,
  WallSide,
} from "@/lib/planner/types";
import { cn } from "@/lib/utils";
import { usePlannerT } from "../i18n";
import {
  ChoiceCard,
  NumberField,
  StepHeading,
  usePlannerShell,
  type LayoutPreset,
} from "../ui";

const COLOR_SWATCH: Record<string, string> = {
  wit: "#f1ece2",
  "houtpatroon-zwart": "#2c2620",
};
const COLOR_LABEL: Record<string, string> = {
  wit: "Wit",
  "houtpatroon-zwart": "Houtpatroon zwart",
};

const WALL_FALLBACK: Record<WallSide, string> = {
  top: "Boven",
  bottom: "Onder",
  left: "Links",
  right: "Rechts",
};

const WINDOW_WIDTHS = [60, 80, 100, 120, 140, 160, 180, 200, 240];
const DOOR_WIDTHS = [70, 80, 90, 100, 110, 120];

const PRESETS: LayoutPreset[] = ["recht", "l", "u"];
const PRESET_FALLBACK: Record<LayoutPreset, { label: string; description: string }> = {
  recht: { label: "Recht", description: "Eén rechte wand — compact en overzichtelijk." },
  l: { label: "L-vorm", description: "Twee wanden in een hoek — veel werkblad." },
  u: { label: "U-vorm", description: "Drie wanden — maximale kast- en werkruimte." },
};

/** Welke wanden een opstelling met onderkasten vult. */
const PRESET_WALLS: Record<LayoutPreset, WallSide[]> = {
  recht: ["top"],
  l: ["top", "left"],
  u: ["top", "left", "right"],
};

/** Standaarddiepte van de geseede onderkasten in cm. */
const SEED_DEPTH_CM = 60;
/** Vrije ruimte naast een deur in cm. */
const DOOR_CLEARANCE_CM = 10;
/** Smallere kasten dan dit worden niet automatisch geplaatst. */
const SEED_MIN_WIDTH_CM = 40;

export function StepRoom() {
  const { design, stepIndex, dispatch } = usePlanner();
  const { layoutPreset, setLayoutPreset } = usePlannerShell();
  const { t, tf } = usePlannerT();
  const { roomWidthCm: rw, roomDepthCm: rd } = design;

  const applyPreset = (preset: LayoutPreset) => {
    setLayoutPreset(preset);
    // RESTORE vervangt het hele ontwerp in één keer — en is dus één undo-stap.
    dispatch({ type: "RESTORE", design: { ...design, items: seedItems(design, preset) } });
  };

  return (
    <div className="space-y-10">
      <StepHeading
        eyebrow={
          t.has("stepper.stepOf")
            ? t("stepper.stepOf", { current: stepIndex + 1, total: 4 })
            : `Stap ${stepIndex + 1} van 4`
        }
        title={tf("room.title", "Maak eerst je ruimte")}
        intro={tf(
          "room.intro",
          "Kies een opstelling, geef de afmetingen op en geef aan waar het raam en de deur zitten. Daarna teken je in de volgende stap de keuken.",
        )}
      />

      {/* Opstelling */}
      <section aria-labelledby="layout-heading">
        <h3
          id="layout-heading"
          className="mb-1 text-sm font-semibold uppercase tracking-wide text-ink-soft"
        >
          {tf("room.layout.title", "Opstelling")}
        </h3>
        <p className="mb-3 max-w-2xl text-sm text-ink-soft">
          {tf(
            "room.layout.intro",
            "Kies de vorm van je keuken — we zetten meteen een startopstelling van onderkasten neer. Alles is daarna vrij te verschuiven en aan te passen.",
          )}
        </p>
        <div className="grid gap-3 sm:grid-cols-3">
          {PRESETS.map((p) => (
            <ChoiceCard
              key={p}
              selected={layoutPreset === p}
              onClick={() => applyPreset(p)}
              className="flex flex-col items-start gap-2"
            >
              <PresetDiagram preset={p} />
              <span className="text-sm font-semibold text-ink">
                {tf(`room.layout.${p}.label`, PRESET_FALLBACK[p].label)}
              </span>
              <span className="text-xs text-ink-soft">
                {tf(`room.layout.${p}.description`, PRESET_FALLBACK[p].description)}
              </span>
            </ChoiceCard>
          ))}
        </div>
        {design.items.length > 0 && (
          <p className="mt-2 text-xs text-ink-soft">
            {tf(
              "room.layout.replaceNote",
              "Let op: een opstelling kiezen vervangt de kasten die er nu staan.",
            )}
          </p>
        )}
      </section>

      <div className="grid gap-8 lg:grid-cols-2">
        <div className="space-y-4">
          <div className="grid gap-4 sm:grid-cols-2">
            <NumberField
              label={tf("room.width", "Breedte van de ruimte")}
              value={rw}
              min={120}
              max={1200}
              onChange={(cm) => dispatch({ type: "SET_ROOM_WIDTH", cm })}
            />
            <NumberField
              label={tf("room.depth", "Diepte van de ruimte")}
              value={rd}
              min={120}
              max={1200}
              onChange={(cm) => dispatch({ type: "SET_ROOM_DEPTH", cm })}
            />
            <NumberField
              label={tf("room.ceiling", "Plafondhoogte")}
              value={design.ceilingHeightCm}
              min={200}
              max={360}
              onChange={(cm) => dispatch({ type: "SET_CEILING", cm })}
            />
          </div>
          <p className="text-sm text-ink-soft">
            {tf(
              "room.estimateHint",
              "Twijfel je over de maten? Vul een schatting in — je kunt ze later altijd aanpassen.",
            )}
          </p>
        </div>

        <RoomPreview design={design} />
      </div>

      {/* Raam & deur */}
      <section aria-labelledby="openings-heading">
        <h3
          id="openings-heading"
          className="mb-1 text-sm font-semibold uppercase tracking-wide text-ink-soft"
        >
          {tf("room.openings.title", "Raam & deur")}
        </h3>
        <p className="mb-3 max-w-2xl text-sm text-ink-soft">
          {tf(
            "room.openings.intro",
            "Geef ongeveer aan waar een raam en de deur zitten. Dit helpt bij de indeling en maakt het 3D-aanzicht realistischer.",
          )}
        </p>

        {design.openings.length > 0 && (
          <div className="mb-3 space-y-2.5">
            {design.openings.map((o) => (
              <OpeningRow key={o.id} o={o} design={design} />
            ))}
          </div>
        )}

        <div className="flex flex-wrap gap-2.5">
          <button
            type="button"
            onClick={() => dispatch({ type: "ADD_OPENING", kind: "window" })}
            className="inline-flex items-center gap-1.5 rounded-xl border border-sand-300 bg-white px-3.5 py-2 text-sm font-medium text-ink transition-colors hover:border-sand-400"
          >
            <Plus className="h-4 w-4 text-sea-600" aria-hidden />
            {tf("room.openings.addWindow", "Raam toevoegen")}
          </button>
          <button
            type="button"
            onClick={() => dispatch({ type: "ADD_OPENING", kind: "door" })}
            className="inline-flex items-center gap-1.5 rounded-xl border border-sand-300 bg-white px-3.5 py-2 text-sm font-medium text-ink transition-colors hover:border-sand-400"
          >
            <Plus className="h-4 w-4 text-terracotta-600" aria-hidden />
            {tf("room.openings.addDoor", "Deur toevoegen")}
          </button>
        </div>
      </section>

      {/* Cascokleur */}
      <section aria-labelledby="carcass-heading">
        <h3
          id="carcass-heading"
          className="mb-1 text-sm font-semibold uppercase tracking-wide text-ink-soft"
        >
          {tf("room.carcass.title", "Cascokleur")}
        </h3>
        <p className="mb-3 max-w-2xl text-sm text-ink-soft">
          {tf(
            "room.carcass.intro",
            "De kleur van de kale basiskasten. De fronten kies je later — die dekken de casco's grotendeels af.",
          )}
        </p>
        <div className="flex flex-wrap gap-3">
          {carcassColors.map((c) => (
            <ChoiceCard
              key={c}
              selected={design.carcassColor === c}
              onClick={() => dispatch({ type: "SET_CARCASS_COLOR", color: c })}
              className="flex items-center gap-2.5 !p-3"
            >
              <span
                aria-hidden
                className="h-7 w-7 rounded-md border border-sand-300"
                style={{ backgroundColor: COLOR_SWATCH[c] }}
              />
              <span className="pr-5 text-sm font-medium text-ink">
                {tf(`catalog.carcassColors.${c}`, COLOR_LABEL[c])}
              </span>
            </ChoiceCard>
          ))}
        </div>
      </section>
    </div>
  );
}

// --- Startopstelling -------------------------------------------------------

/**
 * Zet een startopstelling van onderkasten neer langs de wanden van de gekozen
 * opstelling. Deuren (met wat vrije ruimte) en de hoek met een al gevulde wand
 * worden overgeslagen; elk vrij stuk wordt gevuld met zo breed mogelijke
 * standaardkasten.
 */
function seedItems(design: KitchenDesign, preset: LayoutPreset): PlacedItem[] {
  const byWidth = new Map(
    carcassesByType("onderkast")
      .filter((c) => c.d === SEED_DEPTH_CM)
      .map((c) => [c.b, c]),
  );

  const items: PlacedItem[] = [];
  for (const wall of PRESET_WALLS[preset]) {
    const horizontal = wall === "top";
    const wallLen = horizontal ? design.roomWidthCm : design.roomDepthCm;

    // Bezette stukken langs deze wand: de hoek met de bovenwand-rij en deuren.
    const blocked: { start: number; end: number }[] = [];
    if (!horizontal) blocked.push({ start: 0, end: SEED_DEPTH_CM });
    for (const o of design.openings) {
      if (o.kind !== "door" || o.wall !== wall) continue;
      blocked.push({
        start: o.offsetCm - o.widthCm / 2 - DOOR_CLEARANCE_CM,
        end: o.offsetCm + o.widthCm / 2 + DOOR_CLEARANCE_CM,
      });
    }
    blocked.sort((a, b) => a.start - b.start);

    // Vrije segmenten tussen de bezette stukken.
    const segments: { start: number; end: number }[] = [];
    let cursor = 0;
    for (const b of blocked) {
      if (b.start - cursor > 1) segments.push({ start: cursor, end: b.start });
      cursor = Math.max(cursor, b.end);
    }
    if (wallLen - cursor > 1) segments.push({ start: cursor, end: wallLen });

    for (const seg of segments) {
      let at = seg.start;
      for (;;) {
        const fit = largestStandardFit(seg.end - at);
        if (!fit || fit < SEED_MIN_WIDTH_CM) break;
        const carcass = byWidth.get(fit);
        if (!carcass) break;
        const along = at + fit / 2;
        const pos: Pick<PlacedItem, "cx" | "cy" | "rotation"> =
          wall === "top"
            ? { cx: along, cy: SEED_DEPTH_CM / 2, rotation: 0 as Rotation }
            : wall === "left"
              ? { cx: SEED_DEPTH_CM / 2, cy: along, rotation: 90 as Rotation }
              : { cx: design.roomWidthCm - SEED_DEPTH_CM / 2, cy: along, rotation: 270 as Rotation };
        items.push({
          instanceId: crypto.randomUUID(),
          kind: "carcass",
          carcassId: carcass.id,
          applianceId: null,
          layer: "base",
          wall,
          ...pos,
        });
        at += fit;
      }
    }
  }
  return items;
}

/** Mini-plattegrond van een opstelling: kastenrijen langs de gevulde wanden. */
function PresetDiagram({ preset }: { preset: LayoutPreset }) {
  const walls = PRESET_WALLS[preset];
  return (
    <svg viewBox="0 0 96 64" aria-hidden className="h-16 w-24">
      <rect
        x="4"
        y="4"
        width="88"
        height="56"
        rx="3"
        fill="var(--color-sand-100)"
        stroke="var(--color-sand-400)"
        strokeWidth="1.5"
      />
      {walls.includes("top") && (
        <rect x="7" y="7" width="82" height="10" rx="2" fill="var(--color-terracotta-400)" />
      )}
      {walls.includes("left") && (
        <rect x="7" y="19" width="10" height="38" rx="2" fill="var(--color-terracotta-400)" />
      )}
      {walls.includes("right") && (
        <rect x="79" y="19" width="10" height="38" rx="2" fill="var(--color-terracotta-400)" />
      )}
    </svg>
  );
}

// --- Voorbeeld -------------------------------------------------------------

/** Top-down voorbeeld van de ruimte met openingen en geplaatste kasten. */
function RoomPreview({ design }: { design: KitchenDesign }) {
  const { tf } = usePlannerT();
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
          {design.items.map((i) => (
            <ItemMark key={i.instanceId} item={i} rw={rw} rd={rd} />
          ))}
          {design.openings.map((o) => (
            <OpeningMark key={o.id} o={o} rw={rw} rd={rd} />
          ))}
        </div>
      </div>
      <div className="mt-3 flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-xs text-ink-soft">
        <span>{tf("room.preview.topDown", "Van bovenaf gezien")}</span>
        <span className="flex items-center gap-1.5">
          <span aria-hidden className="h-2.5 w-2.5 rounded-full bg-sea-400" />
          {tf("room.preview.window", "Raam")}
        </span>
        <span className="flex items-center gap-1.5">
          <span aria-hidden className="h-2.5 w-2.5 rounded-full bg-terracotta-500" />
          {tf("room.preview.door", "Deur")}
        </span>
      </div>
    </div>
  );
}

/** Eén geplaatste kast als licht blokje in het voorbeeld. */
function ItemMark({ item, rw, rd }: { item: PlacedItem; rw: number; rd: number }) {
  const b = itemBounds(item);
  return (
    <span
      aria-hidden
      className={cn(
        "absolute rounded-[2px] border border-terracotta-400/60",
        item.layer === "base" ? "bg-terracotta-400/30" : "bg-transparent",
      )}
      style={{
        left: `${(b.x1 / rw) * 100}%`,
        top: `${(b.y1 / rd) * 100}%`,
        width: `${((b.x2 - b.x1) / rw) * 100}%`,
        height: `${((b.y2 - b.y1) / rd) * 100}%`,
      }}
    />
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

// --- Openingen -------------------------------------------------------------

/** Bewerkrij voor één raam of deur. */
function OpeningRow({ o, design }: { o: Opening; design: KitchenDesign }) {
  const { dispatch } = usePlanner();
  const { tf } = usePlannerT();
  const wallLen =
    o.wall === "left" || o.wall === "right" ? design.roomDepthCm : design.roomWidthCm;
  const widths = o.kind === "window" ? WINDOW_WIDTHS : DOOR_WIDTHS;
  const update = (patch: Partial<Pick<Opening, "wall" | "offsetCm" | "widthCm">>) =>
    dispatch({ type: "UPDATE_OPENING", id: o.id, patch });
  const kindLabel =
    o.kind === "window" ? tf("room.preview.window", "Raam") : tf("room.preview.door", "Deur");

  return (
    <div className="rounded-xl border border-sand-300 bg-white p-3">
      <div className="flex items-center justify-between">
        <span className="flex items-center gap-2 text-sm font-semibold text-ink">
          <span
            aria-hidden
            className={cn(
              "h-3 w-3 rounded-full",
              o.kind === "window" ? "bg-sea-400" : "bg-terracotta-500",
            )}
          />
          {kindLabel}
        </span>
        <button
          type="button"
          aria-label={`${kindLabel} — ${tf("room.openings.remove", "Verwijderen")}`}
          onClick={() => dispatch({ type: "REMOVE_OPENING", id: o.id })}
          className="rounded-full p-1 text-ink-soft transition-colors hover:bg-sand-100 hover:text-terracotta-600"
        >
          <X className="h-4 w-4" aria-hidden />
        </button>
      </div>

      <div className="mt-2.5 grid gap-3 sm:grid-cols-2">
        <div>
          <span className="mb-1 block text-xs font-medium text-ink-soft">
            {tf("room.openings.wall", "Wand")}
          </span>
          <div className="flex flex-wrap gap-1.5">
            {(Object.keys(WALL_FALLBACK) as WallSide[]).map((w) => (
              <button
                key={w}
                type="button"
                aria-pressed={o.wall === w}
                onClick={() => update({ wall: w })}
                className={cn(
                  "rounded-lg border px-2.5 py-1.5 text-xs font-medium transition-colors",
                  o.wall === w
                    ? "border-terracotta-500 bg-terracotta-500/5 text-terracotta-700"
                    : "border-sand-300 text-ink-soft hover:border-sand-400",
                )}
              >
                {tf(`room.walls.${w}`, WALL_FALLBACK[w])}
              </button>
            ))}
          </div>
        </div>

        <div>
          <label className="mb-1 block text-xs font-medium text-ink-soft" htmlFor={`w-${o.id}`}>
            {tf("room.openings.width", "Breedte")}
          </label>
          <select
            id={`w-${o.id}`}
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
        <label className="mb-1 block text-xs font-medium text-ink-soft" htmlFor={`p-${o.id}`}>
          {tf("room.openings.position", "Positie op de wand")} — {Math.round(o.offsetCm)} cm
        </label>
        <input
          id={`p-${o.id}`}
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
