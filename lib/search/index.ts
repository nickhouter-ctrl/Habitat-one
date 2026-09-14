// Eén zoekindex voor de héle site: range-producten én meubels, plus de
// categorie-, ruimte- en dienstpagina's waar ze onder hangen.
//
// Waarom op de server en niet in de client: de catalogus is ~1000 producten met
// omschrijvingen in vier talen. Dat in de header-bundel meesturen zou elke
// pagina tientallen procenten zwaarder maken. Het zoeken draait daarom in
// app/api/search (voor de suggesties tijdens het typen) en in de /search-pagina;
// de client krijgt alleen de treffers terug.
//
// De index wordt per taal één keer opgebouwd en daarna hergebruikt — scoren over
// ~1050 entries kost daarna minder dan een milliseconde per toetsaanslag.

import {
  catalogProducts,
  catalogSpaces,
  collectionHref,
  collections,
  type CatalogProduct,
} from "@/lib/data/catalog";
import { services } from "@/lib/data/services";

/** Waar een treffer vandaan komt — de UI groepeert hierop. */
export type HitGroup = "range" | "collection" | "space" | "service";

export interface SearchHit {
  kind: "product" | "category";
  /** Product-slug bij een producttreffer — waarmee de pagina de kaart ophaalt. */
  slug: string | null;
  href: string;
  title: string;
  /** Regel onder de titel: de categorie bij een product, het soort bij een
   *  categoriepagina ("Categorie", "Ruimte", "Dienst"). */
  subtitle: string | null;
  image: string | null;
  group: HitGroup;
}

export interface SearchResults {
  query: string;
  /** Categorie-/ruimte-/dienstpagina's die op de zoekterm passen (max 6). */
  categories: SearchHit[];
  /** Producttreffers, aflopend op relevantie — afgekapt op `limit`. */
  products: SearchHit[];
  /** Totaal aantal producttreffers vóór het afkappen. */
  total: number;
}

/** Vertaalde labels die de index nodig heeft; zie lib/search/labels.ts. */
export interface SearchLabels {
  /** products.i18n.<slug>.name, of null als die vertaling er niet is. */
  productName(slug: string): string | null;
  /** products.i18n.<slug>.short, of null. */
  productShort(slug: string): string | null;
  /** Label van een range-collectie (products.<key>). */
  collectionLabel(key: string): string;
  /** Naam van een ruimte (spaces.names.<slug>). */
  spaceName(slug: string): string;
  /** Soortaanduiding onder een categorietreffer ("Categorie", "Ruimte", "Dienst"). */
  categoryKind(group: Exclude<HitGroup, "range">): string;
}

// De volledige omschrijvingen lopen tot ~2 kB per product. Zoeken in de eerste
// alinea is ruim genoeg en houdt de index onder een paar MB per taal.
const BODY_CHARS = 600;

/** Kleinletters zonder accenten — "Sofá" en "sofa" horen hetzelfde te matchen. */
export function normalize(input: string): string {
  return input
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase();
}

/** Splits een zoekterm in losse woorden; leestekens vallen weg. */
function terms(query: string): string[] {
  return normalize(query)
    .replace(/[^\p{L}\p{N}]+/gu, " ")
    .split(" ")
    .filter(Boolean);
}


interface Entry {
  hit: SearchHit;
  /** Genormaliseerde titel. */
  name: string;
  /** Losse woorden uit de titel — voor "begint met"-treffers midden in de naam. */
  words: string[];
  /** Categorie-, kleur- en ruimtelabels: minder zwaar dan de naam. */
  keywords: string;
  /** Omschrijving: het lichtste signaal. */
  body: string;
  /** Alle SKU's zonder leestekens, zodat "ms167" ook "MS-167" vindt. */
  sku: string;
}

function push(target: string[], ...values: (string | null | undefined)[]) {
  for (const v of values) if (v) target.push(v);
}

// --- Index opbouwen --------------------------------------------------------

function productEntry(p: CatalogProduct, labels: SearchLabels): Entry {
  // Flexible Stone wordt in elke taal onder zijn Engelse naam verkocht — zelfde
  // regel als in de productkaart, anders wijkt de zoeksuggestie af van de kaart.
  const localName = p.collection === "wall-panels" ? null : labels.productName(p.slug);
  const title = localName ?? p.name;

  const collectionKey = collections.find((c) => c.id === p.collection)?.key;
  const collectionName = collectionKey ? labels.collectionLabel(collectionKey) : null;

  const keywords: string[] = [];

  // De Engelse basisnaam blijft doorzoekbaar, ook als de titel vertaald is.
  push(keywords, p.name, p.slug.replace(/-/g, " "));
  push(keywords, collectionName, p.collection.replace(/-/g, " "));
  // Merkproducten: merk, serie en producttype ("Brauer", "Douchewanden").
  push(keywords, p.brand, p.series, p.productType);

  for (const slug of p.spaces) push(keywords, slug.replace(/-/g, " "), labels.spaceName(slug));
  for (const slug of p.materials) push(keywords, slug.replace(/-/g, " "));
  for (const v of p.variants) push(keywords, v.name, v.colour, v.piece);
  push(keywords, p.dimensions, ...(p.additionalSizes ?? []));

  // Elk SKU twee keer: met de leestekens als spatie ("ms 167") én helemaal
  // dichtgeschoven ("ms167"), zodat zowel "MS-167" als "ms167" raak is.
  const skus = [p.sku, ...p.variants.map((v) => v.sku)]
    .filter((v): v is string => Boolean(v))
    .flatMap((raw) => {
      const n = normalize(raw);
      return [n.replace(/[^a-z0-9]+/g, " "), n.replace(/[^a-z0-9]+/g, "")];
    })
    .join(" ");
  const body = [labels.productShort(p.slug), p.short, p.description]
    .filter(Boolean)
    .join(" ")
    .slice(0, BODY_CHARS);

  const name = normalize(title);
  return {
    hit: {
      kind: "product",
      slug: p.slug,
      href: `/products/${p.slug}`,
      title,
      subtitle: collectionName,
      image: p.image,
      group: "range",
    },
    name,
    words: name.split(/[^\p{L}\p{N}]+/u).filter(Boolean),
    keywords: normalize(keywords.join(" ")),
    body: normalize(body),
    sku: skus,
  };
}

