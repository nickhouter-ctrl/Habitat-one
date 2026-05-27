"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "motion/react";

export function ProjectShowcase({
  images,
  identifier,
  title,
}: {
  images: string[];
  identifier: string;
  title: string;
}) {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });
  const progressWidth = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const total = images.length;

  return (
    <section ref={ref} className="relative bg-paper py-16 md:py-24">
      {/* Sticky identifier — pinned to top of viewport while user scrolls */}
      <div className="container-x">
        <div className="pointer-events-none sticky top-20 z-10 flex items-center justify-between border-y border-ink/15 bg-paper py-3 md:top-24">
          <p className="text-[0.7rem] font-medium uppercase tracking-[0.32em] text-ink">
            {identifier}
          </p>
          <p className="hidden text-[0.66rem] uppercase tracking-[0.22em] text-ink-soft md:block">
            {title}
          </p>
        </div>

        {/* Scroll progress strip — sits under the sticky id bar */}
        <div className="sticky top-[3.5rem] z-10 -mt-px h-[2px] w-full bg-ink/10 md:top-[4rem]">
          <motion.div style={{ width: progressWidth }} className="h-full bg-ink" />
        </div>
      </div>

      {/* Stacked full-width images */}
      <div className="container-x mt-10 flex flex-col gap-10 md:mt-16 md:gap-16">
        {images.map((src, i) => (
          <motion.figure
            key={`${src}-${i}`}
            initial={{ opacity: 0, y: 48 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-15% 0px" }}
            transition={{ duration: 0.95, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="relative aspect-[3/2] w-full overflow-hidden bg-sand-100">
              <Image
                src={src}
                alt={title}
                fill
                sizes="100vw"
                className="object-cover"
              />
            </div>
            <figcaption className="mt-3 flex items-center justify-between text-[0.66rem] uppercase tracking-[0.22em] text-ink-soft/70">
              <span>{title}</span>
              <span>
                {String(i + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
              </span>
            </figcaption>
          </motion.figure>
        ))}
      </div>
    </section>
  );
}
