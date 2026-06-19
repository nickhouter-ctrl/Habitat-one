import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin("./i18n/request.ts");

const nextConfig: NextConfig = {
  images: {
    // Serve modern formats first — AVIF (smallest), then WebP fallback.
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "vokzfqjyujcuuldvajvo.supabase.co" },
      // Property photos managed in the Habitat CRM (Supabase Storage)
      { protocol: "https", hostname: "kcsqmsmferruwnhsibxk.supabase.co" },
      // Furniture product photos hotlinked from the supplier CDNs (Caracole =
      // Shopify, Cornelius Lifestyle = WooCommerce/WordPress).
      { protocol: "https", hostname: "cdn.shopify.com" },
      { protocol: "https", hostname: "www.corneliuslifestyle.com" },
    ],
  },
};

export default withNextIntl(nextConfig);
