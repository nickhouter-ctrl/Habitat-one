"use client";

// State-container voor de keukenplanner: één pure reducer voor het ontwerp,
// een undo/redo-geschiedenis eromheen en stap-navigatie, gedeeld via React
// context. Het ontwerp wordt automatisch in localStorage bewaard en bij een
// volgend bezoek hersteld. Alles client-side.

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useReducer,
  useRef,
  useState,
  type Dispatch,
  type ReactNode,
} from "react";
import type { CarcassColor } from "@/lib/data/metod";
import { getCarcass } from "@/lib/data/metod";
import { getAppliance } from "./appliances";
import { plannerSteps } from "./catalog";
import {
  carcassLayer,
  clampOpening,
  clampToRoom,
  isCornerItem,
  itemFootprint,
  ROOM_LIMITS,
  snapItem,
} from "./layout";
import { initialDesign, loadSavedDesign, sanitizeDesign, saveDesign } from "./persistence";
import type {
  CabinetLayer,
  KitchenDesign,
  Opening,
  OpeningKind,
  PlacedItem,
  PlannerStepId,
  Rotation,
} from "./types";

// Het beginontwerp leeft in persistence.ts (gedeeld met de sanitizer) —
// her-geëxporteerd zodat consumenten en tests het via de store vinden.
export { initialDesign };

// --- Acties ---------------------------------------------------------------

export type PlannerAction =
  | { type: "SET_ROOM_WIDTH"; cm: number }
  | { type: "SET_ROOM_DEPTH"; cm: number }
  | { type: "SET_CEILING"; cm: number }
  | { type: "SET_CARCASS_COLOR"; color: CarcassColor }
  | { type: "ADD_CARCASS"; carcassId: string; afterInstanceId?: string }
  | { type: "ADD_APPLIANCE"; applianceId: string; afterInstanceId?: string }
  | { type: "ADD_STACKED"; carcassId: string; onInstanceId: string }
  | { type: "MOVE_ITEM"; instanceId: string; cx: number; cy: number }
  | { type: "SNAP_ITEM"; instanceId: string }
  | { type: "ROTATE_ITEM"; instanceId: string }
  | { type: "REMOVE_ITEM"; instanceId: string }
  | { type: "SET_FRONT_STYLE"; id: string }
  | { type: "SET_FRONT_FINISH"; id: string }
  | { type: "SET_SIDE_PANEL"; id: string | null }
  | { type: "SET_WORKTOP"; id: string | null }
  | { type: "RESTORE"; design: KitchenDesign }
  | { type: "ADD_OPENING"; kind: OpeningKind }
  | {
      type: "UPDATE_OPENING";
      id: string;
      patch: Partial<Pick<Opening, "wall" | "offsetCm" | "widthCm">>;
    }
  | { type: "REMOVE_OPENING"; id: string }
  | { type: "RESET" };

const uid = () => crypto.randomUUID();

/**
 * Maak een nieuw element. Is er een kast geselecteerd (`afterId`), dan komt de
 * nieuwe kast er direct naast, vastgeklikt; anders cascadegewijs tegen de
 * bovenwand.
 */
function placeNew(
  state: KitchenDesign,
  base: Pick<PlacedItem, "kind" | "carcassId" | "applianceId" | "layer">,
  afterId?: string,
): PlacedItem {
  const item: PlacedItem = {
    instanceId: uid(),
    cx: 0,
    cy: 0,
    rotation: 0,
    wall: "top",
    ...base,
  };
  const { w, d } = itemFootprint(item);

  const after = afterId ? state.items.find((i) => i.instanceId === afterId) : undefined;
  if (after) {
    item.rotation = after.rotation;
    item.wall = after.wall;
    const offset = (itemFootprint(after).w + w) / 2;
    if (after.wall === "left" || after.wall === "right") {
      item.cx = after.cx;
      item.cy = after.cy + offset;
    } else {
      item.cx = after.cx + offset;
      item.cy = after.cy;
    }
    const clamped = clampToRoom(item, state.roomWidthCm, state.roomDepthCm);
    item.cx = clamped.cx;
    item.cy = clamped.cy;
    return item;
  }

  const n = state.items.length;
  item.cx = clamp(40 + w / 2 + (n % 5) * 70, w / 2, Math.max(w / 2, state.roomWidthCm - w / 2));
  item.cy = clamp(d / 2, d / 2, Math.max(d / 2, state.roomDepthCm - d / 2));
  return item;
}

