import { catalogProducts, type CatalogProduct, type ProductVariant } from "./products.generated";
import { catalogMaterials, type CatalogMaterial } from "./materials.generated";
import { catalogSpaces, type CatalogSpace } from "./spaces.generated";
import { catalogCategories, type CatalogCategory } from "./categories.generated";

export type Collection = CatalogProduct["collection"];

// Manual collection fixes on top of the auto-generated classification.
// (The catalog's own categories don't cleanly map to our three storefront
//  collections, so a handful of products need to be re-bucketed by hand.)
const COLLECTION_OVERRIDES: Record<string, Collection> = {
  // Magic Flexibel Stone wall panels miscategorised as bathroom
  "ms-travertino": "wall-panels",
  // Small bathroom accessories — belong in "Accessories", not the fixtures bucket
  "solid-surface-bathroom-tray-250-250-25-1765881448962": "accessories",
  "towel-bar-627-71-25-1765881449656": "accessories",
  "robe-hook-80-72-36-1765881450340": "accessories",
  "double-towel-rack-625-219-151-1765881450705": "accessories",
  "paper-holder-173-89-55-1765881449490": "accessories",
  "toilet-brush-holder-389-195-140-1765881450523": "accessories",
  "makeup-mirrors-200mm-1765881449818": "accessories",
  "mirror-600-800-30-1765881449334": "accessories",
  "mirror-400x800x20mm": "accessories",
};
for (const p of catalogProducts) {
  const o = COLLECTION_OVERRIDES[p.slug];
  if (o) p.collection = o;
}

// ---------------------------------------------------------------------------
// Real product photography overrides.
// The auto-generated catalogue points at scraped placeholder thumbnails. As
// real, owned product shots come in we map them here per product slug. Each
// variant is matched by name; `card` becomes the grid/hero thumbnail.
// This runs after import, so it survives the prebuild regeneration.
// ---------------------------------------------------------------------------
interface ProductImageOverride {
  /** Replacement card/grid image */
  card: string;
  /** Variant name (lowercased) → ordered list of images */
  variants: Record<string, string[]>;
}
const MAGIC = "/products/magic";
const PRODUCT_IMAGE_OVERRIDES: Record<string, ProductImageOverride> = {
  "concrete-board-": {
    card: `${MAGIC}/concrete-board-pure-white.png`,
    // Per variant: clean product shot → in-room scene → texture close-up.
    variants: {
      "pure white": [
        `${MAGIC}/concrete-board-pure-white.png`,
        `${MAGIC}/concrete-board-pure-white-hero.png`,
        `${MAGIC}/concrete-board-pure-white-closeup.png`,
      ],
      beige: [
        `${MAGIC}/concrete-board-beige.png`,
        `${MAGIC}/concrete-board-beige-hero.png`,
        `${MAGIC}/concrete-board-beige-closeup.png`,
      ],
      "light grey": [
        `${MAGIC}/concrete-board-light-grey.png`,
        `${MAGIC}/concrete-board-light-grey-hero.png`,
        `${MAGIC}/concrete-board-light-grey-closeup.png`,
      ],
      "medium grey": [
        `${MAGIC}/concrete-board-medium-grey.png`,
        `${MAGIC}/concrete-board-medium-grey-hero.png`,
        `${MAGIC}/concrete-board-medium-grey-closeup.png`,
      ],
    },
  },
  "ripple-board-": {
    card: `${MAGIC}/ripple-board-beige.png`,
    variants: {
      beige: [
        `${MAGIC}/ripple-board-beige.png`,
        `${MAGIC}/ripple-board-beige-hero.png`,
        `${MAGIC}/ripple-board-beige-closeup.png`,
      ],
      "concrete grey": [
        `${MAGIC}/ripple-board-concrete-grey.png`,
        `${MAGIC}/ripple-board-concrete-grey-hero.png`,
      ],
      red: [
        `${MAGIC}/ripple-board-red.png`,
        `${MAGIC}/ripple-board-red-hero.png`,
        `${MAGIC}/ripple-board-red-closeup.png`,
      ],
    },
  },
};
for (const p of catalogProducts) {
  const ov = PRODUCT_IMAGE_OVERRIDES[p.slug];
  if (!ov) continue;
  for (const v of p.variants) {
    const key = (v.name ?? "").toLowerCase().trim();
    const imgs = ov.variants[key];
    if (imgs) v.images = imgs;
  }
  p.image = ov.card;
}

