"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { useLocale, useTranslations } from "next-intl";
import { ArrowUpRight, Check } from "lucide-react";

import { FERIA_INTERESTS, FERIA_ROLES } from "@/lib/data/feria";

/**
 * "Laat je gegevens achter" op de beursstand.
 *
 * Eén formulier, twee manieren om het te gebruiken:
 *
 *  - **de bezoeker zelf**, die de QR-code op de stand scant;
 *  - **wij op de iPad** (`?stand=1`), in plaats van het CRM open te hebben op
 *    een apparaat dat de hele dag op een balie ligt. Dan staat de cursor na het
 *    opslaan weer in het naamveld, kiezen wij de taal van de bevestigingsmail
 *    en houdt het scherm bij hoeveel mensen er vandaag op dit apparaat zijn
 *    ingevoerd. Er komt nog steeds niets uit het CRM deze pagina op — de teller
 *    staat op het apparaat zelf.
 *
 * Twee regels, in beide gevallen:
 *
 * 1. **Niets mag verloren gaan.** Het wifi in een beurshal valt weg. De invoer
 *    gaat daarom eerst in de localStorage van dit apparaat en pas daarna naar
 *    ons; lukt dat niet, dan blijft hij staan en gaat hij vanzelf alsnog weg
 *    zodra er weer verbinding is.
 * 2. **De bezoeker ziet alleen deze website.** Het formulier post naar
 *    `/api/beurs` van habitat-one.com; die geeft het server-side door aan het
 *    CRM. Het CRM zelf is van buiten niet te zien.
 */

type Invoer = {
  id: string;
  naam: string;
  email: string;
  telefoon: string;
  bedrijf: string;
  rol: string;
  rolAnders: string;
  interesses: string[];
  wens: string;
  taal: string;
  website: string; // honeypot
};

const WACHTRIJ = "habitat-beurs-wachtrij";
const TELLER = "habitat-beurs-teller";

/** De bevestigingsmail bestaat in drie talen; de rest krijgt Engels. */
function mailTaal(locale: string): "nl" | "es" | "en" {
  return locale === "nl" || locale === "es" ? locale : "en";
}

function leesWachtrij(): Invoer[] {
  try {
    const rauw = localStorage.getItem(WACHTRIJ);
    return rauw ? (JSON.parse(rauw) as Invoer[]) : [];
  } catch {
    return [];
  }
}

function schrijfWachtrij(rijen: Invoer[]) {
  try {
    localStorage.setItem(WACHTRIJ, JSON.stringify(rijen));
  } catch {
    /* privémodus of vol geheugen: dan valt alleen de extra zekerheid weg */
  }
}

/** Teller per dag, alleen op dit apparaat. */
function leesTeller(): number {
  try {
    const [dag, n] = (localStorage.getItem(TELLER) ?? "").split("|");
    return dag === new Date().toDateString() ? Number(n) || 0 : 0;
  } catch {
    return 0;
  }
}

function telOp(): number {
  const n = leesTeller() + 1;
  try {
    localStorage.setItem(TELLER, `${new Date().toDateString()}|${n}`);
  } catch {
    /* zie boven */
  }
  return n;
}

async function verstuur(inv: Invoer): Promise<"ok" | "later" | "fout"> {
  try {
    const res = await fetch("/api/beurs", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(inv),
    });
    if (res.ok) return "ok";
    // 4xx is een fout in de invoer — opnieuw proberen helpt dan niet.
    return res.status >= 500 ? "later" : "fout";
  } catch {
    return "later";
  }
}

