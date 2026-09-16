import type { Metadata } from "next";
import PageCta from "@/components/PageCta";
import PageHeader from "@/components/PageHeader";
import Reveal from "@/components/Reveal";
import { eventsPage } from "@/lib/pages";

export const metadata: Metadata = {
  title: "Événements, séminaires et réceptions",
  description:
    "Mariage, séminaire, réception au Château Latour Ségur : salle Aliénor d'Aquitaine (60 assis, 140 en cocktail), spa privatisable, cinq suites sur place. Tarifs et privatisation complète.",
  alternates: { canonical: "/evenements" },
};

/**
 * Page événements. Les tarifs sont affichés : un organisateur de mariage ou
 * une assistante de direction filtre d'abord sur le budget, et une page sans
 * prix se solde par un mail de plus à traiter pour Corinne.
 */
export default function EventsPage() {
  return (
    <>
      <PageHeader
        eyebrow={eventsPage.eyebrow}
        title={eventsPage.title}
        text={eventsPage.text}
        media={eventsPage.media}
      >
        <ul className="mt-6 flex flex-wrap gap-2">
          {eventsPage.types.map((t) => (
            <li key={t} className="m3-chip">
              {t}
            </li>
          ))}
        </ul>
      </PageHeader>

      <div className="container-latour">
        <Reveal className="mt-14 md:mt-20">
          <h2 className="title-section">Les espaces</h2>
          <ul className="mt-8 grid gap-6 lg:grid-cols-3">
            {eventsPage.venues.map((v) => (
              <li key={v.name} className="m3-corner-medium flex flex-col border border-line bg-white p-5 sm:p-6">
                <h3 className="text-xl">{v.name}</h3>
                <p className="mt-2 text-stone">{v.detail}</p>
                <dl className="mt-4 divide-y divide-line border-t border-line text-sm">
                  {v.rates.map((r) => (
                    <div key={r.label} className="flex justify-between gap-4 py-2">
                      <dt className="text-stone">{r.label}</dt>
                      <dd className="text-right">{r.value}</dd>
                    </div>
                  ))}
                </dl>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal className="mt-14 grid gap-10 md:mt-20 md:grid-cols-2 md:gap-16">
          <section aria-labelledby="privatisation">
            <h2 id="privatisation" className="title-section">
              Privatiser le domaine
            </h2>
            <p className="mt-3 text-stone">
              Le château, la salle Aliénor d&apos;Aquitaine, le parc, le spa et les cinq suites, pour
              vous seuls.
            </p>
            <ul className="mt-6 grid gap-4">
              {eventsPage.packages.map((p) => (
                <li key={p.name} className="m3-corner-medium flex items-center justify-between gap-4 bg-sand p-5">
                  <div>
                    <h3 className="text-lg">{p.name}</h3>
                    <p className="text-sm text-stone">{p.detail}</p>
                  </div>
                  <p className="whitespace-nowrap text-2xl text-brand">{p.price}</p>
                </li>
              ))}
            </ul>
          </section>

          <section aria-labelledby="prestations">
            <h2 id="prestations" className="title-section">
              Prestations
            </h2>
            <p className="mt-3 text-stone">
              Des partenaires habitués du domaine, coordonnés par Corinne. Tarifs indicatifs.
            </p>
            <dl className="mt-6 divide-y divide-line border-y border-line">
              {eventsPage.services.map((s) => (
                <div key={s.name} className="flex justify-between gap-4 py-3">
                  <dt>{s.name}</dt>
                  <dd className="text-right text-stone">{s.value}</dd>
                </div>
              ))}
            </dl>
          </section>
        </Reveal>
      </div>

      <div className="mt-14 md:mt-20">
        <PageCta
          title="Demander un devis"
          text="Date, nombre d'invités, format : en un échange, Corinne vous dit ce qui est possible et à quel prix."
          primary="Demander un devis"
          secondary={{ label: "Voir les suites", href: "/les-suites" }}
        />
      </div>
    </>
  );
}
