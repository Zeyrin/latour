import Link from "next/link";
import Reveal from "@/components/Reveal";
import SplitText from "@/components/SplitText";
import { chapters, closing, site } from "@/lib/content";

/**
 * Dernière occasion d'agir avant le pied de page : une porte par univers, les
 * trois au même niveau, puis le téléphone et le bon cadeau.
 */
export default function Closing() {
  return (
    <section
      aria-labelledby="closing-titre"
      className="on-dark relative overflow-hidden bg-brand text-center text-white"
    >
      <Reveal className="container-latour section-y relative">
        <p className="eyebrow text-white/70">{closing.eyebrow}</p>
        <h2 id="closing-titre" className="title-hero mx-auto mt-6 max-w-4xl text-white">
          <SplitText text={closing.title} />
        </h2>
        <div className="mx-auto mt-8 max-w-xl text-white/80 md:text-lg">
          {closing.text.map((line) => (
            <p key={line}>{line}</p>
          ))}
        </div>

        <ul className="mx-auto mt-12 grid max-w-xs gap-3 sm:max-w-3xl sm:grid-cols-3 sm:gap-4">
          {chapters.map((chapter) => (
            <li key={chapter.id}>
              <Link
                href="/contact"
                className="m3-button m3-outlined m3-state w-full justify-between gap-4"
              >
                {chapter.verb}
                <svg viewBox="0 0 24 24" fill="none" aria-hidden className="h-4 w-4">
                  <path d="M7 17 17 7M9 7h8v8" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
            </li>
          ))}
        </ul>

        <p className="mt-10 text-3xl italic text-gold">{closing.signature}</p>

        <div className="mt-4 flex flex-col items-center justify-center gap-1 sm:flex-row sm:gap-4">
          <a href={site.phoneHref} className="m3-button m3-text-button m3-state">
            {site.phone}
          </a>
          <a href={closing.gift.href} target="_blank" rel="noreferrer" className="m3-button m3-text-button m3-state">
            {closing.gift.label}
          </a>
        </div>
      </Reveal>
    </section>
  );
}
