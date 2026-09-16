import type { MediaAsset } from "./media";

/**
 * Contenu des pages intérieures. Repris de l'ancien site (chambredhotesaintemilion.fr
 * et spaterrehappy.fr, relevés le 17 sept. 2026) et nettoyé : fautes, répétitions
 * et mentions d'André retirées. Les tarifs sont ceux affichés sur l'ancien site —
 * à revalider avec Corinne avant mise en ligne, ils datent probablement de 2023.
 */

/* ------------------------------------------------------------------ Suites */

export type Suite = {
  slug: string;
  name: string;
  /** Titre de la page, repris tel quel de l'ancien site quand il était bon */
  headline: string;
  element: string;
  surface: number;
  capacity: string;
  tagline: string;
  description: string;
  media: MediaAsset;
  /** Ce qui distingue cette suite des autres, en trois ou quatre mots-clés */
  highlights: string[];
  amenities: { group: string; items: string[] }[];
  rates: {
    night: number;
    week: number;
    /** Tarif haute saison (1er mai → 30 septembre, accès spa inclus) */
    highSeasonNight?: number;
  };
  /** Particularités à signaler avant de réserver */
  notes?: string[];
};

const commonAmenities = {
  welcome: { group: "Accueil", items: ["Panier de courtoisie"] },
  comfort: (garden: string) => ({
    group: "Confort",
    items: ["Cheminée à bois", "Wifi gratuit", `Parking et ${garden}`, "Coffre-fort", "Sèche-serviettes et sèche-cheveux"],
  }),
  bedding: (surface: number) => ({
    group: `Chambre — ${surface} m²`,
    items: ["Lit 160 × 200", "Literie et oreillers Tempur® à mémoire de forme"],
  }),
  kitchen: {
    group: "Cuisine",
    items: [
      "Deux plaques de cuisson",
      "Réfrigérateur, micro-ondes, grille-pain",
      "Machine à café, bouilloire, café et thé",
      "Table et assises",
    ],
  },
  housekeeping: {
    group: "Ménage",
    items: ["Quotidien à la nuitée", "Hebdomadaire à la semaine"],
  },
};

