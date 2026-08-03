# PLAN-OPRAVY.md

Plán opatrení a opráv po remediácii (28. 7. 2026).  
**Stav:** schválené klientom/ops — implementácia kódu bez čakania na secrets / finálne legal odpovede **hotová** (28. 7. 2026).

Zdroje: `AUDIT-AFTER.md`, `AUDIT-REMEDIATION-REPORT.md`, `CONTENT-STATUS.md`, rýchla kontrola kódu (formulár, Button, Hero H1, testimonials, privacy/cookies, placeholders).

---

## Implementované po schválení (28. 7. 2026)

| ID | Stav | Poznámka |
| --- | --- | --- |
| **A1** | ✅ kód | Interim legal copy; odstránené `[Klient: …]`; sprostredkovatelia Resend + Vercel; DPO „na vyžiadanie“ |
| **A2** | ✅ kód | Cookies zosúladené s `@vercel/analytics` |
| **A3** | ✅ dokumentácia | Bez banneru — žiadne neesenciálne cookies; Vercel Analytics cookieless |
| **A4** | ✅ | ContactForm odkaz `text-magenta-600` |
| **A5** | ✅ | `.env.example` + README deploy checklist |
| **B1–B3** | ⏸ klient | SAK, adresa, sameAs — bez vymyslených údajov |
| **B4** | ⏸ ops | E2E formulár vyžaduje Resend na staging |
| **B5** | ⏸ klient | Plausible len ak schválené |
| **C1** | ✅ | Problem `tight`; Faq `tight` ak testimonials on; Bridge už bol |
| **C2** | ✅ | Konštantná výška headeru `h-20` |
| **C3–C7** | ⏸ klient | Referencie, termíny, balíčky, úspory, bio |
| **C8** | ✅ | Odstránené `.brand-bands` CSS + `public/brand/brand-bands.png` |
| **C9** | ✅ | OG image načítava Newsreader / Archivo / IBM Plex Mono |

**Stále blokuje go-live (mimo kódu):** Resend + SITE_URL (§2), finálne schválenie legal textov klientkou, smoke test formulára.

---

## 1. Stav po remediácii

Critical položky z pôvodného auditu (**C1–C8**) sú v kóde hotové: CTA `magenta-600`, skutočný `POST /api/dopyt`, SEO/canonical/308, skutočné H1 v hero, privacy/cookies stránky, žiadne UI `DOPLNIŤ` / falošné termíny / falošné referencie, CI + placeholder gate. Orientačné skóre ~**8.5/10** — launch-ready **s podmienkami**.

Čo ešte brzdí produkciu, nie je „rozbitý kód“, ale **ops (Resend, doména)** a **finálne schválenie legal** od klientky (interim texty sú už bez draft markerov). Voliteľný marketingový obsah ostáva vypnutý.

**Overené teraz (28. 7. 2026):**
| Oblasť | Stav |
| --- | --- |
| `/api/dopyt` | Ready; bez `RESEND_API_KEY` v produkcii → **503** |
| Button magenta | `bg-magenta-600` / hover `700` |
| Hero H1 | Dva `<h1>` (desktop/mobile) |
| Testimonials | `TESTIMONIALS.enabled: false` |
| Privacy / cookies | Interim produkčný text; bez `[Klient: …]` |
| UI placeholders | Žiadne v UI; TODO/`DOPLNIŤ` len v komentároch / dátových null poliach |

---

## 2. Blokátory pred produkciou (ops / klient)

Checklist — **nie je to implementačná vlna**, ale podmienky go-live:

