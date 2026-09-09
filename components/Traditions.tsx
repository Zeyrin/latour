import Image from "next/image";
import Link from "next/link";
import { traditions } from "@/lib/content";

export default function Traditions() {
  return (
    <section className="bg-sand py-20 md:py-28">
      <div className="container-latour grid items-center gap-12 md:grid-cols-[auto_1fr]">
        <Image
          src={traditions.icon}
          alt=""
          width={180}
          height={180}
          className="mx-auto h-36 w-auto md:h-44"
        />

        <div>
          <p className="eyebrow text-stone">{traditions.eyebrow}</p>
          <h2 className="mt-3 text-3xl md:text-4xl">{traditions.title}</h2>

          <div className="mt-6 space-y-4 text-stone">
            {traditions.paragraphs.map((p) => (
              <p key={p.slice(0, 40)}>{p}</p>
            ))}
          </div>

          <Link
            href={traditions.cta.href}
            className="eyebrow mt-8 inline-block border border-brand px-8 py-4 text-brand transition-colors hover:bg-brand hover:text-white"
          >
            {traditions.cta.label}
          </Link>
        </div>
      </div>
    </section>
  );
}
