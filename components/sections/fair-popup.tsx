"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { ArrowRight, ArrowUpRight, X } from "lucide-react";

import { Link } from "@/i18n/navigation";
import { FERIA, feriaStandLabel } from "@/lib/data/feria";

const STORAGE_KEY = "feria-360-2026-popup";

/**
 * Eenmalige beurs-popup op de homepage: beurs, data, stand en de knop naar de
 * afspraak. Verschijnt één keer per browser (localStorage); daarna blijft
 * het vlak in de hero (FairBadge) staan. Niet tonen na de laatste beursdag.
 * Verwijderen na 1 okt 2026.
 */
export function FairPopup() {
  const t = useTranslations("feria");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (new Date() > new Date(`${FERIA.end}T23:59:59`)) return;
    try {
      if (window.localStorage.getItem(STORAGE_KEY)) return;
    } catch {
      /* private modus: dan gewoon tonen */
    }
    const id = window.setTimeout(() => setOpen(true), 900);
    return () => window.clearTimeout(id);
  }, []);

  function close() {
    setOpen(false);
    try {
      window.localStorage.setItem(STORAGE_KEY, "1");
    } catch {
      /* geen opslag: volgende keer opnieuw */
    }
  }

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && close();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  if (!open) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="feria-popup-title"
      className="fixed inset-0 z-[90] grid place-items-center bg-ink/60 p-5 backdrop-blur-sm"
      onClick={close}
    >
      <div
        className="relative w-full max-w-md bg-ink text-paper shadow-[0_40px_120px_-30px_rgba(0,0,0,0.9)] ring-1 ring-paper/10"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={close}
          aria-label={t("popupClose")}
          className="absolute right-3 top-3 grid h-9 w-9 place-items-center text-paper/70 transition-colors hover:text-paper"
        >
          <X className="h-4 w-4" />
        </button>
        <div className="p-8 md:p-10">
          <p className="text-[0.62rem] font-medium uppercase tracking-[0.3em] text-terracotta-300">{t("badgeKicker")}</p>
          <Image src={FERIA.logos.fairWhite} alt={FERIA.name} width={171} height={37} className="mt-4 h-9 w-auto" />
          <p className="mt-3 text-sm text-paper/75">{t("alongside")}</p>
          <div className="mt-6 border-t border-paper/15 pt-5">
            <p className="text-[0.78rem] uppercase tracking-[0.2em] text-paper/70">
              {FERIA.venue} · {t("badgeDates")}
            </p>
            <p id="feria-popup-title" className="mt-2 font-display text-4xl leading-none tracking-tight">
              {feriaStandLabel(t("standWord"), t("hallWord"))}
            </p>
          </div>
          <div className="mt-7 flex flex-col gap-3">
            <Link href="/feria#afspraak" onClick={close} className="btn btn-outline-light justify-center">
              {t("popupCta")}
              <ArrowUpRight className="h-4 w-4" />
            </Link>
            <Link
              href="/feria"
              onClick={close}
              className="inline-flex items-center justify-center gap-2 text-[0.72rem] font-medium uppercase tracking-[0.18em] text-paper/85 underline underline-offset-[6px] decoration-paper/40 hover:decoration-paper"
            >
              {t("popupSecondary")}
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
