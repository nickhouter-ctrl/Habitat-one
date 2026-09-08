"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { motion, AnimatePresence, useScroll, useTransform } from "motion/react";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "@/i18n/navigation";
import { heroStats } from "@/lib/data/site";
import { CountUp } from "@/components/ui/count-up";
import { MaskReveal } from "@/components/ui/mask-reveal";
import { Magnetic } from "@/components/ui/magnetic";

/**
 * De homepage-slider: de Habitat One-range — villa, badkamer, acrylpanelen,
 * Flexible Stone, verlichting, sfeerhaard, bloempotten — achter een vaste
 * merkkop.
 *
 * - langzamer overvloeien (2,2 s) en een nauwelijks voelbare Ken Burns;
 * - "02 / 07" plus de naam van wat je ziet, met één voortgangslijn die met het
 *   interval meeloopt — je weet waar je bent én wat je ziet;
 * - pijlen (desktop, bij hover) en vegen (mobiel); automatisch doorgaan
 *   pauzeert zolang je erop staat of het aanraakt;
 * - alleen onderin een donkere tint, bovenin blijft de foto vrij.
 */
const SLIDES: Array<{ src: string; label: (t: (k: string) => string, p: (k: string) => string) => string }> = [
  { src: "/scenery/home-hero-villa.jpg", label: (t) => t("common.place") },
  { src: "/products/h/KKR-B051-A-life.jpg", label: (_, p) => p("collectionBathroom") },
  { src: "/products/h/acryl/KKR-A027-eetkamer.jpg", label: (_, p) => p("collectionAcrylicPanels") },
  { src: "/products/magic/ms-travertino-light-grey-interior.jpg", label: (t) => t("home.magicTitle") },
  { src: "/products/h/GL-001-life.jpg", label: (_, p) => p("collectionLighting") },
  { src: "/products/sfeerhaarden/hero.jpg", label: (_, p) => p("collectionFireplaces") },
  { src: "/products/magic/bloempotten-lifestyle-boge.jpg", label: (_, p) => p("collectionFlowerPots") },
];
const SLIDE_MS = 7000;
const FADE_S = 2.2;

