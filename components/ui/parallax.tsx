"use client";

import { useRef, type ReactNode } from "react";
import { motion, useScroll, useTransform, useSpring } from "motion/react";
import { cn } from "@/lib/utils";

/** Translates children vertically as the element scrolls through the viewport.
 *  `speed` > 0 moves slower than scroll (recedes), < 0 moves faster (approaches). */
export function Parallax({
  children,
  className,
  speed = 0.18,
  scale = false,
}: {
  children: ReactNode;
  className?: string;
  speed?: number;
  scale?: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const range = 220 * speed;
  const y = useSpring(useTransform(scrollYProgress, [0, 1], [range, -range]), {
    stiffness: 120,
    damping: 30,
    restDelta: 0.01,
  });
  const s = useTransform(scrollYProgress, [0, 0.5, 1], scale ? [1.12, 1, 1.12] : [1, 1, 1]);

  return (
    <div ref={ref} className={cn("relative", className)}>
      <motion.div style={{ y, scale: s }} className="h-full w-full will-change-transform">
        {children}
      </motion.div>
    </div>
  );
}
