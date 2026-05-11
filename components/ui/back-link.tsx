import { ArrowLeft } from "lucide-react";
import { Link } from "@/i18n/navigation";

export function BackLink({ href, label }: { href: string; label: string }) {
  return (
    <Link
      href={href}
      className="group inline-flex items-center gap-2 text-sm font-medium text-ink-soft transition-colors hover:text-terracotta-700"
    >
      <span className="grid h-7 w-7 place-items-center rounded-full border border-sand-300 transition-colors group-hover:border-terracotta-400 group-hover:bg-sand-100">
        <ArrowLeft className="h-3.5 w-3.5 transition-transform group-hover:-translate-x-0.5" />
      </span>
      {label}
    </Link>
  );
}
