"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";
import { ImageOff } from "lucide-react";
import type { ProductVariant } from "@/lib/data/catalog";
import { cn } from "@/lib/utils";

export function ProductGallery({
  variants,
  fallbackImage,
  productName,
  noImageLabel,
  colourLabel,
}: {
  variants: ProductVariant[];
  fallbackImage: string | null;
  productName: string;
  noImageLabel: string;
  colourLabel: string;
}) {
  // variants with at least one image
  const withImages = useMemo(() => variants.filter((v) => v.images.length > 0), [variants]);
  const swatches = useMemo(() => withImages.filter((v) => v.colorHex || v.name), [withImages]);
  const showSwatches = swatches.length > 1;

  const [variantIdx, setVariantIdx] = useState(0);
  const [imgIdx, setImgIdx] = useState(0);

  const activeVariant = withImages[variantIdx];
  const images = activeVariant?.images?.length
    ? activeVariant.images
    : fallbackImage
      ? [fallbackImage]
      : [];
  const main = images[Math.min(imgIdx, images.length - 1)] ?? fallbackImage;

  function pickVariant(i: number) {
    setVariantIdx(i);
    setImgIdx(0);
  }

  return (
    <div>
      <div className="relative aspect-square overflow-hidden rounded-[2rem] border border-cream/15 bg-gradient-to-br from-sand-100 to-sand-200">
        {main ? (
          <AnimatePresence mode="wait">
            <motion.div
              key={main}
              initial={{ opacity: 0, scale: 1.02 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.35 }}
              className="absolute inset-0"
            >
              <Image src={main} alt={productName} fill priority sizes="(max-width:1024px) 100vw, 50vw" className="object-cover" />
            </motion.div>
          </AnimatePresence>
        ) : (
          <div className="flex h-full flex-col items-center justify-center gap-3 text-clay-700/50">
            <ImageOff className="h-10 w-10" />
            <span>{noImageLabel}</span>
          </div>
        )}
      </div>

      {/* thumbnails for the active variant */}
      {images.length > 1 && (
        <div className="mt-3 flex gap-2.5 overflow-x-auto pb-1">
          {images.map((src, i) => (
            <button
              key={src}
              onClick={() => setImgIdx(i)}
              className={cn(
                "relative aspect-square w-16 shrink-0 overflow-hidden rounded-xl border-2 transition-colors",
                i === Math.min(imgIdx, images.length - 1) ? "border-terracotta-400" : "border-cream/15 hover:border-cream/40",
              )}
            >
              <Image src={src} alt="" fill sizes="64px" className="object-cover" />
            </button>
          ))}
        </div>
      )}

      {/* colour swatches */}
      {showSwatches && (
        <div className="mt-5">
          <p className="text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-cream/50">
            {colourLabel} · {activeVariant?.name ?? `${variantIdx + 1}`}
          </p>
          <div className="mt-2.5 flex flex-wrap gap-2.5">
            {withImages.map((v, i) => {
              const isActive = i === variantIdx;
              return (
                <button
                  key={v.id}
                  onClick={() => pickVariant(i)}
                  title={v.name ?? undefined}
                  aria-label={v.name ?? `Colour ${i + 1}`}
                  className={cn(
                    "relative h-9 w-9 overflow-hidden rounded-full border transition-transform",
                    isActive ? "scale-110 border-cream ring-2 ring-terracotta-400 ring-offset-2 ring-offset-sea-900" : "border-cream/30 hover:scale-105",
                  )}
                  style={v.colorHex ? { backgroundColor: v.colorHex } : undefined}
                >
                  {!v.colorHex && v.images[0] && (
                    <Image src={v.images[0]} alt="" fill sizes="36px" className="object-cover" />
                  )}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
