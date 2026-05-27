"use client";

import { useRef } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { motion, useScroll, useTransform } from "motion/react";
import { ArrowRight } from "lucide-react";
import { Link } from "@/i18n/navigation";
import { heroStats } from "@/lib/data/site";
import { CountUp } from "@/components/ui/count-up";
import { MaskReveal } from "@/components/ui/mask-reveal";
import { Magnetic } from "@/components/ui/magnetic";

// Placeholder — swap when the real MagicStone hero image / video arrives.
const HERO_IMAGE = "/products/v/454.jpg";

export function Hero() {
  const t = useTranslations("hero");
  const tStats = useTranslations("stats");
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "12%"]);
  const imageScale = useTransform(scrollYProgress, [0, 1], [1, 1.05]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "-22%"]);
  const textScale = useTransform(scrollYProgress, [0, 1], [1, 0.96]);
  const fade = useTransform(scrollYProgress, [0, 0.85], [1, 0]);

  return (
    <section
      ref={ref}
      data-chapter="Intro"
      className="relative isolate overflow-hidden bg-paper"
    >
      {/* Full-bleed image — slow Ken Burns zoom + scroll parallax */}
      <div className="relative h-[88svh] min-h-[620px] w-full overflow-hidden">
        <motion.div style={{ y: imageY, scale: imageScale }} className="absolute inset-0">
          <div className="absolute inset-0 animate-ken-burns">
            <Image
              src={HERO_IMAGE}
              alt="Magic Flexible Stone — wandpaneel"
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
          </div>
        </motion.div>
        {/* Quiet darkening so the headline reads on most photos */}
        <div className="absolute inset-0 bg-gradient-to-b from-ink/10 via-transparent to-ink/55" />

        <motion.div
          style={{ y: textY, opacity: fade, scale: textScale }}
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
            className="mt-6 max-w-xl text-base leading-relaxed text-paper/80 md:text-lg"
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

        {/* Sticky-style product identifier — bottom right corner */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.55 }}
          className="absolute bottom-6 right-6 hidden text-right text-paper md:block"
        >
          <p className="text-[0.62rem] uppercase tracking-[0.32em] text-paper/65">Lignapal · MagicStone</p>
          <p className="mt-1 text-[0.78rem] font-medium uppercase tracking-[0.22em]">163.14 · Travertine</p>
        </motion.div>
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
