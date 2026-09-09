import { welcome } from "@/lib/content";

export default function Welcome() {
  return (
    <section className="container-latour py-20 text-center md:py-28">
      <h2 className="mx-auto max-w-3xl text-3xl uppercase md:text-4xl">{welcome.title}</h2>
      <p className="eyebrow mt-6 text-stone">{welcome.hosts}</p>

      <span className="mx-auto mt-8 block h-px w-16 bg-brand/40" />

      <div className="mx-auto mt-8 max-w-3xl space-y-5 text-stone">
        {welcome.paragraphs.map((p) => (
          <p key={p.slice(0, 40)}>{p}</p>
        ))}
      </div>
    </section>
  );
}
