import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { Link } from "@/i18n/navigation";
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
  // suppress unused param warning when no before image exists
  void beforeLabel;
  void afterLabel;

  return (
    <Link
      href={`/projects/${project.slug}`}
      data-hover-label="View project"
      className={cn("group block", className)}
    >
      <div className={cn("relative overflow-hidden bg-sand-100", feature ? "aspect-[16/9]" : "aspect-[4/5]")}>
        <Image
          src={after}
          alt={project.title}
          fill
          sizes={feature ? "(max-width:1024px) 100vw, 66vw" : "(max-width:640px) 100vw, 50vw"}
          className={cn(
            "object-cover transition-all duration-700 ease-out group-hover:scale-[1.04]",
            hasBefore && "group-hover:opacity-0",
          )}
        />
        {hasBefore && (
          <Image
            src={before}
            alt={project.title}
            fill
            sizes={feature ? "(max-width:1024px) 100vw, 66vw" : "(max-width:640px) 100vw, 50vw"}
            className="object-cover opacity-0 transition-all duration-700 ease-out group-hover:scale-[1.04] group-hover:opacity-100"
          />
        )}
      </div>
      <div className="mt-5 flex items-start justify-between gap-4">
        <div className="min-w-0">
          <p className="text-[0.66rem] uppercase tracking-[0.22em] text-ink-soft/65">
            {project.location} · {project.year}
          </p>
          <h3 className="mt-2 text-lg font-medium leading-snug text-ink transition-colors group-hover:text-ink-soft md:text-xl">
            {project.title}
          </h3>
          <p className="mt-1.5 text-[0.72rem] uppercase tracking-[0.18em] text-ink-soft/70">{project.scope}</p>
          {feature && <p className="mt-3 line-clamp-2 text-sm leading-relaxed text-ink-soft">{project.summary}</p>}
        </div>
        <ArrowUpRight className="mt-1 h-4 w-4 shrink-0 text-ink-soft transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
      </div>
    </Link>
  );
}
