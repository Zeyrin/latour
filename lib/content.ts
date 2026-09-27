import { euro } from "./format";
import type { MediaAsset } from "./media";
import { spaPage, suites } from "./pages";

export const site = {
  name: "Château Latour Ségur",
  tagline: "Suites & Spa TerreHappy®",
  title: "Chambres d'hôtes à Saint-Émilion — Château Latour Ségur",
  description:
    "Découvrez le charme authentique de Saint-Émilion en réservant une chambre d'hôte de luxe. Chambres décorées avec goût, vue sur les vignobles, piscine extérieure chauffée.",
  url: "https://chateaulatoursegur.fr",
  address: {
    street: "1 Lieu dit Latour",
    city: "33570 Lussac Saint-Émilion",
  },
  phone: "+33 (0)5 57 51 06 72",
  phoneHref: "tel:+33557510672",
  mapUrl: "https://maps.google.com/?q=1+Lieu+dit+Latour+33570+Lussac+Saint+Emilion",
  // Secret Box ne vend que des bons cadeaux : ce n'est pas un moteur de
  // réservation. La réservation se fait par téléphone ou via la page contact
  // tant qu'aucun moteur n'est branché.
  bookingUrl: "/contact",
  giftUrl: "https://chateaulatoursegur.secretbox.fr/",
  social: {
    facebook: "https://www.facebook.com/chateaulatoursegur",
    instagram: "https://www.instagram.com/chateaulatoursegur/",
  },
  // Fiche Google Business officielle (lien court du domaine).
  googleUrl: "https://g.page/chateaulatoursegur",
  heritage: "Château classé monument historique de France depuis 2016",
} as const;

/**
 * Navigation. Les trois activités du domaine — suites, spa, séminaires — y ont
 * le même rang : aucune n'est rangée sous une autre.
 */
export const nav = [
  { label: "Le domaine", href: "/le-domaine" },
  {
    label: "Les suites",
    href: "/les-suites",
    children: suites.map((s) => ({ label: s.name, href: `/les-suites/${s.slug}` })),
  },
  { label: "Le spa", href: "/le-spa" },
  { label: "Séminaires & événements", href: "/evenements" },
  { label: "Week-ends & cures", href: "/week-ends-et-cures" },
  { label: "Contact", href: "/contact" },
] as const;

/** Titre sur deux lignes : la seconde est en italique, signature de la page. */
export type TitleLines = readonly [string, string];

export const hero = {
  eyebrow: "Une maison, trois façons de se retrouver",
  // Le titre ne situe pas le lieu : la ligne de sous-titre le fait, et le
  // repère « Lussac · Saint-Émilion » reste visible en bas du bandeau.
  title: ["Loin du bruit,", "près de l'essentiel."] as TitleLines,
  subtitle: [
    "Suites de caractère, spa confidentiel & événements singuliers.",
    "Au cœur du vignoble de Saint-Émilion, une autre idée du temps.",
  ],
  cta: { label: "Entrez dans la maison", href: "#univers" },
  place: "Lussac · Saint-Émilion · France",
  cue: "Prendre le temps",
  heritage: ["Une demeure historique", "Monument classé"],
  media: {
    src: "/images/hero-chateau.jpg",
    alt: "Le Château Latour Ségur et son parc, à Lussac près de Saint-Émilion",
    // Seule la moitié gauche (le château) est affichée, voir `left-half`
    position: "0% 40%",
  } satisfies MediaAsset,
};

/* ---------------------------------------------------------------------------
   Les trois univers du domaine
   Suites, spa et séminaires sont trois activités de même rang. Elles partagent
   un seul type et un seul gabarit (Univers.tsx pour les cartes, Chapter.tsx
   pour les chapitres) : même structure, même longueur, une action chacune.
   Seule la tonalité de fond les distingue.
   ------------------------------------------------------------------------ */

export type Chapter = {
  id: "suites" | "spa" | "seminaires";
  /** Verbe : ce que l'on vient faire */
  verb: string;
  /** « L'art de séjourner » : légende de la photo et surtitre de la carte */
  art: string;
  label: string;
  /** Titre de la carte d'univers */
  cardTitle: TitleLines;
  cardLine: string;
  /** Titre du chapitre */
  title: TitleLines;
  paragraphs: [string, string];
  /** Trois repères factuels sous le texte */
  tags: [string, string, string];
  cta: { label: string; href: string };
  tone: "warm" | "dark" | "sand";
  media: MediaAsset;
};

