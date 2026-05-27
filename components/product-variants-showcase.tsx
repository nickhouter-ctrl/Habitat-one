"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";
import type { ProductVariant } from "@/lib/data/catalog";
import { cn } from "@/lib/utils";

/**
 * Editorial variants showcase — big preview pane + horizontal swatch picker.
 * Replaces the older grid+thumbnail product gallery for the cinematic
 * product page.
 */
export function ProductVariantsShowcase({
  variants,
  fallback,
  productName,
  label,
}: {
  variants: ProductVariant[];
  fallback: string | null;
  productName: string;
  label: string;
}) {
  const withImages = variants.filter((v) => v.images.length > 0);
  const [idx, setIdx] = useState(0);
  const active = withImages[idx];
  const swatches = withImages.filter((v) => v.colorHex || v.name);
  const showSwatches = swatches.length > 1;
  const imgs = active?.images ?? (fallback ? [fallback] : []);
  const [imgIdx, setImgIdx] = useState(0);
  const heroImage = imgs[imgIdx] ?? null;

  return (
    <div>
      {/* Preview */}
      <div className="relative aspect-[4/5] w-full overflow-hidden bg-sand-100">
        <AnimatePresence mode="wait">
          {heroImage && (
            <motion.div
              key={`${idx}-${imgIdx}`}
              initial={{ opacity: 0, scale: 1.04 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.02 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="absolute inset-0"
            >
              <Image
                src={heroImage}
                alt={`${productName} — ${active?.name ?? ""}`}
                fill
                priority
                sizes="(max-width:1024px) 100vw, 50vw"
                className="object-cover"
              />
            </motion.div>
          )}
        </AnimatePresence>
        {/* image dots if multiple per variant */}
        {imgs.length > 1 && (
          <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-1.5">
            {imgs.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setImgIdx(i)}
                aria-label={`${productName} image ${i + 1}`}
                className={cn(
                  "h-1.5 w-6 transition-colors",
                  i === imgIdx ? "bg-paper" : "bg-paper/40 hover:bg-paper/65",
                )}
              />
            ))}
          </div>
        )}
      </div>

      {/* Swatches */}
      {showSwatches && (
        <div className="mt-8">
          <p className="text-[0.66rem] uppercase tracking-[0.32em] text-ink-soft">{label}</p>
          <div className="mt-4 flex flex-wrap gap-3">
            {swatches.map((v, i) => {
              const realIdx = withImages.indexOf(v);
              const isActive = realIdx === idx;
              return (
                <button
                  key={v.id}
                  type="button"
                  onClick={() => {
                    setIdx(realIdx);
                    setImgIdx(0);
                  }}
                  className={cn(
                    "flex items-center gap-2.5 border px-3 py-2 text-[0.7rem] font-medium uppercase tracking-[0.16em] transition-colors",
                    isActive
                      ? "border-ink bg-ink text-paper"
                      : "border-ink/15 text-ink hover:border-ink/40",
                  )}
                >
                  {v.colorHex && (
                    <span
                      className="h-3.5 w-3.5 rounded-full border border-current/20"
                      style={{ backgroundColor: v.colorHex }}
                    />
                  )}
                  <span>{v.name || `#${String(i + 1).padStart(2, "0")}`}</span>
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
