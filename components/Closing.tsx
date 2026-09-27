import Link from "next/link";
import Media from "@/components/Media";
import Reveal from "@/components/Reveal";
import SplitText from "@/components/SplitText";
import { closing, hero, site } from "@/lib/content";

/**
 * Dernière occasion d'agir avant le pied de page, sur la photo du château :
 * une action par facette, les trois au même niveau. Le téléphone et le bon
 * cadeau viennent en second, en boutons texte.
 */
export default function Closing() {
  return (
    <section
      aria-labelledby="closing-titre"
      className="on-dark relative isolate overflow-hidden bg-brand text-center text-white"
    >
      <div className="parallax -z-10">
        <Media asset={hero.media} sizes="100vw" quality={65} />
      </div>
      <div className="absolute inset-0 -z-10 bg-black/55" />

      <Reveal className="container-latour section-y">
        <p className="eyebrow text-white/75">{closing.eyebrow}</p>
        <h2 id="closing-titre" className="title-hero mx-auto mt-4 max-w-3xl italic text-white">
          <SplitText text={closing.title} />
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-white/85">{closing.text}</p>

        <ul className="mx-auto mt-10 grid max-w-xs gap-3 sm:max-w-3xl sm:grid-cols-3">
          {closing.actions.map((action) => (
            <li key={action.label}>
              <Link href={action.href} className="m3-button m3-filled m3-state w-full">
                {action.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="mt-6 flex flex-col items-center justify-center gap-1 sm:flex-row sm:gap-4">
          <a href={site.phoneHref} className="m3-button m3-text-button m3-state">
            {site.phone}
          </a>
          <a
            href={closing.gift.href}
            target="_blank"
            rel="noreferrer"
            className="m3-button m3-text-button m3-state"
          >
            {closing.gift.label}
          </a>
          <a
            href={site.mapUrl}
            target="_blank"
            rel="noreferrer"
            className="m3-button m3-text-button m3-state"
          >
            Nous localiser
          </a>
        </div>

        <p className="mt-4 text-sm text-white/70">
          {site.address.street}, {site.address.city}
        </p>
      </Reveal>
    </section>
  );
}
