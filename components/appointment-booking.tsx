"use client";

import { useMemo, useState } from "react";
import { useLocale, useTranslations } from "next-intl";
import { AnimatePresence, motion } from "motion/react";
import { Compass, Briefcase, HomeIcon, Sparkles, ArrowRight, ArrowLeft, CheckCircle2, Loader2, CalendarDays } from "lucide-react";
import { Link } from "@/i18n/navigation";
import { cn } from "@/lib/utils";

type Role = "architect" | "sales" | "homeowner" | "other";
const TIMES = ["10:00", "11:00", "12:00", "16:00", "17:00"];

function nextWeekdays(count: number): Date[] {
  const out: Date[] = [];
  const d = new Date();
  d.setHours(0, 0, 0, 0);
  while (out.length < count) {
    d.setDate(d.getDate() + 1);
    const day = d.getDay();
    if (day !== 0) out.push(new Date(d)); // skip Sundays (Sat by appointment)
  }
  return out;
}

export function AppointmentBooking() {
  const t = useTranslations("appointment");
  const locale = useLocale();
  const [role, setRole] = useState<Role | null>(null);
  const [step, setStep] = useState<"role" | "blocked" | "slot" | "details" | "done">("role");
  const [date, setDate] = useState<string | null>(null);
  const [time, setTime] = useState<string | null>(null);
  const [sending, setSending] = useState(false);

  const days = useMemo(() => nextWeekdays(10), []);
  const fmtDate = (d: Date) => d.toLocaleDateString(locale === "en" ? "en-GB" : locale, { weekday: "short", day: "numeric", month: "short" });
  const fmtDateLong = (iso: string) => new Date(iso).toLocaleDateString(locale === "en" ? "en-GB" : locale, { weekday: "long", day: "numeric", month: "long" });

  function pickRole(r: Role) {
    setRole(r);
    setStep(r === "architect" || r === "sales" ? "slot" : "blocked");
  }
  function submit(e: React.FormEvent) {
    e.preventDefault();
    setSending(true);
    setTimeout(() => {
      setSending(false);
      setStep("done");
    }, 1100);
  }
  function reset() {
    setRole(null);
    setDate(null);
    setTime(null);
    setStep("role");
  }

  const roleOptions: { id: Role; icon: typeof Compass; label: string }[] = [
    { id: "architect", icon: Compass, label: t("roleArchitect") },
    { id: "sales", icon: Briefcase, label: t("roleSales") },
    { id: "homeowner", icon: HomeIcon, label: t("roleHomeowner") },
    { id: "other", icon: Sparkles, label: t("roleOther") },
  ];

  const field =
    "w-full rounded-xl border border-cream/15 bg-cream/5 px-4 py-3 text-sm text-cream placeholder:text-cream/35 transition-colors focus:border-terracotta-300 focus:bg-cream/10 focus:outline-none";
  const lbl = "mb-1.5 block text-[0.66rem] font-semibold uppercase tracking-[0.16em] text-cream/45";

  return (
    <div className="rounded-[2rem] bg-sea-900 p-7 text-cream md:p-9">
      <div className="flex items-center gap-2 text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-terracotta-300">
        <CalendarDays className="h-3.5 w-3.5" />
        {t("title")}
      </div>
      <AnimatePresence mode="wait">
        {step === "role" && (
          <motion.div key="role" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -12 }} transition={{ duration: 0.3 }}>
            <p className="mt-4 text-lg text-cream/85">{t("rolePrompt")}</p>
            <div className="mt-6 grid grid-cols-2 gap-3">
              {roleOptions.map((r) => {
                const I = r.icon;
                return (
                  <button
                    key={r.id}
                    onClick={() => pickRole(r.id)}
                    className="group flex flex-col items-center gap-2.5 rounded-2xl border border-cream/15 bg-cream/5 px-4 py-6 text-center transition-colors hover:border-terracotta-300 hover:bg-cream/10"
                  >
                    <span className="grid grid-cols-1 h-11 w-11 place-items-center rounded-xl bg-cream/10 text-terracotta-300 transition-colors group-hover:bg-terracotta-500 group-hover:text-cream">
                      <I className="h-5 w-5" />
                    </span>
                    <span className="text-sm font-medium">{r.label}</span>
                  </button>
                );
              })}
            </div>
          </motion.div>
        )}

        {step === "blocked" && (
          <motion.div key="blocked" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -12 }} transition={{ duration: 0.3 }} className="mt-5">
            <h3 className="font-display text-xl text-cream">{t("proOnly")}</h3>
            <p className="mt-3 text-sm leading-relaxed text-cream/65">{t("proOnlyDesc")}</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link href="/contact?subject=showroom" className="btn btn-primary">{t("contactInstead")}</Link>
              <button onClick={reset} className="btn btn-outline-light">
                <ArrowLeft className="h-4 w-4" />
                {t("changeRole")}
              </button>
            </div>
          </motion.div>
        )}

        {step === "slot" && (
          <motion.div key="slot" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -12 }} transition={{ duration: 0.3 }} className="mt-5">
            <p className="text-sm text-cream/65">{t("pickSlot")}</p>
            <p className="mt-4 text-[0.66rem] font-semibold uppercase tracking-[0.16em] text-cream/45">{t("chooseDate")}</p>
            <div className="mt-2.5 flex flex-wrap gap-2">
              {days.map((d) => {
                const iso = d.toISOString().slice(0, 10);
                return (
                  <button
                    key={iso}
                    onClick={() => { setDate(iso); setTime(null); }}
                    className={cn("rounded-xl border px-3 py-2 text-xs transition-colors", date === iso ? "border-terracotta-300 bg-terracotta-500/20 text-cream" : "border-cream/15 bg-cream/5 text-cream/70 hover:border-cream/30")}
                  >
                    {fmtDate(d)}
                  </button>
                );
              })}
            </div>
            {date && (
              <>
                <p className="mt-5 text-[0.66rem] font-semibold uppercase tracking-[0.16em] text-cream/45">{t("availableTimes")}</p>
                <div className="mt-2.5 flex flex-wrap gap-2">
                  {TIMES.map((tm) => (
                    <button
                      key={tm}
                      onClick={() => setTime(tm)}
                      className={cn("rounded-xl border px-4 py-2 text-sm transition-colors", time === tm ? "border-terracotta-300 bg-terracotta-500/20 text-cream" : "border-cream/15 bg-cream/5 text-cream/70 hover:border-cream/30")}
                    >
                      {tm}
                    </button>
                  ))}
                </div>
              </>
            )}
            <div className="mt-6 flex flex-wrap gap-3">
              <button onClick={() => setStep("details")} disabled={!date || !time} className="btn btn-primary disabled:opacity-50">
                {t("continueBooking")}
                <ArrowRight className="h-4 w-4" />
              </button>
              <button onClick={reset} className="btn btn-outline-light">
                <ArrowLeft className="h-4 w-4" />
                {t("changeRole")}
              </button>
            </div>
          </motion.div>
        )}

        {step === "details" && (
          <motion.form key="details" onSubmit={submit} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -12 }} transition={{ duration: 0.3 }} className="mt-5 space-y-4">
            <div className="rounded-xl bg-terracotta-500/15 px-4 py-3 text-sm text-cream/85">
              {t("selected")}: <span className="font-semibold">{date ? fmtDateLong(date) : ""} · {time}</span>
            </div>
            <div>
              <label className={lbl} htmlFor="ap-name">{t("name")}</label>
              <input id="ap-name" required className={field} placeholder={t("namePh")} />
            </div>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <label className={lbl} htmlFor="ap-email">{t("email")}</label>
                <input id="ap-email" type="email" required className={field} placeholder={t("emailPh")} />
              </div>
              <div>
                <label className={lbl} htmlFor="ap-phone">{t("phone")}</label>
                <input id="ap-phone" className={field} placeholder="+34 …" />
              </div>
            </div>
            <div>
              <label className={lbl} htmlFor="ap-notes">{t("notes")}</label>
              <textarea id="ap-notes" rows={3} className={`${field} resize-none`} placeholder={t("notesPh")} />
            </div>
            <div className="flex flex-wrap gap-3 pt-1">
              <button type="submit" disabled={sending} className="btn btn-primary disabled:opacity-60">
                {sending ? <><Loader2 className="h-4 w-4 animate-spin" />{t("sending")}</> : <>{t("submit")}<ArrowRight className="h-4 w-4" /></>}
              </button>
              <button type="button" onClick={() => setStep("slot")} className="btn btn-outline-light">
                <ArrowLeft className="h-4 w-4" />
              </button>
            </div>
          </motion.form>
        )}

        {step === "done" && (
          <motion.div key="done" initial={{ opacity: 0, scale: 0.97 }} animate={{ opacity: 1, scale: 1 }} className="mt-6 flex flex-col items-center gap-4 rounded-2xl border border-olive-400/30 bg-olive-600/15 px-6 py-12 text-center">
            <CheckCircle2 className="h-12 w-12 text-olive-400" />
            <p className="font-display text-xl text-cream">{t("received")}</p>
            <p className="max-w-sm text-sm text-cream/65">{t("receivedDesc")}</p>
            <button onClick={reset} className="btn btn-outline-light mt-1">{t("bookAnother")}</button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
