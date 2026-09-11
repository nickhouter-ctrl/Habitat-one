"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Autoplay background video that only downloads once it nears the viewport.
 * Until then the poster image is shown and nothing heavy is fetched — which
 * keeps the initial mobile payload small on long pages with several clips.
 * Behaviour once in view is identical to a normal muted/looping autoplay video.
 */
export function LazyVideo({
  src,
  poster,
  className,
  rootMargin = "400px",
}: {
  src: string;
  poster?: string;
  className?: string;
  rootMargin?: string;
}) {
  const ref = useRef<HTMLVideoElement>(null);
  const [near, setNear] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)");
    let visible = false;
    const sync = () => {
      if (visible && !reduce.matches && !document.hidden) {
        setNear(true);
        el.play().catch(() => {});
      } else el.pause();
    };
    const io = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      sync();
    });
    const preload = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !reduce.matches) setNear(true);
    }, { rootMargin });
    preload.observe(el);
    reduce.addEventListener("change", sync);
    document.addEventListener("visibilitychange", sync);
    io.observe(el);
    return () => { io.disconnect(); preload.disconnect(); reduce.removeEventListener("change", sync); document.removeEventListener("visibilitychange", sync); };
  }, [rootMargin]);

  // Once the source is attached, kick off the load so autoplay starts.
  useEffect(() => {
    if (near && ref.current) {
      ref.current.load();
      const bounds = ref.current.getBoundingClientRect();
      if (bounds.bottom > 0 && bounds.top < window.innerHeight && !document.hidden && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        ref.current.play().catch(() => {});
      }
    }
  }, [near]);

  return (
    <video
      ref={ref}
      className={className}
      poster={poster}
      muted
      loop
      playsInline
      preload="none"
    >
      {near && <source src={src} type="video/mp4" />}
    </video>
  );
}
