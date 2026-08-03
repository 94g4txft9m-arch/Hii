# DESIGN.md — GDPR Akadémia

> **Stav: návrh Fázy 3 na odsúhlasenie.** Kód sa nepíše, kým tento dokument
> neschválite. Kontrastné pomery sú overené skriptom `scripts/contrast.mjs`,
> nie odhadnuté.

---

## 1. Kontext

Landing page pre školiace programy DPO advokátskej kancelárie Motúzová & Lacko.
Jediná úloha stránky: získať kvalifikovaný dopyt na firemné školenie DPO.

Publikum: konatelia, compliance a HR riaditelia, IT riaditelia stredných
a veľkých firiem na Slovensku, ktorí schvaľujú rozpočet 2 000–6 000 €
a musia si to obhájiť pred vedením.

Kľúčový diferenciátor, ktorý má stránka nesť vizuálne, nie len textom: školí
kancelária, ktorá GDPR praktizuje — píše dokumentáciu, zastupuje pri kontrolách,
rieši incidenty.

---

## 2. Farby

### 2.1 Záväzný firemný štandard

| Rola             | Hex       | Kontrast na bielej | Kontrast na navy |
| ---------------- | --------- | ------------------ | ---------------- |
| Primárna / navy  | `#242a64` | 13,21 : 1          | —                |
| Akcent / magenta | `#ef4a85` | 3,51 : 1           | 3,77 : 1         |
| Akcent / gold    | `#eeba2b` | 1,80 : 1           | 7,35 : 1         |

**Poznámka k navy (brand audit).** Živý web kancelárie používa `#232a65`
(ΔE 0,30 od `#242a64` — nepostrehnuteľné). Záväzná hodnota projektu zostáva
`#242a64`, kým nebude explicitné rozhodnutie ju zmeniť. Podrobnosti
v `BRAND-AUDIT.md` §7.2.

**Poznámka k gold (brand audit).** `#eeba2b` sa na webe kancelárie
nevyskytuje — pochádza zo zadania / Canvy. Do vyjasnenia u klientky ostáva
v systéme ako funkčná farba (focus ring a akcent na navy); nestavať na nej
veľké plochy. Otázka: nová farba nad rámec webu, alebo omyl v podkladoch?

### 2.2 Dva závery z kontrastov, ktoré určujú celý systém

**Magenta neunesie text.** Na bielej má 3,51 : 1, čo na text nestačí (WCAG AA
žiada 4,5 : 1). Vyhovuje len na veľké nadpisy nad 24 px a na netextové UI prvky.
Magenta preto nikdy nebude farbou odkazu, popisku ani textu v tlačidle na
svetlom podklade. Bude **plochou tlačidla s bielym textom** a **grafickým
akcentom**.

**Gold na bielej nefunguje vôbec.** 1,80 : 1 nesplní ani požiadavku na
netextové prvky. Gold je použiteľný **výhradne na navy**, kde má 7,35 : 1.
To z neho robí presne definovaný nástroj: akcent v tmavých pásoch a focus ring
na navy podklade.

Toto nie je obmedzenie proti zadaniu, ale jeho potvrdenie. Zadanie hovorí, že
magenta a gold sú akcenty, nie plochy. Kontrasty to hovoria tiež.

### 2.3 Odvodené odtiene akcentov

Potrebné tam, kde akcent musí uniesť text na svetlom podklade. Sú to tmavšie
varianty tej istej farby, nie nové farby v palete.

| Token         | Hex       | Kontrast na bielej | Použitie                        |
| ------------- | --------- | ------------------ | ------------------------------- |
| `magenta-500` | `#ef4a85` | 3,51 : 1           | plochy, veľké nadpisy, grafika  |
| `magenta-600` | `#c9265f` | 5,35 : 1           | CTA plochy, text a odkazy       |
| `magenta-700` | `#ab1a4e` | 7,02 : 1           | hover/active CTA, active stav   |
| `gold-500`    | `#eeba2b` | 1,80 : 1           | len na navy                     |
| `gold-700`    | `#8a6300` | 5,43 : 1           | mono text na svetlom, výnimočne |

