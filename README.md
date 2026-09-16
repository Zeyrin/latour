# Château Latour Ségur — Suites & Spa

Refonte du site chateaulatoursegur.fr sur une stack moderne, en conservant
l'identité visuelle du site d'origine (WordPress / Elementor).

## Stack

- Next.js 16 (App Router, React 19, TypeScript)
- Tailwind CSS v4 (tokens CSS-first dans `app/globals.css`)
- Polices Google auto-hébergées via `next/font` (Newsreader, Roboto)
- Aucune dépendance runtime tierce, aucun script externe

## Identité reprise du site d'origine

| Token | Valeur | Usage |
| --- | --- | --- |
| `brand` | `#44190E` | Titres, boutons, aplats |
| `sand` | `#F0EEEC` | Fonds de section |
| `stone` | `#6C6C6B` | Texte courant |
| `mist` / `line` | `#A4A4A4` / `#CCCCCC` | Surtitres, filets |

Typographie : **Newsreader** (titres et texte), **Roboto** (surtitres, boutons,
navigation — en capitales espacées). Conteneur : 1140 px.

## Confort d'usage

- Titres en `clamp()` : la typographie grandit progressivement, sans palier
  brutal entre breakpoints.
- Barre de navigation complète à partir de `xl` seulement — les libellés
  français sont longs et se chevauchaient en dessous. En deçà, panneau plein
  écran défilable, fermeture à l'Échap, défilement de fond bloqué.
- Cibles tactiles de 44 px minimum (`tap`).
- Apparition en fondu des sections à l'entrée dans le viewport, avec repli
  `noscript` pour rester visible sans JavaScript.
- Galerie avec visionneuse : ouverture au clic, navigation clavier et au
  swipe, défilement de fond bloqué, focus rendu à la vignette d'origine.
- Barre d'action mobile (appeler / réserver) qui apparaît une fois le bandeau
  d'accueil dépassé.
- Carrousel de témoignages : slides superposés dans une même cellule de grille,
  donc pas de saut de hauteur ; navigation au clavier, au swipe, défilement
  automatique suspendu au survol et au focus.
- `prefers-reduced-motion` respecté partout (animations et défilement doux).
- Anneau de focus visible, adapté aux fonds photo (`on-dark`).

## Performance

- Images servies en AVIF/WebP par `next/image`, avec miniature floutée
  générée à la compilation (`scripts/media.mjs` → `lib/media-manifest.ts`).
- Hero en `priority` + `fetchPriority="high"` ; le reste en chargement paresseux.
- Hauteurs en `svh` plutôt que `vh` : pas de saut quand la barre d'adresse
  mobile se rétracte.
- Homepage entièrement statique : 2,8 kB, 117 kB de JS au premier chargement.

## Sécurité

En-têtes définis dans `next.config.mjs` : CSP, HSTS, `X-Frame-Options: DENY`,
`X-Content-Type-Options`, `Referrer-Policy`, `Permissions-Policy`. L'en-tête
`X-Powered-By` est désactivé. La CSP conserve `'unsafe-inline'` pour les
scripts d'hydratation de Next : l'éliminer imposerait un nonce par requête,
donc le rendu dynamique de toutes les pages.

## Commandes

```bash
npm run dev     # développement
npm run build   # build de production
npm start       # serveur de production
```

## Photos

La mise en page ne dépend pas des fichiers présents : chaque emplacement a son
cadre et son ratio, et une photo non livrée s'affiche en cadre neutre « Photo à
venir » qui occupe exactement la même place. **[ASSETS.md](ASSETS.md) liste les
noms de fichiers et les définitions attendues** — c'est le document à
transmettre au photographe.

Après chaque livraison :

```bash
npm run media   # réindexe dimensions et miniatures floutées
```

Ce script tourne aussi automatiquement avant `npm run build`.

## Structure

- `lib/content.ts` — tout le contenu éditorial de la homepage, centralisé
- `lib/media.ts` + `lib/media-manifest.ts` — index des photos (dimensions,
  miniatures floutées, photos manquantes)
- `components/Media.tsx` — primitive image : chargement progressif, cadre de
  remplacement, zoom au survol
- `components/` — sections de la homepage + header/footer
- `public/images/` — photos du site
- `scripts/media.mjs` — réindexation des photos

## État

Site complet : accueil, les cinq suites, spa, week-ends & cures, événements,
domaine, informations pratiques, contact, mentions légales. Le bon cadeau et
le dossier de presse sont des liens externes (Secret Box, Adobe).

## Domaine et redirections

Domaine canonique : `chateaulatoursegur.fr`. Les anciens domaines
(`chateaulatoursegur.com`, `chambredhotesaintemilion.fr`, `spaterrehappy.fr`)
doivent pointer sur le même déploiement : `redirects.mjs` les ramène en 308
vers le canonique et redirige chaque ancienne URL WordPress vers la page
équivalente. Les deux pages de spam de l'ancien sitemap répondent 410.
Après mise en ligne : déclarer les quatre domaines dans Search Console et
faire un « changement d'adresse » depuis `chambredhotesaintemilion.fr`.

## À valider avec Corinne avant mise en ligne

- Tarifs des suites, du spa et des événements (repris de l'ancien site).
- Composition et prix des week-ends et cures (`lib/pages.ts`, `staysPage`) :
  seuls les noms sont connus.
- Hébergeur pour les mentions légales (`lib/content.ts`, `legal.host`).
- Adresse e-mail `contact@chateaulatoursegur.com` toujours relevée.

## Notes de reprise

- Le WordPress d'origine contient du **spam injecté** (lien pharmacie dans le
  bloc « Bienvenue »). Il a été retiré du contenu repris.
- Secret Box (secretbox.fr) ne vend que des **bons cadeaux** — ce n'est pas un
  moteur de réservation. L'URL est dans `lib/content.ts` (`site.giftUrl`). La
  réservation se fait par téléphone / page contact (`site.bookingUrl`) tant
  qu'aucun moteur de réservation n'est choisi.
- Le formulaire newsletter n'est pas encore branché sur un prestataire d'emailing.
- **Photos en attente de livraison.** Les visuels actuellement en place
  proviennent de l'ancien site et sont de faible définition (suites en 408×276,
  bandeau d'accueil en 2500×884). La mise en page vise les définitions listées
  dans [ASSETS.md](ASSETS.md) : les remplacer suffit, sans toucher au code.
