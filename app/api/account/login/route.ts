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
  const res = await fetch(`${CRM_API}/api/portal/login`, {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(body ?? {}),
  });
  const data = await res.json().catch(() => ({ ok: false, error: "error" }));
  if (!res.ok || !data.ok) {
    return NextResponse.json({ ok: false, error: data.error ?? "error" }, { status: res.status || 400 });
  }
  const out = NextResponse.json({ ok: true, account: data.account });
  setCookie(out, data.token);
  return out;
}
