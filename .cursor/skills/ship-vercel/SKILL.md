---
name: ship-vercel
description: Commit (if asked), push main, and deploy this portfolio with Vercel production. Use when the user asks to deploy, ship, publish, or go live.
---

# Ship to Vercel

## When

User wants production live (دیپلوی / deploy / ship).

## Steps

1. Confirm intended changes are saved. Run `npx tsc --noEmit` if the change touched TS.
2. **Commit only if the user explicitly asked.** Follow repo commit rules (HEREDOC message, no secrets).
3. `git push` to `main` (or current tracked branch).
4. Deploy: `npx vercel --prod --yes`
5. Confirm output shows `readyState: READY` / production alias.
6. Reply with the production URL briefly.

## Do not

- Run `npm run build` / `next build` locally just to verify before Vercel — it fights the running `.next` dev cache.
- Force-push or amend unless the user explicitly requested and amend rules allow it.
- Commit `.env`, `.vercel`, or CV `*-Alt` backups.
