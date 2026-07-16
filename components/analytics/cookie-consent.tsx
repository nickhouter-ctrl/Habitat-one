"use client";

import { useCallback, useEffect, useState } from "react";
import { GoogleAnalytics } from "@/components/analytics/google-analytics";

const KEY = "h1-cookie-consent";
// Toestemming opnieuw vragen na ~6 maanden — AVG: consent is tijdelijk, niet eeuwig.
const MAX_AGE_MS = 182 * 24 * 60 * 60 * 1000;
type Consent = "granted" | "denied";
type Stored = { v: Consent; t: number };

const TXT: Record<string, { body: string; accept: string; decline: string; more: string }> = {
  nl: { body: "We gebruiken analyse-cookies om de website te verbeteren.", accept: "Accepteren", decline: "Weigeren", more: "Meer info" },
  en: { body: "We use analytics cookies to improve this website.", accept: "Accept", decline: "Decline", more: "Learn more" },
  de: { body: "Wir verwenden Analyse-Cookies, um diese Website zu verbessern.", accept: "Akzeptieren", decline: "Ablehnen", more: "Mehr erfahren" },
  es: { body: "Usamos cookies de análisis para mejorar este sitio web.", accept: "Aceptar", decline: "Rechazar", more: "Más información" },
  fr: { body: "Nous utilisons des cookies d'analyse pour améliorer ce site.", accept: "Accepter", decline: "Refuser", more: "En savoir plus" },
  zh: { body: "我们使用分析 Cookie 来改进本网站。", accept: "接受", decline: "拒绝", more: "了解更多" },
};

/** Lees de opgeslagen keuze; migreert de oude opslag (alleen de waarde) naar het
 * nieuwe formaat met tijdstempel, zodat bestaande bezoekers niet meteen opnieuw
 * worden gevraagd maar wél onder de 6-maanden-vervaltermijn vallen. */
function readStored(): Stored | null {
  try {
    const raw = localStorage.getItem(KEY);
    if (!raw) return null;
    if (raw === "granted" || raw === "denied") {
      const migrated: Stored = { v: raw, t: Date.now() };
      localStorage.setItem(KEY, JSON.stringify(migrated));
      return migrated;
    }
    const p = JSON.parse(raw) as Partial<Stored>;
    if ((p?.v === "granted" || p?.v === "denied") && typeof p.t === "number") {
      return { v: p.v, t: p.t };
    }
    return null;
  } catch {
    return null;
  }
}

/**
 * GDPR cookie consent — Google Analytics laadt pas nadat de bezoeker accepteert.
 * De keuze wordt 6 maanden onthouden; daarna (of bij een verlopen keuze) wordt
 * de banner opnieuw getoond. Bezoekers kunnen 'm zelf heropenen via de
 * "Cookievoorkeuren"-link in de footer (custom event).
 */
export function CookieConsent({ locale }: { locale: string }) {
  const t = TXT[locale] ?? TXT.en;
  const [consent, setConsent] = useState<Consent | null>(null);
  const [decided, setDecided] = useState(true); // assume decided until we read storage (avoids flash)

  useEffect(() => {
    const s = readStored();
    if (s && Date.now() - s.t < MAX_AGE_MS) {
      setConsent(s.v);
      setDecided(true);
    } else {
      setDecided(false); // niets opgeslagen of verlopen → opnieuw vragen
    }
  }, []);

  // Footer-link "Cookievoorkeuren" heropent de banner.
  useEffect(() => {
    const open = () => setDecided(false);
    window.addEventListener("habitat:open-cookie-settings", open);
    return () => window.removeEventListener("habitat:open-cookie-settings", open);
  }, []);

  const choose = useCallback((v: Consent) => {
    localStorage.setItem(KEY, JSON.stringify({ v, t: Date.now() }));
    setConsent(v);
    setDecided(true);
    // Trekt de bezoeker de toestemming in terwijl GA al draait, stop dan direct
    // de gegevensverzameling via Consent Mode (geen reload nodig).
    if (v === "denied") {
      window.gtag?.("consent", "update", {
        ad_storage: "denied",
        ad_user_data: "denied",
        ad_personalization: "denied",
        analytics_storage: "denied",
      });
    }
  }, []);

  return (
    <>
      {consent === "granted" && <GoogleAnalytics />}
      {!decided && (
        <div className="fixed inset-x-0 bottom-0 z-[60] p-4 md:p-5">
          <div className="surface mx-auto flex max-w-3xl flex-col items-start gap-3 rounded-2xl border border-ink/10 bg-paper p-4 shadow-lg sm:flex-row sm:items-center sm:gap-5 md:p-5">
            <p className="flex-1 text-sm leading-relaxed text-ink-soft">
              {t.body}{" "}
              <a
                href={locale === "en" ? "/cookies" : `/${locale}/cookies`}
                className="font-medium text-ink underline underline-offset-2 hover:text-ink-soft"
              >
                {t.more}
              </a>
            </p>
            <div className="flex shrink-0 gap-2">
              <button
                onClick={() => choose("denied")}
                className="rounded-full border border-ink/15 px-4 py-2 text-sm font-medium text-ink transition-colors hover:bg-sand-100"
              >
                {t.decline}
              </button>
              <button
                onClick={() => choose("granted")}
                className="rounded-full bg-ink px-4 py-2 text-sm font-medium text-paper transition-colors hover:bg-ink/90"
              >
                {t.accept}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
