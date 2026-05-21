"use client";

// Stap 2 — Ontwerpen: teken de keuken. Kies een kast of apparaat rechts; het
// verschijnt in de ruimte. In de plattegrond sleep je het op zijn plek; in het
// 3D-aanzicht bekijk je het en klik je elementen aan om verder te bouwen.

import { useEffect, useRef, useState, type ReactNode } from "react";
import dynamic from "next/dynamic";
import { Box, Lightbulb, Map, Plus, RotateCw, Trash2 } from "lucide-react";
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
import { cn } from "@/lib/utils";
import { RoomCanvas } from "../room-canvas";
import { StepHeading } from "../ui";

// Het 3D-aanzicht laadt three.js — alleen client-side, los van de hoofdbundel.
const Room3D = dynamic(() => import("../room-3d").then((m) => m.Room3D), {
  ssr: false,
  loading: () => (
    <div className="flex h-full items-center justify-center text-sm text-ink-soft">
      3D-weergave laden…
    </div>
  ),
});

const TYPES_BY_LAYER: Record<CabinetLayer, CarcassType[]> = {
  base: ["onderkast", "onderhoekkast", "hoge-kast"],
  wall: ["bovenkast", "bovenhoekkast", "opzetkast"],
};

/** Advies om een hoge kast met een opzetkast tot het plafond af te maken. */
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
    if (!c || c.placement !== "hoog") continue;
    const gapCm = design.ceilingHeightCm - c.h;
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
  const { design, dispatch } = usePlanner();
  const [view, setView] = useState<"2d" | "3d">("2d");
  const [layer, setLayer] = useState<CabinetLayer>("base");
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [tab, setTab] = useState<"appliances" | "cabinets">("appliances");
  const [cabType, setCabType] = useState<CarcassType>("onderkast");
  const [depthFilter, setDepthFilter] = useState<number | null>(null);

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

  return (
    <div className="space-y-4">
      <StepHeading
        title="Teken je keuken"
        intro="Kies rechts een kast of apparaat — het verschijnt in de ruimte. In de plattegrond sleep je het op zijn plek; tegen een wand of een andere kast klikt het vast, in het midden maak je er een keukeneiland van."
      />

      {/* Werkbalk: weergave + laag */}
      <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
        <div className="flex gap-1.5">
          <ToggleButton active={view === "2d"} onClick={() => setView("2d")}>
            <Map className="h-4 w-4" />
            Plattegrond
          </ToggleButton>
          <ToggleButton active={view === "3d"} onClick={() => setView("3d")}>
            <Box className="h-4 w-4" />
            3D-aanzicht
          </ToggleButton>
        </div>
        <div className="hidden h-6 w-px bg-sand-300 sm:block" />
        <div className="flex gap-1.5">
          <ToggleButton active={layer === "base"} onClick={() => switchLayer("base")}>
            Onderkasten
          </ToggleButton>
          <ToggleButton active={layer === "wall"} onClick={() => switchLayer("wall")}>
            Bovenkasten
          </ToggleButton>
        </div>
      </div>

      {advice.length > 0 && (
        <div className="rounded-xl border border-gold-400 bg-gold-400/10 p-3">
          <div className="flex items-center gap-1.5 text-sm font-semibold text-ink">
            <Lightbulb className="h-4 w-4 text-gold-600" />
            Advies — keuken tot het plafond
          </div>
          <ul className="mt-2 space-y-2">
            {advice.map((a) => (
              <li
                key={a.tall.instanceId}
                className="flex flex-wrap items-center justify-between gap-2 text-sm"
              >
                <span className="text-ink-soft">
                  Een hoge kast van {a.tallCarcass.h} cm laat {a.gapCm} cm vrij tot
                  het plafond ({design.ceilingHeightCm} cm). Met een opzetkast van{" "}
                  {a.top.h} cm maak je het helemaal tot het plafond af.
                </span>
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
                  Opzetkast toevoegen
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}

      <div className="grid gap-6 lg:grid-cols-[1fr_19rem]">
        {/* Canvas + selectie */}
        <div className="space-y-3">
          {selected ? (
            <SelectedBar
              name={itemName(selected.carcassId, selected.applianceId)}
              onRotate={() => dispatch({ type: "ROTATE_ITEM", instanceId: selected.instanceId })}
              onRemove={() => {
                dispatch({ type: "REMOVE_ITEM", instanceId: selected.instanceId });
                setSelectedId(null);
              }}
            />
          ) : (
            <p className="text-sm text-ink-soft">
              Klik op een geplaatst item om het te draaien, te verwijderen of er
              kasten aan vast te klikken.
            </p>
          )}

          {view === "2d" ? (
            <RoomCanvas activeLayer={layer} selectedId={selectedId} onSelect={setSelectedId} />
          ) : (
            <div className="space-y-2">
              <div className="h-[460px] overflow-hidden rounded-xl border border-sand-300 bg-sand-100 sm:h-[540px]">
                <Room3D selectedId={selectedId} onSelect={setSelectedId} />
              </div>
              <p className="text-sm text-ink-soft">
                Sleep om te draaien, scroll om te zoomen. Klik een element om het
                te selecteren; rechts kun je er kasten aan toevoegen.
              </p>
            </div>
          )}
        </div>

        {/* Toevoeg-paneel */}
        <aside className="lg:sticky lg:top-24 lg:self-start">
          <div className="rounded-xl border border-sand-300 bg-white">
            <div className="border-b border-sand-200 p-3">
              <h3 className="text-sm font-semibold text-ink">
                Toevoegen — {layer === "base" ? "onderlaag" : "bovenlaag"}
              </h3>
              <div className="mt-2 flex gap-1.5">
                <TabButton active={tab === "appliances"} onClick={() => setTab("appliances")}>
                  Apparatuur
                </TabButton>
                <TabButton active={tab === "cabinets"} onClick={() => setTab("cabinets")}>
                  Kasten
                </TabButton>
              </div>
            </div>

            <div className="max-h-[26rem] overflow-y-auto p-3">
              {tab === "appliances" ? (
                <div className="space-y-4">
                  {applianceGroups.length === 0 && (
                    <p className="text-sm text-ink-soft">Geen apparatuur voor deze laag.</p>
                  )}
                  {applianceGroups.map((group) => (
                    <div key={group.category}>
                      <div className="mb-1.5 text-xs font-semibold uppercase tracking-wide text-ink-soft">
                        {applianceCategoryLabels[group.category]}
                      </div>
                      <div className="space-y-1.5">
                        {group.items.map((a) => (
                          <AddRow
                            key={a.id}
                            title={a.label}
                            detail={`${a.widthCm} × ${a.heightCm} × ${a.depthCm} cm`}
                            onAdd={() =>
                              dispatch({
                                type: "ADD_APPLIANCE",
                                applianceId: a.id,
                                afterInstanceId: addAfter,
                              })
                            }
                          />
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="space-y-3">
                  <label className="block">
                    <span className="text-xs font-semibold uppercase tracking-wide text-ink-soft">
                      Soort kast
                    </span>
                    <select
                      value={cabType}
                      onChange={(e) => {
                        setCabType(e.target.value as CarcassType);
                        setDepthFilter(null);
                      }}
                      className="mt-1 w-full rounded-lg border border-sand-300 bg-white px-2.5 py-2 text-sm text-ink"
                    >
                      {TYPES_BY_LAYER[layer].map((t) => (
                        <option key={t} value={t}>
                          {carcassTypeMeta[t].label}
                        </option>
                      ))}
                    </select>
                  </label>

                  {depths.length > 1 && (
                    <div>
                      <div className="mb-1 text-xs font-semibold uppercase tracking-wide text-ink-soft">
                        Diepte
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        <DepthChip active={depthFilter == null} onClick={() => setDepthFilter(null)}>
                          Alle
                        </DepthChip>
                        {depths.map((d) => (
                          <DepthChip
                            key={d}
                            active={depthFilter === d}
                            onClick={() => setDepthFilter(d)}
                          >
                            {d} cm
                          </DepthChip>
                        ))}
                      </div>
                    </div>
                  )}

                  <div className="space-y-1.5">
                    {cabs.map((c) => (
                      <AddRow
                        key={c.id}
                        title={`${carcassTypeMeta[c.type].label} ${c.b} cm`}
                        detail={`breedte ${c.b} · diepte ${c.d} · hoogte ${c.h} cm`}
                        onAdd={() =>
                          dispatch({
                            type: "ADD_CARCASS",
                            carcassId: c.id,
                            afterInstanceId: addAfter,
                          })
                        }
                      />
                    ))}
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

/** Leesbare naam van een item op basis van casco/apparaat. */
function itemName(carcassId: string | null, applianceId: string | null): string {
  if (applianceId) return getAppliance(applianceId)?.label ?? "Apparaat";
  if (carcassId) {
    const c = getCarcass(carcassId);
    return c ? `${carcassTypeMeta[c.type].label} ${c.b} cm` : "Kast";
  }
  return "Item";
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
  return (
    <div className="flex flex-wrap items-center justify-between gap-2 rounded-lg border border-terracotta-500 bg-terracotta-500/5 px-3 py-2">
      <span className="text-sm font-medium text-ink">Geselecteerd: {name}</span>
      <div className="flex gap-1.5">
        <button
          type="button"
          onClick={onRotate}
          className="flex items-center gap-1.5 rounded-full border border-sand-300 bg-white px-3 py-1 text-sm text-ink hover:border-ink"
        >
          <RotateCw className="h-3.5 w-3.5" />
          Draaien
        </button>
        <button
          type="button"
          onClick={onRemove}
          className="flex items-center gap-1.5 rounded-full border border-sand-300 bg-white px-3 py-1 text-sm text-terracotta-600 hover:border-terracotta-500"
        >
          <Trash2 className="h-3.5 w-3.5" />
          Verwijderen
        </button>
      </div>
    </div>
  );
}

function ToggleButton({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "flex items-center gap-1.5 rounded-full border px-4 py-1.5 text-sm transition-colors",
        active
          ? "border-terracotta-500 bg-terracotta-500 text-whitewash"
          : "border-sand-300 bg-white text-ink hover:border-sand-400",
      )}
    >
      {children}
    </button>
  );
}

function TabButton({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "flex-1 rounded-lg border px-3 py-1.5 text-sm font-medium transition-colors",
        active
          ? "border-terracotta-500 bg-terracotta-500 text-whitewash"
          : "border-sand-300 bg-white text-ink hover:border-sand-400",
      )}
    >
      {children}
    </button>
  );
}

function DepthChip({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "rounded-full border px-2.5 py-1 text-xs transition-colors",
        active
          ? "border-terracotta-500 bg-terracotta-500 text-whitewash"
          : "border-sand-300 bg-white text-ink hover:border-sand-400",
      )}
    >
      {children}
    </button>
  );
}

function AddRow({
  title,
  detail,
  onAdd,
}: {
  title: string;
  detail: string;
  onAdd: () => void;
}) {
  return (
    <div className="flex items-center justify-between gap-2 rounded-lg border border-sand-200 bg-sand-50 px-2.5 py-1.5">
      <div className="min-w-0">
        <div className="truncate text-sm text-ink">{title}</div>
        <div className="truncate text-[11px] text-ink-soft">{detail}</div>
      </div>
      <button
        type="button"
        aria-label={`${title} toevoegen`}
        onClick={onAdd}
        className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-terracotta-500 text-whitewash hover:bg-terracotta-600"
      >
        <Plus className="h-4 w-4" />
      </button>
    </div>
  );
}
