import Image from "next/image";
import Link from "next/link";
import { spa } from "@/lib/content";

export default function Spa() {
  return (
    <section className="relative flex min-h-[70vh] items-center overflow-hidden">
      <Image
        src={spa.image}
        alt="Le Spa TerreHappy du Château Latour Ségur"
        fill
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-black/45" />

      <div className="container-latour relative py-20">
        <div className="max-w-xl text-white">
          <p className="eyebrow text-white/80">{spa.eyebrow}</p>
          <h2 className="mt-3 text-3xl text-white md:text-4xl">{spa.title}</h2>
          <p className="mt-6 text-white/90">{spa.text}</p>

          <Link
            href={spa.cta.href}
            className="eyebrow mt-8 inline-block border border-white px-8 py-4 text-white transition-colors hover:bg-white hover:text-brand"
          >
            {spa.cta.label}
          </Link>
        </div>
      </div>
    </section>
  );
}
