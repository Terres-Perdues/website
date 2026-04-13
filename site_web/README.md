# Terres Perdues — Site Web

## Prérequis
- Node.js 18+ : https://nodejs.org/

## Installation

```bash
cd site_web
npm install
```

## Développement

```bash
npm run dev
```
Ouvrir http://localhost:3000

## Production

```bash
npm run build
npm start
```

## Structure

```
app/           — Pages (Next.js App Router)
components/    — Composants réutilisables
public/        — Assets statiques (images, SVG)
  backgrounds/ — Arrière-plans (3 scènes)
  svg/         — Logos et tags SVG
```

## Personnalisation

- **Couleurs** : `tailwind.config.ts` → `green.tp` et `gold.tp`
- **Police** : `app/globals.css` → import Google Fonts
- **Navigation** : `components/Sidebar.tsx` → tableau `navigation`
- **Scènes d'accueil** : `components/HomeBackground.tsx` → tableau `scenes`
