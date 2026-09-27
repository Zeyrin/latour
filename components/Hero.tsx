import Image from "next/image";
import Link from "next/link";
import type { CSSProperties } from "react";
import Media from "@/components/Media";
import SplitText from "@/components/SplitText";
import { hero } from "@/lib/content";

/** Décalage d'une apparition au chargement, en millisecondes */
const at = (ms: number) => ({ "--d": `${ms}ms` }) as CSSProperties;

/**
 * Bandeau d'accueil : une phrase, une invitation, et les trois univers juste
 * en dessous (Univers.tsx). Aucun des trois n'est mis en avant ici — le seul
 * lien mène à la section qui les présente côte à côte.
 */
export default function Hero() {
  return (
    <section
      aria-labelledby="hero-titre"
      className="relative flex min-h-svh items-center justify-center overflow-hidden bg-brand"
    >
      {/* Deux couches : la première descend au défilement (profondeur), la
          photo à l'intérieur se désagrandit lentement à l'arrivée. */}
      <div className="hero-parallax absolute inset-0">
        <div className="left-half">
          <Media asset={hero.media} sizes="200vw" priority quality={75} className="ken-burns" />
        </div>
      </div>

      {/* Voile appuyé en haut (navigation) et en bas (repères) */}
      <div className="absolute inset-0 bg-linear-to-b from-black/55 via-black/25 to-black/60" />

      <div className="hero-fade on-dark container-latour relative pb-36 pt-32 text-center text-white md:pb-40">
        <p
          style={at(150)}
          className="rise-now eyebrow flex items-center justify-center gap-4 text-white/80"
        >
          <span aria-hidden className="hidden h-px w-8 bg-white/50 sm:block" />
          {hero.eyebrow}
          <span aria-hidden className="hidden h-px w-8 bg-white/50 sm:block" />
        </p>

        <h1 id="hero-titre" className="split-now title-hero mx-auto mt-7 max-w-5xl text-white">
          <SplitText text={hero.title} delay={300} />
        </h1>

        <div style={at(1000)} className="rise-now mx-auto mt-8 max-w-xl text-white/85 md:text-lg">
          {hero.subtitle.map((line) => (
            <p key={line}>{line}</p>
          ))}
        </div>

        <Link
          href={hero.cta.href}
          style={at(1250)}
          className="rise-now group mt-10 inline-flex min-h-12 items-center gap-5 border-b border-white/40 text-white"
        >
          <span className="eyebrow">{hero.cta.label}</span>
          <svg
            viewBox="0 0 24 24"
            fill="none"
            aria-hidden
            className="h-4 w-4 transition-transform duration-700 ease-(--ease-editorial) group-hover:translate-y-1"
          >
            <path d="M12 5v14m-6-6 6 6 6-6" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </Link>
      </div>

      {/* Repères en pied de bandeau : lieu, invitation à défiler, classement */}
      <div
        style={at(1500)}
        className="rise-now on-dark absolute inset-x-0 bottom-0 pb-6 text-white md:pb-8"
      >
        <div className="flex items-end justify-between gap-4 px-5 md:px-12">
          <p className="eyebrow flex items-center gap-3 text-[0.625rem] text-white/80">
            <svg viewBox="0 0 24 24" fill="none" aria-hidden className="h-4 w-4 shrink-0">
              <path
                d="M12 21s-6.5-6.2-6.5-11a6.5 6.5 0 1 1 13 0c0 4.8-6.5 11-6.5 11Z"
                stroke="currentColor"
                strokeWidth="1.1"
              />
              <circle cx="12" cy="10" r="2.2" stroke="currentColor" strokeWidth="1.1" />
            </svg>
            <span>{hero.place}</span>
          </p>

          <a
            href="#univers"
            aria-label="Faire défiler vers les trois univers"
            className="absolute left-1/2 bottom-0 hidden -translate-x-1/2 flex-col items-center gap-3 pb-6 sm:flex md:pb-8"
          >
            <span className="eyebrow text-[0.625rem] text-white/80">{hero.cue}</span>
            <span aria-hidden className="scroll-cue" />
          </a>

          <div className="flex items-center gap-3">
            <Image
              src="/images/logo-monument-historique.webp"
              alt="Monument historique de France"
              width={512}
              height={512}
              sizes="48px"
              priority
              className="h-10 w-auto brightness-0 invert md:h-12"
            />
            <p className="eyebrow hidden text-[0.625rem] leading-relaxed text-white/80 sm:block">
              {hero.heritage[0]}
              <br />
              <span className="text-white/60">{hero.heritage[1]}</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
