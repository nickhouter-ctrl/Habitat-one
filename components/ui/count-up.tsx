"use client";

import { useEffect, useRef } from "react";
import { animate, useInView } from "motion/react";

/** Animates an integer count-up when scrolled into view. Keeps any non-digit
 *  prefix/suffix from the original string (e.g. "12+", "300+"). */
export function CountUp({ value, className }: { value: string; className?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const match = value.match(/^(\d[\d.,]*)(.*)$/);
  const target = match ? parseInt(match[1].replace(/[.,]/g, ""), 10) : 0;
  const suffix = match ? match[2] : value;

  useEffect(() => {
    if (!inView || !ref.current || !match) return;
    const node = ref.current;
    const controls = animate(0, target, {
      duration: 1.4,
      ease: [0.16, 1, 0.3, 1],
      onUpdate(v) {
        node.firstChild!.textContent = Math.round(v).toLocaleString();
      },
    });
    return () => controls.stop();
  }, [inView, target, match]);

  if (!match) return <span className={className}>{value}</span>;

  return (
    <span ref={ref} className={className}>
      <span>0</span>
      {suffix}
    </span>
  );
}
