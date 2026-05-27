"use client";

import { useEffect, useState } from "react";
import {
  motion,
  AnimatePresence,
  useMotionValue,
  useSpring,
} from "motion/react";

/**
 * Subtle hover-label that follows the cursor only when over elements opted in
 * with `data-hover-label="View"`. The OS cursor stays visible — this is a
 * decorative addition, not a replacement.
 */
export function HoverLabel() {
  const [enabled, setEnabled] = useState(false);
  const [label, setLabel] = useState<string | null>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 320, damping: 28, mass: 0.35 });
  const sy = useSpring(y, { stiffness: 320, damping: 28, mass: 0.35 });

  useEffect(() => {
    if (typeof window === "undefined") return;
    const hasHover = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!hasHover || reduce) return;
    const raf = requestAnimationFrame(() => setEnabled(true));

    function onMove(e: PointerEvent) {
      x.set(e.clientX);
      y.set(e.clientY);
      const t = e.target as HTMLElement | null;
      const hit = t?.closest<HTMLElement>("[data-hover-label]");
      if (hit) {
        setLabel(hit.dataset.hoverLabel ?? "View");
      } else {
        setLabel(null);
      }
    }
    function onLeave() {
      setLabel(null);
    }

    window.addEventListener("pointermove", onMove);
    window.addEventListener("pointerleave", onLeave);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerleave", onLeave);
    };
  }, [x, y]);

  if (!enabled) return null;

  return (
    <motion.div
      aria-hidden
      style={{ translateX: sx, translateY: sy }}
      className="pointer-events-none fixed left-0 top-0 z-[90] -translate-x-1/2 -translate-y-[140%]"
    >
      <AnimatePresence>
        {label && (
          <motion.span
            initial={{ opacity: 0, y: 8, scale: 0.85 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 6, scale: 0.9 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="grid place-items-center rounded-full bg-ink px-4 py-2 text-[0.62rem] font-medium uppercase tracking-[0.22em] text-paper shadow-[0_12px_28px_-12px_rgba(0,0,0,0.4)]"
          >
            {label}
          </motion.span>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
