import { cn } from "@/lib/utils";

export function Logo({ dark = true, className }: { dark?: boolean; className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex flex-col items-center font-sans font-extrabold uppercase leading-[0.92] tracking-[0.06em]",
        "text-[1.05rem] sm:text-[1.15rem]",
        dark ? "text-ink" : "text-cream",
        className,
      )}
      aria-label="Habitat One"
    >
      <span>Habitat</span>
      <span>One</span>
    </span>
  );
}