### 2.4 Navy škála

| Token      | Hex       | Použitie                            |
| ---------- | --------- | ----------------------------------- |
| `navy-500` | `#4a5399` | jemné akcenty, ilustračné linky     |
| `navy-600` | `#333b7e` | hover primárneho tlačidla           |
| `navy-700` | `#242a64` | **základ** — plochy, nadpisy, text  |
| `navy-800` | `#1b2050` | active stav, tmavé pásy             |
| `navy-900` | `#12163a` | 17,48 : 1 — najhustší text, pätička |

### 2.5 Neutrálna škála

Chladný podtón, aby ladila s navy. Sivá bez podtónu by pri `#242a64` vyzerala
špinavo.

| Token         | Hex       | Použitie                                       |
| ------------- | --------- | ---------------------------------------------- |
| `neutral-0`   | `#ffffff` | základná plocha                                |
| `neutral-50`  | `#f7f7fa` | striedanie sekcií                              |
| `neutral-100` | `#eeeff4` | karty, výplň polí, disabled plocha             |
| `neutral-200` | `#dcdee7` | linky a orámovania — 1,34 : 1, len dekoratívne |
| `neutral-300` | `#bfc3d2` | disabled text na navy, dekoratívne linky       |
| `neutral-400` | `#8e94a8` | 3,02 : 1 — ikony a orámovania, **nie text**    |
| `neutral-500` | `#656b80` | 5,29 : 1 — sekundárny text, orámovanie polí    |
| `neutral-600` | `#474c5e` | 8,53 : 1 — body text, ak nemá byť navy         |

Šesť použiteľných odtieňov plus biela, teda nad požadované minimum piatich.

### 2.6 Stavy

| Stav                  | Riešenie                                                            |
| --------------------- | ------------------------------------------------------------------- |
| hover — primárne      | `navy-700` → `navy-600`                                             |
| hover — magenta       | `magenta-600` → `magenta-700`                                       |
| active                | o jeden stupeň tmavšie, bez posunu pozície                          |
| focus na svetlom      | `outline: 2px solid navy-700`, `outline-offset: 2px` — 13,21 : 1    |
| focus na navy         | `outline: 2px solid gold-500`, `outline-offset: 2px` — 7,35 : 1     |
| disabled              | plocha `neutral-100`, text `neutral-500`, `cursor: not-allowed`     |
| pole v pokoji         | plocha `neutral-0`, orámovanie `1px neutral-500` — 5,29 : 1         |
| pole v chybe, svetlé  | `2px navy-800` + `4px` ľavá lišta `navy-800`, ikona, správa, ARIA   |
| pole v chybe, na navy | `2px neutral-0` + `4px` ľavá lišta `neutral-0`, ikona, správa, ARIA |

**Poznámka k disabled.** Kombinácia `neutral-400` na `neutral-100` má 2,63 : 1.
Pre disabled to WCAG pripúšťa, ale čitateľnosť je slabá, preto je v tabuľke
`neutral-500`. Disabled stav nikdy nebude jediným nositeľom informácie — vždy
ho doplní text, prečo je prvok neaktívny.

**Poznámka k orámovaniu polí.** Pôvodne tu bolo `neutral-300`. Na bielej má
1,76 : 1, čo nesplní 3 : 1 požadované pre netextové prvky používateľského
rozhrania (WCAG 1.4.11) — pole by nebolo spoľahlivo rozoznateľné ako pole.
Orámovanie preto ide na `neutral-500`: 5,29 : 1 na bielej a 4,95 : 1 na
`neutral-50`, teda vyhovuje na oboch striedajúcich sa podkladoch.
`neutral-300` zostáva na disabled text na navy a na dekoratívne linky.

### 2.7 Error stav bez červenej

