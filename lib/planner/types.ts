// Datatypes voor de keukenplanner.
//
// De gebruiker maakt eerst de ruimte (een rechthoek, top-down) en tekent
// daarna kastelementen in: kasten en apparatuur met een vrije positie. Tegen
// een wand klikken ze vast; in het midden vormen ze een keukeneiland.
// Géén prijs — de uitkomst is een bestellijst.

import type { CarcassColor } from "@/lib/data/metod";

/** De stappen van de planner-flow, in volgorde. */
export type PlannerStepId = "room" | "design" | "fronts" | "summary";

/** Op de vloer (`base`) of hangend aan de wand (`wall`). */
export type CabinetLayer = "base" | "wall";

/** Soort getekend element: een kale kast, of een apparaat. */
export type PlacedItemKind = "carcass" | "appliance";

/** Rotatie van een element in graden (alleen rechte hoeken). */
export type Rotation = 0 | 90 | 180 | 270;

/** Tegen welke wand van de ruimte een element vastzit. */
export type WallSide = "top" | "bottom" | "left" | "right";

/**
 * Eén getekend element in het ontwerp. De positie is het middelpunt in cm,
 * in top-down ruimte-coördinaten (0,0 = linkerbovenhoek van de ruimte).
 */
export interface PlacedItem {
  instanceId: string;
  kind: PlacedItemKind;
  /** Het METOD-casco — bij een inbouwapparaat het host-casco; null bij een eigen unit/wandmontage. */
  carcassId: string | null;
  /** Het gekozen apparaat — alleen bij `kind: "appliance"`. */
  applianceId: string | null;
  /** Onder- of bovenlaag. */
  layer: CabinetLayer;
  /** Middelpunt-x in cm (top-down). */
  cx: number;
  /** Middelpunt-y in cm (top-down). */
  cy: number;
  rotation: Rotation;
  /** Tegen welke wand het item vastgeklikt zit — null bij een keukeneiland. */
  wall: WallSide | null;
}

/** De volledige keuken zoals de gebruiker hem tekent. */
export interface KitchenDesign {
  /** Breedte van de ruimte in cm (x-as). */
  roomWidthCm: number;
  /** Diepte van de ruimte in cm (y-as). */
  roomDepthCm: number;
  /** Plafondhoogte in cm — bepaalt of hoge kasten passen. */
  ceilingHeightCm: number;
  /** Alle getekende kasten + apparatuur. */
  items: PlacedItem[];
  /** Eén cascokleur voor de hele keuken (de fronten dekken de casco's af). */
  carcassColor: CarcassColor;
  /** Gekozen front-stijl (maatwerk) — id uit lib/planner/catalog.ts. */
  frontStyleId: string | null;
  /** Gekozen front-afwerking/kleur (maatwerk). */
  frontFinishId: string | null;
  /** Afwerking van de zijpanelen — een front-afwerking-id, of null = zelfde als de fronten. */
  sidePanelFinishId: string | null;
}
