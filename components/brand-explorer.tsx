"use client";

import { useMemo, useState } from "react";

import { ProductCard } from "@/components/cards/product-card";
import type { CatalogProduct } from "@/lib/data/catalog";
import { cn } from "@/lib/utils";

/**
 * De producten van één merk, met de filters die bij een merkassortiment horen:
 * serie, type en kleur.
 *
 * Bewust een eigen component en niet de gedeelde ProductsExplorer. Die filtert
 * op collectie, ruimte en materiaal — nuttig voor het eigen assortiment, maar
 * niet wat je bij een merk zoekt. En de kleurherkenning daar kent geen
 * metaalkleuren: goud zou onder "geel" belanden en koper onder "terracotta".
 * Hier komen de kleuren rechtstreeks uit de keuze-assen van de producten zelf,
 * dus ze kloppen per definitie.
 */
export function BrandExplorer({
  products,
  labels,
}: {
  products: CatalogProduct[];
  labels: { all: string; series: string; type: string; colour: string; results: string; empty: string };
}) {
  const [serie, setSerie] = useState("all");
  const [type, setType] = useState("all");
  const [kleur, setKleur] = useState("all");

  /** De kleuren van een product, uit zijn keuze-assen. */
  const kleurenVan = (p: CatalogProduct): string[] => {
    const as = p.optionAxes?.find((a) => a.key === "kleur" || a.label.toLowerCase() === "kleur");
    return as ? as.values.map((v) => v.label) : [];
  };

  const series = useMemo(
    () => [...new Set(products.map((p) => p.series).filter((s): s is string => !!s))].sort(),
    [products],
  );
  // "Type" is de categorie zoals die uit de catalogus komt: wastafelkranen,
  // douchekranen, douchegoten, badkamermeubels.
  const typeVan = (p: CatalogProduct) => p.productType ?? null;
  const types = useMemo(
    () => [...new Set(products.map(typeVan).filter((t): t is string => !!t))].sort(),
    [products],
  );
  const kleuren = useMemo(
    () => [...new Set(products.flatMap(kleurenVan))].sort((a, b) => a.localeCompare(b, "nl")),
    [products],
  );

  const zichtbaar = useMemo(
    () =>
      products.filter(
        (p) =>
          (serie === "all" || p.series === serie) &&
          (type === "all" || typeVan(p) === type) &&
          (kleur === "all" || kleurenVan(p).includes(kleur)),
      ),
    [products, serie, type, kleur],
  );

  const rij = (
    titel: string,
    waarden: string[],
    gekozen: string,
    zet: (v: string) => void,
    telling: (v: string) => number,
  ) =>
    waarden.length > 1 && (
      <div>
        <p className="text-[0.66rem] font-medium uppercase tracking-[0.32em] text-ink-soft">{titel}</p>
        <div className="mt-3 flex flex-wrap gap-2">
          {["all", ...waarden].map((w) => {
            const n = w === "all" ? products.length : telling(w);
            return (
              <button
                key={w}
                type="button"
                onClick={() => zet(w)}
                aria-pressed={gekozen === w}
                disabled={n === 0}
                className={cn(
                  "rounded-sm border px-3 py-1.5 text-sm transition-colors",
                  gekozen === w
                    ? "border-ink bg-ink/[0.04] text-ink"
                    : "border-ink/15 text-ink-soft hover:border-ink/40",
                  n === 0 && "opacity-35",
                )}
              >
                {w === "all" ? labels.all : w}
                <span className="ml-2 text-ink/40">{n}</span>
              </button>
            );
          })}
        </div>
      </div>
    );

  return (
    <div className="space-y-10">
      <div className="space-y-7">
        {rij(labels.series, series, serie, setSerie, (v) => products.filter((p) => p.series === v).length)}
        {rij(labels.type, types, type, setType, (v) => products.filter((p) => typeVan(p) === v).length)}
        {rij(labels.colour, kleuren, kleur, setKleur, (v) => products.filter((p) => kleurenVan(p).includes(v)).length)}
      </div>

      <p className="text-sm text-ink-soft">
        {zichtbaar.length} {labels.results}
      </p>

      {zichtbaar.length === 0 ? (
        <p className="py-16 text-center text-ink-soft">{labels.empty}</p>
      ) : (
        <div className="grid grid-cols-2 gap-x-6 gap-y-12 md:grid-cols-3 lg:grid-cols-4">
          {zichtbaar.map((p, i) => (
            <ProductCard key={p.id} product={p} priority={i < 4} />
          ))}
        </div>
      )}
    </div>
  );
}
