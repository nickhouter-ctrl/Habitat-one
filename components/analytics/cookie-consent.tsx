"use client";

import { useCallback, useSyncExternalStore } from "react";
import { useTranslations } from "next-intl";
import { GoogleAnalytics } from "@/components/analytics/google-analytics";
import { Link } from "@/i18n/navigation";

const KEY = "h1-cookie-consent";
// Toestemming opnieuw vragen na ~6 maanden — AVG: consent is tijdelijk, niet eeuwig.
const MAX_AGE_MS = 182 * 24 * 60 * 60 * 1000;
type Consent = "granted" | "denied";
type Stored = { v: Consent; t: number };

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

// De consent-keuze leeft in localStorage (extern t.o.v. React) en kan ook door
// de footer-link worden heropend — daarom gemodelleerd als externe store voor
// useSyncExternalStore, in plaats van setState in een mount-effect.
type Snapshot = { consent: Consent | null; decided: boolean };

/** Server + hydration: doe alsof er al gekozen is, zodat de banner niet flitst. */
const SERVER_SNAPSHOT: Snapshot = { consent: null, decided: true };

let snapshot: Snapshot | null = null; // lazy: pas op de client uit storage gelezen
const listeners = new Set<() => void>();

function getSnapshot(): Snapshot {
  if (snapshot === null) {
    const s = readStored();
    snapshot =
      s && Date.now() - s.t < MAX_AGE_MS
        ? { consent: s.v, decided: true }
        : { consent: null, decided: false }; // niets opgeslagen of verlopen → opnieuw vragen
  }
  return snapshot;
}

function setSnapshot(next: Snapshot) {
  snapshot = next;
  for (const l of listeners) l();
}

function subscribe(onChange: () => void): () => void {
  // Footer-link "Cookievoorkeuren" heropent de banner (keuze blijft bewaard
  // tot er opnieuw gekozen wordt).
  const reopen = () => setSnapshot({ ...getSnapshot(), decided: false });
  listeners.add(onChange);
  window.addEventListener("habitat:open-cookie-settings", reopen);
  return () => {
    listeners.delete(onChange);
    window.removeEventListener("habitat:open-cookie-settings", reopen);
  };
}

/**
 * GDPR cookie consent — Google Analytics laadt pas nadat de bezoeker accepteert.
 * De keuze wordt 6 maanden onthouden; daarna (of bij een verlopen keuze) wordt
 * de banner opnieuw getoond. Bezoekers kunnen 'm zelf heropenen via de
 * "Cookievoorkeuren"-link in de footer (custom event).
 */
export function CookieConsent() {
  const t = useTranslations("cookieConsent");
  const { consent, decided } = useSyncExternalStore(subscribe, getSnapshot, () => SERVER_SNAPSHOT);

  const choose = useCallback((v: Consent) => {
    localStorage.setItem(KEY, JSON.stringify({ v, t: Date.now() }));
    setSnapshot({ consent: v, decided: true });
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
              {t("body")}{" "}
              <Link
                href="/cookies"
                className="font-medium text-ink underline underline-offset-2 hover:text-ink-soft"
              >
                {t("more")}
              </Link>
            </p>
            <div className="flex shrink-0 gap-2">
              <button
                onClick={() => choose("denied")}
                className="rounded-full border border-ink/15 px-4 py-2 text-sm font-medium text-ink transition-colors hover:bg-sand-100"
              >
                {t("decline")}
              </button>
              <button
                onClick={() => choose("granted")}
                className="rounded-full bg-ink px-4 py-2 text-sm font-medium text-paper transition-colors hover:bg-ink/90"
              >
                {t("accept")}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
