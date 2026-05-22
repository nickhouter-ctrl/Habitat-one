"use client";

import { useEffect, useState } from "react";
import { useLocale, useTranslations } from "next-intl";
import { AnimatePresence, motion } from "motion/react";
import { ArrowUpRight, ChevronDown, Menu, Search, X } from "lucide-react";
import { Link, usePathname, useRouter } from "@/i18n/navigation";
import { catalogSpaces, collections } from "@/lib/data/catalog";
import { services } from "@/lib/data/services";
import { primaryNav } from "@/lib/data/site";
import { LanguageSwitcher } from "@/components/language-switcher";
import { Logo } from "@/components/logo";
import { cn } from "@/lib/utils";

type DropItem = { href: string; label: string };
type Locale = "nl" | "en" | "es" | "de";

export function Header() {
  const t = useTranslations("nav");
  const tProducts = useTranslations("products");
  const tSpaces = useTranslations("spaces");
  const locale = useLocale() as Locale;
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  // Sluit het menu zodra de route verandert — tijdens render, zonder effect.
  const [lastPath, setLastPath] = useState(pathname);
  if (pathname !== lastPath) {
    setLastPath(pathname);
    setOpen(false);
  }

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  // Uitklapmenu's met de bestaande site-inhoud.
  const dropdowns: Record<string, DropItem[]> = {
    products: collections.map((c) => ({
      href: `/products?collection=${c.id}`,
      label: tProducts(c.key),
    })),
    spaces: catalogSpaces.map((s) => ({
      href: `/spaces/${s.slug}`,
      label: tSpaces(`names.${s.slug}`),
    })),
    services: services.map((s) => ({
      href: `/services/${s.slug}`,
      label: s.title[locale],
    })),
  };

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-sand-200 bg-cream/95 backdrop-blur print:hidden">
        {/* Bovenrij — logo · zoekbalk · taal · offerte */}
        <div className="container-x flex items-center gap-3 py-3 sm:gap-5">
          <Link href="/" aria-label="Habitat One — home" className="shrink-0">
            <Logo dark />
          </Link>

          <SearchBar placeholder={t("searchPlaceholder")} className="hidden flex-1 sm:flex" />

          <div className="ml-auto flex items-center gap-2 sm:ml-0 md:gap-3">
            <LanguageSwitcher dark />
            <Link
              href="/contact"
              className="hidden items-center gap-1.5 rounded-full bg-clay-700 px-4 py-2 text-[0.8rem] font-semibold tracking-wide text-cream transition-colors hover:bg-clay-800 md:inline-flex"
            >
              {t("quote")}
              <ArrowUpRight className="h-3.5 w-3.5" />
            </Link>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-label={open ? t("close") : t("openMenu")}
              aria-expanded={open}
              className="grid h-10 w-10 place-items-center rounded-full border border-sand-300 text-ink transition-colors hover:bg-sand-100 lg:hidden"
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* Onderrij — hoofdmenu met uitklapmenu's (desktop) */}
        <nav className="hidden border-t border-sand-200/70 lg:block">
          <div className="container-x flex items-center justify-center gap-1 py-1.5">
            {primaryNav.map((item) => (
              <NavItem
                key={item.href}
                href={item.href}
                label={t(item.labelKey)}
                active={isActive(item.href)}
                items={dropdowns[item.labelKey]}
              />
            ))}
          </div>
        </nav>
      </header>

      <AnimatePresence>
        {open && (
          <MobileMenu
            onClose={() => setOpen(false)}
            isActive={isActive}
            t={t}
          />
        )}
      </AnimatePresence>
    </>
  );
}

function SearchBar({ placeholder, className }: { placeholder: string; className?: string }) {
  const router = useRouter();
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        const q = new FormData(e.currentTarget).get("q")?.toString().trim();
        if (q) router.push(`/search?q=${encodeURIComponent(q)}`);
      }}
      className={cn(
        "items-center gap-2.5 rounded-full border border-sand-300 bg-white px-4 py-2.5 transition-colors focus-within:border-terracotta-400",
        className,
      )}
    >
      <Search className="h-4 w-4 shrink-0 text-ink-soft" />
      <input
        name="q"
        type="search"
        placeholder={placeholder}
        aria-label={placeholder}
        className="w-full min-w-0 bg-transparent text-sm text-ink outline-none placeholder:text-ink-soft/70"
      />
    </form>
  );
}

function NavItem({
  href,
  label,
  active,
  items,
}: {
  href: string;
  label: string;
  active: boolean;
  items?: DropItem[];
}) {
  const hasMenu = !!items && items.length > 0;
  return (
    <div className="group relative">
      <Link
        href={href}
        className={cn(
          "flex items-center gap-1 rounded-full px-3.5 py-2 text-[0.84rem] font-medium tracking-wide transition-colors",
          active ? "text-terracotta-700" : "text-ink-soft hover:text-ink",
        )}
      >
        {label}
        {hasMenu && (
          <ChevronDown className="h-3.5 w-3.5 transition-transform duration-200 group-hover:rotate-180" />
        )}
      </Link>
      {hasMenu && (
        <div className="invisible absolute left-1/2 top-full z-50 -translate-x-1/2 pt-2 opacity-0 transition-opacity duration-150 group-hover:visible group-hover:opacity-100">
          <div className="grid min-w-[14rem] gap-0.5 rounded-2xl border border-sand-200 bg-cream p-2 shadow-[0_20px_50px_-25px_rgba(58,42,32,0.55)]">
            {items.map((it) => (
              <Link
                key={it.href}
                href={it.href}
                className="rounded-lg px-3 py-2 text-sm text-ink-soft transition-colors hover:bg-sand-100 hover:text-ink"
              >
                {it.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

function MobileMenu({
  onClose,
  isActive,
  t,
}: {
  onClose: () => void;
  isActive: (href: string) => boolean;
  t: ReturnType<typeof useTranslations>;
}) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="fixed inset-0 z-40 lg:hidden"
    >
      <div className="absolute inset-0 bg-sea-900/40 backdrop-blur-sm" onClick={onClose} />
      <motion.div
        initial={{ y: "-100%" }}
        animate={{ y: 0 }}
        exit={{ y: "-100%" }}
        transition={{ type: "spring", stiffness: 220, damping: 28 }}
        className="absolute inset-x-0 top-0 max-h-[92vh] overflow-y-auto rounded-b-[2rem] border-b border-sand-200 bg-cream pb-10 pt-20 shadow-2xl"
      >
        <div className="container-x">
          <SearchBar placeholder={t("searchPlaceholder")} className="flex" />
          <nav className="mt-5 flex flex-col">
            {primaryNav.map((item, i) => (
              <motion.div
                key={item.href}
                initial={{ opacity: 0, x: -16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.06 + i * 0.04 }}
              >
                <Link
                  href={item.href}
                  onClick={onClose}
                  className={cn(
                    "flex items-baseline justify-between border-b border-sand-200 py-4 text-2xl",
                    isActive(item.href) ? "text-terracotta-700" : "text-ink",
                  )}
                >
                  <span>{t(item.labelKey)}</span>
                  <ArrowUpRight className="h-4 w-4 text-terracotta-500" />
                </Link>
              </motion.div>
            ))}
          </nav>
          <Link
            href="/contact"
            onClick={onClose}
            className="mt-7 inline-flex w-full items-center justify-center gap-2 rounded-full bg-clay-700 px-5 py-3.5 text-sm font-semibold text-cream"
          >
            {t("quote")}
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </motion.div>
    </motion.div>
  );
}
