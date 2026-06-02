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
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setNear(true);
          io.disconnect();
        }
      },
      { rootMargin },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [rootMargin]);

  // Once the source is attached, kick off the load so autoplay starts.
  useEffect(() => {
    if (near && ref.current) {
      ref.current.load();
      ref.current.play?.().catch(() => {
        /* autoplay can be blocked — poster stays, no crash */
      });
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
      autoPlay={near}
      preload="none"
    >
      {near && <source src={src} type="video/mp4" />}
    </video>
  );
}
