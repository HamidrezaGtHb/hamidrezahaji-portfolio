# Hamidreza Haji — Portfolio

Personal bilingual (EN/DE) portfolio. Next.js 15 App Router, React 19, CSS modules, design tokens, Vercel.

## Map

| Path | Role |
|---|---|
| `app/[lang]/` | Pages (`about`, `work`, `work/[slug]`) |
| `components/` | Sections + `ui/` primitives |
| `content/i18n.ts` | All UI copy (en + de) |
| `content/projects.ts` | Case studies |
| `content/cv.ts` | CV PDF links → `public/cv/{en,de}.pdf` |
| `styles/tokens.css` | Colors, type, space — edit here first |
| `middleware.ts` | Lang routing + `hh-lang` cookie |

## Non-negotiables

- Default language is **German** (`/` → cookie or `/de`). Never reintroduce IP geo.
- Every user-facing string: both `en` and `de` in `content/i18n.ts` (or projects).
- Visual values live in `styles/tokens.css` — no one-off hex/spacing in components unless intentional.
- Prefer existing `components/ui/*` over new card/layout patterns.
- Ship with `npx vercel --prod` after push; skip local `next build` before deploy (dev cache conflicts).
- Never commit `.env`, secrets, or `images/` originals.

## Agent habits (token)

- New chat per task; `@` the 1–3 files you need.
- Follow `.cursor/rules/` (scoped). Use skill `ship-vercel` when deploying.
- Ask mode to locate; Agent mode to edit.
