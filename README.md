# Fannin Technologies Website

Professional marketing site for **Fannin Technologies**, a Managed Service Provider serving small and medium-sized businesses.

## Brand foundation

- Logo source of truth: `public/logos/fannin-technologies-logo.png`
- Extracted colors:
  - Primary blue: `#397EDB`
  - Primary dark / navy: `#112133`
  - Logo muted gray: `#9CA4AE` (UI muted text darkened to `#5C6B7A` for WCAG AA)
- Typography:
  - Headings: **Plus Jakarta Sans**
  - Body: **Source Sans 3**

## Stack

- Next.js (App Router)
- React + TypeScript
- Tailwind CSS v4
- Framer Motion
- Lucide React
- React Hook Form + Zod

## Getting started

```bash
npm install
cp .env.example .env.local
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Environment variables

See `.env.example` for:

- `NEXT_PUBLIC_SITE_URL`
- Contact placeholders
- Optional analytics IDs
- Optional contact webhook / email integration
- Form rate-limit settings

## Scripts

- `npm run dev` — local development
- `npm run build` — production build
- `npm run start` — serve production build
- `npm run lint` — ESLint

## Architecture notes

- Customer portal is not built yet; route namespaces and component boundaries leave room for future `/portal` features.
- Location pages under `/locations/[slug]` are placeholders for verified local SEO content.
- Forms validate client-side and server-side, include a honeypot, and apply basic in-memory rate limiting.
