"use client";

import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import { usePathname } from "next/navigation";

type PriceMap = Record<string, { price: number; vat: number }>;
type State = { loggedIn: boolean; tier: string | null; prices: PriceMap; byName: PriceMap; loading: boolean };

const PriceCtx = createContext<State>({ loggedIn: false, tier: null, prices: {}, byName: {}, loading: true });

export function PriceProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState<State>({ loggedIn: false, tier: null, prices: {}, byName: {}, loading: true });
  const pathname = usePathname();
  // Bij elke navigatie opnieuw ophalen (zodat prijzen verschijnen zodra je inlogt,
  // ook al is de provider al gemount). Geen loading-flikkering na de eerste keer.
  useEffect(() => {
    let alive = true;
    fetch("/api/account/prices", { credentials: "same-origin" })
      .then((r) => r.json())
      .then((d) => {
        if (alive)
          setState({ loggedIn: !!d.loggedIn, tier: d.tier ?? null, prices: d.prices ?? {}, byName: d.byName ?? {}, loading: false });
      })
      .catch(() => alive && setState((s) => ({ ...s, loading: false })));
    return () => {
      alive = false;
    };
  }, [pathname]);
  return <PriceCtx.Provider value={state}>{children}</PriceCtx.Provider>;
}

export function usePrices() {
  return useContext(PriceCtx);
}

/** Zoek een prijs: eerst op SKU, anders op (genormaliseerde) productnaam. */
export function resolvePrice(
  state: Pick<State, "prices" | "byName">,
  sku?: string | null,
  name?: string | null,
): { price: number; vat: number } | undefined {
  if (sku && state.prices[sku]) return state.prices[sku];
  if (name) {
    const key = name.trim().toLowerCase();
    if (state.byName[key]) return state.byName[key];
  }
  return undefined;
}
