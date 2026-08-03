# PLAN.md — Fáza 4 (landing) a Fáza 5 (Canva)

> **Stav: plán pred implementáciou.** Kód sekcií sa nepíše, kým tento dokument
> neschválite. Zdroje: zadanie klienta (16 sekcií), `DESIGN.md`,
> `CANVA-REVIEW.md`, `BRAND-AUDIT.md`, `lib/packages.ts`, `lib/team.ts`,
> `lib/site.ts`.
>
> **Canva = referencia** (formulácie, kompozícia, umiestnenie loga).  
> **Ceny = výhradne** `Balicky FIRMY.docx` / `lib/packages.ts`.  
> **Nikdy** slovo „certifikát" / „certifikácia" → len „osvedčenie o absolvovaní"
> alebo „potvrdenie o absolvovaní" (`DESIGN.md` §10).

---

## A — Výsledná štruktúra sekcií

Záväzné poradie klienta (16 položiek). Canva má ~12 sekcií, iné poradie a starý
cenník — preto sa štruktúra **nezrkadlí** z Canvy, len sa z nej berú použiteľné
texty a signály dôvery.

| #   | Sekcia                           | Podklad                              | Poznámka                                                     |
| --- | -------------------------------- | ------------------------------------ | ------------------------------------------------------------ |
| 1   | Navigácia                        | Canva s. 1 + logo z webu             | Kotvy podľa výsledných sekcií, nie starých položiek Canvy    |
| 2   | Hero                             | Canva s. 1 (text) + DESIGN §7 (foto) | Bez dvojportrétu, bez hviezdičiek bez zdroja                 |
| 3   | Trust bar                        | Canva s. 2 (nadpis)                  | Bez prázdnych lôg; čísla len doložené                        |
| 4   | Problém (6–7 situácií)           | **nové** — v Canve chýba             | Signature os (malá/stredná)                                  |
| 5   | Prechod                          | **nové** — DESIGN §3.1               | Jedna kurzíva Newsreader                                     |
| 6   | Prečo advokátska kancelária (4×) | Canva s. 4 (obsah → 4 dlaždice)      | Navy pás; bez znevažujúceho porovnávania                     |
| 7   | Metodika                         | docx / packages + témy z praxe       | Signature os so značkami `16 h`, `6 h`, `90 min`             |
| 8   | Balíčky (3 karty + toggle)       | `lib/packages.ts`                    | Online / prezenčne; ceny nie z Canvy                         |
| 9   | Detailné porovnanie              | **nové** — z polí `PACKAGES`         | Rozbaliteľná tabuľka; bez JS aspoň čitateľné                 |
| 10  | Stat bar                         | Canva s. 2 (vybrané čísla)           | Oddelené od trust baru; bez „6 modulov" a „1 : 1"            |
| 11  | Lektori                          | `lib/team.ts` + portréty             | Bio `null` do doplnenia                                      |
| 12  | Ako to prebieha                  | Canva s. 7 (os) prepísaná podľa docx | Veľká vodorovná signature os; bez samoštúdia                 |
| 13  | Referencie                       | Canva s. 10 (šablóna)                | Bez obsahu = sekciu skryť / placeholder, nie falošné hviezdy |
| 14  | FAQ (min. 10)                    | Canva s. 11 (3 otázky) + nové        | Accordion, `body-lg`, max 68ch                               |
| 15  | Záverečné CTA + formulár         | Canva s. 12 (text) + zadanie (form)  | Navy pás; bez stock fotky; polia podľa zadania               |
| 16  | Pätička                          | `lib/site.ts` + BRAND-AUDIT          | IČO/SAK/adresa — overené vs. TODO                            |

### Čo z Canvy nejde na stránku

