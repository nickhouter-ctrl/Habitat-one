"use client";

import { useEffect } from "react";
import { trackEvent } from "@/lib/analytics/track";

/**
 * Globale klik-listener die contact-acties als GA4-events meet zonder elke
 * losse link aan te raken: telefoon (tel:), e-mail (mailto:) en WhatsApp.
 * Vuurt alleen iets als gtag bestaat (= bezoeker heeft cookies geaccepteerd).
 */
export function TrackContacts() {
  useEffect(() => {
    function onClick(e: MouseEvent) {
      const el = (e.target as HTMLElement | null)?.closest("a");
      if (!el) return;
      const href = el.getAttribute("href") ?? "";
      let method: string | null = null;
      if (href.startsWith("tel:")) method = "phone";
      else if (href.startsWith("mailto:")) method = "email";
      else if (/wa\.me|whatsapp/i.test(href)) method = "whatsapp";
      if (!method) return;
      trackEvent("contact_click", { method, link_url: href.slice(0, 100) });
      // Telefoon/WhatsApp/e-mail zijn directe leads → ook als lead-signaal.
      trackEvent("generate_lead", { method });
    }
    document.addEventListener("click", onClick, { capture: true });
    return () => document.removeEventListener("click", onClick, { capture: true });
  }, []);

  return null;
}
