"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { useTranslations } from "next-intl";
import { Lock, X } from "lucide-react";
import { Link } from "@/i18n/navigation";
import { usePrices } from "./price-provider";

const KEY = "h1-price-popup";
// Niet opnieuw tonen binnen 30 dagen nadat de bezoeker 'm heeft weggeklikt of
// naar de account-pagina is gegaan.
const MAX_AGE_MS = 30 * 24 * 60 * 60 * 1000;
// Korte vertraging zodat de popup niet bovenop het laden van de pagina springt.
const SHOW_DELAY_MS = 1400;

function remember() {
  try {
    localStorage.setItem(KEY, JSON.stringify({ t: Date.now() }));
  } catch {
    /* private mode e.d. — negeren */
  }
}

function dismissedRecently(): boolean {
  try {
    const raw = localStorage.getItem(KEY);
    if (!raw) return false;
    const p = JSON.parse(raw) as { t?: number };
    return typeof p?.t === "number" && Date.now() - p.t < MAX_AGE_MS;
  } catch {
    return false;
  }
}

/**
 * Eenmalige popup die uitgelogde bezoekers uitnodigt een account aan te maken om
 * de prijzen te zien. Verschijnt na een korte vertraging, wordt 30 dagen
 * onthouden, en nooit getoond aan ingelogde bezoekers of op de account-pagina's.
 * Gemount binnen <PriceProvider> zodat de login-status bekend is.
 */
export function PricePopup() {
  const { loggedIn, loading } = usePrices();
  const t = useTranslations("account");
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const onAccountPage = pathname?.includes("/account");

  useEffect(() => {
    if (loading || loggedIn || onAccountPage) return;
    if (dismissedRecently()) return;
    const id = setTimeout(() => setOpen(true), SHOW_DELAY_MS);
    return () => clearTimeout(id);
  }, [loading, loggedIn, onAccountPage]);

  useEffect(() => {
    if (!open) return;
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") {
        remember();
        setOpen(false);
      }
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  function close() {
    remember();
    setOpen(false);
  }

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[70] flex items-center justify-center bg-clay-900/60 p-4 backdrop-blur-sm"
      onClick={close}
      role="dialog"
      aria-modal="true"
      aria-labelledby="price-popup-title"
    >
      <div
        className="relative w-full max-w-md overflow-hidden rounded-3xl border border-sand-200 bg-cream p-7 text-center font-sans shadow-[0_20px_80px_-30px_rgba(58,42,32,0.45)]"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          aria-label={t("popupClose")}
          onClick={close}
          className="absolute right-4 top-4 grid h-9 w-9 place-items-center rounded-full text-clay-700 transition-colors hover:bg-sand-200"
        >
          <X className="h-5 w-5" />
        </button>

        <div className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-terracotta-600/10 text-terracotta-600">
          <Lock className="h-6 w-6" />
        </div>

        <p className="mt-5 text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-terracotta-600">
          {t("popupEyebrow")}
        </p>
        <h3 id="price-popup-title" className="mt-2 font-sans text-xl font-semibold leading-snug tracking-tight text-ink">
          {t("popupTitle")}
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-clay-700">{t("popupBody")}</p>

        <div className="mt-6 flex flex-col gap-2">
          <Link href="/account/aanvragen" onClick={close} className="btn btn-primary w-full justify-center">
            {t("popupCta")}
          </Link>
          <Link
            href="/account/login"
            onClick={close}
            className="text-sm font-medium text-clay-700 underline underline-offset-2 transition-colors hover:text-ink"
          >
            {t("popupLogin")}
          </Link>
        </div>

        <p className="mt-5 text-xs text-clay-500">{t("popupNote")}</p>
      </div>
    </div>
  );
}