Zadanie klientky zakazuje farby mimo palety. Funkčná červená `#b42318`, ktorú
mal predchádzajúci návrh, je preto zrušená — nahrádza ju stav postavený na
palete a na prostriedkoch, ktoré nie sú farba.

**To nie je ústupok, ale lepšie riešenie.** WCAG 1.4.1 zakazuje niesť
informáciu iba farbou. Samotná červená obruba je pre používateľa s poruchou
farbocitu, v ostrom slnku na mobile alebo v čiernobielej tlači nečitateľná.
Ikona, hrubé orámovanie a vetná správa fungujú vo všetkých týchto situáciách.
Preto platí záväzne: **chyba sa nikdy nesignalizuje iba farbou.** Vždy sú
prítomné všetky štyri nosiče naraz.

#### Štyri nosiče chyby

1. **Ikona** `CircleAlert` z `lucide-react` (v tejto verzii dostupná aj pod
   aliasom `AlertCircle`), 16 px. Je dvakrát: vpravo v poli a pred textom
   správy. Obe majú `aria-hidden="true"`, význam nesie text.
2. **Orámovanie a ľavá lišta.** Orámovanie zhrubne z 1 px na 2 px a ľavý okraj
   na 4 px. Lišta je zámerne **nesymetrická** — o dôvod nižšie.
3. **Správa textom.** Konkrétna veta, čo je zle a čo s tým, nie „Neplatná
   hodnota". Stojí pod poľom, `body-sm`.
4. **ARIA.** Pole má `aria-invalid="true"` a `aria-describedby` s `id` správy.
   Odčítač tak prečíta chybu spolu s názvom poľa. Živé oznámenie po odoslaní
   rieši **jediný** súhrn nad formulárom s `role="alert"`; jednotlivé správy
   `role="alert"` nemajú, inak by sa chyba oznámila dvakrát.

#### Namerané kontrasty

Overené `node scripts/contrast.mjs`, nie odhadnuté.

| Prvok                       | Kombinácia                 | Pomer     | Požiadavka |
| --------------------------- | -------------------------- | --------- | ---------- |
| orámovanie a lišta, svetlé  | `navy-800` / biela         | 15,34 : 1 | 3 : 1 ✓    |
| orámovanie a lišta, svetlé  | `navy-800` / `neutral-50`  | 14,35 : 1 | 3 : 1 ✓    |
| ikona, svetlé               | `navy-800` / biela         | 15,34 : 1 | 3 : 1 ✓    |
| text správy, svetlé         | `navy-900` / biela         | 17,48 : 1 | 4,5 : 1 ✓  |
| text správy, svetlé         | `navy-900` / `neutral-50`  | 16,34 : 1 | 4,5 : 1 ✓  |
| orámovanie a lišta, na navy | biela / `navy-700`         | 13,21 : 1 | 3 : 1 ✓    |
| ikona, na navy              | biela / `navy-700`         | 13,21 : 1 | 3 : 1 ✓    |
| text správy, na navy        | `neutral-100` / `navy-700` | 11,50 : 1 | 4,5 : 1 ✓  |

Všetko s rezervou nad AA, väčšina nad AAA.

#### Prečo bez tónovaného pozadia poľa

Jemná navy výplň sa ponúkala, ale `neutral-100` už patrí disabled stavu —
vyplnené chybové pole by vyzeralo ako neaktívne, čo je opačná informácia.
Na sekciách s podkladom `neutral-50` by bola výplň navyše prakticky
neviditeľná. Chybové pole preto zostáva na `neutral-0` a rozdiel nesie
orámovanie.

#### Ako sa error nemieša s focusom

Toto je jediný netriviálny problém celého stavu a farbou sa vyriešiť nedá.
Merania to dokladajú: `navy-800` oproti `navy-700` má **1,16 : 1** a na navy
páse zlato oproti bielej **1,80 : 1**. Chybové orámovanie a focus ring sú teda
v oboch prípadoch farebne prakticky nerozlíšiteľné.

