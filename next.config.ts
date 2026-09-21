import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin("./i18n/request.ts");

const nextConfig: NextConfig = {
  images: {
    // Serve modern formats first — AVIF (smallest), then WebP fallback.
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
      // Property photos and the Brauer product/sfeerbeelden, managed in the
      // Habitat CRM (Supabase Storage).
      { protocol: "https", hostname: "kcsqmsmferruwnhsibxk.supabase.co" },
    ],
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "DENY" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=(), payment=()" },
        ],
      },
    ];
  },
  // Flexible Stone verhuisde van /products (de range-hub) naar een eigen pad.
  // `wall-panels` is de collection-id in de code en dus een logische gok voor
  // crawlers en oude links — vang 'm af i.p.v. een 404 uit [slug].
  async redirects() {
    return [
      // De vloerencollectie heet nu SPC in plaats van PVC — dat is de juiste
      // naam voor het materiaal. De oude adressen zijn gedeeld en staan in
      // Google, dus die verwijzen permanent door in plaats van een 404 te
      // geven. Eén regel voor het pad zonder taal en één met, net als bij de
      // andere verhuizingen hieronder.
      {
        source: "/products/pvc-vloeren",
        destination: "/products/spc-vloeren",
        permanent: true,
      },
      {
        source: "/:locale(nl|es|de|fr|zh)/products/pvc-vloeren",
        destination: "/:locale/products/spc-vloeren",
        permanent: true,
      },
      // De negen productpagina's: alleen het voorvoegsel verandert, dus één
      // regel met een wildcard in plaats van negen losse.
      {
        source: "/products/pvc-vloer-:rest",
        destination: "/products/spc-vloer-:rest",
        permanent: true,
      },
      {
        source: "/:locale(nl|es|de|fr|zh)/products/pvc-vloer-:rest",
        destination: "/:locale/products/spc-vloer-:rest",
        permanent: true,
      },
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
      // Badkamer en accessoires zijn volledig Brauer; de merkpagina is de
      // collectiepagina. De oude collectiepaden blijven bereikbaar.
      {
        source: "/products/bathroom",
        destination: "/brands/brauer",
        permanent: true,
      },
      {
        source: "/:locale(nl|es|de|fr|zh)/products/bathroom",
        destination: "/:locale/brands/brauer",
        permanent: true,
      },
      {
        source: "/products/accessories",
        destination: "/brands/brauer?type=Accessoires",
        permanent: true,
      },
      {
        source: "/:locale(nl|es|de|fr|zh)/products/accessories",
        destination: "/:locale/brands/brauer?type=Accessoires",
        permanent: true,
      },
      // De meubelcollectie (Caracole/Cornelius) is in september 2026 van de
      // site gehaald. Oude links en zoekresultaten landen op de range-hub.
      {
        source: "/furniture/:path*",
        destination: "/products",
        permanent: true,
      },
      {
        source: "/:locale(nl|es|de|fr|zh)/furniture/:path*",
        destination: "/:locale/products",
        permanent: true,
      },
    ];
  },
};

export default withNextIntl(nextConfig);
