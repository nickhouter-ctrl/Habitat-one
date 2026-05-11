import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { Link } from "@/i18n/navigation";
import { TiltCard } from "@/components/ui/tilt-card";
import type { CatalogMaterial } from "@/lib/data/catalog";
import { cn } from "@/lib/utils";

export function MaterialCard({
  material,
  description,
  countLabel,
  className,
}: {
  material: CatalogMaterial;
  description?: string | null;
  countLabel?: string;
  className?: string;
}) {
  const desc = description ?? material.description;
  return (
    <TiltCard className={cn("h-full", className)} intensity={8} lift={7}>
      <Link href={`/materials/${material.slug}`} className="group block h-full overflow-hidden rounded-3xl border border-sand-200 bg-clay-800 text-cream">
        <div className="relative aspect-[4/5] overflow-hidden">
          {material.image ? (
            <Image
              src={material.image}
              alt={material.name}
              fill
              sizes="(max-width:640px) 50vw, (max-width:1024px) 33vw, 25vw"
              className="object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-110"
            />
          ) : (
            <div className="h-full w-full bg-gradient-to-br from-terracotta-400 via-clay-600 to-sea-700" />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-clay-800 via-clay-800/20 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 p-5">
            <h3 className="font-display text-2xl leading-tight">{material.name}</h3>
            {desc && <p className="mt-1.5 line-clamp-2 text-sm text-cream/70">{desc}</p>}
            <span className="mt-3 inline-flex items-center gap-1.5 text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-terracotta-300 transition-colors group-hover:text-cream">
              {countLabel}
              <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </span>
          </div>
        </div>
      </Link>
    </TiltCard>
  );
}
