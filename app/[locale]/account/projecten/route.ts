/**
 * "Mijn projecten": stuurt de ingelogde klant door naar het Habitat One
 * projectportaal (CRM) — één login. De portaltoken zit in de httpOnly-cookie;
 * server-side ruilen we hem bij het CRM om voor een eenmalige code van 60 s,
 * en alleen die code gaat in de redirect-URL. Het token zelf komt nooit in
 * een URL of in client-JS.
 */
import { NextResponse } from "next/server";

import { CRM_API, PORTAL_URL } from "@/lib/account/crm";
import { getPortalToken } from "@/lib/account/server";

export const dynamic = "force-dynamic";

/** Het projectportaal kent nl/en/es — de overige site-talen vallen terug op en. */
function portaalTaal(locale: string): "nl" | "en" | "es" {
  return locale === "nl" || locale === "es" ? locale : "en";
}

export async function GET(_req: Request, ctx: { params: Promise<{ locale: string }> }) {
  const { locale } = await ctx.params;
  const token = await getPortalToken();
  const taal = portaalTaal(locale);
  if (!token) {
    return NextResponse.redirect(new URL(`/${locale}/account/login`, _req.url));
  }
  let code: string | null = null;
  try {
    const res = await fetch(`${CRM_API}/api/portal/handoff`, { method: "POST", headers: { authorization: `Bearer ${token}` }, cache: "no-store" });
    if (res.ok) code = ((await res.json()) as { code?: string }).code ?? null;
  } catch {
    code = null;
  }
  if (!code) {
    return NextResponse.redirect(new URL(`/${locale}/account/login`, _req.url));
  }
  const doel = new URL(`${PORTAL_URL}/klant/login-via-website`);
  doel.searchParams.set("code", code);
  doel.searchParams.set("lang", taal);
  return NextResponse.redirect(doel);
}
