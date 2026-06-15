import type { MetadataRoute } from "next";
import { locales } from "@/i18n/routing";
import { catalogProducts, catalogSpaces, collections } from "@/lib/data/catalog";
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
  opts: { changeFrequency?: MetadataRoute.Sitemap[number]["changeFrequency"]; priority?: number } = {},
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
  };
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const staticPaths: { path: string; priority: number; freq: MetadataRoute.Sitemap[number]["changeFrequency"] }[] = [
    { path: "/", priority: 1.0, freq: "weekly" },
    { path: "/products", priority: 0.9, freq: "weekly" },
    { path: "/products/all", priority: 0.8, freq: "weekly" },
    { path: "/spaces", priority: 0.8, freq: "monthly" },
    { path: "/services", priority: 0.7, freq: "monthly" },
    { path: "/projects", priority: 0.7, freq: "monthly" },
    { path: "/properties", priority: 0.7, freq: "weekly" },
    { path: "/sale", priority: 0.6, freq: "monthly" },
    { path: "/showroom", priority: 0.6, freq: "monthly" },
    { path: "/about", priority: 0.6, freq: "yearly" },
    { path: "/contact", priority: 0.6, freq: "yearly" },
    { path: "/location", priority: 0.6, freq: "monthly" },
    { path: "/kitchen-planner", priority: 0.6, freq: "monthly" },
    { path: "/inspiration", priority: 0.7, freq: "weekly" },
    { path: "/inspiration/events", priority: 0.6, freq: "weekly" },
    { path: "/inspiration/news", priority: 0.6, freq: "weekly" },
    { path: "/inspiration/tips", priority: 0.6, freq: "monthly" },
    { path: "/inspiration/blog", priority: 0.6, freq: "weekly" },
    { path: "/inspiration/partners", priority: 0.6, freq: "monthly" },
  ];

  const collectionPaths = collections
    .map((c) => (c.id === "wall-panels" ? "/products" : `/products/${c.id}`))
    .filter((p) => p !== "/products");

  const items: MetadataRoute.Sitemap = [
    ...staticPaths.map((s) => entry(s.path, { priority: s.priority, changeFrequency: s.freq })),
    ...collectionPaths.map((p) => entry(p, { priority: 0.8, changeFrequency: "weekly" })),
    ...catalogProducts.map((p) => entry(`/products/${p.slug}`, { priority: 0.7 })),
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
