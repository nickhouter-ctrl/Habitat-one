import { NextResponse } from "next/server";

import { PORTAL_COOKIE } from "@/lib/account/server";

export async function POST() {
  const out = NextResponse.json({ ok: true });
  out.cookies.set(PORTAL_COOKIE, "", { httpOnly: true, secure: true, sameSite: "lax", path: "/", maxAge: 0 });
  return out;
}