export const suites: Suite[] = [
  {
    slug: "suite-feu",
    name: "Suite Feu",
    headline: "Bienvenue à la Suite Feu",
    element: "Feu",
    surface: 46,
    capacity: "2 à 4 personnes",
    tagline: "Séjournez dans une suite de charme : vos nuits seront réparatrices et votre séjour inoubliable.",
    description:
      "La Suite Feu, 46 m² exposés sud-ouest, s'éveille à la lumière naturelle. Baignoire à remous pour deux, lit king size avec literie Tempur® à mémoire de forme, cheminée à bois, cuisine aménagée, douche à l'italienne et jardin privatif.",
    media: { src: "/images/suite-feu.jpg", alt: "La Suite Feu et sa cheminée" },
    highlights: ["Bain à remous", "Cheminée", "Jardin privatif", "Sud-ouest"],
    amenities: [
      commonAmenities.welcome,
      commonAmenities.comfort("jardin privatif"),
      commonAmenities.bedding(46),
      { group: "Salle de bain", items: ["Bain à remous pour deux", "Douche à l'italienne"] },
      commonAmenities.kitchen,
      commonAmenities.housekeeping,
    ],
    rates: { night: 210, week: 1350, highSeasonNight: 240 },
  },
  {
    slug: "suite-eau",
    name: "Suite Eau",
    headline: "Immersion de lumière à la Suite Eau",
    element: "Eau",
    surface: 30,
    capacity: "2 à 4 personnes",
    tagline: "Une parenthèse ressourçante, tout confort, pour un séjour réjouissant.",
    description:
      "Laissez-vous surprendre par la Suite Eau, 30 m² exposés à l'ouest et baignés de soleil. Baignoire à remous pour deux, literie Tempur® à mémoire de forme, cheminée à bois, kitchenette, douche à l'italienne et jardin. Facile d'accès pour les personnes à mobilité réduite.",
    media: { src: "/images/suite-eau.jpg", alt: "La Suite Eau et son bain à remous" },
    highlights: ["Bain à remous", "Cheminée", "Accès PMR", "Ouest"],
    amenities: [
      commonAmenities.welcome,
      commonAmenities.comfort("jardin"),
      commonAmenities.bedding(30),
      { group: "Salle de bain", items: ["Bain à remous pour deux", "Douche à l'italienne"] },
      commonAmenities.kitchen,
      commonAmenities.housekeeping,
    ],
    rates: { night: 195, week: 1135, highSeasonNight: 210 },
    notes: [
      "Suite de plain-pied, accessible aux personnes à mobilité réduite.",
      "Les chats du domaine, Cléopâtre et Tigresse, y ont leurs habitudes : elle est destinée à leurs amis.",
    ],
  },
  {
    slug: "cottage-bois",
    name: "Cottage Bois",
    headline: "Vivez un moment privilégié au Cottage Bois",
    element: "Bois",
    surface: 28,
    capacity: "2 à 3 personnes",
    tagline: "Dans cet écrin authentique, savourez un moment paisible et agréable.",
    description:
      "Lieu propice à la détente, le Cottage Bois, 28 m² exposés plein est, invite à la rêverie. Sauna, literie Tempur® à mémoire de forme, cheminée à bois, kitchenette, douche à l'italienne et jardin privatif.",
    media: { src: "/images/cottage-bois.jpg", alt: "Le Cottage Bois, ses tons de blé et de pierre" },
    highlights: ["Sauna", "Cheminée", "Jardin privatif", "Plein est"],
    amenities: [
      commonAmenities.welcome,
      commonAmenities.comfort("jardin privatif"),
      commonAmenities.bedding(28),
      { group: "Salle de bain", items: ["Sauna pour deux", "Douche à l'italienne"] },
      commonAmenities.kitchen,
      commonAmenities.housekeeping,
    ],
    rates: { night: 195, week: 1135, highSeasonNight: 210 },
  },
  {
    slug: "gite-suite-metal",
    name: "Gîte Suite Métal",
    headline: "Bienvenue à la Suite Métal",
    element: "Métal",
    surface: 80,
    capacity: "2 à 4 personnes",
    tagline: "La plus vaste des suites, avec sa mezzanine : idéale à quatre ou pour une semaine.",
    description:
      "La Suite Métal, 80 m² exposés sud-ouest, s'éveille à la lumière naturelle. Baignoire à remous pour deux, lit king size avec literie Tempur® à mémoire de forme, cheminée à bois, cuisine aménagée, douche à l'italienne, mezzanine et jardin privatif.",
    media: { src: "/images/suite-metal.jpg", alt: "La Suite Métal et sa mezzanine" },
    highlights: ["80 m²", "Mezzanine", "Bain à remous", "Cuisine aménagée"],
    amenities: [
      commonAmenities.welcome,
      commonAmenities.comfort("jardin privatif"),
      commonAmenities.bedding(80),
      { group: "Salle de bain", items: ["Bain à remous pour deux", "Douche à l'italienne"] },
      commonAmenities.kitchen,
      commonAmenities.housekeeping,
    ],
    rates: { night: 350, week: 1900 },
  },
  {
    slug: "gite-suite-terre",
    name: "Gîte Suite Terre",
    headline: "Bienvenue à la Suite Terre",
    element: "Terre",
    surface: 54,
    capacity: "2 à 4 personnes",
    tagline: "Séjournez dans une suite de charme : vos nuits seront réparatrices et votre séjour inoubliable.",
    description:
      "La Suite Terre, 54 m² exposés sud-ouest, s'éveille à la lumière naturelle. Baignoire à remous pour deux, lit king size avec literie Tempur® à mémoire de forme, cheminée à bois, cuisine aménagée, douche à l'italienne et jardin privatif.",
    media: { src: "/images/suite-terre.jpg", alt: "La Suite Terre et son jardin" },
    highlights: ["54 m²", "Bain à remous", "Cuisine aménagée", "Sud-ouest"],
    amenities: [
      commonAmenities.welcome,
      commonAmenities.comfort("jardin privatif"),
      commonAmenities.bedding(54),
      { group: "Salle de bain", items: ["Bain à remous pour deux", "Douche à l'italienne"] },
      commonAmenities.kitchen,
      commonAmenities.housekeeping,
    ],
    rates: { night: 240, week: 1350 },
  },
];

