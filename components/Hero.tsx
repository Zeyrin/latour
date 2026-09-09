import Link from "next/link";
import Media from "@/components/Media";
import { hero } from "@/lib/content";

export default function Hero() {
  return (
    <section className="relative flex min-h-[88svh] items-center justify-center overflow-hidden md:min-h-svh">
      <Media asset={hero.media} sizes="100vw" priority quality={72} />

      {/* Dégradé plutôt qu'un voile uniforme : la photo reste lisible en bas */}
      <div className="absolute inset-0 bg-linear-to-b from-black/55 via-black/25 to-black/50" />

      <div className="on-dark container-latour relative pt-24 text-center text-white">
        <h1 className="title-hero mx-auto max-w-4xl text-white drop-shadow-sm">{hero.title}</h1>

        <Link
          href={hero.cta.href}
          className="eyebrow tap mt-8 border border-white px-8 text-white transition-colors duration-300 hover:bg-white hover:text-brand md:mt-10 md:px-9 md:py-4"
        >
          {hero.cta.label}
        </Link>
      </div>

      {/* Repère de défilement : indique qu'il y a du contenu sous la ligne de flottaison */}
      <div
        aria-hidden
        className="absolute inset-x-0 bottom-8 flex justify-center motion-safe:animate-bounce"
      >
        <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6 text-white/80">
          <path
            d="M6 9l6 6 6-6"
            stroke="currentColor"
            strokeWidth="1.25"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </section>
  );
}