function categoryEntry(
  title: string,
  href: string,
  group: Exclude<HitGroup, "range">,
  keywords: string[],
  labels: SearchLabels,
): Entry {
  const name = normalize(title);
  return {
    hit: {
      kind: "category",
      slug: null,
      href,
      title,
      // Zonder soort staan "Badkamer" (collectie) en "Badkamer" (ruimte) als
      // twee identieke suggesties naast elkaar.
      subtitle: labels.categoryKind(group),
      image: null,
      group,
    },
    name,
    words: name.split(/[^\p{L}\p{N}]+/u).filter(Boolean),
    keywords: normalize([title, ...keywords].join(" ")),
    body: "",
    sku: "",
  };
}

/** De talen waarin diensten een eigen titel/tagline hebben (lib/data/services.ts). */
type IndexLocale = "nl" | "en" | "es" | "de" | "fr" | "zh";
const INDEX_LOCALES: readonly IndexLocale[] = ["nl", "en", "es", "de", "fr", "zh"];

function buildIndex(locale: string, labels: SearchLabels): Entry[] {
  const loc: IndexLocale = INDEX_LOCALES.includes(locale as IndexLocale) ? (locale as IndexLocale) : "en";
  const entries: Entry[] = [];

  for (const p of catalogProducts) entries.push(productEntry(p, labels));

  // --- Categoriepagina's ---
  for (const c of collections) {
    entries.push(
      categoryEntry(
        labels.collectionLabel(c.key),
        collectionHref(c.id),
        "collection",
        [c.id.replace(/-/g, " ")],
        labels,
      ),
    );
  }

  for (const s of catalogSpaces) {
    entries.push(
      categoryEntry(
        labels.spaceName(s.slug),
        `/spaces/${s.slug}`,
        "space",
        [s.name, s.slug.replace(/-/g, " ")],
        labels,
      ),
    );
  }

  for (const s of services) {
    entries.push(
      categoryEntry(
        s.title[loc] ?? s.title.en,
        `/services/${s.slug}`,
        "service",
        [s.title.en, s.tagline[loc] ?? s.tagline.en, s.slug.replace(/-/g, " ")],
        labels,
      ),
    );
  }

  return entries;
}

// Per taal één keer opbouwen. De labels zijn per taal constant, dus een
// tweede aanroep met dezelfde locale mag de bestaande index hergebruiken.
const indexCache = new Map<string, Entry[]>();

function getIndex(locale: string, labels: SearchLabels): Entry[] {
  const cached = indexCache.get(locale);
  if (cached) return cached;
  const built = buildIndex(locale, labels);
  indexCache.set(locale, built);
  return built;
}

// --- Scoren ----------------------------------------------------------------

/**
 * Relevantie van één entry. Elk zoekwoord moet érgens raken (0 = geen treffer),
 * zodat "witte bank" niet alles teruggeeft wat óf wit óf een bank is.
 */
function score(e: Entry, words: string[], phrase: string): number {
  let total = 0;
  for (const w of words) {
    let best = 0;
    if (e.name === w) best = 140;
    else if (e.name.startsWith(w)) best = 90;
    else if (e.words.some((x) => x.startsWith(w))) best = 70;
    else if (e.name.includes(w)) best = 45;
    if (w.length >= 2 && e.sku.includes(w)) best = Math.max(best, 110);
    if (best === 0 && e.keywords.includes(w)) best = 30;
    if (best === 0 && e.body.includes(w)) best = 10;
    if (best === 0) return 0;
    total += best;
  }
  // De hele zoekterm aaneengesloten in de naam is een sterker signaal dan de
  // losse woorden bij elkaar ("side table" vóór een tafel met een zijpaneel).
  if (words.length > 1 && e.name.includes(phrase)) total += 50;
  // Een kaart zonder foto is een slechte eerste indruk in de suggestielijst.
  if (e.hit.image) total += 6;
  return total;
}

/**
 * Zoek door de hele catalogus. `limit` kapt alleen de producten af — `total`
 * blijft het echte aantal, zodat de UI "alle 128 resultaten" kan tonen.
 */
export function search(
  query: string,
  locale: string,
  labels: SearchLabels,
  opts: { limit?: number } = {},
): SearchResults {
  const words = terms(query);
  if (words.length === 0) return { query, categories: [], products: [], total: 0 };

  const phrase = words.join(" ");
  const index = getIndex(locale, labels);

  const products: { hit: SearchHit; s: number }[] = [];
  const categories: { hit: SearchHit; s: number }[] = [];
  for (const e of index) {
    const s = score(e, words, phrase);
    if (s === 0) continue;
    (e.hit.kind === "product" ? products : categories).push({ hit: e.hit, s });
  }

  const byScore = (a: { hit: SearchHit; s: number }, b: { hit: SearchHit; s: number }) =>
    b.s - a.s || a.hit.title.localeCompare(b.hit.title, locale);
  products.sort(byScore);
  categories.sort(byScore);

  const limit = opts.limit ?? products.length;
  return {
    query,
    categories: categories.slice(0, 6).map((x) => x.hit),
    products: products.slice(0, limit).map((x) => x.hit),
    total: products.length,
  };
}
