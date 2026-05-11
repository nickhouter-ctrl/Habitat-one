import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Reveal } from "./reveal";

export function Container({
  children,
  className,
  as: Comp = "div",
}: {
  children: ReactNode;
  className?: string;
  as?: "div" | "section" | "header" | "footer";
}) {
  return <Comp className={cn("container-x", className)}>{children}</Comp>;
}

export function Section({
  children,
  className,
  id,
}: {
  children: ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <section id={id} className={cn("relative overflow-x-clip py-14 sm:py-20 md:py-28", className)}>
      {children}
    </section>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  text,
  align = "left",
  light = false,
  className,
  titleClassName,
}: {
  eyebrow?: string;
  title: ReactNode;
  text?: ReactNode;
  align?: "left" | "center";
  light?: boolean;
  className?: string;
  titleClassName?: string;
}) {
  return (
    <div
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {eyebrow && (
        <Reveal>
          <span className={cn("eyebrow", light && "is-light", align === "center" && "justify-center")}>
            {eyebrow}
          </span>
        </Reveal>
      )}
      <Reveal delay={0.05}>
        <h2
          className={cn(
            "mt-4 text-3xl leading-[1.08] sm:text-4xl md:text-[2.85rem]",
            light ? "text-cream" : "text-ink",
            titleClassName,
          )}
        >
          {title}
        </h2>
      </Reveal>
      {text && (
        <Reveal delay={0.12}>
          <p
            className={cn(
              "mt-5 text-base leading-relaxed md:text-lg",
              light ? "text-cream/75" : "text-ink-soft",
            )}
          >
            {text}
          </p>
        </Reveal>
      )}
    </div>
  );
}
