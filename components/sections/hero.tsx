"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { motion, AnimatePresence, useScroll, useTransform } from "motion/react";
import { ArrowRight } from "lucide-react";
import { Link } from "@/i18n/navigation";
import { heroStats } from "@/lib/data/site";
import { CountUp } from "@/components/ui/count-up";
import { MaskReveal } from "@/components/ui/mask-reveal";
import { Magnetic } from "@/components/ui/magnetic";

// The Habitat One range — calm Mediterranean settings that auto-crossfade.
// Signature Flexibel Stone first (so the headline lands), then a sweep across
// the catalogue: bathroom, acrylic panels, lighting and planters.
const HERO_IMAGES = [
  "/scenery/home-hero-villa.jpg",
  "/products/h/KKR-B051-A-life.jpg",
  "/products/h/acryl/KKR-A027-eetkamer.jpg",
  "/products/magic/ms-travertino-light-grey-interior.jpg",
  "/products/h/GL-001-life.jpg",
  "/products/magic/bloempotten-lifestyle-boge.jpg",
];
const SLIDE_MS = 6000;

export function Hero() {
  const t = useTranslations("hero");
  const tStats = useTranslations("stats");
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  // Keep this hero cheap — only two motion values driving CSS transforms.
  // Ken Burns already provides the bg scale movement.
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "-18%"]);
  const fade = useTransform(scrollYProgress, [0, 0.85], [1, 0]);

  // Auto-advancing slideshow (paused for reduced-motion visitors).
  const [slide, setSlide] = useState(0);
  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = window.setInterval(
      () => setSlide((s) => (s + 1) % HERO_IMAGES.length),
      SLIDE_MS,
    );
    return () => window.clearInterval(id);
  }, []);

  return (
    <section
      ref={ref}
      data-chapter="Intro"
      className="relative isolate overflow-hidden bg-paper"
    >
      {/* Full-bleed crossfading slideshow — each slide gets a slow Ken Burns */}
      <div className="relative h-[88svh] min-h-[620px] w-full overflow-hidden">
        <AnimatePresence>
          <motion.div
            key={slide}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
            className="absolute inset-0"
          >
            <div className="absolute inset-0 animate-ken-burns is-visible">
              <Image
                src={HERO_IMAGES[slide]}
                alt="Habitat One — interieur"
                fill
                priority={slide === 0}
                sizes="100vw"
                className="object-cover"
              />
            </div>
          </motion.div>
        </AnimatePresence>
        {/* Quiet darkening so the headline reads on most photos — a touch
            stronger at the foot where the text sits, incl. bright slides. */}
        <div className="absolute inset-0 bg-gradient-to-b from-ink/20 via-ink/5 to-ink/75" />

        <motion.div
          style={{ y: textY, opacity: fade }}
          className="container-x relative z-10 flex h-full flex-col justify-end pb-14 md:pb-20"
        >
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-[0.7rem] font-medium uppercase tracking-[0.32em] text-paper/85"
          >
            {t("eyebrow")}
          </motion.span>

          <MaskReveal
            as="h1"
            inView={false}
            splitBy="word"
            className="mt-5 max-w-4xl text-[2.4rem] font-medium leading-[1.04] tracking-[-0.02em] text-paper sm:text-5xl md:text-[4rem] lg:text-[4.6rem]"
          >
            {`${t("titleA")} ${t("titleB")} ${t("titleC")}`}
          </MaskReveal>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="mt-6 max-w-xl text-base leading-relaxed text-paper/90 md:text-lg"
          >
            {t("subtitle")}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.55 }}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <Magnetic>
              <Link href="/products?collection=wall-panels" className="btn btn-outline-light">
                {t("ctaPrimary")}
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Magnetic>
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 text-[0.78rem] font-medium uppercase tracking-[0.18em] text-paper/85 underline underline-offset-[6px] decoration-paper/40 hover:decoration-paper"
            >
              {t("ctaSecondary")}
            </Link>
          </motion.div>
        </motion.div>

        {/* Slide indicators — bottom right, clickable */}
        <div className="absolute bottom-6 right-6 z-10 flex items-center gap-2.5">
          {HERO_IMAGES.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setSlide(i)}
              aria-label={`Slide ${i + 1}`}
              aria-current={i === slide}
              className="group flex items-center px-1.5 py-3"
            >
              <span
                className={
                  i === slide
                    ? "block h-[2px] w-8 bg-paper transition-all"
                    : "block h-[2px] w-4 bg-paper/45 transition-all group-hover:bg-paper/80"
                }
              />
            </button>
          ))}
        </div>
      </div>

      {/* Stats strip — quiet bar under the image */}
      <div className="border-b border-ink/10 bg-paper">
        <div className="container-x grid grid-cols-2 gap-x-6 gap-y-6 py-8 sm:grid-cols-4 md:py-10">
          {heroStats.map((s) => (
            <div key={s.key}>
              <dt className="text-3xl font-medium text-ink md:text-4xl">
                <CountUp value={s.value} />
              </dt>
              <dd className="mt-1 text-[0.7rem] uppercase leading-tight tracking-[0.22em] text-ink-soft">
                {tStats(s.key)}
              </dd>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
