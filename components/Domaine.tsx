import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import { domaine } from "@/lib/content";

/**
 * Présentation du domaine. Réunit les blocs « Bienvenue » et « Au cœur des
 * traditions » du site d'origine : sur mobile, deux sections de prose
 * consécutives repoussaient les photos trop loin dans la page.
 */
export default function Domaine() {
  return (
    <section className="bg-sand section-y">
      <div className="container-latour grid items-center gap-8 md:grid-cols-[auto_1fr] md:gap-14">
        <Reveal className="flex justify-center">
          <Image
            src={domaine.icon}
            alt=""
            width={180}
            height={180}
            sizes="(min-width: 768px) 176px, 88px"
            className="h-22 w-auto md:h-44"
          />
        </Reveal>

        <Reveal delay={0.08} className="text-center md:text-left">
          <p className="eyebrow text-stone">{domaine.eyebrow}</p>
          <h2 className="title-section mt-3">{domaine.title}</h2>
          <p className="eyebrow mt-4 text-mist">{domaine.subtitle}</p>

          <div className="mt-6 space-y-4 text-stone">
            {domaine.paragraphs.map((paragraph) => (
              <p key={paragraph.slice(0, 40)}>{paragraph}</p>
            ))}
          </div>

          <Link
            href={domaine.cta.href}
            className="m3-button m3-outlined m3-state mt-8"
          >
            {domaine.cta.label}
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
