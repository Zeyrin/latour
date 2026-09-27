import { marquee } from "@/lib/content";

/**
 * Bandeau défilant, purement décoratif : ses mots reprennent ce que la page
 * dit déjà, il est donc masqué aux lecteurs d'écran. La liste est doublée
 * pour que la boucle se raccorde sans saut.
 */
export default function Marquee() {
  const words = [...marquee, ...marquee];

  return (
    <div aria-hidden className="marquee border-y border-line bg-white py-6 md:py-8">
      <ul className="marquee-track">
        {words.map((word, i) => (
          <li
            key={`${word}-${i}`}
            className="flex items-center gap-10 pr-10 text-2xl italic text-brand md:gap-14 md:pr-14 md:text-4xl"
          >
            {word}
            <span className="h-1.5 w-1.5 rotate-45 bg-mist" />
          </li>
        ))}
      </ul>
    </div>
  );
}
