"use client";

import { useEffect, useMemo, useState } from "react";
import { useLocale } from "next-intl";
import { useSearchParams } from "next/navigation";

import { ProductCard } from "@/components/cards/product-card";
import type { CatalogProduct } from "@/lib/data/catalog";
import { term } from "@/lib/data/catalog-i18n";
import { cn } from "@/lib/utils";

/**
 * De producten van één merk, met de filters die bij een merkassortiment horen:
 * serie, type en kleur — in een vaste zijbalk, zoals een webshop dat doet.
 *
 * Bewust een eigen component en niet de gedeelde ProductsExplorer. Die filtert
 * op collectie, ruimte en materiaal — nuttig voor het eigen assortiment, maar
 * niet wat je bij een merk zoekt. En de kleurherkenning daar kent geen
 * metaalkleuren: goud zou onder "geel" belanden en koper onder "terracotta".
 * Hier komen de kleuren rechtstreeks uit de keuze-assen van de producten zelf,
 * dus ze kloppen per definitie.
 *
 * De catalogus is Nederlandstalig; alle waarden gaan door het woordenboek in
 * lib/data/catalog-i18n.ts, zodat de filters in elke taal leesbaar zijn.
 */
export function BrandExplorer({
  products,
  labels,
}: {
  products: CatalogProduct[];
  labels: {
    all: string;
    series: string;
    type: string;
    colour: string;
    one: string;
    many: string;
    empty: string;
    more: string;
    less: string;
  };
}) {
  const locale = useLocale();
  // Beginstand uit de URL, zodat een verwijzing vanaf de badkamerpagina
  // ("Wastafelkranen 14") meteen op dat filter uitkomt en de weergave deelbaar is.
  const params = useSearchParams();
  const [serie, setSerie] = useState(params?.get("serie") ?? "all");
  const [type, setType] = useState(params?.get("type") ?? "all");
  const [kleur, setKleur] = useState(params?.get("kleur") ?? "all");
  // Welke filtergroepen zijn helemaal uitgeklapt? Lange lijsten (meubelkleuren
  // lopen tot 27) vullen anders de hele kolom.
  const [uitgeklapt, setUitgeklapt] = useState<Record<string, boolean>>({});
  // De typetegels bovenaan de merkpagina linken naar dezelfde pagina met een
  // ander filter; de component blijft dan staan, dus de URL moet leidend zijn.
  useEffect(() => {
    setSerie(params?.get("serie") ?? "all");
    setType(params?.get("type") ?? "all");
    setKleur(params?.get("kleur") ?? "all");
  }, [params]);

  /** De kleuren van een product, uit zijn keuze-assen. */
  const kleurenVan = (p: CatalogProduct): string[] => {
    const as = p.optionAxes?.find((a) => a.key === "kleur" || a.label.toLowerCase() === "kleur");
    return as ? as.values.map((v) => v.label) : [];
  };
  const typeVan = (p: CatalogProduct) => p.productType ?? null;

  /**
   * Elk filter telt tegen de set die de ÁNDERE filters overhouden. Klik je op
   * Badkamermeubels, dan blijven alleen de meubelkleuren over — anders sta je
   * naar 31 kleuren te kijken waarvan er dertig niets opleveren. Waarden zonder
   * resultaat verdwijnen; grijs laten staan maakt de lijst alleen maar langer.
   */
  const pas = (p: CatalogProduct, negeer?: "serie" | "type" | "kleur") =>
    (negeer === "serie" || serie === "all" || p.series === serie) &&
    (negeer === "type" || type === "all" || typeVan(p) === type) &&
    (negeer === "kleur" || kleur === "all" || kleurenVan(p).includes(kleur));

  const telSerie = (v: string) => products.filter((p) => pas(p, "serie") && p.series === v).length;
  const telType = (v: string) => products.filter((p) => pas(p, "type") && typeVan(p) === v).length;
  const telKleur = (v: string) =>
    products.filter((p) => pas(p, "kleur") && kleurenVan(p).includes(v)).length;

  const opAlfabet = (a: string, b: string) => term(a, locale).localeCompare(term(b, locale), locale);
  const series = useMemo(
    () =>
      [...new Set(products.map((p) => p.series).filter((s): s is string => !!s))]
        .filter((v) => telSerie(v) > 0)
        .sort(),
    [products, type, kleur, locale],
  );
  const types = useMemo(
    () =>
      [...new Set(products.map(typeVan).filter((t): t is string => !!t))]
        .filter((v) => telType(v) > 0)
        .sort(opAlfabet),
    [products, serie, kleur, locale],
  );
  const kleuren = useMemo(
    () =>
      [...new Set(products.flatMap(kleurenVan))].filter((v) => telKleur(v) > 0).sort(opAlfabet),
    [products, serie, type, locale],
  );

  const zichtbaar = useMemo(
    () => products.filter((p) => pas(p)),
    [products, serie, type, kleur],
  );

  const MAX = 8;

  const groep = (
    titel: string,
    waarden: string[],
    gekozen: string,
    zet: (v: string) => void,
    telling: (v: string) => number,
    /** Hoeveel producten "alles" oplevert — mét de ándere filters erop. */
    totaal: number,
  ) => {
    const alles = uitgeklapt[titel] || waarden.length <= MAX;
    // De gekozen waarde hoort altijd zichtbaar te zijn, ook als hij verderop
    // in de lijst staat — anders lijkt het filter leeg.
    const getoond = alles
      ? waarden
      : [...new Set([...waarden.slice(0, MAX), ...(gekozen !== "all" ? [gekozen] : [])])];
    return (
      waarden.length > 1 && (
      <div>
        <p className="text-[0.66rem] font-medium uppercase tracking-[0.32em] text-ink-soft">{titel}</p>
        <ul className="mt-3 space-y-0.5">
          {["all", ...getoond].map((w) => {
            const n = w === "all" ? totaal : telling(w);
            const actief = gekozen === w;
            return (
              <li key={w}>
                <button
                  type="button"
                  onClick={() => zet(w)}
                  aria-pressed={actief}
                  disabled={n === 0}
                  className={cn(
                    "flex w-full items-baseline justify-between gap-3 py-1 text-left text-sm transition-colors",
                    actief ? "font-medium text-ink" : "text-ink-soft hover:text-ink",
                    n === 0 && "opacity-35",
                  )}
                >
                  <span className={cn(actief && "underline underline-offset-4")}>
                    {w === "all" ? labels.all : term(w, locale)}
                  </span>
                  <span className="shrink-0 text-xs text-ink/40">{n}</span>
                </button>
              </li>
            );
          })}
        </ul>
        {waarden.length > MAX && (
          <button
            type="button"
            onClick={() => setUitgeklapt((u) => ({ ...u, [titel]: !alles }))}
            className="mt-2 text-xs text-ink-soft underline underline-offset-4 hover:text-ink"
          >
            {alles ? labels.less : `${labels.more} (${waarden.length - getoond.length})`}
          </button>
        )}
      </div>
      )
    );
  };

  return (
    <div id="producten" className="grid scroll-mt-32 gap-10 lg:grid-cols-[15rem_1fr] lg:gap-14">
      {/* De filters blijven in beeld terwijl je door het raster scrolt, en
          scrollen zélf als de lijst langer is dan het scherm — anders moet je
          eerst de hele pagina omlaag om bij de laatste kleur te komen.
          `overscroll-contain` houdt dat scrollen binnen de zijbalk. */}
      <aside className="space-y-8 lg:sticky lg:top-28 lg:max-h-[calc(100vh-8rem)] lg:self-start lg:overflow-y-auto lg:overscroll-contain lg:pr-3">
        {groep(labels.series, series, serie, setSerie, telSerie, products.filter((p) => pas(p, "serie")).length)}
        {groep(labels.type, types, type, setType, telType, products.filter((p) => pas(p, "type")).length)}
        {groep(labels.colour, kleuren, kleur, setKleur, telKleur, products.filter((p) => pas(p, "kleur")).length)}
      </aside>

      <div>
        <p className="text-sm text-ink-soft">
          {zichtbaar.length} {zichtbaar.length === 1 ? labels.one : labels.many}
        </p>
        {zichtbaar.length === 0 ? (
          <p className="py-16 text-center text-ink-soft">{labels.empty}</p>
        ) : (
          <div className="mt-8 grid grid-cols-2 gap-x-6 gap-y-12 md:grid-cols-3">
            {zichtbaar.map((p, i) => {
              // Met een kleurfilter opent elke kaart in die kleur; zonder filter
              // wisselen de kleuren over het raster, zodat het overzicht niet één
              // en al chroom is.
              const metFoto = (p.optionAxes?.find((a) => a.key === "kleur")?.values ?? []).filter((w) => w.image);
              const open = kleur !== "all" ? kleur : metFoto.length ? metFoto[i % metFoto.length].value : null;
              return <ProductCard key={p.id} product={p} priority={i < 4} kleur={open} />;
            })}
          </div>
        )}
      </div>
    </div>
  );
}
