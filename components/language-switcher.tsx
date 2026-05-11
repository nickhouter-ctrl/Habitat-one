"use client";

import { useEffect, useRef, useState, useTransition } from "react";
import { useLocale } from "next-intl";
import { AnimatePresence, motion } from "motion/react";
import { Check, Globe, ChevronDown } from "lucide-react";
import { usePathname, useRouter } from "@/i18n/navigation";
import { locales, localeNames, localeFlags, type Locale } from "@/i18n/routing";
import { cn } from "@/lib/utils";

export function LanguageSwitcher({ dark = true }: { dark?: boolean }) {
  const locale = useLocale() as Locale;
  const pathname = usePathname();
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [isPending, startTransition] = useTransition();
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onDoc(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener("mousedown", onDoc);
    return () => document.removeEventListener("mousedown", onDoc);
  }, []);

  function choose(next: Locale) {
    setOpen(false);
    if (next === locale) return;
    startTransition(() => {
      router.replace(pathname, { locale: next });
    });
  }

  return (
    <div className="relative" ref={ref}>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-haspopup="listbox"
        aria-expanded={open}
        disabled={isPending}
        className={cn(
          "inline-flex items-center gap-1.5 rounded-full border px-3 py-2 text-[0.78rem] font-semibold uppercase tracking-wider transition-colors duration-300",
          dark
            ? "border-sand-300 text-ink hover:bg-sand-100"
            : "border-cream/40 text-cream hover:bg-cream/10",
          isPending && "opacity-60",
        )}
      >
        <Globe className="h-3.5 w-3.5" />
        {locale}
        <ChevronDown className={cn("h-3 w-3 transition-transform duration-300", open && "rotate-180")} />
      </button>
      <AnimatePresence>
        {open && (
          <motion.ul
            role="listbox"
            initial={{ opacity: 0, y: -8, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.97 }}
            transition={{ duration: 0.18 }}
            className="absolute right-0 z-50 mt-2 w-48 overflow-hidden rounded-2xl border border-sand-200 bg-whitewash p-1.5 shadow-[0_30px_60px_-25px_rgba(84,48,31,0.45)]"
          >
            {locales.map((l) => (
              <li key={l}>
                <button
                  type="button"
                  role="option"
                  aria-selected={l === locale}
                  onClick={() => choose(l)}
                  className={cn(
                    "flex w-full items-center justify-between gap-3 rounded-xl px-3 py-2 text-sm transition-colors",
                    l === locale ? "bg-sand-100 text-terracotta-700" : "text-ink hover:bg-sand-50",
                  )}
                >
                  <span className="flex items-center gap-2.5">
                    <span className="text-base leading-none">{localeFlags[l]}</span>
                    {localeNames[l]}
                  </span>
                  {l === locale && <Check className="h-4 w-4" />}
                </button>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
}
