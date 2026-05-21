"use client";

// Top-down teken-canvas van de keuken. De ruimte is een rechthoek; je sleept
// kastelementen op hun plek. Bij een wand klikken ze vast (snapping); midden
// in de ruimte blijven ze vrij staan — dan vormen ze een keukeneiland.

import {
  useRef,
  type CSSProperties,
  type PointerEvent as ReactPointerEvent,
  type RefObject,
} from "react";
import { carcassTypeMeta, getCarcass, type CarcassColor } from "@/lib/data/metod";
import { getAppliance } from "@/lib/planner/appliances";
import { getFrontFinish } from "@/lib/planner/catalog";
import {
  isFlushToWall,
  islandClearances,
  itemBounds,
  itemFootprint,
  largestStandardFit,
  wallGaps,
} from "@/lib/planner/layout";
import { usePlanner } from "@/lib/planner/store";
import type { CabinetLayer, KitchenDesign, PlacedItem, WallSide } from "@/lib/planner/types";
import { cn } from "@/lib/utils";

const CARCASS_HEX: Record<CarcassColor, string> = {
  wit: "#ece6da",
  "houtpatroon-zwart": "#3f3930",
};
const APPLIANCE_BG = "#7c828b";
const APPLIANCE_BORDER = "#565b63";

/** Leesbare tekstkleur (donker of crème) op een gegeven achtergrond. */
function readableText(hex: string): string {
  const n = parseInt(hex.replace("#", ""), 16);
  const lum = (0.299 * ((n >> 16) & 255) + 0.587 * ((n >> 8) & 255) + 0.114 * (n & 255)) / 255;
  return lum > 0.58 ? "#2a2018" : "#f4efe3";
}

/** Donkerder tint van een hex-kleur. */
function shade(hex: string, factor: number): string {
  const n = parseInt(hex.replace("#", ""), 16);
  const r = Math.round(Math.min(255, ((n >> 16) & 255) * factor));
  const g = Math.round(Math.min(255, ((n >> 8) & 255) * factor));
  const b = Math.round(Math.min(255, (n & 255) * factor));
  return `#${((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)}`;
}

/** Korte, leesbare naam van een item. */
function itemLabel(item: PlacedItem): string {
  if (item.kind === "appliance" && item.applianceId) {
    return getAppliance(item.applianceId)?.label ?? "Apparaat";
  }
  if (item.carcassId) {
    const c = getCarcass(item.carcassId);
    return c ? carcassTypeMeta[c.type].label : "Kast";
  }
  return "Item";
}

export function RoomCanvas({
  activeLayer,
  selectedId,
  onSelect,
}: {
  activeLayer: CabinetLayer;
  selectedId: string | null;
  onSelect: (id: string | null) => void;
}) {
  const { design, dispatch } = usePlanner();
  const canvasRef = useRef<HTMLDivElement>(null);
  const { roomWidthCm: rw, roomDepthCm: rd } = design;
  const cabinetColor =
    getFrontFinish(design.frontFinishId)?.hex ?? CARCASS_HEX[design.carcassColor];

  const activeItems = design.items.filter((i) => i.layer === activeLayer);
  const ghostItems = design.items.filter((i) => i.layer !== activeLayer);
  // Begrens de afmeting zodat diepe of brede ruimtes netjes in beeld blijven.
  const maxWidth = Math.min(720, Math.round(480 * (rw / rd)));

  return (
    <div>
      <div className="mx-auto text-center text-xs text-ink-soft" style={{ maxWidth }}>
        {rw} cm
      </div>
      <div className="mx-auto flex items-stretch gap-1" style={{ maxWidth: maxWidth + 24 }}>
        <div className="flex w-6 items-center justify-center">
          <span className="text-xs text-ink-soft" style={{ writingMode: "vertical-rl" }}>
            {rd} cm
          </span>
        </div>
        <div
          ref={canvasRef}
          onPointerDown={(e) => {
            if (e.target === canvasRef.current) onSelect(null);
          }}
          className="relative w-full touch-none rounded-lg border-2 border-ink/40 bg-sand-100"
          style={{ aspectRatio: `${rw} / ${rd}`, maxWidth }}
        >
          {design.items.length === 0 && (
            <div className="pointer-events-none absolute inset-0 flex items-center justify-center p-6 text-center text-sm text-ink-soft">
              Kies rechts een kast of apparaat — het verschijnt hier. Sleep het
              daarna naar zijn plek; midden in de ruimte wordt het een eiland.
            </div>
          )}
          <GapMarkers design={design} layer={activeLayer} />
          {ghostItems.map((item) => (
            <ElementBox
              key={item.instanceId}
              item={item}
              rw={rw}
              rd={rd}
              cabinetColor={cabinetColor}
              ghost
            />
          ))}
          {activeItems.map((item) => (
            <ElementBox
              key={item.instanceId}
              item={item}
              rw={rw}
              rd={rd}
              cabinetColor={cabinetColor}
              canvasRef={canvasRef}
              selected={item.instanceId === selectedId}
              onSelect={onSelect}
              onMove={(cx, cy) =>
                dispatch({ type: "MOVE_ITEM", instanceId: item.instanceId, cx, cy })
              }
              onSnap={() => dispatch({ type: "SNAP_ITEM", instanceId: item.instanceId })}
            />
          ))}
          {activeLayer === "base" && <IslandDimensions design={design} />}
        </div>
      </div>
    </div>
  );
}

