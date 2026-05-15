"use client";

import { useState } from "react";
import { useLocale, useTranslations } from "next-intl";
import { X, ArrowUpRight, CheckCircle2 } from "lucide-react";

const CRM_API =
  process.env.NEXT_PUBLIC_CRM_API_URL ?? "https://habitat-crm-delta.vercel.app";

type Locale = "nl" | "de" | "en" | "es";

interface Labels {
  title: string;
  subtitle: string;
  name: string;
  email: string;
  phone: string;
  company: string;
  type: string;
  typeArchitect: string;
  typeContractor: string;
  typeRealtor: string;
  typeConsumer: string;
  typeOther: string;
  message: string;
  messagePlaceholder: string;
  submit: string;
  submitting: string;
  cancel: string;
  successTitle: string;
  successText: string;
  closeLabel: string;
  errorGeneric: string;
}

const L: Record<Locale, Labels> = {
  nl: {
    title: "Vraag offerte aan",
    subtitle: "We nemen binnen 24u contact met je op.",
    name: "Naam",
    email: "E-mail",
    phone: "Telefoon (optioneel)",
    company: "Bedrijf",
    type: "Ik ben",
    typeArchitect: "Architect",
    typeContractor: "Aannemer",
    typeRealtor: "Makelaar",
    typeConsumer: "Particulier",
    typeOther: "Anders",
    message: "Bericht",
    messagePlaceholder: "Project, aantallen, kleurkeuze, gewenste leverdatum…",
    submit: "Verstuur aanvraag",
    submitting: "Versturen…",
    cancel: "Annuleren",
    successTitle: "Bedankt — we hebben je aanvraag ontvangen.",
    successText: "Je hoort binnen één werkdag van ons via e-mail of telefoon.",
    closeLabel: "Sluiten",
    errorGeneric: "Versturen mislukt. Probeer 't opnieuw of mail ons direct.",
  },
  de: {
    title: "Angebot anfragen",
    subtitle: "Wir melden uns innerhalb von 24 Stunden bei Ihnen.",
    name: "Name",
    email: "E-Mail",
    phone: "Telefon (optional)",
    company: "Unternehmen",
    type: "Ich bin",
    typeArchitect: "Architekt",
    typeContractor: "Bauunternehmer",
    typeRealtor: "Makler",
    typeConsumer: "Privat",
    typeOther: "Andere",
    message: "Nachricht",
    messagePlaceholder: "Projekt, Stückzahlen, Farbwahl, gewünschter Liefertermin…",
    submit: "Anfrage senden",
    submitting: "Senden…",
    cancel: "Abbrechen",
    successTitle: "Danke — wir haben Ihre Anfrage erhalten.",
    successText: "Sie hören innerhalb eines Werktags von uns per E-Mail oder Telefon.",
    closeLabel: "Schließen",
    errorGeneric: "Senden fehlgeschlagen. Bitte erneut versuchen oder direkt per Mail kontaktieren.",
  },
  en: {
    title: "Request a quote",
    subtitle: "We'll get back to you within 24h.",
    name: "Name",
    email: "Email",
    phone: "Phone (optional)",
    company: "Company",
    type: "I am a",
    typeArchitect: "Architect",
    typeContractor: "Contractor",
    typeRealtor: "Realtor",
    typeConsumer: "Private client",
    typeOther: "Other",
    message: "Message",
    messagePlaceholder: "Project, quantities, colour, desired delivery date…",
    submit: "Send request",
    submitting: "Sending…",
    cancel: "Cancel",
    successTitle: "Thanks — we've received your request.",
    successText: "We'll be in touch within one business day by email or phone.",
    closeLabel: "Close",
    errorGeneric: "Sending failed. Please try again or email us directly.",
  },
  es: {
    title: "Solicitar presupuesto",
    subtitle: "Te contactaremos en menos de 24 horas.",
    name: "Nombre",
    email: "Correo electrónico",
    phone: "Teléfono (opcional)",
    company: "Empresa",
    type: "Soy",
    typeArchitect: "Arquitecto",
    typeContractor: "Constructor",
    typeRealtor: "Inmobiliaria",
    typeConsumer: "Particular",
    typeOther: "Otro",
    message: "Mensaje",
    messagePlaceholder: "Proyecto, cantidades, color, fecha deseada de entrega…",
    submit: "Enviar solicitud",
    submitting: "Enviando…",
    cancel: "Cancelar",
    successTitle: "Gracias — hemos recibido tu solicitud.",
    successText: "Te responderemos en un día laborable por correo o teléfono.",
    closeLabel: "Cerrar",
    errorGeneric: "Error al enviar. Vuelve a intentarlo o escríbenos directamente.",
  },
};

