import { mediaManifest, type MediaEntry } from "./media-manifest";

/**
 * Une photo du site. `position` permet d'ajuster le cadrage sans retoucher le
 * fichier : utile quand le sujet n'est pas au centre (valeur CSS object-position).
 */
export type MediaAsset = {
  src: string;
  alt: string;
  position?: string;
};

export const entryFor = (src: string): MediaEntry | undefined => mediaManifest[src];

/** Une photo est « livrée » dès qu'elle figure dans public/images. */
export const isDelivered = (src: string): boolean => src in mediaManifest;

/** Ratio intrinsèque du fichier, utile pour repérer un cadrage inattendu. */
export const ratioOf = (src: string): number | undefined => {
  const entry = entryFor(src);
  return entry ? entry.width / entry.height : undefined;
};
