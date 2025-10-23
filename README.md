# Leïa Creative Lab — Next.js + Tailwind (App Router)

## Démarrer
1. `npm install`
2. `npm run dev` → http://localhost:3000
3. Modifiez le contenu dans `lib/data.ts`, les sections dans `app/*`.

## Tech
- Next.js 14 (App Router)
- Tailwind CSS
- TypeScript
- Design minimal, palette #4E171C (burgundy)

## Pages
- `/` — Hero
- `/skills` — Compétences
- `/portfolio` — Portfolio (maquettes)
- `/portfolio/[slug]` — Case Study template (statique à partir de `lib/data.ts`)
- `/contact` — Contact (formulaire simulé)

## Customisation rapide
- Couleurs: `tailwind.config.js` et `styles/globals.css`
- Projets: `lib/data.ts`
- Nav/Footer: `components/*`
- SEO: `app/layout.tsx` (export const metadata)