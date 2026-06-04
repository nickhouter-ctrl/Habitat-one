"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "motion/react";

/**
 * Floating right-edge chapter indicator.
 *
 * Every `<section data-chapter="...">` on the page becomes a dot. The dot
 * for the section currently filling the viewport is expanded and labelled.
 * Hidden on touch/narrow screens — this is a desktop luxury cue, not a nav.
 */
export function ChapterIndicator() {
  const [enabled, setEnabled] = useState(false);
  const [chapters, setChapters] = useState<{ id: string; label: string }[]>([]);
  const [active, setActive] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window === "undefined") return;
    const m = window.matchMedia("(min-width: 1280px) and (hover: hover)");
    if (!m.matches) return;
    const raf = requestAnimationFrame(() => setEnabled(true));
    return () => cancelAnimationFrame(raf);
  }, []);

  // Re-collect the chapters on every route change. This indicator lives in the
  // root layout and is NOT remounted between pages, so without re-running on
  // `pathname` the observer would keep watching the previous page's (now
  // detached) sections — the marker would freeze on one spot after navigating.
  useEffect(() => {
    if (!enabled) return;

    let observer: IntersectionObserver | null = null;
    let raf2 = 0;

    // Wait two frames so the freshly navigated-to page has committed its DOM
    // before we query for [data-chapter] sections.
    const raf1 = requestAnimationFrame(() => {
      raf2 = requestAnimationFrame(() => {
        const els = Array.from(
          document.querySelectorAll<HTMLElement>("[data-chapter]"),
        );
        // Index-based id so duplicate data-chapter labels never collide as keys.
        const list = els.map((el, i) => {
          const id = `ch-${i}`;
          el.dataset.chapterId = id;
          return { id, label: el.dataset.chapter ?? "", el };
        });
        setChapters(list.map((c) => ({ id: c.id, label: c.label })));
        setActive(list[0]?.id ?? null);
        if (list.length === 0) return;

        // Single threshold + asymmetric rootMargin = cheap and accurate enough.
        // Fires once per section transition rather than on every ratio change,
        // keeping the main thread free during scroll.
        observer = new IntersectionObserver(
          (entries) => {
            const visible = entries.find((e) => e.isIntersecting);
            if (visible) {
              setActive((visible.target as HTMLElement).dataset.chapterId ?? null);
            }
          },
          { threshold: 0, rootMargin: "-40% 0px -45% 0px" },
        );
        list.forEach(({ el }) => observer!.observe(el));
      });
    });

    return () => {
      cancelAnimationFrame(raf1);
      cancelAnimationFrame(raf2);
      observer?.disconnect();
    };
  }, [enabled, pathname]);

  if (!enabled || chapters.length === 0) return null;

  return (
    <nav
      aria-label="Section navigation"
      className="pointer-events-none fixed right-6 top-1/2 z-[55] hidden -translate-y-1/2 xl:flex"
    >
      <ul className="flex flex-col items-end gap-5">
        {chapters.map((c) => {
          const isActive = c.id === active;
          return (
            <li key={c.id} className="flex items-center gap-3">
              <AnimatePresence>
                {isActive && (
                  <motion.span
                    initial={{ opacity: 0, x: 8 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 8 }}
                    transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                    className="text-[0.62rem] font-medium uppercase tracking-[0.32em] text-ink-soft"
                  >
                    {c.label}
                  </motion.span>
                )}
              </AnimatePresence>
              <motion.span
                animate={{
                  width: isActive ? 28 : 12,
                  backgroundColor: isActive ? "var(--color-ink)" : "transparent",
                }}
                transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                className="block h-px border-b border-ink/40"
              />
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
