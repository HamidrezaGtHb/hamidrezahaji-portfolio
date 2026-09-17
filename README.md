# Hamidreza Haji — Portfolio

Next.js 15 (App Router, TypeScript, CSS Modules). Bilingual EN/DE via the `/[lang]` segment. Static-first: every page is prerendered; Supabase is optional (contact form).

## Run

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). The root path redirects to `/en` or `/de` from `Accept-Language`.

## Deploy (GitHub → Vercel)

1. This repo is the project root of `HamidrezaGtHb/hamidrezahaji-portfolio`.
2. Vercel → New Project → import the repo. Framework is auto-detected; no extra build settings.
3. Optional: add `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_ANON_KEY` in Vercel → Settings → Environment Variables.

## Supabase (optional)

Create a table for contact messages:

```sql
create table messages (id uuid primary key default gen_random_uuid(), created_at timestamptz default now(), name text, email text, body text);
alter table messages enable row level security;
create policy "insert only" on messages for insert with check (true);
```

`components/ContactForm.tsx` posts to it. Without env vars the UI falls back to a `mailto:` link.

## Structure

- `app/[lang]/` — routes: `/`, `/work`, `/work/[slug]`, `/about`
- `components/` — Nav, Intro, Hero, WorkScroller, Footer, Reveal, SkillRows, ProjectCard…
- `content/` — copy (`i18n.ts`) and case studies (`projects.ts`)
- `styles/tokens.css` — design tokens (colors, type, spacing, motion)
- `public/portrait.webp` — portrait used on About and the footer
- `public/work/` — case-study images, referenced in `content/projects.ts` → `img: { hero, card, s: [...] }`
- `public/Hamidreza-Haji-CV.pdf` — add the CV here under this exact name so Resume buttons can download it

## Design system

Ink `#2A2826` · Paper `#F7F5F1` · Muted `#7A756D` · Accent `#8C877E` · Footer `#323030`  
Display: Cormorant Garamond 600 uppercase · Body: Hanken Grotesk  
Page gutter: `clamp(20px, 4vw, 56px)` · Easing: `cubic-bezier(.2,.7,.2,1)`
