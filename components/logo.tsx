import Image from "next/image";
import { cn } from "@/lib/utils";

/**
 * Habitat One — Jávea/Xàbia wordmark (supplied brand artwork, vector).
 * `dark` (default) renders the dark logo for light surfaces; `dark={false}`
 * renders the cream/inverted logo for dark surfaces (footer).
 */
export function Logo({ dark = true, className }: { dark?: boolean; className?: string }) {
  return (
    <Image
      src={dark ? "/logo.svg" : "/logo-cream.svg"}
      alt="Habitat One — Jávea/Xàbia"
      width={2264}
      height={1360}
      priority
      className={cn("h-11 w-auto sm:h-12", className)}
    />
  );
}