/**
 * De pure ontwerp-reducer. Geëxporteerd voor tests en voor de
 * geschiedenis-wrapper (historyReducer) hieronder.
 */
export function plannerReducer(state: KitchenDesign, action: PlannerAction): KitchenDesign {
  switch (action.type) {
    case "SET_ROOM_WIDTH": {
      const roomWidthCm = clamp(action.cm, ROOM_LIMITS.widthCm.min, ROOM_LIMITS.widthCm.max);
      return {
        ...state,
        roomWidthCm,
        items: state.items.map((i) => ({ ...i, ...clampToRoom(i, roomWidthCm, state.roomDepthCm) })),
        openings: state.openings.map((o) => clampOpening(o, roomWidthCm, state.roomDepthCm)),
      };
    }

    case "SET_ROOM_DEPTH": {
      const roomDepthCm = clamp(action.cm, ROOM_LIMITS.depthCm.min, ROOM_LIMITS.depthCm.max);
      return {
        ...state,
        roomDepthCm,
        items: state.items.map((i) => ({ ...i, ...clampToRoom(i, state.roomWidthCm, roomDepthCm) })),
        openings: state.openings.map((o) => clampOpening(o, state.roomWidthCm, roomDepthCm)),
      };
    }

    case "SET_CEILING":
      return {
        ...state,
        ceilingHeightCm: clamp(action.cm, ROOM_LIMITS.ceilingCm.min, ROOM_LIMITS.ceilingCm.max),
      };

    case "SET_CARCASS_COLOR":
      return { ...state, carcassColor: action.color };

    case "ADD_CARCASS": {
      const carcass = getCarcass(action.carcassId);
      if (!carcass) return state;
      let item = placeNew(
        state,
        {
          kind: "carcass",
          carcassId: carcass.id,
          applianceId: null,
          layer: carcassLayer(carcass),
        },
        action.afterInstanceId,
      );
      // Een hoekkast klikt meteen in een hoek van de ruimte.
      if (isCornerItem(item)) {
        item = { ...item, ...snapItem(item, state) };
      }
      return { ...state, items: [...state.items, item] };
    }

    case "ADD_APPLIANCE": {
      const appliance = getAppliance(action.applianceId);
      if (!appliance) return state;
      const carcassId = appliance.hostCarcassId;
      let layer: CabinetLayer = "base";
      if (carcassId) {
        const host = getCarcass(carcassId);
        if (host) layer = carcassLayer(host);
      } else if (appliance.mount === "wall") {
        layer = "wall";
      }
      const item = placeNew(
        state,
        {
          kind: "appliance",
          carcassId,
          applianceId: appliance.id,
          layer,
        },
        action.afterInstanceId,
      );
      return { ...state, items: [...state.items, item] };
    }

    case "ADD_STACKED": {
      const carcass = getCarcass(action.carcassId);
      const base = state.items.find((i) => i.instanceId === action.onInstanceId);
      if (!carcass || !base) return state;
      // Opzetkast bovenop de hoge kast — zelfde plek, hangende laag.
      const item: PlacedItem = {
        instanceId: uid(),
        kind: "carcass",
        carcassId: carcass.id,
        applianceId: null,
        layer: "wall",
        cx: base.cx,
        cy: base.cy,
        rotation: base.rotation,
        wall: base.wall,
      };
      return { ...state, items: [...state.items, item] };
    }

    case "MOVE_ITEM":
      return {
        ...state,
        items: state.items.map((i) =>
          i.instanceId === action.instanceId
            ? { ...i, ...clampToRoom({ ...i, cx: action.cx, cy: action.cy }, state.roomWidthCm, state.roomDepthCm) }
            : i,
        ),
      };

    case "SNAP_ITEM":
      return {
        ...state,
        items: state.items.map((i) =>
          i.instanceId === action.instanceId ? { ...i, ...snapItem(i, state) } : i,
        ),
      };

    case "ROTATE_ITEM":
      return {
        ...state,
        items: state.items.map((i) => {
          if (i.instanceId !== action.instanceId) return i;
          const rotation = (((i.rotation + 90) % 360) as Rotation);
          const rotated = { ...i, rotation };
          return { ...rotated, ...clampToRoom(rotated, state.roomWidthCm, state.roomDepthCm) };
        }),
      };

    case "REMOVE_ITEM":
      return { ...state, items: state.items.filter((i) => i.instanceId !== action.instanceId) };

    case "SET_FRONT_STYLE":
      return { ...state, frontStyleId: action.id };

    case "SET_FRONT_FINISH":
      return { ...state, frontFinishId: action.id };

    case "SET_SIDE_PANEL":
      return { ...state, sidePanelFinishId: action.id };

    case "SET_WORKTOP":
      return { ...state, worktopId: action.id };

    // Zet een compleet ontwerp terug (undo-presets, localStorage, deel-links).
    // Altijd door de sanitizer — de bron kan een oude of externe versie zijn.
    case "RESTORE":
      return sanitizeDesign(action.design) ?? state;

    case "ADD_OPENING": {
      const o = clampOpening(
        {
          id: uid(),
          kind: action.kind,
          wall: "top",
          offsetCm: state.roomWidthCm / 2,
          widthCm: action.kind === "door" ? 90 : 120,
        },
        state.roomWidthCm,
        state.roomDepthCm,
      );
      return { ...state, openings: [...state.openings, o] };
    }

    case "UPDATE_OPENING":
      return {
        ...state,
        openings: state.openings.map((o) =>
          o.id === action.id
            ? clampOpening({ ...o, ...action.patch }, state.roomWidthCm, state.roomDepthCm)
            : o,
        ),
      };

    case "REMOVE_OPENING":
      return { ...state, openings: state.openings.filter((o) => o.id !== action.id) };

    case "RESET":
      return initialDesign();

    default:
      return state;
  }
}

