import { euro } from "./format";
import type { MediaAsset } from "./media";
import { eventsPage, spaPage, suites } from "./pages";

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

export const hero = {
  // Le titre seul ne situe ni le lieu ni la nature de l'établissement : la
  // ligne de situation répond au « où sommes-nous » avant tout défilement.
  // Pas de « vignoble » ici : on croyait que le château en était un.
  place: "Lussac, aux portes de Saint-Émilion",
  title: "Offrez un Moment d'Exception",
  subtitle:
    "Un château classé au cœur d'un parc ombragé : cinq suites d'hôtes, un spa à privatiser et des salles pour vos séminaires et réceptions.",
  media: {
    src: "/images/hero-chateau.jpg",
    alt: "Le Château Latour Ségur et son parc au cœur du vignoble de Lussac Saint-Émilion",
    // Le bâti est légèrement au-dessus du centre : on remonte le cadrage
    position: "50% 42%",
  } satisfies MediaAsset,
};

/**
 * Repères sous le hero : des faits qui valent pour tout le domaine, quelle
 * que soit la raison de la visite. Les chiffres propres aux suites, au spa ou
 * aux séminaires sont dans leur chapitre respectif.
 */
export const highlights = [
  { value: "Monument historique", detail: "Château classé depuis 2016" },
  { value: "Parc de 4 hectares", detail: "Étangs, douves et potager" },
  { value: "Piscine chauffée", detail: "Extérieure, de mai à septembre" },
  { value: "Saint-Émilion à 8 km", detail: "Bordeaux à 45 min" },
];

export const domaine = {
  eyebrow: "Au cœur des traditions",
  title: "Bienvenue au Château Latour Ségur",
  subtitle: "Suites · Spa · Séminaires — Lussac Saint-Émilion",
  icon: "/images/icone-village.png",
  paragraphs: [
    "Amoureuse des belles bâtisses et soucieuse du bien-être de ses invités, Corinne Dray vous accueille dans un domaine reposant et bucolique, proche du vignoble Saint-Émilionnais.",
    "Au cœur d'un parc ombragé avec étangs, le château réunit cinq suites de charme aménagées dans ses dépendances, le Spa TerreHappy® et la salle Aliénor d'Aquitaine, dans l'ancienne chapelle.",
  ],
  cta: { label: "Découvrir le domaine", href: "/le-domaine" },
};

/* ---------------------------------------------------------------------------
   Les trois facettes du domaine
   Suites, spa et séminaires sont trois activités de même rang. Elles partagent
   un seul type et un seul gabarit (Chapter.tsx) : même structure, même nombre
   de chiffres clés, deux actions chacune. Seule la tonalité de fond les
   distingue. Toute évolution de l'une se répercute donc sur les trois.
   ------------------------------------------------------------------------ */

export type Chapter = {
  id: "suites" | "spa" | "seminaires";
  /** Verbe du triptyque : ce que l'on vient faire */
  verb: string;
  eyebrow: string;
  title: string;
  intro: string;
  /** Une ligne pour le panneau du triptyque */
  pitch: string;
  /** Fond de section : blanc, aplat de marque, sable */
  tone: "light" | "dark" | "sand";
  media: MediaAsset;
  /** Photo du triptyque, cadrée en portrait */
  door: MediaAsset;
  stats: { value: string; unit: string }[];
  itemsLabel: string;
  items: { name: string; meta: string; detail: string; href?: string }[];
  ctas: [{ label: string; href: string }, { label: string; href: string }];
};

const nights = suites.map((s) => s.rates.night);
const surfaces = suites.map((s) => s.surface);
const saloon = eventsPage.venues[0];