const nights = suites.map((s) => s.rates.night);

export const chapters: Chapter[] = [
  {
    id: "suites",
    verb: "Séjourner",
    art: "L'art de séjourner",
    label: "Les suites",
    cardTitle: ["Les Suites", "du château"],
    cardLine: "Des nuits douces, des matins à soi.",
    title: ["Se sentir ailleurs.", "Se sentir chez soi."],
    paragraphs: [
      "Une porte que l'on pousse, la douceur d'une lumière, le charme des matières. Dans les dépendances du château, nos suites cultivent cet équilibre précieux entre le caractère d'une maison ancienne et le confort d'un refuge intime.",
      "Inspirées des cinq éléments, chacune a sa cheminée, son jardin et sa personnalité. À vous de trouver celle qui vous ressemble, puis de laisser le temps faire le reste.",
    ],
    tags: [
      `${suites.length} suites de caractère`,
      "Petit-déjeuner bio",
      `Dès ${euro(Math.min(...nights))} la nuit`,
    ],
    cta: { label: "Explorer les suites", href: "/les-suites" },
    tone: "warm",
    media: { src: "/images/suite-eau.jpg", alt: "La Suite Eau et son bain à remous" },
  },
  {
    id: "spa",
    verb: "Se ressourcer",
    art: "L'art de se ressourcer",
    label: "Le Spa TerreHappy®",
    cardTitle: ["Le Spa", "TerreHappy®"],
    cardLine: "Un retour à soi, en toute intimité.",
    title: ["Le corps s'apaise.", "L'esprit s'évade."],
    paragraphs: [
      "L'eau, la chaleur, le silence. Au Spa TerreHappy®, tout invite à renouer avec ses sensations : un hammam creusé dans la roche, un bain à remous aux minéraux de la mer Morte, et des soins imaginés par Corinne Dray.",
      "Pour quelques heures, une journée ou une soirée, venez seul, à deux ou entre amis : le spa se privatise, et nous composons avec vous votre moment de bien-être.",
    ],
    tags: [
      "Spa privatisable",
      `Jusqu'à ${spaPage.facilities[3].value} personnes`,
      `Dès ${euro(spaPage.packages[0].price)}`,
    ],
    cta: { label: "Découvrir le spa", href: "/le-spa" },
    tone: "dark",
    media: { src: "/images/spa-terrehappy.jpg", alt: "L'espace détente du Spa TerreHappy" },
  },
  {
    id: "seminaires",
    verb: "Se réunir",
    art: "L'art de se réunir",
    label: "Séminaires & événements",
    cardTitle: ["Séminaires", "& Événements"],
    cardLine: "De belles idées, de vrais liens.",
    title: ["Se retrouver.", "Faire naître l'inattendu."],
    paragraphs: [
      "Il est des lieux qui donnent une autre dimension aux rencontres. Entre vieilles pierres et nature, le château accueille vos séminaires, réceptions et célébrations dans l'ancienne chapelle et son parc.",
      "Une journée pour penser ensemble, un moment pour célébrer, des souvenirs à créer. Parlons de votre projet : nous lui donnerons une forme singulière.",
    ],
    tags: ["60 assis, 140 en cocktail", "Réceptions privées", "Sur mesure"],
    cta: { label: "Imaginer votre événement", href: "/evenements" },
    tone: "sand",
    media: {
      src: "/images/seminaire-salle-alienor.jpg",
      alt: "La salle Aliénor d'Aquitaine dressée pour un séminaire",
    },
  },
];

export const univers = {
  eyebrow: "L'esprit Latour Ségur",
  title: ["Une maison.", "Trois parenthèses."] as TitleLines,
  aside: ["Séjourner. Se ressourcer. Se réunir.", "Trois portes ouvertes sur l'essentiel."],
  footnote: "Un même lieu. Une même attention. Infiniment de possibles.",
};

/**
 * Le domaine, sous les trois univers : le toit commun. La citation est une
 * proposition de ton — à faire valider par Corinne avant mise en ligne.
 */
