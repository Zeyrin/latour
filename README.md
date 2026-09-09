# Château Latour Ségur — Suites & Spa

Refonte du site chateaulatoursegur.fr sur une stack moderne, en conservant
l'identité visuelle du site d'origine (WordPress / Elementor).

## Stack

- Next.js 15 (App Router, React 19, TypeScript)
- Tailwind CSS v4 (tokens CSS-first dans `app/globals.css`)
- Polices Google auto-hébergées via `next/font` (Newsreader, Roboto)

## Identité reprise du site d'origine

| Token | Valeur | Usage |
| --- | --- | --- |
| `brand` | `#44190E` | Titres, boutons, aplats |
| `sand` | `#F0EEEC` | Fonds de section |
| `stone` | `#6C6C6B` | Texte courant |
| `mist` / `line` | `#A4A4A4` / `#CCCCCC` | Surtitres, filets |

Typographie : **Newsreader** (titres et texte), **Roboto** (surtitres, boutons,
navigation — en capitales espacées). Conteneur : 1140 px.

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
