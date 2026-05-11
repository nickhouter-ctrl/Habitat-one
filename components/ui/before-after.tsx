"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion } from "motion/react";
import { MoveHorizontal } from "lucide-react";
import { cn } from "@/lib/utils";

export function BeforeAfter({
  beforeSrc,
  afterSrc,
  beforeLabel,
  afterLabel,
  hint,
  className,
  rounded = "rounded-3xl",
  priority = false,
}: {
  beforeSrc: string;
  afterSrc: string;
  beforeLabel: string;
  afterLabel: string;
  hint?: string;
  className?: string;
  rounded?: string;
  priority?: boolean;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState(50);
  const dragging = useRef(false);

  const setFromClientX = useCallback((clientX: number) => {
    const el = containerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const pct = ((clientX - rect.left) / rect.width) * 100;
    setPos(Math.min(98, Math.max(2, pct)));
  }, []);

  useEffect(() => {
    function move(e: PointerEvent) {
      if (!dragging.current) return;
      setFromClientX(e.clientX);
    }
    function up() {
      dragging.current = false;
    }
    window.addEventListener("pointermove", move);
    window.addEventListener("pointerup", up);
    return () => {
      window.removeEventListener("pointermove", move);
      window.removeEventListener("pointerup", up);
    };
  }, [setFromClientX]);

  function onKey(e: React.KeyboardEvent) {
    if (e.key === "ArrowLeft") setPos((p) => Math.max(2, p - 4));
    if (e.key === "ArrowRight") setPos((p) => Math.min(98, p + 4));
  }

  return (
    <div
      ref={containerRef}
      className={cn(
        "group relative aspect-[16/10] w-full select-none overflow-hidden bg-sand-200",
        rounded,
        className,
      )}
      onPointerDown={(e) => {
        // on touch, only the grip starts a drag — leaves vertical page-scroll intact elsewhere
        if (e.pointerType === "mouse") {
          dragging.current = true;
          setFromClientX(e.clientX);
        }
      }}
      onClick={(e) => setFromClientX(e.clientX)}
    >
      {/* After (full) */}
      <Image
        src={afterSrc}
        alt={afterLabel}
        fill
        sizes="(max-width: 768px) 100vw, 50vw"
        className="object-cover"
        priority={priority}
        draggable={false}
      />
      {/* Before (clipped) */}
      <div
        className="absolute inset-0 overflow-hidden"
        style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}
      >
        <Image
          src={beforeSrc}
          alt={beforeLabel}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover grayscale-[0.18] contrast-[1.05] brightness-[0.92] saturate-[0.85]"
          priority={priority}
          draggable={false}
        />
        <div className="pointer-events-none absolute inset-0 bg-clay-800/10" />
      </div>

      {/* Labels */}
      <span className="pointer-events-none absolute left-4 top-4 rounded-full bg-clay-800/70 px-3 py-1 text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-cream backdrop-blur-sm">
        {beforeLabel}
      </span>
      <span className="pointer-events-none absolute right-4 top-4 rounded-full bg-whitewash/80 px-3 py-1 text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-clay-800 backdrop-blur-sm">
        {afterLabel}
      </span>

      {/* Handle */}
      <div
        className="absolute inset-y-0 z-10 flex items-center"
        style={{ left: `calc(${pos}% - 1px)` }}
      >
        <div className="h-full w-[2px] bg-whitewash shadow-[0_0_14px_rgba(0,0,0,0.35)]" />
        <button
          type="button"
          aria-label="Drag to compare"
          onKeyDown={onKey}
          onPointerDown={(e) => {
            e.stopPropagation();
            dragging.current = true;
          }}
          style={{ touchAction: "none" }}
          className="absolute left-1/2 top-1/2 grid grid-cols-1 h-12 w-12 -translate-x-1/2 -translate-y-1/2 cursor-ew-resize place-items-center rounded-full border border-whitewash/80 bg-whitewash/95 text-clay-800 shadow-lg backdrop-blur transition-transform duration-300 hover:scale-110 active:scale-95"
        >
          <MoveHorizontal className="h-5 w-5" />
        </button>
      </div>

      {hint && (
        <motion.span
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="pointer-events-none absolute bottom-4 left-1/2 -translate-x-1/2 rounded-full bg-clay-800/55 px-3 py-1 text-[0.7rem] font-medium tracking-wide text-cream backdrop-blur-sm transition-opacity duration-500 group-hover:opacity-0"
        >
          {hint}
        </motion.span>
      )}
    </div>
  );
}
