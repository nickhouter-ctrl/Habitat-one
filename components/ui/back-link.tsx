import { ArrowLeft } from "lucide-react";
import { Link } from "@/i18n/navigation";
import { cn } from "@/lib/utils";

export function BackLink({
  href,
  label,
  light = false,
}: {
  href: string;
  label: string;
  light?: boolean;
}) {
  return (
    <Link
      href={href}
      className={cn(
        "group inline-flex items-center gap-2 text-[0.74rem] font-medium uppercase tracking-[0.22em] transition-colors",
        light ? "text-paper/85 hover:text-paper" : "text-ink-soft hover:text-ink",
      )}
    >
      <span
        className={cn(
          "grid grid-cols-1 h-7 w-7 place-items-center border transition-colors",
          light
            ? "border-paper/40 group-hover:border-paper"
            : "border-ink/25 group-hover:border-ink",
        )}
      >
        <ArrowLeft className="h-3.5 w-3.5 transition-transform group-hover:-translate-x-0.5" />
      </span>
      {label}
    </Link>
  );
}
