"use client";

import { useEffect, useRef } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

/**
 * Wrap any interactive element to give it a magnetic effect — when the
 * pointer gets within `radius` px the element drifts slightly toward the
 * cursor. Disabled on touch devices and when prefers-reduced-motion is set.
 */
export function Magnetic({
  children,
  className,
  radius = 110,
  strength = 0.32,
}: {
  children: ReactNode;
  className?: string;
  radius?: number;
  strength?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 250, damping: 22, mass: 0.3 });
  const sy = useSpring(y, { stiffness: 250, damping: 22, mass: 0.3 });

  useEffect(() => {
    if (typeof window === "undefined") return;
    const hasHover = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!hasHover || reduce) return;
    const el = ref.current;
    if (!el) return;

    function onMove(e: PointerEvent) {
      const r = el!.getBoundingClientRect();
      const cx = r.left + r.width / 2;
      const cy = r.top + r.height / 2;
      const dx = e.clientX - cx;
      const dy = e.clientY - cy;
      const dist = Math.hypot(dx, dy);
      if (dist > radius) {
        x.set(0);
        y.set(0);
        return;
      }
      x.set(dx * strength);
      y.set(dy * strength);
    }
    function onLeave() {
      x.set(0);
      y.set(0);
    }

    window.addEventListener("pointermove", onMove);
    el.addEventListener("pointerleave", onLeave);
    return () => {
      window.removeEventListener("pointermove", onMove);
      el.removeEventListener("pointerleave", onLeave);
    };
  }, [radius, strength, x, y]);

  return (
    <motion.div ref={ref} style={{ x: sx, y: sy }} className={cn("inline-block", className)}>
      {children}
    </motion.div>
  );
}
