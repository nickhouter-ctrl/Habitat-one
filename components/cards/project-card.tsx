import Image from "next/image";
import { ArrowUpRight, MapPin } from "lucide-react";
import { Link } from "@/i18n/navigation";
import { TiltCard } from "@/components/ui/tilt-card";
import type { Project } from "@/lib/data/projects";
import { cn } from "@/lib/utils";

export function ProjectCard({
  project,
  beforeLabel,
  afterLabel,
  className,
  feature = false,
}: {
  project: Project;
  beforeLabel: string;
  afterLabel: string;
  className?: string;
  feature?: boolean;
}) {
  const after = project.afterImage ?? project.gallery[0] ?? project.beforeImage ?? "/site/material_card.jpg";
  const before = project.beforeImage ?? after;
  const hasBefore = !!project.beforeImage && project.beforeImage !== after;

  return (
    <TiltCard className={cn("h-full", className)} intensity={feature ? 4 : 7} lift={6}>
      <Link href={`/projects/${project.slug}`} className="surface group block h-full overflow-hidden rounded-3xl">
        <div className={cn("relative overflow-hidden", feature ? "aspect-[16/9]" : "aspect-[4/3]")}>
          <Image
            src={after}
            alt={project.title}
            fill
            sizes={feature ? "(max-width:1024px) 100vw, 66vw" : "(max-width:640px) 100vw, 50vw"}
            className={cn(
              "object-cover transition-all duration-700 ease-out group-hover:scale-105",
              hasBefore && "group-hover:opacity-0",
            )}
          />
          {hasBefore && (
            <Image
              src={before}
              alt={`${project.title} — ${beforeLabel}`}
              fill
              sizes={feature ? "(max-width:1024px) 100vw, 66vw" : "(max-width:640px) 100vw, 50vw"}
              className="object-cover opacity-0 transition-all duration-700 ease-out group-hover:scale-105 group-hover:opacity-100"
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-ink/65 via-transparent to-transparent" />
          <span className="absolute left-4 top-4 flex items-center gap-1 rounded-full bg-cream/90 px-3 py-1 text-[0.62rem] font-semibold uppercase tracking-[0.16em] text-clay-700 backdrop-blur-sm">
            {afterLabel}
            {hasBefore && (
              <>
                <span className="text-clay-700/40">·</span>
                <span className="text-clay-700/60 transition-colors group-hover:text-terracotta-600">{beforeLabel}</span>
              </>
            )}
          </span>
          <span className="absolute right-4 top-4 rounded-full bg-clay-800/70 px-2.5 py-1 text-[0.62rem] font-semibold tracking-wide text-cream backdrop-blur-sm">
            {project.year}
          </span>
          <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 p-5">
            <p className="flex items-center gap-1.5 text-[0.72rem] font-medium uppercase tracking-[0.14em] text-cream/80">
              <MapPin className="h-3 w-3" />
              {project.location}
            </p>
            <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-cream/90 text-clay-800 transition-transform duration-300 group-hover:scale-110">
              <ArrowUpRight className="h-4 w-4" />
            </span>
          </div>
        </div>
        <div className="p-5">
          <h3 className="font-display text-xl leading-snug text-ink transition-colors group-hover:text-terracotta-700">{project.title}</h3>
          <p className="mt-1.5 text-[0.78rem] font-medium uppercase tracking-[0.12em] text-ink-soft/70">{project.scope}</p>
          {feature && <p className="mt-3 line-clamp-2 text-sm leading-relaxed text-ink-soft">{project.summary}</p>}
        </div>
      </Link>
    </TiltCard>
  );
}
