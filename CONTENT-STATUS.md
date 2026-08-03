# CONTENT-STATUS.md

Zoznam obsahu, ktorý ešte vyžaduje potvrdenie / dodanie od klientky
pred finálnym marketingovým uzáverom. Kód je produkčne pripravený bez
vymyslených údajov.

Aktualizované: 28. 7. 2026 (po implementácii schváleného `PLAN-OPRAVY.md`).

## Blokuje silnejší marketing (nie launch)

1. **Číslo zápisu v SAK** — v pätičke je „na vyžiadanie“.
2. **Referencie / citáty** — sekcia je vypnutá (`TESTIMONIALS.enabled: false`),
   kým nie je súhlas so zverejnením.
3. **Termíny konkrétnych behov** — neuverejňujeme; dohodneme individuálne.
4. **Firemný balíček START + UPDATE** — počet osôb v cenníku chýba; karta nie
   je na landingu.
5. **Porovnávacie úspory PROFESSIONAL PATH** — v docx nesedia s cenníkom;
   nezobrazujeme.
6. **E-mail Tomáša Liptaia** — na webe o-nas nie je.
7. **sameAs / sociálne profily** — doplniť, ak majú byť v JSON-LD.
8. **Adresa kancelárie** — na webe je Klemensova 4; brief spomína Grösslingovú —
   potvrdiť finálne OK.
9. **Samostatný kontakt DPO** — interim text odkazuje na e-mail kancelárie;
   doplniť meno/kontakt DPO, ak je vymenovaná.

## Ops / env (blokuje doručovanie dopytov)

1. **Produkčná doména** — nastaviť `NEXT_PUBLIC_SITE_URL` podľa deployu.
2. **Resend / From doména** — `RESEND_API_KEY` + overená `CONTACT_FROM_EMAIL`
   (nie `onboarding@resend.dev` v ostrom). Pozri `.env.example` a README.
3. **Smoke test formulára** na staging/produkcii s Resend.

## Legal — čo je hotové v kóde (čaká na finálne schválenie klientkou)

- `/ochrana-osobnych-udajov` a `/cookies` majú produkčne použiteľný interim
  text **bez** `[Klient: …]` / `DOPLNIŤ`.
- Dokumentovaní sprostredkovatelia podľa technológie: Resend (e-mail), Vercel
  (hosting + Web Analytics).
- Politika cookies: **žiadne neesenciálne cookies**, **bez cookie banneru**;
  Vercel Analytics podľa dokumentácie Vercelu bez cookies.
- Finálne právne schválenie textov klientkou pred go-live stále odporúčané.

## Hotové bez čakania na klientku

- Ceny a balíčky z cenníka
- Kontaktný formulár + API (vyžaduje Resend v produkcii)
- Privacy / cookies stránky (interim, bez draft markerov)
- SEO: canonical bez trailing slash, robots podľa VERCEL_ENV
- CTA copy: programy a ceny (nie fiktívne termíny)
- Kontrast odkazu v ContactForm (`magenta-600`)
- `.env.example` + README deploy checklist
- Konštantná výška headeru; adjacent same-surface spacing (M7)
- Odstránené mŕtve `.brand-bands` CSS/asset; OG image s brand fontami
- **Grafická baseline uzamknutá** (28. 7. 2026): hero + brand pásy v
  `assets/graphics-baseline/` — pozri `BASELINE.md`; obnova
  `npm run restore:graphics`
