import Image from "next/image";
import Link from "next/link";
import Media from "@/components/Media";
import { hero } from "@/lib/content";

export default function Hero() {
  return (
    <section
      aria-labelledby="hero-titre"
      className="relative flex min-h-[88svh] items-center justify-center overflow-hidden md:min-h-svh"
    >
      <Media asset={hero.media} sizes="100vw" priority quality={72} />

      {/* Dégradé plutôt qu'un voile uniforme : la photo reste lisible en bas */}
      <div className="absolute inset-0 bg-linear-to-b from-black/60 via-black/30 to-black/55" />

      <div className="on-dark container-latour relative py-20 text-center text-white md:py-24">
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
          className="mx-auto h-20 w-auto brightness-0 invert md:h-24"
        />

        <p className="eyebrow mt-4 text-white/75">{hero.place}</p>

        <h1
          id="hero-titre"
          className="title-hero mx-auto mt-4 max-w-4xl text-white drop-shadow-sm"
        >
          {hero.title}
        </h1>

        {/* Le titre est une promesse, pas une description : cette ligne dit ce
            que l'on réserve réellement. */}
        <p className="mx-auto mt-5 max-w-xl text-white/90 md:text-lg">{hero.subtitle}</p>

        {/* Hiérarchie M3 : bouton « filled » pour l'action de conversion,
            « outlined » pour l'action secondaire. Sous `on-dark`, les rôles
            basculent — le blanc devient la couleur primaire. */}
        <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4 md:mt-10">
          <Link
            href={hero.cta.href}
            className="m3-button m3-filled m3-state w-full max-w-xs sm:w-auto"
          >
            {hero.cta.label}
          </Link>
          <Link
            href={hero.ctaSecondary.href}
            className="m3-button m3-outlined m3-state w-full max-w-xs sm:w-auto"
          >
            {hero.ctaSecondary.label}
          </Link>
        </div>
      </div>

      {/* Repère de défilement cliquable, à partir de sm seulement : sur un
          téléphone il chevaucherait les deux boutons empilés, et le hero à
          88svh laisse déjà voir le haut de la section suivante. */}
      <div className="on-dark absolute inset-x-0 bottom-6 hidden justify-center sm:flex">
        <Link
          href="#reperes"
          aria-label="Aller au contenu de la page"
          className="m3-icon-button m3-state"
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            aria-hidden
            className="h-6 w-6 motion-safe:animate-bounce"
          >
            <path
              d="M6 9l6 6 6-6"
              stroke="currentColor"
              strokeWidth="1.25"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </Link>
      </div>
    </section>
  );
}
