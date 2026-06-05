"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { useTranslations, useLocale } from "next-intl";
import { motion, AnimatePresence } from "motion/react";
import { Search, X, SlidersHorizontal, ChevronRight } from "lucide-react";
import { ProductCard } from "@/components/cards/product-card";
import { catalogMaterials, catalogSpaces, collections, type CatalogProduct } from "@/lib/data/catalog";
import { cn } from "@/lib/utils";

// --- Colour families for the sidebar colour filter ---
type Loc = "nl" | "de" | "en" | "es";
const COLOR_FAMILIES: { key: string; swatch: string; label: Record<Loc, string> }[] = [
  { key: "white", swatch: "#F1ECE3", label: { nl: "Wit", de: "Weiß", en: "White", es: "Blanco" } },
  { key: "beige", swatch: "#D8CBB2", label: { nl: "Beige", de: "Beige", en: "Beige", es: "Beige" } },
  { key: "grey", swatch: "#9B9F9E", label: { nl: "Grijs", de: "Grau", en: "Grey", es: "Gris" } },
  { key: "charcoal", swatch: "#3C4042", label: { nl: "Antraciet", de: "Anthrazit", en: "Charcoal", es: "Antracita" } },
  { key: "brown", swatch: "#6C6257", label: { nl: "Bruin", de: "Braun", en: "Brown", es: "Marrón" } },
  { key: "terracotta", swatch: "#9E4A33", label: { nl: "Terracotta", de: "Terrakotta", en: "Terracotta", es: "Terracota" } },
  { key: "green", swatch: "#5F6B4F", label: { nl: "Groen", de: "Grün", en: "Green", es: "Verde" } },
  { key: "blue", swatch: "#46606E", label: { nl: "Blauw", de: "Blau", en: "Blue", es: "Azul" } },
  { key: "yellow", swatch: "#C7A64A", label: { nl: "Geel", de: "Gelb", en: "Yellow", es: "Amarillo" } },
];
const COLOUR_HEADER: Record<Loc, string> = { nl: "Kleur", de: "Farbe", en: "Colour", es: "Color" };

function hexToHsl(hex: string): [number, number, number] | null {
  const m = /^#?([0-9a-f]{6})$/i.exec(hex.trim());
  if (!m) return null;
  const n = parseInt(m[1], 16);
  const r = ((n >> 16) & 255) / 255, g = ((n >> 8) & 255) / 255, b = (n & 255) / 255;
  const max = Math.max(r, g, b), min = Math.min(r, g, b);
  const l = (max + min) / 2;
  let h = 0, s = 0;
  if (max !== min) {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    if (max === r) h = (g - b) / d + (g < b ? 6 : 0);
    else if (max === g) h = (b - r) / d + 2;
    else h = (r - g) / d + 4;
    h *= 60;
  }
  return [h, s, l];
}

/** Map a variant's colour (name keywords first, then hex) to one colour family. */
function classifyColor(hex: string | null, name: string | null): string | null {
  const nm = (name ?? "").toLowerCase();
  if (/pure white|ivory|\bwhite\b/.test(nm)) return "white";
  if (/black|anthracite/.test(nm)) return "charcoal";
  if (/terracotta|rust|watermelon|brown red|\bred\b/.test(nm)) return "terracotta";
  if (/khaki|\bgreen\b/.test(nm)) return "green";
  if (/\bblue\b/.test(nm)) return "blue";
  if (/yellow|golden|\bgold\b/.test(nm)) return "yellow";
  if (/taupe|\bbrown\b|wood/.test(nm)) return "brown";
  if (/beige|sand|cream|greige/.test(nm)) return "beige";
  const hsl = hex ? hexToHsl(hex) : null;
  if (!hsl) return /grey|gray|concrete|charcoal/.test(nm) ? "grey" : null;
  const [h, s, l] = hsl;
  if (l > 0.82 && s < 0.16) return "white";
  if (l < 0.24) return "charcoal";
  if (s < 0.12) return "grey";
  if ((h < 22 || h >= 345) && s >= 0.28) return "terracotta";
  if (h >= 18 && h < 45) return l < 0.5 ? "brown" : "beige";
  if (h >= 45 && h < 70) return s < 0.25 ? "beige" : "yellow";
  if (h >= 70 && h < 165) return "green";
  if (h >= 165 && h < 255) return "blue";
  return "grey";
}

