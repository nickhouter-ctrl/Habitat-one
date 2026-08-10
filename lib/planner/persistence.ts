// Opslaan en herstellen van een keukenontwerp (localStorage).
//
// De opgeslagen JSON is níét vertrouwd: hij kan uit een oude planner-versie
// komen of met de hand aangepast zijn. sanitizeDesign valideert daarom elk
// veld tegen de catalogi en klemt alle maten voordat het ontwerp de reducer
// in mag. Ook het beginontwerp leeft hier, zodat store.tsx en de sanitizer
// dezelfde standaardwaarden delen zonder circulaire import.

import { carcassColors, getCarcass } from "@/lib/data/metod";
import { getAppliance } from "./appliances";
import { getFrontFinish, getFrontStyle, getWorktopFinish } from "./catalog";
import { clampOpening, clampToRoom, ROOM_LIMITS } from "./layout";
import type {
  KitchenDesign,
  Opening,
  PlacedItem,
  Rotation,
  WallSide,
} from "./types";

/** localStorage-sleutel van het bewaarde ontwerp. Versie in de naam: bij een
 *  onverenigbare modelwijziging de versie ophogen (oude entries saneren toch). */
export const STORAGE_KEY = "habitat-one:kitchen-planner:design:v1";

/** Het lege beginontwerp van de planner. */
export function initialDesign(): KitchenDesign {
  return {
    roomWidthCm: 360,
    roomDepthCm: 300,
    ceilingHeightCm: 260,
    items: [],
    openings: [],
    carcassColor: "wit",
    frontStyleId: null,
    frontFinishId: null,
    sidePanelFinishId: null,
    worktopId: null,
  };
}

// --- Sanering --------------------------------------------------------------

const ROTATIONS: readonly Rotation[] = [0, 90, 180, 270];
const WALL_SIDES: readonly WallSide[] = ["top", "bottom", "left", "right"];

function isRecord(v: unknown): v is Record<string, unknown> {
  return typeof v === "object" && v !== null && !Array.isArray(v);
}

/** Eindig getal, of de terugvalwaarde. */
function num(v: unknown, fallback: number): number {
  return typeof v === "number" && Number.isFinite(v) ? v : fallback;
}

function clamp(n: number, min: number, max: number): number {
  return Math.min(max, Math.max(min, n));
}

/** Een catalogus-id dat via de getter oplost, anders null. */
function knownId(v: unknown, resolve: (id: string) => unknown): string | null {
  return typeof v === "string" && resolve(v) ? v : null;
}

/** Saneer één element; null als het onherstelbaar is. */
function sanitizeItem(
  v: unknown,
  roomWidthCm: number,
  roomDepthCm: number,
): PlacedItem | null {
  if (!isRecord(v)) return null;
  const kind = v.kind === "carcass" || v.kind === "appliance" ? v.kind : null;
  if (!kind) return null;

  const carcassId = knownId(v.carcassId, getCarcass);
  const applianceId = knownId(v.applianceId, getAppliance);
  // Zonder oplosbaar casco/apparaat is er geen maatvoering — element vervalt.
  if (kind === "carcass" && !carcassId) return null;
  if (kind === "appliance" && !applianceId) return null;

  const item: PlacedItem = {
    instanceId:
      typeof v.instanceId === "string" && v.instanceId ? v.instanceId : crypto.randomUUID(),
    kind,
    carcassId,
    applianceId,
    layer: v.layer === "wall" ? "wall" : "base",
    cx: num(v.cx, 0),
    cy: num(v.cy, 0),
    rotation: ROTATIONS.includes(v.rotation as Rotation) ? (v.rotation as Rotation) : 0,
    wall: WALL_SIDES.includes(v.wall as WallSide) ? (v.wall as WallSide) : null,
  };
  return { ...item, ...clampToRoom(item, roomWidthCm, roomDepthCm) };
}

