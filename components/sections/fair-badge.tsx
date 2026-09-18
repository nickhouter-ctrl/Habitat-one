"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { ArrowUpRight } from "lucide-react";

import { Link } from "@/i18n/navigation";
import { FERIA, feriaStandLabel } from "@/lib/data/feria";

/**
 * Beursvlak in de homepage-hero — meteen zichtbaar bij binnenkomst: logo van
 * de beurs, data en het standnummer, met één klik naar /feria (info + afspraak).
 * Zwart vlak, zodat het op elke foto leesbaar is. Verwijderen na 1 okt 2026.
 */
export function FairBadge() {
  const t = useTranslations("feria");
  return (
    <Link
      href="/feria"
      className="group absolute inset-x-5 top-24 z-20 block bg-ink/92 text-paper shadow-[0_20px_60px_-25px_rgba(0,0,0,0.8)] ring-1 ring-paper/10 backdrop-blur-sm sm:inset-x-auto sm:right-8 sm:top-28 sm:w-[19rem] md:right-10 md:top-32"
    >
      <div className="p-5 md:p-6">
        <p className="text-[0.62rem] font-medium uppercase tracking-[0.3em] text-terracotta-300">{t("badgeKicker")}</p>
        <Image
          src={FERIA.logos.fairWhite}
          alt={FERIA.name}
          width={171}
          height={37}
          className="mt-3 h-7 w-auto"
        />
        <p className="mt-3 text-[0.78rem] text-paper/80">
          {FERIA.venue} · {t("badgeDates")}
        </p>
        <p className="mt-3 font-display text-3xl leading-none tracking-tight text-paper">
          {feriaStandLabel(t("standWord"), t("hallWord"))}
        </p>
        <span className="mt-4 inline-flex items-center gap-2 text-[0.7rem] font-medium uppercase tracking-[0.18em] text-paper underline underline-offset-[6px] decoration-paper/40 group-hover:decoration-paper">
          {t("badgeCta")}
          <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </span>
      </div>
    </Link>
  );
}
