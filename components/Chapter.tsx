import Link from "next/link";
import CountUp from "@/components/CountUp";
import Media from "@/components/Media";
import Reveal from "@/components/Reveal";
import SplitText from "@/components/SplitText";
import type { Chapter as ChapterData } from "@/lib/content";

/**
 * Gabarit unique des trois facettes du domaine (suites, spa, séminaires).
 * Même structure, mêmes animations, mêmes proportions pour les trois : seule
 * la tonalité de fond change, et la photo passe d'un côté à l'autre pour
 * rythmer la lecture. Aucune variante propre à une facette n'est prévue —
 * c'est ce qui garantit leur égalité.
 */

const tones = {
  light: { section: "bg-white", muted: "text-stone", heading: "", line: "border-line", divide: "divide-line" },
  dark: {
    section: "on-dark bg-brand text-white",
    muted: "text-white/75",
    heading: "text-white",
    line: "border-white/20",
    divide: "divide-white/20",
  },
  sand: { section: "bg-sand", muted: "text-stone", heading: "", line: "border-line", divide: "divide-line" },
} as const;

export default function Chapter({ chapter, index }: { chapter: ChapterData; index: number }) {
  const tone = tones[chapter.tone];
  const number = String(index + 1).padStart(2, "0");
  // Photo à droite pour les chapitres impairs, à gauche pour les pairs
  const flip = index % 2 === 1;

  return (
    <section
      id={chapter.id}
      aria-labelledby={`${chapter.id}-titre`}
      className={`section-y overflow-hidden ${tone.section}`}
    >
      <div className="container-latour">
        {/* Filet d'ouverture : numéro, facette, verbe. Identique d'un
            chapitre à l'autre, il signale qu'on change de porte. */}
        <Reveal className={`flex items-center gap-4 border-b pb-4 ${tone.line}`}>
          <span className={`eyebrow ${tone.muted}`}>{number} / 03</span>
          <span className={`eyebrow ${tone.muted}`}>{chapter.eyebrow}</span>
          <span className={`ml-auto text-lg italic ${tone.muted}`}>{chapter.verb}</span>
        </Reveal>

        <div className="mt-10 grid gap-10 md:mt-14 md:grid-cols-12 md:items-center md:gap-12 lg:gap-16">
          <Reveal className={`md:col-span-5 ${flip ? "md:order-2" : ""}`}>
            <h2 id={`${chapter.id}-titre`} className={`title-section ${tone.heading}`}>
              <SplitText text={chapter.title} />
            </h2>
            <p className={`mt-5 ${tone.muted}`}>{chapter.intro}</p>

            <dl className={`mt-8 grid grid-cols-3 border-y ${tone.line} ${tone.divide} divide-x`}>
              {chapter.stats.map((stat) => (
                <div key={stat.unit} className="flex flex-col-reverse justify-end px-3 py-5 first:pl-0">
                  <dt className={`eyebrow mt-2 text-[0.625rem] leading-snug sm:text-xs ${tone.muted}`}>
                    {stat.unit}
                  </dt>
                  <dd className={`text-3xl leading-none sm:text-4xl ${tone.heading || "text-brand"}`}>
                    <CountUp value={stat.value} />
                  </dd>
                </div>
              ))}
            </dl>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              {chapter.ctas.map((cta, i) => (
                <Link
                  key={cta.label}
                  href={cta.href}
                  className={`m3-button m3-state ${i === 0 ? "m3-filled" : "m3-outlined"}`}
                >
                  {cta.label}
                </Link>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.1} className={`md:col-span-7 ${flip ? "md:order-1" : ""}`}>
            <div className="reveal-mask relative aspect-4/3 overflow-hidden rounded-(--md-sys-shape-corner-medium) bg-sand">
              <div className="reveal-mask-inner absolute inset-0">
                <div className="parallax">
                  <Media asset={chapter.media} sizes="(min-width: 768px) 60vw, 100vw" />
                </div>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Ce que la facette propose, en liste : mêmes colonnes pour les
            suites, les formules du spa et les espaces de réception. */}
        <Reveal className="mt-14 md:mt-20">
          <h3 className={`eyebrow ${tone.muted}`}>{chapter.itemsLabel}</h3>
          <ul className={`mt-4 divide-y border-y ${tone.line} ${tone.divide}`}>
            {chapter.items.map((item) => {
              const row = (
                <>
                  <span className={`text-xl md:text-2xl ${tone.heading || "text-brand"}`}>
                    <span className={item.href ? "row-link" : undefined}>{item.name}</span>
                  </span>
                  <span className={`col-span-2 text-sm md:col-span-1 ${tone.muted}`}>
                    {item.detail}
                  </span>
                  <span
                    className={`eyebrow col-start-2 row-start-1 text-right md:col-start-3 ${tone.muted}`}
                  >
                    {item.meta}
                  </span>
                </>
              );
              const layout =
                "grid grid-cols-[1fr_auto] items-baseline gap-x-6 gap-y-1 py-5 md:grid-cols-[1.1fr_1fr_auto] md:py-6";

              return (
                <li key={item.name}>
                  {item.href ? (
                    <Link
                      href={item.href}
                      className={`group m3-state ${layout}`}
                    >
                      {row}
                    </Link>
                  ) : (
                    <div className={layout}>{row}</div>
                  )}
                </li>
              );
            })}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