export const domaine = {
  eyebrow: "Le domaine · Lussac, Saint-Émilion",
  title: ["Des pierres, une histoire.", "Et surtout, une âme."] as TitleLines,
  lead: "Il y a des maisons que l'on visite. Et d'autres que l'on a l'impression de retrouver.",
  text: "Aux portes de Saint-Émilion, le Château Latour Ségur se dévoile entre arbres centenaires, étangs et vieilles pierres. Une demeure classée monument historique, vivante, où l'élégance se fait discrète et l'accueil profondément personnel.",
  quote: "Notre bonheur, c'est que vous vous sentiez ici un peu chez vous.",
  signature: "Corinne Dray",
  role: "Votre hôte",
  caption: "Le charme des choses qui durent.",
  side: "Une histoire de lieu, une histoire de liens",
  cta: { label: "L'histoire de la maison", href: "/le-domaine" },
  media: [
    { src: "/images/hero-chateau.jpg", alt: "La façade du château dans son parc", position: "18% 50%" },
    { src: "/images/hero-chateau.jpg", alt: "La piscine chauffée du domaine", position: "100% 60%" },
  ] satisfies MediaAsset[],
  pillars: [
    ["Une demeure", "classée depuis 2016"],
    ["Le privilège du calme.", "Le luxe d'être attendu."],
    ["Au cœur du vignoble", "de Saint-Émilion"],
  ] as TitleLines[],
};

export const stays = {
  eyebrow: "Week-ends & cures",
  title: ["S'accorder", "un peu plus."] as TitleLines,
  aside: ["Quelques heures ou quelques jours.", "Juste le temps qu'il vous faut."],
  cta: "Composer ma parenthèse",
  items: [
    {
      eyebrow: "Une escapade à deux",
      title: "À deux, loin du monde.",
      text: "Un réveil sans réveil, une balade dans le parc, une pause au spa. Retrouvez le plaisir d'être simplement ensemble.",
      href: "/week-ends-et-cures",
      media: { src: "/images/cottage-bois.jpg", alt: "Le Cottage Bois" },
    },
    {
      eyebrow: "Cures & bien-être",
      title: "Retrouver son équilibre.",
      text: "Accorder au corps et à l'esprit le temps dont ils ont besoin. Une parenthèse de soins à composer selon vos envies.",
      href: "/week-ends-et-cures",
      media: { src: "/images/spa-terrehappy.jpg", alt: "Le Spa TerreHappy" },
    },
    {
      eyebrow: "Des moments à partager",
      title: "Le bonheur d'être réunis.",
      text: "Une grande tablée, des conversations qui s'étirent et des liens qui se renforcent. Les plus beaux souvenirs se vivent à plusieurs.",
      href: "/evenements",
      media: { src: "/images/seminaire-salle-alienor.jpg", alt: "Une table dressée au château" },
    },
  ],
  gift: { text: "Les plus beaux cadeaux ne se gardent pas. Ils se vivent.", label: "Offrir un moment" },
};

export const pause = {
  eyebrow: "Laisser le temps au temps",
  title: ["Ici, le plus beau programme,", "c'est de n'en avoir aucun."] as TitleLines,
  media: {
    src: "/images/hero-chateau.jpg",
    alt: "",
    position: "0% 70%",
  } satisfies MediaAsset,
};

/**
 * Avis relevés sur la fiche Google du domaine le 17 sept. 2026 (4,6/5 sur
 * 88 avis). Extraits fidèles : les coupes sont marquées « […] », seules
 * l'orthographe et la typographie ont été reprises. Les avis rédigés en
 * anglais sont donnés dans la traduction affichée par Google. Les avis qui
 * citent l'ancien co-hôte ont été écartés ou coupés avant sa mention.
 * « Flo & Cindy » vient du livre d'or de l'ancien site, pas de Google.
 */