export const suitesPage = {
  eyebrow: "Les suites du château",
  title: "Cinq suites, cinq éléments",
  text: "Aménagées dans les dépendances du château, les suites reprennent le thème des cinq éléments. Chacune a sa cheminée, son jardin et sa cuisine ; toutes donnent accès au parc, à la piscine chauffée en saison et au Spa TerreHappy®.",
  included: [
    "Petit-déjeuner continental bio",
    "Piscine extérieure chauffée, de mai à septembre",
    "Parc de 4 hectares, étangs et potager",
    "Parking privé, wifi",
  ],
  extras: [
    { label: "Lit supplémentaire", value: "55 € par personne et par nuit" },
    { label: "Petit-déjeuner servi en suite", value: "18 € par personne" },
    { label: "Petit-déjeuner buffet", value: "15 € par personne" },
  ],
  season: "Du 1er mai au 30 septembre, le tarif nuitée inclut l'accès à l'espace détente du spa.",
};

export const suiteBySlug = (slug: string) => suites.find((s) => s.slug === slug);

/* --------------------------------------------------------------------- Spa */

export const spaPage = {
  eyebrow: "Spa TerreHappy®",
  title: "Ressourcez-vous au Spa TerreHappy®",
  intro:
    "Le Spa TerreHappy® est un refuge pour les sens et un havre de paix pour oublier les contraintes du quotidien. Dans ce spa nouvelle génération imaginé par Corinne Dray, créatrice du concept, on vient se ressourcer, trouver une écoute et se détendre avec des soins de grande qualité.",
  media: { src: "/images/spa-terrehappy.jpg", alt: "L'espace détente du Spa TerreHappy" } satisfies MediaAsset,
  facilities: [
    { value: "3", label: "cabines de soins", detail: "En solo ou en duo" },
    { value: "6", label: "places au hammam", detail: "Creusé dans la roche" },
    { value: "2", label: "au bain à remous", detail: "Aux minéraux de la mer Morte" },
    { value: "12", label: "personnes en privatisation", detail: "Journée, après-midi ou soirée" },
  ],
  lounge:
    "L'espace détente réunit fauteuil shiatsu, balancelle, bol d'air Jacquier, hammam et, en saison, la piscine chauffée.",
  packages: [
    {
      name: "Accès à l'espace détente",
      duration: "À la demi-journée",
      price: 55,
      includes: "Fauteuil shiatsu, balancelle, bol d'air Jacquier, hammam ou piscine selon la saison.",
    },
    {
      name: "Pause bien-être découverte",
      duration: "1 h 30",
      price: 110,
      includes: "30 min de soin au choix, hammam et espace détente.",
    },
    {
      name: "Pause bien-être",
      duration: "2 h",
      price: 140,
      includes: "1 h de soin au choix et espace détente.",
    },
    {
      name: "Parcours initiatique",
      duration: "3 h",
      price: 195,
      includes: "1 h de soin au choix, bain à remous aux minéraux de la mer Morte, espace détente.",
    },
    {
      name: "Escapade bien-être",
      duration: "Demi-journée",
      price: 335,
      priceDuo: 640,
      includes:
        "2 h de soin corps reminéralisant (gommage, enveloppement de boue noire, bain à remous), 1 h de soin visage ou corps, hammam et espace détente.",
    },
  ],
  massages: {
    intro: "Quatre techniques, choisies selon ce dont vous avez besoin ce jour-là.",
    items: [
      { name: "Amma assis", detail: "Inspiré du shiatsu, pour évacuer le stress" },
      { name: "Californien", detail: "Détente profonde, soulage les tensions musculaires" },
      { name: "Tuina", detail: "Massage chinois, dynamise le corps et stimule l'immunité" },
      { name: "Pré et post-natal", detail: "Accompagne la femme enceinte, avant et après" },
    ],
    rates: [
      { duration: "30 min", price: 65 },
      { duration: "45 min", price: 90 },
      { duration: "60 min", price: 120 },
      { duration: "90 min", price: 160 },
    ],
  },
  otherCare: [
    "Soins visage et corps LPG® / Cellu M6",
    "Soins visage par type de peau et par âge",
    "Constellations de soins",
    "Vitalité et lumière du regard",
    "Soins des mains et des pieds, pédispa",
    "Épilations",
  ],
  privatisation: {
    title: "Privatiser le spa",
    text: "Pour une journée, un après-midi ou une soirée, entre amies ou en couple : le spa entier, en toute intimité, jusqu'à 10 à 12 personnes.",
    price: 1500,
  },
};

/* ------------------------------------------------------- Week-ends & cures */

