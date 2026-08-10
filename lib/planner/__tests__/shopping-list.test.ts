// Tests voor de bestellijst-afleiding: ontwerp → IKEA-artikellijst.

import { describe, expect, it } from "vitest";
import {
  deriveShoppingList,
  dutchShoppingListLabels,
  formatShoppingList,
  type ShoppingListLabels,
} from "../shopping-list";
import { initialDesign, plannerReducer } from "../store";
import type { KitchenDesign } from "../types";

/** Een ontwerp met 2× dezelfde onderkast, 1 bovenkast en een oven. */
function sampleDesign(): KitchenDesign {
  return [
    { type: "ADD_CARCASS", carcassId: "onderkast-60x60x80" } as const,
    { type: "ADD_CARCASS", carcassId: "onderkast-60x60x80" } as const,
    { type: "ADD_CARCASS", carcassId: "bovenkast-60x37x80" } as const,
    { type: "ADD_APPLIANCE", applianceId: "oven" } as const,
    { type: "SET_FRONT_STYLE", id: "shaker" } as const,
    { type: "SET_FRONT_FINISH", id: "saliegroen" } as const,
    { type: "SET_WORKTOP", id: "eiken-massief" } as const,
  ].reduce(plannerReducer, initialDesign());
}

describe("deriveShoppingList", () => {
  it("telt identieke casco's op tot één regel", () => {
    const list = deriveShoppingList(sampleDesign());
    const onderkast = list.carcasses.find((r) => r.carcass.id === "onderkast-60x60x80");
    expect(onderkast?.count).toBe(2);
  });

  it("telt het host-casco van een inbouwapparaat mee als kast", () => {
    const list = deriveShoppingList(sampleDesign());
    const host = list.carcasses.find((r) => r.carcass.id === "hoge-kast-inbouw-60x60x200");
    expect(host?.count).toBe(1);
  });

  it("geeft het IKEA-artikelnummer in de gekozen cascokleur", () => {
    const wit = deriveShoppingList(sampleDesign());
    const row = wit.carcasses.find((r) => r.carcass.id === "onderkast-60x60x80");
    expect(row?.articleNumber).toBe("502.056.26");

    const zwart = deriveShoppingList(
      plannerReducer(sampleDesign(), { type: "SET_CARCASS_COLOR", color: "houtpatroon-zwart" }),
    );
    const rowZwart = zwart.carcasses.find((r) => r.carcass.id === "onderkast-60x60x80");
    expect(rowZwart?.articleNumber).toBe("902.056.34");
  });

  it("sorteert kastregels op type en dan op breedte", () => {
    const list = deriveShoppingList(sampleDesign());
    const keys = list.carcasses.map((r) => `${r.carcass.type}:${r.carcass.b}`);
    const sorted = [...list.carcasses]
      .sort(
        (a, b) => a.carcass.type.localeCompare(b.carcass.type) || a.carcass.b - b.carcass.b,
      )
      .map((r) => `${r.carcass.type}:${r.carcass.b}`);
    expect(keys).toEqual(sorted);
  });

  it("vat de apparatuur samen met aantallen", () => {
    const list = deriveShoppingList(sampleDesign());
    expect(list.appliances).toHaveLength(1);
    expect(list.appliances[0]).toMatchObject({ count: 1 });
    expect(list.appliances[0].appliance.id).toBe("oven");
  });

  it("telt alle casco's voor het aantal maatwerk-fronten", () => {
    // 3 kasten + 1 host-casco van de oven = 4 casco's.
    expect(deriveShoppingList(sampleDesign()).totalCarcassCount).toBe(4);
  });

  it("lost de maatwerk-keuzes op naar catalogus-objecten", () => {
    const list = deriveShoppingList(sampleDesign());
    expect(list.frontStyle?.id).toBe("shaker");
    expect(list.frontFinish?.id).toBe("saliegroen");
    expect(list.worktop?.id).toBe("eiken-massief");
    expect(list.sidePanelFinish).toBeNull(); // null = zelfde als fronten
  });

  it("geeft een lege lijst voor een leeg ontwerp", () => {
    const list = deriveShoppingList(initialDesign());
    expect(list.carcasses).toEqual([]);
    expect(list.appliances).toEqual([]);
    expect(list.totalCarcassCount).toBe(0);
  });
});

