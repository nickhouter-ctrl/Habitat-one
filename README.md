# Habitat One — Xàbia

Marketing & catalogue website for **Habitat One**, the one-stop platform for building, renovating
and living in Xàbia (Jávea), Costa Blanca: premium materials, curated properties, legal support and
architectural design.

A redesign of the original `habitat-one.com` with a Mediterranean visual language, 3D / parallax
effects, before & after project sliders, and full multi-language support.

## Stack

- **Next.js 16** (App Router, Turbopack) + **React 19** + **TypeScript**
- **Tailwind CSS v4** — custom Mediterranean design system in `app/globals.css`
- **next-intl** — 4 locales: `en` (default, no prefix), `nl`, `es`, `de`
- **motion** (Framer Motion) — parallax hero, 3D tilt cards, scroll reveals, before/after sliders
- **lucide-react** — icons
- Fonts: **Cormorant Garamond** (display) + **Montserrat** (sans) via `next/font`

## Run it

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build (also runs lint + type-check)
npm start        # serve the production build
```

## Environment variables

| Variable | Used by | Notes |
| --- | --- | --- |
| `NEXT_PUBLIC_CRM_API_URL` | account portal, properties | Habitat CRM base URL. Defaults to the production CRM. |
| `CRM_API_URL` | `lib/data/properties.ts` | Server-side override of the CRM base URL. |
| `REVALIDATE_SECRET` | `/api/revalidate` | Shared secret the CRM sends as `x-revalidate-secret`. |
| `GOOGLE_GENERATIVE_AI_API_KEY` | `/api/kitchen-render` | Gemini key for the planner's AI impression. Also read from `GEMINI_API_KEY` / `GOOGLE_API_KEY` / `GOOGLE_AI_API_KEY`. Without it the endpoint returns `not-configured`. |
| `KITCHEN_RENDER_PER_IP_LIMIT` | `/api/kitchen-render` | Renders allowed per IP per 15 minutes (default `5`). |
| `KITCHEN_RENDER_HOURLY_LIMIT` | `/api/kitchen-render` | Hard ceiling on renders per hour per server instance (default `60`). |
| `NEXT_PUBLIC_GA_MEASUREMENT_ID` | analytics | Google Analytics 4 measurement id. Analytics is skipped when unset. |
| `GOOGLE_SITE_VERIFICATION` | `app/[locale]/layout.tsx` | Search Console verification token. |

`/api/kitchen-render` costs money per call, so it is additionally locked down with a same-origin
check, a 6 MB body cap and a 4 MB image cap, and it never forwards upstream error text to the
browser. The rate limits live in the instance's memory — move them to a shared store if the site
ever scales beyond a handful of instances.

## Pages

| Route | What |
| --- | --- |
| `/` | Home — hero, pillars, spaces, materials, featured products, before/after projects, process, "why Xàbia", testimonials |
| `/materials`, `/materials/[slug]` | Material library + detail (used-in spaces, related products) |
| `/products`, `/products/[slug]` | Product catalogue (filter by collection / space / search) + detail |
| `/spaces`, `/spaces/[slug]` | Rooms (indoor / outdoor) + ideas, products & materials per space |
| `/projects`, `/projects/[slug]` | Renovation & new-build portfolio with drag before/after sliders |
| `/services`, `/services/[slug]` | Materials, architecture & design, construction, property search + Antón Abogados legal partner |
| `/sale`, `/sale/[slug]` | Properties for sale (villas / renovation projects) |
| `/about` · `/contact` · `/showroom` · `/search` | Company, contact form + map, showroom, catalogue search |

Localised variants live under `/nl/...`, `/es/...`, `/de/...`.

## Content & data

- **Products** — pulled from the live Habitat One catalogue (incl. colour **variants** with their own
  images, from `product_variants` / `product_variant_images`) and frozen into
  `lib/data/products.generated.ts`. Card thumbnails in `public/products/`, per-variant images in
  `public/products/v/`. Regenerate everything with `node tmp-data/gen2.mjs`.
- **Projects** — the real Habitat One projects (`wip_projects` / `wip_images`): Montgó, Townhouse
  Benissa, Vila Yojosa, Benissa Renovation Villa, Oliva Boutique Hotel. Before/after pairs are derived
  from `renovation`-tagged vs `result`-tagged photos in `public/projects/wip/`. → `lib/data/projects.generated.ts`.
- **Materials, spaces, categories** — from the catalogue → `lib/data/*.generated.ts`. Images in
  `public/materials`, `public/categories`.
- **About / Showroom** — the real Habitat One copy (one-stop concept in Jávea, Verhome Group + Antón
  Abogados partners, NIE, materials sourced from Asia / Italy / Spain) lives in the `about.*` /
  `showroom.*` message namespaces, translated EN/NL/ES/DE.
- **Services, properties (for sale), testimonials** — curated, localised content in `lib/data/`.
- **Imagery** — `public/site` holds the original Habitat One landing-page photos; `public/scenery`,
  `public/property` hold supporting Mediterranean photography.

UI copy lives in `messages/{en,nl,es,de}.json`. Per-record translated content (project descriptions,
service copy, property descriptions) is stored as `{ en, nl, es, de }` objects in the data files and
resolved with `loc()` from `lib/i18n-content.ts`.

## Notable components

- `components/sections/hero.tsx` — layered parallax hero (scroll + mouse), floating material chips, arch frame
- `components/ui/before-after.tsx` — draggable before/after comparison slider
- `components/ui/tilt-card.tsx` — 3D tilt-on-hover card with glare
- `components/ui/reveal.tsx` — scroll-triggered reveal / stagger helpers
- `components/header.tsx` + `components/language-switcher.tsx` — sticky nav, mobile menu, locale switch

`proxy.ts` is the next-intl routing middleware (Next 16 `proxy` file convention).
