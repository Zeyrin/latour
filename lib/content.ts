import type { MediaAsset } from "./media";

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
  bookingUrl: "https://www.secretbox.fr/",
  social: {
    facebook: "https://www.facebook.com/chateaulatoursegur",
    instagram: "https://www.instagram.com/chateaulatoursegur/",
  },
  heritage: "Château classé monument historique de France depuis 2016",
} as const;

export const nav = [
  { label: "Château Latour Ségur", href: "/" },
  {
    label: "Les suites du château",
    href: "/les-suites",
    children: [
      { label: "Suite Eau", href: "/les-suites/suite-eau" },
      { label: "Suite Feu", href: "/les-suites/suite-feu" },
      { label: "Cottage Bois", href: "/les-suites/cottage-bois" },
      { label: "Gîte Suite Metal", href: "/les-suites/gite-suite-metal" },
      { label: "Gîte Suite Terre", href: "/les-suites/gite-suite-terre" },
    ],
  },
  { label: "Week-ends & cures", href: "/week-ends-et-cures" },
  { label: "Le spa", href: "/le-spa" },
  { label: "Événements", href: "/evenements" },
  { label: "Contact", href: "/contact" },
] as const;

export const hero = {
  // Le titre seul ne situe ni le lieu ni la nature de l'établissement : la
  // ligne de situation répond au « où sommes-nous » avant tout défilement.
  place: "Lussac Saint-Émilion — vignoble bordelais",
  title: "Offrez un Moment d'Exception",
  subtitle:
    "Cinq suites d'hôtes et un spa privatisable dans un château classé, au cœur d'un parc ombragé.",
  cta: { label: "Réserver votre séjour", href: site.bookingUrl },
  ctaSecondary: { label: "Découvrir nos offres", href: "/week-ends-et-cures" },
  media: {
    src: "/images/hero-chateau.jpg",
    alt: "Le Château Latour Ségur et son parc au cœur du vignoble de Lussac Saint-Émilion",
    // Le bâti est légèrement au-dessus du centre : on remonte le cadrage
    position: "50% 42%",
  } satisfies MediaAsset,
};

/**
 * Accueil et présentation du domaine, réunis en une seule section.
 * Les blocs « Bienvenue » et « Au cœur des traditions » du site d'origine
 * répétaient les mêmes informations : deux phrases redondantes ont été
 * écartées, aucune information distinctive n'a été perdue.
 */
/**
 * Repères sous le hero : quatre faits vérifiables qui distinguent le domaine,
 * lisibles en quelques secondes. Tous sont déjà affirmés ailleurs dans la page
 * — le bandeau ne fait que les rendre saisissables avant le premier défilement.
 */
export const highlights = [
  { value: "Monument historique", detail: "Château classé depuis 2016" },
  { value: "Spa TerreHappy®", detail: "Privatisable en couple ou entre amies" },
  { value: "Piscine chauffée", detail: "Extérieure, dans le parc" },
  { value: "Suites de 28 à 60 m²", detail: "Cheminée et bain à remous" },
];

export const domaine = {
  eyebrow: "Au cœur des traditions",
  title: "Bienvenue au Château Latour Ségur",
  subtitle: "Suites & Spa TerreHappy® — Lussac Saint-Émilion",
  hosts: "Corinne Dray",
  icon: "/images/icone-village.png",
  paragraphs: [
    "Amoureuse des belles bâtisses et soucieuse du bien-être de ses invités, Corinne vous accueille pour un séjour reposant et bucolique proche du vignoble Saint-Émilionnais.",
    "Au cœur d'un parc ombragé avec étangs, ce lieu sera idéal pour vous ressourcer.",
    "Aménagées dans les dépendances du château, les chambres d'hôtes de charme et les vastes suites vous séduiront grâce à leur atmosphère agréable et paisible.",
    "Des chambres en suite de 28 à 60 m² avec cheminée et bain à remous sur le thème des 5 éléments.",
  ],
  cta: { label: "Découvrir le domaine", href: "/le-domaine" },
};