| Prvok                                                      | Dôvod                                                                          |
| ---------------------------------------------------------- | ------------------------------------------------------------------------------ |
| Celý starý cenník (s. 5)                                   | Klient potvrdil neaktuálnosť; ceny len z docx / `packages.ts`                  |
| „Šesť modulov", Špecialista DPO 980 €, 3-dňový kurz        | Neplatná ponuka                                                                |
| Basic / Standard / Premium mesačná podpora (s. 8)          | Nie je v docx; **kým klientka nerozhodne, sekcia sa nezaraďuje**               |
| Segmentácia „jednotlivec / firma / podpora" (s. 3)         | Os nesedí s balíčkami (nový DPO / skúsený / path); nahrádza ju Problém + karty |
| Prázdne rámy „Výber klientov a partnerov"                  | Mlčanlivosť + signalizuje nedokončenosť                                        |
| Hviezdičky ★★★★★ bez zdroja (hero, referencie)             | Zavádzajúce v reklame advokáta                                                 |
| Dvojportrét `motuzova-lacko.jpg` vo veľkom hero            | DESIGN §7 — korporátny register, orezaný Lacko; max OG / malý formát           |
| Stock fotografia ženy v CTA (s. 12)                        | Nie je z kancelárie                                                            |
| „Samoštúdium vlastným tempom", obnova osvedčenia raz ročne | Bez opory v docx / rozpor s čl. 38 ods. 2                                      |
| Navigácia: Ročné preškolenie, Support, KONZULTÁCIA ZADARMO | Periodická / anglicizmus / zľavový tón                                         |
| Magenta hero panely (~18 % plochy)                         | Rozpočet plochy DESIGN §2.8: magenta ≤ ~5 %                                    |
| Typografia Canvy (geometrický sans)                        | Záväzné: Newsreader / Archivo / IBM Plex Mono                                  |
| Porovnávacie frázy „nie školitelia / nie modelové / nie…"  | DESIGN §10 bod 3 — preformulovať pozitívne                                     |

### Čo v Canve chýba (a musí byť)

1. **Problém** — 6–7 situácií s citačnou osou (zadanie + DESIGN §4).
2. **Prechod** — jedna kurzíva medzi problémom a riešením.
3. **Detailné porovnanie** balíčkov (tabuľka z dát `PACKAGES`).
4. **Kontaktný formulár** v záverečnom CTA (meno, firma, e-mail, telefón, počet
   DPO, preferovaný formát, správa + info o spracúvaní).
5. **FAQ v rozsahu min. 10** s dlhými vecnými odpoveďami (nie 3 krátke karty).
6. **Metodika** napojená na reálne rozsahy 16 h / 6 h / 90 min, nie na 6 modulov.
7. **Štyri** (nie šesť) dlaždíc „Prečo advokátska kancelária".

### Formulácie z Canvy — prevziať (s drobnými úpravami)

| Formulácia                                                                         | Kam                  | Úprava                                                                                 |
| ---------------------------------------------------------------------------------- | -------------------- | -------------------------------------------------------------------------------------- |
| `Keď príde kontrola, váš DPO nesmie hádať.`                                        | Hero H1              | Ponechať                                                                               |
| `Školenie a preškolenie… Učia advokáti, ktorí klientov pri kontrole úradu reálne…` | Hero podnadpis       | „preškolenie" → aktualizačné školenie; bez implikovanej ročnej povinnosti              |
| `Bez záväzkov, bez predajného nátlaku`                                             | Hero + CTA           | Ponechať                                                                               |
| `Ochranu osobných údajov neriešime príležitostne. Riešime ju každý deň.`           | Trust bar nadpis     | Ponechať — najsilnejšia veta Canvy                                                     |
| `Klientov zastupujeme aj počas kontroly ÚOOÚ…`                                     | Trust bar / Prečo    | Ponechať                                                                               |
| Obsah 4 silných dlaždíc zo s. 4 (advokáti, prípady, vzory, legislatíva)            | Prečo (4 dlaždice)   | Pozitívne; šiesta „Povieme vám aj to, keď kurz nepotrebujete" → CTA dlaždica alebo FAQ |
| `Povieme vám aj to, keď kurz nepotrebujete`                                        | Prečo / CTA          | Ponechať — signál dôvery                                                               |
| `Nehovoríme, že to funguje. Hovoria to klienti.`                                   | Referencie (ak budú) | Ponechať; hviezdičky len so zdrojom                                                    |
| `Termín potvrdíme…` / konzultácia 15 min                                           | Hero microcopy       | Bez zelených fajok mimo palety; bez „zadarmo" v navigácii                              |
| Eyebrow o advokátoch pri kontrole                                                  | Hero                 | Namiesto hviezdičiek; vecnejšie „zastupujú klientov pri kontrolách ÚOOÚ"               |

