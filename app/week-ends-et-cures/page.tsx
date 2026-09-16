import type { Metadata } from "next";
import Link from "next/link";
import PageCta from "@/components/PageCta";
import PageHeader from "@/components/PageHeader";
import Reveal from "@/components/Reveal";
import { site } from "@/lib/content";
import { staysPage } from "@/lib/pages";

export const metadata: Metadata = {
  title: "Week-ends & cures bien-être",
  description:
    "Week-ends et cures spa au Château Latour Ségur : suite, petits-déjeuners et soins TerreHappy®, de deux à sept nuits, composés sur mesure.",
  alternates: { canonical: "/week-ends-et-cures" },
};

/**
 * Formules séjour + spa. Sans détail ni tarif public pour l'instant : la page
 * présente les formules et renvoie vers un devis. À enrichir dès que Corinne
 * fournit la composition et les prix (voir lib/pages.ts).
 */
export default function StaysPage() {
  const groups = [staysPage.weekends, staysPage.cures];
  return (
    <>
      <PageHeader eyebrow={staysPage.eyebrow} title={staysPage.title} text={staysPage.text} />

      <div className="container-latour">
        {groups.map((group, gi) => (
          <Reveal key={group.title} className={gi === 0 ? "mt-10 md:mt-14" : "mt-14 md:mt-20"}>
            <h2 className="title-section">{group.title}</h2>
            <p className="mt-3 max-w-2xl text-stone">{group.intro}</p>
            <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {group.items.map((item) => (
                <li key={item.name} className="m3-corner-medium border border-line bg-white p-5">
                  <h3 className="text-xl">{item.name}</h3>
                  <p className="mt-2 text-stone">{item.detail}</p>
                  <Link href="/contact" className="m3-button m3-text-button m3-state -ml-3 mt-3">
                    Demander un devis
                  </Link>
                </li>
              ))}
            </ul>
          </Reveal>
        ))}

        <Reveal className="m3-corner-medium mt-14 grid gap-6 bg-sand p-6 sm:grid-cols-[1fr_auto] sm:items-center md:mt-20 md:p-8">
          <div>
            <h2 className="text-2xl">Offrir un séjour</h2>
            <p className="mt-2 text-stone">{staysPage.gift}</p>
          </div>
          <a
            href={site.giftUrl}
            target="_blank"
            rel="noreferrer"
            className="m3-button m3-filled m3-state"
          >
            Bon cadeau
          </a>
        </Reveal>
      </div>

      <div className="mt-14 md:mt-20">
        <PageCta
          title="Composons votre séjour"
          text="Dites-nous vos dates, la durée et ce que vous attendez de ces jours-là : Corinne vous propose la formule et son tarif."
          primary="Demander un devis"
          secondary={{ label: "Voir les suites", href: "/les-suites" }}
        />
      </div>
    </>
  );
}
