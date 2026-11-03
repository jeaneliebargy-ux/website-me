# Jean-Elie Bargy · CV interactif

**Site en ligne : https://jean-elie-bargy.vercel.app/**

CV interactif bilingue (français / anglais) de Jean-Elie Bargy, chef de projet en marketing, vente et événementiel, avec l'IA en renfort. Trois ans de coordination de projets clients et de marque sur des marchés internationaux.

*Interactive bilingual CV (French / English) of Jean-Elie Bargy, project manager in marketing, sales and events, with AI in support. Three years coordinating client and brand projects across international markets.*

## Ce que contient le site · What's inside

- Profil, parcours cliquable par entreprise, formation, langues et outils
- Ce que l'IA apporte à une équipe projet, et ce que je sais déjà faire avec Claude
- Un exemple de livrable : audit d'un processus de prise de commande
- Bouton FR / EN, animations qui respectent le réglage « réduire les animations »

## Technique · Tech stack

- [Vite](https://vite.dev) + [React](https://react.dev) + TypeScript
- [Tailwind CSS](https://tailwindcss.com), structure compatible [shadcn/ui](https://ui.shadcn.com) (`src/components/ui`)
- [Framer Motion](https://www.framer.com/motion/) pour les animations
- [@paper-design/shaders-react](https://github.com/paper-design/shaders) pour le fond animé de l'accueil
- Hébergé sur [Vercel](https://vercel.com), redéployé à chaque mise à jour de la branche `main`

## Lancer en local · Run locally

```bash
npm install
npm run dev
```

Vérifier que tout compile · Check the build:

```bash
npm run build
```

## Organisation du code · Code layout

- `src/content.ts` : tous les textes, en français et en anglais
- `src/App.tsx` : les sections de la page
- `src/components/ui/hero.tsx` : l'accueil animé et le bouton de langue
- `src/index.css` : les styles et la palette (vert kaki, olive, sable)

## Droits · Rights

Le contenu (textes, parcours, exemple de livrable) est personnel : merci de ne pas le réutiliser sans accord.

*The content (texts, career, example deliverable) is personal: please do not reuse it without permission.*

## Contact

jean.elie.bargy@gmail.com
