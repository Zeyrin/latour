"use client";

import { useId, useRef, useState } from "react";
import FacetPanel from "@/components/FacetPanel";
import Reveal from "@/components/Reveal";
import { suitesSpa } from "@/lib/content";

/**
 * Suites et Spa TerreHappy réunis dans une seule section à onglets : c'est
 * la même promesse — séjourner et se ressourcer — vue sous deux angles, et
 * les empiler doublait le scroll pour un contenu qui se répondait déjà.
 * Les séminaires ont leur propre section (Business.tsx), autre public.
 */
export default function SuitesSpa() {
  const { facets } = suitesSpa;
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
    <section id="suites-spa" className="section-y">
      <div className="container-latour">
        <Reveal className="text-center">
          <p className="eyebrow text-stone">{suitesSpa.eyebrow}</p>
          <h2 className="title-section mx-auto mt-3 max-w-2xl">{suitesSpa.title}</h2>
        </Reveal>

        {/* Onglets : au clavier, les flèches gauche/droite déplacent le focus
            et l'onglet actif, comme le veut le patron ARIA tablist. */}
        <div
          role="tablist"
          aria-label="Suites et spa"
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
          <FacetPanel facet={facet} />
        </div>
      </div>
    </section>
  );
}
