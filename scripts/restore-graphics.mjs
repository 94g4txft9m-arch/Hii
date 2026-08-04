/**
 * Obnoví schválenú finálnu grafiku z `assets/graphics-baseline/` do `public/`.
 * Použitie: `npm run restore:graphics`
 */
import { copyFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const baseline = join(root, "assets", "graphics-baseline");

const MAP = [
  ["hero-motuzova-lacko.png", "public/brand/hero-motuzova-lacko.png"],
  ["brand-stripes.png", "public/brand/brand-stripes.png"],
  ["logo.svg", "public/brand/logo.svg"],
  ["zuzana-motuzova.png", "public/team/zuzana-motuzova.png"],
  ["pavel-lacko.png", "public/team/pavel-lacko.png"],
  ["jozef-manuel-sencak.png", "public/team/jozef-manuel-sencak.png"],
  ["tomas-liptai.png", "public/team/tomas-liptai.png"],
  ["motuzova-lacko-cutout.png", "public/team/motuzova-lacko-cutout.png"],
  ["motuzova-lacko.jpg", "public/team/motuzova-lacko.jpg"],
];

for (const [src, dst] of MAP) {
  const target = join(root, dst);
  mkdirSync(dirname(target), { recursive: true });
  copyFileSync(join(baseline, src), target);
  console.log(`obnovené: ${dst}`);
}
