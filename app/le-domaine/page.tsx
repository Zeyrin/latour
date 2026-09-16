import type { Metadata } from "next";
import Image from "next/image";
import PageCta from "@/components/PageCta";
import PageHeader from "@/components/PageHeader";
import Reveal from "@/components/Reveal";
import { site } from "@/lib/content";
import { domainePage } from "@/lib/pages";

export const metadata: Metadata = {
  title: "Le domaine — histoire et parc",
  description:
    "Château du XIIe siècle classé monument historique, lié à l'abbaye de Faise et à Montesquieu. Parc de quatre hectares, étangs, piscine chauffée et basse-cour, à Lussac près de Saint-Émilion.",
  alternates: { canonical: "/le-domaine" },
};

/**
 * Le domaine : l'histoire en frise, le lieu aujourd'hui en quatre points.
 * La frise est verticale à toutes les tailles — neuf siècles ne tiennent pas
 * sur une ligne de téléphone.
 */
export default function DomainePage() {
  return (
    <>
      <PageHeader
        eyebrow={domainePage.eyebrow}
        title={domainePage.title}
        text={domainePage.text}
        media={domainePage.media}
      />

      <div className="container-latour">
        <Reveal className="mt-14 grid gap-8 md:mt-20 md:grid-cols-[auto_1fr] md:gap-14">
          <div className="flex justify-center md:justify-start">
            <Image
              src="/images/logo-monument-historique.webp"
              alt="Monument historique de France"
              width={512}
              height={512}
              sizes="112px"
              className="h-24 w-auto md:h-28"
            />
          </div>
          <div>
            <p className="eyebrow text-stone">{site.heritage}</p>
            <h2 className="title-section mt-3">{domainePage.history.title}</h2>
            <p className="mt-5 text-stone">{domainePage.history.intro}</p>
          </div>
        </Reveal>

        <Reveal className="mt-10 md:mt-14">
          <ol className="relative grid gap-8 border-l border-line pl-6 md:pl-10">
            {domainePage.history.timeline.map((step) => (
              <li key={step.date} className="relative">
                <span
                  aria-hidden
                  className="absolute -left-6 top-2 h-2.5 w-2.5 -translate-x-1/2 rounded-full bg-brand md:-left-10"
                />
                <p className="eyebrow text-brand">{step.date}</p>
                <p className="mt-2 max-w-2xl text-stone">{step.text}</p>
              </li>
            ))}
          </ol>
        </Reveal>

        <Reveal className="mt-14 md:mt-20">
          <h2 className="title-section">{domainePage.today.title}</h2>
          <ul className="mt-8 grid gap-4 sm:grid-cols-2">
            {domainePage.today.items.map((item) => (
              <li key={item.name} className="m3-corner-medium border border-line bg-white p-5">
                <h3 className="text-xl">{item.name}</h3>
                <p className="mt-2 text-stone">{item.detail}</p>
              </li>
            ))}
          </ul>
          <p className="mt-8 max-w-2xl text-stone">
            Corinne Dray vous accueille et partage sa passion pour la région, ses vins et ses
            belles bâtisses.
          </p>
        </Reveal>
      </div>

      <div className="mt-14 md:mt-20">
        <PageCta
          title="Venir au château"
          text="À huit kilomètres de Saint-Émilion, quarante-cinq minutes de Bordeaux."
          primary="Réserver un séjour"
          secondary={{ label: "Informations pratiques", href: "/informations-pratiques" }}
        />
      </div>
    </>
  );
}
