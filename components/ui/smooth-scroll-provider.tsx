"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import Lenis from "lenis";

/**
 * Wraps the app with a buttery smooth-scroll engine.
 * - Honours prefers-reduced-motion (no smoothing if the visitor asked for it).
 * - Resets scroll to top on every route change — otherwise Lenis holds the
 *   previous page's scroll position and new pages open mid-page.
 */
export function SmoothScrollProvider({ children }: { children: React.ReactNode }) {
  const lenisRef = useRef<Lenis | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window === "undefined") return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (reduce.matches) return;
    // Skip Lenis on touch / coarse pointer devices — native momentum scroll
    // is much faster there, and Lenis can fight iOS Safari's compositor.
    const coarse = window.matchMedia("(pointer: coarse)");
    if (coarse.matches) return;

    const lenis = new Lenis({
      // Soft wind-down — the page glides like a roll of paper.
      duration: 1.45,
      easing: (t) => (t < 1 ? 1 - Math.pow(1 - t, 4) : 1),
      smoothWheel: true,
      gestureOrientation: "vertical",
      wheelMultiplier: 0.85,
      touchMultiplier: 1.2,
      lerp: 0.085,
      syncTouch: false,
    });
    lenisRef.current = lenis;

    let raf = 0;
    function loop(time: number) {
      lenis.raf(time);
      raf = requestAnimationFrame(loop);
    }
    raf = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(raf);
      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);

  // Reset scroll position on route changes. Lenis caches the offset, so the
  // browser's native scroll restore alone is not enough — call into Lenis.
  useEffect(() => {
    if (typeof window === "undefined") return;
    // Skip the hash-anchor case: if the URL has a hash, let the browser handle it.
    if (window.location.hash) return;
    const lenis = lenisRef.current;
    if (lenis) {
      lenis.scrollTo(0, { immediate: true });
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname]);

  return <>{children}</>;
}
