/**
 * Réponse 410 Gone pour les pages de spam injectées dans l'ancien WordPress
 * (cialis-generique-sans-ordonnance, viagra-generique-sans-ordonnance),
 * toujours présentes dans son sitemap. Un 410 dit aux moteurs de les
 * désindexer tout de suite ; un 404 les laisse traîner des mois, et une
 * redirection vers l'accueil associerait ces mots-clés au domaine.
 */
export function gone() {
  return new Response(null, { status: 410 });
}