/**
 * Les trois facettes du domaine — Suites & Spa, Spa TerreHappy, Séminaires &
 * Entreprises — présentées en une seule section à onglets (voir Facets.tsx),
 * plutôt qu'un résumé suivi de trois sections détaillées qui répétaient la
 * même information en la déroulant deux fois.
 *
 * Note pour Corinne : la photo « Séminaires & Entreprises » est un visuel
 * temporaire (banc d'essai Unsplash, salle d'un autre établissement) — la
 * vraie photo de la salle Aliénor d'Aquitaine dressée reste attendue, voir
 * ASSETS.md. Il suffira de remplacer le fichier `seminaire-salle-alienor.jpg`
 * pour qu'elle s'affiche partout où ce visuel est utilisé.
 */
type Facet = {
  id: string;
  tab: string;
  eyebrow: string;
  title: string;
  intro: string;
  href: string;
  ctas: { label: string; href: string }[];
  media: MediaAsset;
  list?: { name: string; href: string; excerpt: string }[];
  chips?: string[];
  stats?: { value: string; unit: string; detail: string }[];
};

export const facets: Facet[] = [
  {
    id: "suites",
    tab: "Suites & Spa",
    eyebrow: "Suites & Spa",
    title: "Séjourner au château",
    intro: "Cinq suites de caractère, de 28 à 60 m², dans les dépendances du domaine.",
    href: "/les-suites",
    ctas: [{ label: "Voir les cinq suites", href: "/les-suites" }],
    media: {
      src: "/images/suite-eau.jpg",
      alt: "La Suite Eau et son bain à remous",
    } satisfies MediaAsset,
    list: [
      {
        name: "Suite Feu",
        href: "/les-suites/suite-feu",
        excerpt:
          "Situé au cœur du vignoble bordelais, venez séjourner dans une suite de charme, sous la thématique des 5 éléments…",
      },
      {
        name: "Suite Eau",
        href: "/les-suites/suite-eau",
        excerpt:
          "Laissez-vous surprendre par la suite Eau, combinaison parfaite de raffinement et de douceur aux ambiances de l'eau.",
      },
      {
        name: "Cottage Bois",
        href: "/les-suites/cottage-bois",
        excerpt:
          "Couleur du blé, de la pierre et du bois qui embellissent, font de ce cottage un endroit très agréable pour se ressourcer.",
      },
    ],
  },
  {
    id: "spa",
    tab: "Spa TerreHappy®",
    eyebrow: "Spa TerreHappy®",
    title: "Se ressourcer au spa",
    intro:
      "Spa TerreHappy® vous donne la possibilité de privatiser ce lieu magique pour une journée, un après-midi ou une soirée, entre amies ou en couple. Profitez de l'espace spa et détente en toute intimité et relaxez-vous.",
    href: "/le-spa",
    ctas: [{ label: "Découvrir nos soins", href: "/le-spa" }],
    media: {
      src: "/images/spa-terrehappy.jpg",
      alt: "L'espace détente du Spa TerreHappy",
    } satisfies MediaAsset,
  },
  {
    id: "entreprises",
    tab: "Séminaires & Entreprises",
    eyebrow: "Séminaires & entreprises",
    title: "Réunir vos équipes au cœur du vignoble",
    intro:
      "À quelques kilomètres de Saint-Émilion et à courte distance de Bordeaux, le domaine accueille séminaires, journées d'étude, réunions de direction et réceptions clients dans un cadre qui change de la salle de réunion.",
    href: "/evenements",
    ctas: [
      { label: "Demander un devis", href: "/contact" },
      { label: "Voir les espaces", href: "/evenements" },
    ],
    media: {
      src: "/images/seminaire-salle-alienor.jpg",
      alt: "La salle Aliénor d'Aquitaine dressée pour un séminaire",
    } satisfies MediaAsset,
    chips: [
      "Séminaire résidentiel",
      "Journée d'étude",
      "Réunion de direction",
      "Team building",
      "Réception client",
      "Soirée d'entreprise",
    ],
    // Chiffres tirés de l'offre événementielle du domaine — à revalider avec
    // Corinne avant toute mise en ligne commerciale.
    stats: [
      {
        value: "60",
        unit: "personnes assises",
        detail: "Salle Aliénor d'Aquitaine, jusqu'à 140 en format cocktail.",
      },
      {
        value: "5",
        unit: "suites sur place",
        detail: "Vos participants dorment sur le domaine, avec accès à la piscine.",
      },
      {
        value: "1",
        unit: "parc privatisable",
        detail: "Étangs, espaces extérieurs et spa TerreHappy en exclusivité.",
      },
    ],
  },
];

