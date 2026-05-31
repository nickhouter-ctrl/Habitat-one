"use client";

// Offerte-mandje: de klant verzamelt meerdere producten (per kleur/variant, met
// aantal) en vraagt er in één keer een offerte voor aan. State is client-side en
// blijft bewaard in localStorage, zodat het mandje een herlaadbeurt overleeft.

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

export interface QuoteItem {
  /** Uniek per product + variant, zodat meerdere kleuren naast elkaar kunnen. */
  key: string;
  slug: string;
  name: string;
  /** Kleur/variantnaam, indien gekozen. */
  variant: string | null;
  /** Variant-SKU (valt terug op de basis-SKU als er geen variant is). */
  sku: string | null;
  qty: number;
}

/** Wat aanroepers meegeven; key/qty worden afgeleid/aangevuld. */
type QuoteInput = {
  slug: string;
  name: string;
  variant?: string | null;
  sku?: string | null;
  qty?: number;
};

interface QuoteContextValue {
  items: QuoteItem[];
  addItem: (item: QuoteInput) => void;
  removeItem: (key: string) => void;
  setQty: (key: string, qty: number) => void;
  clearItems: () => void;
  /** True als er een regel voor dit product (welke kleur dan ook) in zit. */
  hasItem: (slug: string) => boolean;
  /** True als precies deze variant (kleur/SKU) al in het mandje zit. */
  hasVariant: (item: { slug: string; sku?: string | null; variant?: string | null }) => boolean;
  count: number;
  isOpen: boolean;
  openQuote: () => void;
  closeQuote: () => void;
}

const QuoteContext = createContext<QuoteContextValue | null>(null);
const STORAGE_KEY = "habitat-one-quote";

function keyFor(slug: string, sku?: string | null, variant?: string | null): string {
  return `${slug}::${sku ?? variant ?? "default"}`;
}

/** Normaliseer (ook oude opslag zonder key/qty/variant) naar het huidige model. */
function normalize(raw: unknown): QuoteItem[] {
  if (!Array.isArray(raw)) return [];
  const out: QuoteItem[] = [];
  for (const r of raw) {
    if (!r || typeof r !== "object") continue;
    const o = r as Record<string, unknown>;
    if (typeof o.slug !== "string" || typeof o.name !== "string") continue;
    const variant = typeof o.variant === "string" ? o.variant : null;
    const sku = typeof o.sku === "string" ? o.sku : null;
    const qty = typeof o.qty === "number" && o.qty > 0 ? Math.floor(o.qty) : 1;
    const key = typeof o.key === "string" ? o.key : keyFor(o.slug, sku, variant);
    if (out.some((i) => i.key === key)) continue;
    out.push({ key, slug: o.slug, name: o.name, variant, sku, qty });
  }
  return out;
}

export function QuoteProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<QuoteItem[]>([]);
  const [isOpen, setOpen] = useState(false);

  // Eenmalig hydrateren uit localStorage — kan alleen client-side, na mount.
  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setItems(normalize(JSON.parse(raw)));
      }
    } catch {
      /* localStorage niet beschikbaar — negeren */
    }
  }, []);

  // Bewaren bij elke wijziging.
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    } catch {
      /* negeren */
    }
  }, [items]);

  const value = useMemo<QuoteContextValue>(
    () => ({
      items,
      addItem: (input) =>
        setItems((cur) => {
          const key = keyFor(input.slug, input.sku, input.variant);
          const add = input.qty && input.qty > 0 ? Math.floor(input.qty) : 1;
          const existing = cur.find((i) => i.key === key);
          if (existing) {
            return cur.map((i) => (i.key === key ? { ...i, qty: i.qty + add } : i));
          }
          return [
            ...cur,
            {
              key,
              slug: input.slug,
              name: input.name,
              variant: input.variant ?? null,
              sku: input.sku ?? null,
              qty: add,
            },
          ];
        }),
      removeItem: (key) => setItems((cur) => cur.filter((i) => i.key !== key)),
      setQty: (key, qty) =>
        setItems((cur) =>
          cur.map((i) => (i.key === key ? { ...i, qty: Math.max(1, Math.floor(qty) || 1) } : i)),
        ),
      clearItems: () => setItems([]),
      hasItem: (slug) => items.some((i) => i.slug === slug),
      hasVariant: (item) =>
        items.some((i) => i.key === keyFor(item.slug, item.sku, item.variant)),
      count: items.reduce((n, i) => n + i.qty, 0),
      isOpen,
      openQuote: () => setOpen(true),
      closeQuote: () => setOpen(false),
    }),
    [items, isOpen],
  );

  return <QuoteContext.Provider value={value}>{children}</QuoteContext.Provider>;
}

export function useQuote(): QuoteContextValue {
  const ctx = useContext(QuoteContext);
  if (!ctx) throw new Error("useQuote moet binnen <QuoteProvider> gebruikt worden");
  return ctx;
}
