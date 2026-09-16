import type { Metadata } from "next";
import PageCta from "@/components/PageCta";
import PageHeader from "@/components/PageHeader";
import Reveal from "@/components/Reveal";
import { site } from "@/lib/content";
import { practicalPage } from "@/lib/pages";

export const metadata: Metadata = {
  title: "Informations pratiques — accès et séjour",
  description:
    "Venir au Château Latour Ségur à Lussac : gare TGV de Libourne à 15 min, Bordeaux à 45 min, hélisurface, chauffeur privé. Horaires, petit-déjeuner, paiement, fermeture annuelle.",
  alternates: { canonical: "/informations-pratiques" },
};

/**
 * Page utilitaire : on y vient chercher une réponse, pas une ambiance. Tout
 * en listes courtes, l'adresse et la carte en premier sur mobile.
 */
export default function PracticalPage() {
  return (
    <>
      <PageHeader eyebrow={practicalPage.eyebrow} title={practicalPage.title} text={practicalPage.text}>
        <address className="mt-6 not-italic">
          {site.name}
          <br />
          {site.address.street}
          <br />
          {site.address.city}
        </address>
        <div className="mt-4 flex flex-col gap-3 sm:flex-row">
          <a href={site.mapUrl} target="_blank" rel="noreferrer" className="m3-button m3-filled m3-state">
            Itinéraire Google Maps
          </a>
          <a href={site.phoneHref} className="m3-button m3-outlined m3-state">
            {site.phone}
          </a>
        </div>
      </PageHeader>

      <div className="container-latour">
        <Reveal className="mt-14 grid gap-10 md:mt-20 md:grid-cols-2 md:gap-16">
          <section aria-labelledby="acces">
            <h2 id="acces" className="title-section">
              Accès
            </h2>
            <dl className="mt-6 divide-y divide-line border-y border-line">
              {practicalPage.access.map((a) => (
                <div key={a.name} className="flex justify-between gap-4 py-3">
                  <dt>{a.name}</dt>
                  <dd className="whitespace-nowrap text-stone">{a.value}</dd>
                </div>
              ))}
            </dl>
            <ul className="mt-8 grid gap-4">
              {practicalPage.services.map((s) => (
                <li key={s.name}>
                  <h3 className="uppercase">{s.name}</h3>
                  <p className="mt-1 text-sm text-stone">{s.detail}</p>
                </li>
              ))}
            </ul>
          </section>

          <section aria-labelledby="sejour">
            <h2 id="sejour" className="title-section">
              Votre séjour
            </h2>
            <ul className="mt-6 grid gap-4">
              {practicalPage.stay.map((s) => (
                <li key={s.name}>
                  <h3 className="uppercase">{s.name}</h3>
                  <p className="mt-1 text-sm text-stone">{s.detail}</p>
                </li>
              ))}
            </ul>

            <h2 className="mt-10 text-2xl">Autour du château</h2>
            <ul className="mt-4 grid gap-2 text-stone">
              {practicalPage.around.map((item) => (
                <li key={item} className="flex gap-3">
                  <span aria-hidden className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
                  {item}
                </li>
              ))}
            </ul>
          </section>
        </Reveal>
      </div>

      <div className="mt-14 md:mt-20">
        <PageCta
          title="Une question avant de venir ?"
          text="Horaires d'arrivée, transfert depuis la gare, régime alimentaire : dites-le-nous à la réservation."
          primary="Nous contacter"
          secondary={{ label: "Voir les suites", href: "/les-suites" }}
        />
      </div>
    </>
  );
}
