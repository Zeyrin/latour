import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import { blurFor } from "@/lib/blur";
import { spa } from "@/lib/content";

export default function Spa() {
  return (
    <section className="relative flex min-h-[60svh] items-center overflow-hidden md:min-h-[70svh]">
      <Image
        src={spa.image}
        alt="Le Spa TerreHappy du Château Latour Ségur"
        fill
        loading="lazy"
        sizes="100vw"
        placeholder="blur"
        blurDataURL={blurFor(spa.image)}
        className="object-cover"
      />

      {/* Voile plus dense côté texte, transparent à l'opposé */}
      <div className="absolute inset-0 bg-black/45 md:bg-linear-to-r md:from-black/65 md:via-black/40 md:to-transparent" />

      <div className="on-dark container-latour relative py-16 sm:py-20">
        <Reveal className="max-w-xl text-white">
          <p className="eyebrow text-white/80">{spa.eyebrow}</p>
          <h2 className="title-section mt-3 text-white">{spa.title}</h2>
          <p className="mt-6 text-white/90">{spa.text}</p>

          <Link
            href={spa.cta.href}
            className="eyebrow tap mt-8 border border-white px-8 text-white transition-colors duration-300 hover:bg-white hover:text-brand md:py-4"
          >
            {spa.cta.label}
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
