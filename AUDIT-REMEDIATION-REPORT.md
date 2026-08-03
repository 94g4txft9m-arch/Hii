# AUDIT-REMEDIATION-REPORT

Dátum: 28. 7. 2026  
Projekt: GDPR Akadémia (`/home/tomas/Projects/gdpr-akademia`)

## Čo bolo implementované

### Critical
- **C1** Magenta CTA → `bg-magenta-600` / `hover:bg-magenta-700`; `DESIGN.md` §2.3–2.6 aktualizované
- **C2** Skutočný endpoint `POST /api/dopyt` (zod validácia, honeypot, fill-time, IP rate limit, Resend); UI success/error bez `alert`/`mailto`
- **C3** Canonical bez trailing slash; 308 redirect `/` → landing v `next.config`; odstránený `app/page.tsx`; sitemap bez `/`; robots/metadata index len v produkcii
- **C4** Vizuálny title je `<h1>` (desktop/mobile varianty); eyebrow je `<p>`
- **C5** Hero `quality={82}`, `sizes`, blur placeholder, `deviceSizes` orezané
- **C6** Skutočné stránky `/ochrana-osobnych-udajov` a `/cookies`; odstránené sr-only stuby
- **C7** Testimonials vypnuté; FAQ bez `DOPLNIŤ`; ceny `—`; skript `check:placeholders`
- **C8** CTA/NAV copy „Programy a ceny“; poznámka o individuálnych termínoch

### High
- **H1** `scroll-padding-top`, skip link, `id="obsah"`
- **H2** Mobile menu: Escape, focus trap, return focus, `inert` na main
- **H3–H7** Kontrasty textov/borderov, radiogroup toggle, hover `neutral-100`
- **H5** Heading hierarchy (Process h2, osoby h3/h4, FAQ h3)
- **H8** `app/opengraph-image.tsx`
- **H9–H10** FAQPage + Offers JSON-LD, `@id`, `sameAs`
- **H11** Reveal cez IntersectionObserver; odinštalovaný `framer-motion`
- **H12** IBM Plex Mono 600 ponechané (navy eyebrow)
- **H13** Security headers v `next.config`
- **H14** Branded `error.tsx` + `not-found.tsx`
- **H15** `@vercel/analytics`
- **H16** `?balicek=` na CTA; select v formulári; CTA strip po FAQ

### Medium / Low / Strategic
- Dead code (Eyebrow, PageWash, BrandBands, AccordionItem, `order` polia, RECOMMENDED_PACKAGE)
- E.164 telefóny + `formatPhoneDisplay` / `formatPhoneHref`
- FormField `id` required + DRY `errorId`
- Section `spacing` namiesto Bridge `!important`
- Includes na kartách; overflow len pri navy backdrop
- CI workflow + npm skripty; README typografia/env; JSON-LD escape `<`
- Footer `target=_blank` sr-only; module-level `Intl.NumberFormat`
- `CONTENT-STATUS.md`; `check:contrast` v CI

## Čo nebolo možné / zostáva na klientke

| Položka | Dôvod |
| --- | --- |
| Resend produkčné odosielanie | Chýba `RESEND_API_KEY` / overená From doména — API je ready, v produkcii bez kľúča vráti 503 |
| Konkrétne termíny behov | Klientka nedodala — zámerne neuverejnené |
| Referencie | Vypnuté do súhlasu so zverejnením |
| Číslo zápisu SAK | Nie je na webe — „na vyžiadanie“ |
| Firemný počet osôb / úspory PATH | Protirečenia v cenníku |
| Plná legal finalizácia | Stránky majú `[Klient: …]` poznámky |
| Konštantná výška headeru (M10) | Voliteľné — ponechaný existujúci scroll shrink |
| Adjacent same-surface padding (M7) | Čiastočne cez Bridge `spacing="tight"`; plný pass medzi všetkými sekciami neriešený |

## Overenie

| Check | Výsledok |
| --- | --- |
| `npm run check:placeholders` | OK |
| `npm run typecheck` | OK |
| `npm run lint` | OK |
| `npm run build` | OK (s `NEXT_PUBLIC_SITE_URL`) |
| Grep `window.alert` / mailto stub / `bg-magenta-500` na Button | žiadne |

## Manuálne pred deployom

1. Nastaviť `NEXT_PUBLIC_SITE_URL`, `RESEND_API_KEY`, `CONTACT_TO_EMAIL`, `CONTACT_FROM_EMAIL`
2. Overiť Resend doménu (nie `onboarding@resend.dev` v produkcii)
3. Skontrolovať legal texty s klientkou
4. Otestovať formulár end-to-end (úspech, validácia, rate limit)
5. Skontrolovať 308 `/` → landing a canonical v Search Console
6. Mobile menu: Escape, Tab trap, návrat focusu
7. Kontrast magenta CTA na bielej (vizuálne + axe)

## Zmenené / nové súbory (prehľad)

- `app/api/dopyt/route.ts`, `app/ochrana-osobnych-udajov/page.tsx`, `app/cookies/page.tsx`
- `app/opengraph-image.tsx`, `app/error.tsx`, `app/not-found.tsx`, `app/viewport.ts`
- `app/layout.tsx`, `app/robots.ts`, `app/sitemap.ts`, `next.config.ts` (odstránený `app/page.tsx`)
- `components/forms/ContactForm.tsx`, `components/sections/*`, `components/layout/*`, `components/ui/*`, `components/seo/JsonLd.tsx`, `components/LandingPage.tsx`
- `lib/schemas/contact.ts`, `lib/hooks/usePrefersReducedMotion.ts`, `lib/site.ts`, `lib/sections.ts`, `lib/packages.ts`, `lib/format.ts`, `lib/team.ts`
- `scripts/check-placeholders.mjs`, `.github/workflows/ci.yml`
- `README.md`, `DESIGN.md`, `CONTENT-STATUS.md`, `package.json`
- Odstránené: `Eyebrow.tsx`, `PageWash.tsx`, `BrandBands.tsx`, `framer-motion`
