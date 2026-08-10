"use client";

// i18n-hulp voor de planner. De catalogus (lib/planner/*, lib/data/metod.ts)
// heeft Nederlandse labels als bron; de vertalingen staan onder het
// "planner"-namespace in messages/*.json, gekeyed op stabiel catalogus-id
// (bv. planner.catalog.finishes.mat-wit). Zolang een key daar nog niet is
// gemerged, valt tf() terug op de meegegeven Nederlandse tekst — zo toont de
// planner nooit rauwe key-paden.

import { useTranslations } from "next-intl";

/** Waarden voor ICU-interpolatie ({w}, {count}, …). */
export type PlannerTranslationValues = Record<string, string | number | Date>;

/**
 * Translator voor het "planner"-namespace.
 *
 * - `t`  — directe next-intl translator (gebruik voor keys die zeker bestaan).
 * - `tf` — vertaalt `key` (relatief aan "planner"); rendert `fallback`
 *          (Nederlands, al geïnterpoleerd) wanneer de key ontbreekt.
 */
export function usePlannerT() {
  const t = useTranslations("planner");
  const tf = (
    key: string,
    fallback: string,
    values?: PlannerTranslationValues,
  ): string => (t.has(key) ? t(key, values) : fallback);
  return { t, tf };
}
