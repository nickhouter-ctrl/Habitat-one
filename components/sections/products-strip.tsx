"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { motion } from "motion/react";
import { ArrowLeft, ArrowRight, ArrowUpRight, ImageOff } from "lucide-react";
import { Link } from "@/i18n/navigation";
import type { CatalogProduct } from "@/lib/data/catalog";
import { cn } from "@/lib/utils";

export function ProductsStrip({ products }: { products: CatalogProduct[] }) {
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
      {/* Scroll arrows — desktop only */}
      <div className="pointer-events-none absolute -top-16 right-0 hidden gap-2 md:flex">
        <button
          type="button"
          onClick={() => scrollBy(-1)}
          aria-label="Scroll left"
          className="pointer-events-auto grid grid-cols-1 h-11 w-11 place-items-center border border-ink/15 bg-paper text-ink transition-colors hover:bg-ink hover:text-paper"
        >
          <ArrowLeft className="h-4 w-4" />
        </button>
        <button
          type="button"
          onClick={() => scrollBy(1)}
          aria-label="Scroll right"
          className="pointer-events-auto grid grid-cols-1 h-11 w-11 place-items-center border border-ink/15 bg-paper text-ink transition-colors hover:bg-ink hover:text-paper"
        >
          <ArrowRight className="h-4 w-4" />
        </button>
      </div>

      <div
        ref={scrollerRef}
        className={cn(
          "no-scrollbar -mx-5 flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-px-5 px-5 pb-2 md:-mx-8 md:scroll-px-8 md:px-8",
        )}
        style={{ scrollbarWidth: "none" }}
      >
        {products.map((p) => {
          const isHovered = hovered === p.id.toString();
          const name = t.has(`i18n.${p.slug}.name`) ? t(`i18n.${p.slug}.name`) : p.name;
          return (
            <Link
              key={p.id}
              data-card
              href={`/products/${p.slug}`}
              onMouseEnter={() => setHovered(p.id.toString())}
              onMouseLeave={() => setHovered(null)}
              className="group block w-[68%] shrink-0 snap-start sm:w-[40%] md:w-[30%] lg:w-[22%]"
            >
              <motion.div
                animate={{ scale: isHovered ? 1.04 : 1 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
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
                {/* hover overlay with arrow */}
                <motion.span
                  animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 8 }}
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  className="absolute bottom-4 right-4 grid grid-cols-1 h-10 w-10 place-items-center bg-paper text-ink"
                >
                  <ArrowUpRight className="h-4 w-4" />
                </motion.span>
              </motion.div>
              <div className="mt-4">
                <p className="text-[0.66rem] uppercase tracking-[0.22em] text-ink-soft/70">
                  {p.sku ?? "Magic Flexible Stone"}
                </p>
                <h3 className="mt-1.5 text-[0.95rem] font-medium leading-snug text-ink transition-colors group-hover:text-ink-soft md:text-base">
                  {name}
                </h3>
              </div>
            </Link>
          );
        })}

        {/* Trailing CTA tile */}
        <Link
          href="/products?collection=wall-panels"
          data-card
          className="group flex w-[68%] shrink-0 snap-start items-center justify-center bg-ink text-paper sm:w-[40%] md:w-[30%] lg:w-[22%]"
        >
          <div className="flex flex-col items-start gap-3 p-6">
            <span className="text-[0.66rem] uppercase tracking-[0.32em] text-paper/65">{t("collection")}</span>
            <span className="text-2xl font-medium leading-tight">{t("viewMagicCollection")}</span>
            <ArrowUpRight className="mt-3 h-5 w-5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </div>
        </Link>
      </div>
    </div>
  );
}
