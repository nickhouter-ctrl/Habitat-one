import Image from "next/image";
import { cn } from "@/lib/utils";

/**
 * Habitat One — Jávea/Xàbia wordmark (supplied brand artwork).
 * `dark` (default) renders the dark logo for light surfaces; `dark={false}`
 * renders the cream/inverted logo for dark surfaces (footer).
 */
export function Logo({ dark = true, className }: { dark?: boolean; className?: string }) {
  return (
    <span className={cn("inline-flex flex-col items-center leading-none", className)}>
      <Image
        src={dark ? "/logo-habitat.png" : "/logo-habitat-cream.png"}
        alt="Habitat One — Jávea/Xàbia"
        width={1251}
        height={558}
        priority
        className="h-9 w-auto sm:h-10"
      />
      <span
        className={cn(
          "mt-[0.3rem] font-sans text-[0.5rem] font-semibold uppercase tracking-[0.22em] sm:text-[0.56rem]",
          dark ? "text-ink" : "text-cream/90",
        )}
      >
        Jávea · Xàbia
      </span>
    </span>
  );
}