export const testimonials = {
  title: "Vos marques d'attention",
  google: {
    rating: "4,6",
    count: 88,
    label: "sur Google",
    href: site.googleUrl,
  },
  items: [
    {
      heading: "Partis avec l'envie d'y revenir",
      quote:
        "Nous avons eu l'occasion de passer deux nuits dans le Cottage Bois, pour un week-end en amoureux. Nous sommes partis du lieu avec l'envie d'y revenir : il me semble que seule cette phrase pourrait suffire pour commenter notre expérience. La propriétaire du château, par sa présence, sa douceur, sa disponibilité et des attentions personnalisées, tout en discrétion, nous a donné l'impression d'être chez nous. […] Un grand merci Corinne.",
      author: "Édouard & Charlotte",
      meta: "Avis Google · juillet 2026",
    },
    {
      heading: "Une escapade de rêve",
      quote:
        "Nous avons séjourné dans l'exquise Suite Métal, un havre de paix spacieux où l'on se sentait immédiatement chez soi. […] Le domaine lui-même est un paradis. […] Nous avons profité du spa TerreHappy, une oasis de calme qui a sublimé notre séjour. […] Le Château Latour Ségur est plus qu'une destination ; c'est une expérience, un lieu où le temps semble suspendu.",
      author: "Shawna M.",
      meta: "Avis Google · mai 2025 · traduit de l'anglais",
    },
    {
      heading: "La vraie définition des vacances",
      quote:
        "Venue pour une cure de quelques jours, je me suis à la fois ressourcée et enrichie dans ce lieu à l'histoire ancienne. Un très bon accueil du début à la fin, des soins personnalisés […], un cadre de nature. Profiter du sauna dans sa suite après un bon massage, prendre un verre dans le jardinet sous le cerisier, pouvoir choisir d'allumer la cheminée, se balader dans le verger : la vraie définition des vacances !",
      author: "Marielle M.",
      meta: "Avis Google · avril 2025",
    },
    {
      heading: "Une super expérience détente",
      quote: "Le cadre est trop joli et l'accueil est au top. Merci à toute l'équipe !",
      author: "Clea Gourmel",
      meta: "Avis Google · mars 2025",
    },
    {
      heading: "Un spa et un massage exceptionnel",
      quote:
        "Un voyage à lui seul. Un parc sublime, une restauration avec du goût, une nuit au coin du feu à écouter crépiter les bûches, des odeurs intenses dans le jardin, petit-déjeuner exquis. Une détente complète au bord de la piscine, l'odeur des figuiers qui enivre. Un coin de paradis.",
      author: "Kosciolek Thomas",
      meta: "Avis Google · septembre 2021",
    },
    {
      heading: "Une pépite",
      quote:
        "Le Château Latour Ségur est une pépite, comme les propriétaires. Nous avons passé un week-end filles exceptionnel, grâce à eux, au cadre (magnifique : la pierre, la déco, la présence des animaux… bravo pour tout ce travail), aux soins (merci Corinne… vous êtes parfaites). […] Nous reviendrons !",
      author: "Marine Ballon",
      meta: "Avis Google · janvier 2021",
    },
    {
      heading: "Une escapade proche de Bordeaux",
      quote:
        "Parlons peu, parlons escapade, sans pour autant partir bien loin de Bordeaux ! Rendez-vous à Lussac au Château Latour Ségur […] et réveillez-vous dans un écrin de verdure au plus proche de la nature. […] Authenticité, histoire et éveil des sens sont les maîtres mots de cette parenthèse douceur à Saint-Émilion !",
      author: "Roxy Nett",
      meta: "Avis Google · juin 2021",
    },
    {
      heading: "Un merveilleux week-end",
      quote:
        "Nous vous remercions pour ce merveilleux week-end, un peu court malgré tout, pour la quantité des services et de l'accueil. Nous reviendrons sans hésitation ! Merci à tout le monde ! Ps : votre esthéticienne a des doigts de fée, nous sommes ravis !",
      author: "Flo & Cindy",
    },
  ],
};

/**
 * Quatre photos plutôt que six : les suites sont déjà montrées dans leur
 * chapitre, pas besoin de les répéter ici. Note :
 * pas de page galerie dédiée pour l'instant, donc pas de lien « voir toutes
 * les photos » — il pointerait vers rien.
 */
export const gallery = {
  eyebrow: "Fragments de douceur",
  title: ["L'esprit du lieu,", "en images."] as TitleLines,
  text: "Une lumière, une matière, un instant. L'envie d'y être, déjà.",
  items: [
    {
      src: "/images/galerie-parc.jpg",
      alt: "Le parc ombragé et ses étangs",
    },
    {
      src: "/images/galerie-piscine.jpg",
      alt: "La piscine extérieure chauffée",
    },
    {
      src: "/images/galerie-petit-dejeuner.jpg",
      alt: "Le petit-déjeuner continental bio servi au château",
    },
    {
      src: "/images/galerie-facade.jpg",
      alt: "La façade du château au crépuscule",
    },
  ] satisfies MediaAsset[],
};