### Mapovanie Canva → výsledok (čo kam)

```
Canva s.1  Hero+Nav     →  #1 Nav, #2 Hero (text áno, vizuál nie)
Canva s.2  Trust        →  #3 Trust + #10 Stat (rozdelené)
Canva s.3  Segmentácia  →  von (nahradené Problémom + kartami balíčkov)
Canva s.4  Prečo my     →  #6 Prečo (6 → 4 dlaždice, pozitívne)
Canva s.5–6 Cenník/moduly → von
Canva s.7  Priebeh      →  #12 Ako to prebieha (prepísané)
Canva s.8  Support      →  mimo scope, kým nerozhodne klientka
Canva s.9  Lektor       →  #11 Lektori (portréty z team.ts)
Canva s.10 Referencie   →  #13 (šablóna; obsah čaká)
Canva s.11 FAQ          →  #14 (rozšíriť na ≥10)
Canva s.12 CTA          →  #15 + formulár (stock foto von)
—                       →  #4 Problém, #5 Prechod, #7 Metodika, #9 Porovnanie (nové)
```

---

## B — Manifest sekcií (návrh typovania — nie kód)

Jediný súbor dát stránky (napr. budúci `lib/sections.ts` alebo
`lib/content/manifest.ts`) drží **poradie, nadpisy, copy a odkazy na assety**.
Ceny, lektori a firemné údaje sa **neprepisujú** — importujú sa z
`packages` / `team` / `site`.

### Navrhovaný tvar (TypeScript v dokumentácii)

```ts
type SectionId =
  | "nav"
  | "hero"
  | "trust"
  | "problem"
  | "bridge"
  | "why-law-firm"
  | "methodology"
  | "packages"
  | "comparison"
  | "stats"
  | "lecturers"
  | "process"
  | "testimonials"
  | "faq"
  | "contact-cta"
  | "footer";

type Surface = "neutral-0" | "neutral-50" | "navy";

type CitationMark = {
  citation: string; // IBM Plex Mono, napr. „čl. 33 GDPR"
  label?: string;
};

type SectionBase = {
  id: SectionId;
  order: number; // 1–16
  eyebrow?: string;
  title: string;
  subtitle?: string;
  surface: Surface;
  /** Kde sa objaví citačná os (DESIGN §4). */
  signatureAxis?: "none" | "marks" | "vertical" | "horizontal";
  anchor?: string; // #balicky, #kontakt, …
};

// Konkrétne varianty (union) majú polia podľa sekcie:
// problem.situations[], why.tiles[4], faq.items[≥10], …
// packages.data: typeof PACKAGES (import, nie duplikát)
// lecturers.data: typeof LECTURERS
// footer.firm: typeof LAW_FIRM + overené IČO z auditu po potvrdení
```

### Napojenie bez duplikácie

| Údaj                         | Zdroj                          | Manifest smie obsahovať                        |
| ---------------------------- | ------------------------------ | ---------------------------------------------- |
| Ceny, rozsahy, includes, CTA | `PACKAGES`, `CORPORATE_BUNDLE` | len `id` balíčka / ktoré karty zobraziť        |
| `priceFrom`, podmienky       | `packages.ts`                  | žiadne lokálne čísla                           |
| Mená, role, foto lektorov    | `LECTURERS`, `TEAM_PHOTO`      | len layout hint (poradie kariet)               |
| Bio / špecializácie          | `LECTURERS.*.bio`              | po doplnení klientkou — stále v `team.ts`      |
| Názov firmy, rok, e-maily    | `LAW_FIRM` / `site.ts`         | copy pätičky odkazuje na polia, nekopíruje hex |
| IČO, DIČ, adresa             | po sync z BRAND-AUDIT → site   | manifest neukladá fakturačné údaje             |
| Logo                         | `public/brand/logo.svg`        | cesta v nav/footer, nie redefinícia farieb     |

