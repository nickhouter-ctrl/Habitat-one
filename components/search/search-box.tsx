"use client";

import { useEffect, useId, useRef, useState } from "react";
import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";
import { ImageOff, Loader2, Search, X } from "lucide-react";
import { Link, useRouter } from "@/i18n/navigation";
import type { SearchHit, SearchResults } from "@/lib/search";
import { cn } from "@/lib/utils";

/** Vanaf hoeveel tekens we gaan zoeken — één letter geeft alleen ruis. */
const MIN_CHARS = 2;

/** Wachten tot het typen even stilvalt; kort genoeg om "meteen" te voelen. */
const DEBOUNCE_MS = 140;

const EMPTY: SearchResults = { query: "", categories: [], products: [], total: 0 };

/**
 * Zoekbalk met suggesties tijdens het typen. Toont categorieën én producten
 * (inclusief meubels) zodra je twee tekens hebt getypt; Enter opent de
 * gemarkeerde suggestie, of anders de volledige resultatenpagina.
 */
export function SearchBox({
  placeholder,
  className,
  initialQuery = "",
  onNavigate,
}: {
  placeholder: string;
  className?: string;
  initialQuery?: string;
  /** Wordt aangeroepen als een suggestie de bezoeker wegnavigeert (menu sluiten). */
  onNavigate?: () => void;
}) {
  const t = useTranslations("search");
  const locale = useLocale();
  const router = useRouter();
  const listId = useId();

  const [query, setQuery] = useState(initialQuery);
  const [results, setResults] = useState<SearchResults>(EMPTY);
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(-1);

  const rootRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const trimmed = query.trim();
  const enabled = trimmed.length >= MIN_CHARS;
  // Categorieën eerst: die brengen je naar een hele lijst i.p.v. één product.
  const hits: SearchHit[] = [...results.categories, ...results.products];

  // Ophalen zodra het typen even stilvalt. Een oudere vlucht wordt afgebroken,
  // zodat een traag antwoord nooit een nieuwer resultaat overschrijft. Bij minder
  // dan MIN_CHARS doen we niets: het paneel is dan toch verborgen (showPanel).
  useEffect(() => {
    if (!enabled) return;
    const controller = new AbortController();
    const timer = setTimeout(() => {
      setLoading(true);
      fetch(`/api/search?q=${encodeURIComponent(trimmed)}&locale=${locale}`, {
        signal: controller.signal,
      })
        .then((r) => (r.ok ? (r.json() as Promise<SearchResults>) : EMPTY))
        .then((data) => {
          setResults(data);
          setActive(-1);
        })
        .catch(() => {
          // Afgebroken vlucht of netwerkfout — de bestaande lijst laten staan is
          // rustiger dan hem laten knipperen; de volgende toetsaanslag herstelt.
        })
        .finally(() => {
          if (!controller.signal.aborted) setLoading(false);
        });
    }, DEBOUNCE_MS);

    return () => {
      controller.abort();
      clearTimeout(timer);
    };
  }, [trimmed, enabled, locale]);

  // Klik buiten de zoekbalk sluit de suggesties.
  useEffect(() => {
    if (!open) return;
    const onPointerDown = (e: PointerEvent) => {
      if (!rootRef.current?.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("pointerdown", onPointerDown);
    return () => document.removeEventListener("pointerdown", onPointerDown);
  }, [open]);

  function go(href: string) {
    setOpen(false);
    onNavigate?.();
    router.push(href);
  }

  function submit() {
    if (active >= 0 && hits[active]) {
      go(hits[active].href);
      return;
    }
    if (trimmed) go(`/search?q=${encodeURIComponent(trimmed)}`);
  }

  function onKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === "ArrowDown" || e.key === "ArrowUp") {
      if (hits.length === 0) return;
      e.preventDefault();
      setOpen(true);
      setActive((i) => {
        const next = e.key === "ArrowDown" ? i + 1 : i - 1;
        // Voorbij de randen terug naar "niets gemarkeerd": Enter zoekt dan
        // gewoon op de getypte tekst.
        if (next < -1) return hits.length - 1;
        if (next >= hits.length) return -1;
        return next;
      });
    } else if (e.key === "Escape") {
      setOpen(false);
      setActive(-1);
    }
  }

  const showPanel = open && enabled;

  return (
    <div ref={rootRef} className={cn("relative", className)}>
      <form
        role="search"
        onSubmit={(e) => {
          e.preventDefault();
          submit();
        }}
        className="flex items-center gap-2.5 rounded-full border border-sand-300 bg-white px-4 py-2.5 transition-colors focus-within:border-terracotta-400"
      >
        <Search className="h-4 w-4 shrink-0 text-ink-soft" />
        <input
          ref={inputRef}
          name="q"
          type="text"
          role="combobox"
          aria-expanded={showPanel}
          aria-controls={listId}
          aria-autocomplete="list"
          aria-activedescendant={active >= 0 ? `${listId}-${active}` : undefined}
          autoComplete="off"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setOpen(true);
          }}
          onFocus={() => setOpen(true)}
          onKeyDown={onKeyDown}
          placeholder={placeholder}
          aria-label={placeholder}
          className="w-full min-w-0 bg-transparent text-sm text-ink outline-none placeholder:text-ink-soft/70"
        />
        {loading && <Loader2 className="h-4 w-4 shrink-0 animate-spin text-ink-soft/60" />}
        {!loading && query && (
          <button
            type="button"
            onClick={() => {
              setQuery("");
              setResults(EMPTY);
              inputRef.current?.focus();
            }}
            aria-label={t("clear")}
            className="shrink-0 text-ink-soft/60 transition-colors hover:text-ink"
          >
            <X className="h-4 w-4" />
          </button>
        )}
      </form>

      {showPanel && (
        <div
          id={listId}
          role="listbox"
          className="absolute left-0 right-0 top-full z-50 mt-2 max-h-[70vh] overflow-y-auto overscroll-contain rounded-2xl border border-sand-200 bg-cream p-2 shadow-[0_20px_50px_-25px_rgba(58,42,32,0.55)]"
        >
          {hits.length === 0 ? (
            <p className="px-3 py-6 text-center text-sm text-ink-soft">
              {loading ? t("searching") : t("noResults", { query: trimmed })}
            </p>
          ) : (
            <>
              {results.categories.length > 0 && (
                <>
                  <p className="px-3 pb-1 pt-2 text-[0.62rem] font-semibold uppercase tracking-[0.2em] text-ink-soft/60">
                    {t("categories")}
                  </p>
                  {results.categories.map((hit, i) => (
                    <Row
                      key={hit.href}
                      id={`${listId}-${i}`}
                      hit={hit}
                      active={active === i}
                      onHover={() => setActive(i)}
                      onSelect={() => go(hit.href)}
                    />
                  ))}
                </>
              )}

              {results.products.length > 0 && (
                <>
                  <p className="px-3 pb-1 pt-3 text-[0.62rem] font-semibold uppercase tracking-[0.2em] text-ink-soft/60">
                    {t("products")}
                  </p>
                  {results.products.map((hit, i) => {
                    const index = results.categories.length + i;
                    return (
                      <Row
                        key={hit.href}
                        id={`${listId}-${index}`}
                        hit={hit}
                        active={active === index}
                        onHover={() => setActive(index)}
                        onSelect={() => go(hit.href)}
                      />
                    );
                  })}
                </>
              )}

              {results.total > results.products.length && (
                <Link
                  href={`/search?q=${encodeURIComponent(trimmed)}`}
                  onClick={() => {
                    setOpen(false);
                    onNavigate?.();
                  }}
                  className="mt-2 block border-t border-sand-200 px-3 pb-1 pt-3 text-sm font-medium text-terracotta-700 transition-colors hover:text-clay-700"
                >
                  {t("allResults", { count: results.total })}
                </Link>
              )}
            </>
          )}
        </div>
      )}
    </div>
  );
}

