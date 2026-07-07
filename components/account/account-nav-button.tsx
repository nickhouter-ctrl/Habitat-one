"use client";

import { useTranslations } from "next-intl";
import { Tag, User } from "lucide-react";
import { Link } from "@/i18n/navigation";
import { usePrices } from "./price-provider";

/**
 * Header-CTA voor accounts. Uitgelogd → prominente "Bekijk prijzen"-knop (stijl
 * van "Book a visit"); ingelogd → "Mijn account". Op mobiel een compacte icoon-knop.
 */
export function AccountNavButton() {
  const { loggedIn } = usePrices();
  const t = useTranslations("account");
  const href = loggedIn ? "/account" : "/account/aanvragen";
  const label = loggedIn ? t("myAccount") : t("viewPrices");
  const Icon = loggedIn ? User : Tag;

  return (
    <>
      {/* Mobiel: compacte icoon-knop */}
      <Link
        href={href}
        aria-label={label}
        className="grid h-10 w-10 place-items-center rounded-full border border-sand-300 text-ink transition-colors hover:bg-sand-100 md:hidden"
      >
        <Icon className="h-4 w-4" />
      </Link>
      {/* Desktop: gelabelde knop, zelfde stijl als 'Book a visit' */}
      <Link
        href={href}
        className="hidden items-center gap-2 border border-ink px-4 py-2.5 text-[0.72rem] font-medium uppercase tracking-[0.16em] text-ink transition-colors hover:bg-ink hover:text-paper md:inline-flex"
      >
        <Icon className="h-3.5 w-3.5" />
        {label}
      </Link>
    </>
  );
}
