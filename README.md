# Personal Career Website

A dark, minimal personal career site built with Next.js 14 (App Router), TypeScript, Tailwind CSS, shadcn-style components, and Framer Motion.

## Quick start

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## What to do next

1. **Run locally** — `npm install` then `npm run dev`; click through all routes.
2. **Replace content** — Edit `data/profile.ts` (see the comment block at the top). Put in your name, headline, email, socials, projects, experience, skills, testimonials, and about copy.
3. **Add resume** — Save your resume as `public/resume.pdf` so the "Download PDF" link works.
4. **Optional** — Favicon and OG image are generated from your name/headline in `data/profile.ts`. Set `NEXT_PUBLIC_SITE_URL` (see `.env.example`) in production for correct meta/sitemap URLs.
5. **Deploy** — `npm run build` then deploy to Vercel (or any Node host); set `NEXT_PUBLIC_SITE_URL` in the project env.

## Tech stack

- **Next.js 14+** (App Router) + TypeScript
- **Tailwind CSS** for styling
- **shadcn-style** UI (Card, Button, Badge, Accordion, Dropdown, Input)
- **Framer Motion** for scroll and hover animations
- **lucide-react** for icons
- **No database** — all content lives in `data/profile.ts`

## Content

Edit `data/profile.ts` to update:

- **person** — name, headline, email, socials, availability
- **highlights** — 6 metric cards (outcome, context, impact chip)
- **themes** — 4–5 pillars with icon + description
- **experience** — timeline entries with accordion details
- **skills** — core, tools, leadership arrays
- **projects** — slug, title, one-liner, tags, featured, metrics, problem/approach/result, screenshots, learnings
- **notes** — slug, title, excerpt, date (placeholder posts)
- **testimonials** — quote, author, role, company
- **aboutContent** — “How I work” sections
- **resumeConfig** — download URL and label

## Routes

| Route | Description |
|-------|-------------|
| `/` | Home (sections: hero, highlights, themes, featured projects, experience, skills, testimonials, contact) |
| `/projects` | Filterable/sortable project grid |
| `/projects/[slug]` | Project detail (problem, approach, result, screenshots, learnings) |
| `/notes` | Notes list |
| `/notes/[slug]` | Note detail (placeholder content) |
| `/about` | About / Operating manual |
| `/resume` | Resume download page |

## SEO & meta

- Metadata and OpenGraph in `app/layout.tsx` and per-page `generateMetadata` where used.
- `app/sitemap.ts` and `app/robots.ts` are included. Set `NEXT_PUBLIC_SITE_URL` in production for correct canonical/sitemap URLs.
- Add a static `app/opengraph-image.png` (or use `opengraph-image.tsx` with `@vercel/og`) for a custom OG image.

## Resume PDF

The resume page links to `/resume.pdf`. Add `public/resume.pdf` to enable the download.

## Build & deploy

```bash
npm run build
npm start
```

Lighthouse, responsiveness, and accessibility are optimized (semantic HTML, focus states, ARIA where needed).