function Row({
  id,
  hit,
  active,
  onHover,
  onSelect,
}: {
  id: string;
  hit: SearchHit;
  active: boolean;
  onHover: () => void;
  onSelect: () => void;
}) {
  return (
    <button
      id={id}
      type="button"
      role="option"
      aria-selected={active}
      onMouseEnter={onHover}
      onClick={onSelect}
      className={cn(
        "flex w-full items-center gap-3 rounded-xl px-3 py-2 text-left transition-colors",
        active ? "bg-sand-100" : "hover:bg-sand-100/60",
      )}
    >
      {hit.kind === "product" && (
        <span className="relative h-12 w-10 shrink-0 overflow-hidden rounded-md bg-sand-100">
          {hit.image ? (
            <Image src={hit.image} alt="" fill sizes="40px" className="object-cover" />
          ) : (
            <ImageOff className="absolute left-1/2 top-1/2 h-4 w-4 -translate-x-1/2 -translate-y-1/2 text-ink-soft/40" />
          )}
        </span>
      )}
      <span className="min-w-0">
        <span className="block truncate text-sm text-ink">{hit.title}</span>
        {hit.subtitle && (
          <span className="block truncate text-xs text-ink-soft/70">{hit.subtitle}</span>
        )}
      </span>
    </button>
  );
}
