// Lichtgewicht GA4-event helper. gtag bestaat pas nadat de bezoeker de
// analyse-cookies heeft geaccepteerd (zie cookie-consent.tsx), dus events
// vuren alleen voor toestemming-gevende bezoekers — precies wat we willen.

type GtagParams = Record<string, string | number | boolean | undefined>;

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

export function trackEvent(name: string, params: GtagParams = {}): void {
  if (typeof window === "undefined") return;
  window.gtag?.("event", name, params);
}