describe("formatShoppingList", () => {
  it("bevat alle secties van de bestellijst", () => {
    const text = formatShoppingList(deriveShoppingList(sampleDesign()));
    for (const section of ["RUIMTE", "STANDAARD KASTEN", "APPARATUUR", "FRONTEN", "WERKBLAD"]) {
      expect(text).toContain(section);
    }
  });

  it("toont aantallen, maten en artikelnummers", () => {
    const text = formatShoppingList(deriveShoppingList(sampleDesign()));
    expect(text).toContain("2× Onderkast — 60×60×80 cm");
    expect(text).toContain("502.056.26");
  });

  it("kan artikelnummers weglaten", () => {
    const text = formatShoppingList(deriveShoppingList(sampleDesign()), {
      includeArticleNumbers: false,
    });
    expect(text).not.toContain("502.056.26");
  });

  it("benoemt het gekozen werkblad met de externe-bestelling-noot", () => {
    const text = formatShoppingList(deriveShoppingList(sampleDesign()));
    expect(text).toContain("Massief eiken");
    expect(text).toMatch(/externe partij/i);
  });

  it("toont placeholders bij een leeg ontwerp", () => {
    const text = formatShoppingList(deriveShoppingList(initialDesign()));
    expect(text).toContain("- nog geen kasten -");
    expect(text).toContain("- nog geen apparatuur -");
  });
});

describe("formatShoppingList met een eigen labelset", () => {
  /** Engelse labelset — staat model voor elke niet-NL locale. */
  const en: ShoppingListLabels = {
    title: "KITCHEN ORDER LIST",
    roomTitle: "ROOM",
    roomLine: ({ widthCm, depthCm, ceilingHeightCm }) =>
      `${widthCm} × ${depthCm} cm · ceiling height ${ceilingHeightCm} cm`,
    carcassesTitle: (color) => `STANDARD CABINETS (frame — ${color})`,
    carcassColor: { wit: "white", "houtpatroon-zwart": "black wood effect" },
    carcassType: (type) => `Cabinet (${type})`,
    applianceLabel: (appliance) => `Appliance ${appliance.id}`,
    articleNumberLabel: "Art. no.",
    carcassNote: "Article numbers via IKEA NL — verified with your quote.",
    emptyCarcasses: "- no cabinets yet -",
    appliancesTitle: "APPLIANCES (standard sizes — brand of your choice)",
    emptyAppliances: "- no appliances yet -",
    frontsTitle: "FRONTS & SIDE PANELS (bespoke)",
    frontsLabel: "Fronts:",
    sidePanelsLabel: "Side panels:",
    sidePanelSameAsFronts: "same finish as the fronts",
    notChosen: "to be chosen",
    carcassCount: (count) => `${count} frames`,
    worktopTitle: "WORKTOP",
    worktopChosen: (label) => `Chosen look: ${label}`,
    worktopNote: "Supplied by an external partner — outside this order list.",
  };

  it("gebruikt uitsluitend de meegegeven labels — geen Nederlands meer", () => {
    const text = formatShoppingList(deriveShoppingList(sampleDesign()), { labels: en });
    expect(text).toContain("KITCHEN ORDER LIST");
    expect(text).toContain("ceiling height");
    expect(text).toContain("STANDARD CABINETS (frame — white)");
    expect(text).toContain("APPLIANCES");
    expect(text).toContain("Side panels: same finish as the fronts");
    expect(text).toContain("Supplied by an external partner");
    // Geen Nederlandse resten uit de standaardlabels of de catalogus.
    for (const dutch of [
      "RUIMTE",
      "plafondhoogte",
      "STANDAARD KASTEN",
      "Onderkast",
      "Zijpanelen",
      "externe partij",
      "nog te kiezen",
    ]) {
      expect(text, `bevat nog NL: ${dutch}`).not.toContain(dutch);
    }
  });

  it("vertaalt ook de cascokleur en het aantal casco's", () => {
    const design = plannerReducer(sampleDesign(), {
      type: "SET_CARCASS_COLOR",
      color: "houtpatroon-zwart",
    });
    const text = formatShoppingList(deriveShoppingList(design), { labels: en });
    expect(text).toContain("black wood effect");
    expect(text).toContain("4 frames");
  });

  it("valt terug op de Nederlandse labels zonder labels-optie", () => {
    const list = deriveShoppingList(sampleDesign());
    expect(formatShoppingList(list)).toBe(
      formatShoppingList(list, { labels: dutchShoppingListLabels }),
    );
  });

  it("toont de vertaalde placeholders bij een leeg ontwerp", () => {
    const text = formatShoppingList(deriveShoppingList(initialDesign()), { labels: en });
    expect(text).toContain("- no cabinets yet -");
    expect(text).toContain("- no appliances yet -");
    expect(text).toContain("to be chosen");
  });
});
