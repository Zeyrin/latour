import Image from "next/image";
import Link from "next/link";
import type { CSSProperties } from "react";
import Media from "@/components/Media";
import SplitText from "@/components/SplitText";
import { chapters, hero } from "@/lib/content";

/** Décalage d'une apparition au chargement, en millisecondes */
const at = (ms: number) => ({ "--d": `${ms}ms` }) as CSSProperties;

export default function Hero() {
  return (
    <section
      aria-labelledby="hero-titre"
      className="relative flex min-h-[88svh] items-center justify-center overflow-hidden bg-brand md:min-h-svh"
    >
      {/* Deux couches : la première descend au défilement (profondeur), la
          photo à l'intérieur se désagrandit lentement à l'arrivée. */}
      <div className="hero-parallax absolute inset-0">
        <Media
          asset={hero.media}
          sizes="100vw"
          priority
          quality={72}
          className="ken-burns"
        />
      </div>

      {/* Dégradé plutôt qu'un voile uniforme : la photo reste lisible en bas */}
      <div className="absolute inset-0 bg-linear-to-b from-black/60 via-black/30 to-black/60" />

      <div className="hero-fade on-dark container-latour relative py-20 text-center text-white md:py-24">
        {/* Le classement est l'argument de confiance le plus fort du domaine :
            il se voit à l'arrivée, pas seulement dans le pied de page. Le
            logo est noir et rouge sur fond transparent — illisible sur la
            photo — d'où le passage en blanc, comme pour le logo du header. */}
        <Image
          src="/images/logo-monument-historique.webp"
          alt="Monument historique de France"
          width={512}
          height={512}
          sizes="96px"
          priority
          style={at(100)}
          className="rise-now mx-auto h-20 w-auto brightness-0 invert md:h-24"
        />

        <p style={at(250)} className="rise-now eyebrow mt-4 text-white/75">
          {hero.place}
        </p>

        <h1
          id="hero-titre"
          className="split-now title-hero mx-auto mt-4 max-w-4xl text-white drop-shadow-sm"
        >
          <SplitText text={hero.title} delay={350} />
        </h1>

        {/* Le titre est une promesse, pas une description : cette ligne dit ce
            que l'on réserve réellement. */}
        <p style={at(900)} className="rise-now mx-auto mt-5 max-w-xl text-white/90 md:text-lg">
          {hero.subtitle}
        </p>

        {/* Trois portes de même rang, une par facette : aucune n'est l'action
            « principale ». Elles mènent au chapitre correspondant. */}
        <nav
          aria-label="Les trois facettes du domaine"
          style={at(1100)}
          className="rise-now mt-9 md:mt-10"
        >
          <ul className="mx-auto grid max-w-xs gap-3 sm:max-w-none sm:grid-cols-3 sm:justify-center md:inline-grid">
            {chapters.map((chapter) => (
              <li key={chapter.id}>
                <Link
                  href={`#${chapter.id}`}
                  className="m3-button m3-outlined m3-state w-full backdrop-blur-[2px] sm:min-w-44"
                >
                  {chapter.verb}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* Repère de défilement, à partir de sm seulement : sur un téléphone il
          chevaucherait les boutons empilés, et le hero à 88svh laisse déjà
          voir le haut de la section suivante. */}
      <div className="on-dark absolute inset-x-0 bottom-6 hidden justify-center sm:flex">
        <Link
          href="#reperes"
          aria-label="Aller au contenu de la page"
          className="m3-state m3-corner-medium flex flex-col items-center gap-3 px-3 py-2 text-white/80"
        >
          <span className="eyebrow text-[0.625rem]">Découvrir</span>
          <span aria-hidden className="scroll-cue" />
        </Link>
      </div>
    </section>
  );
}