interface DragState {
  sx: number;
  sy: number;
  cx: number;
  cy: number;
  scaleX: number;
  scaleY: number;
  moved: boolean;
}

function ElementBox({
  item,
  rw,
  rd,
  cabinetColor,
  ghost,
  canvasRef,
  selected,
  onSelect,
  onMove,
  onSnap,
}: {
  item: PlacedItem;
  rw: number;
  rd: number;
  cabinetColor: string;
  ghost?: boolean;
  canvasRef?: RefObject<HTMLDivElement | null>;
  selected?: boolean;
  onSelect?: (id: string) => void;
  onMove?: (cx: number, cy: number) => void;
  onSnap?: () => void;
}) {
  const { w: fw, d: fd } = itemFootprint(item);
  const drag = useRef<DragState | null>(null);

  const onPointerDown = (e: ReactPointerEvent<HTMLDivElement>) => {
    if (ghost || !canvasRef?.current) return;
    e.stopPropagation();
    const rect = canvasRef.current.getBoundingClientRect();
    drag.current = {
      sx: e.clientX,
      sy: e.clientY,
      cx: item.cx,
      cy: item.cy,
      scaleX: rect.width / rw,
      scaleY: rect.height / rd,
      moved: false,
    };
    e.currentTarget.setPointerCapture(e.pointerId);
  };

  const onPointerMove = (e: ReactPointerEvent<HTMLDivElement>) => {
    const d = drag.current;
    if (!d) return;
    const dx = e.clientX - d.sx;
    const dy = e.clientY - d.sy;
    if (Math.abs(dx) + Math.abs(dy) > 4) d.moved = true;
    onMove?.(d.cx + dx / d.scaleX, d.cy + dy / d.scaleY);
  };

  const onPointerUp = (e: ReactPointerEvent<HTMLDivElement>) => {
    const d = drag.current;
    drag.current = null;
    if (!d) return;
    e.currentTarget.releasePointerCapture(e.pointerId);
    if (d.moved) onSnap?.();
    else onSelect?.(item.instanceId);
  };

  const isAppliance = item.kind === "appliance";
  const bg = isAppliance ? APPLIANCE_BG : cabinetColor;
  const borderColor = isAppliance ? APPLIANCE_BORDER : shade(cabinetColor, 0.6);
  const textColor = isAppliance ? "#f4efe3" : readableText(cabinetColor);

  return (
    <div
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={onPointerUp}
      style={{
        left: `${(item.cx / rw) * 100}%`,
        top: `${(item.cy / rd) * 100}%`,
        width: `${(fw / rw) * 100}%`,
        height: `${(fd / rd) * 100}%`,
        transform: `translate(-50%, -50%) rotate(${item.rotation}deg)`,
        ...(ghost ? {} : { backgroundColor: bg, borderColor }),
      }}
      className={cn(
        "absolute flex touch-none items-center justify-center overflow-hidden rounded-[3px] border",
        ghost
          ? "pointer-events-none border-dashed border-ink/20 bg-white/40"
          : "cursor-grab shadow-sm active:cursor-grabbing",
        selected && "z-10 ring-2 ring-terracotta-500 ring-offset-1",
      )}
    >
      {/* Richting-indicatie: streep aan de voorzijde van de kast. */}
      {!ghost && (
        <span
          className="pointer-events-none absolute inset-x-0 bottom-0 h-1 opacity-45"
          style={{ backgroundColor: textColor }}
        />
      )}
      <span
        style={{ transform: `rotate(${-item.rotation}deg)`, color: ghost ? undefined : textColor }}
        className="pointer-events-none max-w-full px-0.5 text-center text-[10px] font-medium leading-tight text-ink-soft"
      >
        {itemLabel(item)}
      </span>
    </div>
  );
}

const WALL_SIDES: WallSide[] = ["top", "bottom", "left", "right"];

