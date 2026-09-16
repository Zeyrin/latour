import Link from "next/link";
import Media from "@/components/Media";
import Reveal from "@/components/Reveal";
import type { Facet } from "@/lib/content";

/**
 * Gabarit commun aux facettes du domaine (texte à gauche, photo à droite).
 * Partagé entre les onglets de SuitesSpa et la section Business pour que les
 * deux gardent la même structure sans dupliquer le balisage.
 */
export default function FacetPanel({ facet }: { facet: Facet }) {
  return (
    <Reveal className="grid gap-10 sm:grid-cols-2 sm:items-center sm:gap-12 lg:gap-16">
      <div>
        <p className="eyebrow text-stone">{facet.eyebrow}</p>
        <h3 className="title-section mt-3">{facet.title}</h3>
        <p className="mt-5 text-stone">{facet.intro}</p>

        {/* Suites : les trois suites en liste, pas en cartes — elles se
            visitent chacune sur leur propre page. */}
        {facet.list ? (
          <ul className="mt-6 divide-y divide-line border-y border-line">
            {facet.list.map((suite) => (
              <li key={suite.href}>
                <Link
                  href={suite.href}
                  className="group m3-state flex items-center justify-between gap-4 py-4"
                >
                  <div className="min-w-0">
                    <h4 className="uppercase transition-colors group-hover:text-brand-soft">
                      {suite.name}
                    </h4>
                    <p className="mt-1 line-clamp-1 text-sm text-stone">{suite.excerpt}</p>
                  </div>
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    aria-hidden
                    className="h-5 w-5 shrink-0 text-mist transition-transform group-hover:translate-x-1"
                  >
                    <path
                      d="m9 6 6 6-6 6"
                      stroke="currentColor"
                      strokeWidth="1.25"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </Link>
              </li>
            ))}
          </ul>
        ) : null}

        {/* Entreprises : les formats proposés, en puces */}
        {facet.chips ? (
          <ul className="mt-6 flex flex-wrap gap-2">
            {facet.chips.map((chip) => (
              <li key={chip} className="m3-chip">
                {chip}
              </li>
            ))}
          </ul>
        ) : null}

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          {facet.ctas.map((cta, index) => (
            <Link
              key={cta.href}
              href={cta.href}
              className={`m3-button m3-state ${index === 0 ? "m3-filled" : "m3-outlined"}`}
            >
              {cta.label}
            </Link>
          ))}
        </div>
      </div>

      <div>
        <div className="m3-corner-medium relative aspect-4/5 overflow-hidden bg-sand sm:aspect-4/3">
          <Media asset={facet.media} sizes="(min-width: 640px) 50vw, 100vw" />
        </div>

        {/* Entreprises : chiffres clés sous la photo */}
        {facet.stats ? (
          <dl className="m3-corner-medium mt-6 grid gap-px overflow-hidden border border-line bg-line sm:grid-cols-3">
            {facet.stats.map((figure) => (
              <div key={figure.unit} className="bg-white p-5">
                <dt className="sr-only">{figure.unit}</dt>
                <dd>
                  <span className="block text-3xl leading-none text-brand">{figure.value}</span>
                  <span className="eyebrow mt-2 block text-stone">{figure.unit}</span>
                  <span className="mt-2 block text-sm text-stone">{figure.detail}</span>
                </dd>
              </div>
            ))}
          </dl>
        ) : null}
      </div>
    </Reveal>
  );
}
