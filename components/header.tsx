"use client";

import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import { AnimatePresence, motion } from "motion/react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { Link, usePathname } from "@/i18n/navigation";
import { primaryNav } from "@/lib/data/site";
import { LanguageSwitcher } from "@/components/language-switcher";
import { Logo } from "@/components/logo";
import { cn } from "@/lib/utils";

export function Header() {
  const t = useTranslations("nav");
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const solid = scrolled || !isHome;
  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-[background-color,backdrop-filter,box-shadow,border-color] duration-500",
          solid
            ? "border-b border-sand-200/80 bg-cream/85 shadow-[0_10px_40px_-30px_rgba(84,48,31,0.6)] backdrop-blur-xl"
            : "border-b border-transparent bg-transparent",
        )}
      >
        <div className="container-x flex h-[68px] items-center justify-between gap-4 md:h-[76px]">
          <Link href="/" aria-label="Habitat One — home" className="shrink-0">
            <Logo dark={solid} />
          </Link>

          <nav className="hidden items-center gap-1 lg:flex">
            {primaryNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "relative rounded-full px-3 py-2 text-[0.82rem] font-medium tracking-wide transition-colors duration-300",
                  solid
                    ? isActive(item.href)
                      ? "text-terracotta-700"
                      : "text-ink-soft hover:text-ink"
                    : isActive(item.href)
                      ? "text-cream"
                      : "text-cream/75 hover:text-cream",
                )}
              >
                {t(item.labelKey)}
                {isActive(item.href) && (
                  <motion.span
                    layoutId="nav-active"
                    className={cn(
                      "absolute inset-x-3 -bottom-[3px] h-[2px] rounded-full",
                      solid ? "bg-terracotta-500" : "bg-cream",
                    )}
                  />
                )}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2 md:gap-3">
            <LanguageSwitcher dark={solid} />
            <Link
              href="/contact"
              className={cn(
                "hidden items-center gap-1.5 rounded-full px-4 py-2 text-[0.8rem] font-semibold tracking-wide transition-all duration-300 md:inline-flex",
                solid
                  ? "bg-clay-700 text-cream hover:bg-clay-800"
                  : "bg-cream/95 text-clay-800 hover:bg-cream",
              )}
            >
              {t("quote")}
              <ArrowUpRight className="h-3.5 w-3.5" />
            </Link>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-label={open ? t("close") : t("openMenu")}
              aria-expanded={open}
              className={cn(
                "grid h-10 w-10 place-items-center rounded-full border transition-colors duration-300 lg:hidden",
                solid
                  ? "border-sand-300 text-ink hover:bg-sand-100"
                  : "border-cream/40 text-cream hover:bg-cream/10",
              )}
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {open && <MobileMenu onClose={() => setOpen(false)} isActive={isActive} t={t} />}
      </AnimatePresence>
    </>
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
        className="absolute inset-x-0 top-0 max-h-[92vh] overflow-y-auto rounded-b-[2rem] border-b border-sand-200 bg-cream pb-10 pt-24 shadow-2xl"
      >
        <div className="container-x">
          <nav className="flex flex-col">
            {primaryNav.map((item, i) => (
              <motion.div
                key={item.href}
                initial={{ opacity: 0, x: -16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.08 + i * 0.045 }}
              >
                <Link
                  href={item.href}
                  onClick={onClose}
                  className={cn(
                    "font-display flex items-baseline justify-between border-b border-sand-200 py-4 text-2xl",
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
