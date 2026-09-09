# Château Latour Ségur — Suites & Spa

Refonte du site chateaulatoursegur.fr sur une stack moderne, en conservant
l'identité visuelle du site d'origine (WordPress / Elementor).

## Stack

- Next.js 15 (App Router, React 19, TypeScript)
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
- Carrousel de témoignages : slides superposés dans une même cellule de grille,
  donc pas de saut de hauteur ; navigation au clavier, au swipe, défilement
  automatique suspendu au survol et au focus.
- `prefers-reduced-motion` respecté partout (animations et défilement doux).
- Anneau de focus visible, adapté aux fonds photo (`on-dark`).

## Performance

- Images servies en AVIF/WebP par `next/image`, avec miniature floutée
  générée à la compilation (`scripts/blur.mjs` → `lib/blur.ts`).
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

## Structure

- `lib/content.ts` — tout le contenu éditorial de la homepage, centralisé
- `components/` — sections de la homepage + header/footer
- `public/images/` — visuels récupérés du site d'origine

## État

Homepage complète. Les pages internes (suites, spa, week-ends & cures,
événements, contact, bon cadeau, mentions légales) sont référencées dans la
navigation mais restent à créer.

## Notes de reprise

- Le WordPress d'origine contient du **spam injecté** (lien pharmacie dans le
  bloc « Bienvenue »). Il a été retiré du contenu repris.
- La réservation passe par un prestataire externe (secretbox.fr) : l'URL est
  centralisée dans `lib/content.ts` (`site.bookingUrl`) et reste à confirmer.
- Le formulaire newsletter n'est pas encore branché sur un prestataire d'emailing.
- **Photo du hero à remplacer** : la source est un bandeau 2500×884. En plein
  écran vertical sur mobile, le recadrage n'en laisse qu'une bande étroite. La
  hauteur du hero a été réduite sur petit écran pour limiter la perte, mais une
  photo en cadrage portrait permettrait un vrai rendu plein écran.
- **Visuels des suites en basse définition** : 408×276 seulement. Leur ratio
  d'origine (3:2) est respecté pour éviter tout étirement, mais des photos plus
  grandes amélioreraient nettement le rendu sur grand écran.
