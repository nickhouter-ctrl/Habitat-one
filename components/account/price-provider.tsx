"use client";

import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

type PriceMap = Record<string, { price: number; vat: number }>;
type State = { loggedIn: boolean; tier: string | null; prices: PriceMap; loading: boolean };

const PriceCtx = createContext<State>({ loggedIn: false, tier: null, prices: {}, loading: true });

export function PriceProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState<State>({ loggedIn: false, tier: null, prices: {}, loading: true });
  useEffect(() => {
    let alive = true;
    fetch("/api/account/prices", { credentials: "same-origin" })
      .then((r) => r.json())
      .then((d) => {
        if (alive) setState({ loggedIn: !!d.loggedIn, tier: d.tier ?? null, prices: d.prices ?? {}, loading: false });
      })
      .catch(() => alive && setState((s) => ({ ...s, loading: false })));
    return () => {
      alive = false;
    };
  }, []);
  return <PriceCtx.Provider value={state}>{children}</PriceCtx.Provider>;
}

export function usePrices() {
  return useContext(PriceCtx);
}
