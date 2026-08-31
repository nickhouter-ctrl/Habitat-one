"use client";

import { useTranslations } from "next-intl";
import { LogIn, Tag, User } from "lucide-react";
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
      {/* Inloggen hoort zichtbaar in de header: wie al een account heeft vond de
          loginpagina alleen via een regeltje onderaan het aanvraagformulier.
          Bewust een tekstlink en geen vierde knop — "Bekijk prijzen" blijft de
          primaire actie. Onder md neemt het mobiele menu dit over. */}
      {!loggedIn && (
        <Link
          href="/account/login"
          className="hidden items-center gap-1.5 text-[0.72rem] font-medium uppercase tracking-[0.16em] text-ink-soft transition-colors hover:text-ink md:inline-flex"
        >
          <LogIn className="h-3.5 w-3.5" />
          {t("login")}
        </Link>
      )}
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

/**
 * Volwaardige regel in het mobiele menu. De icoon-knop in de header is daar te
 * stil om als "inloggen" gelezen te worden.
 */
export function AccountMenuLink({ onClose }: { onClose: () => void }) {
  const { loggedIn } = usePrices();
  const t = useTranslations("account");
  const Icon = loggedIn ? User : LogIn;
  return (
    <Link
      href={loggedIn ? "/account" : "/account/login"}
      onClick={onClose}
      className="mt-3 inline-flex w-full items-center justify-center gap-2 rounded-full border border-clay-700/35 px-5 py-3.5 text-sm font-semibold text-clay-800"
    >
      <Icon className="h-4 w-4" />
      {loggedIn ? t("myAccount") : t("login")}
    </Link>
  );
}

/**
 * Accountlink voor de voettekst — de tweede plek waar mensen naar een login
 * zoeken. De opmaak komt van de aanroeper, zodat hij bij de kolom past.
 */
export function AccountLink({ className }: { className?: string }) {
  const { loggedIn } = usePrices();
  const t = useTranslations("account");
  return (
    <Link href={loggedIn ? "/account" : "/account/login"} className={className}>
      {loggedIn ? t("myAccount") : t("login")}
    </Link>
  );
}
