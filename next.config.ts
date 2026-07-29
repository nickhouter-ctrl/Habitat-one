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
  // Flexible Stone verhuisde van /products (de range-hub) naar een eigen pad.
  // `wall-panels` is de collection-id in de code en dus een logische gok voor
  // crawlers en oude links — vang 'm af i.p.v. een 404 uit [slug].
  async redirects() {
    return [
      {
        source: "/products/wall-panels",
        destination: "/products/flexible-stone",
        permanent: true,
      },
      {
        source: "/:locale(nl|es|de|fr|zh)/products/wall-panels",
        destination: "/:locale/products/flexible-stone",
        permanent: true,
      },
    ];
  },
};

export default withNextIntl(nextConfig);