export const testimonials = {
  title: "Vos marques d'attention",
  items: [
    {
      heading: "Un merveilleux week-end",
      quote:
        "Nous vous remercions pour ce merveilleux week-end, un peu court malgré tout, pour la quantité des services et de l'accueil. Nous reviendrons sans hésitation ! Merci à tout le monde ! Ps : votre esthéticienne a des doigts de fée, nous sommes ravis !",
      author: "Flo & Cindy",
    },
    {
      heading: "Une escapade proche de Bordeaux",
      quote:
        "Parlons peu, parlons escapade, sans pour autant partir bien loin de Bordeaux ! Rendez-vous à Lussac au Château Latour Ségur tenu par Corinne, qui fera tout pour rendre ce moment aussi enrichissant qu'agréable.",
      author: "Roxy Nett",
    },
    {
      heading: "Un spa et un massage exceptionnel",
      quote:
        "Un voyage à lui seul. Un parc sublime, une restauration avec du goût, une nuit au coin du feu à écouter crépiter les bûches, des odeurs intenses dans le jardin.",
      author: "Kosciolek Thomas",
    },
    {
      heading: "Une pépite",
      quote:
        "Le Château Latour Ségur est une pépite, comme les propriétaires. Nous avons passé un week-end filles exceptionnel, grâce à eux, au cadre magnifique : la pierre, la déco, la présence des animaux… bravo pour tout ce travail, et merci pour les soins.",
      author: "Marine Ballon",
    },
  ],
};

/**
 * Quatre photos plutôt que six : les suites sont déjà montrées dans l'onglet
 * Suites & Spa de la section Facets, pas besoin de les répéter ici. Note :
 * pas de page galerie dédiée pour l'instant, donc pas de lien « voir toutes
 * les photos » — il pointerait vers rien.
 */
export const gallery = {
  eyebrow: "Le domaine en images",
  title: "Un parc, des étangs, cinq univers",
  text: "Le château, ses dépendances et son parc ombragé se découvrent au fil des saisons.",
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
  eyebrow: "Séjourner au château",
  title: "Réservez vos dates",
  text: "Les suites partent vite sur les week-ends et les périodes de vendanges. Pour une demande sur mesure, un séjour à plusieurs ou une privatisation, un appel suffit.",
};

export const seoBlock = {
  title:
    "Réservation de chambres d'hôtes de luxe à Saint-Émilion — Vivez une expérience inoubliable",
  text: "Réservez une chambre d'hôte de luxe à Saint-Émilion et découvrez le charme authentique de cette région viticole réputée. Notre établissement vous offre une expérience unique avec des chambres décorées avec goût, un service personnalisé et une vue imprenable sur les vignobles environnants. Profitez de notre petit-déjeuner continental bio et de notre piscine extérieure chauffée. Que ce soit pour une escapade romantique, une escapade gastronomique ou une expérience œnologique, notre maison d'hôtes de luxe est l'endroit idéal pour un séjour mémorable.",
};

export const footerLinks = [
  { label: "Informations pratiques", href: "/informations-pratiques" },
  { label: "Réservez votre séjour", href: site.bookingUrl },
  { label: "Spa TerreHappy", href: "/le-spa" },
  { label: "Mentions légales", href: "/mentions-legales" },
  { label: "Dossier de presse", href: "/dossier-de-presse" },
];
