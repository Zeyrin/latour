import Link from "next/link";
import Media from "@/components/Media";
import Reveal from "@/components/Reveal";
import SplitText from "@/components/SplitText";
import { chapters, univers } from "@/lib/content";

/**
 * Les trois univers du domaine, en trois cartes de même taille : suites, spa,
 * séminaires. Aucune n'est mise en avant ; chacune mène à son chapitre.
 */
export default function Univers() {
  return (
    <section id="univers" aria-labelledby="univers-titre" className="section-y">
      <div className="container-latour">
        <Reveal className="grid gap-6 md:grid-cols-[1fr_auto] md:items-end">
          <div>
            <p className="eyebrow text-stone">{univers.eyebrow}</p>
            <h2 id="univers-titre" className="title-section mt-4">
              <SplitText text={univers.title} />
            </h2>
          </div>
          <div className="text-stone md:text-right">
            {univers.aside.map((line) => (
              <p key={line}>{line}</p>
            ))}
          </div>
        </Reveal>

        <ul className="mt-12 grid gap-4 md:mt-16 md:grid-cols-3 md:gap-5">
          {chapters.map((chapter, index) => (
            <li key={chapter.id}>
              <Reveal delay={index * 0.12} className="h-full">
                <Link
                  href={`#${chapter.id}`}
                  className="reveal-mask on-dark group relative flex aspect-4/5 flex-col justify-end overflow-hidden bg-brand p-7 text-white md:aspect-3/4 md:p-8"
                  style={{ transitionDelay: `${index * 120}ms` }}
                >
                  <div className="reveal-mask-inner zoom-on-hover absolute inset-0">
                    <Media asset={chapter.media} sizes="(min-width: 768px) 33vw, 100vw" />
                  </div>
                  <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/30 to-black/5" />

                  <span className="eyebrow absolute left-7 top-7 text-white/75 md:left-8 md:top-8">
                    0{index + 1}
                  </span>

                  <div className="relative">
                    <p className="eyebrow text-[0.625rem] text-white/70">{chapter.art}</p>
                    <h3 className="mt-3 text-4xl leading-[1.05] text-white lg:text-5xl">
                      {chapter.cardTitle[0]}
                      <span className="block italic">{chapter.cardTitle[1]}</span>
                    </h3>
                    <p className="mt-4 text-white/85">{chapter.cardLine}</p>

                    <div className="mt-6 flex items-center justify-between border-t border-white/30 pt-5">
                      <span className="eyebrow text-[0.625rem]">Découvrir cet univers</span>
                      <span aria-hidden className="arrow-circle border-white/50 group-hover:rotate-45 group-hover:bg-white group-hover:text-brand">
                        <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4">
                          <path d="M7 17 17 7M9 7h8v8" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </span>
                    </div>
                  </div>
                </Link>
              </Reveal>
            </li>
          ))}
        </ul>

        <Reveal className="mt-10 flex items-center justify-center gap-6 text-center md:mt-14">
          <span aria-hidden className="hidden h-px w-10 bg-hairline sm:block" />
          <p className="italic text-stone md:text-lg">{univers.footnote}</p>
          <span aria-hidden className="hidden h-px w-10 bg-hairline sm:block" />
        </Reveal>
      </div>
    </section>
  );
}
