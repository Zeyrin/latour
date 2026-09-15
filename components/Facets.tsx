"use client";

import Link from "next/link";
import { useId, useRef, useState } from "react";
import Media from "@/components/Media";
import Reveal from "@/components/Reveal";
import { facets } from "@/lib/content";

/**
 * Les trois facettes du domaine — Suites & Spa, Spa TerreHappy, Séminaires &
 * Entreprises — dans une seule section à onglets, plutôt qu'un résumé cliquable
 * suivi de trois sections détaillées qui répétaient la même information deux
 * fois : sur une page déjà longue, empiler les trois revenait à payer le même
 * sujet en double scroll.
 *
 * Un seul gabarit (texte à gauche, photo à droite) sert les trois onglets ;
 * seul le contenu du panneau change, la structure reste stable d'un onglet à
 * l'autre.
 */
export default function Facets() {
  const [active, setActive] = useState(0);
  const tabRefs = useRef<Array<HTMLButtonElement | null>>([]);
  const baseId = useId();
  const facet = facets[active];

  const focusTab = (index: number) => {
    const next = (index + facets.length) % facets.length;
    setActive(next);
    tabRefs.current[next]?.focus();
  };

  return (
    <section className="section-y">
      <div className="container-latour">
        <Reveal className="text-center">
          <p className="eyebrow text-stone">Trois façons de vivre le domaine</p>
          <h2 className="title-section mx-auto mt-3 max-w-2xl">
            Suites, spa et réceptions professionnelles
          </h2>
        </Reveal>

        {/* Onglets : au clavier, les flèches gauche/droite déplacent le focus
            et l'onglet actif, comme le veut le patron ARIA tablist. */}
        <div
          role="tablist"
          aria-label="Les trois facettes du domaine"
          className="mt-10 flex flex-wrap justify-center gap-2 sm:mt-12"
        >
          {facets.map((f, index) => (
            <button
              key={f.id}
              ref={(el) => {
                tabRefs.current[index] = el;
              }}
              role="tab"
              type="button"
              id={`${baseId}-tab-${f.id}`}
              aria-selected={index === active}
              aria-controls={`${baseId}-panel-${f.id}`}
              tabIndex={index === active ? 0 : -1}
              onClick={() => setActive(index)}
              onKeyDown={(e) => {
                if (e.key === "ArrowRight") focusTab(index + 1);
                if (e.key === "ArrowLeft") focusTab(index - 1);
              }}
              className={`m3-button m3-state ${index === active ? "m3-filled" : "m3-outlined"}`}
            >
              {f.tab}
            </button>
          ))}
        </div>

        <div
          key={facet.id}
          role="tabpanel"
          id={`${baseId}-panel-${facet.id}`}
          aria-labelledby={`${baseId}-tab-${facet.id}`}
          className="mt-10 sm:mt-12"
        >
          <Reveal className="grid gap-10 sm:grid-cols-2 sm:items-center sm:gap-12 lg:gap-16">
            <div>
              <p className="eyebrow text-stone">{facet.eyebrow}</p>
              <h3 className="title-section mt-3">{facet.title}</h3>
              <p className="mt-5 text-stone">{facet.intro}</p>

              {/* Onglet Suites & Spa : les trois suites en liste, pas en
                  cartes — elles se visitent chacune sur leur propre page. */}
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
                          <p className="mt-1 line-clamp-1 text-sm text-stone">
                            {suite.excerpt}
                          </p>
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

              {/* Onglet Entreprises : les formats proposés, en puces */}
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
                <Media
                  asset={facet.media}
                  sizes="(min-width: 640px) 50vw, 100vw"
                />
              </div>

              {/* Onglet Entreprises : chiffres clés sous la photo */}
              {facet.stats ? (
                <dl className="m3-corner-medium mt-6 grid gap-px overflow-hidden border border-line bg-line sm:grid-cols-3">
                  {facet.stats.map((figure) => (
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
              ) : null}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
