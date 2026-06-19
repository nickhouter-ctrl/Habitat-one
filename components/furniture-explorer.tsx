"use client";

import { useMemo, useState } from "react";
import { Search, X } from "lucide-react";
import type { CatalogProduct } from "@/lib/data/catalog";
import { ProductCard } from "@/components/cards/product-card";
import { furnitureGroups, type FurnitureLocale } from "@/lib/data/furniture";
import { cn } from "@/lib/utils";

// Kleur-families voor het filter — elke variant-hex wordt naar de dichtstbijzijnde
// familie gemapt, zodat tientallen stofkleuren tot een handvol keuzes worden.
const FAMILIES: { key: string; hex: [number, number, number]; label: Record<FurnitureLocale, string> }[] = [
  { key: "white", hex: [240, 233, 218], label: { en: "White & cream", nl: "Wit & crème", es: "Blanco y crema", de: "Weiß & creme" } },
  { key: "beige", hex: [215, 196, 166], label: { en: "Beige & sand", nl: "Beige & zand", es: "Beige y arena", de: "Beige & sand" } },
  { key: "grey", hex: [155, 155, 155], label: { en: "Grey", nl: "Grijs", es: "Gris", de: "Grau" } },
  { key: "taupe", hex: [182, 168, 144], label: { en: "Taupe", nl: "Taupe", es: "Topo", de: "Taupe" } },
  { key: "brown", hex: [107, 79, 58], label: { en: "Brown", nl: "Bruin", es: "Marrón", de: "Braun" } },
  { key: "black", hex: [34, 34, 36], label: { en: "Black", nl: "Zwart", es: "Negro", de: "Schwarz" } },
  { key: "blue", hex: [91, 124, 152], label: { en: "Blue", nl: "Blauw", es: "Azul", de: "Blau" } },
  { key: "green", hex: [110, 125, 91], label: { en: "Green", nl: "Groen", es: "Verde", de: "Grün" } },
  { key: "red", hex: [138, 58, 58], label: { en: "Red & pink", nl: "Rood & roze", es: "Rojo y rosa", de: "Rot & rosa" } },
  { key: "gold", hex: [184, 152, 90], label: { en: "Gold & brass", nl: "Goud & messing", es: "Oro y latón", de: "Gold & messing" } },
];

function hexToRgb(hex: string): [number, number, number] | null {
  const m = hex.replace("#", "").match(/^([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})$/i);
  return m ? [parseInt(m[1], 16), parseInt(m[2], 16), parseInt(m[3], 16)] : null;
}
function familyOf(hex: string): string | null {
  const rgb = hexToRgb(hex);
  if (!rgb) return null;
  let best = FAMILIES[0].key, bestD = Infinity;
  for (const f of FAMILIES) {
    const d = (rgb[0] - f.hex[0]) ** 2 + (rgb[1] - f.hex[1]) ** 2 + (rgb[2] - f.hex[2]) ** 2;
    if (d < bestD) { bestD = d; best = f.key; }
  }
  return best;
}
function productFamilies(p: CatalogProduct): Set<string> {
  const fams = new Set<string>();
  for (const v of p.variants) if (v.colorHex) { const f = familyOf(v.colorHex); if (f) fams.add(f); }
  return fams;
}

