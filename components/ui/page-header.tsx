import type { ReactNode } from "react";
import Image from "next/image";
import { Container } from "./section";
import { Reveal } from "./reveal";
import { cn } from "@/lib/utils";

export function PageHeader({
  eyebrow,
  title,
  intro,
  image,
  align = "left",
  children,
  size = "default",
}: {
  eyebrow?: string;
  title: ReactNode;
  intro?: ReactNode;
  image?: string;
  align?: "left" | "center";
  children?: ReactNode;
  size?: "default" | "compact";
}) {
  return (
    <section className="relative isolate overflow-hidden bg-sea-900 text-cream">
      {image ? (
        <Image src={image} alt="" fill priority className="object-cover opacity-[0.22]" sizes="100vw" />
      ) : (
        <div className="absolute inset-0 bg-gradient-to-br from-sea-900 via-clay-800/80 to-terracotta-700/60" />
      )}
      {/* dark scrim — guarantees the cream text stays legible over any photo */}
      <div className="absolute inset-0 bg-sea-900/60" />
      <div className="absolute inset-0 bg-gradient-to-b from-sea-900/40 via-sea-900/20 to-sea-900/55" />
      <div className="absolute inset-0 bg-gradient-to-r from-sea-900/55 via-sea-900/15 to-transparent" />
      <div className="pointer-events-none absolute -left-24 top-0 h-72 w-72 rounded-full bg-terracotta-600/25 blur-3xl" />

      <Container className={cn("relative", size === "compact" ? "pb-10 pt-28 md:pb-14 md:pt-32" : "pb-12 pt-28 md:pb-24 md:pt-40")}>
        <div className={cn("max-w-3xl", align === "center" && "mx-auto text-center")}>
          {eyebrow && (
            <Reveal>
              <span className={cn("eyebrow is-light", align === "center" && "justify-center")}>{eyebrow}</span>
            </Reveal>
          )}
          <Reveal delay={0.05}>
            <h1 className="mt-4 font-display text-4xl font-semibold leading-[1.05] text-cream drop-shadow-[0_2px_18px_rgba(8,30,36,0.5)] sm:text-5xl md:text-6xl">
              {title}
            </h1>
          </Reveal>
          {intro && (
            <Reveal delay={0.12}>
              <p className={cn("mt-6 text-base leading-relaxed text-cream/85 md:text-lg", align === "center" && "mx-auto")}>
                {intro}
              </p>
            </Reveal>
          )}
          {children && <Reveal delay={0.18}>{children}</Reveal>}
        </div>
      </Container>
    </section>
  );
}
