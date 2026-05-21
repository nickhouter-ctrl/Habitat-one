// Geometrie-helpers voor de keukenplanner.
//
// Pure functies — gebruikt door de reducer, het teken-canvas en de
// bestellijst. Werken met top-down ruimte-coördinaten in cm.

import { getCarcass, type Carcass } from "@/lib/data/metod";
import { getAppliance, type Appliance } from "./appliances";
import type { CabinetLayer, KitchenDesign, PlacedItem, Rotation, WallSide } from "./types";

/** Afstand (cm) waarbinnen een element tegen een buur klikt. */
export const SNAP_THRESHOLD_CM = 35;

/** Afstand (cm) waarbinnen een keukeneiland-element tegen een ander klikt. */
export const ISLAND_SNAP_CM = 50;

/** Afstand (cm) van de achterkant tot een wand waarbinnen een element vastklikt. */
export const WALL_SNAP_CM = 20;

/** Idem, maar voor een element dat al een keukeneiland is — bewust klein,
 *  zodat een eiland niet steeds terug tegen een wand springt. */
const ISLAND_WALL_SNAP_CM = 8;

/** Standaard kastbreedtes (cm), aflopend — voor "wat past hier nog". */
export const STANDARD_WIDTHS_CM = [80, 60, 40, 20];

/** In welke laag hoort een casco: op de vloer of hangend. */
export function carcassLayer(carcass: Carcass): CabinetLayer {
  return carcass.placement === "boven" || carcass.placement === "opzet" ? "wall" : "base";
}

/** In welke laag hoort een apparaat — volgt het host-casco of de montagewijze. */
export function applianceLayer(appliance: Appliance): CabinetLayer {
  if (appliance.hostCarcassId) {
    const host = getCarcass(appliance.hostCarcassId);
    if (host) return carcassLayer(host);
  }
  return appliance.mount === "wall" ? "wall" : "base";
}

/** True als het item een hoekkast (onder- of bovenhoekkast) is. */
export function isCornerItem(item: PlacedItem): boolean {
  if (!item.carcassId) return false;
  const t = getCarcass(item.carcassId)?.type;
  return t === "onderhoekkast" || t === "bovenhoekkast";
}

/** Lokale footprint van een item: frontbreedte en diepte in cm (zonder rotatie). */
export function itemFootprint(item: PlacedItem): { w: number; d: number } {
  if (item.carcassId) {
    const c = getCarcass(item.carcassId);
    if (c) return { w: c.b, d: c.d };
  }
  if (item.applianceId) {
    const a = getAppliance(item.applianceId);
    if (a) return { w: a.widthCm, d: a.depthCm };
  }
  return { w: 60, d: 60 };
}

/** Omhullende (AABB) van een item in ruimte-assen, ná rotatie — in cm. */
export function itemAabb(item: PlacedItem): { w: number; h: number } {
  const { w, d } = itemFootprint(item);
  return item.rotation % 180 === 0 ? { w, h: d } : { w: d, h: w };
}

/** Randen van een item in ruimte-coördinaten (cm). */
export function itemBounds(item: PlacedItem): {
  x1: number;
  x2: number;
  y1: number;
  y2: number;
} {
  const { w, h } = itemAabb(item);
  return {
    x1: item.cx - w / 2,
    x2: item.cx + w / 2,
    y1: item.cy - h / 2,
    y2: item.cy + h / 2,
  };
}

/** True als een item met een rand vlak tegen de gegeven wand zit. */
export function isFlushToWall(
  item: PlacedItem,
  wall: WallSide,
  design: KitchenDesign,
): boolean {
  const b = itemBounds(item);
  const m = 6; // marge in cm
  switch (wall) {
    case "top":
      return b.y1 <= m;
    case "bottom":
      return b.y2 >= design.roomDepthCm - m;
    case "left":
      return b.x1 <= m;
    default:
      return b.x2 >= design.roomWidthCm - m;
  }
}

/** Houd een middelpunt binnen de ruimte, rekening houdend met de AABB. */
export function clampToRoom(
  item: PlacedItem,
  roomW: number,
  roomD: number,
): { cx: number; cy: number } {
  const { w, h } = itemAabb(item);
  return {
    cx: clamp(item.cx, w / 2, Math.max(w / 2, roomW - w / 2)),
    cy: clamp(item.cy, h / 2, Math.max(h / 2, roomD - h / 2)),
  };
}

/**
 * Klik een element vast tegen de dichtstbijzijnde wand én tegen de kasten die
 * daar al staan. Te ver van elke wand → het blijft vrij staan (keukeneiland).
 */
