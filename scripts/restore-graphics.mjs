#!/usr/bin/env node
// Obnoví záväznú (baseline) grafiku do public/graphics.
// Použitie: npm run restore:graphics
import { cpSync, mkdirSync, existsSync, readdirSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, "..");
const src = join(root, "assets", "graphics-baseline");
const dest = join(root, "public", "graphics");

if (!existsSync(src)) {
  console.error(`[restore:graphics] Baseline priečinok neexistuje: ${src}`);
  process.exit(1);
}

mkdirSync(dest, { recursive: true });
cpSync(src, dest, { recursive: true });

const files = readdirSync(dest);
console.log(
  `[restore:graphics] Obnovených ${files.length} súborov do public/graphics:`
);
for (const f of files) console.log(`  • ${f}`);
