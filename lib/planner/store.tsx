"use client";

// State-container voor de keukenplanner: één reducer voor het ontwerp plus
// stap-navigatie, gedeeld via React context. Alles client-side.

import {
  createContext,
  useContext,
  useMemo,
  useReducer,
  useState,
  type Dispatch,
  type ReactNode,
} from "react";
import type { CarcassColor } from "@/lib/data/metod";
import { getCarcass } from "@/lib/data/metod";
import { getAppliance } from "./appliances";
import { plannerSteps } from "./catalog";
import { carcassLayer, clampToRoom, isCornerItem, itemFootprint, snapItem } from "./layout";
import type { CabinetLayer, KitchenDesign, PlacedItem, PlannerStepId, Rotation } from "./types";

// --- Begin-ontwerp --------------------------------------------------------

function initialDesign(): KitchenDesign {
  return {
    roomWidthCm: 360,
    roomDepthCm: 300,
    ceilingHeightCm: 260,
    items: [],
    carcassColor: "wit",
    frontStyleId: null,
    frontFinishId: null,
    sidePanelFinishId: null,
  };
}

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

function reducer(state: KitchenDesign, action: PlannerAction): KitchenDesign {
  switch (action.type) {
    case "SET_ROOM_WIDTH": {
      const roomWidthCm = clamp(action.cm, 120, 1200);
      return {
        ...state,
        roomWidthCm,
        items: state.items.map((i) => ({ ...i, ...clampToRoom(i, roomWidthCm, state.roomDepthCm) })),
      };
    }

    case "SET_ROOM_DEPTH": {
      const roomDepthCm = clamp(action.cm, 120, 1200);
      return {
        ...state,
        roomDepthCm,
        items: state.items.map((i) => ({ ...i, ...clampToRoom(i, state.roomWidthCm, roomDepthCm) })),
      };
    }

    case "SET_CEILING":
      return { ...state, ceilingHeightCm: clamp(action.cm, 200, 360) };

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

// --- Context --------------------------------------------------------------

interface PlannerContextValue {
  design: KitchenDesign;
  dispatch: Dispatch<PlannerAction>;
  stepIndex: number;
  step: PlannerStepId;
  goToStep: (index: number) => void;
  next: () => void;
  prev: () => void;
}

const PlannerContext = createContext<PlannerContextValue | null>(null);

export function PlannerProvider({ children }: { children: ReactNode }) {
  const [design, dispatch] = useReducer(reducer, undefined, initialDesign);
  const [stepIndex, setStepIndex] = useState(0);

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
    };
  }, [design, stepIndex]);

  return <PlannerContext.Provider value={value}>{children}</PlannerContext.Provider>;
}

export function usePlanner(): PlannerContextValue {
  const ctx = useContext(PlannerContext);
  if (!ctx) throw new Error("usePlanner moet binnen <PlannerProvider> gebruikt worden");
  return ctx;
}