export function snapItem(
  item: PlacedItem,
  design: KitchenDesign,
): { cx: number; cy: number; rotation: Rotation; wall: WallSide | null } {
  const { roomWidthCm: rw, roomDepthCm: rd } = design;
  const { w, d } = itemFootprint(item);

  // Hoekkasten klikken altijd netjes in een hoek van de ruimte.
  if (isCornerItem(item)) {
    return snapToCorner(item, rw, rd);
  }

  const dist: Record<WallSide, number> = {
    top: item.cy,
    bottom: rd - item.cy,
    left: item.cx,
    right: rw - item.cx,
  };
  const nearest = (Object.entries(dist) as [WallSide, number][]).reduce((a, b) =>
    b[1] < a[1] ? b : a,
  );

  // Een element dat al een eiland is, blijft makkelijker een eiland.
  const wallSnap = item.wall === null ? ISLAND_WALL_SNAP_CM : WALL_SNAP_CM;
  if (nearest[1] > d / 2 + wallSnap) {
    // Te ver van elke wand → keukeneiland: klik tegen andere eiland-elementen.
    const clamped = clampToRoom(item, rw, rd);
    const snapped = snapToIslands({ ...item, ...clamped }, design);
    return { ...snapped, rotation: item.rotation, wall: null };
  }

  const wall = nearest[0];
  const horizontal = wall === "top" || wall === "bottom";
  const wallLen = horizontal ? rw : rd;

  // Positie langs de wand: eerst binnen de wand houden, dan tegen buren klikken.
  let along = clamp(horizontal ? item.cx : item.cy, w / 2, Math.max(w / 2, wallLen - w / 2));
  along = snapAgainstNeighbours(along, w, item, design, wall, horizontal, wallLen);

  switch (wall) {
    case "top":
      return { cx: along, cy: d / 2, rotation: 0, wall };
    case "bottom":
      return { cx: along, cy: rd - d / 2, rotation: 180, wall };
    case "left":
      return { cx: d / 2, cy: along, rotation: 90, wall };
    default:
      return { cx: rw - d / 2, cy: along, rotation: 270, wall };
  }
}

/** Klik een hoekkast in de dichtstbijzijnde hoek van de ruimte. */
function snapToCorner(
  item: PlacedItem,
  rw: number,
  rd: number,
): { cx: number; cy: number; rotation: Rotation; wall: WallSide | null } {
  const { w, d } = itemFootprint(item);
  const corners: { px: number; py: number; cx: number; cy: number; rotation: Rotation }[] = [
    { px: 0, py: 0, cx: w / 2, cy: d / 2, rotation: 0 },
    { px: rw, py: 0, cx: rw - d / 2, cy: w / 2, rotation: 270 },
    { px: rw, py: rd, cx: rw - w / 2, cy: rd - d / 2, rotation: 180 },
    { px: 0, py: rd, cx: d / 2, cy: rd - w / 2, rotation: 90 },
  ];
  let best = corners[0];
  let bestDist = Infinity;
  for (const c of corners) {
    const dist = Math.hypot(item.cx - c.px, item.cy - c.py);
    if (dist < bestDist) {
      bestDist = dist;
      best = c;
    }
  }
  return { cx: best.cx, cy: best.cy, rotation: best.rotation, wall: null };
}

/** Schuif `along` tegen de dichtstbijzijnde buur die vlak tegen dezelfde wand staat. */
function snapAgainstNeighbours(
  along: number,
  w: number,
  item: PlacedItem,
  design: KitchenDesign,
  wall: WallSide,
  horizontal: boolean,
  wallLen: number,
): number {
  let best = along;
  let bestDist = SNAP_THRESHOLD_CM;
  for (const other of design.items) {
    if (other.instanceId === item.instanceId) continue;
    if (other.layer !== item.layer) continue;
    if (!isFlushToWall(other, wall, design)) continue;
    const na = horizontal ? other.cx : other.cy;
    const nw = horizontal ? itemAabb(other).w : itemAabb(other).h;
    // Vlak rechts of vlak links van de buur.
    for (const candidate of [na + nw / 2 + w / 2, na - nw / 2 - w / 2]) {
      if (candidate < w / 2 || candidate > wallLen - w / 2) continue;
      const dd = Math.abs(candidate - along);
      if (dd < bestDist) {
        bestDist = dd;
        best = candidate;
      }
    }
  }
  return best;
}

/**
 * Klik een keukeneiland-element netjes tegen een ander eiland-element aan —
 * ernaast of erachter, en meteen uitgelijnd. Zo bouw je een eilandblok op,
 * ook in twee rijen rug-aan-rug.
 */
