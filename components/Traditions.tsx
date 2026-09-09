import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import { traditions } from "@/lib/content";

export default function Traditions() {
  return (
    <section className="bg-sand py-16 sm:py-20 md:py-28">
      <div className="container-latour grid items-center gap-10 md:grid-cols-[auto_1fr] md:gap-14">
        <Reveal className="flex justify-center">
          <Image
            src={traditions.icon}
            alt=""
            width={180}
            height={180}
            sizes="(min-width: 768px) 176px, 112px"
            className="h-28 w-auto md:h-44"
          />
        </Reveal>

        <Reveal delay={0.1} className="text-center md:text-left">
          <p className="eyebrow text-stone">{traditions.eyebrow}</p>
          <h2 className="title-section mt-3">{traditions.title}</h2>

          <div className="mt-6 space-y-4 text-stone">
            {traditions.paragraphs.map((paragraph) => (
              <p key={paragraph.slice(0, 40)}>{paragraph}</p>
            ))}
          </div>

          <Link
            href={traditions.cta.href}
            className="eyebrow tap mt-8 border border-brand px-8 text-brand transition-colors duration-300 hover:bg-brand hover:text-white md:py-4"
          >
            {traditions.cta.label}
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
