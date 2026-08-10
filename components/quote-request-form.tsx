"use client";

import { useEffect, useState } from "react";
import { useLocale, useTranslations } from "next-intl";
import { X, ArrowUpRight, CheckCircle2, Minus, Plus } from "lucide-react";
import { useQuote } from "@/components/quote-context";
import { trackEvent } from "@/lib/analytics/track";
import { CRM_API } from "@/lib/account/crm";

type Locale = "nl" | "de" | "en" | "es" | "fr" | "zh";

export function QuoteRequestForm() {
  const { items, isOpen, closeQuote, removeItem, setQty, clearItems } = useQuote();
  const locale = useLocale() as Locale;
  const t = useTranslations("quoteForm");
  const tNav = useTranslations("nav");

  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  function handleClose() {
    closeQuote();
    setSuccess(false);
    setError(null);
  }

  useEffect(() => {
    if (!isOpen) return;
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") closeQuote();
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isOpen, closeQuote]);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);
    setError(null);
    const f = new FormData(e.currentTarget);
    const type = String(f.get("type") ?? "");
    const company = String(f.get("company") ?? "");
    const sourceTag = type ? `website:${type}` : "website";
    // De CRM (en z'n bevestigingsmails) ondersteunt alleen nl/de/en/es — val terug op en voor fr/zh.
    const crmLocale: "nl" | "de" | "en" | "es" =
      locale === "fr" || locale === "zh" ? "en" : locale;
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
          // Uitgelijnde parallelle arrays — kleur + aantal zitten in de naam,
          // de variant-SKU per regel in productSkus (leeg als er geen is).
          productSkus: items.map((i) => i.sku ?? ""),
          productNames: items.map(
            (i) =>
              `${i.name}${i.variant ? ` — ${i.variant}` : ""}${i.qty > 1 ? ` × ${i.qty}` : ""}`,
          ),
          productSlugs: items.map((i) => i.slug),
          // Absolute URL's zodat de thumbnails in de bevestigingsmail laden.
          productImages: items.map((i) =>
            i.image && typeof window !== "undefined" ? `${window.location.origin}${i.image}` : "",
          ),
          locale: crmLocale,
          source: sourceTag,
        }),
      });
      if (!res.ok) {
        setError(t("errorGeneric"));
        setSubmitting(false);
        return;
      }
      trackEvent("generate_lead", { form: "quote", method: "form", items: items.length });
      clearItems();
      setSuccess(true);
    } catch {
      setError(t("errorGeneric"));
    } finally {
      setSubmitting(false);
    }
  }

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[60] flex items-center justify-center bg-clay-900/60 p-4 backdrop-blur-sm"
      onClick={handleClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="quote-form-title"
    >
      <div
        className="relative max-h-[92vh] w-full max-w-lg overflow-auto rounded-3xl border border-sand-200 bg-cream p-7 shadow-[0_20px_80px_-30px_rgba(58,42,32,0.45)]"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          aria-label={t("closeLabel")}
          onClick={handleClose}
          className="absolute right-4 top-4 grid h-9 w-9 place-items-center rounded-full text-clay-700 transition-colors hover:bg-sand-200"
        >
          <X className="h-5 w-5" />
        </button>

        {success ? (
          <div className="py-6 text-center">
            <div className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-sea-500/15 text-sea-700">
              <CheckCircle2 className="h-7 w-7" />
            </div>
            <h3 id="quote-form-title" className="mt-4 font-display text-2xl text-ink">{t("successTitle")}</h3>
            <p className="mt-2 text-sm text-clay-700">{t("successText")}</p>
            <button onClick={handleClose} className="btn btn-primary mt-6">
              {t("closeLabel")}
            </button>
          </div>
        ) : (
          <>
            <p className="text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-terracotta-600">
              {tNav("quote")}
            </p>
            <h3 id="quote-form-title" className="mt-2 font-display text-2xl text-ink">{t("title")}</h3>
            <p className="mt-1 text-sm text-clay-700/80">{t("subtitle")}</p>

            {/* Producten in de offerte */}
            <div className="mt-4 rounded-xl border border-sand-200 bg-sand-50 p-3">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-clay-700">
                {t("yourProducts")}
                {items.length > 0 && <span className="text-clay-700/60"> · {items.length}</span>}
              </p>
              {items.length === 0 ? (
                <p className="mt-2 text-sm text-clay-700/70">{t("noProducts")}</p>
              ) : (
                <ul className="mt-2 divide-y divide-sand-200">
                  {items.map((it) => (
                    <li key={it.key} className="flex items-center justify-between gap-2 py-2">
                      <span className="min-w-0">
                        <span className="block truncate text-sm font-medium text-ink">
                          {it.name}
                          {it.variant && <span className="text-clay-700"> — {it.variant}</span>}
                        </span>
                        {it.sku && (
                          <span className="block text-xs text-clay-700/60">{it.sku}</span>
                        )}
                      </span>
                      <div className="flex shrink-0 items-center gap-1.5">
                        <div className="flex items-center rounded-full border border-sand-300 bg-cream">
                          <button
                            type="button"
                            aria-label="−"
                            onClick={() => setQty(it.key, it.qty - 1)}
                            className="grid h-7 w-7 place-items-center text-clay-700 transition-colors hover:text-terracotta-600"
                          >
                            <Minus className="h-3.5 w-3.5" />
                          </button>
                          <span className="min-w-[1.6rem] text-center text-sm tabular-nums text-ink">
                            {it.qty}
                          </span>
                          <button
                            type="button"
                            aria-label="+"
                            onClick={() => setQty(it.key, it.qty + 1)}
                            className="grid h-7 w-7 place-items-center text-clay-700 transition-colors hover:text-terracotta-600"
                          >
                            <Plus className="h-3.5 w-3.5" />
                          </button>
                        </div>
                        <button
                          type="button"
                          aria-label={t("removeAria")}
                          onClick={() => removeItem(it.key)}
                          className="rounded-full p-1 text-clay-700/60 transition-colors hover:bg-sand-200 hover:text-terracotta-600"
                        >
                          <X className="h-4 w-4" />
                        </button>
                      </div>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            <form className="mt-5 space-y-3.5" onSubmit={handleSubmit}>
              <Field label={t("type")} htmlFor="type">
                <select
                  id="type"
                  name="type"
                  required
                  defaultValue=""
                  className="w-full rounded-lg border border-sand-300 bg-cream px-3 py-2 text-sm focus:border-terracotta-400 focus:outline-none focus:ring-2 focus:ring-terracotta-300/40"
                >
                  <option value="" disabled>—</option>
                  <option value="architect">{t("typeArchitect")}</option>
                  <option value="aannemer">{t("typeContractor")}</option>
                  <option value="makelaar">{t("typeRealtor")}</option>
                  <option value="particulier">{t("typeConsumer")}</option>
                  <option value="anders">{t("typeOther")}</option>
                </select>
              </Field>

              <div className="grid grid-cols-1 gap-3.5 sm:grid-cols-2">
                <Field label={t("name")} htmlFor="name">
                  <input id="name" name="name" type="text" required autoComplete="name" className={inputCls} />
                </Field>
                <Field label={t("company")} htmlFor="company">
                  <input id="company" name="company" type="text" autoComplete="organization" className={inputCls} />
                </Field>
                <Field label={t("email")} htmlFor="email">
                  <input id="email" name="email" type="email" required autoComplete="email" className={inputCls} />
                </Field>
                <Field label={t("phone")} htmlFor="phone">
                  <input id="phone" name="phone" type="tel" autoComplete="tel" className={inputCls} />
                </Field>
              </div>

              <Field label={t("message")} htmlFor="message">
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  placeholder={t("messagePlaceholder")}
                  className={`${inputCls} resize-none leading-relaxed`}
                />
              </Field>

              {error && (
                <p className="rounded-lg border border-terracotta-400/40 bg-terracotta-400/10 px-3 py-2 text-sm text-terracotta-700">
                  {error}
                </p>
              )}

              <div className="flex flex-wrap items-center justify-end gap-2 pt-2">
                <button type="button" onClick={handleClose} className="btn btn-ghost">
                  {t("cancel")}
                </button>
                <button type="submit" disabled={submitting} className="btn btn-primary disabled:opacity-60">
                  {submitting ? t("submitting") : t("submit")}
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