function snapToIslands(item: PlacedItem, design: KitchenDesign): { cx: number; cy: number } {
  const self = itemAabb(item);
  let best = { cx: item.cx, cy: item.cy };
  let bestDist = ISLAND_SNAP_CM;
  for (const other of design.items) {
    if (other.instanceId === item.instanceId) continue;
    if (other.wall !== null || other.layer !== item.layer || isCornerItem(other)) continue;
    const o = itemAabb(other);
    const candidates = [
      { cx: other.cx + (o.w + self.w) / 2, cy: other.cy }, // ernaast, rechts
      { cx: other.cx - (o.w + self.w) / 2, cy: other.cy }, // ernaast, links
      { cx: other.cx, cy: other.cy + (o.h + self.h) / 2 }, // erachter
      { cx: other.cx, cy: other.cy - (o.h + self.h) / 2 }, // ervoor
    ];
    for (const c of candidates) {
      const dist = Math.hypot(c.cx - item.cx, c.cy - item.cy);
      if (dist < bestDist) {
        bestDist = dist;
        best = c;
      }
    }
  }
  return best;
}

/** Vrije ruimte rondom een keukeneiland — afstand tot de dichtstbijzijnde kast of wand. */
export interface IslandClearance {
  side: "left" | "right" | "top" | "bottom";
  gapCm: number;
  /** Coördinaat van het obstakel langs de meet-as (cm). */
  obstacleCm: number;
}

/** Meet de vrije ruimte op de 4 zijden van een keukeneiland. */
export function islandClearances(design: KitchenDesign, island: PlacedItem): IslandClearance[] {
  const a = itemBounds(island);
  const { roomWidthCm: rw, roomDepthCm: rd } = design;
  let left = 0;
  let right = rw;
  let top = 0;
  let bottom = rd;
  for (const o of design.items) {
    if (o.instanceId === island.instanceId || o.layer !== "base") continue;
    const b = itemBounds(o);
    if (a.y1 < b.y2 && a.y2 > b.y1) {
      if (b.x2 <= a.x1) left = Math.max(left, b.x2);
      if (b.x1 >= a.x2) right = Math.min(right, b.x1);
    }
    if (a.x1 < b.x2 && a.x2 > b.x1) {
      if (b.y2 <= a.y1) top = Math.max(top, b.y2);
      if (b.y1 >= a.y2) bottom = Math.min(bottom, b.y1);
    }
  }
  return (
    [
      { side: "left", gapCm: a.x1 - left, obstacleCm: left },
      { side: "right", gapCm: right - a.x2, obstacleCm: right },
      { side: "top", gapCm: a.y1 - top, obstacleCm: top },
      { side: "bottom", gapCm: bottom - a.y2, obstacleCm: bottom },
    ] as IslandClearance[]
  ).filter((c) => c.gapCm > 1);
}

/** Eén open ruimte langs een wand. */
export interface WallGap {
  /** Begin van de opening langs de wand, in cm vanaf de hoek. */
  startCm: number;
  /** Breedte van de opening in cm. */
  sizeCm: number;
}

/** Open ruimtes langs één wand voor één laag (tussen kasten en hoeken). */
export function wallGaps(
  design: KitchenDesign,
  wall: WallSide,
  layer: CabinetLayer,
): WallGap[] {
  const horizontal = wall === "top" || wall === "bottom";
  const wallLen = horizontal ? design.roomWidthCm : design.roomDepthCm;
  const spans = design.items
    .filter((i) => i.layer === layer && isFlushToWall(i, wall, design))
    .map((i) => {
      const along = horizontal ? i.cx : i.cy;
      const extent = horizontal ? itemAabb(i).w : itemAabb(i).h;
      return { start: along - extent / 2, end: along + extent / 2 };
    })
    .sort((a, b) => a.start - b.start);

  const gaps: WallGap[] = [];
  let cursor = 0;
  for (const span of spans) {
    if (span.start - cursor > 1) gaps.push({ startCm: cursor, sizeCm: span.start - cursor });
    cursor = Math.max(cursor, span.end);
  }
  if (wallLen - cursor > 1) gaps.push({ startCm: cursor, sizeCm: wallLen - cursor });
  return gaps;
}

/** Grootste standaard kastbreedte die in een opening van `sizeCm` past, of null. */
export function largestStandardFit(sizeCm: number): number | null {
  return STANDARD_WIDTHS_CM.find((w) => w <= sizeCm + 0.5) ?? null;
}

function clamp(n: number, min: number, max: number): number {
  if (Number.isNaN(n)) return min;
  return Math.min(max, Math.max(min, n));
}
