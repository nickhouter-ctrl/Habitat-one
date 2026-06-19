"use client";

import { useMemo, useState } from "react";
import type { CatalogProduct } from "@/lib/data/catalog";
import { ProductCard } from "@/components/cards/product-card";
import { furnitureGroups, type FurnitureLocale } from "@/lib/data/furniture";
import { cn } from "@/lib/utils";

export function FurnitureExplorer({
  products,
  locale,
  initialGroup,
  initialSub,
  labels,
}: {
  products: CatalogProduct[];
  locale: string;
  initialGroup?: string;
  initialSub?: string;
  labels: { all: string; noImage: string; items: string };
}) {
  const loc = locale as FurnitureLocale;
  const [group, setGroup] = useState(initialGroup ?? "all");
  const [sub, setSub] = useState(initialSub ?? "all");

  const subSlugsOf = (g: string) => furnitureGroups.find((x) => x.slug === g)?.subs.map((s) => s.slug) ?? [];
  const countSub = (slug: string) => products.filter((p) => p.categories.includes(slug)).length;
  const countGroup = (g: string) => products.filter((p) => subSlugsOf(g).some((s) => p.categories.includes(s))).length;

  const filtered = useMemo(
    () =>
      products.filter((p) => {
        const s = p.categories[0];
        if (sub !== "all") return s === sub;
        if (group !== "all") return subSlugsOf(group).includes(s ?? "");
        return true;
      }),
    [products, group, sub],
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
      </aside>

      {/* Grid */}
      <div>
        <p className="mb-6 text-sm text-ink-soft">
          {filtered.length} {labels.items}
        </p>
        <div className="grid grid-cols-2 gap-x-4 gap-y-10 md:grid-cols-3">
          {filtered.map((p) => (
            <ProductCard key={p.id} product={p} noImageLabel={labels.noImage} />
          ))}
        </div>
      </div>
    </div>
  );
}
