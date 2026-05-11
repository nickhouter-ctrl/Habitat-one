"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { motion, AnimatePresence } from "motion/react";
import { Send, CheckCircle2, Loader2 } from "lucide-react";

const subjectKeys = ["general", "materials", "renovation", "property", "legal", "showroom"] as const;

export function ContactForm({ defaultSubject }: { defaultSubject?: (typeof subjectKeys)[number] }) {
  const t = useTranslations("contact");
  const [state, setState] = useState<"idle" | "sending" | "sent">("idle");

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setState("sending");
    setTimeout(() => setState("sent"), 1100);
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
          className="grid gap-5"
        >
          <div className="grid gap-5 sm:grid-cols-2">
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
          <div className="grid gap-5 sm:grid-cols-2">
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