export function FurnitureExplorer({
  products,
  locale,
  initialGroup,
  initialSub,
  initialQuery,
  labels,
}: {
  products: CatalogProduct[];
  locale: string;
  initialGroup?: string;
  initialSub?: string;
  initialQuery?: string;
  labels: { all: string; noImage: string; items: string; search: string; colours: string };
}) {
  const loc = locale as FurnitureLocale;
  const [group, setGroup] = useState(initialGroup ?? "all");
  const [sub, setSub] = useState(initialSub ?? "all");
  const [query, setQuery] = useState(initialQuery ?? "");
  const [colour, setColour] = useState<string | null>(null);

  const subSlugsOf = (g: string) => furnitureGroups.find((x) => x.slug === g)?.subs.map((s) => s.slug) ?? [];
  const countSub = (slug: string) => products.filter((p) => p.categories.includes(slug)).length;
  const countGroup = (g: string) => products.filter((p) => subSlugsOf(g).some((s) => p.categories.includes(s))).length;

  // Welke kleur-families komen voor (om lege filterknoppen te verbergen).
  const availFamilies = useMemo(() => {
    const set = new Set<string>();
    for (const p of products) for (const f of productFamilies(p)) set.add(f);
    return FAMILIES.filter((f) => set.has(f.key));
  }, [products]);

  const q = query.trim().toLowerCase();
  const filtered = useMemo(
    () =>
      products.filter((p) => {
        const s = p.categories[0];
        if (sub !== "all" && s !== sub) return false;
        if (sub === "all" && group !== "all" && !subSlugsOf(group).includes(s ?? "")) return false;
        if (colour && !productFamilies(p).has(colour)) return false;
        if (q) {
          const hay = `${p.name} ${p.short ?? ""} ${p.variants.map((v) => v.name ?? "").join(" ")}`.toLowerCase();
          if (!hay.includes(q)) return false;
        }
        return true;
      }),
    [products, group, sub, colour, q],
  );

  function pickGroup(g: string) {
    setGroup(g);
    setSub("all");
    const url = g === "all" ? "/furniture/all" : `/furniture/all?group=${g}`;
    window.history.replaceState(null, "", locale === "en" ? url : `/${locale}${url}`);
  }
  function pickSub(s: string) {
    setSub(s);
    const url = s === "all" ? "/furniture/all" : `/furniture/all?sub=${s}`;
    window.history.replaceState(null, "", locale === "en" ? url : `/${locale}${url}`);
  }

  const linkCls = (active: boolean) =>
    cn("block w-full text-left transition-colors", active ? "text-terracotta-700" : "text-ink-soft hover:text-ink");

  return (
    <div className="grid gap-8 lg:grid-cols-[14rem_1fr] lg:gap-12">
      {/* Filter-sidebar */}
      <aside className="lg:sticky lg:top-24 lg:self-start">
        <button onClick={() => pickGroup("all")} className={cn(linkCls(group === "all" && sub === "all"), "text-sm font-medium")}>
          {labels.all} <span className="text-ink-soft/50">({products.length})</span>
        </button>
        <div className="mt-5 flex flex-col gap-5">
          {furnitureGroups
            .filter((g) => countGroup(g.slug) > 0)
            .map((g) => {
              const open = group === g.slug;
              return (
                <div key={g.slug}>
                  <button onClick={() => pickGroup(g.slug)} className={cn(linkCls(open && sub === "all"), "text-[0.7rem] font-semibold uppercase tracking-[0.16em]")}>
                    {g.label[loc]}
                  </button>
                  {open && (
                    <div className="mt-2 flex flex-col gap-1.5 border-l border-sand-200 pl-3">
                      {g.subs
                        .filter((s) => countSub(s.slug) > 0)
                        .map((s) => (
                          <button key={s.slug} onClick={() => pickSub(s.slug)} className={cn(linkCls(sub === s.slug), "text-sm")}>
                            {s.label[loc]} <span className="text-ink-soft/40">{countSub(s.slug)}</span>
                          </button>
                        ))}
                    </div>
                  )}
                </div>
              );
            })}
        </div>

        {/* Kleurfilter */}
        {availFamilies.length > 1 && (
          <div className="mt-8 border-t border-sand-200 pt-6">
            <p className="text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-ink-soft">{labels.colours}</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {availFamilies.map((f) => {
                const active = colour === f.key;
                return (
                  <button
                    key={f.key}
                    type="button"
                    onClick={() => setColour(active ? null : f.key)}
                    title={f.label[loc]}
                    aria-label={f.label[loc]}
                    className={cn(
                      "h-7 w-7 rounded-full border transition-transform",
                      active ? "border-ink ring-2 ring-ink/30 ring-offset-1" : "border-ink/20 hover:scale-110",
                    )}
                    style={{ backgroundColor: `rgb(${f.hex.join(",")})` }}
                  />
                );
              })}
            </div>
          </div>
        )}
      </aside>

      {/* Grid */}
      <div>
        {/* Zoekbalk */}
        <div className="relative mb-6 max-w-md">
          <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-soft/60" />
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={labels.search}
            className="w-full rounded-full border border-sand-200 bg-paper py-2.5 pl-10 pr-9 text-sm text-ink placeholder:text-ink-soft/60 focus:border-ink/40 focus:outline-none"
          />
          {query && (
            <button type="button" onClick={() => setQuery("")} className="absolute right-3 top-1/2 -translate-y-1/2 text-ink-soft/60 hover:text-ink" aria-label="Clear">
              <X className="h-4 w-4" />
            </button>
          )}
        </div>

        <p className="mb-6 text-sm text-ink-soft">
          {filtered.length} {labels.items}
        </p>
        {filtered.length > 0 ? (
          <div className="grid grid-cols-2 gap-x-4 gap-y-10 md:grid-cols-3">
            {filtered.map((p) => (
              <ProductCard key={p.id} product={p} noImageLabel={labels.noImage} />
            ))}
          </div>
        ) : (
          <p className="py-16 text-center text-ink-soft">—</p>
        )}
      </div>
    </div>
  );
}
