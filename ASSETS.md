# Photos à livrer

La mise en page est terminée et ne dépend plus des fichiers actuels : chaque
emplacement a son cadre, son ratio et son texte alternatif. Les photos qui ne
sont pas encore là s'affichent en cadre neutre « Photo à venir », sans décaler
quoi que ce soit.

## Comment intégrer une livraison

1. Déposer les fichiers dans `public/images/`, **en respectant exactement les
   noms ci-dessous** (une photo qui remplace l'existante écrase simplement le
   fichier).
2. Lancer `npm run media` — dimensions et miniatures floutées sont réindexées.
3. Vérifier avec `npm run dev`.

`npm run build` relance l'indexation automatiquement : aucune étape ne peut
être oubliée avant une mise en ligne.

## Liste des fichiers attendus

| Fichier | Où | Cadre à l'écran | Définition minimale conseillée |
| --- | --- | --- | --- |
| `hero-chateau.jpg` | Bandeau d'accueil | Plein écran, recadré | **2800 × 1900** (3:2 ou 4:3) |
| `suite-feu.jpg` | Carte Suite Feu | Portrait 4:5 | **1200 × 1500** |
| `suite-eau.jpg` | Carte Suite Eau | Portrait 4:5 | **1200 × 1500** |
| `cottage-bois.jpg` | Carte Cottage Bois | Portrait 4:5 | **1200 × 1500** |
| `spa-terrehappy.jpg` | Bandeau Spa | Pleine largeur, recadré | **2400 × 1350** (16:9) |
| `galerie-parc.jpg` | Galerie, grande vignette | Carré 1:1 | **1800 × 1800** |
| `galerie-piscine.jpg` | Galerie | Carré 1:1 | **1400 × 1400** |
| `galerie-petit-dejeuner.jpg` | Galerie | Carré 1:1 | **1400 × 1400** |
| `galerie-suite-metal.jpg` | Galerie | Carré 1:1 | **1400 × 1400** |
| `galerie-suite-terre.jpg` | Galerie | Carré 1:1 | **1400 × 1400** |
| `galerie-facade.jpg` | Galerie | Carré 1:1 | **1400 × 1400** |
| `seminaire-salle-alienor.jpg` | Section Séminaires | Paysage 4:3 | **1600 × 1200** |

Les photos de galerie sont aussi affichées en grand dans la visionneuse : plus
la source est définie, mieux c'est. Une image plus grande que la valeur
indiquée ne pose aucun problème — le site génère lui-même toutes les tailles.

## Consignes de cadrage

- **Le hero est recadré en hauteur sur mobile.** Prévoir de la marge autour du
  sujet, en haut comme en bas ; un bandeau très panoramique ne laisse qu'une
  bande étroite sur téléphone. Le point de cadrage se règle sans retoucher le
  fichier, dans `lib/content.ts` (`hero.media.position`).
- **Le bandeau Spa porte du texte à gauche.** Garder cette moitié calme :
  ciel, mur, eau — pas de détail important.
- **Les cartes de suites sont verticales.** Une photo horizontale y perdrait
  ses bords gauche et droit.
- **La galerie recadre en carré.** Le sujet doit tenir au centre.
- **La photo séminaire doit montrer la salle Aliénor d'Aquitaine dressée** —
  tables installées, salle prête. Une salle vide se vend mal.

## Format

- JPEG qualité 85 ou plus, **profil sRGB**, rotation EXIF déjà appliquée.
- Pas de filigrane ni de texte incrusté.
- Le poids du fichier source n'a pas d'importance : le site recompresse en
  AVIF/WebP à la volée. Mieux vaut une source généreuse qu'une source déjà
  dégradée.

## Ajouter d'autres photos à la galerie

Déposer le fichier, puis ajouter son entrée dans `lib/content.ts` :

```ts
{ src: "/images/galerie-vignes.jpg", alt: "Les vignes au petit matin" },
```

Le texte `alt` est lu par les lecteurs d'écran et par les moteurs de recherche :
décrire ce que montre la photo, pas le nom du fichier.
