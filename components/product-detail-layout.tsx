"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";
import { ArrowUpRight, CalendarDays, ChevronLeft, ChevronRight, ImageOff } from "lucide-react";
import type { CatalogProduct } from "@/lib/data/catalog";
import { Link } from "@/i18n/navigation";
import { ProductQuoteActions } from "@/components/product-quote-actions";
import { cn } from "@/lib/utils";

export interface ProductDetailLayoutProps {
  product: CatalogProduct;
  name: string;
  lead: string | null;
  description: string | null;
  collectionLabel: string;
  identifier: string;
  materialList: string[];
  spaceList: string[];
  labels: {
    aboutThisProduct: string;
    specifications: string;
    availableColours: string;
    sku: string;
    dimensions: string;
    materials: string;
    space: string;
    enquire: string;
    addToQuote: string;
    inQuote: string;
    bookAppointment: string;
    noImage: string;
  };
}

/**
 * Classic luxury shop layout: a generous gallery on the left, a sticky
 * info rail on the right with specs, swatches and the quote actions.
 * Variant state lives here so both columns stay in sync.
 */
export function ProductDetailLayout({
  product,
  name,
  lead,
  description,
  collectionLabel,
  identifier,
  materialList,
  spaceList,
  labels,
}: ProductDetailLayoutProps) {
  // Build the variant list (only those that actually have imagery)
  const withImages = product.variants.filter((v) => v.images.length > 0);
  const swatches = withImages.filter((v) => v.colorHex || v.name);
  const showSwatches = swatches.length > 1;

  const [variantIdx, setVariantIdx] = useState(0);
  const activeVariant = withImages[variantIdx] ?? null;
  const fallbackImage = product.image;
  const images = activeVariant?.images.length
    ? activeVariant.images
    : fallbackImage
    ? [fallbackImage]
    : [];
  const [imgIdx, setImgIdx] = useState(0);
  const currentImage = images[imgIdx] ?? null;

  function changeVariant(i: number) {
    setVariantIdx(i);
    setImgIdx(0);
  }

  function nextImage() {
    if (images.length === 0) return;
    setImgIdx((i) => (i + 1) % images.length);
  }
  function prevImage() {
    if (images.length === 0) return;
    setImgIdx((i) => (i - 1 + images.length) % images.length);
  }

  return (
    <div className="grid grid-cols-12 gap-x-6 gap-y-10 lg:gap-x-10">
      {/* ---- LEFT: gallery ---- */}
      <div className="col-span-12 lg:col-span-7">
        <div className="relative aspect-[4/5] w-full overflow-hidden bg-sand-100">
          <AnimatePresence mode="wait">
            {currentImage ? (
              <motion.div
                key={`${variantIdx}-${imgIdx}`}
                initial={{ opacity: 0, scale: 1.03 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
                className="absolute inset-0"
              >
                <Image
                  src={currentImage}
                  alt={`${name}${activeVariant?.name ? ` — ${activeVariant.name}` : ""}`}
                  fill
                  priority
                  sizes="(max-width:1024px) 100vw, 60vw"
                  className="object-cover"
                />
              </motion.div>
            ) : (
              <div className="flex h-full flex-col items-center justify-center gap-2 text-ink-soft/55">
                <ImageOff className="h-8 w-8" />
                <span className="text-xs">{labels.noImage}</span>
              </div>
            )}
          </AnimatePresence>

          {/* Image counter */}
          {images.length > 1 && (
            <p className="absolute bottom-4 left-4 z-10 text-[0.62rem] uppercase tracking-[0.32em] text-paper">
              {String(imgIdx + 1).padStart(2, "0")} / {String(images.length).padStart(2, "0")}
            </p>
          )}

          {/* Prev / Next arrows */}
          {images.length > 1 && (
            <>
              <button
                type="button"
                onClick={prevImage}
                aria-label="Previous image"
                className="absolute left-4 top-1/2 z-10 grid h-11 w-11 -translate-y-1/2 place-items-center bg-paper/85 text-ink transition-colors hover:bg-paper"
              >
                <ChevronLeft className="h-4 w-4" />
              </button>
              <button
                type="button"
                onClick={nextImage}
                aria-label="Next image"
                className="absolute right-4 top-1/2 z-10 grid h-11 w-11 -translate-y-1/2 place-items-center bg-paper/85 text-ink transition-colors hover:bg-paper"
              >
                <ChevronRight className="h-4 w-4" />
              </button>
            </>
          )}
        </div>

        {/* Thumbnail strip of variant images */}
        {images.length > 1 && (
          <div className="mt-4 grid grid-cols-6 gap-2 sm:gap-3">
            {images.map((src, i) => (
              <button
                key={`${src}-${i}`}
                type="button"
                onClick={() => setImgIdx(i)}
                className={cn(
                  "relative aspect-square overflow-hidden bg-sand-100 transition-opacity",
                  i === imgIdx ? "opacity-100 ring-1 ring-ink" : "opacity-60 hover:opacity-100",
                )}
                aria-label={`Image ${i + 1}`}
              >
                <Image src={src} alt="" fill sizes="120px" className="object-cover" />
              </button>
            ))}
          </div>
        )}
      </div>

      {/* ---- RIGHT: sticky info ---- */}
      <aside className="col-span-12 lg:col-span-5 lg:sticky lg:top-28 lg:self-start">
        <p className="text-[0.7rem] font-medium uppercase tracking-[0.32em] text-ink-soft">
          {collectionLabel}
        </p>
        <h1 className="mt-4 text-3xl font-medium leading-[1.05] tracking-[-0.018em] text-ink sm:text-4xl md:text-[2.6rem]">
          {name}
        </h1>
        <p className="mt-3 text-[0.72rem] font-medium uppercase tracking-[0.22em] text-ink-soft/80">
          {identifier}
        </p>

        {lead && (
          <p className="mt-7 text-base leading-relaxed text-ink-soft md:text-[1.05rem]">
            {lead}
          </p>
        )}
        {description && (
          <p className="mt-5 text-[0.95rem] leading-relaxed text-ink-soft">{description}</p>
        )}

        {/* Big, clear specifications */}
        <dl className="mt-10 border-t border-ink/15">
          {product.sku && (
            <SpecRow label={labels.sku}>{product.sku}</SpecRow>
          )}
          {product.dimensions && (
            <SpecRow label={labels.dimensions}>
              {product.dimensions}
              {product.additionalSizes && product.additionalSizes.length > 0 && (
                <span className="mt-1 block text-sm text-ink-soft/65">
                  + {product.additionalSizes.join(" · ")}
                </span>
              )}
            </SpecRow>
          )}
          {materialList.length > 0 && (
            <SpecRow label={labels.materials}>{materialList.join(" · ")}</SpecRow>
          )}
          {spaceList.length > 0 && (
            <SpecRow label={labels.space}>{spaceList.join(" · ")}</SpecRow>
          )}
        </dl>

        {/* Variant picker — visual swatches */}
        {showSwatches && (
          <div className="mt-10">
            <p className="text-[0.66rem] font-medium uppercase tracking-[0.32em] text-ink-soft">
              {labels.availableColours}
              <span className="ml-3 text-ink/40">({swatches.length})</span>
            </p>
            <div className="mt-4 grid grid-cols-2 gap-2 sm:grid-cols-3">
              {swatches.map((v) => {
                const realIdx = withImages.indexOf(v);
                const isActive = realIdx === variantIdx;
                const thumb = v.images[0];
                return (
                  <button
                    key={v.id}
                    type="button"
                    onClick={() => changeVariant(realIdx)}
                    className={cn(
                      "group flex items-center gap-3 border p-2 text-left transition-colors",
                      isActive
                        ? "border-ink bg-ink/[0.04]"
                        : "border-ink/15 hover:border-ink/40",
                    )}
                  >
                    {thumb ? (
                      <span className="relative h-10 w-10 shrink-0 overflow-hidden bg-sand-100">
                        <Image src={thumb} alt="" fill sizes="40px" className="object-cover" />
                      </span>
                    ) : (
                      <span
                        className="h-10 w-10 shrink-0 border border-ink/10"
                        style={{ backgroundColor: v.colorHex ?? "transparent" }}
                      />
                    )}
                    <span className="min-w-0 text-[0.78rem] font-medium leading-snug text-ink">
                      {v.name || "Variant"}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {/* Actions */}
        <div className="mt-10 border-t border-ink/15 pt-8">
          <ProductQuoteActions
            slug={product.slug}
            name={name}
            sku={activeVariant?.sku ?? product.sku ?? null}
            labels={{
              enquire: labels.enquire,
              addToQuote: labels.addToQuote,
              inQuote: labels.inQuote,
            }}
          />
          <Link
            href="/showroom"
            className="mt-5 inline-flex items-center gap-2 text-[0.72rem] font-medium uppercase tracking-[0.18em] text-ink underline underline-offset-[6px] decoration-ink/25 hover:decoration-ink"
          >
            <CalendarDays className="h-3.5 w-3.5" />
            {labels.bookAppointment}
            <ArrowUpRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      </aside>
    </div>
  );
}

function SpecRow({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="flex justify-between gap-6 border-b border-ink/15 py-5">
      <dt className="text-[0.66rem] font-medium uppercase tracking-[0.28em] text-ink-soft/80">
        {label}
      </dt>
      <dd className="text-right text-[0.95rem] font-medium text-ink md:text-base">
        {children}
      </dd>
    </div>
  );
}
