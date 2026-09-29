# Portfolio — Irinasoa Sitraka Laurà Ravelojaona

Portfolio IA / ML en **React 19 + TypeScript + Vite**, bilingue FR / EN, thème
clair et sombre. Direction éditoriale : papier et encre, une seule couleur
d'accent, schémas d'architecture dessinés en SVG à la place d'images stock.

## Lancer

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # génère dist/
npm run preview  # sert le build de production
```

## Structure

| Chemin | Rôle |
|---|---|
| `src/content.ts` | Tout le contenu bilingue (FR / EN), le nom, les liens, la géométrie de la frise et les chiffres des graphes |
| `src/styles.css` | Design system : tokens de couleur, thèmes clair/sombre, grille, typographie |
| `src/lib/hooks.ts` | Langue, thème, scrollspy, animation des graphes |
| `src/lib/motion.ts` | Variants, easings et transitions Framer Motion partagés |
| `src/components/motion/Reveal.tsx` | `Reveal` / `RevealItem` : apparition au scroll (simple ou en cascade) via Framer Motion |
| `src/components/ThemeToggle.tsx`, `LanguageSwitch.tsx`, `icons.tsx` | Bouton icône soleil / lune, sélecteur de langue à pastille glissante, icônes SVG |
| `src/components/Charts.tsx` | Primitives de graphes SVG (barres de qualité, frise du parcours) |
| `src/components/Diagrams.tsx` | Schémas d'architecture des deux projets phares (pipeline RAG, pipeline SOAP) |
| `src/components/` | Une section par fichier (Header, Hero, Signals, Work, Experience, Capabilities, About, Footer) |
| `public/assets/` | Portrait et polices auto-hébergées (Archivo, Newsreader, JetBrains Mono) |
| `public/fonts.css` | Déclarations `@font-face` |
| `public/Sitraka_Ravelojaona_CV_FR.pdf` | CV téléchargeable (français, servi pour les deux langues ; le chemin par langue est dans `LINKS.cv`) |

## Mettre à jour le contenu

Tout passe par `src/content.ts` : les deux dictionnaires `EN` et `FR` doivent
garder les mêmes clés (le type `Dict` le garantit à la compilation). Les postes
de `exp` et les entrées de `EXP_META` (années décimales de la frise) sont
alignés par index, de même que `certs` et `CERT_META`.

## Graphes

Deux visualisations alimentées **uniquement par les chiffres réels** du contenu :
seuils de qualité (pertinence RAG, précision d'extraction, computer vision) et
frise du parcours.

La palette catégorielle (`--c1`…`--c5` dans `styles.css`) est validée sur les six
contrôles du skill `dataviz` sur les deux surfaces (`#f4f4f1` et `#131210`).
Modifier ces valeurs ou les fonds impose de revalider la palette.

Chaque graphe expose un tableau de données dépliable et une infobulle au survol.

## Animations

Les transitions passent par **Framer Motion** : entrée du hero en cascade,
apparition des sections au scroll (`Reveal`), soulignement de navigation et
pastille de langue partagés (`layoutId`), rotation soleil / lune du thème,
fondu du contenu au changement de langue. `MotionConfig reducedMotion="user"`
désactive le mouvement sous `prefers-reduced-motion`.
