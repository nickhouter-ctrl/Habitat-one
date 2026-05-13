"use client";

import { useState } from "react";
import { ArrowUpRight, Ruler, Tag, Layers as LayersIcon, MapPin, Palette } from "lucide-react";
import type { CatalogProduct } from "@/lib/data/catalog";
import { Link } from "@/i18n/navigation";
import { ProductGallery } from "@/components/product-gallery";

export interface HeroLabels {
  collection: string;
  colour: string;
  colourCount: number;
  sku: string;
  dimensions: string;
  materials: string;
  space: string;
  enquire: string;
  noImage: string;
  collectionLabel: string;
  /** Vertaalde naam (i18n) — valt terug op product.name. */
  productName: string;
  productLead?: string | null;
  productDescription?: string | null;
}

export function ProductHero({
  product,
  labels,
  materialNames,
  spaceNames,
}: {
  product: CatalogProduct;
  labels: HeroLabels;
  /** Slug → vertaalde label voor materialen. */
  materialNames: Record<string, string>;
  /** Slug → vertaalde label voor ruimtes. */
  spaceNames: Record<string, string>;
}) {
  const withImages = product.variants.filter((v) => v.images.length > 0);
  const swatches = withImages.filter((v) => v.colorHex || v.name);
  const hasSwatches = swatches.length > 1;
  const [variantIdx, setVariantIdx] = useState(0);

  const activeVariant = hasSwatches ? withImages[variantIdx] : null;
  const skuToShow = activeVariant?.sku ?? product.sku ?? null;

  return (
    <div className="mt-8 grid grid-cols-1 gap-10 lg:grid-cols-2 lg:items-start">
      <ProductGallery
        variants={product.variants}
        fallbackImage={product.image}
        productName={labels.productName}
        noImageLabel={labels.noImage}
        colourLabel={labels.colour}
        activeIndex={variantIdx}
        onVariantChange={setVariantIdx}
      />
      <div>
        <span className="inline-flex items-center gap-2 rounded-full bg-cream/10 px-3 py-1 text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-terracotta-300">
          {labels.collectionLabel}
          {hasSwatches && (
            <span className="text-gold-400">· {labels.colourCount} {labels.colour.toLowerCase()}</span>
          )}
          {product.featured && <span className="text-gold-400">★</span>}
        </span>
        <h1 className="mt-4 font-display text-3xl font-semibold text-cream sm:text-4xl md:text-5xl">{labels.productName}</h1>
        {labels.productLead && <p className="mt-4 text-lg text-cream/75">{labels.productLead}</p>}
        {labels.productDescription && <p className="mt-5 leading-relaxed text-cream/65">{labels.productDescription}</p>}

        <dl className="mt-7 grid grid-cols-1 gap-3 sm:grid-cols-2">
          {skuToShow && (
            <Spec icon={<Tag className="h-4 w-4" />} label={labels.sku}>
              {skuToShow}
            </Spec>
          )}
          {product.dimensions && (
            <Spec icon={<Ruler className="h-4 w-4" />} label={labels.dimensions}>
              {product.dimensions}
            </Spec>
          )}
          {hasSwatches && (
            <Spec icon={<Palette className="h-4 w-4" />} label={labels.colour}>
              {swatches.map((v) => v.name).filter(Boolean).join(" · ") || `${labels.colourCount}`}
            </Spec>
          )}
        </dl>

        {product.materials.length > 0 && (
          <Tags icon={<LayersIcon className="h-3.5 w-3.5" />} label={labels.materials}>
            {product.materials.map((m) => (
              <Link
                key={m}
                href={`/materials/${m}`}
                className="rounded-full border border-cream/20 px-3 py-1.5 text-sm text-cream/80 transition-colors hover:border-terracotta-300 hover:text-cream"
              >
                {materialNames[m] ?? m}
              </Link>
            ))}
          </Tags>
        )}
        {product.spaces.length > 0 && (
          <Tags icon={<MapPin className="h-3.5 w-3.5" />} label={labels.space}>
            {product.spaces.map((s) => (
              <Link
                key={s}
                href={`/spaces/${s}`}
                className="rounded-full border border-cream/20 px-3 py-1.5 text-sm text-cream/80 transition-colors hover:border-terracotta-300 hover:text-cream"
              >
                {spaceNames[s] ?? s}
              </Link>
            ))}
          </Tags>
        )}

        <Link href="/contact?subject=materials" className="btn btn-primary mt-8">
          {labels.enquire}
          <ArrowUpRight className="h-4 w-4" />
        </Link>
      </div>
    </div>
  );
}

function Spec({ icon, label, children }: { icon: React.ReactNode; label: string; children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-3 rounded-2xl border border-cream/15 bg-cream/5 px-4 py-3">
      <span className="grid grid-cols-1 h-8 w-8 shrink-0 place-items-center rounded-lg bg-cream/10 text-terracotta-300">{icon}</span>
      <span className="min-w-0">
        <span className="block text-[0.62rem] font-semibold uppercase tracking-[0.16em] text-cream/45">{label}</span>
        <span className="block truncate text-sm text-cream">{children}</span>
      </span>
    </div>
  );
}

function Tags({ icon, label, children }: { icon: React.ReactNode; label: string; children: React.ReactNode }) {
  return (
    <div className="mt-5">
      <p className="flex items-center gap-2 text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-cream/50">
        {icon}
        {label}
      </p>
      <div className="mt-2.5 flex flex-wrap gap-2">{children}</div>
    </div>
  );
}
