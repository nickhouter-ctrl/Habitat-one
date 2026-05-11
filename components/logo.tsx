import { cn } from "@/lib/utils";

export function Logo({ dark = true, className }: { dark?: boolean; className?: string }) {
  return (
    <span className={cn("group inline-flex items-center gap-2.5", className)}>
      <span className="relative grid grid-cols-1 h-9 w-9 place-items-center">
        <svg
          viewBox="0 0 40 40"
          className="h-9 w-9 transition-transform duration-500 group-hover:rotate-[8deg]"
          aria-hidden
        >
          <defs>
            <linearGradient id="ho-mark" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#c2703f" />
              <stop offset="55%" stopColor="#a85a2f" />
              <stop offset="100%" stopColor="#235e6c" />
            </linearGradient>
          </defs>
          {/* arch */}
          <path
            d="M7 35 V18 a13 13 0 0 1 26 0 V35 Z"
            fill="none"
            stroke="url(#ho-mark)"
            strokeWidth="2.6"
            strokeLinejoin="round"
          />
          {/* inner door */}
          <path d="M15 35 V24 a5 5 0 0 1 10 0 V35" fill="none" stroke="url(#ho-mark)" strokeWidth="2.2" />
          {/* sun */}
          <circle cx="20" cy="13.5" r="3.1" fill="url(#ho-mark)" />
        </svg>
      </span>
      <span className="flex flex-col leading-none">
        <span
          className={cn(
            "font-display text-[1.22rem] font-semibold tracking-tight",
            dark ? "text-ink" : "text-cream",
          )}
        >
          Habitat<span className="text-terracotta-500"> One</span>
        </span>
        <span
          className={cn(
            "mt-0.5 text-[0.56rem] font-semibold uppercase tracking-[0.34em]",
            dark ? "text-ink-soft/70" : "text-cream/65",
          )}
        >
          Xàbia · Costa Blanca
        </span>
      </span>
    </span>
  );
}