Riešenie preto nestojí na farbe, ale na štyroch iných rozdieloch:

- **Tvar.** Focus je vždy symetrický prstenec okolo celého poľa. Chyba je
  nesymetrická — 4px lišta len na ľavej hrane. Prstenec a lišta sa nedajú
  zameniť ani pri rovnakom odtieni.
- **Poloha.** Focus je `outline`, teda **mimo** poľa a oddelený medzerou.
  Chyba je `border`, teda súčasť poľa. Na poli v chybe sa `outline-offset`
  zväčší z 2 px na 3 px, aby medzi orámovaním a prstencom zostala viditeľná
  medzera podkladu a nesplynuli do jednej hrubej linky.
- **Trvanie.** Focus zmizne pri opustení poľa, chyba zostane. Chyba navyše
  nikdy nie je len na poli — správa pod ním je stále na obrazovke.
- **Redundancia.** Aj keby používateľ prstenec a orámovanie nerozlíšil, ikonu
  a vetu pod poľom vidí. Focus ikonu ani text nemá.

Zhrnuté jednou vetou: **prstenec znamená „tu si", lišta s ikonou znamená „tu
je chyba"**, a tieto dva významy nesú rozdielne tvary, nie rozdielne farby.

### 2.8 Rozpočet plochy

Navy nesie stránku. Magenta má strop **5 % viditeľnej plochy** — v praxi
primárne tlačidlá, značka odporúčaného balíčka a akcenty signature elementu.
Gold ide ešte nižšie, len do tmavých pásov a focus ringu. Pri kontrole
sekcie sa počíta plocha, nie počet výskytov.

---

## 3. Typografia

Všetky tri rodiny sú self-hosted cez `next/font/google` (`app/fonts.ts`) so
subsetmi `latin` a `latin-ext` kvôli slovenskej diakritike. Žiadny runtime
request na Google Fonts — na stránke o ochrane osobných údajov by to bola
zbytočná trhlina.

### 3.1 Newsreader — display

Veľké veľkosti, tesný tracking, zdržanlivo. Pri veľkých nadpisoch váha 400,
nie 600 — Newsreader v regular reze vo veľkosti pôsobí editoriálne, v bolde
začne pripomínať klasický právnický korporát.

| Token        | Veľkosť                          | Line-height | Tracking | Váha |
| ------------ | -------------------------------- | ----------- | -------- | ---- |
| `display-xl` | `clamp(2.75rem, 6vw, 4.5rem)`    | 1,02        | −0,03em  | 400  |
| `display-lg` | `clamp(2.25rem, 4.5vw, 3.25rem)` | 1,06        | −0,025em | 400  |
| `display-md` | `clamp(1.75rem, 3vw, 2.25rem)`   | 1,12        | −0,02em  | 400  |
| `display-sm` | `1.5rem`                         | 1,20        | −0,015em | 500  |

`display-xl` sa na stránke objaví **raz**, v hero. Nikde inde.

Kurzíva Newsreaderu je vyhradená pre jedno miesto: prechodovú vetu medzi
sekciou Problém a zvyškom stránky. Jeden editoriálny moment, ktorý oddelí
pomenovanie problému od riešenia.

### 3.2 Archivo — body a UI

| Token     | Veľkosť     | Line-height | Váha | Použitie                     |
| --------- | ----------- | ----------- | ---- | ---------------------------- |
| `body-lg` | `1.125rem`  | 1,65        | 400  | podnadpis hero, FAQ odpovede |
| `body`    | `1rem`      | 1,65        | 400  | základný text                |
| `body-sm` | `0.875rem`  | 1,60        | 400  | poznámky, vysvetlivky        |
| `ui`      | `0.9375rem` | 1,40        | 500  | tlačidlá, navigácia          |
| `ui-sm`   | `0.8125rem` | 1,40        | 500  | labely polí                  |

