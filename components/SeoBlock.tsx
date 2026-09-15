import Reveal from "@/components/Reveal";
import { seoBlock } from "@/lib/content";

/**
 * Bloc de texte de référencement. Il conserve sa valeur pour les moteurs, mais
 * il est délibérément traité en note de bas de page : centré et en pleine
 * taille au milieu de la page, il pesait autant qu'une vraie section alors
 * qu'il n'apporte rien de neuf à qui a déjà lu le reste.
 */
export default function SeoBlock() {
  return (
    <section className="border-t border-line">
      <Reveal className="container-latour py-12 md:py-16">
        <div className="max-w-3xl">
          <h2 className="text-base text-stone md:text-lg">{seoBlock.title}</h2>
          <p className="mt-4 text-sm leading-relaxed text-mist">{seoBlock.text}</p>
        </div>
      </Reveal>
    </section>
  );
}
