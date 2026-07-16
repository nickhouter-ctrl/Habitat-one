"use client";

import { useEffect, useState } from "react";
import { useLocale, useTranslations } from "next-intl";
import { AnimatePresence, motion } from "motion/react";
import { ArrowUpRight, CalendarCheck, ChevronDown, Menu, Search, X } from "lucide-react";
import { Link, usePathname, useRouter } from "@/i18n/navigation";
import { catalogSpaces, collections } from "@/lib/data/catalog";
import { services } from "@/lib/data/services";
import { primaryNav } from "@/lib/data/site";
import { LanguageSwitcher } from "@/components/language-switcher";
import { AccountNavButton } from "@/components/account/account-nav-button";
import { Logo } from "@/components/logo";
import { useQuote } from "@/components/quote-context";
import { cn } from "@/lib/utils";

type DropItem = { href: string; label: string };
type DropSection = { title?: string; titleHref?: string; items: DropItem[] };
type MegaMenu = { sections: DropSection[]; footer?: DropItem };
type Locale = "nl" | "en" | "es" | "de" | "fr" | "zh";

export function Header() {
  const t = useTranslations("nav");
  const tProducts = useTranslations("products");
  const tSpaces = useTranslations("spaces");
  const locale = useLocale() as Locale;
  const pathname = usePathname();
  const { items, openQuote } = useQuote();
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

  // ── Range (products) — bredere, gegroepeerde mega-menu (kolommen met kopjes).
  // Elke collectie heeft een eigen pagina: Flexible Stone op /products (primair),
  // andere op /products/{id}.
  const collKeyById = new Map(collections.map((c) => [c.id, c.key] as const));
  const rangeHref = (id: string) => (id === "wall-panels" ? "/products" : `/products/${id}`);
  const rangeLabel = (id: string) => {
    const key = collKeyById.get(id as (typeof collections)[number]["id"]);
    return key ? tProducts(key) : id;
  };
  const RANGE_GROUPS: { key: string; ids: string[] }[] = [
    { key: "groupSurfaces", ids: ["wall-panels", "acrylpanelen", "backer-boards"] },
    { key: "groupFlooring", ids: ["pvc-vloeren"] },
    { key: "groupBathroom", ids: ["bathroom", "accessories"] },
    { key: "groupHeatLight", ids: ["sfeerhaarden", "verlichting", "schakelmateriaal"] },
    { key: "groupGarden", ids: ["bloempotten"] },
    { key: "groupDoors", ids: ["doors"] },
  ];
  const productSections: DropSection[] = [
    ...RANGE_GROUPS.map((g) => ({
      title: tProducts(g.key),
      items: g.ids.map((id) => ({ href: rangeHref(id), label: rangeLabel(id) })),
    })),
    // Meubels — één enkele ingang onder Range (geen eigen tab meer).
    {
      title: tProducts("collectionFurniture"),
      titleHref: "/furniture",
      items: [{ href: "/furniture", label: tProducts("allFurniture") }],
    },
  ];

  const dropdowns: Record<string, DropItem[]> = {
    spaces: catalogSpaces.map((s) => ({
      href: `/spaces/${s.slug}`,
      label: tSpaces(`names.${s.slug}`),
    })),
    inspiration: [
      { href: "/inspiration/events", label: t("inspEvents") },
      { href: "/inspiration", label: t("inspInspireren") },
      { href: "/inspiration/news", label: t("inspNews") },
      { href: "/inspiration/tips", label: t("inspTips") },
      { href: "/inspiration/blog", label: t("inspBlog") },
      { href: "/inspiration/partners", label: t("inspPartners") },
    ],
    services: services
      .map((s) => ({ href: `/services/${s.slug}`, label: s.title[locale] }))
      .sort((a, b) => a.label.localeCompare(b.label, locale)),
  };
  const megaMenus: Record<string, MegaMenu> = {
    products: { sections: productSections, footer: { href: "/products/all", label: tProducts("allProducts") } },
  };

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-ink/10 bg-paper/95 backdrop-blur print:hidden">
        {/* Bovenrij — logo · zoekbalk · taal · offerte */}
        <div className="container-x flex items-center gap-3 py-3 sm:gap-5">
          <Link href="/" aria-label="Habitat One — home" className="shrink-0">
            <Logo dark />
          </Link>

          <SearchBar placeholder={t("searchPlaceholder")} className="hidden flex-1 sm:flex" />

          <div className="ml-auto flex items-center gap-2 sm:ml-0 md:gap-3">
            <LanguageSwitcher dark />
            <AccountNavButton />
            <Link
              href="/showroom"
              className="hidden items-center gap-2 border border-ink px-4 py-2.5 text-[0.72rem] font-medium uppercase tracking-[0.16em] text-ink transition-colors hover:bg-ink hover:text-paper md:inline-flex"
            >
              <CalendarCheck className="h-3.5 w-3.5" />
              {t("bookVisit")}
            </Link>
            <button
              type="button"
              onClick={openQuote}
              className="hidden items-center gap-2 bg-ink px-4 py-2.5 text-[0.72rem] font-medium uppercase tracking-[0.16em] text-paper transition-colors hover:bg-ink-soft md:inline-flex"
            >
              {t("quote")}
              {items.length > 0 ? (
                <span className="grid h-5 min-w-[1.25rem] place-items-center rounded-full bg-paper px-1 text-[0.7rem] font-bold text-ink">
                  {items.length}
                </span>
              ) : (
                <ArrowUpRight className="h-3.5 w-3.5" />
              )}
            </button>
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
                mega={megaMenus[item.labelKey]}
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
            dropdowns={dropdowns}
            megaMenus={megaMenus}
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
  mega,
}: {
  href: string;
  label: string;
  active: boolean;
  items?: DropItem[];
  mega?: MegaMenu;
}) {
  const hasMenu = !!mega || (!!items && items.length > 0);
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
      {mega ? (
        <div className="invisible absolute left-1/2 top-full z-50 -translate-x-1/2 pt-2 opacity-0 transition-opacity duration-150 group-hover:visible group-hover:opacity-100">
          <div className="max-w-[calc(100vw-2rem)] rounded-2xl border border-sand-200 bg-cream p-5 shadow-[0_20px_50px_-25px_rgba(58,42,32,0.55)]">
            <div className="w-[40rem] max-w-[calc(100vw-3rem)] columns-3 gap-x-8 [column-fill:balance]">
              {mega.sections.map((sec, i) => (
                <div key={sec.title ?? i} className="mb-5 break-inside-avoid">
                  {sec.title &&
                    (sec.titleHref ? (
                      <Link
                        href={sec.titleHref}
                        className="mb-2 block text-[0.64rem] font-semibold uppercase tracking-[0.2em] text-ink-soft/70 transition-colors hover:text-terracotta-700"
                      >
                        {sec.title}
                      </Link>
                    ) : (
                      <p className="mb-2 text-[0.64rem] font-semibold uppercase tracking-[0.2em] text-ink-soft/70">{sec.title}</p>
                    ))}
                  <div className="flex flex-col gap-0.5">
                    {sec.items.map((it) => (
                      <Link
                        key={it.href}
                        href={it.href}
                        className="rounded-lg px-2.5 py-1.5 text-sm text-ink-soft transition-colors hover:bg-sand-100 hover:text-ink"
                      >
                        {it.label}
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            {mega.footer && (
              <div className="mt-4 border-t border-sand-200 pt-3">
                <Link
                  href={mega.footer.href}
                  className="inline-flex items-center gap-1.5 px-2.5 text-sm font-medium text-terracotta-700 transition-colors hover:text-terracotta-800"
                >
                  {mega.footer.label}
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            )}
          </div>
        </div>
      ) : (
        hasMenu && (
          <div className="invisible absolute left-1/2 top-full z-50 -translate-x-1/2 pt-2 opacity-0 transition-opacity duration-150 group-hover:visible group-hover:opacity-100">
            <div className="grid min-w-[14rem] gap-0.5 rounded-2xl border border-sand-200 bg-cream p-2 shadow-[0_20px_50px_-25px_rgba(58,42,32,0.55)]">
              {items!.map((it) => (
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
        )
      )}
    </div>
  );
}

function MobileMenu({
  onClose,
  isActive,
  t,
  dropdowns,
  megaMenus,
}: {
  onClose: () => void;
  isActive: (href: string) => boolean;
  t: ReturnType<typeof useTranslations>;
  dropdowns: Record<string, DropItem[]>;
  megaMenus: Record<string, MegaMenu>;
}) {
  const { items, openQuote } = useQuote();
  // Welke menukop staat uitgeklapt (één tegelijk). Standaard dicht.
  const [expanded, setExpanded] = useState<string | null>(null);
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
            {primaryNav.map((item, i) => {
              const sub = dropdowns[item.labelKey];
              const mega = megaMenus[item.labelKey];
              const hasSub = !!mega || (!!sub && sub.length > 0);
              const isOpen = expanded === item.labelKey;
              return (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.06 + i * 0.04 }}
                  className="border-b border-sand-200"
                >
                  {hasSub ? (
                    <>
                      {/* Kop tikt open/dicht i.p.v. meteen door te linken,
                          zodat je op mobiel een categorie kunt kiezen. */}
                      <button
                        type="button"
                        onClick={() =>
                          setExpanded((v) => (v === item.labelKey ? null : item.labelKey))
                        }
                        aria-expanded={isOpen}
                        className={cn(
                          "flex w-full items-center justify-between py-4 text-2xl",
                          isActive(item.href) ? "text-terracotta-700" : "text-ink",
                        )}
                      >
                        <span>{t(item.labelKey)}</span>
                        <ChevronDown
                          className={cn(
                            "h-5 w-5 text-terracotta-500 transition-transform duration-200",
                            isOpen && "rotate-180",
                          )}
                        />
                      </button>
                      <AnimatePresence initial={false}>
                        {isOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.22 }}
                            className="overflow-hidden"
                          >
                            <div className="flex flex-col gap-0.5 pb-3 pl-1">
                              {mega
                                ? mega.sections.map((sec, si) => (
                                    <div key={sec.title ?? si} className="mb-1">
                                      {sec.title &&
                                        (sec.titleHref ? (
                                          <Link
                                            href={sec.titleHref}
                                            onClick={onClose}
                                            className="block px-3 pb-1 pt-2 text-[0.66rem] font-semibold uppercase tracking-[0.18em] text-terracotta-700"
                                          >
                                            {sec.title}
                                          </Link>
                                        ) : (
                                          <p className="px-3 pb-1 pt-2 text-[0.66rem] font-semibold uppercase tracking-[0.18em] text-ink-soft/70">
                                            {sec.title}
                                          </p>
                                        ))}
                                      {sec.items.map((it) => (
                                        <Link
                                          key={it.href}
                                          href={it.href}
                                          onClick={onClose}
                                          className="block rounded-lg px-3 py-2 text-base text-ink-soft transition-colors hover:bg-sand-100 hover:text-ink"
                                        >
                                          {it.label}
                                        </Link>
                                      ))}
                                    </div>
                                  ))
                                : sub.map((it) => (
                                    <Link
                                      key={it.href}
                                      href={it.href}
                                      onClick={onClose}
                                      className="rounded-lg px-3 py-2.5 text-base text-ink-soft transition-colors hover:bg-sand-100 hover:text-ink"
                                    >
                                      {it.label}
                                    </Link>
                                  ))}
                              {mega?.footer && (
                                <Link
                                  href={mega.footer.href}
                                  onClick={onClose}
                                  className="mt-1 block rounded-lg px-3 py-2.5 text-base font-medium text-terracotta-700 transition-colors hover:bg-sand-100"
                                >
                                  {mega.footer.label} →
                                </Link>
                              )}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </>
                  ) : (
                    <Link
                      href={item.href}
                      onClick={onClose}
                      className={cn(
                        "flex items-baseline justify-between py-4 text-2xl",
                        isActive(item.href) ? "text-terracotta-700" : "text-ink",
                      )}
                    >
                      <span>{t(item.labelKey)}</span>
                      <ArrowUpRight className="h-4 w-4 text-terracotta-500" />
                    </Link>
                  )}
                </motion.div>
              );
            })}
          </nav>
          <button
            type="button"
            onClick={() => {
              onClose();
              openQuote();
            }}
            className="mt-7 inline-flex w-full items-center justify-center gap-2 rounded-full bg-clay-700 px-5 py-3.5 text-sm font-semibold text-cream"
          >
            {t("quote")}
            {items.length > 0 ? (
              <span className="grid h-5 min-w-[1.25rem] place-items-center rounded-full bg-cream px-1 text-[0.7rem] font-bold text-clay-800">
                {items.length}
              </span>
            ) : (
              <ArrowUpRight className="h-4 w-4" />
            )}
          </button>
          <Link
            href="/showroom"
            onClick={onClose}
            className="mt-3 inline-flex w-full items-center justify-center gap-2 rounded-full border border-clay-700 px-5 py-3.5 text-sm font-semibold text-clay-800"
          >
            <CalendarCheck className="h-4 w-4" />
            {t("bookVisit")}
          </Link>
        </div>
      </motion.div>
    </motion.div>
  );
}
