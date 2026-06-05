"use client";

import { useEffect, useState } from "react";
import { GoogleAnalytics } from "@/components/analytics/google-analytics";

const KEY = "h1-cookie-consent";
type Consent = "granted" | "denied";

const TXT: Record<string, { body: string; accept: string; decline: string; more: string }> = {
  nl: { body: "We gebruiken analyse-cookies om de website te verbeteren.", accept: "Accepteren", decline: "Weigeren", more: "Meer info" },
  en: { body: "We use analytics cookies to improve this website.", accept: "Accept", decline: "Decline", more: "Learn more" },
  de: { body: "Wir verwenden Analyse-Cookies, um diese Website zu verbessern.", accept: "Akzeptieren", decline: "Ablehnen", more: "Mehr erfahren" },
  es: { body: "Usamos cookies de análisis para mejorar este sitio web.", accept: "Aceptar", decline: "Rechazar", more: "Más información" },
};

/**
 * GDPR cookie consent — Google Analytics only loads after the visitor accepts.
 * The choice is remembered in localStorage; nothing is loaded until then.
 */
export function CookieConsent({ locale }: { locale: string }) {
  const t = TXT[locale] ?? TXT.en;
  const [consent, setConsent] = useState<Consent | null>(null);
  const [decided, setDecided] = useState(true); // assume decided until we read storage (avoids flash)

  useEffect(() => {
    const stored = localStorage.getItem(KEY);
    if (stored === "granted" || stored === "denied") {
      setConsent(stored);
      setDecided(true);
    } else {
      setDecided(false);
    }
  }, []);

  function choose(v: Consent) {
    localStorage.setItem(KEY, v);
    setConsent(v);
    setDecided(true);
  }

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
