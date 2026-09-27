import ArrowLink from "@/components/ArrowLink";
import Media from "@/components/Media";
import Reveal from "@/components/Reveal";
import SplitText from "@/components/SplitText";
import type { Chapter as ChapterData } from "@/lib/content";

/**
 * Gabarit unique des trois univers (suites, spa, séminaires). Même structure,
 * mêmes animations, mêmes proportions pour les trois : seule la tonalité de
 * fond change, et la photo passe d'un côté à l'autre pour rythmer la lecture.
 * Aucune variante propre à un univers — c'est ce qui garantit leur égalité.
 */

const tones = {
  warm: { section: "bg-warm", muted: "text-stone", heading: "", line: "bg-hairline" },
  dark: { section: "on-dark bg-brand text-white", muted: "text-white/70", heading: "text-white", line: "bg-white/25" },
  sand: { section: "bg-sand", muted: "text-stone", heading: "", line: "bg-hairline" },
} as const;

export default function Chapter({ chapter, index }: { chapter: ChapterData; index: number }) {
  const tone = tones[chapter.tone];
  const number = String(index + 1).padStart(2, "0");
  const dark = chapter.tone === "dark";
  // Photo à gauche pour les chapitres impairs, à droite pour les pairs
  const flip = index % 2 === 1;

  return (
    <section
      id={chapter.id}
      aria-labelledby={`${chapter.id}-titre`}
      className={`section-y overflow-hidden ${tone.section}`}
    >
      <div className="container-latour grid gap-10 md:grid-cols-12 md:items-center md:gap-12 lg:gap-20">
        <Reveal className={`md:col-span-7 ${flip ? "md:order-2" : ""}`}>
          <figure>
            <div className="reveal-mask relative aspect-4/3 overflow-hidden bg-hairline">
              <div className="reveal-mask-inner absolute inset-0">
                <div className="parallax">
                  <Media asset={chapter.media} sizes="(min-width: 768px) 60vw, 100vw" />
                </div>
              </div>
              <span className="eyebrow absolute bottom-5 left-6 text-[0.625rem] text-white/85">
                {number} <span className="mx-2 text-white/50">/</span> 03
              </span>
            </div>
            <figcaption className={`eyebrow mt-4 text-[0.5625rem] ${tone.muted}`}>
              {chapter.art} — Château Latour Ségur
            </figcaption>
          </figure>
        </Reveal>

        <Reveal delay={0.1} className={`md:col-span-5 ${flip ? "md:order-1" : ""}`}>
          <p className="flex items-center gap-5">
            <span className={`text-2xl ${dark ? "text-gold" : "text-stone"}`}>{number}</span>
            <span aria-hidden className={`h-6 w-px ${tone.line}`} />
            <span className={`eyebrow text-[0.625rem] ${tone.muted}`}>{chapter.label}</span>
          </p>

          <h2 id={`${chapter.id}-titre`} className={`title-section mt-6 ${tone.heading}`}>
            <SplitText text={chapter.title} />
          </h2>

          <div className={`mt-8 space-y-5 ${tone.muted}`}>
            {chapter.paragraphs.map((p) => (
              <p key={p.slice(0, 32)}>{p}</p>
            ))}
          </div>

          <ul className={`mt-8 flex flex-wrap items-center gap-x-3 gap-y-2 ${tone.muted}`}>
            {chapter.tags.map((tag, i) => (
              <li key={tag} className="eyebrow flex items-center gap-3 text-[0.5625rem]">
                {i > 0 ? <span aria-hidden>·</span> : null}
                {tag}
              </li>
            ))}
          </ul>

          <ArrowLink href={chapter.cta.href} onDark={dark} className="mt-8">
            {chapter.cta.label}
          </ArrowLink>
        </Reveal>
      </div>
    </section>
  );
}
