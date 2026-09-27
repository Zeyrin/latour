import ArrowLink from "@/components/ArrowLink";
import Media from "@/components/Media";
import Reveal from "@/components/Reveal";
import SplitText from "@/components/SplitText";
import { domaine } from "@/lib/content";

/**
 * Le domaine, toit commun des trois univers : deux photos qui se chevauchent,
 * le mot de l'hôtesse, puis trois repères. Présenté après les univers — on
 * sait d'abord ce que l'on peut vivre ici, puis où.
 */
export default function Domaine() {
  const [main, detail] = domaine.media;

  return (
    <section aria-labelledby="domaine-titre" className="relative bg-sand section-y">
      {/* Mention verticale en marge, sur grand écran seulement */}
      <p
        aria-hidden
        className="eyebrow absolute left-6 top-1/3 hidden origin-left -rotate-90 text-[0.5625rem] text-mist xl:block"
      >
        {domaine.side}
      </p>

      <div className="container-latour grid gap-14 md:grid-cols-2 md:items-center md:gap-16">
        <Reveal className="relative pb-16 pr-10 md:pb-20 md:pr-14">
          <div className="reveal-mask relative aspect-4/5 overflow-hidden bg-warm">
            <div className="reveal-mask-inner absolute inset-0">
              <div className="parallax">
                <Media asset={main} sizes="(min-width: 768px) 40vw, 90vw" />
              </div>
            </div>
          </div>

          {/* Seconde photo en décalé, cadrée d'un liseré crème */}
          <figure className="absolute bottom-0 right-0 w-2/5">
            <div
              className="reveal-mask relative aspect-3/4 overflow-hidden border-8 border-sand bg-warm"
              style={{ transitionDelay: "300ms" }}
            >
              <div className="reveal-mask-inner absolute inset-0">
                <Media asset={detail} sizes="(min-width: 768px) 20vw, 45vw" />
              </div>
            </div>
            <figcaption className="mt-3 text-center text-sm italic text-stone">
              {domaine.caption}
            </figcaption>
          </figure>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="eyebrow text-stone">{domaine.eyebrow}</p>
          <h2 id="domaine-titre" className="title-section mt-4">
            <SplitText text={domaine.title} />
          </h2>

          <p className="mt-8 text-lg italic text-brand">{domaine.lead}</p>
          <p className="mt-5 text-stone">{domaine.text}</p>

          <blockquote className="mt-8 border-l border-hairline pl-6">
            <p className="text-xl italic leading-snug text-brand md:text-2xl">« {domaine.quote} »</p>
            <footer className="mt-5">
              <p className="text-2xl italic text-gold">{domaine.signature}</p>
              <p className="eyebrow mt-1 text-[0.5625rem] text-mist">{domaine.role}</p>
            </footer>
          </blockquote>

          <ArrowLink href={domaine.cta.href} className="mt-6">
            {domaine.cta.label}
          </ArrowLink>
        </Reveal>
      </div>

      {/* Trois repères, communs aux trois univers */}
      <Reveal className="container-latour mt-16 md:mt-24">
        <ul className="grid gap-6 border-t border-hairline pt-10 sm:grid-cols-3 sm:gap-0 sm:divide-x sm:divide-hairline">
          {domaine.pillars.map(([first, second]) => (
            <li key={first} className="text-center text-lg leading-snug text-stone sm:px-6">
              {first}
              <span className="block italic">{second}</span>
            </li>
          ))}
        </ul>
      </Reveal>
    </section>
  );
}
