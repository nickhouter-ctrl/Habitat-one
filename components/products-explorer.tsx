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
  const [collection, setCollection] = useState<string>(initialCollection);
  const [space, setSpace] = useState<string>(initialSpace);
  const [material, setMaterial] = useState<string>(initialMaterial);
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
    const qq = query.trim();
    if (qq) params.set("q", qq);
    const qs = params.toString();
    const url = qs ? `${window.location.pathname}?${qs}` : window.location.pathname;
    window.history.replaceState(window.history.state, "", url);
  }, [collection, space, material, query]);

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
    const hay = `${p.name} ${localName(p.slug)} ${p.short ?? ""} ${localShort(p.slug)} ${p.sku ?? ""} ${p.dimensions ?? ""}`.toLowerCase();
    return hay.includes(q);
  };

  const q = query.trim().toLowerCase();

  // "base" = everything except the collection filter — used for the per-collection counts
  const base = useMemo(
    () =>
      products.filter(
        (p) => (space === "all" || p.spaces.includes(space)) && (material === "all" || p.materials.includes(material)) && matchesQuery(p, q),
      ),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [products, space, material, q],
  );
  const filtered = useMemo(() => base.filter((p) => collection === "all" || p.collection === collection), [base, collection]);

  const collectionCount = (id: string) => (id === "all" ? base.length : base.filter((p) => p.collection === id).length);

  // counts for spaces & materials honour the active collection + query (but not the space/material filter itself)
  const forSpaceMatCounts = useMemo(
    () => products.filter((p) => (collection === "all" || p.collection === collection) && matchesQuery(p, q)),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [products, collection, q],
  );
  const spaceCount = (slug: string) => forSpaceMatCounts.filter((p) => p.spaces.includes(slug)).length;
  const materialCount = (slug: string) => forSpaceMatCounts.filter((p) => p.materials.includes(slug)).length;

  const usedSpaces = catalogSpaces.filter((s) => products.some((p) => p.spaces.includes(s.slug)));
  const usedMaterials = catalogMaterials.filter((m) => products.some((p) => p.materials.includes(m.slug)));

  const hasFilters = collection !== "all" || space !== "all" || material !== "all" || query.trim() !== "";
  const clearAll = () => {
    setCollection("all");
    setSpace("all");
    setMaterial("all");
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
        <div className="surface sticky top-24 rounded-2xl p-5">{Sidebar}</div>
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
                  <ProductCard product={p} collectionLabel={t(collectionLabel(p.collection)!)} noImageLabel={t("noImage")} />
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
