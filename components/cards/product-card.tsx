"use client";

import { useState } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { ArrowUpRight, ImageOff } from "lucide-react";
import { Link } from "@/i18n/navigation";
import { hasColourOptions, type CatalogProduct } from "@/lib/data/catalog";
import { PriceTag } from "@/components/account/price-tag";
import { brandOf } from "@/lib/data/brands";
import { productName } from "@/lib/data/catalog-i18n";
import { useLocale } from "next-intl";
import { cn } from "@/lib/utils";

const collectionKey: Record<string, string> = {
  bathroom: "collectionBathroom",
  "wall-panels": "collectionWallPanels",
  "backer-boards": "collectionBackerBoards",
  accessories: "collectionAccessories",
  doors: "collectionDoors",
  "door-accessories": "collectionDoorAccessories",
  bloempotten: "collectionFlowerPots",
  verlichting: "collectionLighting",
  schakelmateriaal: "collectionSwitches",
  acrylpanelen: "collectionAcrylicPanels",
  sfeerhaarden: "collectionFireplaces",
  "pvc-vloeren": "collectionPVCFloors",
};

/** Collecties met productfoto's op witte achtergrond: volledig tonen (niet bijsnijden). */
const CONTAIN_COLLECTIONS = ["bloempotten", "verlichting", "schakelmateriaal", "furniture"];

/**
 * Localised product name (falls back to the catalogue's English name).
 * Flexible Stone (wall-panels) names are always shown in English — the range
 * is marketed under its English finish names in every locale.
 */
export function useProductName(product: CatalogProduct): string {
  const t = useTranslations("products");
  if (product.collection === "wall-panels") return product.name;
  const key = `i18n.${product.slug}.name`;
  return t.has(key) ? t(key) : product.name;
}

export function ProductCard({
  product,
  collectionLabel,
  noImageLabel,
  className,
  priority = false,
  imageOverride,
  kleur,
}: {
  product: CatalogProduct;
  collectionLabel?: string;
  noImageLabel?: string;
  className?: string;
  priority?: boolean;
  /** When a colour filter is active, show the matching variant's image. */
  imageOverride?: string;
  /** Merkproducten: de kleur waarin de kaart opent (naam uit de kleur-as). */
  kleur?: string | null;
}) {
  const t = useTranslations("products");
  const merk = brandOf(product);
  const locale = useLocale();
  const name = merk
    ? // Merkproducten dragen Nederlandse catalogusnamen; die gaan door het
      // woordenboek in plaats van door de per-slug vertaalsleutels.
      productName(product.name, locale)
    : product.collection === "wall-panels"
      ? product.name
      : t.has(`i18n.${product.slug}.name`)
        ? t(`i18n.${product.slug}.name`)
        : product.name;
  const localShort = t.has(`i18n.${product.slug}.short`) ? t(`i18n.${product.slug}.short`) : null;
  let detail = localShort ?? product.dimensions ?? product.short ?? null;
  if (detail && name && detail.toLowerCase().startsWith(name.toLowerCase()) && detail.length > name.length) {
    detail = detail.slice(name.length).replace(/^[\s—·-]+/, "").trim() || null;
  }
  const colLabel = collectionLabel ?? (collectionKey[product.collection] ? t(collectionKey[product.collection]) : "");
  const noImg = noImageLabel ?? t("noImage");
  // Merkproducten: de kleuren met een eigen foto zijn de "stalen" onder de
  // kaart. Aanwijzen wisselt het beeld, en het overzicht kan een kaart in een
  // andere kleur laten openen — zo staat niet alles in chroom.
  const kleurStalen = (product.optionAxes?.find((a) => a.key === "kleur")?.values ?? []).filter((w) => w.image);
  const [aangewezen, setAangewezen] = useState<string | null>(null);
  const staal = kleurStalen.find((w) => w.value === (aangewezen ?? kleur));
  const cardImage = imageOverride ?? staal?.image ?? product.image;

  return (
    <Link
      href={`/products/${product.slug}`}
      data-hover-label={t("viewProduct")}
      className={cn("group block", className)}
    >
      <div className={cn("relative aspect-[3/4] overflow-hidden", CONTAIN_COLLECTIONS.includes(product.collection) ? "bg-paper" : "bg-sand-100")}>
        {cardImage ? (
          <Image
            src={cardImage}
            alt={name}
            fill
            sizes="(max-width:640px) 50vw, (max-width:1024px) 33vw, 25vw"
            className={cn(
              "transition-transform duration-[1.1s] ease-out group-hover:scale-[1.04]",
              // Bloempotten-kleurfilter toont de staande pot-foto → heel tonen; verlichting
              // (productfoto op wit) altijd heel; anders vult de 3:4 lifestyle-crop de kaart.
              product.collection === "verlichting" || product.collection === "schakelmateriaal" || product.collection === "furniture" || (product.collection === "bloempotten" && imageOverride)
                ? "object-contain p-4"
                : "object-cover",
            )}
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
          {merk ? (
            // Het merklogo neemt de plek van het collectie-label in: bij een
            // merkproduct is dát wat de klant herkent.
            <Image
              src={merk.logo}
              alt={merk.name}
              width={merk.logoWidth}
              height={merk.logoHeight}
              className="h-3 w-auto max-w-[5.5rem] object-contain opacity-70"
            />
          ) : (
            colLabel && (
              <p className="text-[0.66rem] uppercase tracking-[0.22em] text-ink-soft/65">{colLabel}</p>
            )
          )}
          <h3 className="mt-1 text-[0.95rem] font-medium leading-snug text-ink transition-colors group-hover:text-ink-soft md:text-base">
            {name}
          </h3>
          {detail && <p className="mt-1 line-clamp-2 text-[0.8rem] leading-relaxed text-ink-soft">{detail}</p>}
          {kleurStalen.length > 1 && (
            <span className="mt-2 flex flex-wrap items-center gap-1.5" onMouseLeave={() => setAangewezen(null)}>
              {kleurStalen.slice(0, 8).map((w) => (
                <span
                  key={w.value}
                  title={w.label}
                  onMouseEnter={() => setAangewezen(w.value)}
                  className={cn(
                    "relative block h-5 w-5 overflow-hidden rounded-full border bg-paper transition-colors",
                    (aangewezen ?? kleur) === w.value ? "border-ink" : "border-ink/15 hover:border-ink/50",
                  )}
                >
                  <Image src={w.image!} alt={w.label} fill sizes="20px" className="scale-[1.6] object-cover" />
                </span>
              ))}
            </span>
          )}
          <div className="mt-2"><PriceTag sku={product.sku} skus={product.variants?.map((v) => v.sku)} name={product.name} asLink={false} /></div>
        </div>
        <ArrowUpRight className="mt-1 h-4 w-4 shrink-0 text-ink-soft transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
      </div>
    </Link>
  );
}
