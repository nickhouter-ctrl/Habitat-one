"use client";

import { useState } from "react";
import { useLocale, useTranslations } from "next-intl";
import { motion, AnimatePresence } from "motion/react";
import { Send, CheckCircle2, Loader2 } from "lucide-react";
import { trackEvent } from "@/lib/analytics/track";

const subjectKeys = ["general", "materials", "renovation", "property", "legal", "showroom"] as const;

const CRM_API =
  process.env.NEXT_PUBLIC_CRM_API_URL ?? "https://habitat-crm-delta.vercel.app";

const ERR_TEXT: Record<string, string> = {
  nl: "Versturen mislukt. Probeer het opnieuw of mail ons direct.",
  de: "Senden fehlgeschlagen. Bitte erneut versuchen oder direkt per Mail kontaktieren.",
  en: "Sending failed. Please try again or email us directly.",
  es: "Error al enviar. Vuelve a intentarlo o escríbenos directamente.",
  fr: "L'envoi a échoué. Veuillez réessayer ou nous écrire directement.",
  zh: "发送失败。请重试，或直接给我们发送邮件。",
};

export function ContactForm({ defaultSubject }: { defaultSubject?: (typeof subjectKeys)[number] }) {
  const t = useTranslations("contact");
  const locale = useLocale();
  const [state, setState] = useState<"idle" | "sending" | "sent" | "error">("idle");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const subject = String(f.get("subject") ?? "general");
    let subjectLabel = subject;
    try {
      subjectLabel = t(`subjectOptions.${subject}`);
    } catch {
      /* val terug op de sleutel */
    }
    setState("sending");
    // De CRM (en z'n bevestigingsmails) ondersteunt alleen nl/de/en/es — val terug op en voor fr/zh.
    const crmLocale = ["nl", "de", "en", "es"].includes(locale) ? locale : "en";
    try {
      const res = await fetch(`${CRM_API}/api/quote-requests`, {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          name: String(f.get("name") ?? ""),
          email: String(f.get("email") ?? ""),
          phone: String(f.get("phone") ?? "") || undefined,
          message: `[${subjectLabel}]\n\n${String(f.get("message") ?? "").trim()}`,
          locale: crmLocale,
          source: `website:contact:${subject}`,
          kind: "contact",
        }),
      });
      setState(res.ok ? "sent" : "error");
      if (res.ok) {
        trackEvent("generate_lead", { form: "contact", subject, method: "form" });
      }
    } catch {
      setState("error");
    }
  }

  const fieldClass =
    "w-full rounded-xl border border-sand-300 bg-sand-50/60 px-4 py-3 text-sm text-ink placeholder:text-ink-soft/45 transition-colors focus:border-terracotta-400 focus:bg-whitewash focus:outline-none focus:ring-2 focus:ring-terracotta-400/20";
  const labelClass = "mb-1.5 block text-[0.72rem] font-semibold uppercase tracking-[0.14em] text-ink-soft";

  return (
    <AnimatePresence mode="wait">
      {state === "sent" ? (
        <motion.div
          key="sent"
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          className="flex flex-col items-center gap-4 rounded-3xl border border-olive-400/30 bg-olive-600/10 px-8 py-14 text-center"
        >
          <CheckCircle2 className="h-12 w-12 text-olive-600" />
          <p className="max-w-sm text-lg text-ink">{t("sent")}</p>
        </motion.div>
      ) : (
        <motion.form
          key="form"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onSubmit={onSubmit}
          className="grid grid-cols-1 gap-5"
        >
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            <div>
              <label className={labelClass} htmlFor="cf-name">
                {t("name")}
              </label>
              <input id="cf-name" name="name" required className={fieldClass} placeholder="Anna Bauer" />
            </div>
            <div>
              <label className={labelClass} htmlFor="cf-email">
                {t("email")}
              </label>
              <input id="cf-email" name="email" type="email" required className={fieldClass} placeholder="anna@example.com" />
            </div>
          </div>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            <div>
              <label className={labelClass} htmlFor="cf-phone">
                {t("phone")}
              </label>
              <input id="cf-phone" name="phone" className={fieldClass} placeholder="+34 …" />
            </div>
            <div>
              <label className={labelClass} htmlFor="cf-subject">
                {t("subject")}
              </label>
              <select id="cf-subject" name="subject" defaultValue={defaultSubject ?? "general"} className={fieldClass}>
                {subjectKeys.map((k) => (
                  <option key={k} value={k}>
                    {t(`subjectOptions.${k}`)}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div>
            <label className={labelClass} htmlFor="cf-message">
              {t("message")}
            </label>
            <textarea
              id="cf-message"
              name="message"
              required
              rows={5}
              className={`${fieldClass} resize-none`}
              placeholder={t("messagePlaceholder")}
            />
          </div>
          <label className="flex items-start gap-2.5 text-sm text-ink-soft">
            <input type="checkbox" required className="mt-0.5 h-4 w-4 rounded border-sand-300 text-terracotta-500 focus:ring-terracotta-400/30" />
            <span>{t("consent")}</span>
          </label>
          {state === "error" && (
            <p className="rounded-xl border border-terracotta-400/40 bg-terracotta-400/10 px-4 py-3 text-sm text-terracotta-700">
              {ERR_TEXT[locale] ?? ERR_TEXT.en}
            </p>
          )}
          <button
            type="submit"
            disabled={state === "sending"}
            className="btn btn-primary mt-1 self-start disabled:opacity-70"
          >
            {state === "sending" ? (
              <>
                <Loader2 className="h-4 w-4 animate-spin" />
                {t("sending")}
              </>
            ) : (
              <>
                <Send className="h-4 w-4" />
                {t("send")}
              </>
            )}
          </button>
        </motion.form>
      )}
    </AnimatePresence>
  );
}
