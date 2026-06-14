"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";

/**
 * First-paint reveal: a paper-cream veil covers the page on load and lifts
 * away once the route is mounted. Only shows once per browser session.
 */
export function PageVeil() {
  const [open, setOpen] = useState(true);
  const [skip, setSkip] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    // Skip if we've already played the veil this session OR if the visitor
    // prefers reduced motion — both checked next-frame to avoid hydration
    // mismatch and the synchronous-setState-in-effect lint rule.
    const seen = window.sessionStorage.getItem("h1.veil") === "1";
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (seen || reduce) {
      const raf = requestAnimationFrame(() => {
        setSkip(true);
        setOpen(false);
      });
      return () => cancelAnimationFrame(raf);
    }
    const t = window.setTimeout(() => {
      setOpen(false);
      window.sessionStorage.setItem("h1.veil", "1");
    }, 1500);
    return () => window.clearTimeout(t);
  }, []);

  if (skip) return null;

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          key="veil"
          initial={{ y: 0 }}
          exit={{ y: "-101%" }}
          transition={{ duration: 1.1, ease: [0.76, 0, 0.24, 1] }}
          className="pointer-events-none fixed inset-0 z-[80] grid place-items-center bg-cream"
          aria-hidden
        >
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col items-center gap-3 text-ink"
          >
            <span className="text-[0.62rem] font-medium uppercase tracking-[0.42em] text-ink-soft">
              Welcome to
            </span>
            <span className="font-sans text-3xl font-medium leading-none tracking-[-0.02em] sm:text-4xl">
              Habitat One
            </span>
            <span className="text-[0.62rem] uppercase tracking-[0.32em] text-ink-soft/70">
              Jávea/Xàbia · Costa Blanca
            </span>
          </motion.div>
          {/* Hairline that draws across as the veil sits */}
          <motion.span
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            exit={{ scaleX: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            style={{ transformOrigin: "left center" }}
            className="absolute inset-x-0 bottom-8 mx-auto h-px w-[60vw] max-w-md bg-ink/35"
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
