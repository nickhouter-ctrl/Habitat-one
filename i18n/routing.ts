import { defineRouting } from "next-intl/routing";

export const locales = ["en", "nl", "es", "de"] as const;
export type Locale = (typeof locales)[number];

export const localeNames: Record<Locale, string> = {
  en: "English",
  nl: "Nederlands",
  es: "Español",
  de: "Deutsch",
};

export const localeFlags: Record<Locale, string> = {
  en: "🇬🇧",
  nl: "🇳🇱",
  es: "🇪🇸",
  de: "🇩🇪",
};

export const routing = defineRouting({
  locales,
  defaultLocale: "en",
  localePrefix: "as-needed",
  // always land on English by default — visitors switch language themselves
  localeDetection: false,
});
