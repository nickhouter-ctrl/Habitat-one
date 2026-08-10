import { NextResponse } from "next/server";

import { CRM_API, PORTAL_COOKIE } from "@/lib/account/server";

function setCookie(res: NextResponse, token: string) {
  res.cookies.set(PORTAL_COOKIE, token, {
    httpOnly: true,
    secure: true,
    sameSite: "lax",
    path: "/",
    maxAge: 30 * 24 * 60 * 60,
  });
}

export async function POST(req: Request) {
  const body = await req.json().catch(() => null);
  const email = typeof body?.email === "string" ? body.email.trim() : "";
  const password = typeof body?.password === "string" ? body.password : "";
  // Alleen een gevalideerde payload doorsturen — nooit het rauwe request-body.
  if (!email || !email.includes("@") || email.length > 254 || !password || password.length > 200) {
    return NextResponse.json({ ok: false, error: "invalid_input" }, { status: 400 });
  }
  const res = await fetch(`${CRM_API}/api/portal/login`, {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({ email, password }),
  }).catch(() => null);
  if (!res) {
    return NextResponse.json({ ok: false, error: "upstream_unreachable" }, { status: 502 });
  }
  const data = await res.json().catch(() => ({ ok: false, error: "error" }));
  if (!res.ok || !data.ok) {
    return NextResponse.json({ ok: false, error: data.error ?? "error" }, { status: res.status || 400 });
  }
  if (typeof data.token !== "string" || !data.token) {
    return NextResponse.json({ ok: false, error: "error" }, { status: 502 });
  }
  const out = NextResponse.json({ ok: true, account: data.account });
  setCookie(out, data.token);
  return out;
}
