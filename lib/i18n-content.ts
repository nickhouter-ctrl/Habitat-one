import type { Locale } from "@/i18n/routing";

export type Localized<T = string> = Record<Locale, T>;

export function loc<T>(value: Localized<T>, locale: string): T {
  return value[locale as Locale] ?? value.en;
}