FAQ odpovede idú v `body-lg` a merajú maximálne 68 znakov na riadok. Zadanie
žiada dlhé vecné odpovede — musia sa dať čítať, nie preskočiť.

### 3.3 IBM Plex Mono — čísla a ustanovenia

| Token     | Veľkosť                       | Tracking | Váha | Použitie                      |
| --------- | ----------------------------- | -------- | ---- | ----------------------------- |
| `eyebrow` | `0.75rem`, uppercase          | 0,12em   | 500  | eyebrow labely sekcií         |
| `cite`    | `0.8125rem`                   | 0        | 500  | `čl. 33 GDPR`, odkazy na EDPB |
| `price`   | `clamp(1.75rem, 3vw, 2.5rem)` | −0,02em  | 400  | ceny, `tabular-nums`          |
| `stat`    | `clamp(2rem, 4vw, 3rem)`      | −0,02em  | 500  | stat bar                      |
| `meta`    | `0.8125rem`                   | 0,04em   | 400  | rozsahy hodín, lehoty         |

Ceny aj čísla v stat bare majú `font-variant-numeric: tabular-nums`, aby sa
pri toggle Online / Prezenčne neposúvali.

---

## 4. Signature element — citačná os

### 4.1 Čo to je

Jeden prvok v troch veľkostiach: **tenká vertikálna os s mono značkou.**

**Malá — citačný odkaz.** Kdekoľvek stránka tvrdí niečo právne, stojí pri tom
mono značka s ustanovením, oddelená 2px vertikálnou linkou v gold na tmavom
a v navy na svetlom podklade.

```
│ čl. 33 GDPR
```

**Stredná — os sekcie.** V sekcii Problém a v Metodike prechádza ľavým okrajom
obsahu vlasová linka `neutral-200` s krátkymi značkami pri každom bode. Body sa
tým čítajú ako členenie predpisu, nie ako odrážky. V Metodike tie isté značky
nesú rozsahy — `16 h`, `6 h`, `90 min`.

**Veľká — os priebehu.** V sekcii „Ako to prebieha" je tá istá os vodorovná
a nesie reálnu sekvenciu od dopytu po osvedčenie. Tu sú číslované markery
namieste, pretože je to skutočný postup v čase.

### 4.2 Prečo práve toto

Stránka má jeden argument: školí kancelária, ktorá GDPR reálne praktizuje, nie
agentúra recyklujúca cudzie slajdy. Ten argument sa dá napísať — a každý
konkurent ho napíše tiež. Alebo sa dá **ukázať aparátom**, ktorý agentúra
nemá dôvod používať: každé tvrdenie nesie svoj zdroj.

Citačná os robí presne to. Nie je to efekt navyše, je to nositeľ informácie —
článok, rozsah, lehota. Vychádza z podstaty predmetu, ktorou je členený text
predpisu, a nie z dekorácie.

Má tri praktické výhody. Vynucuje si pravidlo zo zadania, že právne tvrdenie
musí uviesť článok, pretože tvrdenie bez značky bude vizuálne vyzerať
nedokončene. Je lacná na výkon — sú to bordery a mono text, žiadne SVG
animácie ani obrázky, čo pomáha Lighthouse skóre. A škáluje na 360 px, kde sa
os len zúži a značky sa presunú nad text.

### 4.3 Čím to nie je

Nie je to timeline widget na každej sekcii. Ak by os bola všade, prestane byť
signature a stane sa šumom. Objaví sa v Probléme, Metodike, priebehu
a pri právnych tvrdeniach. V Balíčkoch, FAQ ani v pätičke nie.

---

## 5. Layout a rytmus

- Obsahová šírka `1200px`, textové bloky `min(68ch, 100%)`.
- Odsadenie od okraja: `20px` na mobile, `24px` od 640 px, `40px` od 1024 px.
- Základná mriežka 4 px. Vertikálny rytmus sekcií: `96px` mobil, `128px`
  tablet, `160px` desktop.
