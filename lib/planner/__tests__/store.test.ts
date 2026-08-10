// Tests voor de planner-reducer: het state-model achter de keukenplanner.

import { describe, expect, it } from "vitest";
import { initialDesign, plannerReducer } from "../store";
import type { KitchenDesign, PlacedItem } from "../types";

/** Voer een reeks acties uit op het beginontwerp. */
function run(...actions: Parameters<typeof plannerReducer>[1][]): KitchenDesign {
  return actions.reduce(plannerReducer, initialDesign());
}

describe("initialDesign", () => {
  it("begint met een lege, geldige keuken", () => {
    const d = initialDesign();
    expect(d.items).toEqual([]);
    expect(d.openings).toEqual([]);
    expect(d.carcassColor).toBe("wit");
    expect(d.frontStyleId).toBeNull();
    expect(d.worktopId).toBeNull();
  });
});

describe("ruimte-acties", () => {
  it("klemt de ruimtematen op een realistisch bereik", () => {
    expect(run({ type: "SET_ROOM_WIDTH", cm: 50 }).roomWidthCm).toBe(120);
    expect(run({ type: "SET_ROOM_WIDTH", cm: 5000 }).roomWidthCm).toBe(1200);
    expect(run({ type: "SET_CEILING", cm: 100 }).ceilingHeightCm).toBe(200);
  });

  it("schuift kasten mee naar binnen als de ruimte krimpt", () => {
    let d = run({ type: "ADD_CARCASS", carcassId: "onderkast-60x60x80" });
    const id = d.items[0].instanceId;
    d = plannerReducer(d, { type: "MOVE_ITEM", instanceId: id, cx: 350, cy: 150 });
    d = plannerReducer(d, { type: "SET_ROOM_WIDTH", cm: 200 });
    expect(d.items[0].cx).toBeLessThanOrEqual(200 - 30);
  });
});

describe("kasten en apparatuur", () => {
  it("voegt een casco toe in de juiste laag", () => {
    const base = run({ type: "ADD_CARCASS", carcassId: "onderkast-60x60x80" });
    expect(base.items[0]).toMatchObject({ kind: "carcass", layer: "base" });

    const wall = run({ type: "ADD_CARCASS", carcassId: "bovenkast-60x37x80" });
    expect(wall.items[0].layer).toBe("wall");
  });

  it("negeert een onbekend casco-id", () => {
    expect(run({ type: "ADD_CARCASS", carcassId: "bestaat-niet" }).items).toEqual([]);
  });

  it("koppelt een inbouwapparaat aan zijn host-casco", () => {
    const d = run({ type: "ADD_APPLIANCE", applianceId: "oven" });
    expect(d.items[0]).toMatchObject({
      kind: "appliance",
      applianceId: "oven",
      carcassId: "hoge-kast-inbouw-60x60x200",
    });
  });

  it("verwijdert en roteert een element", () => {
    let d = run({ type: "ADD_CARCASS", carcassId: "onderkast-60x60x80" });
    const id = d.items[0].instanceId;
    d = plannerReducer(d, { type: "ROTATE_ITEM", instanceId: id });
    expect(d.items[0].rotation).toBe(90);
    d = plannerReducer(d, { type: "REMOVE_ITEM", instanceId: id });
    expect(d.items).toEqual([]);
  });
});

describe("maatwerk-keuzes", () => {
  it("bewaart front-, zijpaneel- en werkbladkeuze", () => {
    const d = run(
      { type: "SET_FRONT_STYLE", id: "shaker" },
      { type: "SET_FRONT_FINISH", id: "saliegroen" },
      { type: "SET_SIDE_PANEL", id: "mat-wit" },
      { type: "SET_WORKTOP", id: "eiken-massief" },
    );
    expect(d.frontStyleId).toBe("shaker");
    expect(d.frontFinishId).toBe("saliegroen");
    expect(d.sidePanelFinishId).toBe("mat-wit");
    expect(d.worktopId).toBe("eiken-massief");
  });

  it("kan de werkbladkeuze weer wissen", () => {
    const d = run({ type: "SET_WORKTOP", id: "beton" }, { type: "SET_WORKTOP", id: null });
    expect(d.worktopId).toBeNull();
  });
});

describe("openingen", () => {
  it("voegt een raam toe en klemt het binnen de wand", () => {
    let d = run({ type: "ADD_OPENING", kind: "window" });
    expect(d.openings).toHaveLength(1);
    const id = d.openings[0].id;
    d = plannerReducer(d, { type: "UPDATE_OPENING", id, patch: { offsetCm: 9999 } });
    const o = d.openings[0];
    expect(o.offsetCm).toBeLessThanOrEqual(d.roomWidthCm - o.widthCm / 2);
  });
});

describe("RESTORE en RESET", () => {
  it("zet een bewaard ontwerp terug (voor undo/presets)", () => {
    const saved = run(
      { type: "ADD_CARCASS", carcassId: "onderkast-60x60x80" },
      { type: "SET_WORKTOP", id: "beton" },
    );
    const restored = plannerReducer(initialDesign(), { type: "RESTORE", design: saved });
    expect(restored).toEqual(saved);
  });

  it("klemt items van een hersteld ontwerp binnen de ruimte", () => {
    const saved = run({ type: "ADD_CARCASS", carcassId: "onderkast-60x60x80" });
    const outOfBounds: KitchenDesign = {
      ...saved,
      items: saved.items.map((i): PlacedItem => ({ ...i, cx: 9999, cy: -50 })),
    };
    const restored = plannerReducer(initialDesign(), { type: "RESTORE", design: outOfBounds });
    expect(restored.items[0].cx).toBeLessThanOrEqual(saved.roomWidthCm - 30);
    expect(restored.items[0].cy).toBeGreaterThanOrEqual(30);
  });

  it("zet alles terug naar het beginontwerp", () => {
    const d = run({ type: "ADD_CARCASS", carcassId: "onderkast-60x60x80" }, { type: "RESET" });
    expect(d).toEqual(initialDesign());
  });
});
