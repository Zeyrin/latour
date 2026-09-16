/**
 * Plan de redirections de l'ancien site vers le nouveau.
 *
 * Domaine canonique : chateaulatoursegur.fr. Les trois autres domaines
 * (chambredhotesaintemilion.fr, chateaulatoursegur.com, spaterrehappy.fr)
 * pointeront sur le même déploiement et sont ramenés ici en 308 vers le
 * canonique, en conservant le chemin — les redirections de chemins ci-dessous
 * font ensuite le reste. Deux sauts au maximum, ce que Google tolère sans
 * perte.
 *
 * Inventaire relevé le 16 sept. 2026 dans les sitemaps WordPress des deux
 * anciens sites. À ne pas retirer avant au moins 12 mois après la mise en
 * ligne : les liens entrants (Booking, Tripadvisor, offices de tourisme,
 * annuaires) pointent encore vers ces URL.
 */

export const canonicalHost = "chateaulatoursegur.fr";

const legacyHosts = [
  "www.chateaulatoursegur.fr",
  "chateaulatoursegur.com",
  "www.chateaulatoursegur.com",
  "chambredhotesaintemilion.fr",
  "www.chambredhotesaintemilion.fr",
  "spaterrehappy.fr",
  "www.spaterrehappy.fr",
];

/** Anciennes URL de chambredhotesaintemilion.fr → nouvelles pages */
const chateauPaths = {
  "/contact-reservation": "/contact",
  "/suite-feu": "/les-suites/suite-feu",
  "/suite-eau-au-chateau-latour-segur": "/les-suites/suite-eau",
  "/suite-bois-au-chateau-latour-segur": "/les-suites/cottage-bois",
  "/gite-suite-metal-au-chateau-latour-segur": "/les-suites/gite-suite-metal",
  "/gite-suite-terre-au-chateau-latour-segur": "/les-suites/gite-suite-terre",
  "/levenments-au-chateau-latour-segur": "/evenements",
  "/le-spa-au-chateau-latour-segur": "/le-spa",
  "/le-chateau-latour-segur": "/le-domaine",
  "/le-domaine-chateau-latour-segur": "/le-domaine",
  "/proprietaires-des-lieux": "/le-domaine",
  "/termes-et-conditions": "/mentions-legales",
  // Pages techniques WordPress laissées en ligne
  "/page-typeform": "/contact",
  "/page-d-exemple": "/",
};

/**
 * Anciennes URL de spaterrehappy.fr → le spa. Le site spa est fondu dans le
 * site principal : toutes ses pages de soins renvoient vers /le-spa, qui les
 * reprend. Les chemins communs aux deux sites (/contact, /mentions-legales,
 * /informations-pratiques) existent tels quels sur le nouveau.
 */
const spaPaths = [
  "/nos-formules-de-soins-bien-etre",
  "/soins-corps-lpg",
  "/soins-visage-lpg",
  "/les-massages",
  "/vitalite-et-lumiere-du-regard",
  "/les-soins-par-ages",
  "/soins-par-type-de-peau",
  "/jacquier",
  "/pedispa",
  "/balancelle",
  "/constellations-de-soins",
  "/les-soins-epilatoires",
  "/les-soins-mains-pieds",
  "/piscine-chauffee",
  "/bain-a-remous",
  "/hammam",
  "/category/non-classe",
];

export default function redirects() {
  return [
    // 0. La racine de l'ancien site spa mène au spa, pas à l'accueil
    ...["spaterrehappy.fr", "www.spaterrehappy.fr"].map((host) => ({
      source: "/",
      has: [{ type: "host", value: host }],
      destination: `https://${canonicalHost}/le-spa`,
      permanent: true,
    })),

    // 1. Domaines secondaires → canonique, chemin conservé
    ...legacyHosts.map((host) => ({
      source: "/:path*",
      has: [{ type: "host", value: host }],
      destination: `https://${canonicalHost}/:path*`,
      permanent: true,
    })),

    // 2. Ancienne arborescence du site château
    ...Object.entries(chateauPaths).map(([source, destination]) => ({
      source,
      destination,
      permanent: true,
    })),

    // 3. Ancienne arborescence du site spa
    ...spaPaths.map((source) => ({
      source,
      destination: "/le-spa",
      permanent: true,
    })),

    // 4. Version anglaise (Polylang) : pas encore de traduction sur le nouveau
    { source: "/en", destination: "/", permanent: false },
    { source: "/en/:path*", destination: "/", permanent: false },

    // 5. Restes WordPress que les moteurs continuent d'appeler
    { source: "/feed", destination: "/", permanent: true },
    { source: "/comments/feed", destination: "/", permanent: true },
    { source: "/wp-content/:path*", destination: "/", permanent: true },
    { source: "/wp-json/:path*", destination: "/", permanent: true },
  ];
}
