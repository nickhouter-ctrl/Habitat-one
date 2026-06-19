"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Quote, Star } from "lucide-react";
import { testimonials } from "@/lib/data/site";
import { loc } from "@/lib/i18n-content";
import { cn } from "@/lib/utils";

export function TestimonialCarousel({ locale }: { locale: string }) {
  const [i, setI] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => setI((v) => (v + 1) % testimonials.length), 6500);
    return () => clearInterval(id);
  }, [paused]);

  const item = testimonials[i];

  return (
    <div
      className="relative mx-auto max-w-3xl"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <Quote className="mx-auto h-9 w-9 text-terracotta-400" />
      <div className="relative mt-6 min-h-[16rem] sm:min-h-[13rem]">
        <AnimatePresence mode="wait">
          <motion.blockquote
            key={i}
            initial={{ opacity: 0, y: 18, filter: "blur(8px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            exit={{ opacity: 0, y: -18, filter: "blur(8px)" }}
            transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
            className="text-center"
          >
            <p className="font-display text-lg leading-relaxed text-ink sm:text-xl">
              “{loc(item.quote, locale)}”
            </p>
            <footer className="mt-6 text-sm">
              {item.rating ? (
                <div className="flex justify-center gap-0.5" aria-label={`${item.rating} / 5`}>
                  {Array.from({ length: 5 }).map((_, s) => (
                    <Star key={s} className={cn("h-4 w-4", s < item.rating! ? "fill-terracotta-500 text-terracotta-500" : "text-sand-300")} />
                  ))}
                </div>
              ) : null}
              <span className="mt-3 block font-semibold text-terracotta-700">{item.name}</span>
              {item.source ? (
                <span className="block text-ink-soft/70">via {item.source}</span>
              ) : item.place ? (
                <span className="block text-ink-soft/70">{item.place}</span>
              ) : null}
            </footer>
          </motion.blockquote>
        </AnimatePresence>
      </div>
      <div className="mt-7 flex justify-center gap-2">
        {testimonials.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setI(idx)}
            aria-label={`Testimonial ${idx + 1}`}
            className={cn(
              "h-1.5 rounded-full transition-all duration-300",
              idx === i ? "w-7 bg-terracotta-500" : "w-1.5 bg-sand-300 hover:bg-sand-400",
            )}
          />
        ))}
      </div>
    </div>
  );
}
