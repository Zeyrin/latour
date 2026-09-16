import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Media from "@/components/Media";
import PageCta from "@/components/PageCta";
import Reveal from "@/components/Reveal";
import { euro } from "@/lib/format";
import { suiteBySlug, suites, suitesPage } from "@/lib/pages";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return suites.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params;
  const suite = suiteBySlug(slug);
  if (!suite) return {};
  return {
    title: `${suite.name} — ${suite.surface} m²`,
    description: suite.description,
    alternates: { canonical: `/les-suites/${slug}` },
  };
}

/**
 * Fiche d'une suite. La photo d'abord, en 4:5 sur mobile pour occuper
 * l'écran ; puis l'essentiel (surface, capacité, prix) avant la liste
 * complète des équipements, qu'on lit seulement une fois convaincu.
 */
export default async function SuitePage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const suite = suiteBySlug(slug);
  if (!suite) notFound();

  const index = suites.findIndex((s) => s.slug === slug);
  const previous = suites[(index - 1 + suites.length) % suites.length];
  const next = suites[(index + 1) % suites.length];

  return (
    <>
      <article className="container-latour pt-6 md:pt-12">
        <nav aria-label="Fil d'Ariane" className="text-sm text-stone">
          <Link href="/les-suites" className="m3-button m3-text-button m3-state -ml-3">
            ← Toutes les suites
          </Link>
        </nav>

        <div className="mt-4 grid gap-8 md:mt-8 md:grid-cols-2 md:items-start md:gap-12 lg:gap-16">
          <div className="m3-corner-large relative aspect-4/5 overflow-hidden bg-sand md:sticky md:top-24">
            <Media asset={suite.media} sizes="(min-width: 768px) 50vw, 100vw" priority />
          </div>

          <div>
            <p className="eyebrow text-stone">
              Élément {suite.element} · {suite.surface} m² · {suite.capacity}
            </p>
            <h1 className="title-section mt-3">{suite.headline}</h1>
            <p className="mt-5 text-lg text-stone">{suite.tagline}</p>
            <p className="mt-4 text-stone">{suite.description}</p>

            <ul className="mt-5 flex flex-wrap gap-2">
              {suite.highlights.map((h) => (
                <li key={h} className="m3-chip">
                  {h}
                </li>
              ))}
            </ul>

            {suite.notes ? (
              <ul className="mt-5 grid gap-2 text-sm text-stone">
                {suite.notes.map((note) => (
                  <li key={note}>{note}</li>
                ))}
              </ul>
            ) : null}

            {/* Tarifs : la nuitée en grand, le reste en liste. Le tarif été
                n'existe que pour trois suites. */}
            <section aria-labelledby="tarifs" className="m3-corner-medium mt-8 border border-line p-5">
              <h2 id="tarifs" className="eyebrow text-stone">
                Tarifs
              </h2>
              <p className="mt-2">
                <span className="text-3xl text-brand">{euro(suite.rates.night)}</span>
                <span className="text-stone"> la nuit, petit-déjeuner inclus</span>
              </p>
              <dl className="mt-3 divide-y divide-line border-t border-line text-sm">
                {suite.rates.highSeasonNight ? (
                  <div className="flex justify-between gap-4 py-2">
                    <dt className="text-stone">Du 1er mai au 30 septembre, accès spa inclus</dt>
                    <dd className="whitespace-nowrap">{euro(suite.rates.highSeasonNight)} la nuit</dd>
                  </div>
                ) : null}
                <div className="flex justify-between gap-4 py-2">
                  <dt className="text-stone">La semaine, six nuits</dt>
                  <dd className="whitespace-nowrap">{euro(suite.rates.week)}</dd>
                </div>
                {suitesPage.extras.map((extra) => (
                  <div key={extra.label} className="flex justify-between gap-4 py-2">
                    <dt className="text-stone">{extra.label}</dt>
                    <dd className="text-right">{extra.value}</dd>
                  </div>
                ))}
              </dl>
            </section>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Link href="/contact" className="m3-button m3-filled m3-state">
                Réserver cette suite
              </Link>
              <Link href="/le-spa" className="m3-button m3-outlined m3-state">
                Ajouter un soin au spa
              </Link>
            </div>
          </div>
        </div>

        <Reveal className="mt-14 md:mt-20">
          <h2 className="text-2xl">Équipements</h2>
          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {suite.amenities.map((group) => (
              <section key={group.group} aria-label={group.group}>
                <h3 className="eyebrow text-stone">{group.group}</h3>
                <ul className="mt-2 grid gap-1 text-stone">
                  {group.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </section>
            ))}
          </div>
        </Reveal>

        {/* Navigation entre suites : sur mobile, éviter de remonter à la liste */}
        <nav
          aria-label="Autres suites"
          className="mt-12 flex justify-between gap-4 border-t border-line pt-6"
        >
          <Link href={`/les-suites/${previous.slug}`} className="m3-button m3-text-button m3-state -ml-3">
            ← {previous.name}
          </Link>
          <Link href={`/les-suites/${next.slug}`} className="m3-button m3-text-button m3-state -mr-3">
            {next.name} →
          </Link>
        </nav>
      </article>

      <div className="mt-14 md:mt-20">
        <PageCta
          title={`Réserver la ${suite.name}`}
          text="Un appel ou un e-mail suffit. Pour un séjour à plusieurs ou une semaine, Corinne compose l'offre avec vous."
        />
      </div>
    </>
  );
}