- [ ] **`NEXT_PUBLIC_SITE_URL`** = finálna produkčná doména (canonical, OG, sitemap)
- [ ] **`RESEND_API_KEY`** nastavený vo Vercel (alebo inom hostingu)
- [ ] **Overená From doména** v Resend + **`CONTACT_FROM_EMAIL`** (nie `onboarding@resend.dev`)
- [ ] **`CONTACT_TO_EMAIL`** (kam majú chodiť dopyty; default je e-mail Motúzovej)
- [ ] **Schválenie textov** `/ochrana-osobnych-udajov` a `/cookies` (interim je v kóde; finálne OK od klientky)
- [x] **Rozhodnutie o analytike (interim v kóde):** Vercel Analytics bez banneru / bez neesenciálnych cookies — zmeniť len ak klientka vyžaduje súhlas / Plausible
- [ ] **Smoke test formulára** na produkcii/staging s Resend (úspech + chybové stavy)

Bez Resend je stránka SEO-ready a čitateľná; **lead-gen formulár v produkcii nebude doručovať e-maily**.

---

## 3. Opravy na implementáciu (vlny)

### Vlna A — musí pred nasadením (kód + obsah)

| ID | Čo | Prečo | Súbory | Odhad | Klientka | Stav |
| --- | --- | --- | ---: | ---: | --- | --- |
| **A1** | Dokončiť legal copy: DPO/kontakt, sprostredkovatelia, odstrániť `[Klient: …]` | Bez draft poznámok na produkcii | privacy/cookies pages | 1–2 h | Áno (finálne OK) | ✅ interim |
| **A2** | Zosúladiť cookies s `@vercel/analytics` | Text musí sedieť s layoutom | cookies page, layout | 30–60 min | Áno (politika) | ✅ |
| **A3** | Banner **alebo** dokumentovať bez banneru | High z auditu | cookies page | 30 min (dokumentácia) | Áno | ✅ bez banneru |
| **A4** | ContactForm `magenta-500` → `600` | Kontrast / DESIGN.md | ContactForm | 10 min | Nie | ✅ |
| **A5** | Env dokumentácia | Ops checklist | README, `.env.example` | 15 min | Nie | ✅ |

> **Poznámka:** Nastavenie Resend/SITE_URL je v §2 (ops). Do Vlny A patrí len to, čo sa ešte mení v kóde/obsahu pred go-live.

---

### Vlna B — vysoká priorita hneď po / paralelne

| ID | Čo | Prečo | Súbory | Odhad | Klientka | Stav |
| --- | --- | --- | ---: | ---: | --- | --- |
| **B1** | Číslo zápisu SAK | Trust | `lib/site.ts`, Footer | 30 min | **Áno** | ⏸ |
| **B2** | Potvrdiť adresu | TODO v site.ts | `lib/site.ts`, legal | 20 min | **Áno** | ⏸ |
| **B3** | `sameAs` sociálne | JSON-LD | `lib/site.ts`, JsonLd | 20–40 min | **Áno** | ⏸ |
| **B4** | E2E formulár na staging | Business-critical | API + ContactForm | 1–2 h | Nie (ops) | ⏸ |
| **B5** | Plausible (voliteľné) | Len ak chce klientka | layout, env, cookies | 1–2 h | **Áno** | ⏸ |

---

### Vlna C — stredná / dlh / kozmetika

| ID | Čo | Prečo | Súbory | Odhad | Klientka | Stav |
| --- | --- | --- | ---: | ---: | --- | --- |
| **C1** | Adjacent same-surface spacing (M7) | Rytmus sekcií | LandingPage, Section, Problem, Faq, Bridge | 2–4 h | Nie | ✅ |
| **C2** | Konštantná výška headeru | UX | Header | 1–2 h | Nie | ✅ |
| **C3** | Zapnúť testimonials | Marketing | sections | 1–2 h | **Áno** | ⏸ |
| **C4** | CourseInstance / termíny | Bez falošných dátumov | packages, JsonLd | 2–3 h | **Áno** | ⏸ |
| **C5** | Firemný balíček počet osôb | Cenník | packages, Packages | 1–3 h | **Áno** | ⏸ |
| **C6** | Úspory PROFESSIONAL PATH | Protirečenia | packages | 1–2 h | **Áno** | ⏸ |
| **C7** | Bio / e-mail Liptai | CONTENT-STATUS | team, Lecturers | 1–2 h | **Áno** | ⏸ |
| **C8** | Mŕtve `.brand-bands` | Low | globals.css, public | 30 min | Nie | ✅ |
| **C9** | OG brand webfonty | Low | opengraph-image | 1–2 h | Nie | ✅ |

