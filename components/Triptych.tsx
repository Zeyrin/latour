import Link from "next/link";
import Media from "@/components/Media";
import Reveal from "@/components/Reveal";
import SplitText from "@/components/SplitText";
import { chapters, triptych } from "@/lib/content";

/**
 * Les trois portes du domaine : suites, spa, séminaires, en trois panneaux de
 * même largeur. Au survol, le panneau visé s'élargit et les autres se retirent
 * d'autant (voir `.triptych` dans globals.css) — au repos, aucun ne domine.
 * Sur téléphone, trois cartes empilées de même hauteur.
 */
export default function Triptych() {
  return (
    <section aria-labelledby="triptyque-titre" className="bg-sand section-y">
      <div className="container-latour">
        <Reveal className="text-center">
          <p className="eyebrow text-stone">{triptych.eyebrow}</p>
          <h2 id="triptyque-titre" className="title-section mx-auto mt-3 max-w-2xl">
            <SplitText text={triptych.title} />
          </h2>
        </Reveal>

        <ul className="triptych mt-10 flex flex-col gap-3 sm:mt-14 md:h-[min(78svh,44rem)] md:flex-row md:gap-4">
          {chapters.map((chapter, index) => (
            <li key={chapter.id} className="triptych-door flex">
              <Reveal delay={index * 0.12} className="flex w-full">
                <Link
                  href={`#${chapter.id}`}
                  className="reveal-mask on-dark group relative flex min-h-80 w-full flex-col justify-end overflow-hidden rounded-(--md-sys-shape-corner-medium) bg-brand p-6 text-white sm:min-h-96 md:min-h-0 md:p-8"
                  style={{ transitionDelay: `${index * 120}ms` }}
                >
                  <div className="reveal-mask-inner absolute inset-0">
                    <Media asset={chapter.door} sizes="(min-width: 768px) 50vw, 100vw" />
                  </div>
                  <div className="absolute inset-0 bg-linear-to-t from-black/75 via-black/25 to-black/10" />

                  <span className="eyebrow absolute left-6 top-6 text-white/80 md:left-8 md:top-8">
                    0{index + 1}
                  </span>

                  <div className="relative">
                    <p className="eyebrow text-white/75">{chapter.eyebrow}</p>
                    <p className="mt-2 text-3xl italic leading-tight md:text-4xl lg:text-5xl">
                      {chapter.verb}
                    </p>
                    <div className="triptych-pitch">
                      <div className="overflow-hidden">
                        <p className="mt-3 max-w-xs text-white/85">{chapter.pitch}</p>
                      </div>
                    </div>
                    <span className="eyebrow mt-5 inline-flex items-center gap-3 text-white">
                      <span className="row-link pb-1">Découvrir</span>
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        aria-hidden
                        className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-1"
                      >
                        <path
                          d="M4 12h16m-6-6 6 6-6 6"
                          stroke="currentColor"
                          strokeWidth="1.25"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                  </div>
                </Link>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
