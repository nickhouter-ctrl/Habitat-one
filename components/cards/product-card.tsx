"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { ArrowUpRight, ImageOff } from "lucide-react";
import { Link } from "@/i18n/navigation";
import { TiltCard } from "@/components/ui/tilt-card";
import { hasColourOptions, type CatalogProduct } from "@/lib/data/catalog";
import { cn } from "@/lib/utils";

const collectionKey: Record<string, string> = {
  bathroom: "collectionBathroom",
  "wall-panels": "collectionWallPanels",
  accessories: "collectionAccessories",
};

/** Localised product name (falls back to the catalogue's English name). */
export function useProductName(product: CatalogProduct): string {
  const t = useTranslations("products");
  const key = `i18n.${product.slug}.name`;
  return t.has(key) ? t(key) : product.name;
}

export function ProductCard({
  product,
  collectionLabel,
  noImageLabel,
  className,
  priority = false,
}: {
  product: CatalogProduct;
  collectionLabel?: string;
  noImageLabel?: string;
  className?: string;
  priority?: boolean;
}) {
  const t = useTranslations("products");
  const name = t.has(`i18n.${product.slug}.name`) ? t(`i18n.${product.slug}.name`) : product.name;
  const localShort = t.has(`i18n.${product.slug}.short`) ? t(`i18n.${product.slug}.short`) : null;
  let detail = localShort ?? product.dimensions ?? product.short ?? null;
  // avoid "Bathtub · Bathtub 1780×785×590 mm" — strip the redundant name prefix from the detail line
  if (detail && name && detail.toLowerCase().startsWith(name.toLowerCase()) && detail.length > name.length) {
    detail = detail.slice(name.length).replace(/^[\s—·-]+/, "").trim() || null;
  }
  const colLabel = collectionLabel ?? t(collectionKey[product.collection]);
  const noImg = noImageLabel ?? t("noImage");

  return (
    <TiltCard className={cn("h-full", className)} radius="rounded-3xl" intensity={7} lift={6}>
      <Link href={`/products/${product.slug}`} className="surface group block h-full overflow-hidden rounded-3xl">
        <div className="relative aspect-square overflow-hidden bg-gradient-to-br from-sand-100 to-sand-200">
          {product.image ? (
            <Image
              src={product.image}
              alt={name}
              fill
              sizes="(max-width:640px) 50vw, (max-width:1024px) 33vw, 25vw"
              className="object-cover transition-transform duration-[1.1s] ease-out group-hover:scale-[1.07]"
              priority={priority}
            />
          ) : (
            <div className="flex h-full flex-col items-center justify-center gap-2 text-ink-soft/50">
              <ImageOff className="h-7 w-7" />
              <span className="px-6 text-center text-xs">{noImg}</span>
            </div>
          )}
          <span className="absolute left-3 top-3 rounded-full bg-whitewash/85 px-2.5 py-1 text-[0.62rem] font-semibold uppercase tracking-[0.16em] text-clay-700 backdrop-blur-sm">
            {colLabel}
          </span>
          {product.featured && (
            <span className="absolute right-3 top-3 rounded-full bg-terracotta-500/95 px-2.5 py-1 text-[0.62rem] font-semibold uppercase tracking-[0.16em] text-cream">
              ★
            </span>
          )}
          <span className="absolute bottom-3 right-3 grid h-9 w-9 translate-y-2 place-items-center rounded-full bg-clay-700 text-cream opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
            <ArrowUpRight className="h-4 w-4" />
          </span>
          {hasColourOptions(product) && (
            <span className="absolute bottom-3 left-3 flex items-center gap-1 rounded-full bg-whitewash/85 px-2 py-1 backdrop-blur-sm">
              {product.variants
                .filter((v) => v.colorHex && v.images.length)
                .slice(0, 5)
                .map((v) => (
                  <span key={v.id} className="h-2.5 w-2.5 rounded-full border border-clay-700/15" style={{ backgroundColor: v.colorHex! }} />
                ))}
              {product.variants.filter((v) => (v.colorHex || v.name) && v.images.length).length > 5 && (
                <span className="text-[0.6rem] font-semibold text-clay-700">+</span>
              )}
            </span>
          )}
        </div>
        <div className="flex flex-1 flex-col p-4">
          <h3 className="font-display text-lg leading-snug text-ink transition-colors group-hover:text-terracotta-700">{name}</h3>
          {detail && <p className="mt-1 line-clamp-2 text-[0.82rem] leading-relaxed text-ink-soft">{detail}</p>}
          {product.sku && (
            <p className="mt-3 text-[0.68rem] font-medium uppercase tracking-[0.14em] text-ink-soft/55">{product.sku}</p>
          )}
        </div>
      </Link>
    </TiltCard>
  );
}
