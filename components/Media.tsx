import Image from "next/image";
import { entryFor, type MediaAsset } from "@/lib/media";

type Props = {
  asset: MediaAsset;
  /** Largeur d'affichage prévue, pour que le navigateur choisisse la bonne source. */
  sizes: string;
  priority?: boolean;
  quality?: number;
  /** Zoom léger au survol, quand la photo est dans une carte cliquable. */
  zoomOnHover?: boolean;
  className?: string;
};

/**
 * Photo en remplissage : le parent porte la taille et le ratio, `Media` porte
 * le chargement. Tant qu'un fichier n'a pas été livré dans public/images, un
 * cadre neutre occupe exactement la même place — la mise en page se relit donc
 * sans attendre les visuels définitifs.
 */
export default function Media({
  asset,
  sizes,
  priority = false,
  quality,
  zoomOnHover = false,
  className = "",
}: Props) {
  const entry = entryFor(asset.src);

  if (!entry) {
    return (
      <div
        role="img"
        aria-label={`${asset.alt} — photo à venir`}
        className={`absolute inset-0 flex flex-col items-center justify-center gap-3 bg-sand text-mist ${className}`}
      >
        <svg viewBox="0 0 24 24" fill="none" className="h-8 w-8" aria-hidden>
          <rect
            x="3"
            y="5"
            width="18"
            height="14"
            rx="1"
            stroke="currentColor"
            strokeWidth="1"
          />
          <circle cx="8.5" cy="10" r="1.5" fill="currentColor" />
          <path
            d="m4 17 5-4.5 4 3.5 3-2.5 4 3.5"
            stroke="currentColor"
            strokeWidth="1"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <span className="eyebrow">Photo à venir</span>
      </div>
    );
  }

  return (
    <Image
      src={asset.src}
      alt={asset.alt}
      fill
      sizes={sizes}
      priority={priority}
      fetchPriority={priority ? "high" : undefined}
      loading={priority ? undefined : "lazy"}
      quality={quality}
      placeholder={entry.blurDataURL ? "blur" : "empty"}
      blurDataURL={entry.blurDataURL}
      style={asset.position ? { objectPosition: asset.position } : undefined}
      className={`object-cover ${
        zoomOnHover
          ? "transition-transform duration-700 ease-out group-hover:scale-[1.04]"
          : ""
      } ${className}`}
    />
  );
}
