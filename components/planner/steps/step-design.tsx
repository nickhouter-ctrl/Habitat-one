"use client";

// Stap — Ontwerpen: teken de keuken. Kies een kast of apparaat rechts; het
// verschijnt in de ruimte. In de plattegrond sleep je het op zijn plek; in het
// 3D-aanzicht bekijk je het en klik je elementen aan om verder te bouwen.

import { useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";
import { Box, Lightbulb, Map, Plus, RotateCw, Trash2, Undo2 } from "lucide-react";
import {
  carcassTypeMeta,
  carcassesByType,
  getCarcass,
  type Carcass,
  type CarcassType,
} from "@/lib/data/metod";
import {
  appliancesByCategory,
  applianceCategoryLabels,
  getAppliance,
} from "@/lib/planner/appliances";
import { applianceLayer } from "@/lib/planner/layout";
import { usePlanner } from "@/lib/planner/store";
import type { CabinetLayer, KitchenDesign, PlacedItem } from "@/lib/planner/types";
import { AiRenderPanel } from "../ai-render";
import { RoomCanvas } from "../room-canvas";
import { usePlannerT } from "../i18n";
import { Chip, PillToggle, StepHeading, TabButton, usePlannerShell } from "../ui";

// Het 3D-aanzicht laadt three.js — alleen client-side, los van de hoofdbundel.
const Room3D = dynamic(() => import("../room-3d").then((m) => m.Room3D), {
  ssr: false,
  loading: () => <Loading3D />,
});

function Loading3D() {
  const { tf } = usePlannerT();
  return (
    <div className="flex h-full items-center justify-center text-sm text-ink-soft">
      {tf("design.loading3d", "3D-weergave laden…")}
    </div>
  );
}

const TYPES_BY_LAYER: Record<CabinetLayer, CarcassType[]> = {
  base: ["onderkast", "onderhoekkast", "hoge-kast"],
  wall: ["bovenkast", "bovenhoekkast", "opzetkast"],
};

/** Onderkant van een hangende kast in cm — gelijk aan room-3d (HANG_HEIGHT_CM). */
const HANG_HEIGHT_CM = 145;

/** Advies om een hoge kast óf bovenkast met een opzetkast tot het plafond af te maken. */
interface StackAdvice {
  tall: PlacedItem;
  tallCarcass: Carcass;
  gapCm: number;
  top: Carcass;
}

function stackAdvice(design: KitchenDesign): StackAdvice[] {
  const out: StackAdvice[] = [];
  for (const item of design.items) {
    if (item.kind !== "carcass" || !item.carcassId) continue;
    const c = getCarcass(item.carcassId);
    if (!c) continue;
    // Hoe hoog reikt deze kast nu? Een hoge kast staat op de vloer; een
    // bovenkast hangt met de onderkant op HANG_HEIGHT_CM.
    const topNow =
      c.placement === "hoog"
        ? c.h
        : c.placement === "boven"
          ? HANG_HEIGHT_CM + c.h
          : null;
    if (topNow == null) continue;
    const gapCm = design.ceilingHeightCm - topNow;
    if (gapCm < 30) continue;
    const alreadyTopped = design.items.some((o) => {
      if (o.instanceId === item.instanceId || !o.carcassId) return false;
      const oc = getCarcass(o.carcassId);
      return (
        oc?.placement === "opzet" &&
        Math.abs(o.cx - item.cx) < 25 &&
        Math.abs(o.cy - item.cy) < 25
      );
    });
    if (alreadyTopped) continue;
    const top = carcassesByType("opzetkast")
      .filter((o) => o.b === c.b && o.h <= gapCm)
      .reduce<Carcass | null>((best, o) => (!best || o.h > best.h ? o : best), null);
    if (!top) continue;
    out.push({ tall: item, tallCarcass: c, gapCm, top });
  }
  return out;
}

export function StepDesign() {
  const { design, stepIndex } = usePlanner();
  const { dispatch, undo, canUndo } = usePlannerShell();
  const { t, tf } = usePlannerT();
  const [view, setView] = useState<"2d" | "3d">("2d");
  const [layer, setLayer] = useState<CabinetLayer>("base");
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [tab, setTab] = useState<"appliances" | "cabinets">("appliances");
  const [cabType, setCabType] = useState<CarcassType>("onderkast");
  const [depthFilter, setDepthFilter] = useState<number | null>(null);
  // Functie om het 3D-canvas vast te leggen voor de AI-render.
  const captureRef = useRef<(() => string) | null>(null);

  // Een nieuw toegevoegd item wordt meteen geselecteerd — zo bouw je een rij
  // op: kast toevoegen klikt steeds aan de vorige vast.
  const prevCount = useRef(design.items.length);
  useEffect(() => {
    if (design.items.length > prevCount.current) {
      setSelectedId(design.items[design.items.length - 1].instanceId);
    }
    prevCount.current = design.items.length;
  }, [design.items]);

  const selected = design.items.find((i) => i.instanceId === selectedId) ?? null;
  const advice = stackAdvice(design);

  const switchLayer = (l: CabinetLayer) => {
    setLayer(l);
    setCabType(TYPES_BY_LAYER[l][0]);
    setDepthFilter(null);
    setSelectedId(null);
  };

  const applianceGroups = appliancesByCategory()
    .map((g) => ({ ...g, items: g.items.filter((a) => applianceLayer(a) === layer) }))
    .filter((g) => g.items.length > 0);

  // Kasten van het gekozen type, gefilterd en gesorteerd op diepte.
  const allCabs = carcassesByType(cabType);
  const depths = [...new Set(allCabs.map((c) => c.d))].sort((a, b) => a - b);
  const cabs = (depthFilter == null ? allCabs : allCabs.filter((c) => c.d === depthFilter))
    .slice()
    .sort((a, b) => a.d - b.d || a.b - b.b);

  const addAfter = selectedId ?? undefined;

  const typeLabel = (type: CarcassType) =>
    tf(`catalog.carcassTypes.${type}`, carcassTypeMeta[type].label);
  const cabName = (c: Carcass) => `${typeLabel(c.type)} ${c.b} cm`;
  const itemName = (item: PlacedItem): string => {
    if (item.applianceId) {
      const a = getAppliance(item.applianceId);
      return a
        ? tf(`catalog.appliances.${a.id}`, a.label)
        : tf("design.fallbackAppliance", "Apparaat");
    }
    if (item.carcassId) {
      const c = getCarcass(item.carcassId);
      return c ? cabName(c) : tf("design.fallbackCabinet", "Kast");
    }
    return tf("design.fallbackItem", "Item");
  };

  return (
    <div className="space-y-4">
      <StepHeading
        eyebrow={
          t.has("stepper.stepOf")
            ? t("stepper.stepOf", { current: stepIndex + 1, total: 4 })
            : `Stap ${stepIndex + 1} van 4`
        }
        title={tf("design.title", "Teken je keuken")}
        intro={tf(
          "design.intro",
          "Kies rechts een kast of apparaat — het verschijnt in de ruimte. In de plattegrond sleep je het op zijn plek; tegen een wand of een andere kast klikt het vast, in het midden maak je er een keukeneiland van.",
        )}
      />

      {/* Werkbalk: weergave + laag + ongedaan maken */}
      <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
        <div className="flex gap-1.5">
          <PillToggle active={view === "2d"} onClick={() => setView("2d")}>
            <Map className="h-4 w-4" aria-hidden />
            {tf("design.view2d", "Plattegrond")}
          </PillToggle>
          <PillToggle active={view === "3d"} onClick={() => setView("3d")}>
            <Box className="h-4 w-4" aria-hidden />
            {tf("design.view3d", "3D-aanzicht")}
          </PillToggle>
        </div>
        <div className="hidden h-6 w-px bg-sand-300 sm:block" aria-hidden />
        <div className="flex gap-1.5">
          <PillToggle active={layer === "base"} onClick={() => switchLayer("base")}>
            {tf("design.layerBase", "Onderkasten")}
          </PillToggle>
          <PillToggle active={layer === "wall"} onClick={() => switchLayer("wall")}>
            {tf("design.layerWall", "Bovenkasten")}
          </PillToggle>
        </div>
        <div className="hidden h-6 w-px bg-sand-300 sm:block" aria-hidden />
        <button
          type="button"
          onClick={undo}
          disabled={!canUndo}
          className={
            canUndo
              ? "flex items-center gap-1.5 rounded-full border border-sand-300 bg-white px-4 py-1.5 text-sm text-ink transition-colors hover:border-ink"
              : "flex cursor-not-allowed items-center gap-1.5 rounded-full border border-sand-200 bg-white px-4 py-1.5 text-sm text-sand-400"
          }
        >
          <Undo2 className="h-4 w-4" aria-hidden />
          {tf("design.undo", "Ongedaan maken")}
        </button>
      </div>

      {advice.length > 0 && (
        <div className="rounded-xl border border-gold-400 bg-gold-400/10 p-3">
          <div className="flex items-center gap-1.5 text-sm font-semibold text-ink">
            <Lightbulb className="h-4 w-4 text-gold-600" aria-hidden />
            {tf("design.advice.title", "Advies — keuken tot het plafond")}
          </div>
          <ul className="mt-2 space-y-2">
            {advice.map((a) => {
              const values = {
                h: a.tallCarcass.h,
                gap: a.gapCm,
                ceiling: design.ceilingHeightCm,
                topH: a.top.h,
              };
              const body =
                a.tallCarcass.placement === "boven"
                  ? tf(
                      "design.advice.bodyWall",
                      `Een bovenkast van ${values.h} cm laat ${values.gap} cm vrij tot het plafond (${values.ceiling} cm). Met een opzetkast van ${values.topH} cm maak je het helemaal tot het plafond af.`,
                      values,
                    )
                  : tf(
                      "design.advice.bodyTall",
                      `Een hoge kast van ${values.h} cm laat ${values.gap} cm vrij tot het plafond (${values.ceiling} cm). Met een opzetkast van ${values.topH} cm maak je het helemaal tot het plafond af.`,
                      values,
                    );
              return (
                <li
                  key={a.tall.instanceId}
                  className="flex flex-wrap items-center justify-between gap-2 text-sm"
                >
                  <span className="text-ink-soft">{body}</span>
                  <button
                    type="button"
                    onClick={() =>
                      dispatch({
                        type: "ADD_STACKED",
                        carcassId: a.top.id,
                        onInstanceId: a.tall.instanceId,
                      })
                    }
                    className="shrink-0 rounded-full bg-gold-500 px-4 py-1.5 text-sm font-medium text-whitewash hover:bg-gold-600"
                  >
                    {tf("design.advice.add", "Opzetkast toevoegen")}
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      )}

      <div className="grid gap-6 lg:grid-cols-[1fr_19rem]">
        {/* Canvas + selectie */}
        <div className="space-y-3">
          {selected ? (
            <SelectedBar
              name={itemName(selected)}
              onRotate={() => dispatch({ type: "ROTATE_ITEM", instanceId: selected.instanceId })}
              onRemove={() => {
                dispatch({ type: "REMOVE_ITEM", instanceId: selected.instanceId });
                setSelectedId(null);
              }}
            />
          ) : (
            <p className="text-sm text-ink-soft">
              {tf(
                "design.clickHint",
                "Klik op een geplaatst item om het te draaien, te verwijderen of er kasten aan vast te klikken.",
              )}
            </p>
          )}

          {view === "2d" ? (
            <RoomCanvas activeLayer={layer} selectedId={selectedId} onSelect={setSelectedId} />
          ) : (
            <div className="space-y-2">
              <div className="h-[400px] overflow-hidden rounded-xl border border-sand-300 bg-sand-100 sm:h-[500px] lg:h-[560px]">
                <Room3D
                  selectedId={selectedId}
                  onSelect={setSelectedId}
                  captureRef={captureRef}
                />
              </div>
              <div className="flex flex-wrap items-center justify-between gap-3">
                <p className="text-sm text-ink-soft">
                  {tf(
                    "design.hint3d",
                    "Sleep om te draaien, scroll om te zoomen. Klik een element om het te selecteren.",
                  )}
                </p>
                <AiRenderPanel captureRef={captureRef} />
              </div>
            </div>
          )}
        </div>

        {/* Toevoeg-paneel */}
        <aside className="lg:sticky lg:top-24 lg:self-start">
          <div className="rounded-xl border border-sand-300 bg-white">
            <div className="border-b border-sand-200 p-3">
              <h3 className="text-sm font-semibold text-ink">
                {layer === "base"
                  ? tf("design.addBase", "Toevoegen — onderlaag")
                  : tf("design.addWall", "Toevoegen — bovenlaag")}
              </h3>
              <div className="mt-2 flex gap-1.5">
                <TabButton active={tab === "appliances"} onClick={() => setTab("appliances")}>
                  {tf("design.tabAppliances", "Apparatuur")}
                </TabButton>
                <TabButton active={tab === "cabinets"} onClick={() => setTab("cabinets")}>
                  {tf("design.tabCabinets", "Kasten")}
                </TabButton>
              </div>
            </div>

            <div className="max-h-[26rem] overflow-y-auto p-3">
              {tab === "appliances" ? (
                <div className="space-y-4">
                  {applianceGroups.length === 0 && (
                    <p className="text-sm text-ink-soft">
                      {tf("design.noAppliances", "Geen apparatuur voor deze laag.")}
                    </p>
                  )}
                  {applianceGroups.map((group) => (
                    <div key={group.category}>
                      <div className="mb-1.5 text-xs font-semibold uppercase tracking-wide text-ink-soft">
                        {tf(
                          `catalog.applianceCategories.${group.category}`,
                          applianceCategoryLabels[group.category],
                        )}
                      </div>
                      <div className="space-y-1.5">
                        {group.items.map((a) => {
                          const name = tf(`catalog.appliances.${a.id}`, a.label);
                          return (
                            <AddRow
                              key={a.id}
                              title={name}
                              detail={`${a.widthCm} × ${a.heightCm} × ${a.depthCm} cm`}
                              addLabel={tf("design.addAria", `${name} toevoegen`, { name })}
                              onAdd={() =>
                                dispatch({
                                  type: "ADD_APPLIANCE",
                                  applianceId: a.id,
                                  afterInstanceId: addAfter,
                                })
                              }
                            />
                          );
                        })}
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="space-y-3">
                  <label className="block">
                    <span className="text-xs font-semibold uppercase tracking-wide text-ink-soft">
                      {tf("design.cabType", "Soort kast")}
                    </span>
                    <select
                      value={cabType}
                      onChange={(e) => {
                        setCabType(e.target.value as CarcassType);
                        setDepthFilter(null);
                      }}
                      className="mt-1 w-full rounded-lg border border-sand-300 bg-white px-2.5 py-2 text-sm text-ink"
                    >
                      {TYPES_BY_LAYER[layer].map((tp) => (
                        <option key={tp} value={tp}>
                          {typeLabel(tp)}
                        </option>
                      ))}
                    </select>
                  </label>

                  {depths.length > 1 && (
                    <div>
                      <div className="mb-1 text-xs font-semibold uppercase tracking-wide text-ink-soft">
                        {tf("design.depth", "Diepte")}
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        <Chip active={depthFilter == null} onClick={() => setDepthFilter(null)}>
                          {tf("design.all", "Alle")}
                        </Chip>
                        {depths.map((d) => (
                          <Chip
                            key={d}
                            active={depthFilter === d}
                            onClick={() => setDepthFilter(d)}
                          >
                            {d} cm
                          </Chip>
                        ))}
                      </div>
                    </div>
                  )}

                  <div className="space-y-1.5">
                    {cabs.map((c) => {
                      const name = cabName(c);
                      return (
                        <AddRow
                          key={c.id}
                          title={name}
                          detail={tf(
                            "design.dims",
                            `breedte ${c.b} · diepte ${c.d} · hoogte ${c.h} cm`,
                            { b: c.b, d: c.d, h: c.h },
                          )}
                          addLabel={tf("design.addAria", `${name} toevoegen`, { name })}
                          onAdd={() =>
                            dispatch({
                              type: "ADD_CARCASS",
                              carcassId: c.id,
                              afterInstanceId: addAfter,
                            })
                          }
                        />
                      );
                    })}
                  </div>
                </div>
              )}
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}

function SelectedBar({
  name,
  onRotate,
  onRemove,
}: {
  name: string;
  onRotate: () => void;
  onRemove: () => void;
}) {
  const { tf } = usePlannerT();
  return (
    <div className="flex flex-wrap items-center justify-between gap-2 rounded-lg border border-terracotta-500 bg-terracotta-500/5 px-3 py-2">
      <span className="text-sm font-medium text-ink">
        {tf("design.selected", `Geselecteerd: ${name}`, { name })}
      </span>
      <div className="flex gap-1.5">
        <button
          type="button"
          onClick={onRotate}
          className="flex items-center gap-1.5 rounded-full border border-sand-300 bg-white px-3 py-1 text-sm text-ink hover:border-ink"
        >
          <RotateCw className="h-3.5 w-3.5" aria-hidden />
          {tf("design.rotate", "Draaien")}
        </button>
        <button
          type="button"
          onClick={onRemove}
          className="flex items-center gap-1.5 rounded-full border border-sand-300 bg-white px-3 py-1 text-sm text-terracotta-600 hover:border-terracotta-500"
        >
          <Trash2 className="h-3.5 w-3.5" aria-hidden />
          {tf("design.remove", "Verwijderen")}
        </button>
      </div>
    </div>
  );
}

function AddRow({
  title,
  detail,
  addLabel,
  onAdd,
}: {
  title: string;
  detail: string;
  addLabel: string;
  onAdd: () => void;
}) {
  return (
    <div className="flex items-center justify-between gap-2 rounded-lg border border-sand-200 bg-sand-50 px-2.5 py-1.5 transition-colors hover:border-sand-300">
      <div className="min-w-0">
        <div className="truncate text-sm text-ink">{title}</div>
        <div className="truncate text-[11px] text-ink-soft">{detail}</div>
      </div>
      <button
        type="button"
        aria-label={addLabel}
        onClick={onAdd}
        className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-terracotta-500 text-whitewash transition-colors hover:bg-terracotta-600"
      >
        <Plus className="h-4 w-4" aria-hidden />
      </button>
    </div>
  );
}
