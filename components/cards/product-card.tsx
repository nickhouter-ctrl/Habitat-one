"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { ArrowUpRight, ImageOff } from "lucide-react";
import { Link } from "@/i18n/navigation";
import { hasColourOptions, type CatalogProduct } from "@/lib/data/catalog";
import { cn } from "@/lib/utils";

const collectionKey: Record<string, string> = {
  bathroom: "collectionBathroom",
  "wall-panels": "collectionWallPanels",
  accessories: "collectionAccessories",
  doors: "collectionDoors",
  "door-accessories": "collectionDoorAccessories",
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
  if (detail && name && detail.toLowerCase().startsWith(name.toLowerCase()) && detail.length > name.length) {
    detail = detail.slice(name.length).replace(/^[\s—·-]+/, "").trim() || null;
  }
  const colLabel = collectionLabel ?? (collectionKey[product.collection] ? t(collectionKey[product.collection]) : "");
  const noImg = noImageLabel ?? t("noImage");

  return (
    <Link
      href={`/products/${product.slug}`}
      data-hover-label="View product"
      className={cn("group block", className)}
    >
      <div className="relative aspect-[4/5] overflow-hidden bg-sand-100">
        {product.image ? (
          <Image
            src={product.image}
            alt={name}
            fill
            sizes="(max-width:640px) 50vw, (max-width:1024px) 33vw, 25vw"
            className="object-cover transition-transform duration-[1.1s] ease-out group-hover:scale-[1.04]"
            priority={priority}
          />
        ) : (
          <div className="flex h-full flex-col items-center justify-center gap-2 text-ink-soft/55">
            <ImageOff className="h-7 w-7" />
            <span className="px-6 text-center text-xs">{noImg}</span>
          </div>
        )}
        {hasColourOptions(product) && (
          <span className="absolute bottom-3 left-3 flex items-center gap-1">
            {product.variants
              .filter((v) => v.colorHex && v.images.length)
              .slice(0, 5)
              .map((v) => (
                <span
                  key={v.id}
                  className="h-2.5 w-2.5 rounded-full border border-paper/80"
                  style={{ backgroundColor: v.colorHex! }}
                />
              ))}
          </span>
        )}
      </div>
      <div className="mt-4 flex items-start justify-between gap-3">
        <div className="min-w-0">
          {colLabel && (
            <p className="text-[0.66rem] uppercase tracking-[0.22em] text-ink-soft/65">{colLabel}</p>
          )}
          <h3 className="mt-1 text-[0.95rem] font-medium leading-snug text-ink transition-colors group-hover:text-ink-soft md:text-base">
            {name}
          </h3>
          {detail && <p className="mt-1 line-clamp-2 text-[0.8rem] leading-relaxed text-ink-soft">{detail}</p>}
        </div>
        <ArrowUpRight className="mt-1 h-4 w-4 shrink-0 text-ink-soft transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
      </div>
    </Link>
  );
}
