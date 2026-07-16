"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { motion } from "motion/react";
import { ArrowLeft, ArrowRight, ArrowUpRight, ImageOff } from "lucide-react";
import { Link } from "@/i18n/navigation";
import type { CatalogProduct } from "@/lib/data/catalog";
import { cn } from "@/lib/utils";

export function ProductsStrip({
  products,
  ctaHref = "/products?collection=wall-panels",
  ctaLabel,
}: {
  products: CatalogProduct[];
  /** Trailing "browse all" tile link (defaults to the Flexible Stone collection). */
  ctaHref?: string;
  /** Trailing tile label (defaults to "Browse all Flexible Stone products"). */
  ctaLabel?: string;
}) {
  const t = useTranslations("products");
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [hovered, setHovered] = useState<string | null>(null);

  function scrollBy(dir: 1 | -1) {
    const el = scrollerRef.current;
    if (!el) return;
    const card = el.querySelector<HTMLElement>("[data-card]");
    const step = card ? card.offsetWidth + 16 : 320;
    el.scrollBy({ left: step * dir * 1.5, behavior: "smooth" });
  }

  return (
    <div className="relative">
      <div
        ref={scrollerRef}
        className={cn(
          "no-scrollbar -mx-5 flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-px-5 px-5 pb-2 md:-mx-8 md:scroll-px-8 md:px-8",
        )}
        style={{ scrollbarWidth: "none" }}
      >
        {products.map((p) => {
          const id = p.id.toString();
          const isHovered = hovered === id;
          const anyHovered = hovered !== null;
          const dimmed = anyHovered && !isHovered;
          // Flexible Stone (wall-panels) names stay English in every locale.
          const name =
            p.collection === "wall-panels"
              ? p.name
              : t.has(`i18n.${p.slug}.name`)
                ? t(`i18n.${p.slug}.name`)
                : p.name;
          return (
            <Link
              key={p.id}
              data-card
              data-hover-label="View product"
              href={`/products/${p.slug}`}
              onMouseEnter={() => setHovered(id)}
              onMouseLeave={() => setHovered(null)}
              className="group block w-[68%] shrink-0 snap-start sm:w-[40%] md:w-[30%] lg:w-[22%]"
            >
              <motion.div
                animate={{
                  scale: isHovered ? 1.03 : 1,
                  opacity: dimmed ? 0.55 : 1,
                  filter: dimmed ? "grayscale(0.6)" : "grayscale(0)",
                }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className="relative aspect-[3/4] overflow-hidden bg-sand-100"
              >
                {p.image ? (
                  <motion.div
                    animate={{ scale: isHovered ? 1.08 : 1 }}
                    transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
                    className="absolute inset-0"
                  >
                    <Image
                      src={p.image}
                      alt={name}
                      fill
                      sizes="(max-width:640px) 70vw, (max-width:1024px) 40vw, 22vw"
                      className="object-cover"
                    />
                  </motion.div>
                ) : (
                  <div className="flex h-full flex-col items-center justify-center gap-2 text-ink-soft/55">
                    <ImageOff className="h-7 w-7" />
                    <span className="px-6 text-center text-xs">{t("noImage")}</span>
                  </div>
                )}
                {/* low-contrast caption strip — fades in on hover */}
                <motion.div
                  animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 12 }}
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 bg-gradient-to-t from-ink/55 to-transparent p-4"
                >
                  <span className="text-[0.62rem] font-medium uppercase tracking-[0.24em] text-paper/85">
                    View product
                  </span>
                  <ArrowUpRight className="h-4 w-4 text-paper" />
                </motion.div>
              </motion.div>
              <motion.div
                animate={{ opacity: dimmed ? 0.4 : 1 }}
                transition={{ duration: 0.5 }}
                className="mt-4"
              >
                <p className="text-[0.66rem] uppercase tracking-[0.22em] text-ink-soft/70">
                  {p.sku ?? (p.collection === "bloempotten" ? t("collectionFlowerPots") : "Flexible Stone")}
                </p>
                <h3 className="mt-1.5 text-[0.95rem] font-medium leading-snug text-ink md:text-base">
                  {name}
                </h3>
              </motion.div>
            </Link>
          );
        })}

        {/* Trailing CTA tile */}
        <Link
          href={ctaHref}
          data-card
          className="group flex w-[68%] shrink-0 snap-start items-center justify-center bg-ink text-paper sm:w-[40%] md:w-[30%] lg:w-[22%]"
        >
          <div className="flex flex-col items-start gap-3 p-6">
            <span className="text-[0.66rem] uppercase tracking-[0.32em] text-paper/65">{t("collection")}</span>
            <span className="text-2xl font-medium leading-tight">{ctaLabel ?? t("viewMagicCollection")}</span>
            <ArrowUpRight className="mt-3 h-5 w-5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </div>
        </Link>
      </div>

      {/* Scroll controls — sit below the strip on desktop, right-aligned */}
      <div className="mt-8 hidden items-center justify-end gap-2 md:flex">
        <button
          type="button"
          onClick={() => scrollBy(-1)}
          aria-label="Scroll left"
          className="grid grid-cols-1 h-11 w-11 place-items-center border border-ink/15 text-ink transition-colors hover:border-ink hover:bg-ink hover:text-paper"
        >
          <ArrowLeft className="h-4 w-4" />
        </button>
        <button
          type="button"
          onClick={() => scrollBy(1)}
          aria-label="Scroll right"
          className="grid grid-cols-1 h-11 w-11 place-items-center border border-ink/15 text-ink transition-colors hover:border-ink hover:bg-ink hover:text-paper"
        >
          <ArrowRight className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}
