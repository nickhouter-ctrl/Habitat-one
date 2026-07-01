import { NextResponse } from "next/server";

import { fetchPrices } from "@/lib/account/server";

/** Client haalt hier de tier-prijzen op; de httpOnly-token blijft server-side. */
export async function GET() {
  const data = await fetchPrices();
  if (!data) return NextResponse.json({ loggedIn: false, prices: {}, byName: {} });
  return NextResponse.json({ loggedIn: true, tier: data.tier, prices: data.prices, byName: data.byName });
}
