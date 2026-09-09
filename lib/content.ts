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
  title: "Offrez un Moment d'Exception",
  cta: { label: "Découvrir nos offres", href: "/week-ends-et-cures" },
  media: {
    src: "/images/hero-chateau.jpg",
    alt: "Le Château Latour Ségur et son parc au cœur du vignoble de Lussac Saint-Émilion",
    // Le bâti est légèrement au-dessus du centre : on remonte le cadrage
    position: "50% 42%",
  } satisfies MediaAsset,
};

export const welcome = {
  title: "Bienvenue au Château Latour Ségur Suites & Spa TerreHappy®",
  hosts: "Corinne Dray",
  paragraphs: [
    "Amoureuse des belles bâtisses et soucieuse du bien-être de ses invités, Corinne vous accueille au Château Latour Ségur Suites & Spa TerreHappy® pour un séjour reposant et bucolique proche du vignoble Saint-Émilionnais.",
    "En séjournant au Château Latour Ségur Suites & Spa TerreHappy®, Corinne partagera avec vous sa passion pour cette région pleine de richesses culturelles.",
  ],
};

export const traditions = {
  eyebrow: "Au cœur des traditions",
  title: "Lussac Saint-Émilion",
  icon: "/images/icone-village.png",
  paragraphs: [
    "Situé au cœur du vignoble bordelais, proche du village de Saint-Émilion, le Château Latour Ségur Suites & Spa TerreHappy® vous ouvre ses portes le temps d'un séjour de détente et de bien-être.",
    "Au cœur d'un parc ombragé avec étangs, ce lieu sera idéal pour vous ressourcer.",
    "Aménagées dans les dépendances du château, les chambres d'hôtes de charme et les vastes suites vous séduiront grâce à leur atmosphère agréable et paisible.",
    "Des chambres en suite de 28 à 60 m² avec cheminée et bain à remous sur le thème des 5 éléments.",
  ],
  cta: { label: "Découvrir le domaine", href: "/le-domaine" },
};

export const suitesSection = {
  eyebrow: "Suites & Spa",
  title: "Chambres d'hôtes de prestige Suites & Spa Saint-Émilion",
  items: [
    {
      name: "Suite Feu",
      href: "/les-suites/suite-feu",
      media: {
        src: "/images/suite-feu.jpg",
        alt: "La Suite Feu et sa cheminée",
      } satisfies MediaAsset,
      excerpt:
        "Situé au cœur du vignoble bordelais, venez séjourner dans une suite de charme, sous la thématique des 5 éléments…",
    },
    {
      name: "Suite Eau",
      href: "/les-suites/suite-eau",
      media: {
        src: "/images/suite-eau.jpg",
        alt: "La Suite Eau et son bain à remous",
      } satisfies MediaAsset,
      excerpt:
        "Laissez-vous surprendre par la suite Eau, combinaison parfaite de raffinement et de douceur aux ambiances de l'eau.",
    },
    {
      name: "Cottage Bois",
      href: "/les-suites/cottage-bois",
      media: {
        src: "/images/cottage-bois.jpg",
        alt: "Le Cottage Bois et ses tons de blé et de pierre",
      } satisfies MediaAsset,
      excerpt:
        "Couleur du blé, de la pierre et du bois qui embellissent, font de ce cottage un endroit très agréable pour se ressourcer.",
    },
  ],
};

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

export const spa = {
  eyebrow: "Spa TerreHappy®",
  title: "Immergez-vous dans la magie du Spa",
  text: "Spa TerreHappy® vous donne la possibilité de privatiser ce lieu magique pour une journée, un après-midi ou une soirée, entre amies ou en couple. Profitez de l'espace spa et détente en toute intimité et relaxez-vous.",
  cta: { label: "Découvrir nos soins", href: "/le-spa" },
  media: {
    src: "/images/spa-terrehappy.jpg",
    alt: "L'espace détente du Spa TerreHappy",
  } satisfies MediaAsset,
};

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
      src: "/images/galerie-suite-metal.jpg",
      alt: "Le Gîte Suite Metal",
    },
    {
      src: "/images/galerie-suite-terre.jpg",
      alt: "Le Gîte Suite Terre",
    },
    {
      src: "/images/galerie-facade.jpg",
      alt: "La façade du château au crépuscule",
    },
  ] satisfies MediaAsset[],
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
