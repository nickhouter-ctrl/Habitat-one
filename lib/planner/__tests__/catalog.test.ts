// Integriteitstests voor de catalogi: METOD-casco's, apparatuur en maatwerk.
//
// Deze tests bewaken de datakwaliteit — elke kast/apparaat-verwijzing moet
// kloppen, want de bestellijst en de 3D-weergave bouwen hier direct op.

import { describe, expect, it } from "vitest";
import {
  carcasses,
  carcassArtNumber,
  carcassColors,
  carcassTypeMeta,
  getCarcass,
  metodGrid,
} from "@/lib/data/metod";
import { appliances, getAppliance } from "../appliances";
import {
  frontFinishes,
  frontStyles,
  getFrontFinish,
  getFrontStyle,
  getWorktopFinish,
  kitchenStyles,
  plannerSteps,
  worktopFinishes,
} from "../catalog";

const ART_NUMBER = /^\d{3}\.\d{3}\.\d{2}$/;

describe("METOD casco-catalogus", () => {
  it("heeft unieke casco-ids", () => {
    const ids = carcasses.map((c) => c.id);
    expect(new Set(ids).size).toBe(ids.length);
  });

  it("heeft voor elke cascokleur een geldig IKEA-artikelnummer", () => {
    for (const c of carcasses) {
      for (const color of carcassColors) {
        expect(carcassArtNumber(c, color), `${c.id} · ${color}`).toMatch(ART_NUMBER);
      }
    }
  });

  it("heeft unieke artikelnummers over de hele catalogus", () => {
    const nrs = carcasses.flatMap((c) => carcassColors.map((k) => c.art[k]));
    expect(new Set(nrs).size).toBe(nrs.length);
  });

  it("houdt niet-hoekkasten binnen het METOD-maatraster", () => {
    const widths: readonly number[] = metodGrid.widthsCm;
    const depths: readonly number[] = metodGrid.depthsCm;
    for (const c of carcasses) {
      if (c.type === "onderhoekkast" || c.type === "bovenhoekkast") continue;
      expect(widths, `${c.id} breedte`).toContain(c.b);
      expect(depths, `${c.id} diepte`).toContain(c.d);
    }
  });

  it("gebruikt de juiste hoogte per plaatsing", () => {
    const byPlacement: Record<string, readonly number[]> = {
      onder: [metodGrid.baseHeightCm],
      boven: metodGrid.wallHeightsCm,
      hoog: metodGrid.tallHeightsCm,
      opzet: metodGrid.topHeightsCm,
    };
    for (const c of carcasses) {
      expect(byPlacement[c.placement], `${c.id} hoogte`).toContain(c.h);
    }
  });

  it("heeft metadata voor elk casco-type met consistente plaatsing", () => {
    for (const c of carcasses) {
      expect(carcassTypeMeta[c.type].placement).toBe(c.placement);
    }
  });

  it("vindt casco's op id en geeft null bij onbekende id", () => {
    expect(getCarcass("onderkast-60x60x80")?.b).toBe(60);
    expect(getCarcass("bestaat-niet")).toBeNull();
  });
});

describe("apparatuur-catalogus", () => {
  it("heeft unieke apparaat-ids", () => {
    const ids = appliances.map((a) => a.id);
    expect(new Set(ids).size).toBe(ids.length);
  });

  it("verwijst met hostCarcassId altijd naar een bestaand casco", () => {
    for (const a of appliances) {
      if (a.hostCarcassId === null) continue;
      expect(getCarcass(a.hostCarcassId), `${a.id} → ${a.hostCarcassId}`).not.toBeNull();
    }
  });

  it("vindt apparatuur op id en geeft null bij onbekende id", () => {
    expect(getAppliance("oven")?.category).toBe("oven");
    expect(getAppliance("bestaat-niet")).toBeNull();
  });
});

describe("maatwerk-catalogus (fronten, stijlen, werkbladen)", () => {
  it("heeft unieke ids per lijst", () => {
    for (const list of [frontStyles, frontFinishes, worktopFinishes, kitchenStyles]) {
      const ids = list.map((x: { id: string }) => x.id);
      expect(new Set(ids).size).toBe(ids.length);
    }
  });

  it("laat keukenstijlen alleen naar bestaande fronten verwijzen", () => {
    for (const s of kitchenStyles) {
      expect(getFrontStyle(s.frontStyleId), `${s.id} stijl`).not.toBeNull();
      expect(getFrontFinish(s.frontFinishId), `${s.id} afwerking`).not.toBeNull();
    }
  });

  it("heeft geldige hex-kleuren voor alle afwerkingen", () => {
    const HEX = /^#[0-9a-f]{6}$/i;
    for (const f of [...frontFinishes, ...worktopFinishes]) {
      expect(f.hex, f.id).toMatch(HEX);
    }
  });

  it("vindt werkblad-afwerkingen op id en geeft null bij onbekend/null", () => {
    const first = worktopFinishes[0];
    expect(getWorktopFinish(first.id)).toEqual(first);
    expect(getWorktopFinish("bestaat-niet")).toBeNull();
    expect(getWorktopFinish(null)).toBeNull();
  });

  it("heeft de vier plannerstappen in de juiste volgorde", () => {
    expect(plannerSteps.map((s) => s.id)).toEqual(["room", "fronts", "design", "summary"]);
  });
});
