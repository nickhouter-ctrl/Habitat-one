import { describe, expect, it } from "vitest";
import nl from "@/messages/nl.json";
import { search, type SearchLabels } from "@/lib/search";

// De echte Nederlandse teksten, zodat de test dezelfde labels ziet als de site.
const messages = nl as unknown as {
  products: Record<string, unknown> & { i18n: Record<string, { name?: string; short?: string }> };
  spaces: { names: Record<string, string> };
  furniture: { title: string };
  search: Record<string, string>;
};

const labels: SearchLabels = {
  productName: (slug) => messages.products.i18n[slug]?.name ?? null,
  productShort: (slug) => messages.products.i18n[slug]?.short ?? null,
  collectionLabel: (key) => (messages.products[key] as string) ?? key,
  spaceName: (slug) => messages.spaces.names[slug] ?? slug,
  furnitureTitle: messages.furniture.title,
  categoryKind: (group) =>
    messages.search[
      { collection: "kindCategory", space: "kindSpace", service: "kindService" }[group]
    ],
};

const find = (q: string) => search(q, "nl", labels);

describe("sitebrede zoekfunctie", () => {
  it("vindt meubels op het Nederlandse woord — de reden dat deze index bestaat", () => {
    const { products, categories } = find("meubels");
    expect(products.length).toBeGreaterThan(100);
    expect(products.every((p) => p.group === "furniture")).toBe(true);
    expect(categories.some((c) => c.href === "/furniture")).toBe(true);
  });

  it("vindt banken zowel op het Nederlandse als het Engelse woord", () => {
    const nlHits = find("banken").products;
    const enHits = find("sofa").products;
    expect(nlHits.length).toBeGreaterThan(0);
    expect(enHits.length).toBeGreaterThan(0);
    // Beide zoekwoorden wijzen naar dezelfde categorie.
    expect(find("banken").categories.some((c) => c.href === "/furniture/sofas")).toBe(true);
    expect(find("sofa").categories.some((c) => c.href === "/furniture/sofas")).toBe(true);
  });

  it("blijft range-producten en collecties vinden", () => {
    const { products, categories } = find("travertino");
    expect(products.some((p) => p.group === "range")).toBe(true);
    expect(find("badkamer").categories.concat(categories).some((c) => c.kind === "category")).toBe(true);
  });

  it("vindt een product op SKU, ook zonder streepje", () => {
    const withDash = find("MS-167").products;
    const withoutDash = find("ms167").products;
    expect(withDash.length).toBeGreaterThan(0);
    expect(withoutDash[0]?.href).toBe(withDash[0]?.href);
  });

  it("eist dat élk zoekwoord raakt", () => {
    expect(find("bank zzzzzzz").products).toHaveLength(0);
  });

  it("negeert accenten en hoofdletters", () => {
    expect(find("SOFÁ").products.length).toBeGreaterThan(0);
  });

  it("geeft niets terug op een lege zoekterm", () => {
    expect(find("   ")).toMatchObject({ products: [], categories: [], total: 0 });
  });

  it("kapt af op `limit` maar houdt `total` eerlijk", () => {
    const capped = search("meubels", "nl", labels, { limit: 5 });
    expect(capped.products).toHaveLength(5);
    expect(capped.total).toBeGreaterThan(5);
  });
});