function clamp(n: number, min: number, max: number): number {
  if (Number.isNaN(n)) return min;
  return Math.min(max, Math.max(min, n));
}

// --- Undo/redo-geschiedenis ------------------------------------------------

/** Maximaal aantal undo-stappen dat bewaard blijft. */
export const HISTORY_LIMIT = 50;

/** Ontwerp-geschiedenis: heden plus undo- en redo-stapels. */
export interface HistoryState {
  past: KitchenDesign[];
  present: KitchenDesign;
  future: KitchenDesign[];
  /** Laatste ontwerp-actie — om sleep-gebaren tot één undo-stap samen te voegen. */
  lastActionType: PlannerAction["type"] | null;
}

/**
 * Acties op de geschiedenis: elke ontwerp-actie, plus UNDO/REDO en HYDRATE
 * (het bewaarde ontwerp laden zónder dat dat een undo-stap wordt).
 */
export type HistoryAction =
  | PlannerAction
  | { type: "UNDO" }
  | { type: "REDO" }
  | { type: "HYDRATE"; design: KitchenDesign };

/** De lege geschiedenis rond het beginontwerp. */
export function initialHistory(): HistoryState {
  return { past: [], present: initialDesign(), future: [], lastActionType: null };
}

/**
 * True als `next` bij de vorige actie hoort en géén eigen undo-stap verdient:
 * een sleep-gebaar is een reeks MOVE_ITEM's met eventueel een SNAP_ITEM als
 * afronding — undo hoort dan het hele gebaar terug te draaien.
 */
