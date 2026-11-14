// Lichtgewicht event-helper voor GA4 én de Meta Pixel. gtag/fbq bestaan pas
// nadat de bezoeker de cookies heeft geaccepteerd (zie cookie-consent.tsx),
// dus events vuren alleen voor toestemming-gevende bezoekers — precies wat we willen.

type GtagParams = Record<string, string | number | boolean | undefined>;

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    fbq?: (...args: unknown[]) => void;
  }
}

/** GA4-eventnaam → standaard Meta-event (alleen events die voor advertenties tellen). */
const META_EVENTS: Record<string, string> = {
  generate_lead: "Lead",
  contact_click: "Contact",
};

export function trackEvent(name: string, params: GtagParams = {}): void {
  if (typeof window === "undefined") return;
  window.gtag?.("event", name, params);
  const metaEvent = META_EVENTS[name];
  if (metaEvent) window.fbq?.("track", metaEvent, params);
}