export function QuoteRequestForm({
  product,
  onClose,
}: {
  product?: { sku: string | null; name: string; slug: string };
  onClose: () => void;
}) {
  const locale = useLocale() as Locale;
  const t = L[locale] ?? L.nl;
  const tNav = useTranslations("nav");

  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);
    setError(null);
    const f = new FormData(e.currentTarget);
    const type = String(f.get("type") ?? "");
    const company = String(f.get("company") ?? "");
    const sourceTag = type ? `website:${type}` : "website";
    const messageParts: string[] = [];
    if (type) messageParts.push(`Type: ${type}`);
    const userMsg = String(f.get("message") ?? "").trim();
    if (userMsg) messageParts.push(userMsg);

    try {
      const res = await fetch(`${CRM_API}/api/quote-requests`, {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          name: String(f.get("name") ?? ""),
          email: String(f.get("email") ?? ""),
          phone: String(f.get("phone") ?? "") || undefined,
          company: company || undefined,
          message: messageParts.join("\n\n"),
          productSkus: product?.sku ? [product.sku] : [],
          productNames: product ? [product.name] : [],
          productSlugs: product ? [product.slug] : [],
          locale,
          source: sourceTag,
        }),
      });
      if (!res.ok) {
        setError(t.errorGeneric);
        setSubmitting(false);
        return;
      }
      setSuccess(true);
    } catch {
      setError(t.errorGeneric);
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div
      className="fixed inset-0 z-[60] flex items-center justify-center bg-clay-900/60 p-4 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative max-h-[92vh] w-full max-w-lg overflow-auto rounded-3xl border border-sand-200 bg-cream p-7 shadow-[0_20px_80px_-30px_rgba(58,42,32,0.45)]"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          aria-label={t.closeLabel}
          onClick={onClose}
          className="absolute right-4 top-4 grid h-9 w-9 place-items-center rounded-full text-clay-700 transition-colors hover:bg-sand-200"
        >
          <X className="h-5 w-5" />
        </button>

        {success ? (
          <div className="py-6 text-center">
            <div className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-sage/15 text-sage">
              <CheckCircle2 className="h-7 w-7" />
            </div>
            <h3 className="mt-4 font-display text-2xl text-ink">{t.successTitle}</h3>
            <p className="mt-2 text-sm text-clay-700">{t.successText}</p>
            <button onClick={onClose} className="btn btn-primary mt-6">
              {t.closeLabel}
            </button>
          </div>
        ) : (
          <>
            <p className="text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-terracotta-600">
              {tNav("quote")}
            </p>
            <h3 className="mt-2 font-display text-2xl text-ink">{t.title}</h3>
            <p className="mt-1 text-sm text-clay-700/80">{t.subtitle}</p>

            {product && (
              <div className="mt-4 rounded-xl border border-sand-200 bg-sand-50 px-3 py-2 text-sm">
                <span className="text-xs text-clay-600">Product</span>
                <p className="font-medium">{product.name}</p>
                {product.sku && <p className="text-xs text-clay-700/70">{product.sku}</p>}
              </div>
            )}

            <form className="mt-5 space-y-3.5" onSubmit={handleSubmit}>
              <Field label={t.type} htmlFor="type">
                <select
                  id="type"
                  name="type"
                  required
                  defaultValue=""
                  className="w-full rounded-lg border border-sand-300 bg-cream px-3 py-2 text-sm focus:border-terracotta-400 focus:outline-none focus:ring-2 focus:ring-terracotta-300/40"
                >
                  <option value="" disabled>—</option>
                  <option value="architect">{t.typeArchitect}</option>
                  <option value="aannemer">{t.typeContractor}</option>
                  <option value="makelaar">{t.typeRealtor}</option>
                  <option value="particulier">{t.typeConsumer}</option>
                  <option value="anders">{t.typeOther}</option>
                </select>
              </Field>

              <div className="grid grid-cols-1 gap-3.5 sm:grid-cols-2">
                <Field label={t.name} htmlFor="name">
                  <input id="name" name="name" type="text" required autoComplete="name" className={inputCls} />
                </Field>
                <Field label={t.company} htmlFor="company">
                  <input id="company" name="company" type="text" autoComplete="organization" className={inputCls} />
                </Field>
                <Field label={t.email} htmlFor="email">
                  <input id="email" name="email" type="email" required autoComplete="email" className={inputCls} />
                </Field>
                <Field label={t.phone} htmlFor="phone">
                  <input id="phone" name="phone" type="tel" autoComplete="tel" className={inputCls} />
                </Field>
              </div>

              <Field label={t.message} htmlFor="message">
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  placeholder={t.messagePlaceholder}
                  className={`${inputCls} resize-none leading-relaxed`}
                />
              </Field>

              {error && (
                <p className="rounded-lg border border-terracotta-400/40 bg-terracotta-50 px-3 py-2 text-sm text-terracotta-700">
                  {error}
                </p>
              )}

              <div className="flex flex-wrap items-center justify-end gap-2 pt-2">
                <button type="button" onClick={onClose} className="btn btn-ghost">
                  {t.cancel}
                </button>
                <button type="submit" disabled={submitting} className="btn btn-primary disabled:opacity-60">
                  {submitting ? t.submitting : t.submit}
                  {!submitting && <ArrowUpRight className="h-4 w-4" />}
                </button>
              </div>
            </form>
          </>
        )}
      </div>
    </div>
  );
}

const inputCls =
  "w-full rounded-lg border border-sand-300 bg-cream px-3 py-2 text-sm focus:border-terracotta-400 focus:outline-none focus:ring-2 focus:ring-terracotta-300/40";

function Field({
  label,
  htmlFor,
  children,
}: {
  label: string;
  htmlFor: string;
  children: React.ReactNode;
}) {
  return (
    <label htmlFor={htmlFor} className="block">
      <span className="mb-1 block text-[0.72rem] font-semibold uppercase tracking-[0.14em] text-clay-700">
        {label}
      </span>
      {children}
    </label>
  );
}