---

## 4. Navrhované poradie implementácie

1. ~~**Schválenie tohto plánu**~~ + rozhodnutia z §6 (banner? termíny? referencie?).
2. ~~**A4**~~ — kontrast odkazu v ContactForm.
3. **Ops §2** — nastaviť env na staging (SITE_URL + Resend + From). ← **ďalší krok**
4. ~~**A1 + A2 + A3**~~ — interim legal + cookies bez banneru (finálne OK od klientky ešte otvorené).
5. **B4** — E2E formulár na staging; potom produkčný deploy.
6. **B1–B3** — SAK, adresa, sameAs (keď prídu údaje).
7. **B5** — Plausible len ak schválené.
8. ~~**C1–C2**~~ — spacing / header.
9. **C3–C7** — marketingový obsah až po dodávkach od klientky.
10. ~~**C8–C9**~~ — kozmetika.

---

## 5. Čo NEimplementovať bez rozhodnutia

| Téma | Prečo čakať |
| --- | --- |
| **Konkrétne termíny behov / CourseInstance** | Bez dátumov od klientky by sme opäť klamali v UI/JSON-LD |
| **Referencie / citáty** (`TESTIMONIALS.enabled`) | Potrebný súhlas so zverejnením; falošné citáty zakázané |
| **Firemný balíček — počet osôb + karta** | Cenník neuvádza počet; neuhádzať |
| **Úspory / % zľava PROFESSIONAL PATH** | Čísla v zdrojoch si protirečia |
| **Cookie banner** | Len ak klientka vyžaduje súhlas pred analytikou — interim: bez banneru |
| **Zmena adresy** bez potvrdenia | Brief vs. web kancelárie |
| **Vymyslené SAK číslo / bio lektorov** | Len overené údaje |
| **Produkčný `onboarding@resend.dev` From** | Resend onboarding adresa nie je pre ostrú prevádzku |

---

## 6. Manuálne kontroly pred go-live

1. Env: `NEXT_PUBLIC_SITE_URL`, `RESEND_API_KEY`, `CONTACT_TO_EMAIL`, `CONTACT_FROM_EMAIL` (overená doména).
2. Formulár: úspešné odoslanie → e-mail dorazí; validácia; rate limit; správa pri výpadku.
3. Legal: žiadne `[Klient: …]` / draft poznámky na produkcii; linky Footer → privacy/cookies.
4. SEO: 308 `/` → landing; canonical bez trailing slash; robots index len na produkcii; Search Console.
5. A11y: skip link, mobile menu (Escape, focus trap, návrat focusu), kontrast magenta CTA (axe + vizuálne).
6. `npm run check:placeholders && npm run typecheck && npm run lint && npm run build`.
7. Hero: jeden zmysluplný H1, obrázky s quality/sizes, reduced motion.
8. Testimonials sekcia **nie je** na stránke, kým nie je `enabled: true` + reálne citáty.
9. Cookies/analytics podľa schválenej politiky (banner alebo explicitne bez).

---

## 7. Top 5 ďalších krokov (po schválení plánu)

1. Nastaviť **Resend + SITE_URL** na staging/produkcii (§2).  
2. Získať od klientky **finálne legal OK** (DPO kontakt, prípadne zmena cookie politiky).  
3. ~~Implementovať **A1–A4**~~ — hotové (interim).  
4. **E2E otestovať formulár** s Resend.  
5. Deploy + manuálny go-live checklist (§6).

---

*Implementácia kódu podľa tohto plánu: 28. 7. 2026.*
