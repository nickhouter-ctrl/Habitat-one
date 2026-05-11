"use client";

import { useRef } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  useMotionValue,
  type MotionValue,
} from "motion/react";
import { ArrowRight, MapPin, MousePointerClick } from "lucide-react";
import { Link } from "@/i18n/navigation";
import { heroStats } from "@/lib/data/site";
import { CountUp } from "@/components/ui/count-up";

const floatChips = [
  { src: "/materials/27.jpg", label: "Travertino", className: "left-[3%] top-[26%] h-24 w-20 rotate-[-8deg]", depth: 26, delay: 0 },
  { src: "/materials/29.jpg", label: "Poly wood", className: "left-[10%] bottom-[18%] h-20 w-24 rotate-[6deg]", depth: 38, delay: 1.4 },
  { src: "/products/355.jpg", label: "Travertine", className: "right-[6%] top-[16%] h-24 w-24 rotate-[7deg]", depth: 30, delay: 0.7 },
  { src: "/products/346.jpg", label: "Charcoal oak", className: "right-[2%] bottom-[24%] h-20 w-20 rotate-[-9deg]", depth: 44, delay: 2.1 },
];

function FloatingChip({
  chip,
  mx,
  my,
}: {
  chip: (typeof floatChips)[number];
  mx: MotionValue<number>;
  my: MotionValue<number>;
}) {
  const x = useTransform(mx, (v) => v * chip.depth);
  const y = useTransform(my, (v) => v * chip.depth);
  return (
    <motion.div style={{ x, y }} className={`absolute ${chip.className}`}>
      <div className="animate-float-slow" style={{ animationDelay: `${chip.delay}s` }}>
        <div className="overflow-hidden rounded-2xl border border-cream/30 shadow-[0_20px_45px_-20px_rgba(0,0,0,0.5)] backdrop-blur-sm">
          <div className="relative h-full w-full">
            <Image src={chip.src} alt="" width={120} height={120} className="h-full w-full object-cover" />
            <span className="absolute inset-x-0 bottom-0 bg-clay-800/60 px-1.5 py-0.5 text-[0.5rem] font-semibold uppercase tracking-wide text-cream">
              {chip.label}
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function Words({ text, delay = 0 }: { text: string; delay?: number }) {
  return (
    <>
      {text.split(" ").map((w, i) => (
        <span key={i} className="inline-block overflow-hidden align-bottom">
          <motion.span
            className="inline-block"
            initial={{ y: "110%", opacity: 0 }}
            animate={{ y: "0%", opacity: 1 }}
            transition={{ duration: 0.85, delay: delay + i * 0.07, ease: [0.16, 1, 0.3, 1] }}
          >
            {w}&nbsp;
          </motion.span>
        </span>
      ))}
    </>
  );
}

export function Hero() {
  const t = useTranslations("hero");
  const tStats = useTranslations("stats");
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "22%"]);
  const bgScale = useTransform(scrollYProgress, [0, 1], [1.06, 1.18]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const fade = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const archY = useTransform(scrollYProgress, [0, 1], ["0%", "-12%"]);

  // mouse parallax
  const mxRaw = useMotionValue(0);
  const myRaw = useMotionValue(0);
  const mx = useSpring(mxRaw, { stiffness: 60, damping: 18 });
  const my = useSpring(myRaw, { stiffness: 60, damping: 18 });

  function onMove(e: React.MouseEvent<HTMLDivElement>) {
    const r = e.currentTarget.getBoundingClientRect();
    mxRaw.set((e.clientX - r.left) / r.width - 0.5);
    myRaw.set((e.clientY - r.top) / r.height - 0.5);
  }
  function onLeave() {
    mxRaw.set(0);
    myRaw.set(0);
  }

  const titleLines = [t("titleA"), t("titleB"), t("titleC")];

  return (
    <section
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className="relative isolate flex min-h-[100svh] items-end overflow-hidden bg-sea-900 pb-10 pt-24 sm:pb-12 sm:pt-28 md:pb-20 md:pt-32"
    >
      {/* Background image layer — Xàbia: the Arenal beach beneath the Montgó */}
      <motion.div style={{ y: bgY, scale: bgScale }} className="absolute inset-0 -z-20">
        <Image src="/scenery/xabia-arenal.jpg" alt="" fill priority className="object-cover" sizes="100vw" />
      </motion.div>
      {/* Colour wash */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-sea-900/55 via-clay-800/35 to-sand-50" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-tr from-clay-800/40 via-transparent to-terracotta-600/25 mix-blend-multiply" />
      {/* Sun glow */}
      <motion.div
        style={{ x: useTransform(mx, (v) => v * -40), y: useTransform(my, (v) => v * -30) }}
        className="glow-blob absolute right-[8%] top-[10%] -z-10 h-80 w-80 opacity-80 md:h-[28rem] md:w-[28rem]"
      />

      {/* Floating material chips */}
      <div className="pointer-events-none absolute inset-0 -z-[5] hidden md:block">
        {floatChips.map((c, i) => (
          <FloatingChip key={i} chip={c} mx={mx} my={my} />
        ))}
      </div>

      {/* Arch framed image — bottom right — a Habitat One project: Villa Montgó, Xàbia */}
      <motion.div
        style={{ y: archY, x: useTransform(mx, (v) => v * 18), opacity: fade }}
        className="pointer-events-none absolute -right-10 bottom-0 -z-[5] hidden h-[78%] w-[34%] max-w-md lg:block"
      >
        <div
          className="relative h-full w-full overflow-hidden border-x-2 border-t-2 border-cream/40 shadow-[0_40px_80px_-30px_rgba(0,0,0,0.6)]"
          style={{ borderRadius: "50% 50% 0 0 / 22% 22% 0 0" }}
        >
          <Image src="/projects/wip/94.jpg" alt="Villa Montgó — a Habitat One project in Xàbia" fill className="object-cover" sizes="40vw" />
          <div className="absolute inset-0 bg-gradient-to-t from-clay-800/45 to-transparent" />
          <span className="absolute bottom-5 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-clay-800/55 px-3 py-1 text-[0.62rem] font-semibold uppercase tracking-[0.18em] text-cream backdrop-blur-sm">
            Villa Montgó · Xàbia
          </span>
        </div>
      </motion.div>

      {/* Content */}
      <motion.div style={{ y: contentY, opacity: fade }} className="container-x relative w-full">
        <motion.span
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 rounded-full border border-cream/25 bg-cream/10 px-3.5 py-1.5 text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-cream backdrop-blur-sm"
        >
          <MapPin className="h-3 w-3 text-terracotta-300" />
          {t("eyebrow")}
        </motion.span>

        <h1 className="mt-5 max-w-3xl font-display text-[2.15rem] font-semibold leading-[1.05] text-cream drop-shadow-[0_2px_20px_rgba(0,0,0,0.3)] sm:mt-6 sm:text-5xl sm:leading-[1.02] md:text-[4.5rem] lg:text-[5rem]">
          <span className="block">
            <Words text={titleLines[0]} delay={0.15} />
          </span>
          <span className="block text-terracotta-300">
            <Words text={titleLines[1]} delay={0.32} />
          </span>
          <span className="block">
            <Words text={titleLines[2]} delay={0.46} />
          </span>
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.7 }}
          className="mt-5 max-w-xl text-[0.95rem] leading-relaxed text-cream/85 sm:mt-7 sm:text-base md:text-lg"
        >
          {t("subtitle")}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.85 }}
          className="mt-6 flex flex-wrap items-center gap-3 sm:mt-9"
        >
          <Link href="/materials" className="btn btn-primary">
            {t("ctaPrimary")}
            <ArrowRight className="h-4 w-4" />
          </Link>
          <Link href="/projects" className="btn btn-outline-light">
            {t("ctaSecondary")}
          </Link>
          <span className="hidden items-center gap-1.5 pl-2 text-xs text-cream/55 sm:flex">
            <MousePointerClick className="h-3.5 w-3.5" />
            {t("badge")}
          </span>
        </motion.div>

        {/* Stats */}
        <motion.dl
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1 }}
          className="mt-12 grid max-w-2xl grid-cols-2 gap-x-6 gap-y-5 border-t border-cream/15 pt-6 sm:grid-cols-4"
        >
          {heroStats.map((s) => (
            <div key={s.key}>
              <dt className="numeral text-2xl text-cream md:text-3xl">
                <CountUp value={s.value} />
              </dt>
              <dd className="mt-1 text-[0.7rem] uppercase leading-tight tracking-[0.12em] text-cream/55">
                {tStats(s.key)}
              </dd>
            </div>
          ))}
        </motion.dl>
      </motion.div>

      {/* Scroll cue */}
      <motion.div
        style={{ opacity: fade }}
        className="absolute bottom-5 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-cream/60 md:flex"
      >
        <span className="text-[0.62rem] uppercase tracking-[0.3em]">{t("scroll")}</span>
        <span className="relative h-9 w-[1.5px] overflow-hidden bg-cream/20">
          <motion.span
            className="absolute inset-x-0 top-0 h-3 bg-cream"
            animate={{ y: ["-100%", "300%"] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          />
        </span>
      </motion.div>
    </section>
  );
}
