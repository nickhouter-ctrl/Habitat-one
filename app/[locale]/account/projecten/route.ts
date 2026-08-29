/**
 * "Mijn projecten": stuurt de ingelogde klant door naar het Habitat One
 * projectportaal (CRM) — één login. De portaltoken zit in de httpOnly-cookie
 * en gaat server-side mee in de redirect; hij komt nooit in client-JS.
 */
import { NextResponse } from "next/server";

import { PORTAL_URL } from "@/lib/account/crm";
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
  const doel = new URL(`${PORTAL_URL}/klant/login-via-website`);
  doel.searchParams.set("token", token);
  doel.searchParams.set("lang", taal);
  return NextResponse.redirect(doel);
}