function coalescesWithPrevious(
  previous: PlannerAction["type"] | null,
  next: PlannerAction["type"],
): boolean {
  return (next === "MOVE_ITEM" || next === "SNAP_ITEM") && previous === "MOVE_ITEM";
}

/**
 * Reducer rond plannerReducer die de undo/redo-stapels bijhoudt.
 * Geëxporteerd voor tests; de provider gebruikt hem via useReducer.
 */
export function historyReducer(state: HistoryState, action: HistoryAction): HistoryState {
  switch (action.type) {
    case "UNDO": {
      if (state.past.length === 0) return state;
      return {
        past: state.past.slice(0, -1),
        present: state.past[state.past.length - 1],
        future: [state.present, ...state.future],
        lastActionType: null,
      };
    }

    case "REDO": {
      if (state.future.length === 0) return state;
      return {
        past: [...state.past, state.present],
        present: state.future[0],
        future: state.future.slice(1),
        lastActionType: null,
      };
    }

    case "HYDRATE": {
      const design = sanitizeDesign(action.design);
      return design ? { ...state, present: design, lastActionType: null } : state;
    }

    default: {
      const present = plannerReducer(state.present, action);
      if (present === state.present) return state;
      const past = coalescesWithPrevious(state.lastActionType, action.type)
        ? state.past
        : [...state.past, state.present].slice(-HISTORY_LIMIT);
      return { past, present, future: [], lastActionType: action.type };
    }
  }
}

// --- Context --------------------------------------------------------------

interface PlannerContextValue {
  design: KitchenDesign;
  dispatch: Dispatch<PlannerAction>;
  stepIndex: number;
  step: PlannerStepId;
  goToStep: (index: number) => void;
  next: () => void;
  prev: () => void;
  /** Laatste ontwerp-actie ongedaan maken. */
  undo: () => void;
  /** Ongedaan gemaakte actie opnieuw uitvoeren. */
  redo: () => void;
  canUndo: boolean;
  canRedo: boolean;
}

const PlannerContext = createContext<PlannerContextValue | null>(null);

export function PlannerProvider({ children }: { children: ReactNode }) {
  const [history, dispatch] = useReducer(historyReducer, undefined, initialHistory);
  const [stepIndex, setStepIndex] = useState(0);
  // Pas ná het laden van het bewaarde ontwerp gaan we zelf opslaan — anders
  // overschrijft het lege beginontwerp de bewaarde versie. Bewust een ref én
  // vóór het laad-effect gedeclareerd: effecten draaien in volgorde, dus bij
  // mount slaat dit effect over (ref nog false) en zet het laad-effect de ref.
  const hydrated = useRef(false);
  const design = history.present;

  useEffect(() => {
    if (!hydrated.current) return;
    saveDesign(design);
  }, [design]);

  useEffect(() => {
    const saved = loadSavedDesign();
    if (saved) dispatch({ type: "HYDRATE", design: saved });
    hydrated.current = true;
  }, []);

  const undo = useCallback(() => dispatch({ type: "UNDO" }), []);
  const redo = useCallback(() => dispatch({ type: "REDO" }), []);

  const value = useMemo<PlannerContextValue>(() => {
    const goToStep = (index: number) =>
      setStepIndex(clamp(index, 0, plannerSteps.length - 1));
    return {
      design,
      dispatch,
      stepIndex,
      step: plannerSteps[stepIndex].id,
      goToStep,
      next: () => goToStep(stepIndex + 1),
      prev: () => goToStep(stepIndex - 1),
      undo,
      redo,
      canUndo: history.past.length > 0,
      canRedo: history.future.length > 0,
    };
  }, [design, stepIndex, undo, redo, history.past.length, history.future.length]);

  return <PlannerContext.Provider value={value}>{children}</PlannerContext.Provider>;
}

export function usePlanner(): PlannerContextValue {
  const ctx = useContext(PlannerContext);
  if (!ctx) throw new Error("usePlanner moet binnen <PlannerProvider> gebruikt worden");
  return ctx;
}
