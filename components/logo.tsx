import { cn } from "@/lib/utils";

/**
 * Habitat One wordmark — recreated from the original site:
 * "HABITAT" with "ONE" set just below, indented to the right and tucked up a
 * touch. Montserrat (Avenir on the original) bold, tight tracking.
 */
export function Logo({ dark = true, className }: { dark?: boolean; className?: string }) {
  return (
    <span
      className={cn(
        "flex flex-col items-start font-sans font-bold uppercase leading-none",
        "text-[1.35rem] tracking-[-0.02em] sm:text-[1.6rem]",
        dark ? "text-[#402419]" : "text-cream",
        className,
      )}
      aria-label="Habitat One"
    >
      <span>Habitat</span>
      <span className="-mt-[0.18em] ml-[0.85em]">One</span>
    </span>
  );
}
