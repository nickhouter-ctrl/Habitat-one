"use client";

// Offerteaanvraag vanuit de keukenplanner. Stuurt de bestellijst + contactgegevens
// naar het Habitat One CRM (zelfde endpoint als het B2B-offerteformulier).

import { useState, type FormEvent, type ReactNode } from "react";
import { useLocale } from "next-intl";
import { CheckCircle2, Send, X } from "lucide-react";

const CRM_API =
  process.env.NEXT_PUBLIC_CRM_API_URL ?? "https://habitat-crm-delta.vercel.app";

const inputCls =
  "w-full rounded-lg border border-sand-300 bg-cream px-3 py-2 text-sm focus:border-terracotta-400 focus:outline-none focus:ring-2 focus:ring-terracotta-300/40";

export function KitchenQuoteForm({
  summaryText,
  onClose,
}: {
  summaryText: string;
  onClose: () => void;
}) {
  const locale = useLocale();
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);
    setError(null);
    const f = new FormData(e.currentTarget);
    const userMsg = String(f.get("message") ?? "").trim();
    const message =
      `Keukenontwerp aangevraagd via de online keukenplanner.\n\n${summaryText}` +
      (userMsg ? `\n\n— Bericht van de klant —\n${userMsg}` : "");

    try {
      const res = await fetch(`${CRM_API}/api/quote-requests`, {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          name: String(f.get("name") ?? ""),
          email: String(f.get("email") ?? ""),
          phone: String(f.get("phone") ?? "") || undefined,
          message,
          productSkus: [],
          productNames: ["Keukenontwerp (planner)"],
          productSlugs: [],
          locale,
          source: "website:keukenplanner",
        }),
      });
      if (!res.ok) {
        setError("Versturen mislukt. Probeer het opnieuw of mail ons direct.");
        setSubmitting(false);
        return;
      }
      setSuccess(true);
    } catch {
      setError("Versturen mislukt. Probeer het opnieuw of mail ons direct.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div
      className="fixed inset-0 z-[60] flex items-center justify-center bg-ink/70 p-4 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative max-h-[92vh] w-full max-w-lg overflow-auto rounded-3xl border border-sand-200 bg-cream p-7 shadow-[0_20px_80px_-30px_rgba(58,42,32,0.45)]"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          aria-label="Sluiten"
          onClick={onClose}
          className="absolute right-4 top-4 grid h-9 w-9 place-items-center rounded-full text-ink-soft transition-colors hover:bg-sand-200"
        >
          <X className="h-5 w-5" />
        </button>

        {success ? (
          <div className="py-6 text-center">
            <div className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-sea-500/15 text-sea-700">
              <CheckCircle2 className="h-7 w-7" />
            </div>
            <h3 className="mt-4 font-display text-2xl text-ink">
              Bedankt — we hebben je keukenontwerp ontvangen.
            </h3>
            <p className="mt-2 text-sm text-ink-soft">
              Habitat One neemt binnen één werkdag contact met je op voor een offerte.
            </p>
            <button onClick={onClose} className="btn btn-primary mt-6">
              Sluiten
            </button>
          </div>
        ) : (
          <>
            <p className="text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-terracotta-600">
              Keukenplanner
            </p>
            <h3 className="mt-2 font-display text-2xl text-ink">Vraag een offerte aan</h3>
            <p className="mt-1 text-sm text-ink-soft">
              Je ontwerp en bestellijst sturen we mee — we nemen binnen 24 uur contact
              met je op.
            </p>

            <form className="mt-5 space-y-3.5" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 gap-3.5 sm:grid-cols-2">
                <Field label="Naam" htmlFor="kp-name">
                  <input id="kp-name" name="name" type="text" required autoComplete="name" className={inputCls} />
                </Field>
                <Field label="Telefoon (optioneel)" htmlFor="kp-phone">
                  <input id="kp-phone" name="phone" type="tel" autoComplete="tel" className={inputCls} />
                </Field>
              </div>
              <Field label="E-mail" htmlFor="kp-email">
                <input id="kp-email" name="email" type="email" required autoComplete="email" className={inputCls} />
              </Field>
              <Field label="Bericht (optioneel)" htmlFor="kp-message">
                <textarea
                  id="kp-message"
                  name="message"
                  rows={3}
                  placeholder="Vragen, wensen, gewenste opleverdatum…"
                  className={`${inputCls} resize-none leading-relaxed`}
                />
              </Field>

              {error && (
                <p className="rounded-lg border border-terracotta-400/50 bg-terracotta-400/10 px-3 py-2 text-sm text-terracotta-700">
                  {error}
                </p>
              )}

              <div className="flex flex-wrap items-center justify-end gap-2 pt-2">
                <button type="button" onClick={onClose} className="btn btn-ghost">
                  Annuleren
                </button>
                <button type="submit" disabled={submitting} className="btn btn-primary disabled:opacity-60">
                  {submitting ? "Versturen…" : "Verstuur aanvraag"}
                  {!submitting && <Send className="h-4 w-4" />}
                </button>
              </div>
            </form>
          </>
        )}
      </div>
    </div>
  );
}

function Field({
  label,
  htmlFor,
  children,
}: {
  label: string;
  htmlFor: string;
  children: ReactNode;
}) {
  return (
    <label htmlFor={htmlFor} className="block">
      <span className="mb-1 block text-[0.72rem] font-semibold uppercase tracking-[0.14em] text-ink-soft">
        {label}
      </span>
      {children}
    </label>
  );
}
