import type { MetadataRoute } from "next";
import { locales } from "@/i18n/routing";
import { catalogProducts, catalogSpaces, collectionHref, collections, productsBySubcategory } from "@/lib/data/catalog";
import { furnitureGroups } from "@/lib/data/furniture";
import { services } from "@/lib/data/services";
import { getPublishedProperties } from "@/lib/data/properties";

const BASE = "https://www.habitat-one.com";

// localePrefix is "as-needed" with defaultLocale "en", so English has no
// prefix and the other locales are prefixed (/nl, /es, /de).
function urlFor(locale: string, path: string): string {
  const prefix = locale === "en" ? "" : `/${locale}`;
  if (path === "/") return `${BASE}${prefix}` || BASE;
  return `${BASE}${prefix}${path}`;
}

// One sitemap entry per path, with hreflang alternates for every locale.
function entry(
  path: string,
  opts: {
    changeFrequency?: MetadataRoute.Sitemap[number]["changeFrequency"];
    priority?: number;
    /** Eigen afbeeldingen op deze pagina — levert een image-sitemap-entry op,
     *  zodat de productfoto's in Google Afbeeldingen terecht kunnen komen. */
    images?: string[];
  } = {},
): MetadataRoute.Sitemap[number] {
  const languages: Record<string, string> = {};
  for (const l of locales) languages[l] = urlFor(l, path);
  languages["x-default"] = urlFor("en", path);
  return {
    url: urlFor("en", path),
    lastModified: new Date(),
    changeFrequency: opts.changeFrequency ?? "monthly",
    priority: opts.priority ?? 0.6,
    alternates: { languages },
    ...(opts.images?.length ? { images: opts.images } : {}),
  };
}

/** Alleen eigen, absolute afbeeldings-URL's horen in de image-sitemap; de
 *  meubelfoto's zijn hotlinks naar de CDN's van de leveranciers. */
function ownImage(src: string | null | undefined): string[] {
  return src && src.startsWith("/") ? [`${BASE}${src}`] : [];
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const staticPaths: { path: string; priority: number; freq: MetadataRoute.Sitemap[number]["changeFrequency"] }[] = [
    { path: "/", priority: 1.0, freq: "weekly" },
    { path: "/products", priority: 0.9, freq: "weekly" },
    { path: "/products/all", priority: 0.8, freq: "weekly" },
    { path: "/furniture", priority: 0.9, freq: "weekly" },
    { path: "/furniture/all", priority: 0.8, freq: "weekly" },
    { path: "/spaces", priority: 0.8, freq: "monthly" },
    { path: "/services", priority: 0.7, freq: "monthly" },
    { path: "/projects", priority: 0.7, freq: "monthly" },
    { path: "/properties", priority: 0.7, freq: "weekly" },
    { path: "/sale", priority: 0.6, freq: "monthly" },
    { path: "/showroom", priority: 0.6, freq: "monthly" },
    { path: "/about", priority: 0.6, freq: "yearly" },
    { path: "/contact", priority: 0.6, freq: "yearly" },
    { path: "/location", priority: 0.6, freq: "monthly" },
    { path: "/inspiration", priority: 0.7, freq: "weekly" },
    { path: "/inspiration/events", priority: 0.6, freq: "weekly" },
    { path: "/inspiration/news", priority: 0.6, freq: "weekly" },
    { path: "/inspiration/tips", priority: 0.6, freq: "monthly" },
    { path: "/inspiration/blog", priority: 0.6, freq: "weekly" },
    { path: "/inspiration/partners", priority: 0.6, freq: "monthly" },
    { path: "/inspiration/tips/bouwen-in-spanje-nie-vergunningen", priority: 0.6, freq: "monthly" },
    { path: "/inspiration/tips/materialen-mediterraan-klimaat", priority: 0.6, freq: "monthly" },
    { path: "/inspiration/tips/onze-open-prijsopbouw", priority: 0.6, freq: "monthly" },
    { path: "/inspiration/tips/binnen-buiten-een-materiaal", priority: 0.6, freq: "monthly" },
  ];

  // De keukenplanner bestaat alleen in het Nederlands — één URL, geen
  // hreflang-set. Zie de canonical in app/[locale]/kitchen-planner/page.tsx.
  const kitchenPlanner: MetadataRoute.Sitemap[number] = {
    url: `${BASE}/nl/kitchen-planner`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.6,
  };

  const collectionPaths = collections.map((c) => collectionHref(c.id));

  // Furniture sub-categories that actually have products.
  const furnitureSubPaths = furnitureGroups
    .flatMap((g) => g.subs)
    .filter((s) => productsBySubcategory(s.slug).length > 0)
    .map((s) => `/furniture/${s.slug}`);

  const items: MetadataRoute.Sitemap = [
    ...staticPaths.map((s) => entry(s.path, { priority: s.priority, changeFrequency: s.freq })),
    kitchenPlanner,
    // Flexible Stone is de signatuurcollectie — zelfde gewicht als de hub.
    ...collectionPaths.map((p) =>
      entry(p, {
        priority: p === "/products/flexible-stone" ? 0.9 : 0.8,
        changeFrequency: "weekly",
      }),
    ),
    ...furnitureSubPaths.map((p) => entry(p, { priority: 0.7, changeFrequency: "weekly" })),
    ...catalogProducts.map((p) =>
      entry(`/products/${p.slug}`, { priority: 0.7, images: ownImage(p.image) }),
    ),
    ...catalogSpaces.map((s) => entry(`/spaces/${s.slug}`, { priority: 0.6 })),
    ...services.map((s) => entry(`/services/${s.slug}`, { priority: 0.6 })),
  ];

  // Properties come from the CRM — never let a fetch hiccup break the sitemap.
  try {
    const properties = await getPublishedProperties();
    for (const prop of properties) {
      items.push(entry(`/properties/${prop.id}`, { priority: 0.6, changeFrequency: "weekly" }));
    }
  } catch {
    /* CRM unavailable at build — ship the rest of the sitemap regardless. */
  }

  return items;
}
