"use client";

import { useRef, type ReactNode } from "react";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
  useTransform,
} from "motion/react";
import { cn } from "@/lib/utils";

export function TiltCard({
  children,
  className,
  intensity = 9,
  glare = true,
  lift = 8,
  radius = "rounded-3xl",
}: {
  children: ReactNode;
  className?: string;
  intensity?: number;
  glare?: boolean;
  lift?: number;
  radius?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const mx = useMotionValue(0.5);
  const my = useMotionValue(0.5);

  const rx = useSpring(useTransform(my, [0, 1], [intensity, -intensity]), {
    stiffness: 250,
    damping: 20,
  });
  const ry = useSpring(useTransform(mx, [0, 1], [-intensity, intensity]), {
    stiffness: 250,
    damping: 20,
  });
  const translateY = useSpring(0, { stiffness: 250, damping: 22 });
  const glareX = useTransform(mx, [0, 1], ["0%", "100%"]);
  const glareY = useTransform(my, [0, 1], ["0%", "100%"]);
  const glareOpacity = useSpring(0, { stiffness: 200, damping: 25 });
  const glareBg = useMotionTemplate`radial-gradient(420px circle at ${glareX} ${glareY}, rgba(255,255,255,0.9), transparent 60%)`;

  // Only react to a real mouse — touch/pen pointers would leave the card stuck mid-tilt on mobile.
  function onMove(e: React.PointerEvent<HTMLDivElement>) {
    if (e.pointerType !== "mouse") return;
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    mx.set((e.clientX - rect.left) / rect.width);
    my.set((e.clientY - rect.top) / rect.height);
  }
  function onEnter(e: React.PointerEvent<HTMLDivElement>) {
    if (e.pointerType !== "mouse") return;
    translateY.set(-lift);
    glareOpacity.set(0.22);
  }
  function onLeave() {
    mx.set(0.5);
    my.set(0.5);
    translateY.set(0);
    glareOpacity.set(0);
  }

  return (
    <div className="perspective [transform-style:preserve-3d]">
      <motion.div
        ref={ref}
        onPointerMove={onMove}
        onPointerEnter={onEnter}
        onPointerLeave={onLeave}
        style={{ rotateX: rx, rotateY: ry, y: translateY, transformPerspective: 1100 }}
        className={cn(
          "relative [transform-style:preserve-3d] will-change-transform",
          radius,
          className,
        )}
      >
        {children}
        {glare && (
          <motion.div
            aria-hidden
            className={cn("pointer-events-none absolute inset-0 z-20", radius)}
            style={{ opacity: glareOpacity, background: glareBg, mixBlendMode: "soft-light" }}
          />
        )}
      </motion.div>
    </div>
  );
}
