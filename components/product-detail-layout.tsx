"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";
import { ArrowUpRight, CalendarDays, ChevronLeft, ChevronRight, ImageOff, Play } from "lucide-react";
import { PLANTER_SIZES, type CatalogProduct } from "@/lib/data/catalog";
import { Link } from "@/i18n/navigation";
import { ProductQuoteActions } from "@/components/product-quote-actions";
import { cn } from "@/lib/utils";

type Media = { type: "image" | "video"; src: string; poster?: string };

export interface ProductDetailLayoutProps {
  product: CatalogProduct;
  name: string;
  lead: string | null;
  description: string | null;
  collectionLabel: string;
  identifier: string;
  materialList: string[];
  spaceList: string[];
  /** lowercased variant name → one or more video srcs */
  variantVideos?: Record<string, string | string[]>;
  labels: {
    aboutThisProduct: string;
    specifications: string;
    availableColours: string;
    availableSizes: string;
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
  variantVideos,
  labels,
}: ProductDetailLayoutProps) {
  // Build the variant list (only those that actually have imagery)
  const withImages = product.variants.filter((v) => v.images.length > 0);
  const swatches = withImages.filter((v) => v.colorHex || v.name);
  const showSwatches = swatches.length > 1;
  // Staande potten & verlichting (foto op wit) + deuren: hele product tonen
  // (niet bijsnijden) op een lichte achtergrond.
  const isPot = product.collection === "bloempotten" || product.collection === "verlichting";
  const fitWhole = isPot || product.collection === "doors";
  const fitClass = fitWhole ? "object-contain" : "object-cover";

  const [variantIdx, setVariantIdx] = useState(0);
  const activeVariant = withImages[variantIdx] ?? null;
  const fallbackImage = product.image;
  const images = activeVariant?.images.length
    ? activeVariant.images
    : fallbackImage
    ? [fallbackImage]
    : [];

  // Media = product still first (instant), then the colour's video (lazy),
  // then the remaining stills (in-room scene, texture close-up).
  const media = useMemo<Media[]>(() => {
    const variantName = (activeVariant?.name ?? "").toLowerCase().trim();
    const v = variantVideos?.[variantName];
    const videos = Array.isArray(v) ? v : v ? [v] : [];
    const list: Media[] = [];
    if (images[0]) list.push({ type: "image", src: images[0] });
    for (const src of videos) list.push({ type: "video", src, poster: images[0] });
    for (const src of images.slice(1)) list.push({ type: "image", src });
    return list;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [variantIdx]);

  const [mediaIdx, setMediaIdx] = useState(0);
  const current = media[mediaIdx] ?? null;

  // The gallery frame matches the active media's own aspect ratio (default
  // to a portrait product shot until the real dimensions load in).
  const [aspect, setAspect] = useState(9 / 16);

  function changeVariant(i: number) {
    setVariantIdx(i);
    setMediaIdx(0);
  }

  // Planters: a two-axis size + colour picker. Size is the SKU prefix
  // (TBO40, TEP30T…), colour is the variant name.
  const sizeOf = (sku: string | null | undefined) => sku?.match(/^[A-Z]+\d+[A-Z]?/)?.[0] ?? "";
  const sizeKeys = isPot ? [...new Set(withImages.map((v) => sizeOf(v.sku)).filter(Boolean))] : [];
  const activeSize = sizeOf(activeVariant?.sku);
  const colorsInSize = (sz: string) => withImages.filter((v) => sizeOf(v.sku) === sz);
  const planterDim = isPot ? PLANTER_SIZES[activeSize]?.dim ?? null : null;
  function selectSize(sz: string) {
    const inSize = colorsInSize(sz);
    const match = inSize.find((v) => v.name === activeVariant?.name) ?? inSize[0];
    if (match) changeVariant(withImages.indexOf(match));
  }

  function nextMedia() {
    if (media.length === 0) return;
    setMediaIdx((i) => (i + 1) % media.length);
  }
  function prevMedia() {
    if (media.length === 0) return;
    setMediaIdx((i) => (i - 1 + media.length) % media.length);
  }

  return (
    <div className="grid grid-cols-12 gap-x-6 gap-y-10 lg:gap-x-10">
      {/* ---- LEFT: gallery ---- */}
      <div className="col-span-12 lg:col-span-7">
        {/* The frame is full-width and adopts each media's own aspect ratio,
            so portrait product shots and landscape room scenes both fill it
            edge-to-edge — no grey letterbox, nothing cropped — and it stays
            reliable on mobile. A max-height keeps tall portraits in check on
            wide screens. */}
        <div>
          <div
            className={`relative w-full overflow-hidden ${isPot ? "bg-paper" : "bg-sand-100"}`}
            style={{ aspectRatio: String(aspect), maxHeight: "85svh" }}
          >
          <AnimatePresence mode="wait">
            {current ? (
              <motion.div
                key={`${variantIdx}-${mediaIdx}`}
                initial={{ opacity: 0, scale: 1.03 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
                className="absolute inset-0"
              >
                {current.type === "video" ? (
                  <video
                    key={current.src}
                    autoPlay
                    muted
                    loop
                    playsInline
                    controls
                    poster={current.poster}
                    preload="none"
                    onLoadedMetadata={(e) => {
                      const v = e.currentTarget;
                      if (v.videoWidth && v.videoHeight) setAspect(v.videoWidth / v.videoHeight);
                    }}
                    className="h-full w-full object-cover"
                  >
                    <source src={current.src} type="video/mp4" />
                  </video>
                ) : (
                  <Image
                    src={current.src}
                    alt={`${name}${activeVariant?.name ? ` — ${activeVariant.name}` : ""}`}
                    fill
                    priority
                    sizes="(max-width:1024px) 100vw, 60vw"
                    onLoad={(e) => {
                      const img = e.currentTarget;
                      if (img.naturalWidth && img.naturalHeight)
                        setAspect(img.naturalWidth / img.naturalHeight);
                    }}
                    className={fitClass}
                  />
                )}
              </motion.div>
            ) : (
              <div className="flex h-full flex-col items-center justify-center gap-2 text-ink-soft/55">
                <ImageOff className="h-8 w-8" />
                <span className="text-xs">{labels.noImage}</span>
              </div>
            )}
          </AnimatePresence>

          {/* Media counter */}
          {media.length > 1 && (
            <p className="pointer-events-none absolute bottom-4 left-4 z-10 text-[0.62rem] uppercase tracking-[0.32em] text-paper mix-blend-difference">
              {String(mediaIdx + 1).padStart(2, "0")} / {String(media.length).padStart(2, "0")}
            </p>
          )}

          {/* Prev / Next arrows */}
          {media.length > 1 && (
            <>
              <button
                type="button"
                onClick={prevMedia}
                aria-label="Previous"
                className="absolute left-4 top-1/2 z-10 grid h-11 w-11 -translate-y-1/2 place-items-center bg-paper/85 text-ink transition-colors hover:bg-paper"
              >
                <ChevronLeft className="h-4 w-4" />
              </button>
              <button
                type="button"
                onClick={nextMedia}
                aria-label="Next"
                className="absolute right-4 top-1/2 z-10 grid h-11 w-11 -translate-y-1/2 place-items-center bg-paper/85 text-ink transition-colors hover:bg-paper"
              >
                <ChevronRight className="h-4 w-4" />
              </button>
            </>
          )}
          </div>
        </div>

        {/* Thumbnail strip */}
        {media.length > 1 && (
          <div className="mt-4 grid grid-cols-6 gap-2 sm:gap-3">
            {media.map((m, i) => (
              <button
                key={`${m.src}-${i}`}
                type="button"
                onClick={() => setMediaIdx(i)}
                className={cn(
                  "relative aspect-square overflow-hidden bg-sand-100 transition-opacity",
                  i === mediaIdx ? "opacity-100 ring-1 ring-ink" : "opacity-60 hover:opacity-100",
                )}
                aria-label={m.type === "video" ? "Play video" : `Image ${i + 1}`}
              >
                <Image
                  src={m.type === "video" ? m.poster ?? "" : m.src}
                  alt=""
                  fill
                  sizes="120px"
                  className="object-cover"
                />
                {m.type === "video" && (
                  <span className="absolute inset-0 grid place-items-center bg-ink/25">
                    <span className="grid h-7 w-7 place-items-center rounded-full bg-paper/90 text-ink">
                      <Play className="h-3 w-3 translate-x-[1px] fill-current" />
                    </span>
                  </span>
                )}
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
          {(activeVariant?.sku ?? product.sku) && (
            <SpecRow label={labels.sku}>{activeVariant?.sku ?? product.sku}</SpecRow>
          )}
          {(planterDim ?? product.dimensions) && (
            <SpecRow label={labels.dimensions}>
              {planterDim ?? product.dimensions}
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

        {/* Variant picker */}
        {isPot && sizeKeys.length > 0 ? (
          // Planters: two axes — size first, then the colours available in that size.
          <div className="mt-10 space-y-8">
            <div>
              <p className="text-[0.66rem] font-medium uppercase tracking-[0.32em] text-ink-soft">
                {labels.availableSizes}
              </p>
              <div className="mt-4 flex flex-wrap gap-2.5">
                {sizeKeys.map((sz) => {
                  const active = sz === activeSize;
                  const sv = colorsInSize(sz).find((v) => v.name === activeVariant?.name) ?? colorsInSize(sz)[0];
                  const thumb = sv?.images?.[0];
                  return (
                    <button
                      key={sz}
                      type="button"
                      onClick={() => selectSize(sz)}
                      className={cn(
                        "flex flex-col items-center gap-1.5 border p-2 transition-colors",
                        active ? "border-ink bg-ink/[0.04]" : "border-ink/15 hover:border-ink/40",
                      )}
                    >
                      {thumb ? (
                        <span className="relative h-16 w-14 overflow-hidden bg-sand-50">
                          <Image src={thumb} alt="" fill sizes="56px" className="object-contain p-1" />
                        </span>
                      ) : null}
                      <span className="text-sm font-medium text-ink">{PLANTER_SIZES[sz]?.label ?? sz}</span>
                    </button>
                  );
                })}
              </div>
            </div>
            <div>
              <p className="text-[0.66rem] font-medium uppercase tracking-[0.32em] text-ink-soft">
                {labels.availableColours}
              </p>
              <div className="mt-4 grid grid-cols-2 gap-2 sm:grid-cols-3">
                {colorsInSize(activeSize).map((v) => {
                  const realIdx = withImages.indexOf(v);
                  const isActive = realIdx === variantIdx;
                  return (
                    <button
                      key={v.id}
                      type="button"
                      onClick={() => changeVariant(realIdx)}
                      className={cn(
                        "group flex items-center gap-3 border p-2 text-left transition-colors",
                        isActive ? "border-ink bg-ink/[0.04]" : "border-ink/15 hover:border-ink/40",
                      )}
                    >
                      <span
                        className="h-8 w-8 shrink-0 rounded-full border border-ink/10"
                        style={{ backgroundColor: v.colorHex ?? "transparent" }}
                      />
                      <span className="min-w-0 text-[0.78rem] font-medium leading-snug text-ink">
                        {v.name || "Variant"}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        ) : showSwatches ? (
          <div className="mt-10">
            <p className="text-[0.66rem] font-medium uppercase tracking-[0.32em] text-ink-soft">
              {product.collection === "backer-boards" ? labels.availableSizes : labels.availableColours}
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
        ) : null}

        {/* Actions */}
        <div className="mt-10 border-t border-ink/15 pt-8">
          <ProductQuoteActions
            slug={product.slug}
            name={name}
            variant={activeVariant?.name ?? null}
            sku={activeVariant?.sku ?? product.sku ?? null}
            image={images[0] ?? product.image ?? null}
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
