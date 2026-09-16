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
  // Pas de « vignoble » ici : on croyait que le château en était un.
  place: "Lussac, aux portes de Saint-Émilion",
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
  icon: "/images/icone-village.png",
  paragraphs: [
    "Amoureuse des belles bâtisses et soucieuse du bien-être de ses invités, Corinne Dray vous accueille pour un séjour reposant et bucolique proche du vignoble Saint-Émilionnais.",
    "Au cœur d'un parc ombragé avec étangs, ce lieu sera idéal pour vous ressourcer.",
    "Aménagées dans les dépendances du château, les chambres d'hôtes de charme et les vastes suites vous séduiront grâce à leur atmosphère agréable et paisible.",
    "Des chambres en suite de 28 à 60 m² avec cheminée et bain à remous sur le thème des 5 éléments.",
  ],
  cta: { label: "Découvrir le domaine", href: "/le-domaine" },
};

/**
 * Les facettes du domaine. Suites et Spa partagent une section à onglets
 * (voir SuitesSpa.tsx) : c'est la même promesse — le séjour — vue sous deux
 * angles. Les séminaires s'adressent à un autre public et ont leur propre
 * section (voir Business.tsx), pour ne pas mélanger un devis d'entreprise
 * avec une réservation de week-end.
 *
 * Note pour Corinne : la photo « Séminaires & Entreprises » est un visuel
 * temporaire (banc d'essai Unsplash, salle d'un autre établissement) — la
 * vraie photo de la salle Aliénor d'Aquitaine dressée reste attendue, voir
 * ASSETS.md. Il suffira de remplacer le fichier `seminaire-salle-alienor.jpg`
 * pour qu'elle s'affiche partout où ce visuel est utilisé.
 */
export type Facet = {
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

export const suitesSpa = {
  eyebrow: "Séjour & bien-être",
  title: "Cinq suites de caractère, un spa à privatiser",
  facets: [
    {
      id: "suites",
      tab: "Les suites",
      eyebrow: "Les suites",
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
  ] satisfies Facet[],
};

export const business: Facet = {
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
 * Quatre photos plutôt que six : les suites sont déjà montrées dans l'onglet
 * Suites de la section Suites & Spa, pas besoin de les répéter ici. Note :
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
  text: "Les suites partent vite sur les week-ends et les périodes de vendanges. Un appel suffit pour réserver, composer un séjour sur mesure ou privatiser le domaine.",
  gift: { label: "Offrir un bon cadeau", href: site.giftUrl },
};

export const seoBlock = {
  title:
    "Réservation de chambres d'hôtes de luxe à Saint-Émilion — Vivez une expérience inoubliable",
  text: "Réservez une chambre d'hôte de luxe à Saint-Émilion et découvrez le charme authentique de cette région viticole réputée. Notre établissement vous offre une expérience unique avec des chambres décorées avec goût, un service personnalisé et une vue imprenable sur les vignobles environnants. Profitez de notre petit-déjeuner continental bio et de notre piscine extérieure chauffée. Que ce soit pour une escapade romantique, une escapade gastronomique ou une expérience œnologique, notre maison d'hôtes de luxe est l'endroit idéal pour un séjour mémorable.",
};

export const footerLinks = [
  { label: "Informations pratiques", href: "/informations-pratiques" },
  { label: "Réservez votre séjour", href: site.bookingUrl },
  { label: "Bon cadeau", href: site.giftUrl },
  { label: "Spa TerreHappy", href: "/le-spa" },
  { label: "Mentions légales", href: "/mentions-legales" },
  { label: "Dossier de presse", href: "/dossier-de-presse" },
];

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