/** Toont de open ruimtes langs de wanden, met maat en wat er nog past. */
function GapMarkers({ design, layer }: { design: KitchenDesign; layer: CabinetLayer }) {
  const rw = design.roomWidthCm;
  const rd = design.roomDepthCm;
  const depthCm = layer === "base" ? 60 : 37;

  return (
    <>
      {WALL_SIDES.flatMap((wall) => {
        const hasItems = design.items.some(
          (i) => i.layer === layer && isFlushToWall(i, wall, design),
        );
        if (!hasItems) return [];
        return wallGaps(design, wall, layer)
          .filter((gap) => gap.sizeCm >= 6)
          .map((gap, idx) => {
            const fit = largestStandardFit(gap.sizeCm);
            let style: CSSProperties;
            if (wall === "top") {
              style = {
                left: `${(gap.startCm / rw) * 100}%`,
                top: 0,
                width: `${(gap.sizeCm / rw) * 100}%`,
                height: `${(depthCm / rd) * 100}%`,
              };
            } else if (wall === "bottom") {
              style = {
                left: `${(gap.startCm / rw) * 100}%`,
                top: `${((rd - depthCm) / rd) * 100}%`,
                width: `${(gap.sizeCm / rw) * 100}%`,
                height: `${(depthCm / rd) * 100}%`,
              };
            } else if (wall === "left") {
              style = {
                left: 0,
                top: `${(gap.startCm / rd) * 100}%`,
                width: `${(depthCm / rw) * 100}%`,
                height: `${(gap.sizeCm / rd) * 100}%`,
              };
            } else {
              style = {
                left: `${((rw - depthCm) / rw) * 100}%`,
                top: `${(gap.startCm / rd) * 100}%`,
                width: `${(depthCm / rw) * 100}%`,
                height: `${(gap.sizeCm / rd) * 100}%`,
              };
            }
            return (
              <div
                key={`${wall}-${idx}`}
                style={style}
                className="pointer-events-none absolute flex flex-col items-center justify-center overflow-hidden rounded-sm border border-dashed border-terracotta-500/70 bg-terracotta-500/[0.06] p-0.5 text-center"
              >
                <span className="text-[10px] font-semibold leading-tight text-terracotta-700">
                  {Math.round(gap.sizeCm)} cm
                </span>
                {fit && (
                  <span className="text-[9px] leading-tight text-terracotta-600">
                    {fit}-cm kast past
                  </span>
                )}
              </div>
            );
          });
      })}
    </>
  );
}

/** Maatlijnen rondom een keukeneiland — afstand tot de kasten of de wanden. */
function IslandDimensions({ design }: { design: KitchenDesign }) {
  const rw = design.roomWidthCm;
  const rd = design.roomDepthCm;
  const islands = design.items.filter((i) => i.wall === null && i.layer === "base");

  return (
    <>
      {islands.flatMap((island) => {
        const b = itemBounds(island);
        return islandClearances(design, island).map((c) => {
          const key = `${island.instanceId}-${c.side}`;
          const label = `${Math.round(c.gapCm)} cm`;
          if (c.side === "left" || c.side === "right") {
            const startCm = c.side === "left" ? c.obstacleCm : b.x2;
            return (
              <DimLine
                key={key}
                horizontal
                leftPct={(startCm / rw) * 100}
                topPct={(island.cy / rd) * 100}
                lengthPct={(c.gapCm / rw) * 100}
                label={label}
              />
            );
          }
          const startCm = c.side === "top" ? c.obstacleCm : b.y2;
          return (
            <DimLine
              key={key}
              horizontal={false}
              leftPct={(island.cx / rw) * 100}
              topPct={(startCm / rd) * 100}
              lengthPct={(c.gapCm / rd) * 100}
              label={label}
            />
          );
        });
      })}
    </>
  );
}

function DimLine({
  horizontal,
  leftPct,
  topPct,
  lengthPct,
  label,
}: {
  horizontal: boolean;
  leftPct: number;
  topPct: number;
  lengthPct: number;
  label: string;
}) {
  const style: CSSProperties = horizontal
    ? {
        left: `${leftPct}%`,
        top: `${topPct}%`,
        width: `${lengthPct}%`,
        transform: "translateY(-50%)",
      }
    : {
        left: `${leftPct}%`,
        top: `${topPct}%`,
        height: `${lengthPct}%`,
        transform: "translateX(-50%)",
      };
  return (
    <div style={style} className="pointer-events-none absolute flex items-center justify-center">
      <div
        className={cn(
          "absolute border-dashed border-sea-600",
          horizontal ? "inset-x-0 top-1/2 border-t" : "inset-y-0 left-1/2 border-l",
        )}
      />
      <span className="relative rounded bg-sea-600 px-1 py-px text-[9px] font-semibold text-whitewash">
        {label}
      </span>
    </div>
  );
}
