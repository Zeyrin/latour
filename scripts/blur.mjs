// Regénère lib/blur.ts : miniatures 16px encodées en base64, affichées
// pendant le chargement des grandes photos. À relancer après tout ajout
// ou remplacement d'image dans public/images.
//   node scripts/blur.mjs
import { readFileSync, writeFileSync } from "node:fs";
import path from "node:path";
import sharp from "sharp";

const files = [
  "slide-home-le-chateau-latour-segur.jpg",
  "visuel-Spa-terre-happy.jpg",
  "Visuel-Suite-Feu.jpg",
  "Visuel-Suite-Eau.jpg",
  "Visuel-Suite-Cottage-bois.jpg",
];

const out = {};
for (const file of files) {
  const buffer = await sharp(path.join("public/images", file))
    .resize(16)
    .jpeg({ quality: 40 })
    .toBuffer();
  out[`/images/${file}`] = `data:image/jpeg;base64,${buffer.toString("base64")}`;
}

writeFileSync(
  "lib/blur.ts",
  `// Généré par scripts/blur.mjs — miniatures 16px servies pendant le chargement des photos.\n` +
    `export const blurData: Record<string, string> = ${JSON.stringify(out, null, 2)};\n\n` +
    `export const blurFor = (src: string) => blurData[src];\n`,
);

console.log(`${Object.keys(out).length} placeholders générés.`);
