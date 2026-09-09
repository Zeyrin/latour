import Image from "next/image";
import Link from "next/link";
import { site, suitesSection } from "@/lib/content";

export default function Suites() {
  return (
    <section className="container-latour py-20 md:py-28">
      <div className="text-center">
        <p className="eyebrow text-stone">{suitesSection.eyebrow}</p>
        <h2 className="mx-auto mt-3 max-w-3xl text-3xl uppercase md:text-4xl">
          {suitesSection.title}
        </h2>
      </div>

      <ul className="mt-14 grid gap-10 md:grid-cols-3">
        {suitesSection.items.map((suite) => (
          <li key={suite.href} className="group flex flex-col">
            <Link href={suite.href} className="relative block aspect-4/5 overflow-hidden">
              <Image
                src={suite.image}
                alt={`${suite.name} — ${site.name}`}
                fill
                sizes="(min-width: 768px) 33vw, 100vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </Link>

            <p className="eyebrow mt-6 text-mist">{site.name} Suites &amp; Spa</p>
            <h3 className="mt-2 text-2xl uppercase">{suite.name}</h3>
            <p className="mt-3 flex-1 text-stone">{suite.excerpt}</p>

            <Link
              href={suite.href}
              className="eyebrow mt-6 self-start border border-brand px-7 py-3 text-brand transition-colors hover:bg-brand hover:text-white"
            >
              Visiter
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
