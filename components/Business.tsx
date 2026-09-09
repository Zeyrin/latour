import Link from "next/link";
import Media from "@/components/Media";
import Reveal from "@/components/Reveal";
import { business } from "@/lib/content";

/**
 * Section professionnelle. Volontairement plus sobre et plus factuelle que le
 * reste de la page : un décideur cherche une capacité, un format et un
 * interlocuteur, pas une promesse d'évasion.
 */
export default function Business() {
  return (
    <section className="bg-sand section-y">
      <div className="container-latour">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <p className="eyebrow text-stone">{business.eyebrow}</p>
            <h2 className="title-section mt-3">{business.title}</h2>

            <div className="mt-6 space-y-4 text-stone">
              {business.paragraphs.map((paragraph) => (
                <p key={paragraph.slice(0, 40)}>{paragraph}</p>
              ))}
            </div>

            <ul className="mt-8 flex flex-wrap gap-2">
              {business.formats.map((format) => (
                <li
                  key={format}
                  className="eyebrow border border-line bg-white px-4 py-2 text-stone"
                >
                  {format}
                </li>
              ))}
            </ul>

            <p className="mt-6 text-sm text-stone">{business.services}</p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href={business.ctas.primary.href}
                className="eyebrow tap border border-brand bg-brand px-8 text-white transition-colors duration-300 hover:bg-transparent hover:text-brand"
              >
                {business.ctas.primary.label}
              </Link>
              <Link
                href={business.ctas.secondary.href}
                className="eyebrow tap border border-brand px-8 text-brand transition-colors duration-300 hover:bg-brand hover:text-white"
              >
                {business.ctas.secondary.label}
              </Link>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="relative aspect-4/3 overflow-hidden bg-white">
              <Media
                asset={business.media}
                sizes="(min-width: 1024px) 50vw, 100vw"
              />
            </div>

            <dl className="mt-6 grid gap-px border border-line bg-line sm:grid-cols-3">
              {business.figures.map((figure) => (
                <div key={figure.unit} className="bg-white p-5">
                  <dt className="sr-only">{figure.unit}</dt>
                  <dd>
                    <span className="block text-3xl leading-none text-brand">
                      {figure.value}
                    </span>
                    <span className="eyebrow mt-2 block text-stone">{figure.unit}</span>
                    <span className="mt-2 block text-sm text-stone">{figure.detail}</span>
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
