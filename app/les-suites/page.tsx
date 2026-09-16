import type { Metadata } from "next";
import Link from "next/link";
import Media from "@/components/Media";
import PageCta from "@/components/PageCta";
import PageHeader from "@/components/PageHeader";
import Reveal from "@/components/Reveal";
import { euro } from "@/lib/format";
import { suites, suitesPage } from "@/lib/pages";

export const metadata: Metadata = {
  title: "Les suites du château",
  description:
    "Cinq suites de charme de 28 à 80 m² dans les dépendances du Château Latour Ségur : cheminée, bain à remous ou sauna, jardin privatif, accès au spa et à la piscine chauffée.",
  alternates: { canonical: "/les-suites" },
};

/**
 * Liste des suites. Cartes en liste verticale, photo au-dessus sur mobile et
 * à gauche dès sm : on compare cinq suites sur ce qui les distingue (surface,
 * équipement, prix), pas sur cinq paragraphes identiques.
 */
export default function SuitesPage() {
  return (
    <>
      <PageHeader eyebrow={suitesPage.eyebrow} title={suitesPage.title} text={suitesPage.text} />

      <div className="container-latour">
        <ul className="mt-10 grid gap-6 md:mt-14 md:gap-8">
          {suites.map((suite, index) => (
            <li key={suite.slug}>
              <Reveal delay={index * 0.04}>
                <Link
                  href={`/les-suites/${suite.slug}`}
                  className="group m3-corner-large m3-state grid overflow-hidden border border-line bg-white sm:grid-cols-[2fr_3fr]"
                >
                  <div className="relative aspect-4/3 bg-sand sm:aspect-auto sm:min-h-64">
                    <Media asset={suite.media} sizes="(min-width: 640px) 40vw, 100vw" zoomOnHover />
                  </div>
                  <div className="p-5 sm:p-7">
                    <p className="eyebrow text-stone">
                      {suite.surface} m² · {suite.capacity}
                    </p>
                    <h2 className="mt-2 text-2xl uppercase transition-colors group-hover:text-brand-soft">
                      {suite.name}
                    </h2>
                    <p className="mt-3 text-stone">{suite.tagline}</p>
                    <ul className="mt-4 flex flex-wrap gap-2">
                      {suite.highlights.map((h) => (
                        <li key={h} className="m3-chip">
                          {h}
                        </li>
                      ))}
                    </ul>
                    <p className="mt-5 flex items-baseline justify-between gap-4">
                      <span className="text-stone">
                        à partir de{" "}
                        <strong className="text-lg text-brand">{euro(suite.rates.night)}</strong> la nuit
                      </span>
                      <span className="m3-button m3-text-button m3-state -mr-3">Découvrir</span>
                    </p>
                  </div>
                </Link>
              </Reveal>
            </li>
          ))}
        </ul>

        <Reveal className="mt-14 grid gap-10 md:mt-20 md:grid-cols-2 md:gap-16">
          <section aria-labelledby="inclus">
            <h2 id="inclus" className="text-2xl">
              Inclus dans chaque séjour
            </h2>
            <ul className="mt-4 grid gap-2 text-stone">
              {suitesPage.included.map((item) => (
                <li key={item} className="flex gap-3">
                  <span aria-hidden className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-4 text-sm text-stone">{suitesPage.season}</p>
          </section>
          <section aria-labelledby="supplements">
            <h2 id="supplements" className="text-2xl">
              En supplément
            </h2>
            <dl className="mt-4 divide-y divide-line border-y border-line">
              {suitesPage.extras.map((extra) => (
                <div key={extra.label} className="flex justify-between gap-4 py-3">
                  <dt className="text-stone">{extra.label}</dt>
                  <dd className="text-right">{extra.value}</dd>
                </div>
              ))}
            </dl>
          </section>
        </Reveal>
      </div>

      <div className="mt-14 md:mt-20">
        <PageCta
          title="Choisissez votre suite"
          text="Corinne vous conseille selon vos dates et ce que vous cherchez : calme, espace, accès de plain-pied."
        />
      </div>
    </>
  );
}