export const staysPage = {
  eyebrow: "Week-ends & cures",
  title: "Séjours bien-être au château",
  text: "Une suite, le spa et le temps qu'il faut. Les formules associent nuitées, petits-déjeuners et soins ; elles se composent sur mesure selon vos dates, votre suite et la durée souhaitée.",
  // Seuls les noms des formules sont repris de l'ancien site (formulaire de
  // réservation) : leur composition et leurs tarifs ne sont publiés nulle
  // part. Les descriptions ci-dessous sont volontairement générales — à
  // remplacer par le détail réel fourni par Corinne.
  weekends: {
    title: "Les week-ends",
    intro: "Deux nuits en suite, petits-déjeuners et des soins au spa, selon la formule.",
    items: [
      { name: "Week-end Romantique", detail: "Pour deux, dans une suite avec bain à remous, et un soin en duo." },
      { name: "Découverte Sérénité", detail: "Un premier contact avec le spa : un soin par jour et l'espace détente." },
      { name: "Découverte Évasion", detail: "La version la plus complète : plusieurs soins, en solo ou en duo." },
    ],
  },
  cures: {
    title: "Les cures",
    intro: "De deux à sept nuits, avec un programme de soins quotidien établi avec Corinne.",
    items: [
      { name: "Cure Détox", detail: "Soins reminéralisants aux minéraux de la mer Morte." },
      { name: "Ma Sage TerreHappy", detail: "Le rituel signature du spa, sur plusieurs jours." },
      { name: "Cure 5 Éléments", detail: "Un soin par élément, à l'image des cinq suites." },
      { name: "Cure Ressourcement", detail: "La plus longue, jusqu'à sept nuits." },
    ],
  },
  gift: "Chaque formule existe en bon cadeau, valable un an.",
};

/* -------------------------------------------------------------- Événements */

export const eventsPage = {
  eyebrow: "Événements & entreprises",
  title: "Organisez vos événements au château",
  text: "Mariage, baptême, anniversaire, réception, séminaire, concert : le domaine se loue à la salle, avec ses extérieurs, ou en privatisation complète avec les cinq suites et le spa.",
  media: {
    src: "/images/seminaire-salle-alienor.jpg",
    alt: "La salle Aliénor d'Aquitaine dressée pour une réception",
  } satisfies MediaAsset,
  types: [
    "Mariage",
    "Baptême",
    "Bar-mitsvah",
    "Anniversaire",
    "Réception",
    "Séminaire",
    "Journée d'étude",
    "Concert",
  ],
  venues: [
    {
      name: "Salle Aliénor d'Aquitaine",
      detail: "120 m² dans l'ancienne chapelle, 60 personnes assises ou 140 en cocktail.",
      rates: [
        { label: "Salle seule", value: "1 600 € — 4 heures" },
        { label: "Salle et espaces extérieurs", value: "3 600 € — 8 heures" },
        { label: "Privatisation complète", value: "4 400 €" },
      ],
    },
    {
      name: "Spa TerreHappy®",
      detail: "Trois cabines de soins, hammam, bain à remous et piscine en saison, pour 10 à 12 personnes.",
      rates: [{ label: "Privatisation", value: "1 500 €" }],
    },
    {
      name: "Les suites",
      detail: "Cinq suites pour deux, avec accès à la piscine. Vos invités dorment sur place.",
      rates: [
        { label: "Suite pour deux", value: "180 à 390 € la nuit" },
        { label: "Lit supplémentaire", value: "55 € par personne" },
        { label: "Petit-déjeuner", value: "15 € en buffet, 18 € en suite" },
      ],
    },
  ],
  packages: [
    { name: "Coffret Saphir", detail: "Domaine entier, deux nuits", price: "10 400 €" },
    { name: "Privatisation une nuit", detail: "Domaine entier, une nuit", price: "9 100 €" },
  ],
  services: [
    { name: "Restauration", value: "à partir de 55 € par personne" },
    { name: "DJ", value: "800 à 1 500 €" },
    { name: "Photographe", value: "750 à 2 500 €" },
    { name: "Maquillage", value: "80 à 180 €" },
    { name: "Coiffure", value: "150 €" },
    { name: "Transport avec chauffeur", value: "sur devis" },
  ],
};

/* ----------------------------------------------------------------- Domaine */

