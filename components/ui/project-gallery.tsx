"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { createPortal } from "react-dom";
import { AnimatePresence, motion } from "motion/react";
import { X, ChevronLeft, ChevronRight, ZoomIn } from "lucide-react";
import { cn } from "@/lib/utils";

export function ProjectGallery({ images, alt }: { images: string[]; alt: string }) {
  const [open, setOpen] = useState<number | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const close = useCallback(() => setOpen(null), []);
  const go = useCallback(
    (dir: 1 | -1) => setOpen((i) => (i === null ? i : (i + dir + images.length) % images.length)),
    [images.length],
  );

  useEffect(() => {
    if (open === null) return;
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") go(1);
      if (e.key === "ArrowLeft") go(-1);
    }
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, close, go]);

  if (images.length === 0) return null;

  return (
    <>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {images.map((src, i) => (
          <button
            key={src}
            type="button"
            onClick={() => setOpen(i)}
            className={cn(
              "group relative block overflow-hidden rounded-2xl border border-sand-200",
              i % 5 === 0 ? "sm:col-span-2 aspect-[16/9]" : "aspect-[4/3]",
            )}
          >
            <Image
              src={src}
              alt={`${alt} — ${i + 1}`}
              fill
              sizes="(max-width:768px) 100vw, 33vw"
              className="object-cover transition-transform duration-700 group-hover:scale-[1.06]"
            />
            <div className="absolute inset-0 bg-clay-800/0 transition-colors duration-300 group-hover:bg-clay-800/15" />
            <span className="absolute right-3 top-3 grid grid-cols-1 h-9 w-9 translate-y-2 place-items-center rounded-full bg-cream/90 text-clay-800 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
              <ZoomIn className="h-4 w-4" />
            </span>
          </button>
        ))}
      </div>

      {mounted &&
        createPortal(
          <AnimatePresence>
            {open !== null && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.25 }}
                className="fixed inset-0 z-[100] flex items-center justify-center bg-sea-900/95 backdrop-blur-sm"
                onClick={close}
              >
                <button
                  type="button"
                  onClick={close}
                  aria-label="Close"
                  className="absolute right-4 top-4 z-10 grid grid-cols-1 h-11 w-11 place-items-center rounded-full border border-cream/25 bg-cream/10 text-cream transition-colors hover:bg-cream/20"
                >
                  <X className="h-5 w-5" />
                </button>
                {images.length > 1 && (
                  <>
                    <button
                      type="button"
                      onClick={(e) => { e.stopPropagation(); go(-1); }}
                      aria-label="Previous"
                      className="absolute left-3 top-1/2 z-10 grid grid-cols-1 h-12 w-12 -translate-y-1/2 place-items-center rounded-full border border-cream/25 bg-cream/10 text-cream transition-colors hover:bg-cream/20 md:left-6"
                    >
                      <ChevronLeft className="h-6 w-6" />
                    </button>
                    <button
                      type="button"
                      onClick={(e) => { e.stopPropagation(); go(1); }}
                      aria-label="Next"
                      className="absolute right-3 top-1/2 z-10 grid grid-cols-1 h-12 w-12 -translate-y-1/2 place-items-center rounded-full border border-cream/25 bg-cream/10 text-cream transition-colors hover:bg-cream/20 md:right-6"
                    >
                      <ChevronRight className="h-6 w-6" />
                    </button>
                  </>
                )}
                <AnimatePresence mode="wait">
                  <motion.div
                    key={open}
                    initial={{ opacity: 0, scale: 0.97 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    transition={{ duration: 0.25 }}
                    onClick={(e) => e.stopPropagation()}
                    className="relative h-[82vh] w-[92vw] max-w-6xl"
                  >
                    <Image src={images[open]} alt={`${alt} — ${open + 1}`} fill sizes="92vw" className="object-contain" priority />
                  </motion.div>
                </AnimatePresence>
                <span className="absolute bottom-5 left-1/2 -translate-x-1/2 rounded-full bg-cream/10 px-3 py-1 text-xs font-medium text-cream/70">
                  {open + 1} / {images.length}
                </span>
              </motion.div>
            )}
          </AnimatePresence>,
          document.body,
        )}
    </>
  );
}
