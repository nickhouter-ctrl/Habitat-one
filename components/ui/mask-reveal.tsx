"use client";

import { motion, type Variants } from "motion/react";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

const lineVariants: Variants = {
  hidden: { y: "110%" },
  show: (i: number) => ({
    y: "0%",
    transition: {
      duration: 0.95,
      delay: 0.08 + i * 0.07,
      ease: [0.16, 1, 0.3, 1],
    },
  }),
};

/**
 * Mask reveal — lines (or words) slide up from behind a clip on first paint
 * or when scrolled into view. Defaults to in-view trigger.
 */
export function MaskReveal({
  children,
  className,
  as: Comp = "div",
  inView = true,
  splitBy = "line",
}: {
  children: ReactNode;
  className?: string;
  as?: "div" | "h1" | "h2" | "h3" | "h4" | "p";
  inView?: boolean;
  splitBy?: "line" | "word";
}) {
  // If `children` is a string, split it; otherwise wrap as a single line.
  const parts: string[] =
    typeof children === "string"
      ? splitBy === "word"
        ? children.split(/\s+/)
        : children.split(/\n+/)
      : [];

  const animationProps = inView
    ? ({ initial: "hidden", whileInView: "show", viewport: { once: true, margin: "-15% 0px" } } as const)
    : ({ initial: "hidden", animate: "show" } as const);

  if (typeof children !== "string") {
    return (
      <Comp className={cn(className)}>
        <span className="block overflow-hidden">
          <motion.span
            className="block"
            variants={lineVariants}
            custom={0}
            {...animationProps}
          >
            {children}
          </motion.span>
        </span>
      </Comp>
    );
  }

  return (
    <Comp className={cn(className)}>
      {parts.map((part, i) => (
        <span key={i} className={cn("overflow-hidden", splitBy === "word" ? "inline-flex" : "block")}>
          <motion.span
            className={cn(splitBy === "word" ? "inline-block" : "block")}
            variants={lineVariants}
            custom={i}
            {...animationProps}
          >
            {part}
            {splitBy === "word" && i < parts.length - 1 ? " " : null}
          </motion.span>
        </span>
      ))}
    </Comp>
  );
}
