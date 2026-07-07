"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { useLocale } from "next-intl";
import { Lock, X } from "lucide-react";
import { Link } from "@/i18n/navigation";
import { usePrices } from "./price-provider";

const KEY = "h1-price-popup";
// Niet opnieuw tonen binnen 30 dagen nadat de bezoeker 'm heeft weggeklikt of
// naar de account-pagina is gegaan.
const MAX_AGE_MS = 30 * 24 * 60 * 60 * 1000;
// Korte vertraging zodat de popup niet bovenop het laden van de pagina springt.
const SHOW_DELAY_MS = 1400;

type Copy = { eyebrow: string; title: string; body: string; cta: string; login: string; close: string; note: string };

const TXT: Record<string, Copy> = {
  nl: {
    eyebrow: "Alleen voor klanten",
    title: "Maak een account aan om de prijzen te zien",
    body: "Onze prijzen zijn zichtbaar voor klanten met een (gratis) account. Vraag er één aan — particulier of zakelijk — en bekijk direct alle prijzen.",
    cta: "Account aanvragen",
    login: "Ik heb al een account",
    close: "Sluiten",
    note: "Gratis · binnen 1 werkdag geregeld",
  },
  en: {
    eyebrow: "Customers only",
    title: "Create an account to see prices",
    body: "Our prices are visible to customers with a (free) account. Request one — private or business — and see all prices right away.",
    cta: "Request an account",
    login: "I already have an account",
    close: "Close",
    note: "Free · sorted within 1 business day",
  },
  de: {
    eyebrow: "Nur für Kunden",
    title: "Konto erstellen, um Preise zu sehen",
    body: "Unsere Preise sind für Kunden mit einem (kostenlosen) Konto sichtbar. Beantragen Sie eins — privat oder geschäftlich — und sehen Sie sofort alle Preise.",
    cta: "Konto anfragen",
    login: "Ich habe bereits ein Konto",
    close: "Schließen",
    note: "Kostenlos · innerhalb von 1 Werktag",
  },
  es: {
    eyebrow: "Solo clientes",
    title: "Crea una cuenta para ver los precios",
    body: "Nuestros precios son visibles para clientes con una cuenta (gratuita). Solicita una — particular o empresa — y consulta todos los precios al instante.",
    cta: "Solicitar cuenta",
    login: "Ya tengo una cuenta",
    close: "Cerrar",
    note: "Gratis · resuelto en 1 día laborable",
  },
};

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
  const locale = useLocale();
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const t = TXT[locale] ?? TXT.en;

  const onAccountPage = pathname?.includes("/account");

  useEffect(() => {
    if (loading || loggedIn || onAccountPage) return;
    if (dismissedRecently()) return;
    const id = setTimeout(() => setOpen(true), SHOW_DELAY_MS);
    return () => clearTimeout(id);
  }, [loading, loggedIn, onAccountPage]);

  function remember() {
    try {
      localStorage.setItem(KEY, JSON.stringify({ t: Date.now() }));
    } catch {
      /* private mode e.d. — negeren */
    }
  }

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
    >
      <div
        className="relative w-full max-w-md overflow-hidden rounded-3xl border border-sand-200 bg-cream p-7 text-center font-sans shadow-[0_20px_80px_-30px_rgba(58,42,32,0.45)]"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          aria-label={t.close}
          onClick={close}
          className="absolute right-4 top-4 grid h-9 w-9 place-items-center rounded-full text-clay-700 transition-colors hover:bg-sand-200"
        >
          <X className="h-5 w-5" />
        </button>

        <div className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-terracotta-600/10 text-terracotta-600">
          <Lock className="h-6 w-6" />
        </div>

        <p className="mt-5 text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-terracotta-600">
          {t.eyebrow}
        </p>
        <h3 className="mt-2 font-display text-2xl leading-snug text-ink">{t.title}</h3>
        <p className="mt-3 text-sm leading-relaxed text-clay-700">{t.body}</p>

        <div className="mt-6 flex flex-col gap-2">
          <Link href="/account/aanvragen" onClick={close} className="btn btn-primary w-full justify-center">
            {t.cta}
          </Link>
          <Link
            href="/account/login"
            onClick={close}
            className="text-sm font-medium text-clay-700 underline underline-offset-2 transition-colors hover:text-ink"
          >
            {t.login}
          </Link>
        </div>

        <p className="mt-5 text-xs text-clay-500">{t.note}</p>
      </div>
    </div>
  );
}
