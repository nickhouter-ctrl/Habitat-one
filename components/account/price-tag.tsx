"use client";

import { useLocale } from "next-intl";
import { Lock } from "lucide-react";
import { Link } from "@/i18n/navigation";
import { usePrices, resolvePrice } from "./price-provider";

function fmt(n: number, locale: string) {
  return new Intl.NumberFormat(locale === "en" ? "en-IE" : `${locale}-ES`, {
    style: "currency",
    currency: "EUR",
    minimumFractionDigits: 2,
  }).format(n);
}

/** Nette psychologische prijs: rond naar het dichtstbijzijnde hele bedrag en eindig op ,95. */
function charm(n: number): number {
  if (n < 1) return Math.round(n * 100) / 100;
  return Math.round(n) - 0.05;
}

/**
 * Toont de prijs (ex. btw) voor de ingelogde klant, of — uitgelogd — een subtiele
 * "prijs met account"-melding die naar de accountaanvraag linkt.
 */
export function PriceTag({
  sku,
  name,
  className = "",
  asLink = true,
}: {
  sku?: string | null;
  /** Productnaam voor de op-naam-fallback (bv. Flexibel Stone zonder SKU-match). */
  name?: string | null;
  className?: string;
  /** false binnen een product-<Link> (voorkomt geneste anchors). */
  asLink?: boolean;
}) {
  const locale = useLocale();
  const state = usePrices();
  const { loggedIn, tier, loading } = state;

  if (loading) return <span className={`inline-block h-4 w-16 animate-pulse rounded bg-black/5 ${className}`} aria-hidden />;

  if (!loggedIn) {
    const inner = (
      <span className="inline-flex items-center gap-1 text-xs font-medium text-neutral-500">
        <Lock className="h-3 w-3" /> Prijs met account
      </span>
    );
    return asLink ? (
      <Link href="/account/aanvragen" className={`hover:text-neutral-800 ${className}`}>
        {inner}
      </Link>
    ) : (
      <span className={className}>{inner}</span>
    );
  }

  const p = resolvePrice(state, sku, name);
  if (!p || !(p.price > 0)) return <span className={`text-xs text-neutral-400 ${className}`}>Prijs op aanvraag</span>;

  // Particulier ziet incl. btw (charm-prijs op ,95), zakelijk (aannemer) ziet excl. btw (exact).
  const incl = tier === "particulier";
  const shown = incl ? charm(p.price * (1 + p.vat / 100)) : p.price;

  return (
    <span className={`font-semibold text-neutral-900 ${className}`}>
      {fmt(shown, locale)} <span className="text-xs font-normal text-neutral-500">{incl ? "incl. btw" : "excl. btw"}</span>
    </span>
  );
}
