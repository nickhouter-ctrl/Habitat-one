import { NextResponse } from "next/server";

import { CRM_API } from "@/lib/account/server";
import { FERIA_ROLES } from "@/lib/data/feria";

/**
 * Gegevens van een beursbezoeker doorgeven aan het CRM.
 *
 * Bewust via de server van deze site en niet rechtstreeks vanuit de browser:
 * de bezoeker ziet alleen habitat-one.com. Het adres van het CRM komt niet in
 * zijn netwerkverkeer voor en is dus niet te herleiden — precies zoals het
 * klantportaal het ook doet (`app/api/account/login`).
 *
 * Alleen een gecontroleerde payload gaat door; het rauwe verzoek nooit.
 */

const MAX = { naam: 160, email: 200, telefoon: 60, bedrijf: 160, wens: 2000 } as const;

function tekst(v: unknown, max: number): string {
  return typeof v === "string" ? v.trim().slice(0, max) : "";
}

export async function POST(req: Request) {
  const body = await req.json().catch(() => null);

  const naam = tekst(body?.naam, MAX.naam);
  const email = tekst(body?.email, MAX.email);
  const rol = tekst(body?.rol, 40);
  const taal = tekst(body?.taal, 5);

  if (
    naam.length < 2 ||
    !email.includes("@") ||
    !(FERIA_ROLES as readonly string[]).includes(rol) ||
    !["nl", "en", "es"].includes(taal)
  ) {
    return NextResponse.json({ ok: false, error: "invalid_input" }, { status: 400 });
  }

  const res = await fetch(`${CRM_API}/api/beurs`, {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({
      naam,
      email,
      telefoon: tekst(body?.telefoon, MAX.telefoon) || undefined,
      bedrijf: tekst(body?.bedrijf, MAX.bedrijf) || undefined,
      rol,
      taal,
      wens: tekst(body?.wens, MAX.wens) || undefined,
      // Honeypot; een bot vult dit in, een mens ziet het veld niet.
      website: tekst(body?.website, 200) || undefined,
    }),
  }).catch(() => null);

  // Onbereikbaar of stuk: dat moet het formulier wéten, want dan bewaart het de
  // invoer op de telefoon van de bezoeker en probeert het later opnieuw.
  if (!res) return NextResponse.json({ ok: false, error: "upstream_unreachable" }, { status: 502 });
  if (!res.ok) {
    const data = await res.json().catch(() => null);
    return NextResponse.json({ ok: false, error: data?.error ?? "error" }, { status: res.status });
  }
  return NextResponse.json({ ok: true });
}