export const domainePage = {
  eyebrow: "Le domaine",
  title: "Un château classé, un parc de quatre hectares",
  text: "Château Latour Ségur est implanté à Lussac, près de Saint-Émilion, dans un parc arboré de 40 000 m² : étang, douves, potager, arbres fruitiers, et toute une basse-cour — coqs, poules, oies, canards, ânes, chats, chiens, poissons.",
  media: { src: "/images/galerie-parc.jpg", alt: "Le parc ombragé et ses étangs" } satisfies MediaAsset,
  history: {
    title: "Neuf siècles d'histoire",
    intro:
      "Aussi appelé château de la Tour de Ségur, l'édifice appartenait au XIIe siècle aux de Ségur, illustre famille de Guyenne. Il n'était alors qu'un puissant donjon carré entouré de fossés, à deux étages fortifiés couronnés de mâchicoulis ; les autres bâtiments datent du XVIIe siècle.",
    timeline: [
      {
        date: "1137",
        text: "Fondation de l'abbaye cistercienne de Faise. Un seigneur de Ségur lui fait don du château de La Tour, à titre de rachat expiatoire. Les abbés commendataires en font leur résidence.",
      },
      {
        date: "1606",
        text: "Le cardinal François de Sourdis, archevêque de Bordeaux, s'arrête au château lors d'une tournée pastorale.",
      },
      {
        date: "1666 – 1754",
        text: "Joseph puis Charles Louis Joseph de Secondat, oncle et frère du philosophe, sont abbés de Faise. Montesquieu vient régulièrement à Lussac rendre visite à son frère au château.",
      },
      {
        date: "1773",
        text: "Le prince de Rohan, archevêque de Bordeaux, séjourne au château du 18 au 23 juillet, avec ses carrosses et son aréopage de prélats.",
      },
      {
        date: "1791",
        text: "Saisi comme bien national à la Révolution, le château est adjugé le 21 mai au sieur Deyméne pour 105 000 livres.",
      },
      {
        date: "2016",
        text: "Au terme de plusieurs années de restauration, le château reçoit le label monument historique. L'inauguration de Château Latour Ségur Suites & Spa se fait en présence d'Alain Juppé.",
      },
    ],
  },
  today: {
    title: "Le domaine aujourd'hui",
    items: [
      { name: "Le parc", detail: "Quatre hectares arborés, un étang, les douves, un potager et des arbres fruitiers." },
      { name: "La piscine", detail: "Extérieure et chauffée, ouverte de mai à septembre." },
      { name: "Les animaux", detail: "Ânes, oies, canards, poules, chats et chiens : le domaine se visite avec eux." },
      { name: "Le petit-déjeuner", detail: "Continental et bio, servi au château ou en suite." },
    ],
  },
};

/* --------------------------------------------------- Informations pratiques */

export const practicalPage = {
  eyebrow: "Informations pratiques",
  title: "Venir au château",
  text: "À Lussac, à huit kilomètres de Saint-Émilion, entre Bordeaux et Bergerac. Le domaine est fléché depuis le bourg.",
  access: [
    { name: "Gare TGV de Libourne", value: "15 min" },
    { name: "Gare Saint-Jean, Bordeaux", value: "45 min" },
    { name: "Aéroport de Bordeaux-Mérignac", value: "45 min" },
    { name: "Aéroport de Bergerac-Dordogne", value: "45 min" },
    { name: "Aérodrome des Artigues-de-Lussac", value: "10 min" },
  ],
  services: [
    { name: "Chauffeur privé", detail: "Transferts gare et aéroport, visites des châteaux du Saint-Émilionnais. Sur réservation." },
    { name: "Hélisurface", detail: "Atterrissage possible sur le domaine, sur demande préalable." },
    { name: "Parking", detail: "Privé et gratuit, dans le domaine." },
  ],
  stay: [
    { name: "Arrivée et départ", detail: "Horaires convenus lors de la réservation." },
    { name: "Petit-déjeuner", detail: "Continental bio, inclus. Servi en suite sur demande (18 €)." },
    { name: "Piscine et spa", detail: "Piscine chauffée de mai à septembre ; espace détente inclus en haute saison." },
    { name: "Paiement", detail: "Carte bancaire, Visa, Mastercard, American Express." },
    { name: "Fermeture annuelle", detail: "De mi-novembre à début mars, dates précisées chaque année." },
  ],
  around: [
    "Saint-Émilion, village et vignoble classés à l'UNESCO — 8 km",
    "Abbaye de Faise, aux origines du château — 3 km",
    "Libourne, bastide et marché — 15 min",
    "Bordeaux — 45 min",
  ],
};
