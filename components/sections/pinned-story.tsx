"use client";

import { useRef } from "react";
import Image from "next/image";
import {
  motion,
  useScroll,
  useTransform,
  type MotionValue,
} from "motion/react";
import { ArrowRight } from "lucide-react";
import { Link } from "@/i18n/navigation";
import { Magnetic } from "@/components/ui/magnetic";

export interface StoryLine {
  heading: string;
  sub?: string;
}

interface PinnedStoryProps {
  /** Label that surfaces in the floating chapter indicator (desktop) */
  chapter?: string;
  /** Optional .mp4/.webm — falls back to a slow Ken-Burns image when omitted */
  videoSrc?: string;
  /** Poster / placeholder image (also used as Ken-Burns layer when video is missing) */
  posterImage: string;
  /** Small label fixed top-left of the pinned panel (e.g. "163.14 · Italian Travertine") */
  identifier?: string;
  /** Headlines that fade through as the user scrolls */
  lines: StoryLine[];
  /** Optional CTA shown on the LAST text panel */
  cta?: { label: string; href: string };
  /** Overlay tone — adjusts the legibility scrim over the video */
  tone?: "dark" | "light";
  /** How tall the scroll-stage is per text panel, expressed in svh (default 150). */
  scrollPerLine?: number;
}

/**
 * Cinematic, scroll-pinned story:
 * A full-bleed background (video or image) stays sticky while a stack of
 * centred headlines crossfade in and out as the section is scrolled past.
 * Section height = lines.length × 100svh — each text gets one viewport.
 */
export function PinnedStorySection({
  chapter,
  videoSrc,
  posterImage,
  identifier,
  lines,
  cta,
  tone = "dark",
  scrollPerLine = 150,
}: PinnedStoryProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  return (
    <section
      ref={ref}
      data-chapter={chapter}
      style={{ height: `${lines.length * scrollPerLine}svh` }}
      className="relative"
    >
      <div className="sticky top-0 h-svh w-full overflow-hidden">
        {/* Background — video if provided, else Ken-Burns image — drifts up at
            ~30% scroll speed for a cinematic depth feel. */}
        <motion.div
          style={{
            y: useTransform(scrollYProgress, [0, 1], ["0%", "-12%"]),
            scale: useTransform(scrollYProgress, [0, 0.5, 1], [1.04, 1.08, 1.12]),
          }}
          className="absolute inset-0"
        >
          {videoSrc ? (
            <video
              autoPlay
              muted
              loop
              playsInline
              poster={posterImage}
              className="h-full w-full object-cover"
            >
              <source src={videoSrc} type="video/mp4" />
            </video>
          ) : (
            <div className="h-full w-full animate-ken-burns">
              <Image src={posterImage} alt="" fill priority sizes="100vw" className="object-cover" />
            </div>
          )}
        </motion.div>

        {/* Legibility scrim */}
        <div
          className={
            tone === "dark"
              ? "absolute inset-0 bg-ink/45"
              : "absolute inset-0 bg-ink/25"
          }
        />

        {/* Identifier — top-left */}
        {identifier && (
          <p className="absolute left-6 top-6 z-10 text-[0.66rem] font-medium uppercase tracking-[0.32em] text-paper/80 md:left-10 md:top-10">
            {identifier}
          </p>
        )}

        {/* Scroll-hint — bottom centre, first viewport only */}
        <motion.div
          style={{
            opacity: useTransform(scrollYProgress, [0, 0.08], [1, 0]),
          }}
          className="absolute inset-x-0 bottom-8 z-10 flex justify-center"
        >
          <span className="flex items-center gap-2 text-[0.62rem] uppercase tracking-[0.32em] text-paper/75">
            <span className="relative h-7 w-[1.5px] overflow-hidden bg-paper/30">
              <motion.span
                className="absolute inset-x-0 top-0 h-2.5 bg-paper"
                animate={{ y: ["-100%", "300%"] }}
                transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
              />
            </span>
            Scroll
          </span>
        </motion.div>

        {/* Text panels — one per line, fading through */}
        {lines.map((line, i) => (
          <StoryPanel
            key={i}
            scrollYProgress={scrollYProgress}
            index={i}
            total={lines.length}
            heading={line.heading}
            sub={line.sub}
            cta={i === lines.length - 1 ? cta : undefined}
          />
        ))}
      </div>
    </section>
  );
}

function StoryPanel({
  scrollYProgress,
  index,
  total,
  heading,
  sub,
  cta,
}: {
  scrollYProgress: MotionValue<number>;
  index: number;
  total: number;
  heading: string;
  sub?: string;
  cta?: { label: string; href: string };
}) {
  const start = index / total;
  const end = (index + 1) / total;
  const isFirst = index === 0;
  const isLast = index === total - 1;
  // Sequential transitions inside each segment: panel N finishes fading out
  // before panel N+1 starts fading in. The keyframe lists below explicitly
  // cover the full [0, 1] range so useTransform never extrapolates past the
  // segment — preventing every panel rendering at once at progress=0.
  const fade = 0.025;

  let times: number[];
  let values: number[];
  if (isFirst && isLast) {
    times = [0, 1];
    values = [1, 1];
  } else if (isFirst) {
    times = [0, Math.max(0, end - fade), end, 1];
    values = [1, 1, 0, 0];
  } else if (isLast) {
    times = [0, start, Math.min(1, start + fade), 1];
    values = [0, 0, 1, 1];
  } else {
    times = [
      0,
      start,
      Math.min(1, start + fade),
      Math.max(0, end - fade),
      end,
      1,
    ];
    values = [0, 0, 1, 1, 0, 0];
  }

  const opacity = useTransform(scrollYProgress, times, values);
  // Generous vertical glide — the heading slides in from below as it fades in,
  // and continues drifting up as the next segment takes over.
  const headingY = useTransform(
    scrollYProgress,
    [Math.max(0, start - 0.02), Math.min(1, end + 0.02)],
    [60, -60],
  );
  const headingScale = useTransform(
    scrollYProgress,
    [Math.max(0, start - 0.02), Math.min(1, end + 0.02)],
    [1.06, 0.97],
  );

  return (
    <motion.div
      style={{ opacity }}
      className="pointer-events-none absolute inset-0 z-10 grid place-items-center px-6"
    >
      <motion.div
        style={{ y: headingY, scale: headingScale }}
        className="pointer-events-auto max-w-4xl text-center text-paper"
      >
        <h2 className="text-balance font-medium leading-[1.06] tracking-[-0.02em] text-paper text-[2.2rem] sm:text-5xl md:text-6xl lg:text-[5rem]">
          {heading}
        </h2>
        {sub && (
          <p className="mt-6 text-base leading-relaxed text-paper/85 md:text-lg">{sub}</p>
        )}
        {cta && (
          <div className="mt-9 flex justify-center">
            <Magnetic>
              <Link href={cta.href} className="btn btn-outline-light">
                {cta.label}
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Magnetic>
          </div>
        )}
      </motion.div>
    </motion.div>
  );
}