- Sekcie sa striedajú `neutral-0` → `neutral-50`, s dvoma navy pásmi:
  Prečo školiť u advokátskej kancelárie a záverečné CTA. Tam sa objaví gold.
- Zaoblenie: `4px` na malých prvkoch, `8px` na kartách. Žiadne pill tlačidlá —
  pri tejto cieľovej skupine pôsobia ako spotrebiteľská appka.
- Bez tieňov ako hlavného oddelovača. Oddeľuje linka `neutral-200` a plocha.
  Tieň len na sticky navigácii po scrolle.

---

## 6. Pohyb

Framer Motion, zdržanlivo.

- Scroll reveal: `opacity 0 → 1`, `translateY 12px → 0`, 320 ms, `easeOut`,
  `viewport={{ once: true, amount: 0.3 }}`. Nikdy sa neprehráva opakovane.
- Stagger v zoznamoch maximálne 60 ms na prvok a maximálne 6 prvkov, potom
  naraz. Dlhší stagger pôsobí ako čakanie.
- Mikro-interakcie do 160 ms, len farba a orámovanie. Žiadne `scale` na
  tlačidlách.
- Citačná os pri odhalení sekcie narastie do výšky za 400 ms. To je jediná
  animácia, ktorá má na stránke dekoratívnu zložku, a je vyhradená pre
  signature element.
- Žiadny parallax, žiadny scroll-jacking, žiadne animované gradienty.
- `prefers-reduced-motion` je už riešené globálne v `app/globals.css`.
  Pri redukcii sa obsah zjaví bez posunu, os je hneď v plnej výške.

---

## 7. Fotografia

Klient dodal tri fotografie (`public/team/`, evidované v `lib/team.ts`):

| Súbor                 | Rozmer     | Obsah                   |
| --------------------- | ---------- | ----------------------- |
| `zuzana-motuzova.png` | 800 × 800  | portrét, svetlé pozadie |
| `pavel-lacko.png`     | 800 × 800  | portrét, svetlé pozadie |
| `motuzova-lacko.jpg`  | 682 × 1024 | spoločná fotografia     |

Portréty sú reálne fotografie lektorov, nie stock, a patria do sekcie Lektori
v jednotnom oreze so pozadím zladeným s `neutral-100`.

Spoločná fotografia je klasická korporátna kompozícia — obleky, chrbtom k sebe,
sivé pozadie. Je to presne register, ktorý zadanie vylučuje. Neodporúčam ju
veľkoplošne v hero. Vhodná je do OG obrázka alebo do menšieho formátu pri
odstavci o kancelárii.

Bez farebných filtrov cez tváre a bez magenta prekrytí.

---

## 8. Logo

Logo Motúzová & Lacko je záväzné. Nesmie sa prekresľovať, meniť farebnosť,
proporcie ani dopĺňať o efekty. Zdrojové súbory patria do `public/brand/`.

**Schválená grafická baseline (28. 7. 2026).** Hero
(`hero-motuzova-lacko.png`) a diagonálne pásy (`brand-bands.png`) sú
uzamknuté v `assets/graphics-baseline/` — neprepisovať bez výslovného
súhlasu. Obnova: `npm run restore:graphics`. Detaily:
`assets/graphics-baseline/BASELINE.md`.

**Stav assetov** (brand audit 26. 7. 2026 — pozri `BRAND-AUDIT.md`
a `public/brand/README.md`):

| Súbor               | Stav                                                                 |
| ------------------- | -------------------------------------------------------------------- |
| `logo.svg`          | **hotové** — primárny vektor z webu kancelárie                       |
| `logo-alt-navy.png` | hotové — sekundárna raster verzia (web ju používa na tablete/mobile) |
| inverse na navy     | **chýba** — vypýtať od klientky; neprefarbovať ani nedokresľovať     |

