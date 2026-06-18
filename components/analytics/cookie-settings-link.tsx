"use client";

/**
 * Footer-link waarmee bezoekers hun cookie-keuze opnieuw kunnen openen/wijzigen.
 * Stuurt een custom event waar de CookieConsent-banner naar luistert.
 */
export function CookieSettingsLink({ label }: { label: string }) {
  return (
    <button
      type="button"
      onClick={() => window.dispatchEvent(new Event("habitat:open-cookie-settings"))}
      className="underline-offset-2 transition-colors hover:text-cream/80 hover:underline"
    >
      {label}
    </button>
  );
}
