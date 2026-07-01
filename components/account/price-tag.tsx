"use client";

import { useLocale } from "next-intl";
import { Lock } from "lucide-react";
import { Link } from "@/i18n/navigation";
import { usePrices } from "./price-provider";

function fmt(n: number, locale: string) {
  return new Intl.NumberFormat(locale === "en" ? "en-IE" : `${locale}-ES`, {
    style: "currency",
    currency: "EUR",
    minimumFractionDigits: 2,
  }).format(n);
}

/**
 * Toont de prijs (ex. btw) voor de ingelogde klant, of — uitgelogd — een subtiele
 * "prijs met account"-melding die naar de accountaanvraag linkt.
 */
export function PriceTag({
  sku,
  className = "",
  asLink = true,
}: {
  sku?: string | null;
  className?: string;
  /** false binnen een product-<Link> (voorkomt geneste anchors). */
  asLink?: boolean;
}) {
  const locale = useLocale();
  const { loggedIn, prices, loading } = usePrices();

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

  const p = sku ? prices[sku] : undefined;
  if (!p) return <span className={`text-xs text-neutral-400 ${className}`}>Prijs op aanvraag</span>;

  return (
    <span className={`font-semibold text-neutral-900 ${className}`}>
      {fmt(p.price, locale)} <span className="text-xs font-normal text-neutral-500">excl. btw</span>
    </span>
  );
}
