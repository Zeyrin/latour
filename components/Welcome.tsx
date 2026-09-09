import Reveal from "@/components/Reveal";
import { welcome } from "@/lib/content";

export default function Welcome() {
  return (
    <section className="container-latour py-16 text-center sm:py-20 md:py-28">
      <Reveal>
        <h2 className="title-section mx-auto max-w-3xl uppercase">{welcome.title}</h2>
        <p className="eyebrow mt-5 text-stone">{welcome.hosts}</p>

        <span className="mx-auto mt-8 block h-px w-16 bg-brand/40" />

        <div className="mx-auto mt-8 max-w-3xl space-y-5 text-stone">
          {welcome.paragraphs.map((paragraph) => (
            <p key={paragraph.slice(0, 40)}>{paragraph}</p>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
