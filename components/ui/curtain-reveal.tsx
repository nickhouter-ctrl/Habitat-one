"use client";

import { motion } from "motion/react";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

/**
 * Image curtain reveal — a thin overlay slides off and the underlying image
 * un-mutes from a subtle zoom + brightness as the block enters the viewport.
 * Pure CSS once triggered (no per-frame work).
 */
export function CurtainReveal({
  children,
  className,
  direction = "down",
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  direction?: "down" | "up" | "left" | "right";
  delay?: number;
}) {
  const off =
    direction === "down"
      ? { y: "101%" }
      : direction === "up"
      ? { y: "-101%" }
      : direction === "left"
      ? { x: "-101%" }
      : { x: "101%" };

  return (
    <div className={cn("relative overflow-hidden", className)}>
      <motion.div
        initial={{ scale: 1.08, filter: "brightness(0.85)" }}
        whileInView={{ scale: 1, filter: "brightness(1)" }}
        viewport={{ once: true, margin: "-12% 0px" }}
        transition={{ duration: 1.25, delay, ease: [0.16, 1, 0.3, 1] }}
        className="h-full w-full"
      >
        {children}
      </motion.div>
      <motion.div
        aria-hidden
        initial={{ x: 0, y: 0 }}
        whileInView={off}
        viewport={{ once: true, margin: "-12% 0px" }}
        transition={{ duration: 1.1, delay: delay + 0.05, ease: [0.76, 0, 0.24, 1] }}
        className="pointer-events-none absolute inset-0 bg-paper"
      />
    </div>
  );
}
