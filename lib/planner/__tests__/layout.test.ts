// Tests voor de pure geometrie-helpers van de planner.

import { describe, expect, it } from "vitest";
import {
  clampToRoom,
  designHasCollision,
  isFlushToWall,
  itemAabb,
  itemBounds,
  itemFootprint,
  itemsOverlap,
  largestStandardFit,
  snapItem,
  wallGaps,
} from "../layout";
import type { KitchenDesign, PlacedItem, Rotation } from "../types";

/** Testhulpje: een geplaatste 60×60-onderkast op (cx, cy). */
function baseItem(overrides: Partial<PlacedItem> = {}): PlacedItem {
  return {
    instanceId: overrides.instanceId ?? "test-item",
    kind: "carcass",
    carcassId: "onderkast-60x60x80",
    applianceId: null,
    layer: "base",
    cx: 100,
    cy: 100,
    rotation: 0,
    wall: null,
    ...overrides,
  };
}

/** Testhulpje: een leeg ontwerp van 360×300 cm. */
function design(items: PlacedItem[] = []): KitchenDesign {
  return {
    roomWidthCm: 360,
    roomDepthCm: 300,
    ceilingHeightCm: 260,
    items,
    openings: [],
    carcassColor: "wit",
    frontStyleId: null,
    frontFinishId: null,
    sidePanelFinishId: null,
    worktopId: null,
  };
}

describe("itemFootprint / itemAabb / itemBounds", () => {
  it("leest de maat uit het casco", () => {
    expect(itemFootprint(baseItem())).toEqual({ w: 60, d: 60 });
    expect(itemFootprint(baseItem({ carcassId: "onderkast-80x60x80" }))).toEqual({ w: 80, d: 60 });
  });

  it("wisselt breedte en diepte bij 90°/270° rotatie", () => {
    const item = baseItem({ carcassId: "onderkast-80x60x80" });
    expect(itemAabb({ ...item, rotation: 0 })).toEqual({ w: 80, h: 60 });
    expect(itemAabb({ ...item, rotation: 90 })).toEqual({ w: 60, h: 80 });
    expect(itemAabb({ ...item, rotation: 180 })).toEqual({ w: 80, h: 60 });
    expect(itemAabb({ ...item, rotation: 270 })).toEqual({ w: 60, h: 80 });
  });

  it("geeft randen rond het middelpunt", () => {
    expect(itemBounds(baseItem({ cx: 100, cy: 80 }))).toEqual({ x1: 70, x2: 130, y1: 50, y2: 110 });
  });
});

describe("clampToRoom", () => {
  it("houdt het middelpunt binnen de ruimte", () => {
    expect(clampToRoom(baseItem({ cx: -50, cy: 500 }), 360, 300)).toEqual({ cx: 30, cy: 270 });
  });

  it("laat een passend middelpunt ongemoeid", () => {
    expect(clampToRoom(baseItem({ cx: 100, cy: 100 }), 360, 300)).toEqual({ cx: 100, cy: 100 });
  });
});

describe("snapItem", () => {
  it("klikt een element dichtbij de bovenwand vast", () => {
    const d = design();
    // wall: "top" — een kast die al aan een wand hing en versleept wordt.
    const snapped = snapItem(baseItem({ cx: 100, cy: 40, wall: "top" }), d);
    expect(snapped).toEqual({ cx: 100, cy: 30, rotation: 0, wall: "top" });
  });

  it("laat een element midden in de ruimte een keukeneiland blijven", () => {
    const d = design();
    const snapped = snapItem(baseItem({ cx: 180, cy: 150 }), d);
    expect(snapped.wall).toBeNull();
  });

  it("klikt tegen een buur aan dezelfde wand", () => {
    const neighbour = baseItem({ instanceId: "buur", cx: 30, cy: 30, wall: "top" });
    const d = design([neighbour]);
    // 20 cm gat tot de buur → binnen SNAP_THRESHOLD_CM, dus vlak ernaast.
    const snapped = snapItem(baseItem({ cx: 110, cy: 40, wall: "top" }), d);
    expect(snapped).toEqual({ cx: 90, cy: 30, rotation: 0, wall: "top" });
  });
});

describe("itemsOverlap / designHasCollision", () => {
  it("ziet overlappende elementen in dezelfde laag", () => {
    const a = baseItem({ instanceId: "a", cx: 100, cy: 100 });
    const b = baseItem({ instanceId: "b", cx: 130, cy: 100 });
    expect(itemsOverlap(a, b)).toBe(true);
  });

  it("telt vlak tegen elkaar staande kasten niet als botsing", () => {
    const a = baseItem({ instanceId: "a", cx: 100, cy: 100 });
    const b = baseItem({ instanceId: "b", cx: 160, cy: 100 }); // randen raken exact
    expect(itemsOverlap(a, b)).toBe(false);
  });

  it("laat onder- en bovenlaag elkaar nooit raken", () => {
    const a = baseItem({ instanceId: "a", layer: "base" });
    const b = baseItem({ instanceId: "b", layer: "wall" });
    expect(itemsOverlap(a, b)).toBe(false);
  });

  it("houdt rekening met rotatie", () => {
    const a = baseItem({ instanceId: "a", carcassId: "onderkast-80x60x80", cx: 100, cy: 100 });
    const rotated: Rotation = 90;
    // 90° gedraaid is de AABB 60 breed — op x=170 raakt hij a (rand op 140) net niet.
    const b = baseItem({
      instanceId: "b",
      carcassId: "onderkast-80x60x80",
      cx: 170,
      cy: 100,
      rotation: rotated,
    });
    expect(itemsOverlap(a, b)).toBe(false);
    expect(itemsOverlap(a, { ...b, cx: 165 })).toBe(true);
  });

  it("negeert het element zelf bij designHasCollision", () => {
    const a = baseItem({ instanceId: "a" });
    const d = design([a]);
    expect(designHasCollision(d, a)).toBe(false);
    expect(designHasCollision(d, baseItem({ instanceId: "b", cx: a.cx + 20 }))).toBe(true);
  });
});

describe("wallGaps / largestStandardFit", () => {
  it("vindt de open ruimtes tussen kasten langs een wand", () => {
    const left = baseItem({ instanceId: "l", cx: 30, cy: 30, wall: "top" });
    const right = baseItem({ instanceId: "r", cx: 330, cy: 30, wall: "top" });
    const gaps = wallGaps(design([left, right]), "top", "base");
    expect(gaps).toEqual([{ startCm: 60, sizeCm: 240 }]);
  });

  it("geeft de hele wand terug als er niets staat", () => {
    expect(wallGaps(design(), "top", "base")).toEqual([{ startCm: 0, sizeCm: 360 }]);
  });

  it("kiest de grootste standaardbreedte die past", () => {
    expect(largestStandardFit(90)).toBe(80);
    expect(largestStandardFit(59.6)).toBe(60); // halve cm tolerantie
    expect(largestStandardFit(15)).toBeNull();
  });
});

describe("isFlushToWall", () => {
  it("herkent een element vlak tegen de bovenwand", () => {
    const d = design();
    expect(isFlushToWall(baseItem({ cx: 100, cy: 30 }), "top", d)).toBe(true);
    expect(isFlushToWall(baseItem({ cx: 100, cy: 150 }), "top", d)).toBe(false);
  });
});
