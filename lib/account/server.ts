import "server-only";
import { cookies } from "next/headers";

export const CRM_API = process.env.NEXT_PUBLIC_CRM_API_URL ?? "https://habitat-crm-delta.vercel.app";
export const PORTAL_COOKIE = "hb_portal";

/** De portal-sessietoken (CRM-JWT) uit de httpOnly-cookie, of null. */
export async function getPortalToken(): Promise<string | null> {
  const c = await cookies();
  return c.get(PORTAL_COOKIE)?.value ?? null;
}

/** Haal het profiel + commissies van de ingelogde klant op (via CRM /me). */
export async function fetchAccountMe(): Promise<
  | { loggedIn: false }
  | { loggedIn: true; account: { email: string; tier: "particulier" | "aannemer"; businessName: string | null }; commissionTotal: number; commissions: unknown[] }
> {
  const token = await getPortalToken();
  if (!token) return { loggedIn: false };
  try {
    const res = await fetch(`${CRM_API}/api/portal/me`, {
      headers: { authorization: `Bearer ${token}` },
      cache: "no-store",
    });
    if (!res.ok) return { loggedIn: false };
    const data = await res.json();
    if (!data?.ok) return { loggedIn: false };
    return { loggedIn: true, account: data.account, commissionTotal: data.commissionTotal, commissions: data.commissions ?? [] };
  } catch {
    return { loggedIn: false };
  }
}

/** Tier-prijzen (sku → {price, vat}) voor de ingelogde klant, of null als uitgelogd. */
export async function fetchPrices(): Promise<{ tier: "particulier" | "aannemer"; prices: Record<string, { price: number; vat: number }> } | null> {
  const token = await getPortalToken();
  if (!token) return null;
  try {
    const res = await fetch(`${CRM_API}/api/portal/products`, {
      headers: { authorization: `Bearer ${token}` },
      cache: "no-store",
    });
    if (!res.ok) return null;
    const data = await res.json();
    if (!data?.ok) return null;
    return { tier: data.tier, prices: data.prices ?? {} };
  } catch {
    return null;
  }
}
