"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { Link } from "@/i18n/navigation";

export type FurnitureSlide = { image: string; title: string; ctaLabel: string; ctaHref: string };

/** Full-bleed auto-rotating hero slideshow voor de meubelpagina. */
export function FurnitureHero({ slides }: { slides: FurnitureSlide[] }) {
  const [i, setI] = useState(0);
  useEffect(() => {
    if (slides.length < 2) return;
    const id = setInterval(() => setI((v) => (v + 1) % slides.length), 6000);
    return () => clearInterval(id);
  }, [slides.length]);

  return (
    <section className="relative h-[clamp(460px,82svh,860px)] w-full overflow-hidden bg-ink">
      {slides.map((s, idx) => (
        <div
          key={s.image}
          className={`absolute inset-0 transition-opacity duration-1000 ${idx === i ? "opacity-100" : "opacity-0"}`}
          aria-hidden={idx !== i}
        >
          <Image
            src={s.image}
            alt={s.title}
            fill
            priority={idx === 0}
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-ink/25 via-ink/5 to-ink/45" />
        </div>
      ))}

      <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
        <h1 className="font-display text-[clamp(2rem,5vw,3.6rem)] font-medium tracking-[-0.01em] text-paper [text-shadow:0_2px_24px_rgba(0,0,0,0.4)]">
          {slides[i].title}
        </h1>
        <Link
          href={slides[i].ctaHref}
          className="mt-7 inline-flex items-center gap-2 rounded-full bg-paper px-6 py-3 text-[0.78rem] font-medium uppercase tracking-[0.16em] text-ink transition-colors hover:bg-cream"
        >
          {slides[i].ctaLabel}
          <ArrowUpRight className="h-4 w-4" />
        </Link>
      </div>

      {slides.length > 1 && (
        <div className="absolute inset-x-0 bottom-6 z-10 flex justify-center gap-2.5">
          {slides.map((_, idx) => (
            <button
              key={idx}
              type="button"
              aria-label={`Slide ${idx + 1}`}
              onClick={() => setI(idx)}
              className={`h-1.5 rounded-full transition-all ${idx === i ? "w-7 bg-paper" : "w-1.5 bg-paper/50 hover:bg-paper/80"}`}
            />
          ))}
        </div>
      )}
    </section>
  );
}
