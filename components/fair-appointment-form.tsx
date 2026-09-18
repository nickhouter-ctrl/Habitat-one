"use client";

import { useState } from "react";
import { useLocale, useTranslations } from "next-intl";
import { ArrowUpRight, Check } from "lucide-react";

import { CRM_API, toCrmLocale } from "@/lib/account/crm";
import { FERIA } from "@/lib/data/feria";

/**
 * Afspraak op de beursstand. Bewust een eigen, kort formulier (geen rol- en
 * tijdslotkeuze zoals bij het showroombezoek): een bezoeker kiest een beursdag
 * en laat de rest aan ons. De aanvraag gaat als `kind: "appointment"` naar het
 * CRM (zelfde endpoint als de showroomafspraak), met de beurs als herkomst,
 * zodat hij in het CRM als afspraakverzoek binnenkomt en het team een
 * meldingsmail krijgt; de bezoeker krijgt een ontvangstbevestiging.
 */
export function FairAppointmentForm() {
  const t = useTranslations("feria");
  const locale = useLocale();
  const [state, setState] = useState<"idle" | "sending" | "done" | "error">("idle");

  const dayLabel = (iso: string) =>
    new Intl.DateTimeFormat(locale, { weekday: "long", day: "numeric", month: "long" }).format(new Date(`${iso}T12:00:00`));

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const day = String(f.get("day") ?? "");
    const time = String(f.get("time") ?? "").trim();
    const company = String(f.get("company") ?? "").trim();
    const notes = String(f.get("notes") ?? "").trim();
    const message = [
      `Afspraak op de beurs: ${FERIA.name} (${FERIA.venue}), stand ${FERIA.stand}`,
      `Dag: ${day ? dayLabel(day) : "geen voorkeur"}${time ? ` · tijd: ${time}` : ""}`,
      company ? `Bedrijf: ${company}` : "",
      notes,
    ]
      .filter(Boolean)
      .join("\n\n");
    setState("sending");
    try {
      const res = await fetch(`${CRM_API}/api/quote-requests`, {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          name: String(f.get("name") ?? ""),
          email: String(f.get("email") ?? ""),
          phone: String(f.get("phone") ?? "") || undefined,
          message,
          locale: toCrmLocale(locale),
          source: FERIA.source,
          kind: "appointment",
          appointmentDate: day || undefined,
          appointmentTime: time || undefined,
        }),
      });
      setState(res.ok ? "done" : "error");
    } catch {
      setState("error");
    }
  }

  const field =
    "w-full rounded-sm border border-ink/15 bg-paper px-4 py-3 text-[0.95rem] text-ink placeholder:text-ink/35 focus:border-ink focus:outline-none";
  const lbl = "mb-1.5 block text-[0.66rem] font-semibold uppercase tracking-[0.16em] text-ink-soft";

  if (state === "done") {
    return (
      <div className="rounded-sm border border-ink/15 bg-paper p-8 text-center">
        <span className="mx-auto grid h-11 w-11 place-items-center rounded-full bg-ink text-paper">
          <Check className="h-5 w-5" />
        </span>
        <h3 className="mt-5 font-display text-2xl text-ink">{t("doneTitle")}</h3>
        <p className="mt-2 text-ink-soft">{t("doneText")}</p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="grid grid-cols-1 gap-5 sm:grid-cols-2">
      <div>
        <label className={lbl} htmlFor="fa-name">{t("name")}</label>
        <input id="fa-name" name="name" required autoComplete="name" className={field} />
      </div>
      <div>
        <label className={lbl} htmlFor="fa-email">{t("email")}</label>
        <input id="fa-email" name="email" type="email" required autoComplete="email" className={field} />
      </div>
      <div>
        <label className={lbl} htmlFor="fa-phone">{t("phone")}</label>
        <input id="fa-phone" name="phone" type="tel" autoComplete="tel" className={field} />
      </div>
      <div>
        <label className={lbl} htmlFor="fa-company">{t("company")}</label>
        <input id="fa-company" name="company" autoComplete="organization" className={field} />
      </div>
      <div>
        <label className={lbl} htmlFor="fa-day">{t("day")}</label>
        <select id="fa-day" name="day" defaultValue="" className={field}>
          <option value="">{t("anyDay")}</option>
          {FERIA.days.map((d) => (
            <option key={d} value={d}>
              {dayLabel(d)}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label className={lbl} htmlFor="fa-time">{t("time")}</label>
        <input id="fa-time" name="time" type="time" className={field} />
      </div>
      <div className="sm:col-span-2">
        <label className={lbl} htmlFor="fa-notes">{t("notes")}</label>
        <textarea id="fa-notes" name="notes" rows={3} placeholder={t("notesPh")} className={field} />
      </div>
      <div className="sm:col-span-2 flex flex-wrap items-center gap-4">
        <button type="submit" disabled={state === "sending"} className="btn btn-primary">
          {state === "sending" ? t("sending") : t("send")}
          <ArrowUpRight className="h-4 w-4" />
        </button>
        {state === "error" && <p className="text-sm text-terracotta-700">{t("error")}</p>}
      </div>
    </form>
  );
}
