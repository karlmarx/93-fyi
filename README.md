# 93.fyi

Personal hub at [93.fyi](https://93.fyi) — the landing page that routes to my projects, utilities, and subdomains.

## Stack

- Next.js 16 (App Router, Turbopack), React 19, TypeScript
- Hand-rolled CSS in `src/app/globals.css` (no Tailwind, no CSS-in-JS)
- Fonts: Instrument Serif + IBM Plex Mono via `next/font/google`
- Deployed on Vercel

## Auth model

There's no session logic in this repo. Cloudflare Access sits in front of the site and sets an `x-user-email` header on authenticated requests. `src/app/page.tsx` reads that header and renders a `Private` section of links if the email matches an allowlist. Unauthenticated visitors see only the public section.

## Dev

```bash
npm install
npm run dev   # http://localhost:3000
npm run build
npm run lint
```

## Layout

```
src/
├── app/
│   ├── layout.tsx        metadata, viewport, fonts
│   ├── page.tsx          server component — reads headers, picks links
│   ├── ClientShell.tsx   renders title, links, socials, footer
│   └── globals.css       the whole design system
└── proxy.ts              hostname-based redirects (ta.93.fyi → trickadvisor.cc)
```
