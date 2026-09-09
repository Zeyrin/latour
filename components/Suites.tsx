import Link from "next/link";
import Media from "@/components/Media";
import Reveal from "@/components/Reveal";
import { site, suitesSection } from "@/lib/content";

export default function Suites() {
  return (
    <section className="container-latour section-y">
      <Reveal className="text-center">
        <p className="eyebrow text-stone">{suitesSection.eyebrow}</p>
        <h2 className="title-section mx-auto mt-3 max-w-3xl uppercase">
          {suitesSection.title}
        </h2>
      </Reveal>

      {/* Sur mobile, trois cartes verticales imposeraient un défilement
          interminable : les suites se replient en liste compacte, et le choix
          détaillé se fait sur la page dédiée. Dès sm, retour aux cartes. */}
      <ul className="mt-8 sm:mt-12 sm:grid sm:grid-cols-2 sm:gap-10 md:gap-12 lg:grid-cols-3">
        {suitesSection.items.map((suite, index) => (
          <li
            key={suite.href}
            className="border-b border-line last:border-0 sm:border-0 last:sm:col-span-2 last:lg:col-span-1"
          >
            <Reveal delay={index * 0.08}>
              <Link
                href={suite.href}
                className="group flex items-center gap-4 py-4 sm:block sm:py-0"
              >
                <div className="relative aspect-square w-20 shrink-0 overflow-hidden bg-sand sm:aspect-4/5 sm:w-full">
                  <Media
                    asset={suite.media}
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 80px"
                    zoomOnHover
                  />
                </div>

                <div className="min-w-0 flex-1 sm:mt-6">
                  <p className="eyebrow hidden text-mist sm:block">
                    {site.name} Suites &amp; Spa
                  </p>
                  <h3 className="text-lg uppercase transition-colors group-hover:text-brand-soft sm:mt-2 sm:text-2xl">
                    {suite.name}
                  </h3>
                  <p className="mt-1 line-clamp-2 text-sm text-stone sm:mt-3 sm:line-clamp-none sm:text-base">
                    {suite.excerpt}
                  </p>

                  <span className="eyebrow tap mt-6 hidden border border-brand px-7 text-brand transition-colors duration-300 group-hover:bg-brand group-hover:text-white sm:inline-flex">
                    Visiter
                  </span>
                </div>

                {/* Chevron : signale que la ligne est cliquable, sur mobile seulement */}
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  aria-hidden
                  className="h-5 w-5 shrink-0 text-mist sm:hidden"
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
            </Reveal>
          </li>
        ))}
      </ul>

      {/* Les cinq suites ne tiennent pas toutes sur l'accueil : sur mobile,
          la liste renvoie explicitement vers la page complète. */}
      <div className="mt-8 text-center sm:hidden">
        <Link
          href={suitesSection.allHref}
          className="eyebrow tap border border-brand px-8 text-brand transition-colors duration-300 hover:bg-brand hover:text-white"
        >
          {suitesSection.allLabel}
        </Link>
      </div>
    </section>
  );
}
