// Génère lib/media-manifest.ts à partir de public/images.
//
// Pour chaque image matricielle : dimensions intrinsèques + miniature floutée
// (16px, base64) affichée pendant le chargement. Le manifeste sert aussi à
// savoir quelles photos sont déjà livrées : celles qui manquent laissent la
// place à un cadre « photo à venir » plutôt que de casser la mise en page.
//
// À relancer après chaque livraison d'images :
//   npm run media
import { readdirSync, writeFileSync } from "node:fs";
import path from "node:path";
import sharp from "sharp";

const DIR = "public/images";
const RASTER = new Set([".jpg", ".jpeg", ".png", ".webp", ".avif"]);
/** En dessous de cette largeur, l'image est une icône : pas de flou utile. */
const BLUR_MIN_WIDTH = 600;

const entries = {};

for (const file of readdirSync(DIR).sort()) {
  const ext = path.extname(file).toLowerCase();
  if (!RASTER.has(ext)) continue;

  const filePath = path.join(DIR, file);
  const image = sharp(filePath);
  const { width, height } = await image.metadata();
  if (!width || !height) continue;

  const entry = { width, height };

  if (width >= BLUR_MIN_WIDTH) {
    const buffer = await sharp(filePath)
      .resize(16, null, { fit: "inside" })
      .jpeg({ quality: 40 })
      .toBuffer();
    entry.blurDataURL = `data:image/jpeg;base64,${buffer.toString("base64")}`;
  }

  entries[`/images/${file}`] = entry;
}

const header = `// Généré par scripts/media.mjs — ne pas modifier à la main.
// Relancer \`npm run media\` après chaque ajout d'image dans public/images.

export type MediaEntry = {
  width: number;
  height: number;
  blurDataURL?: string;
};

export const mediaManifest: Record<string, MediaEntry> = `;

writeFileSync(
  "lib/media-manifest.ts",
  `${header}${JSON.stringify(entries, null, 2)};\n`,
);

const withBlur = Object.values(entries).filter((e) => e.blurDataURL).length;
console.log(
  `${Object.keys(entries).length} image(s) indexée(s), ${withBlur} avec miniature floutée.`,
);