### Copy a fotky podľa sekcie (obsahový skeleton)

#### 1. Navigácia

- Logo: `public/brand/logo.svg` (vektor z webu — BRAND-AUDIT).
- Odkazy (návrh): Balíčky · Metodika · Lektori · Priebeh · FAQ · Kontakt.
- CTA vpravo: `Dohodnúť konzultáciu` → `#kontakt` (nie verzálky „ZADARMO").
- Sticky po scrolle, tieň len vtedy (`DESIGN.md` §5).

#### 2. Hero

- Eyebrow (bez hviezd): advokáti zastupujú pri kontrolách ÚOOÚ.
- H1: `Keď príde kontrola, váš DPO nesmie hádať.`
- Podnadpis: školenie DPO pre firmy; učia advokáti, ktorí pri kontrole zastupujú.
- CTA primárne (magenta plocha, biely text): konzultácia 15 min → `#kontakt`.
- CTA sekundárne: `Vybrať balíček` → `#balicky`.
- Microcopy: `Bez záväzkov, bez predajného nátlaku.`
- Vizuál: **nie** `TEAM_PHOTO` veľkoplošne; dominantná navy kompozícia,
  magenta ≤ 5 % plochy. Spoločná foto max do OG.
- `display-xl` len tu.

#### 3. Trust bar

- Nadpis z Canvy (ponechať).
- 2–3 doložené signály (rok 2011, prax — po potvrdení `15+`), plus krátka veta
  o zastupovaní pri kontrole.
- **Bez** pásu prázdnych lôg klientov.

#### 4. Problém

- Eyebrow + nadpis typu „Situácie, v ktorých DPO nesmie hádať".
- 6–7 situácií (návrh tém, finálne znenie pred kódom):
  1. Kontrola ÚOOÚ / výzva na podklady — `čl. 58 GDPR`
  2. Ohlásenie incidentu v lehote — `čl. 33 GDPR`
  3. Žiadosti dotknutých osôb — `čl. 12–22 GDPR`
  4. Posúdenie vplyvu (DPIA) — `čl. 35 GDPR`
  5. Vymenovanie a postavenie DPO — `čl. 37–39 GDPR`
  6. Prenosy / dodávatelia / sprostredkovatelia — `čl. 28 GDPR`
  7. (voliteľné) AI / nové spracúvania bez procesu
- Signature: vertikálna os + mono značky (`signatureAxis: "vertical"`).
- Sankcie max raz na stránke, s `čl. 83` — skôr v FAQ alebo jednej situácii,
  bez strašenia.

#### 5. Prechod

- Jedna veta, Newsreader italic (`DESIGN.md` §3.1).
- Návrh smeru: od pomenovania rizika k praxi kancelárie, ktorá dokumentáciu
  píše a pri kontrole zastupuje — bez sloganu a bez „istoty výsledku".

#### 6. Prečo advokátska kancelária

- Surface: `navy` (jeden z dvoch navy pásov; tu smie gold).
- Presne **4** dlaždice (výber a preformulovanie z Canvy s. 4):
  1. Kurz vedie advokát, ktorý v tej istej veci zastupuje pred úradom.
  2. Anonymizované spisy z praxe — incidenty, žiadosti, kontroly.
  3. Vzory dokumentácie použiteľné hneď po školení.
  4. Obsah aktualizovaný podľa rozhodnutí úradu, EDPB a súdov.
- Voliteľný riadok pod mriežkou: `Povieme vám aj to, keď kurz nepotrebujete.`
  → odkaz na `#kontakt`.

#### 7. Metodika

- Nie „6 modulov". Os podľa programov: vstupné 16 h → follow-up 6 h →
  konzultácia 90 min (z `dpo-professional-path` + spoločné prvky START/UPDATE).
- Signature os so značkami rozsahov.
- Právne tvrdenia s `LegalBasis` z packages, kde existuje (UPDATE).

#### 8. Balíčky

- Import `PACKAGES` (3 karty). `CORPORATE_BUNDLE` nie ako štvrtá karta
  (`onLandingPage: false`), len prípadne v porovnaní / FAQ po rozhodnutí.
- Toggle `online` | `onsite`; ceny `tabular-nums` (`price` token).
- Odporúčaný badge len z `recommended` / `badge` („Odporúčame").
- `priceFrom`: zobraziť len ak nie je `null` (dnes len PROFESSIONAL PATH).
  Pri START/UPDATE karty ukazujú ceny z `price`, nie vymyslené „od".
- Podmienka ceny vždy pri cene.

#### 9. Detailné porovnanie

- Riadky z polí packages: rozsah, časti, konzultácia, materiály, potvrdenie,
  follow-up zľava, CTA.
- Bez neoverených úspor PROFESSIONAL PATH a bez % zľavy firemného balíčka.
- Keyboard: `aria-expanded` na rozbalení.

#### 10. Stat bar

- Oddelené od trustu. Návrh metrík (len doložené / po potvrdení):
  - `2011` — rok založenia (`LAW_FIRM.foundedYear`)
  - `15+` — rokov praxe **až po písomnom potvrdení**
  - rozsahy programu v hodinách (z packages), nie „6 modulov"
- Surface môže byť `neutral-50`; čísla token `stat`.

#### 11. Lektori

- Mapovať `LECTURERS` — portréty `zuzana-motuzova.png`, `pavel-lacko.png`,
  orez na `neutral-100`.
- Bio / specializations / speaking: kým `null`, karta bez vymysleného textu
  (meno, role, e-mail; krátky placeholder „Profil sa dopĺňa" len ak treba).
- `TEAM_PHOTO` sem **nie** ako hlavný vizuál kariet.

#### 12. Ako to prebieha

- Horizontálna signature os, číslované kroky v čase, napr.:
  1. Dopyt / konzultácia (15 min)
  2. Výber balíčka a formy (online / prezenčne)
  3. Termín a organizačné potvrdenie
  4. Školenie v dohodnutom rozsahu
  5. Konzultácia v cene balíčka (ak platí)
  6. Potvrdenie / osvedčenie o absolvovaní
- Bez samoštúdia, bez „obnovy osvedčenia každý rok".

#### 13. Referencie

- Nadpis z Canvy ponechať.
- Do dodania citátov: **nezverejňovať** falošné hviezdy ani mená.
  Buď sekciu vynechať z renderu (`enabled: false`), alebo tri prázdne sloty
  bez dekoratívnych ★.
- Preferovať anonymizovaný formát, kým nie je súhlas.

#### 14. FAQ (≥ 10)

Návrh otázok (odpovede vecné, dlhé, s článkami kde treba):

1. Ktorý balíček je vhodný pre nového DPO a ktorý pre skúseného?
2. Čím sa líši DPO PROFESSIONAL PATH od samostatného START?
3. Online alebo prezenčne — čo je v cene rovnaké a čo sa líši?
4. Dostaneme potvrdenie / osvedčenie o absolvovaní?
5. Ako často má DPO aktualizovať znalosti? (čl. 38 ods. 2 — nie „povinnosť raz ročne")
6. Čo ak termín nevyhovuje?
7. Pre koľko osôb platí firemná cena START + UPDATE? _(odpoveď po doplnení)_
8. Zahŕňa školenie GDPR audit organizácie? (nie — disclaimer z packages)
9. Ako prebieha konzultácia po školení a v akej lehote?
10. Ako spracúvate údaje z tohto formulára?
11. (voliteľné) Mesačná právna podpora — ak klientka potvrdí produkt
12. (voliteľné) Termíny najbližších behov

#### 15. Záverečné CTA + formulár

- Surface: `navy` (druhý navy pás; gold na focus).
- Nadpis: **nie** „Váš DPO si zaslúži istotu" (prísľub výsledku) —
  napr. smer `Rezervujte konzultáciu` / vecný nadpis o výbere školenia.
- Microcopy: konzultácia 15 min, bez záväzkov, bez predajného nátlaku.
- Formulár (react-hook-form + zod): meno, firma, e-mail, telefón, počet DPO,
  preferovaný formát (online/prezenčne/neviem), správa.
- Error stav podľa DESIGN §2.7 (ikona, lišta, text, ARIA — bez červenej).
- Info o spracúvaní: prevádzkovateľ, účel, právny základ, doba, odkaz —
  vzorové, bez predvyplneného súhlasu.
- Bez stock fotky; prípadne malý portrét z `LECTURERS` alebo čistá typografia.

#### 16. Pätička

- Logo (svetlá plocha — inverzia na navy **chýba**, viď otázky).
- `LAW_FIRM`, kontakty, odkazy (GDPR info, cookies vzor).
- IČO / DIČ / IČ DPH / adresa: hodnoty z BRAND-AUDIT po sync do `site.ts`
  (dnes `companyId: null`; adresa v `site.ts` je Grösslingová 62, web uvádza
  Klemensova 4 — **rozpor, neuhádnuť**).
- Zápis SAK: chýba — `{{ DOPLNIŤ }}`.
- Copyright rok dynamicky / podľa webu.

---

## C — Poradie implementácie Fázy 4

Pravidlo: **najprv kostra a tokeny, potom sekcia po sekcii zdola nahor
konverzného lievika nie je nutné — radšej odblokované dátové sekcie skôr,
blokované neskôr s placeholderom.**

### C.0 Kostra (pred sekciami)

1. Potvrdiť / drobne zosúladiť DESIGN s BRAND-AUDIT (logo SVG, zrušenie
   odsadenia kvôli `#e55789` — až po schválení; tento plán DESIGN needituje).
2. Layout shell: `Header` + `<main>` + `Footer` placeholder, sekčné kotvy.
3. Design tokeny už z Fázy 3 — overiť `globals.css`, fonty, focus, reduced motion.
4. Spoločné UI: Button, Section, Eyebrow, CitationAxis, Accordion, Price,
   DeliveryToggle, FormField (error podľa §2.7).
5. Manifest súbor + napojenie importov `PACKAGES` / `LECTURERS` / `LAW_FIRM`.
6. Stránka skladá sekcie podľa `order` z manifestu.

### C.1 Sekcia po sekcii

| Krok | Sekcia          | Blokované?           | Signature os   | Poznámka implementácie                                                |
| ---- | --------------- | -------------------- | -------------- | --------------------------------------------------------------------- |
| 1    | Navigácia       | Logo OK              | —              | SVG z `public/brand/`; inverse chýba → logo na svetlom pásu           |
| 2    | Hero            | Čiastočne            | —              | Texty z Canvy; foto: **nie** dvojportrét; bez „od" kým null           |
| 3    | Trust bar       | Áno — čísla/logá     | —              | Bez prázdnych lôg; `15+` až po potvrdení                              |
| 4    | Problém         | Nie (copy návrh)     | vertikálna     | 6–7 situácií + značky článkov                                         |
| 5    | Prechod         | Nie                  | —              | Jedna italic veta                                                     |
| 6    | Prečo AK (4)    | Nie                  | —              | Navy pás; gold akcenty; magenta ≤ rozpočet                            |
| 7    | Metodika        | Nie                  | vertikálna + h | Značky z packages                                                     |
| 8    | Balíčky         | Čiastočne            | —              | Toggle; `priceFrom` null pri START/UPDATE — nezobrazovať falošné „od" |
| 9    | Porovnanie      | Čiastočne            | —              | Bez neoverených úspor; firemný počet osôb null                        |
| 10   | Stat bar        | Áno — metriky        | —              | Len `2011` isto; zvyšok po klientke                                   |
| 11   | Lektori         | Áno — bio            | —              | **Portréty sem**; nie do hero                                         |
| 12   | Ako to prebieha | Nie                  | horizontálna   | Kroky podľa skutočného procesu                                        |
| 13   | Referencie      | Áno                  | —              | `enabled: false` do dodania citátov                                   |
| 14   | FAQ             | Čiastočne            | —              | ≥10; niektoré odpovede čakajú na termíny / support                    |
| 15   | CTA + formulár  | Nie (UI)             | —              | Odoslanie: zatiaľ vzor (endpoint TODO)                                |
| 16   | Pätička         | Áno — IČO/SAK/adresa | —              | Sync z auditu až po potvrdení adresy                                  |

### C.2 Fotografie — záväzné rozhodnutie

| Asset                 | Použitie                                    | Nepoužiť                       |
| --------------------- | ------------------------------------------- | ------------------------------ |
| `zuzana-motuzova.png` | Sekcia Lektori                              | Hero veľkoplošne               |
| `pavel-lacko.png`     | Sekcia Lektori                              | Hero veľkoplošne               |
| `motuzova-lacko.jpg`  | OG image / voliteľne malý blok o kancelárii | Hero, CTA, Lektori ako náhrada |
| Stock z Canvy s. 12   | —                                           | Nikde                          |

### C.3 Definition of done Fázy 4

- Všetkých 16 slotov v manifesťe; referencie môžu byť vypnuté.
- Žiadne ceny mimo `packages.ts`.
- Žiadne „certifikát".
- Lighthouse ciele z DESIGN §9 (aspoň na stagingu).
- `npm run lint`, `npm run typecheck`, `npm run format:check` čisté.
- Toggle a porovnanie čitateľné aj bez JS (progressive enhancement).

---

## D — Fáza 5 — prepis do Canvy (až po Fáze 4)

**Závislosť:** hotová a odsúhlasená webová stránka = zdroj pravdy. Canva sa
nepoužíva na spätné určovanie cien ani poradia.

### Predpoklady

1. OAuth na Canva MCP v Cursore: **Settings → Tools & MCP → canva → Login**
   (viď `README.md`). Bez prihlásenia sa Fáza 5 nespúšťa.
2. Cieľový design: buď nový súbor, alebo aktualizácia `DAHNootchh8` — rozhodne
   klientka (otázka nižšie).
3. Export / import assetov: logo SVG, portréty, prípadne screenshoty webu ako
   referencia layoutu.

### Rozsah práce (návrh)

1. Zmapovať finálne sekcie webu 1:1 na strany / rámy v Canve (16 sekcií ≠ 27
   starých strán — zlúčiť prázdne a dekoratívne).
2. Nahradiť starý cenník a support karty aktuálnymi tromi balíčkami + toggle
   ako vizuálna poznámka (Canva nie je interaktívna — ukázať oba stavy alebo
   jeden preferovaný).
3. Pretiahnuť záväzné formulácie a odstrániť zakázané (hviezdy, stock, moduly).
4. Typografia v Canve nebude 1:1 (Newsreader nemusí byť v Canve) — dokumentovať
   odchýlku; brand farby podľa DESIGN / auditu.

### Otvorená otázka rozsahu programového layoutu

Canva MCP vie čítať a v obmedzenej miere upravovať designy; **nie je isté**,
či zvládne spoľahlivo poskladať celý landing programovo (auto-layout 16 sekcií,
presné odsadenia, responzívne varianty).

Možné úrovne:

| Úroveň | Čo znamená                                                      | Kedy zvoliť                       |
| ------ | --------------------------------------------------------------- | --------------------------------- |
| A      | Manuálny prepis podľa webu + MCP na čítanie/asset swap          | Predvolené, ak API limituje zápis |
| B      | MCP vytvorí stránky/sekcie zo šablóny, typografiu doladiť ručne | Ak OAuth a write API stačia       |
| C      | Plne programový layout 1:1 s webom                              | Len ak sa v spoileri MCP potvrdí  |

**Rozhodnutie úrovne A/B/C patrí pred začiatkom Fázy 5**, po skúške jedného
prototype frame cez MCP — nie pred dokončením Fázy 4.

---

## E — Otázky pre klientku

Jeden zoznam. Kým nie je odpoveď, v kóde ostáva `null` / `{{ DOPLNIŤ }}` /
sekcia vypnutá — **nič sa nedopĺňa odhadom**.

### Produkt a ceny

1. **Mesačná podpora Basic 90 / Standard 240 / Premium 490 €** (Canva s. 8) —
   patrí na túto landing page GDPR Akadémie, na samostatnú stránku, alebo sa už
   neponúka?
2. Ceny „od" pre **DPO START**: na stránke „od 2 247" podľa cenníka, alebo
   existuje reálna ponuka za 2 000 € — za akých podmienok?
3. Ceny „od" pre **DPO UPDATE**: „od 1 547" podľa cenníka, alebo 1 000 €
   (zľava / viac osôb) — podmienky?
4. **Firemný balíček** 4 997 / 5 997 € za firmu — **pre koľko osôb** platí?
   Má byť na landingu (karta / len FAQ / len porovnanie)?
5. Porovnávacie ceny a úspory pri **PROFESSIONAL PATH** (3 000 / 3 750 a úspora
   400 / 500) — potvrdiť, opraviť, alebo na stránku nedávať?

### Obsah a dôvera

6. **Bio lektorov** (2–3 vety), špecializácie a prednášková činnosť pre
   Zuzanu Motúzovú a Pavla Lacka.
7. **Referencie**: 2–3 citáty (aj anonymizované) + súhlas so zverejnením;
   ideálne s konkrétnym výsledkom. Bez toho sekciu nezverejníme.
8. Logá klientov / partnerov — súhlas na zverejnenie, alebo trust bar **bez**
   lôg?
9. Potvrdiť písomne údaj **`15+` rokov praxe** (2011 → 2026) pre trust/stat.
10. **Termíny** najbližších školení (ak majú byť na stránke) — alebo len
    „termín dohodneme individuálne"?

### Brand a právne údaje

11. **Zlatá `#eeba2b`**: na `akmotuzova.sk` nie je — ide o novú akcentovú farbu
    pre Akadémiu, alebo ju z návrhu stiahnuť / obmedziť len na focus na navy?
12. **Inverzná verzia loga** (biely / svetlý wordmark) na tmavý navy podklad —
    vediete ju? (Primárne SVG má tmavý text — na navy pás nepoužiteľné bez
    prefarbovania, ktoré nerobíme.)
13. **Zápis v SAK** (a právna forma / OR), ak majú byť v pätičke.
14. **Adresa sídla**: v podkladoch projektu je Grösslingová 62
    (`lib/site.ts`), na webe kancelárie Klemensova 4 — ktorá platí pre túto
    stránku?
15. IČO `51 827 450`, DIČ, IČ DPH z webu — môžeme ich doplniť do `lib/site.ts`
    a pätičky?
16. Finálna **produkčná doména** (`NEXT_PUBLIC_SITE_URL`).
17. Farebnosť sekundárneho PNG loga (`#e53172` + navy wordmark) — používať na
    Akadémii, alebo len primárne SVG?
18. Fáza 5: aktualizovať existujúci Canva design `DAHNootchh8`, alebo nový
    súbor? Aký rozsah (úroveň A/B/C vyššie)?

### Doplnkové (nižšia priorita)

19. Má byť na landingu odkaz na prípadovú štúdiu z Canvy s. 10, a existuje URL?
20. Jazykové verzie: len SK, alebo neskôr EN ako na hlavnom webe?

---

## F — Mimoriadne poznámky pre implementátora

- Pred každým PR: žiadne nové ceny v JSX; žiadne bio vymyslené z LinkedIn;
  žiadne mená klientov.
- Gold len na navy; magenta nie ako farba odkazu na svetlom.
- Po schválení tohto plánu nasleduje Fáza 4 podľa C.0 → C.1; Fáza 5 až potom.
- Tento súbor je jediný výstup tohto kroku — sekcie sa tu neimplementujú.
