"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";

/**
 * Full-bleed background slideshow that auto-crossfades through a set of
 * images, each with a slow Ken-Burns zoom. Sits behind overlay content.
 * Clickable indicators bottom-right (above any footer bar).
 */
export function HeroSlideshow({
  images,
  intervalMs = 5500,
}: {
  images: string[];
  intervalMs?: number;
}) {
  const [slide, setSlide] = useState(0);

  useEffect(() => {
    if (typeof window === "undefined" || images.length < 2) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = window.setInterval(
      () => setSlide((s) => (s + 1) % images.length),
      intervalMs,
    );
    return () => window.clearInterval(id);
  }, [images.length, intervalMs]);

  return (
    <>
      <AnimatePresence>
        <motion.div
          key={slide}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
          className="absolute inset-0"
        >
          <div className="absolute inset-0 animate-ken-burns is-visible">
            <Image
              src={images[slide]}
              alt=""
              fill
              priority={slide === 0}
              sizes="100vw"
              className="object-cover"
            />
          </div>
        </motion.div>
      </AnimatePresence>

      {images.length > 1 && (
        <div className="absolute bottom-20 right-6 z-20 flex items-center gap-2.5">
          {images.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setSlide(i)}
              aria-label={`Slide ${i + 1}`}
              className="group p-1"
            >
              <span
                className={
                  i === slide
                    ? "block h-[2px] w-8 bg-paper transition-all"
                    : "block h-[2px] w-4 bg-paper/45 transition-all group-hover:bg-paper/80"
                }
              />
            </button>
          ))}
        </div>
      )}
    </>
  );
}
