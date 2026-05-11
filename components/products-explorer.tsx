"use client";

import { useMemo, useState } from "react";
import { useTranslations } from "next-intl";
import { motion, AnimatePresence } from "motion/react";
import { Search, X } from "lucide-react";
import { ProductCard } from "@/components/cards/product-card";
import { catalogSpaces, collections, type CatalogProduct } from "@/lib/data/catalog";
import { cn } from "@/lib/utils";

export function ProductsExplorer({
  products,
  initialQuery = "",
}: {
  products: CatalogProduct[];
  initialQuery?: string;
}) {
  const t = useTranslations("products");
  const [collection, setCollection] = useState<string>("all");
  const [space, setSpace] = useState<string>("all");
  const [query, setQuery] = useState(initialQuery);

  const collectionLabel = (id: string) => {
    const c = collections.find((x) => x.id === id);
    return c ? t(c.key) : id;
  };

  const localName = (slug: string) => {
    const k = `i18n.${slug}.name`;
    return t.has(k) ? t(k) : "";
  };
  const localShort = (slug: string) => {
    const k = `i18n.${slug}.short`;
    return t.has(k) ? t(k) : "";
  };

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return products.filter((p) => {
      if (collection !== "all" && p.collection !== collection) return false;
      if (space !== "all" && !p.spaces.includes(space)) return false;
      if (q) {
        const hay = `${p.name} ${localName(p.slug)} ${p.short ?? ""} ${localShort(p.slug)} ${p.sku ?? ""} ${p.dimensions ?? ""}`.toLowerCase();
        if (!hay.includes(q)) return false;
      }
      return true;
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [products, collection, space, query]);

  const hasFilters = collection !== "all" || space !== "all" || query.trim() !== "";

  return (
    <div>
      {/* Controls */}
      <div className="flex flex-col gap-5 rounded-3xl border border-sand-200 bg-whitewash/70 p-5 backdrop-blur-sm md:flex-row md:items-center md:justify-between">
        <div className="flex flex-wrap items-center gap-2">
          <FilterChip active={collection === "all"} onClick={() => setCollection("all")}>
            {t("filterAll")}
          </FilterChip>
          {collections.map((c) => (
            <FilterChip key={c.id} active={collection === c.id} onClick={() => setCollection(c.id)}>
              {t(c.key)}
            </FilterChip>
          ))}
        </div>
        <div className="flex items-center gap-3">
          <select
            value={space}
            onChange={(e) => setSpace(e.target.value)}
            className="rounded-full border border-sand-300 bg-sand-50 px-4 py-2 text-sm text-ink-soft focus:border-terracotta-400 focus:outline-none"
          >
            <option value="all">{t("space")}</option>
            {catalogSpaces.map((s) => (
              <option key={s.slug} value={s.slug}>
                {s.name}
              </option>
            ))}
          </select>
          <div className="relative">
            <Search className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-soft/50" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder={t("searchPlaceholder")}
              className="w-44 rounded-full border border-sand-300 bg-sand-50 py-2 pl-9 pr-3 text-sm text-ink placeholder:text-ink-soft/45 focus:border-terracotta-400 focus:outline-none sm:w-56"
            />
          </div>
        </div>
      </div>

      <div className="mt-6 flex items-center justify-between">
        <p className="text-sm text-ink-soft">{t("count", { count: filtered.length })}</p>
        {hasFilters && (
          <button
            onClick={() => {
              setCollection("all");
              setSpace("all");
              setQuery("");
            }}
            className="inline-flex items-center gap-1.5 text-sm font-medium text-terracotta-700 hover:text-clay-700"
          >
            <X className="h-3.5 w-3.5" />
            {t("clearFilters")}
          </button>
        )}
      </div>

      {/* Grid */}
      {filtered.length === 0 ? (
        <div className="mt-12 rounded-3xl border border-dashed border-sand-300 py-20 text-center text-ink-soft">
          {t("noResults")}
        </div>
      ) : (
        <div className="mt-8 grid grid-cols-2 gap-4 sm:gap-5 md:grid-cols-3 lg:grid-cols-4">
          <AnimatePresence initial={false}>
            {filtered.map((p) => (
              <motion.div
                key={p.id}
                initial={{ opacity: 0, scale: 0.94 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.94 }}
                transition={{ duration: 0.3 }}
              >
                <ProductCard product={p} collectionLabel={collectionLabel(p.collection)} noImageLabel={t("noImage")} />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      )}
    </div>
  );
}

function FilterChip({ active, onClick, children }: { active: boolean; onClick: () => void; children: React.ReactNode }) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "relative rounded-full px-4 py-2 text-sm font-medium transition-colors",
        active ? "text-cream" : "text-ink-soft hover:text-ink",
      )}
    >
      {active && (
        <motion.span layoutId="prod-chip" className="absolute inset-0 rounded-full bg-clay-700" transition={{ type: "spring", stiffness: 350, damping: 30 }} />
      )}
      <span className="relative">{children}</span>
    </button>
  );
}
