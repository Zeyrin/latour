import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import { blurFor } from "@/lib/blur";
import { site, suitesSection } from "@/lib/content";

export default function Suites() {
  return (
    <section className="container-latour py-16 sm:py-20 md:py-28">
      <Reveal className="text-center">
        <p className="eyebrow text-stone">{suitesSection.eyebrow}</p>
        <h2 className="title-section mx-auto mt-3 max-w-3xl uppercase">
          {suitesSection.title}
        </h2>
      </Reveal>

      {/* Deux colonnes dès sm, trois seulement à lg : à 768px trois cartes seraient trop étroites */}
      <ul className="mt-12 grid gap-10 sm:grid-cols-2 md:gap-12 lg:grid-cols-3">
        {suitesSection.items.map((suite, index) => (
          <li key={suite.href} className="last:sm:col-span-2 last:lg:col-span-1">
            <Reveal delay={index * 0.1} className="group flex h-full flex-col">
              <Link
                href={suite.href}
                tabIndex={-1}
                aria-hidden
                className="relative block aspect-3/2 overflow-hidden bg-sand"
              >
                <Image
                  src={suite.image}
                  alt=""
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  placeholder="blur"
                  blurDataURL={blurFor(suite.image)}
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
              </Link>

              <p className="eyebrow mt-6 text-mist">{site.name} Suites &amp; Spa</p>
              <h3 className="mt-2 text-2xl uppercase">
                <Link
                  href={suite.href}
                  className="transition-colors hover:text-brand-soft"
                >
                  {suite.name}
                </Link>
              </h3>
              <p className="mt-3 flex-1 text-stone">{suite.excerpt}</p>

              <Link
                href={suite.href}
                className="eyebrow tap mt-6 self-start border border-brand px-7 text-brand transition-colors duration-300 hover:bg-brand hover:text-white"
              >
                <span className="sr-only">{suite.name} : </span>Visiter
              </Link>
            </Reveal>
          </li>
        ))}
      </ul>
    </section>
  );
}