/** Saneer één opening; null als hij onherstelbaar is. */
function sanitizeOpening(
  v: unknown,
  roomWidthCm: number,
  roomDepthCm: number,
): Opening | null {
  if (!isRecord(v)) return null;
  if (v.kind !== "window" && v.kind !== "door") return null;
  if (!WALL_SIDES.includes(v.wall as WallSide)) return null;
  if (typeof v.offsetCm !== "number" || !Number.isFinite(v.offsetCm)) return null;
  if (typeof v.widthCm !== "number" || !Number.isFinite(v.widthCm)) return null;
  const opening: Opening = {
    id: typeof v.id === "string" && v.id ? v.id : crypto.randomUUID(),
    kind: v.kind,
    wall: v.wall as WallSide,
    offsetCm: v.offsetCm,
    widthCm: v.widthCm,
  };
  return clampOpening(opening, roomWidthCm, roomDepthCm);
}

/**
 * Maak van niet-vertrouwde invoer (bijv. JSON uit localStorage) een geldig
 * KitchenDesign. Onbekende ids vallen terug op null, maten worden geklemd en
 * onherstelbare elementen/openingen worden weggelaten. Geeft null als de
 * invoer geen object is.
 */
export function sanitizeDesign(input: unknown): KitchenDesign | null {
  if (!isRecord(input)) return null;
  const def = initialDesign();

  const roomWidthCm = clamp(
    num(input.roomWidthCm, def.roomWidthCm),
    ROOM_LIMITS.widthCm.min,
    ROOM_LIMITS.widthCm.max,
  );
  const roomDepthCm = clamp(
    num(input.roomDepthCm, def.roomDepthCm),
    ROOM_LIMITS.depthCm.min,
    ROOM_LIMITS.depthCm.max,
  );
  const ceilingHeightCm = clamp(
    num(input.ceilingHeightCm, def.ceilingHeightCm),
    ROOM_LIMITS.ceilingCm.min,
    ROOM_LIMITS.ceilingCm.max,
  );

  const items: PlacedItem[] = [];
  const seenIds = new Set<string>();
  for (const raw of Array.isArray(input.items) ? input.items : []) {
    const item = sanitizeItem(raw, roomWidthCm, roomDepthCm);
    if (!item || seenIds.has(item.instanceId)) continue;
    seenIds.add(item.instanceId);
    items.push(item);
  }

  const openings: Opening[] = [];
  for (const raw of Array.isArray(input.openings) ? input.openings : []) {
    const opening = sanitizeOpening(raw, roomWidthCm, roomDepthCm);
    if (opening) openings.push(opening);
  }

  return {
    roomWidthCm,
    roomDepthCm,
    ceilingHeightCm,
    items,
    openings,
    carcassColor: carcassColors.includes(input.carcassColor as never)
      ? (input.carcassColor as KitchenDesign["carcassColor"])
      : def.carcassColor,
    frontStyleId: knownId(input.frontStyleId, getFrontStyle),
    frontFinishId: knownId(input.frontFinishId, getFrontFinish),
    sidePanelFinishId: knownId(input.sidePanelFinishId, getFrontFinish),
    worktopId: knownId(input.worktopId, getWorktopFinish),
  };
}

// --- localStorage ----------------------------------------------------------

/**
 * Lees het bewaarde ontwerp uit localStorage. Onleesbare of ongeldige entries
 * worden opgeruimd; server-side (geen window) is er nooit een ontwerp.
 */
export function loadSavedDesign(): KitchenDesign | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const design = sanitizeDesign(JSON.parse(raw) as unknown);
    if (!design) window.localStorage.removeItem(STORAGE_KEY);
    return design;
  } catch {
    // Kapotte JSON of geblokkeerde opslag (privémodus): entry opruimen
    // (voor zover mogelijk) en zonder bewaard ontwerp starten.
    try {
      window.localStorage.removeItem(STORAGE_KEY);
    } catch {
      // Opslag volledig onbereikbaar — niets op te ruimen.
    }
    return null;
  }
}

/** Bewaar het ontwerp in localStorage. Een volle of geblokkeerde opslag is
 *  geen fout voor de gebruiker — het ontwerp leeft dan alleen in de sessie. */
export function saveDesign(design: KitchenDesign): void {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(design));
  } catch {
    // Quota vol of opslag geblokkeerd — bewust genegeerd, zie boven.
  }
}

/** Verwijder het bewaarde ontwerp (bij RESET vanuit de gebruiker). */
export function clearSavedDesign(): void {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.removeItem(STORAGE_KEY);
  } catch {
    // Opslag onbereikbaar — er valt niets te verwijderen.
  }
}
