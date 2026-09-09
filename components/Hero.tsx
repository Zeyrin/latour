import Image from "next/image";
import Link from "next/link";
import { hero } from "@/lib/content";

export default function Hero() {
  return (
    <section className="relative flex min-h-[92vh] items-center justify-center overflow-hidden">
      <Image
        src={hero.image}
        alt={hero.alt}
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-black/35" />

      <div className="container-latour relative text-center text-white">
        <h1 className="text-4xl text-white drop-shadow-sm md:text-6xl">{hero.title}</h1>
        <Link
          href={hero.cta.href}
          className="eyebrow mt-10 inline-block border border-white px-9 py-4 text-white transition-colors hover:bg-white hover:text-brand"
        >
          {hero.cta.label}
        </Link>
      </div>
    </section>
  );
}
