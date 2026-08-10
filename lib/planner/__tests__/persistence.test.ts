// Tests voor het opslaan/herstellen van een ontwerp (localStorage-JSON).
//
// sanitizeDesign krijgt niet-vertrouwde invoer (JSON uit localStorage) en
// moet daar altijd óf een geldig ontwerp óf null van maken.

import { describe, expect, it } from "vitest";
import { sanitizeDesign } from "../persistence";
import { initialDesign, plannerReducer } from "../store";

describe("sanitizeDesign", () => {
  it("laat een geldig ontwerp ongewijzigd door", () => {
    const d = [
      { type: "ADD_CARCASS", carcassId: "onderkast-60x60x80" } as const,
      { type: "ADD_OPENING", kind: "window" } as const,
      { type: "SET_WORKTOP", id: "beton" } as const,
    ].reduce(plannerReducer, initialDesign());
    expect(sanitizeDesign(JSON.parse(JSON.stringify(d)))).toEqual(d);
  });

  it("wijst niet-objecten af", () => {
    expect(sanitizeDesign(null)).toBeNull();
    expect(sanitizeDesign("tekst")).toBeNull();
    expect(sanitizeDesign(42)).toBeNull();
    expect(sanitizeDesign([])).toBeNull();
  });

  it("klemt ruimtematen op het toegestane bereik", () => {
    const d = sanitizeDesign({ ...initialDesign(), roomWidthCm: 99999, ceilingHeightCm: 1 });
    expect(d?.roomWidthCm).toBe(1200);
    expect(d?.ceilingHeightCm).toBe(200);
  });

  it("valt terug op standaardwaarden bij ontbrekende velden", () => {
    const d = sanitizeDesign({});
    expect(d).toEqual(initialDesign());
  });

  it("filtert elementen met onbekende casco- of apparaat-ids weg", () => {
    const valid = plannerReducer(initialDesign(), {
      type: "ADD_CARCASS",
      carcassId: "onderkast-60x60x80",
    });
    const d = sanitizeDesign({
      ...valid,
      items: [
        ...valid.items,
        { ...valid.items[0], instanceId: "x", carcassId: "verzonnen-kast" },
        { kind: "carcass" }, // te weinig velden
        "geen object",
      ],
    });
    expect(d?.items).toHaveLength(1);
    expect(d?.items[0].carcassId).toBe("onderkast-60x60x80");
  });

  it("klemt elementen binnen de ruimte en herstelt rare waarden", () => {
    const valid = plannerReducer(initialDesign(), {
      type: "ADD_CARCASS",
      carcassId: "onderkast-60x60x80",
    });
    const d = sanitizeDesign({
      ...valid,
      items: [{ ...valid.items[0], cx: 99999, cy: NaN, rotation: 45, wall: "schuin" }],
    });
    const item = d?.items[0];
    expect(item?.cx).toBeLessThanOrEqual(valid.roomWidthCm - 30);
    expect(Number.isFinite(item?.cy)).toBe(true);
    expect(item?.rotation).toBe(0);
    expect(item?.wall).toBeNull();
  });

  it("filtert kapotte openingen weg en klemt geldige binnen de wand", () => {
    const d = sanitizeDesign({
      ...initialDesign(),
      openings: [
        { id: "o1", kind: "window", wall: "top", offsetCm: 99999, widthCm: 120 },
        { id: "o2", kind: "luik", wall: "top", offsetCm: 100, widthCm: 90 },
        null,
      ],
    });
    expect(d?.openings).toHaveLength(1);
    const o = d!.openings[0];
    expect(o.offsetCm).toBeLessThanOrEqual(360 - o.widthCm / 2);
  });

  it("leidt de laag af uit het casco en negeert de opgeslagen waarde", () => {
    const valid = plannerReducer(initialDesign(), {
      type: "ADD_CARCASS",
      carcassId: "onderkast-60x60x80",
    });
    const d = sanitizeDesign({
      ...valid,
      items: [{ ...valid.items[0], layer: "wall" }], // gemanipuleerd: onderkast "hangend"
    });
    expect(d?.items[0].layer).toBe("base");
  });

  it("dwingt bij een inbouwapparaat het juiste host-casco af", () => {
    const valid = plannerReducer(initialDesign(), {
      type: "ADD_APPLIANCE",
      applianceId: "oven",
    });
    const d = sanitizeDesign({
      ...valid,
      // Gemanipuleerd: extra kast aan de oven gehangen → zou de bestellijst opblazen.
      items: [{ ...valid.items[0], carcassId: "onderkast-80x60x80" }],
    });
    expect(d?.items[0].carcassId).toBe("hoge-kast-inbouw-60x60x200");
  });

  it("laat een unit-apparaat geen casco meesmokkelen", () => {
    const valid = plannerReducer(initialDesign(), {
      type: "ADD_APPLIANCE",
      applianceId: "dishwasher-60",
    });
    const d = sanitizeDesign({
      ...valid,
      items: [{ ...valid.items[0], carcassId: "onderkast-60x60x80" }],
    });
    expect(d?.items[0].carcassId).toBeNull();
  });

  it("wist het apparaat-id van een kale kast", () => {
    const valid = plannerReducer(initialDesign(), {
      type: "ADD_CARCASS",
      carcassId: "onderkast-60x60x80",
    });
    const d = sanitizeDesign({
      ...valid,
      items: [{ ...valid.items[0], applianceId: "oven" }],
    });
    expect(d?.items[0].applianceId).toBeNull();
  });

  it("begrenst het aantal elementen en openingen", () => {
    const valid = plannerReducer(initialDesign(), {
      type: "ADD_CARCASS",
      carcassId: "onderkast-60x60x80",
    });
    const many = Array.from({ length: 500 }, (_, i) => ({
      ...valid.items[0],
      instanceId: crypto.randomUUID(),
      cx: (i % 30) * 10,
    }));
    const d = sanitizeDesign({ ...valid, items: many });
    expect(d?.items.length).toBeLessThanOrEqual(200);
  });

  it("vervangt ids zonder uuid-vorm door een vers uuid", () => {
    const valid = plannerReducer(initialDesign(), {
      type: "ADD_CARCASS",
      carcassId: "onderkast-60x60x80",
    });
    const d = sanitizeDesign({
      ...valid,
      items: [{ ...valid.items[0], instanceId: "<script>alert(1)</script>" }],
    });
    const UUID = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
    expect(d?.items[0].instanceId).toMatch(UUID);
  });

  it("herstelt onbekende maatwerk-ids naar null", () => {
    const d = sanitizeDesign({
      ...initialDesign(),
      carcassColor: "paars",
      frontStyleId: "verzonnen",
      frontFinishId: "verzonnen",
      sidePanelFinishId: "verzonnen",
      worktopId: "verzonnen",
    });
    expect(d?.carcassColor).toBe("wit");
    expect(d?.frontStyleId).toBeNull();
    expect(d?.frontFinishId).toBeNull();
    expect(d?.sidePanelFinishId).toBeNull();
    expect(d?.worktopId).toBeNull();
  });
});