// ---------------------------------------------------------------------------
// Rich media (video + shared context imagery) keyed by product slug. Kept
// separate from the catalogue's string[] image lists so we can attach video
// per colour variant and a set of "in context" stills (flexibility USPs etc.).
// ---------------------------------------------------------------------------
export interface ProductMedia {
  /** lowercased variant name → autoplay loop video src */
  videos?: Record<string, string>;
  /** Shared context / USP stills shown below the main product area */
  context?: string[];
}
export const productMedia: Record<string, ProductMedia> = {
  "concrete-board-": {
    videos: {
      "pure white": `${MAGIC}/concrete-board-pure-white.mp4`,
      beige: `${MAGIC}/concrete-board-beige.mp4`,
      "light grey": `${MAGIC}/concrete-board-light-grey.mp4`,
      "medium grey": `${MAGIC}/concrete-board-medium-grey.mp4`,
    },
    context: [`${MAGIC}/usp-hand-flex.png`, `${MAGIC}/usp-curved-wall.png`],
  },
  "ripple-board-": {
    videos: {
      beige: `${MAGIC}/ripple-board-beige.mp4`,
    },
    // Three in-situ room scenes — japandi, hallway, restaurant.
    context: [
      `${MAGIC}/ripple-board-beige-hero.png`,
      `${MAGIC}/ripple-board-concrete-grey-hero.png`,
      `${MAGIC}/ripple-board-red-hero.png`,
    ],
  },
};
export function getProductMedia(slug: string): ProductMedia | null {
  return productMedia[slug] ?? null;
}

export { catalogProducts, catalogMaterials, catalogSpaces, catalogCategories };
export type { CatalogProduct, CatalogMaterial, CatalogSpace, CatalogCategory, ProductVariant };

export const collections: { id: Collection; key: string }[] = [
  { id: "wall-panels", key: "collectionWallPanels" },
  { id: "bathroom", key: "collectionBathroom" },
  { id: "doors", key: "collectionDoors" },
  { id: "accessories", key: "collectionAccessories" },
];

export const productsWithImages = catalogProducts.filter((p) => p.image);

export function getProductBySlug(slug: string): CatalogProduct | null {
  return catalogProducts.find((p) => p.slug === slug) ?? null;
}
export function getMaterialBySlug(slug: string): CatalogMaterial | null {
  return catalogMaterials.find((m) => m.slug === slug) ?? null;
}
export function getSpaceBySlug(slug: string): CatalogSpace | null {
  return catalogSpaces.find((s) => s.slug === slug) ?? null;
}
export function getCategoryBySlug(slug: string): CatalogCategory | null {
  return catalogCategories.find((c) => c.slug === slug) ?? null;
}

export function productsForMaterial(slug: string) {
  return catalogProducts.filter((p) => p.materials.includes(slug));
}
export function productsForSpace(slug: string) {
  return catalogProducts.filter((p) => p.spaces.includes(slug));
}
export function productsByCollection(c: Collection) {
  return catalogProducts.filter((p) => p.collection === c);
}

export function materialName(slug: string, locale?: string): string {
  const m = getMaterialBySlug(slug);
  if (!m) return slug;
  const l = (locale as "nl" | "de" | "en" | "es" | undefined) ?? null;
  if (l && m.nameI18n && m.nameI18n[l]) return m.nameI18n[l];
  return m.name;
}
export function spaceName(slug: string): string {
  return getSpaceBySlug(slug)?.name ?? slug;
}

/** All images of a product, deduped (across all variants). */
export function productImages(p: CatalogProduct): string[] {
  const seen = new Set<string>();
  const out: string[] = [];
  if (p.image) {
    seen.add(p.image);
    out.push(p.image);
  }
  for (const v of p.variants) for (const img of v.images) if (!seen.has(img)) { seen.add(img); out.push(img); }
  return out;
}

/** True when the product offers more than one colour option (each with imagery). */
export function hasColourOptions(p: CatalogProduct): boolean {
  return p.variants.filter((v) => v.colorHex || v.name).length > 1;
}

export function featuredProducts(n = 8): CatalogProduct[] {
  const withImg = productsWithImages;
  const byCol: Record<string, CatalogProduct[]> = { "wall-panels": [], bathroom: [], accessories: [], doors: [], "door-accessories": [] };
  // prefer products that offer colour options
  const sorted = [...withImg].sort((a, b) => (b.variants.length > 1 ? 1 : 0) - (a.variants.length > 1 ? 1 : 0));
  for (const p of sorted) byCol[p.collection].push(p);
  const picked: CatalogProduct[] = [];
  let i = 0;
  while (picked.length < n && (byCol["wall-panels"].length || byCol.bathroom.length || byCol.accessories.length || byCol.doors.length || byCol["door-accessories"].length)) {
    const order = i % 2 === 0 ? ["wall-panels", "bathroom", "doors", "door-accessories", "accessories"] : ["bathroom", "wall-panels", "doors", "door-accessories", "accessories"];
    for (const c of order) {
      const next = byCol[c].shift();
      if (next && picked.length < n) picked.push(next);
    }
    i++;
  }
  return picked;
}

export function relatedProducts(product: CatalogProduct, n = 4): CatalogProduct[] {
  return productsWithImages.filter((p) => p.id !== product.id && p.collection === product.collection).slice(0, n);
}