Primárne sa používa `public/brand/logo.svg`. Do zapojenia v UI je v kóde
textový placeholder; náhrada sa negeneruje.

Podoba a proporcie: vodorovný lockup, štvorcová značka `1 : 1` s bielym
obrysovým origami vtákom, vpravo trojriadkový text `Motúzová & Lacko` /
`advokátska kancelária` / `your lawyer`. Vzťažne k výške značky `H` je
medzera po text `0,242 × H` a celková šírka lockupu `3,713 × H`
(merania z Canvy v `CANVA-REVIEW.md`; zdrojový súbor je SVG z webu).

**Farba loga a paleta.** Zdrojový SVG má ružovú `#ee4a83`, web a paleta
`#ef4a85` — ΔE 0,45 (nepostrehnuteľné). Hodnota `#e55789` z merania Canvy
je artefakt screenshotu, nie brand farba; **opatrenie izolovať logo od
plochy `#ef4a85` preto neplatí.** Logo sa neprefarbuje; susedstvo s
`magenta-500` je v poriadku.

Umiestnenie: vľavo v navigácii s ochrannou zónou minimálne vo výške polovice
loga, a v pätičke. Na navy podklade treba dodanú inverznú verziu — kým
neexistuje, logo zostane na svetlej ploche a navy pás sa mu prispôsobí.

---

## 9. Kvalitatívny floor

- Responzívne od 360 px. Žiadny horizontálny scroll, žiadny text pod 14 px.
- Viditeľný keyboard focus na všetkých interaktívnych prvkoch, riešený vyššie.
- Poradie tabulátora zodpovedá vizuálnemu poradiu. Rozbaliteľná tabuľka a FAQ
  sú ovládateľné klávesnicou a majú správne `aria-expanded`.
- `prefers-reduced-motion` rešpektovaný.
- Kontrast minimálne WCAG AA, overený `scripts/contrast.mjs`.
- Lighthouse Performance ≥ 90, Accessibility ≥ 95.
- Toggle Online / Prezenčne a rozbaliteľná tabuľka fungujú aj bez JavaScriptu
  natoľko, že obsah je čitateľný.

---

## 10. Právny rámec pre copy a UI

Záväzné pravidlá, ktoré majú prednosť pred estetikou.

1. Nikdy „certifikácia" ani „certifikát" → **„osvedčenie o absolvovaní"** alebo
   **„potvrdenie o absolvovaní"**. Čl. 42 GDPR má pre certifikáciu vyhradený
   význam a kancelária nie je akreditovaný certifikačný subjekt.
2. Žiadne garantované výsledky. Nie „zaručene prejdete kontrolou", „100 % súlad",
   „bez rizika pokuty".
3. Žiadne superlatívy ani porovnávanie s inými kanceláriami.
4. Právne tvrdenia s uvedením článku. Frekvencia preškolenia DPO nie je v GDPR
   určená — čl. 38 ods. 2 hovorí o povinnosti prevádzkovateľa podporovať DPO
   v udržiavaní odborných znalostí. Formuluje sa ako odporúčaná prax
   a usmernenia EDPB, nie ako výslovná povinnosť „aspoň raz ročne".
5. Sankcie sa spomenú raz, s uvedením čl. 83 GDPR, bez strašenia.
6. Ceny „od" musia zodpovedať reálne dostupnej ponuke. Podmienka stojí pri cene,
   nie v pätičke drobným písmom.
7. Povinnosť mlčanlivosti — žiadne mená klientov ani konkrétne prípady bez
   výslovného súhlasu.
8. Formulár a cookies vzorové. Žiadne predvyplnené súhlasy, žiadny cookie
   banner s tmavými vzormi. Informácia o spracúvaní uvádza prevádzkovateľa,
   účel, právny základ, dobu uchovávania a odkaz na úplné informácie.

Zakázané frázy: revolučný, jedinečný, komplexné riešenie na mieru, posunieme
vás na vyšší level, v dnešnej dobe.
