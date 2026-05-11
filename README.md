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
