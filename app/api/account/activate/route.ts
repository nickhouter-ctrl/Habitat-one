import { NextResponse } from "next/server";

import { CRM_API, PORTAL_COOKIE } from "@/lib/account/server";

export async function POST(req: Request) {
  const body = await req.json().catch(() => null);
  const token = typeof body?.token === "string" ? body.token.trim() : "";
  const password = typeof body?.password === "string" ? body.password : "";
  // Zelfde regels als de client (min. 8 tekens) — client-checks zijn te omzeilen.
  if (!token || token.length > 500 || password.length < 8 || password.length > 200) {
    return NextResponse.json({ ok: false, error: "invalid_input" }, { status: 400 });
  }
  const res = await fetch(`${CRM_API}/api/portal/activate`, {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({ token, password }),
  }).catch(() => null);
  if (!res) {
    return NextResponse.json({ ok: false, error: "upstream_unreachable" }, { status: 502 });
  }
  const data = await res.json().catch(() => ({ ok: false, error: "error" }));
  if (!res.ok || !data.ok) {
    return NextResponse.json({ ok: false, error: data.error ?? "error", issues: data.issues }, { status: res.status || 400 });
  }
  if (typeof data.token !== "string" || !data.token) {
    return NextResponse.json({ ok: false, error: "error" }, { status: 502 });
  }
  const out = NextResponse.json({ ok: true, account: data.account });
  out.cookies.set(PORTAL_COOKIE, data.token, { httpOnly: true, secure: true, sameSite: "lax", path: "/", maxAge: 30 * 24 * 60 * 60 });
  return out;
}