function productColorFamilies(p: CatalogProduct): string[] {
  const fams = new Set<string>();
  for (const v of p.variants) {
    const f = classifyColor(v.colorHex, v.name ?? null);
    if (f) fams.add(f);
  }
  return [...fams];
}

export function ProductsExplorer({
  products,
  initialQuery = "",
}: {
  products: CatalogProduct[];
  initialQuery?: string;
}) {
  const t = useTranslations("products");
  const ts = useTranslations("spaces");
  const locale = useLocale() as "nl" | "de" | "en" | "es";
  const matLabel = (m: { name: string; nameI18n: { nl: string; de: string; en: string; es: string } | null }) =>
    m.nameI18n?.[locale] ?? m.name;
  const searchParams = useSearchParams();
  const initialMaterial = searchParams?.get("material") ?? "all";
  const initialSpace = searchParams?.get("space") ?? "all";
  const initialCollection = searchParams?.get("collection") ?? "all";
  const initialColor = searchParams?.get("color") ?? "all";
  const [collection, setCollection] = useState<string>(initialCollection);
  const [space, setSpace] = useState<string>(initialSpace);
  const [material, setMaterial] = useState<string>(initialMaterial);
  const [color, setColor] = useState<string>(initialColor);
  const [query, setQuery] = useState(initialQuery);
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  // Reflect the active filters in the URL so a filtered view is shareable and
  // bookmarkable. We write directly with the History API (not the router) so
  // there is no re-render or scroll jump — the local state stays the source of
  // truth, the URL just mirrors it.
  useEffect(() => {
    if (typeof window === "undefined") return;
    const params = new URLSearchParams();
    if (collection !== "all") params.set("collection", collection);
    if (space !== "all") params.set("space", space);
    if (material !== "all") params.set("material", material);
    if (color !== "all") params.set("color", color);
    const qq = query.trim();
    if (qq) params.set("q", qq);
    const qs = params.toString();
    const url = qs ? `${window.location.pathname}?${qs}` : window.location.pathname;
    window.history.replaceState(window.history.state, "", url);
  }, [collection, space, material, color, query]);

  const collectionLabel = (id: string) => collections.find((c) => c.id === id)?.key;

  const localName = (slug: string) => {
    const k = `i18n.${slug}.name`;
    return t.has(k) ? t(k) : "";
  };
  const localShort = (slug: string) => {
    const k = `i18n.${slug}.short`;
    return t.has(k) ? t(k) : "";
  };
  const matchesQuery = (p: CatalogProduct, q: string) => {
    if (!q) return true;
    const skus = [p.sku, ...p.variants.map((v) => v.sku)].filter(Boolean).join(" ");
    const hay = `${p.name} ${localName(p.slug)} ${p.short ?? ""} ${localShort(p.slug)} ${skus} ${p.dimensions ?? ""}`.toLowerCase();
    if (hay.includes(q)) return true;
    // SKU / MS-number match ignoring punctuation: "ms167", "MS167" or "167" → "MS-167"
    const qn = q.replace(/[^a-z0-9]/g, "");
    return qn.length >= 2 && skus.toLowerCase().replace(/[^a-z0-9]/g, "").includes(qn);
  };

  // Pre-compute colour families per product once (used by the colour filter).
  const colorMap = useMemo(() => {
    const m = new Map<number, string[]>();
    for (const p of products) m.set(p.id, productColorFamilies(p));
    return m;
  }, [products]);
  const famsOf = (p: CatalogProduct) => colorMap.get(p.id) ?? [];
  // When a colour filter is active, show the card in that colour (the matching
  // variant's image) instead of the default thumbnail.
  const colorVariantImage = (p: CatalogProduct): string | undefined => {
    if (color === "all") return undefined;
    const v = p.variants.find((x) => x.images.length > 0 && classifyColor(x.colorHex, x.name ?? null) === color);
    return v?.images[0];
  };

  const q = query.trim().toLowerCase();

  // "base" = everything except the collection filter — used for the per-collection counts
  const base = useMemo(
    () =>
      products.filter(
        (p) =>
          (space === "all" || p.spaces.includes(space)) &&
          (material === "all" || p.materials.includes(material)) &&
          (color === "all" || famsOf(p).includes(color)) &&
          matchesQuery(p, q),
      ),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [products, space, material, color, q],
  );
  const filtered = useMemo(() => base.filter((p) => collection === "all" || p.collection === collection), [base, collection]);

  const collectionCount = (id: string) => (id === "all" ? base.length : base.filter((p) => p.collection === id).length);

  // counts for spaces & materials honour the active collection + query + colour (but not the space/material filter itself)
  const forSpaceMatCounts = useMemo(
    () => products.filter((p) => (collection === "all" || p.collection === collection) && (color === "all" || famsOf(p).includes(color)) && matchesQuery(p, q)),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [products, collection, color, q],
  );
  const spaceCount = (slug: string) => forSpaceMatCounts.filter((p) => p.spaces.includes(slug)).length;
  const materialCount = (slug: string) => forSpaceMatCounts.filter((p) => p.materials.includes(slug)).length;

  // colour counts honour every other active filter (but not the colour filter itself)
  const colorBase = useMemo(
    () => products.filter((p) => (collection === "all" || p.collection === collection) && (space === "all" || p.spaces.includes(space)) && (material === "all" || p.materials.includes(material)) && matchesQuery(p, q)),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [products, collection, space, material, q],
  );
  const colorCount = (key: string) => colorBase.filter((p) => famsOf(p).includes(key)).length;

  const usedSpaces = catalogSpaces.filter((s) => products.some((p) => p.spaces.includes(s.slug)));
  const usedMaterials = catalogMaterials.filter((m) => products.some((p) => p.materials.includes(m.slug)));
  const usedColors = COLOR_FAMILIES.filter((c) => products.some((p) => famsOf(p).includes(c.key)));

  const hasFilters = collection !== "all" || space !== "all" || material !== "all" || color !== "all" || query.trim() !== "";
  const clearAll = () => {
    setCollection("all");
    setSpace("all");
    setMaterial("all");
    setColor("all");
    setQuery("");
  };

  const Sidebar = (
    <div className="space-y-8">
      {/* Collections */}
      <div>
        <p className="text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-ink-soft/55">{t("collection")}</p>
        <ul className="mt-3 space-y-0.5">
          {(() => {
            const renderRow = (id: string, label: string, nested = false) => {
              const active = collection === id;
              const n = collectionCount(id);
              return (
                <li key={id}>
                  <button
                    onClick={() => setCollection(id)}
                    className={cn(
                      "flex w-full items-center justify-between gap-2 rounded-xl py-2.5 text-left text-sm transition-colors",
                      nested ? "pl-7 pr-3" : "px-3",
                      active ? "bg-clay-700 text-cream" : "text-ink hover:bg-sand-100",
                    )}
                  >
                    <span className={cn("flex items-center gap-1.5", active && "font-medium")}>
                      {nested && <span className="text-ink-soft/35">&#9492;</span>}
                      {label}
                    </span>
                    <span className={cn("text-xs tabular-nums", active ? "text-cream/70" : "text-ink-soft/45")}>{n}</span>
                  </button>
                </li>
              );
            };
            // Accessories are bathroom accessories → nest them under Bathroom.
            const top = [
              { id: "all", label: t("allProducts") },
              ...collections.filter((c) => c.id !== "accessories").map((c) => ({ id: c.id, label: t(c.key) })),
            ];
            return top.flatMap((c) => {
              const rows = [renderRow(c.id, c.label)];
              if (c.id === "bathroom") rows.push(renderRow("accessories", t("collectionAccessories"), true));
              return rows;
            });
          })()}
        </ul>
      </div>

      {/* Colours */}
      {usedColors.length > 0 && (
        <FilterGroup
          label={COLOUR_HEADER[locale]}
          allLabel={{ nl: "Alle kleuren", de: "Alle Farben", en: "All colours", es: "Todos los colores" }[locale]}
          active={color}
          onAll={() => setColor("all")}
        >
          {usedColors.map((c) => {
            const active = color === c.key;
            const n = colorCount(c.key);
            return (
              <FilterRow key={c.key} active={active} disabled={n === 0 && !active} count={n} onClick={() => setColor(active ? "all" : c.key)}>
                <span className="flex items-center gap-2">
                  <span className="size-5 shrink-0 rounded-full border border-sand-200" style={{ backgroundColor: c.swatch }} aria-hidden />
                  <span>{c.label[locale]}</span>
                </span>
              </FilterRow>
            );
          })}
        </FilterGroup>
      )}

      {/* Spaces */}
      <FilterGroup label={t("spaces")} allLabel={t("allSpaces")} active={space} onAll={() => setSpace("all")}>
        {usedSpaces.map((s) => {
          const active = space === s.slug;
          const n = spaceCount(s.slug);
          return (
            <FilterRow key={s.slug} active={active} disabled={n === 0 && !active} count={n} onClick={() => setSpace(active ? "all" : s.slug)}>
              {ts(`names.${s.slug}`)}
            </FilterRow>
          );
        })}
      </FilterGroup>

      {/* Materials */}
      <FilterGroup label={t("materials")} allLabel={t("allMaterials")} active={material} onAll={() => setMaterial("all")}>
        {usedMaterials.map((m) => {
          const active = material === m.slug;
          const n = materialCount(m.slug);
          return (
            <FilterRow key={m.slug} active={active} disabled={n === 0 && !active} count={n} onClick={() => setMaterial(active ? "all" : m.slug)}>
              <span className="flex items-center gap-2">
                {m.image ? (
                  <Image src={m.image} alt="" width={20} height={20} className="size-5 shrink-0 rounded-full object-cover" />
                ) : (
                  <span className="size-5 shrink-0 rounded-full border border-sand-200 bg-sand-100" aria-hidden />
                )}
                <span>{matLabel(m)}</span>
              </span>
            </FilterRow>
          );
        })}
      </FilterGroup>

      {hasFilters && (
        <button onClick={clearAll} className="inline-flex items-center gap-1.5 text-sm font-medium text-terracotta-700 hover:text-clay-700">
          <X className="h-3.5 w-3.5" />
          {t("clearAll")}
        </button>
      )}
    </div>
  );

  return (
    <div className="lg:flex lg:gap-10">
      {/* ---- Sidebar (desktop) ---- */}
      <aside className="hidden w-64 shrink-0 lg:block">
        <div className="surface sticky top-24 max-h-[calc(100vh-7rem)] overflow-y-auto rounded-2xl p-5">{Sidebar}</div>
      </aside>

      {/* ---- Main ---- */}
      <div className="min-w-0 flex-1">
        {/* Search + mobile filter toggle */}
        <div className="flex flex-wrap items-center gap-3">
          <div className="relative min-w-0 flex-1">
            <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-soft/45" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder={t("searchPlaceholder")}
              className="w-full rounded-full border border-sand-300 bg-whitewash py-3 pl-11 pr-4 text-sm text-ink placeholder:text-ink-soft/45 focus:border-terracotta-400 focus:outline-none focus:ring-2 focus:ring-terracotta-400/15"
            />
          </div>
          <button
            onClick={() => setMobileFiltersOpen((v) => !v)}
            className="inline-flex items-center gap-2 rounded-full border border-sand-300 bg-whitewash px-4 py-3 text-sm font-medium text-ink hover:bg-sand-100 lg:hidden"
          >
            <SlidersHorizontal className="h-4 w-4" />
            {t("filters")}
            {hasFilters && <span className="h-1.5 w-1.5 rounded-full bg-terracotta-500" />}
          </button>
        </div>

        {/* Mobile filters panel */}
        <AnimatePresence initial={false}>
          {mobileFiltersOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="overflow-hidden lg:hidden"
            >
              <div className="surface mt-4 rounded-2xl p-5">{Sidebar}</div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Active-filter pills + count */}
        <div className="mt-5 flex flex-wrap items-center gap-2">
          <span className="text-sm text-ink-soft">{t("count", { count: filtered.length })}</span>
          <span className="text-ink-soft/30">·</span>
          {collection !== "all" && (
            <Pill onClear={() => setCollection("all")}>{t(collectionLabel(collection)!)}</Pill>
          )}
          {space !== "all" && <Pill onClear={() => setSpace("all")}>{ts(`names.${space}`)}</Pill>}
          {material !== "all" && (
            <Pill onClear={() => setMaterial("all")}>
              {(() => {
                const m = catalogMaterials.find((x) => x.slug === material);
                return m ? matLabel(m) : material;
              })()}
            </Pill>
          )}
          {color !== "all" && (
            <Pill onClear={() => setColor("all")}>{COLOR_FAMILIES.find((c) => c.key === color)?.label[locale] ?? color}</Pill>
          )}
          {query.trim() && <Pill onClear={() => setQuery("")}>“{query.trim()}”</Pill>}
        </div>

        {/* Grid */}
        {filtered.length === 0 ? (
          <div className="mt-10 rounded-3xl border border-dashed border-sand-300 py-20 text-center text-ink-soft">
            {t("noResults")}
            {hasFilters && (
              <div className="mt-4">
                <button onClick={clearAll} className="btn btn-ghost">{t("clearAll")}</button>
              </div>
            )}
          </div>
        ) : (
          <div className="mt-7 grid grid-cols-2 gap-4 sm:gap-5 lg:grid-cols-3 xl:grid-cols-4">
            <AnimatePresence initial={false}>
              {filtered.map((p) => (
                <motion.div
                  key={p.id}
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.25 }}
                >
                  <ProductCard product={p} collectionLabel={t(collectionLabel(p.collection)!)} noImageLabel={t("noImage")} imageOverride={colorVariantImage(p)} />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        )}
      </div>
    </div>
  );
}

function FilterGroup({
  label,
  allLabel,
  active,
  onAll,
  children,
}: {
  label: string;
  allLabel: string;
  active: string;
  onAll: () => void;
  children: React.ReactNode;
}) {
  return (
    <div>
      <p className="text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-ink-soft/55">{label}</p>
      <ul className="mt-2.5 space-y-0.5">
        <li>
          <button
            onClick={onAll}
            className={cn(
              "flex w-full items-center justify-between rounded-lg px-3 py-2 text-left text-sm transition-colors",
              active === "all" ? "font-medium text-terracotta-700" : "text-ink-soft hover:bg-sand-100 hover:text-ink",
            )}
          >
            {allLabel}
          </button>
        </li>
        {children}
      </ul>
    </div>
  );
}

function FilterRow({
  active,
  disabled,
  count,
  onClick,
  children,
}: {
  active: boolean;
  disabled?: boolean;
  count: number;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <li>
      <button
        onClick={onClick}
        disabled={disabled}
        className={cn(
          "flex w-full items-center justify-between gap-2 rounded-lg px-3 py-2 text-left text-sm transition-colors",
          active ? "bg-sand-100 font-medium text-terracotta-700" : "text-ink hover:bg-sand-100",
          disabled && "cursor-not-allowed opacity-35 hover:bg-transparent",
        )}
      >
        <span className="flex items-center gap-1.5">
          {active && <ChevronRight className="h-3 w-3 text-terracotta-500" />}
          {children}
        </span>
        <span className={cn("text-xs tabular-nums", active ? "text-terracotta-700/60" : "text-ink-soft/40")}>{count}</span>
      </button>
    </li>
  );
}

function Pill({ children, onClear }: { children: React.ReactNode; onClear: () => void }) {
  return (
    <button
      onClick={onClear}
      className="inline-flex items-center gap-1.5 rounded-full bg-sand-100 px-2.5 py-1 text-xs font-medium text-clay-700 transition-colors hover:bg-sand-200"
    >
      {children}
      <X className="h-3 w-3" />
    </button>
  );
}
