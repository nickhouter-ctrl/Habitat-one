"use client";

import { useState } from "react";
import { useLocale, useTranslations } from "next-intl";
import { ArrowRight, Check } from "lucide-react";

const CRM_API =
  process.env.NEXT_PUBLIC_CRM_API_URL ?? "https://habitat-crm-delta.vercel.app";

export function NewsletterForm() {
  const t = useTranslations("footer");
  const locale = useLocale();
  const [done, setDone] = useState(false);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const email = String(new FormData(e.currentTarget).get("email") ?? "").trim();
    if (!email) return;
    // Optimistisch: toon meteen de bevestiging; verstuur op de achtergrond.
    setDone(true);
    try {
      await fetch(`${CRM_API}/api/quote-requests`, {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          name: email,
          email,
          message: "Nieuwsbrief-inschrijving via de website.",
          locale,
          source: "website:newsletter",
          kind: "contact",
        }),
      });
    } catch {
      /* stil — inschrijving is niet kritiek; gebruiker ziet al de bevestiging */
    }
  }

  return (
    <form onSubmit={onSubmit} className="mt-4">
      {done ? (
        <p className="flex items-center gap-2 rounded-full bg-olive-600/20 px-4 py-3 text-sm text-cream">
          <Check className="h-4 w-4 text-olive-400" />
          {t("newsletterThanks")}
        </p>
      ) : (
        <div className="flex items-center gap-2 rounded-full border border-cream/15 bg-sea-900/40 p-1.5 pl-4 focus-within:border-cream/30">
          <input
            type="email"
            name="email"
            required
            placeholder={t("newsletterPlaceholder")}
            className="min-w-0 flex-1 bg-transparent text-sm text-cream placeholder:text-cream/40 focus:outline-none"
          />
          <button
            type="submit"
            aria-label={t("newsletterButton")}
            className="grid grid-cols-1 h-9 w-9 shrink-0 place-items-center rounded-full bg-terracotta-500 text-cream transition-transform duration-300 hover:scale-105"
          >
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      )}
    </form>
  );
}
