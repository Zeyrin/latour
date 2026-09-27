import Reveal from "@/components/Reveal";
import SplitText from "@/components/SplitText";
import GalleryGrid from "@/components/GalleryGrid";
import { gallery } from "@/lib/content";
import { entryFor, isDelivered } from "@/lib/media";

/**
 * Prépare les données côté serveur : seules les miniatures floutées des photos
 * de la galerie partent dans le bundle client, pas le manifeste entier.
 */
export default function Gallery() {
  // Tant que les photos de la galerie ne sont pas livrées, la section serait
  // un mur de cadres vides : elle ne s'affiche qu'une fois toutes présentes.
  if (!gallery.items.every((asset) => isDelivered(asset.src))) return null;

  const items = gallery.items.map((asset) => {
    const entry = entryFor(asset.src);
    return {
      src: asset.src,
      alt: asset.alt,
      width: entry?.width,
      height: entry?.height,
      blurDataURL: entry?.blurDataURL,
    };
  });

  return (
    <section className="section-y">
      <div className="container-latour">
        <Reveal className="text-center">
          <p className="eyebrow text-stone">{gallery.eyebrow}</p>
          <h2 className="title-section mt-4">
            <SplitText text={gallery.title} />
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-stone">{gallery.text}</p>
        </Reveal>

        <Reveal delay={0.1} className="mt-12">
          <GalleryGrid items={items} />
        </Reveal>
      </div>
    </section>
  );
}
