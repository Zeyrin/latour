import Reveal from "@/components/Reveal";
import GalleryGrid from "@/components/GalleryGrid";
import { gallery } from "@/lib/content";
import { entryFor } from "@/lib/media";

/**
 * Prépare les données côté serveur : seules les miniatures floutées des photos
 * de la galerie partent dans le bundle client, pas le manifeste entier.
 */
export default function Gallery() {
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
    <section className="bg-sand section-y">
      <div className="container-latour">
        <Reveal className="text-center">
          <p className="eyebrow text-stone">{gallery.eyebrow}</p>
          <h2 className="title-section mt-3">{gallery.title}</h2>
          <p className="mx-auto mt-5 max-w-2xl text-stone">{gallery.text}</p>
        </Reveal>

        <Reveal delay={0.1} className="mt-12">
          <GalleryGrid items={items} />
        </Reveal>
      </div>
    </section>
  );
}
