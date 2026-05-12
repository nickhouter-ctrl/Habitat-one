import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin("./i18n/request.ts");

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "vokzfqjyujcuuldvajvo.supabase.co" },
      // Property photos managed in the Habitat CRM (Supabase Storage)
      { protocol: "https", hostname: "kcsqmsmferruwnhsibxk.supabase.co" },
    ],
  },
};

export default withNextIntl(nextConfig);
