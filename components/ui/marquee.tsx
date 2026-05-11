import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

/** Pure-CSS infinite marquee. Renders the children twice for a seamless loop. */
export function Marquee({
  children,
  className,
  reverse = false,
  durationClass = "[animation-duration:38s]",
  pauseOnHover = true,
}: {
  children: ReactNode;
  className?: string;
  reverse?: boolean;
  durationClass?: string;
  pauseOnHover?: boolean;
}) {
  return (
    <div className={cn("group relative flex overflow-hidden mask-fade-x", className)}>
      <div
        className={cn(
          "flex w-max shrink-0 animate-marquee",
          durationClass,
          reverse && "[animation-direction:reverse]",
          pauseOnHover && "group-hover:[animation-play-state:paused]",
        )}
      >
        <div className="flex shrink-0 items-center">{children}</div>
        <div className="flex shrink-0 items-center" aria-hidden>
          {children}
        </div>
      </div>
    </div>
  );
}