export const chapters: Chapter[] = [
  {
    id: "suites",
    verb: "Séjourner",
    eyebrow: "Les suites",
    title: "Cinq suites, cinq éléments",
    intro:
      "Aménagées dans les dépendances du château, les suites reprennent le thème des cinq éléments. Chacune a sa cheminée, son jardin et sa cuisine ; toutes donnent accès au parc et à la piscine chauffée.",
    pitch: "Cinq suites de caractère avec cheminée, jardin et bain à remous.",
    tone: "light",
    media: { src: "/images/suite-eau.jpg", alt: "La Suite Eau et son bain à remous" },
    door: { src: "/images/suite-feu.jpg", alt: "La Suite Feu et sa cheminée" },
    stats: [
      { value: String(suites.length), unit: "suites d'hôtes" },
      { value: `${Math.min(...surfaces)}–${Math.max(...surfaces)}`, unit: "m² par suite" },
      { value: `${Math.min(...nights)} €`, unit: "la nuit, à partir de" },
    ],
    itemsLabel: "Les cinq suites",
    items: suites.map((s) => ({
      name: s.name,
      meta: `${s.surface} m²`,
      detail: s.highlights.filter((h) => !h.endsWith("m²")).slice(0, 3).join(" · "),
      href: `/les-suites/${s.slug}`,
    })),
    ctas: [
      { label: "Voir les suites", href: "/les-suites" },
      { label: "Réserver une suite", href: "/contact" },
    ],
  },
  {
    id: "spa",
    verb: "Se ressourcer",
    eyebrow: "Spa TerreHappy®",
    title: "Un spa à privatiser",
    intro:
      "Le Spa TerreHappy® se privatise pour une journée, un après-midi ou une soirée, entre amies ou en couple. Hammam creusé dans la roche, bain à remous aux minéraux de la mer Morte et soins imaginés par Corinne Dray.",
    pitch: "Hammam, bain à remous et soins, pour vous seuls.",
    tone: "dark",
    media: { src: "/images/spa-terrehappy.jpg", alt: "L'espace détente du Spa TerreHappy" },
    door: { src: "/images/spa-terrehappy.jpg", alt: "L'espace détente du Spa TerreHappy" },
    stats: [
      { value: spaPage.facilities[0].value, unit: "cabines de soins" },
      { value: spaPage.facilities[3].value, unit: "personnes en privé" },
      { value: `${spaPage.packages[0].price} €`, unit: "l'accès, à partir de" },
    ],
    itemsLabel: "Les formules",
    items: spaPage.packages.map((p) => ({
      name: p.name,
      meta: euro(p.price),
      detail: p.duration,
      href: "/le-spa",
    })),
    ctas: [
      { label: "Découvrir le spa", href: "/le-spa" },
      { label: "Réserver un soin", href: "/contact" },
    ],
  },
  {
    id: "seminaires",
    verb: "Se réunir",
    eyebrow: "Séminaires & événements",
    title: "Réunir et recevoir au château",
    intro:
      "À quelques kilomètres de Saint-Émilion et à courte distance de Bordeaux, le domaine accueille séminaires, réunions de direction, réceptions et mariages, dans un cadre qui change de la salle de réunion.",
    pitch: "Une ancienne chapelle, un parc et cinq suites pour vos invités.",
    tone: "sand",
    media: {
      src: "/images/seminaire-salle-alienor.jpg",
      alt: "La salle Aliénor d'Aquitaine dressée pour un séminaire",
    },
    door: {
      src: "/images/seminaire-salle-alienor.jpg",
      alt: "La salle Aliénor d'Aquitaine dressée pour un séminaire",
    },
    stats: [
      { value: "60", unit: "personnes assises" },
      { value: "140", unit: "en cocktail" },
      { value: "120", unit: "m² dans la chapelle" },
    ],
    itemsLabel: "Les espaces",
    items: [
      { name: saloon.name, meta: "120 m²", detail: "Dès 1 600 € les 4 heures", href: "/evenements" },
      { name: "Le parc et ses étangs", meta: "4 ha", detail: "Cocktails, ateliers en plein air", href: "/evenements" },
      { name: "Spa TerreHappy® en exclusivité", meta: "12 pers.", detail: "Privatisation : 1 500 €", href: "/le-spa" },
      { name: "Les suites pour vos invités", meta: "5 suites", detail: "Vos participants dorment sur place", href: "/les-suites" },
      { name: "Restauration", meta: "sur place", detail: "À partir de 55 € par personne", href: "/evenements" },
    ],
    ctas: [
      { label: "Voir les espaces", href: "/evenements" },
      { label: "Demander un devis", href: "/contact" },
    ],
  },
];

export const triptych = {
  eyebrow: "Suites · Spa · Séminaires",
  title: "Trois façons de vivre le domaine",
};

/** Bandeau défilant entre deux sections : décoratif, masqué aux lecteurs d'écran. */
export const marquee = [
  "Monument historique",
  "Suites de charme",
  "Spa TerreHappy®",
  "Séminaires & réceptions",
  "Piscine chauffée",
  "Saint-Émilion",
];

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
  eyebrow: "Réservation",
  title: "Le temps semble suspendu",
  text: "Une nuit, un soin ou un séminaire : Corinne vous répond directement. Les week-ends et les périodes de vendanges partent vite.",
  // Une action par facette, au même niveau visuel
  actions: [
    { label: "Réserver une suite", href: "/contact" },
    { label: "Réserver le spa", href: "/contact" },
    { label: "Demander un devis", href: "/contact" },
  ],
  gift: { label: "Offrir un bon cadeau", href: site.giftUrl },
};

export const seoBlock = {
  title:
    "Réservation de chambres d'hôtes de luxe à Saint-Émilion — Vivez une expérience inoubliable",
  text: "Réservez une chambre d'hôte de luxe à Saint-Émilion et découvrez le charme authentique de cette région viticole réputée. Notre établissement vous offre une expérience unique avec des chambres décorées avec goût, un service personnalisé et une vue imprenable sur les vignobles environnants. Profitez de notre petit-déjeuner continental bio et de notre piscine extérieure chauffée. Que ce soit pour une escapade romantique, une escapade gastronomique ou une expérience œnologique, notre maison d'hôtes de luxe est l'endroit idéal pour un séjour mémorable.",
};

export const footerLinks = [
  { label: "Les suites", href: "/les-suites" },
  { label: "Spa TerreHappy®", href: "/le-spa" },
  { label: "Séminaires & événements", href: "/evenements" },
  { label: "Informations pratiques", href: "/informations-pratiques" },
  { label: "Bon cadeau", href: site.giftUrl },
  { label: "Mentions légales", href: "/mentions-legales" },
  // Le dossier de presse est un document InDesign publié chez Adobe
  { label: "Dossier de presse", href: "https://indd.adobe.com/view/ad36595b-5c01-456d-a600-23877dd7044b" },
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
