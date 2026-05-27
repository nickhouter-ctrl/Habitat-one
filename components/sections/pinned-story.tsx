"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Link } from "@/i18n/navigation";
import { Magnetic } from "@/components/ui/magnetic";

export interface StoryLine {
  heading: string;
  sub?: string;
}

interface PinnedStoryProps {
  chapter?: string;
  videoSrc?: string;
  posterImage: string;
  identifier?: string;
  lines: StoryLine[];
  cta?: { label: string; href: string };
  tone?: "dark" | "light";
  /** Scroll height per text panel, expressed in svh (default 100 = one viewport). */
  scrollPerLine?: number;
}

/**
 * Cinematic scroll story.
 *
 * The background pins to the top of the viewport (sticky) while the text
 * panels are absolutely overlaid and scroll naturally — one viewport at a
 * time, never overlapping. Pure CSS for the text flow, so it is the
 * smoothest possible version: zero per-frame JavaScript work.
 */
export function PinnedStorySection({
  chapter,
  videoSrc,
  posterImage,
  identifier,
  lines,
  cta,
  tone = "dark",
  scrollPerLine = 100,
}: PinnedStoryProps) {
  return (
    <section
      data-chapter={chapter}
      style={{ height: `${lines.length * scrollPerLine}svh` }}
      className="relative"
    >
      {/* Pinned background — fills the viewport while the section scrolls past */}
      <div className="sticky top-0 h-svh w-full overflow-hidden">
        {videoSrc ? (
          <video
            autoPlay
            muted
            loop
            playsInline
            poster={posterImage}
            className="absolute inset-0 h-full w-full object-cover"
          >
            <source src={videoSrc} type="video/mp4" />
          </video>
        ) : (
          <Image
            src={posterImage}
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        )}
        {/* Legibility scrim */}
        <div
          className={
            tone === "dark"
              ? "absolute inset-0 bg-ink/45"
              : "absolute inset-0 bg-ink/25"
          }
        />

        {identifier && (
          <p className="absolute left-6 top-6 z-10 text-[0.66rem] font-medium uppercase tracking-[0.32em] text-paper/80 md:left-10 md:top-10">
            {identifier}
          </p>
        )}
      </div>

      {/* Text panels — overlay the sticky background, but flow as normal
          content so each headline scrolls naturally past the camera. No
          cross-fades, no JS transforms — just one viewport per heading. */}
      <div className="absolute inset-0 z-10 flex flex-col">
        {lines.map((line, i) => {
          const isLast = i === lines.length - 1;
          return (
            <div
              key={i}
              style={{ height: `${scrollPerLine}svh` }}
              className="grid place-items-center px-6"
            >
              <div className="max-w-4xl text-center text-paper">
                <h2 className="text-balance font-medium leading-[1.06] tracking-[-0.02em] text-paper text-[2.2rem] sm:text-5xl md:text-6xl lg:text-[5rem]">
                  {line.heading}
                </h2>
                {line.sub && (
                  <p className="mt-6 text-base leading-relaxed text-paper/85 md:text-lg">
                    {line.sub}
                  </p>
                )}
                {isLast && cta && (
                  <div className="mt-9 flex justify-center">
                    <Magnetic>
                      <Link href={cta.href} className="btn btn-outline-light">
                        {cta.label}
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                    </Magnetic>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
