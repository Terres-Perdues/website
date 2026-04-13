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

## Déploiement GitHub Pages

Le projet est configuré pour un déploiement automatique sur GitHub Pages via GitHub Actions.

### 1) Pousser le code sur GitHub

Le workflow est dans `.github/workflows/deploy-pages.yml` et se déclenche sur la branche `main`.

### 2) Activer GitHub Pages dans le dépôt

- Aller dans `Settings` → `Pages`
- Dans `Build and deployment`, choisir `Source: GitHub Actions`

### 3) Vérifier le premier déploiement

- Aller dans l'onglet `Actions`
- Vérifier le workflow `Deploy Next.js to GitHub Pages`
- Une fois terminé, l'URL publique est affichée dans le job `deploy`

### Notes

- Le site est exporté en statique (`output: 'export'`) dans le dossier `out/`
- La configuration gère automatiquement le sous-chemin pour les dépôts de type `https://github.com/<user>/<repo>`
- Si le dépôt s'appelle `<user>.github.io`, le site est publié à la racine

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
