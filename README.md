# GDPR Akadémia

Landing page (V3) pre školiace programy DPO advokátskej kancelárie
**Motúzová & Lacko** — `/skolenie-gdpr-zodpovedna-osoba`.

## Stack

- Next.js 15 (App Router) + TypeScript
- Tailwind CSS v4
- Framer Motion
- react-hook-form + zod
- lucide-react
- Typografia: Newsreader + Archivo + IBM Plex Mono

## Spustenie (vývoj)

```bash
npm install
npm run dev
```

Otvorte http://localhost:3000 — `/` presmeruje na
`/skolenie-gdpr-zodpovedna-osoba`.

## Skripty

| Príkaz                     | Popis                                                             |
| -------------------------- | ----------------------------------------------------------------- |
| `npm run dev`              | vývojový server (Turbopack)                                       |
| `npm run build`            | produkčný build                                                   |
| `npm run start`            | produkčný server                                                  |
| `npm run lint`             | ESLint                                                            |
| `npm run typecheck`        | kontrola typov                                                    |
| `npm run restore:graphics` | obnoví schválenú grafiku z `assets/graphics-baseline/` do `public/` |
| `npm run format`           | Prettier — zápis                                                  |
| `npm run format:check`     | Prettier — kontrola                                               |

## Nasadenie

GitHub Actions (`.github/workflows/deploy.yml`) pri každom pushi na `main`
zbuilduje statický export (`STATIC_EXPORT=1`, `basePath` podľa repozitára)
a nasadí ho na GitHub Pages (vetva `gh-pages`).

Kontaktný formulár v tejto verzii pripraví dopyt ako e-mail (mailto) —
serverové odosielanie cez Resend je plánované až pri nasadení na Vercel
(pozri `PLAN-OPRAVY.md` §2).

## Premenné prostredia

| Premenná               | Popis                                            |
| ---------------------- | ------------------------------------------------ |
| `NEXT_PUBLIC_SITE_URL` | produkčná URL bez trailing slash (canonical, OG) |
| `STATIC_EXPORT`        | `1` = statický export pre GitHub Pages           |
| `NEXT_PUBLIC_BASE_PATH`| basePath pri exporte (napr. `/Hii`)              |

## Štruktúra

```
app/          App Router, fonty, metadata, robots.ts, sitemap.ts
components/   UI a sekcie landing page
lib/          sections, packages, team, site, format
public/brand/ logo a hero kompozit (servované kópie)
public/team/  portréty
assets/graphics-baseline/  schválená finálna grafika — neprepisovať bez súhlasu
scripts/      restore grafiky
DESIGN.md     design systém
PLAN.md       štruktúra 16 sekcií
CONTENT-STATUS.md  čo ešte treba od klientky
```

Schválený hero a grafika: pozri `assets/graphics-baseline/BASELINE.md`.
Obnova: `npm run restore:graphics`.

## Poznámka k obsahu

Ceny a rozsahy balíčkov pochádzajú výhradne z `lib/packages.ts`.
Chýbajúce údaje čakajúce na klientku sú zdokumentované v `CONTENT-STATUS.md`
a v komentároch kódu — do UI sa nevkladajú falošné termíny, referencie ani
číslo zápisu SAK.
