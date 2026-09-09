import Reveal from "@/components/Reveal";
import { seoBlock } from "@/lib/content";

export default function SeoBlock() {
  return (
    <section className="container-latour section-y">
      <Reveal>
        <h2 className="mx-auto max-w-4xl text-center text-2xl md:text-3xl">
          {seoBlock.title}
        </h2>
        <p className="mx-auto mt-6 max-w-3xl text-center text-stone">{seoBlock.text}</p>
      </Reveal>
    </section>
  );
}