export function FairLeadForm({ stand = false }: { stand?: boolean }) {
  const t = useTranslations("fairLead");
  const locale = useLocale();
  const [staat, setStaat] = useState<"idle" | "bezig" | "klaar" | "wacht" | "fout">("idle");
  const [wachtrij, setWachtrij] = useState<Invoer[]>([]);
  const [vandaag, setVandaag] = useState(0);
  const [rol, setRol] = useState("particulier");
  const formRef = useRef<HTMLFormElement>(null);
  const naamRef = useRef<HTMLInputElement>(null);

  /** Alles wat nog wacht opnieuw proberen. */
  const inhalen = useCallback(async () => {
    const rijen = leesWachtrij();
    if (rijen.length === 0) return;
    const over: Invoer[] = [];
    for (const inv of rijen) {
      const uitkomst = await verstuur(inv);
      // Alleen bij een inhoudelijke fout laten vallen; anders bewaren.
      if (uitkomst === "later") over.push(inv);
    }
    schrijfWachtrij(over);
    setWachtrij(over);
  }, []);

  useEffect(() => {
    setWachtrij(leesWachtrij());
    setVandaag(leesTeller());
    void inhalen();
    const opWeerOnline = () => void inhalen();
    window.addEventListener("online", opWeerOnline);
    const timer = setInterval(() => {
      if (navigator.onLine && leesWachtrij().length > 0) void inhalen();
    }, 30_000);
    return () => {
      window.removeEventListener("online", opWeerOnline);
      clearInterval(timer);
    };
  }, [inhalen]);

  /** Leeg formulier, cursor terug in het naamveld — klaar voor de volgende. */
  const volgende = useCallback(() => {
    formRef.current?.reset();
    setRol("particulier");
    setStaat("idle");
    // Na de reset staat het veld er weer; daarna pas focussen.
    setTimeout(() => naamRef.current?.focus(), 0);
  }, []);

  async function opsturen(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (staat === "bezig") return;
    const f = new FormData(e.currentTarget);
    const inv: Invoer = {
      id: crypto.randomUUID(),
      naam: String(f.get("naam") ?? "").trim(),
      email: String(f.get("email") ?? "").trim(),
      telefoon: String(f.get("telefoon") ?? "").trim(),
      bedrijf: String(f.get("bedrijf") ?? "").trim(),
      rol: String(f.get("rol") ?? "particulier"),
      rolAnders: String(f.get("rolAnders") ?? "").trim(),
      interesses: f.getAll("interesses").map(String),
      wens: String(f.get("wens") ?? "").trim(),
      taal: stand ? String(f.get("taal") ?? "es") : mailTaal(locale),
      website: String(f.get("website") ?? ""),
    };

    // Eerst op dit apparaat vastleggen, dan pas versturen.
    const metWachtrij = [...leesWachtrij(), inv];
    schrijfWachtrij(metWachtrij);
    setWachtrij(metWachtrij);
    setStaat("bezig");

    const uitkomst = await verstuur(inv);
    const over = leesWachtrij().filter((r) => r.id !== inv.id);
    if (uitkomst === "later") {
      setStaat("wacht");
      setVandaag(telOp());
    } else {
      schrijfWachtrij(over);
      setWachtrij(over);
      if (uitkomst === "ok") {
        setStaat("klaar");
        setVandaag(telOp());
      } else {
        setStaat("fout");
      }
    }
  }

  // Op de stand meteen door naar een leeg formulier; een bezoeker houdt zijn
  // bedankje gewoon in beeld.
  useEffect(() => {
    if (!stand || (staat !== "klaar" && staat !== "wacht")) return;
    const t = setTimeout(volgende, 6000);
    return () => clearTimeout(t);
  }, [stand, staat, volgende]);

  const field =
    "w-full rounded-sm border border-ink/15 bg-paper px-4 py-3.5 text-[1.05rem] leading-tight text-ink placeholder:text-ink/35 focus:border-ink focus:outline-none focus:ring-2 focus:ring-ink/10";
  const lbl = "mb-1.5 block text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-ink-soft";

  if (staat === "klaar" || staat === "wacht") {
    return (
      <div className="rounded-sm border border-ink/15 bg-paper p-8 text-center md:p-10">
        <span className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-ink text-paper">
          <Check className="h-7 w-7" />
        </span>
        <h3 className="mt-6 font-display text-2xl text-ink md:text-3xl">{t("doneTitle")}</h3>
        <p className="mx-auto mt-3 max-w-md text-ink-soft">
          {staat === "klaar" ? t("doneText") : t("queuedText")}
        </p>
        {stand && (
          <div className="mt-8">
            <button type="button" onClick={volgende} className="btn btn-primary min-h-[3.25rem] px-8 text-base">
              {t("standNext")}
              <ArrowUpRight className="h-4 w-4" />
            </button>
            <p className="mt-4 text-sm text-ink-soft">{t("standToday")}: {vandaag}</p>
          </div>
        )}
      </div>
    );
  }

  return (
    <form ref={formRef} onSubmit={opsturen} className="grid grid-cols-1 gap-5 sm:grid-cols-2">
      {/* Alleen op de stand: hoeveel er al in zitten, en wat er nog niet weg is. */}
      {stand && (
        <div className="sm:col-span-2 flex flex-wrap items-center justify-between gap-3 text-sm">
          <span className="text-ink-soft">
            {t("standToday")}: <strong className="text-ink">{vandaag}</strong>
          </span>
          {wachtrij.length > 0 && (
            <span className="rounded-sm bg-terracotta-700/10 px-3 py-1.5 text-terracotta-700">
              {t("standQueued", { n: wachtrij.length })}
            </span>
          )}
        </div>
      )}

      <div>
        <label className={lbl} htmlFor="fl-naam">{t("name")}</label>
        <input
          ref={naamRef}
          id="fl-naam"
          name="naam"
          required
          autoComplete={stand ? "off" : "name"}
          autoFocus={stand}
          className={field}
        />
      </div>
      <div>
        <label className={lbl} htmlFor="fl-email">{t("email")}</label>
        <input
          id="fl-email"
          name="email"
          type="email"
          required
          autoComplete={stand ? "off" : "email"}
          inputMode="email"
          autoCapitalize="none"
          spellCheck={false}
          className={field}
        />
      </div>
      <div>
        <label className={lbl} htmlFor="fl-telefoon">{t("phone")}</label>
        <input id="fl-telefoon" name="telefoon" type="tel" autoComplete={stand ? "off" : "tel"} inputMode="tel" className={field} />
      </div>
      <div>
        <label className={lbl} htmlFor="fl-bedrijf">{t("company")}</label>
        <input id="fl-bedrijf" name="bedrijf" autoComplete={stand ? "off" : "organization"} className={field} />
      </div>
      <div className={stand ? undefined : "sm:col-span-2"}>
        <label className={lbl} htmlFor="fl-rol">{t("role")}</label>
        <select
          id="fl-rol"
          name="rol"
          value={rol}
          onChange={(e) => setRol(e.target.value)}
          className={field}
        >
          {FERIA_ROLES.map((r) => (
            <option key={r} value={r}>
              {t(`role_${r}`)}
            </option>
          ))}
        </select>
      </div>
      {/* "Anders" zonder toelichting zegt bij het opvolgen niets — vandaar dit
          veld, dat alleen verschijnt als het nodig is. */}
      {rol === "anders" && (
        <div className={stand ? undefined : "sm:col-span-2"}>
          <label className={lbl} htmlFor="fl-rol-anders">{t("otherWhich")}</label>
          <input id="fl-rol-anders" name="rolAnders" autoComplete="off" placeholder={t("otherWhichPh")} className={field} />
        </div>
      )}
      {stand && (
        <div>
          <label className={lbl} htmlFor="fl-taal">{t("standMailLanguage")}</label>
          <select id="fl-taal" name="taal" defaultValue="es" className={field}>
            <option value="es">Español</option>
            <option value="en">English</option>
            <option value="nl">Nederlands</option>
          </select>
        </div>
      )}
      {/* Bijna iedereen wil hetzelfde: stalen, prijzen, beeld. Aanvinken scheelt
          typen én maakt het na de beurs filterbaar. */}
      <fieldset className="sm:col-span-2">
        <legend className={lbl}>{t("interestsLabel")}</legend>
        <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
          {FERIA_INTERESTS.map((k) => (
            <label
              key={k}
              className="flex min-h-[3.25rem] cursor-pointer items-center gap-3 rounded-sm border border-ink/15 bg-paper px-4 py-3 text-[1rem] text-ink has-[:checked]:border-ink has-[:checked]:bg-ink/[0.04]"
            >
              <input type="checkbox" name="interesses" value={k} className="h-5 w-5 accent-[#1b1b1b]" />
              {t(`interest_${k}`)}
            </label>
          ))}
        </div>
      </fieldset>

      <div className="sm:col-span-2">
        <label className={lbl} htmlFor="fl-wens">{t("wish")}</label>
        <textarea id="fl-wens" name="wens" rows={3} placeholder={t("wishPh")} className={field} />
      </div>

      {/* Honeypot — onzichtbaar voor de bezoeker, alleen een bot vult dit in. */}
      <div aria-hidden className="hidden">
        <label htmlFor="fl-website">Website</label>
        <input id="fl-website" name="website" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="sm:col-span-2 flex flex-wrap items-center gap-4">
        <button
          type="submit"
          disabled={staat === "bezig"}
          className={`btn btn-primary min-h-[3.25rem] text-base ${stand ? "w-full justify-center" : ""}`}
        >
          {staat === "bezig" ? t("sending") : stand ? t("standSave") : t("send")}
          <ArrowUpRight className="h-4 w-4" />
        </button>
        {staat === "fout" && <p className="text-sm text-terracotta-700">{t("error")}</p>}
      </div>
      {!stand && <p className="sm:col-span-2 text-xs leading-relaxed text-ink-soft">{t("privacy")}</p>}
    </form>
  );
}
