import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { Link } from "@/i18n/navigation";
import { TiltCard } from "@/components/ui/tilt-card";
import type { CatalogSpace } from "@/lib/data/catalog";
import { cn } from "@/lib/utils";

export function SpaceCard({
  space,
  name,
  environmentLabel,
  className,
  large = false,
}: {
  space: CatalogSpace;
  name?: string;
  environmentLabel?: string;
  className?: string;
  large?: boolean;
}) {
  const label = name ?? space.name;
  return (
    <TiltCard className={cn("h-full", className)} intensity={6} lift={6}>
      <Link
        href={`/spaces/${space.slug}`}
        className={cn(
          "group relative block h-full overflow-hidden rounded-3xl",
          large ? "aspect-[16/10]" : "aspect-[4/3]",
        )}
      >
        {space.image ? (
          <Image
            src={space.image}
            alt={label}
            fill
            sizes={large ? "(max-width:1024px) 100vw, 66vw" : "(max-width:640px) 50vw, 33vw"}
            className="object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-[1.08]"
          />
        ) : (
          <div className="h-full w-full bg-gradient-to-br from-sea-500 to-olive-700" />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-ink/75 via-ink/15 to-transparent" />
        {environmentLabel && (
          <span className="absolute left-4 top-4 rounded-full bg-cream/90 px-3 py-1 text-[0.62rem] font-semibold uppercase tracking-[0.18em] text-clay-700 backdrop-blur-sm">
            {environmentLabel}
          </span>
        )}
        <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-5">
          <h3 className={cn("font-display text-cream", large ? "text-3xl" : "text-xl")}>{label}</h3>
          <span className="grid h-9 w-9 place-items-center rounded-full bg-cream/90 text-clay-800 transition-transform duration-300 group-hover:scale-110">
            <ArrowUpRight className="h-4 w-4" />
          </span>
        </div>
      </Link>
    </TiltCard>
  );
}