/**
 * Point de conversion final. Sur mobile la BookingBar reste à portée de pouce,
 * mais sur grand écran la page se terminait sans aucune action possible.
 */
export const closing = {
  eyebrow: "Le plaisir de vous accueillir",
  title: ["Et si l'on prenait", "le temps de se rencontrer ?"] as TitleLines,
  text: ["Un séjour, une pause, une belle occasion.", "Chaque histoire commence par une conversation."],
  signature: "Corinne",
  gift: { label: "Offrir un bon cadeau", href: site.giftUrl },
};

export const seoBlock = {
  title:
    "Réservation de chambres d'hôtes de luxe à Saint-Émilion — Vivez une expérience inoubliable",
  text: "Réservez une chambre d'hôte de luxe à Saint-Émilion et découvrez le charme authentique de cette région viticole réputée. Notre établissement vous offre une expérience unique avec des chambres décorées avec goût, un service personnalisé et une vue imprenable sur les vignobles environnants. Profitez de notre petit-déjeuner continental bio et de notre piscine extérieure chauffée. Que ce soit pour une escapade romantique, une escapade gastronomique ou une expérience œnologique, notre maison d'hôtes de luxe est l'endroit idéal pour un séjour mémorable.",
};

export const footer = {
  tagline: ["Une maison, trois parenthèses.", "Le bonheur d'être simplement là."],
  columns: [
    {
      title: "La maison",
      links: [
        { label: "Le domaine", href: "/le-domaine" },
        { label: "Les suites", href: "/les-suites" },
        { label: "Le Spa TerreHappy®", href: "/le-spa" },
        { label: "Séminaires & événements", href: "/evenements" },
      ],
    },
    {
      title: "Vos instants",
      links: [
        { label: "Week-ends & cures", href: "/week-ends-et-cures" },
        { label: "Offrir une parenthèse", href: site.giftUrl },
        { label: "Préparer votre venue", href: "/informations-pratiques" },
        // Le dossier de presse est un document InDesign publié chez Adobe
        { label: "Dossier de presse", href: "https://indd.adobe.com/view/ad36595b-5c01-456d-a600-23877dd7044b" },
      ],
    },
  ],
};

/**
 * Page contact. Sans moteur de réservation, l'appel reste le canal principal ;
 * le formulaire compose un e-mail pré-rempli (mailto) — pas de serveur, pas
 * de données stockées, rien à déclarer côté RGPD au-delà de l'adresse.
 */
export const contact = {
  eyebrow: "Contact & réservation",
  title: "Réservez votre séjour",
  text: "Corinne vous répond directement, par téléphone ou par e-mail, pour une nuit, un week-end, une cure ou une privatisation du domaine.",
  email: "contact@chateaulatoursegur.com",
  hours: "Tous les jours, de 10h30 à 19h",
  stays: [
    "Suite Feu",
    "Suite Eau",
    "Cottage Bois",
    "Gîte Suite Métal",
    "Gîte Suite Terre",
    "Formule week-end ou cure",
    "Soin ou journée spa",
    "Séminaire ou réception",
  ],
  access: [
    "Saint-Émilion à 8 km, Bordeaux à 45 min",
    "Gare TGV de Libourne à 15 min",
    "Aéroport de Bordeaux-Mérignac à 45 min",
    "Parking sur place, hélisurface sur demande",
  ],
};

/**
 * Mentions légales. Données société relevées au registre (SIREN 495 352 650).
 * L'hébergeur est à renseigner au moment du déploiement — voir le marqueur
 * dans la page.
 */
export const legal = {
  company: {
    name: "CHATEAU LATOUR-SEGUR SUITES & SPA",
    tradeName: "Château Latour Ségur Suites & Spa TerreHappy®",
    form: "SARL au capital de 1 000 €",
    siren: "495 352 650",
    rcs: "RCS Libourne 495 352 650",
    ape: "5520Z — Hébergement touristique et autre hébergement de courte durée",
    manager: "Corinne Dray, gérante",
    publisher: "Corinne Dray",
  },
  // À compléter avant la mise en ligne : nom, forme juridique, adresse et
  // téléphone de l'hébergeur (Vercel Inc., OVH, o2switch…).
  host: {
    name: "Hébergeur à renseigner",
    address: "Adresse de l'hébergeur à renseigner",
  },
};
