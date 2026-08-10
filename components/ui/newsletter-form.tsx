"use client";

import { useState } from "react";
import { useLocale, useTranslations } from "next-intl";
import { ArrowRight, Check } from "lucide-react";
import { CRM_API, toCrmLocale } from "@/lib/account/crm";

export function NewsletterForm() {
  const t = useTranslations("footer");
  const locale = useLocale();
  const [status, setStatus] = useState<"idle" | "sending" | "done" | "error">("idle");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const email = String(new FormData(e.currentTarget).get("email") ?? "").trim();
    if (!email || status === "sending") return;
    // Geen optimistische bevestiging meer: pas "bedankt" tonen als het CRM de
    // inschrijving echt heeft aangenomen, anders een herstelbare foutmelding.
    setStatus("sending");
    try {
      const res = await fetch(`${CRM_API}/api/quote-requests`, {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          name: email,
          email,
          message: "Nieuwsbrief-inschrijving via de website.",
          // Het CRM kent alleen nl/de/es/en — fr/zh mappen naar en.
          locale: toCrmLocale(locale),
          source: "website:newsletter",
          kind: "contact",
        }),
      });
      setStatus(res.ok ? "done" : "error");
    } catch {
      setStatus("error");
    }
  }

  const errorText = t.has("newsletterError")
    ? t("newsletterError")
    : "Subscribing failed. Please try again later.";

  return (
    <form onSubmit={onSubmit} className="mt-4">
      {status === "done" ? (
        <p className="flex items-center gap-2 rounded-full bg-olive-600/20 px-4 py-3 text-sm text-cream">
          <Check className="h-4 w-4 text-olive-400" />
          {t("newsletterThanks")}
        </p>
      ) : (
        <>
          <div className="flex items-center gap-2 rounded-full border border-cream/15 bg-sea-900/40 p-1.5 pl-4 focus-within:border-cream/30">
            <input
              type="email"
              name="email"
              required
              placeholder={t("newsletterPlaceholder")}
              aria-invalid={status === "error"}
              aria-describedby={status === "error" ? "newsletter-error" : undefined}
              className="min-w-0 flex-1 bg-transparent text-sm text-cream placeholder:text-cream/40 focus:outline-none"
            />
            <button
              type="submit"
              disabled={status === "sending"}
              aria-label={t("newsletterButton")}
              className="grid grid-cols-1 h-9 w-9 shrink-0 place-items-center rounded-full bg-terracotta-500 text-cream transition-transform duration-300 hover:scale-105 disabled:opacity-60"
            >
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
          {status === "error" && (
            <p id="newsletter-error" role="alert" className="mt-2 px-4 text-sm text-terracotta-200">
              {errorText}
            </p>
          )}
        </>
      )}
    </form>
  );
}
