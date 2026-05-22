"use client";

// Offerte-mandje: de klant verzamelt meerdere producten en vraagt er in één
// keer een offerte voor aan. State is client-side en blijft bewaard in
// localStorage, zodat het mandje een herlaadbeurt overleeft.

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

export interface QuoteItem {
  slug: string;
  name: string;
  sku: string | null;
}

interface QuoteContextValue {
  items: QuoteItem[];
  addItem: (item: QuoteItem) => void;
  removeItem: (slug: string) => void;
  clearItems: () => void;
  hasItem: (slug: string) => boolean;
  isOpen: boolean;
  openQuote: () => void;
  closeQuote: () => void;
}

const QuoteContext = createContext<QuoteContextValue | null>(null);
const STORAGE_KEY = "habitat-one-quote";

export function QuoteProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<QuoteItem[]>([]);
  const [isOpen, setOpen] = useState(false);

  // Eenmalig hydrateren uit localStorage — kan alleen client-side, na mount.
  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw);
        // eslint-disable-next-line react-hooks/set-state-in-effect
        if (Array.isArray(parsed)) setItems(parsed);
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
      addItem: (item) =>
        setItems((cur) => (cur.some((i) => i.slug === item.slug) ? cur : [...cur, item])),
      removeItem: (slug) => setItems((cur) => cur.filter((i) => i.slug !== slug)),
      clearItems: () => setItems([]),
      hasItem: (slug) => items.some((i) => i.slug === slug),
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
