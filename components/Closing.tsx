import Reveal from "@/components/Reveal";
import { closing, site } from "@/lib/content";

/**
 * Dernière occasion d'agir avant le pied de page. La barre mobile couvre déjà
 * le pouce ; ici, c'est le grand écran qui manquait d'une sortie.
 */
export default function Closing() {
  return (
    <section className="container-latour section-y text-center">
      <Reveal>
        <p className="eyebrow text-stone">{closing.eyebrow}</p>
        <h2 className="title-section mt-3">{closing.title}</h2>
        <p className="mx-auto mt-5 max-w-xl text-stone">{closing.text}</p>

        <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
          <a
            href={site.phoneHref}
            className="m3-button m3-filled m3-state w-full max-w-xs sm:w-auto"
          >
            {site.phone}
          </a>
          <a
            href={closing.gift.href}
            target="_blank"
            rel="noreferrer"
            className="m3-button m3-outlined m3-state w-full max-w-xs sm:w-auto"
          >
            {closing.gift.label}
          </a>
        </div>

        <p className="mt-6 text-sm text-stone">
          {site.address.street}, {site.address.city}
        </p>

        <a
          href={site.mapUrl}
          target="_blank"
          rel="noreferrer"
          className="m3-button m3-text-button m3-state mt-1"
        >
          Nous localiser
        </a>
      </Reveal>
    </section>
  );
}
