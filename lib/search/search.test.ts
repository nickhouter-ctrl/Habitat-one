import { describe, expect, it } from "vitest";
import nl from "@/messages/nl.json";
import { search, type SearchLabels } from "@/lib/search";

// De echte Nederlandse teksten, zodat de test dezelfde labels ziet als de site.
const messages = nl as unknown as {
  products: Record<string, unknown> & { i18n: Record<string, { name?: string; short?: string }> };
  spaces: { names: Record<string, string> };
  search: Record<string, string>;
};

const labels: SearchLabels = {
  productName: (slug) => messages.products.i18n[slug]?.name ?? null,
  productShort: (slug) => messages.products.i18n[slug]?.short ?? null,
  collectionLabel: (key) => (messages.products[key] as string) ?? key,
  spaceName: (slug) => messages.spaces.names[slug] ?? slug,
  categoryKind: (group) =>
    messages.search[
      { collection: "kindCategory", space: "kindSpace", service: "kindService" }[group]
    ],
};

const find = (q: string) => search(q, "nl", labels);

describe("sitebrede zoekfunctie", () => {
  it("vindt de Brauer-badkamercollectie op merk en producttype", () => {
    const { products } = find("brauer");
    expect(products.length).toBeGreaterThan(50);
    expect(products.every((p) => p.group === "range")).toBe(true);
    expect(find("douchewanden").products.length).toBeGreaterThan(10);
  });

  it("vindt een badkamermeubel onder de badkamercollectie — de meubeltab bestaat niet meer", () => {
    const { products, categories } = find("meubelset");
    expect(products.length).toBeGreaterThan(0);
    expect(products.every((p) => p.subtitle === messages.products.collectionBathroom)).toBe(true);
    expect(categories.some((c) => c.href.startsWith("/furniture"))).toBe(false);
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
    expect(find("kraan zzzzzzz").products).toHaveLength(0);
  });

  it("negeert accenten en hoofdletters", () => {
    expect(find("DOUCHEWÁND").products.length).toBeGreaterThan(0);
  });

  it("geeft niets terug op een lege zoekterm", () => {
    expect(find("   ")).toMatchObject({ products: [], categories: [], total: 0 });
  });

  it("kapt af op `limit` maar houdt `total` eerlijk", () => {
    const capped = search("brauer", "nl", labels, { limit: 5 });
    expect(capped.products).toHaveLength(5);
    expect(capped.total).toBeGreaterThan(5);
  });
});
