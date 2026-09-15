import { highlights } from "@/lib/content";

/**
 * Bandeau de repères sous le hero. Volontairement une bande fine et non une
 * section à part entière : il répond au « est-ce l'endroit qu'il me faut »
 * en quelques secondes sans allonger le défilement, y compris sur mobile où
 * il tient en deux lignes de deux.
 */
export default function Highlights() {
  return (
    <section id="reperes" aria-label="Le domaine en bref" className="border-b border-line bg-white">
      <ul className="container-latour grid grid-cols-2 gap-x-6 gap-y-6 py-8 md:grid-cols-4 md:py-10">
        {highlights.map((item) => (
          <li key={item.value} className="text-center">
            <p className="text-sm leading-snug text-brand md:text-base">{item.value}</p>
            <p className="mt-1.5 text-xs leading-snug text-stone md:text-sm">{item.detail}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
