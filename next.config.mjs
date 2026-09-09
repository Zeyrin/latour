const isDev = process.env.NODE_ENV !== "production";

/**
 * Content-Security-Policy.
 *
 * Les polices sont auto-hébergées par next/font et aucun script tiers n'est
 * chargé : tout peut donc rester en 'self'. `'unsafe-inline'` reste nécessaire
 * pour les scripts d'hydratation que Next injecte dans les pages statiques —
 * le supprimer imposerait un nonce par requête, donc le rendu dynamique de
 * toutes les pages. Le compromis est assumé pour un site vitrine.
 *
 * En développement seulement, `'unsafe-eval'` est indispensable : webpack
 * évalue les modules via eval() pour le rechargement à chaud et les source
 * maps. La règle de production, elle, reste stricte.
 */
const csp = [
  "default-src 'self'",
  `script-src 'self' 'unsafe-inline'${isDev ? " 'unsafe-eval'" : ""}`,
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data: blob:",
  "font-src 'self'",
  // Le websocket du rechargement à chaud ne tourne qu'en développement
  `connect-src 'self'${isDev ? " ws: http://localhost:*" : ""}`,
  "frame-src 'self' https://www.google.com https://www.secretbox.fr",
  "form-action 'self'",
  "frame-ancestors 'none'",
  "base-uri 'self'",
  "object-src 'none'",
  // Hors production, le site tourne en http sur localhost : forcer https
  // n'aurait aucun sens
  ...(isDev ? [] : ["upgrade-insecure-requests"]),
].join("; ");

const securityHeaders = [
  { key: "Content-Security-Policy", value: csp },
  {
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains; preload",
  },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "X-Frame-Options", value: "DENY" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=(), interest-cohort=()",
  },
  { key: "X-DNS-Prefetch-Control", value: "on" },
];

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // N'annonce pas la techno du serveur
  poweredByHeader: false,
  compress: true,

  images: {
    formats: ["image/avif", "image/webp"],
    // Next 16 n'accepte que les qualités déclarées ici ; toute autre valeur
    // retombe silencieusement sur 75. 72 sert au bandeau d'accueil, la plus
    // lourde des images et celle qui porte le LCP.
    qualities: [72, 75],
    // Le site n'affiche que des images locales : aucun domaine distant autorisé
    remotePatterns: [],
  },

  async headers() {
    return [{ source: "/:path*", headers: securityHeaders }];
  },
};

export default nextConfig;
