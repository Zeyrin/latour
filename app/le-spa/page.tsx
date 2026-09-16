import type { Metadata } from "next";
import Link from "next/link";
import PageCta from "@/components/PageCta";
import PageHeader from "@/components/PageHeader";
import Reveal from "@/components/Reveal";
import { site } from "@/lib/content";
import { euro } from "@/lib/format";
import { spaPage } from "@/lib/pages";

export const metadata: Metadata = {
  title: "Spa TerreHappy® — soins, massages et privatisation",
  description:
    "Le Spa TerreHappy® du Château Latour Ségur : trois cabines, hammam creusé dans la roche, bain à remous aux minéraux de la mer Morte. Formules de 55 à 640 €, privatisation pour 10 à 12 personnes.",
  alternates: { canonical: "/le-spa" },
};

/**
 * Page spa. Elle absorbe l'ancien site spaterrehappy.fr (vingt pages de
 * soins) en une seule : chiffres, formules avec prix, massages, autres
 * soins, privatisation. Les prix sont visibles sans clic — c'est ce que
 * cherche quelqu'un qui compare des spas sur son téléphone.
 */
export default function SpaPage() {
  return (
    <>
      <PageHeader
        eyebrow={spaPage.eyebrow}
        title={spaPage.title}
        text={spaPage.intro}
        media={spaPage.media}
      />

      <div className="container-latour">
        {/* Les chiffres du spa, dans le même gabarit que les stats séminaires */}
        <Reveal>
          <dl className="m3-corner-medium mt-10 grid grid-cols-2 gap-px overflow-hidden border border-line bg-line md:mt-14 md:grid-cols-4">
            {spaPage.facilities.map((f) => (
              <div key={f.label} className="bg-white p-5">
                <dt className="sr-only">{f.label}</dt>
                <dd>
                  <span className="block text-3xl leading-none text-brand">{f.value}</span>
                  <span className="eyebrow mt-2 block text-stone">{f.label}</span>
                  <span className="mt-2 block text-sm text-stone">{f.detail}</span>
                </dd>
              </div>
            ))}
          </dl>
          <p className="mt-5 max-w-2xl text-stone">{spaPage.lounge}</p>
        </Reveal>

        <Reveal className="mt-14 md:mt-20">
          <h2 className="title-section">Les formules</h2>
          <p className="mt-3 max-w-2xl text-stone">
            Chaque formule se réserve à l&apos;avance et s&apos;offre en bon cadeau.
          </p>
          <ul className="mt-8 grid gap-4 md:grid-cols-2">
            {spaPage.packages.map((p) => (
              <li key={p.name} className="m3-corner-medium flex flex-col border border-line bg-white p-5">
                <div className="flex items-baseline justify-between gap-4">
                  <h3 className="text-xl">{p.name}</h3>
                  <p className="whitespace-nowrap text-right">
                    <span className="text-2xl text-brand">{euro(p.price)}</span>
                    {"priceDuo" in p && p.priceDuo ? (
                      <span className="block text-sm text-stone">{euro(p.priceDuo)} en duo</span>
                    ) : null}
                  </p>
                </div>
                <p className="eyebrow mt-1 text-stone">{p.duration}</p>
                <p className="mt-3 text-stone">{p.includes}</p>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal className="mt-14 grid gap-10 md:mt-20 md:grid-cols-[3fr_2fr] md:gap-16">
          <section aria-labelledby="massages">
            <h2 id="massages" className="title-section">
              Les massages
            </h2>
            <p className="mt-3 text-stone">{spaPage.massages.intro}</p>
            <ul className="mt-6 divide-y divide-line border-y border-line">
              {spaPage.massages.items.map((m) => (
                <li key={m.name} className="py-4">
                  <h3 className="uppercase">{m.name}</h3>
                  <p className="mt-1 text-sm text-stone">{m.detail}</p>
                </li>
              ))}
            </ul>
            <dl className="mt-6 grid grid-cols-4 gap-px overflow-hidden rounded-lg border border-line bg-line">
              {spaPage.massages.rates.map((r) => (
                <div key={r.duration} className="bg-white p-3 text-center">
                  <dt className="eyebrow text-stone">{r.duration}</dt>
                  <dd className="mt-1 text-brand">{euro(r.price)}</dd>
                </div>
              ))}
            </dl>
          </section>

          <section aria-labelledby="autres-soins">
            <h2 id="autres-soins" className="text-2xl">
              Autres soins
            </h2>
            <ul className="mt-4 grid gap-2 text-stone">
              {spaPage.otherCare.map((item) => (
                <li key={item} className="flex gap-3">
                  <span aria-hidden className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-4 text-sm text-stone">
              Carte complète et disponibilités au{" "}
              <a href={site.phoneHref} className="whitespace-nowrap underline underline-offset-4">
                {site.phone}
              </a>
              .
            </p>

            <div className="m3-corner-medium mt-10 bg-sand p-6">
              <h2 className="text-2xl">{spaPage.privatisation.title}</h2>
              <p className="mt-3 text-stone">{spaPage.privatisation.text}</p>
              <p className="mt-4">
                <span className="text-3xl text-brand">{euro(spaPage.privatisation.price)}</span>
              </p>
              <Link href="/contact" className="m3-button m3-outlined m3-state mt-5">
                Demander une date
              </Link>
            </div>
          </section>
        </Reveal>
      </div>

      <div className="mt-14 md:mt-20">
        <PageCta
          title="Réserver un soin"
          text="Avec ou sans nuit au château. Les formules week-ends et cures associent les deux."
          primary="Réserver un soin"
          secondary={{ label: "Week-ends & cures", href: "/week-ends-et-cures" }}
        />
      </div>
    </>
  );
}