export function Hero() {
  const t = useTranslations("hero");
  const tAll = useTranslations();
  const tProducts = useTranslations("products");
  const tStats = useTranslations("stats");
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "-18%"]);
  const fade = useTransform(scrollYProgress, [0, 0.85], [1, 0]);

  const [slide, setSlide] = useState(0);
  const [stil, setStil] = useState(false);
  const [beweegt, setBeweegt] = useState(true);
  // `tik` herstart de voortgangslijn ook bij handmatig bladeren.
  const [tik, setTik] = useState(0);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) setBeweegt(false);
  }, []);

  const ga = useCallback((naar: number) => {
    setSlide(((naar % SLIDES.length) + SLIDES.length) % SLIDES.length);
    setTik((x) => x + 1);
  }, []);

  useEffect(() => {
    if (!beweegt || stil) return;
    const id = window.setTimeout(() => ga(slide + 1), SLIDE_MS);
    return () => window.clearTimeout(id);
  }, [slide, tik, stil, beweegt, ga]);

  // Vegen op aanraakschermen.
  const startX = useRef<number | null>(null);
  const onTouchStart = (e: React.TouchEvent) => {
    startX.current = e.touches[0].clientX;
    setStil(true);
  };
  const onTouchEnd = (e: React.TouchEvent) => {
    const x0 = startX.current;
    startX.current = null;
    setStil(false);
    if (x0 === null) return;
    const dx = e.changedTouches[0].clientX - x0;
    if (Math.abs(dx) > 40) ga(slide + (dx < 0 ? 1 : -1));
  };

  const nummer = (n: number) => String(n + 1).padStart(2, "0");

  return (
    <section ref={ref} data-chapter="Intro" className="relative isolate overflow-hidden bg-paper">
      <div
        className="group/hero relative h-[88svh] min-h-[620px] w-full overflow-hidden"
        onMouseEnter={() => setStil(true)}
        onMouseLeave={() => setStil(false)}
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        <AnimatePresence initial={false}>
          <motion.div
            key={slide}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: FADE_S, ease: [0.16, 1, 0.3, 1] }}
            className="absolute inset-0"
          >
            <div
              className="absolute inset-0"
              style={
                beweegt
                  ? { animation: "kenBurnsZacht 28s ease-in-out infinite alternate" }
                  : undefined
              }
            >
              <Image
                src={SLIDES[slide].src}
                alt="Habitat One — interieur"
                fill
                priority={slide === 0}
                sizes="100vw"
                className="object-cover"
              />
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Alleen onderin donker, waar de tekst staat; erboven blijft de foto vrij.
            Plus een nauwelijks zichtbare vignette aan de randen. */}
        <div className="absolute inset-0 bg-gradient-to-t from-sea-900/70 via-sea-900/15 to-transparent" />
        <div className="absolute inset-0 [box-shadow:inset_0_0_140px_rgba(0,0,0,0.22)]" />

        <motion.div
          style={{ y: textY, opacity: fade }}
          className="container-x relative z-10 flex h-full flex-col justify-end pb-16 md:pb-24"
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
            className="mt-5 max-w-4xl text-[2.6rem] leading-[1.04] text-paper sm:text-5xl md:text-[4.4rem] lg:text-[5rem]"
          >
            {t("title")}
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
              <Link href="/products" className="btn btn-outline-light">
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

        {/* Teller, naam van het beeld en voortgangslijn — rechtsonder */}
        <div className="absolute bottom-6 right-6 z-10 w-52 text-paper md:bottom-8 md:right-10 md:w-72">
          <div className="flex items-baseline justify-between gap-4">
            <span className="shrink-0 whitespace-nowrap text-[0.68rem] uppercase tracking-[0.28em] text-paper/70">
              <span className="text-paper">{nummer(slide)}</span> / {nummer(SLIDES.length - 1)}
            </span>
            <AnimatePresence mode="wait" initial={false}>
              <motion.span
                key={slide}
                initial={{ opacity: 0, y: 4 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -4 }}
                transition={{ duration: 0.45 }}
                className="truncate text-[0.68rem] uppercase tracking-[0.22em] text-paper/85"
              >
                {SLIDES[slide].label(tAll, tProducts)}
              </motion.span>
            </AnimatePresence>
          </div>
          <div className="mt-3 h-px w-full bg-paper/25">
            <div
              key={`${slide}-${tik}`}
              className="h-px bg-paper"
              style={{
                width: beweegt ? undefined : "100%",
                animation: beweegt ? `heroVoortgang ${SLIDE_MS}ms linear forwards` : undefined,
                animationPlayState: stil ? "paused" : "running",
              }}
            />
          </div>
        </div>

        {/* Pijlen — alleen bij hover op desktop; op mobiel veeg je */}
        {[
          { r: -1 as const, kant: "left-4 md:left-8", Icoon: ChevronLeft, label: "Vorige" },
          { r: 1 as const, kant: "right-4 md:right-8", Icoon: ChevronRight, label: "Volgende" },
        ].map(({ r, kant, Icoon, label }) => (
          <button
            key={r}
            type="button"
            aria-label={label}
            onClick={() => ga(slide + r)}
            className={`absolute top-1/2 z-10 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-paper/30 text-paper/80 opacity-0 backdrop-blur-sm transition-all duration-500 hover:border-paper hover:text-paper group-hover/hero:opacity-100 md:flex ${kant}`}
          >
            <Icoon className="h-5 w-5" strokeWidth={1.25} />
          </button>
        ))}
      </div>

      <div className="border-b border-ink/10 bg-paper">
        <div className="container-x grid grid-cols-2 gap-x-6 gap-y-6 py-8 sm:grid-cols-4 md:py-10">
          {heroStats.map((s) => (
            <div key={s.key}>
              <dt className="font-display text-4xl text-ink md:text-5xl">
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
