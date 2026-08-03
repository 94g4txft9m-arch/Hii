# Brand audit — akmotuzova.sk

Overenie skutočného farebného a brandového štandardu advokátskej kancelárie
**Motúzová & Lacko** priamo z jej živého webu. Podklad pre rozhodnutie o palete
projektu GDPR Akadémia.

- **Zdroj:** `https://akmotuzova.sk` → presmeruje na `https://www.akmotuzova.sk`
- **Dátum odberu:** 26. 7. 2026
- **Stav webu:** živý a kompletný, WordPress 7.0.2, téma Impreza 8.7 + WPBakery.
  Copyright v pätičke uvádza 2025. Web **nie je v rekonštrukcii** — zadanie sa
  v tomto bode nezhoduje so skutočnosťou.
- **Metóda:** priame stiahnutie HTML a CSS. Farby sú vyčítané z deklarácií
  v šablóne (`--*` premenné témy, pravidlá tlačidiel, WPBakery triedy)
  a zo zdrojových súborov loga, **nie odhadnuté z obrázka**.

> Poznámka k prístupu: browser MCP `cursor-ide-browser` v tomto prostredí
> nedokázal vytvoriť kartu (`browser_tabs` vracia prázdny zoznam, `browser_navigate`
> hlási „No browser tab available"), takže `Runtime.evaluate` nebolo možné použiť.
> HTTP 466 pri sťahovaní cez Python nespôsoboval WAF kancelárie, ale sieťový
> allowlist sandboxu. Po povolení plnej siete vracia web `200` bez problémov,
> takže analýza prebehla na skutočných zdrojových súboroch, čo je pre presnosť
> hexov lepší zdroj než computed styles.

---

## 1. Zhrnutie pre netrpezlivých

| Otázka                              | Odpoveď                                                                              |
| ----------------------------------- | ------------------------------------------------------------------------------------ |
| Podarilo sa získať logo vo vektore? | **Áno.** `public/brand/logo.svg`, čistý vektor, 49 ciest, bez rastra                 |
| Ktorá ružová je záväzná?            | **`#ef4a85`** — presne táto hodnota je v CSS webu a zdroj loga má `#ee4a83`, ΔE 0,45 |
| Je `#e55789` z Canvy brand farba?   | **Nie.** Nevyskytuje sa nikde na webe ani v zdroji loga                              |
| Sedí navy zo zadania?               | Takmer. Web má `#232a65`, zadanie `#242a64`, ΔE 0,30                                 |
| Je gold `#eeba2b` na webe?          | **Nie je tam vôbec.** Nula výskytov                                                  |
| Overené údaje do pätičky?           | IČO, DIČ, IČ DPH, adresa, telefóny, e-maily — áno. Zápis v SAK — **nie**             |

---

## 2. Logo

### 2.1 Primárne logo — vektor, získané

- **URL:** `https://www.akmotuzova.sk/wp-content/uploads/2022/04/Untitled-1.svg`
- **Uložené ako:** `public/brand/logo.svg`
- **Stiahnuté bajt po bajte, bez úprav.** 27 260 B, SHA-256 začína `7c85a277b3c8691e`
- **Kde ho web používa:** hlavička (`<a href="/">` v `.ush_image_1`) a desktopová
  pätička, deklarované rozmery 241 × 65 px

Technické parametre súboru:

| Vlastnosť                   | Hodnota                                             |
| --------------------------- | --------------------------------------------------- |
| `viewBox`                   | `0 0 241.35 65.11`                                  |
| Obsah                       | 1 × `<rect>` + 49 × `<path>`                        |
| Raster / `<image>` / base64 | žiadny — **plnohodnotný vektor**                    |
| `<text>` elementy           | žiadne — písmo je prevedené na krivky, netreba font |
| Farby (v `<defs><style>`)   | `.cls-1 #ee4a83` · `.cls-2 #fff` · `.cls-3 #231f20` |

Kompozícia: ružový štvorec 65,11 × 65,11 s bielym origami vtákom, vpravo
wordmark „Motúzová & Lacko" a podtitul „advokátska kancelária / your lawyer"
v tmavej `#231f20`.

Vektor je tým pádom vyriešený — blokáda navigácie a pätičky padá.

### 2.2 Sekundárne logo — iná farebnosť, len raster

- **URL:** `https://www.akmotuzova.sk/wp-content/uploads/2022/01/Group-507@2x.png`
- **Uložené ako:** `public/brand/logo-alt-navy.png` (537 × 145 px, najväčšia
  dostupná verzia; menšia `Group-507.png` má 269 × 73 px)
- **Kde ho web používa:** pätička na tablete a mobile; z tohto súboru je
  odvodený aj favicon (`cropped-Group-507@2x-*.png`)

Rovnaká kresba, **iná farebnosť** (namerané z pixelov, PNG s alfa kanálom):

| Prvok    | Sekundárne logo (PNG) | Primárne logo (SVG)       |
| -------- | --------------------- | ------------------------- |
| Štvorec  | `#e53172`             | `#ee4a83`                 |
| Wordmark | `#232a65` (navy)      | `#231f20` (takmer čierna) |
| Vták     | biela                 | biela                     |

Kancelária teda **na vlastnom webe používa dve rôzne farebné verzie loga**
súčasne — desktop dostane jednu, mobil druhú. To nie je naša chyba a nemá zmysel
to riešiť za klientku, ale je to dôvod, prečo merania loga z rôznych zdrojov
vychádzajú rôzne.

### 2.3 Čo chýba

**Inverzná verzia loga na tmavý podklad neexistuje.** Ani jedna z dvoch verzií
nie je použiteľná na navy páse — wordmark je v oboch tmavý (`#231f20`, resp.
`#232a65`). Ak bude návrh potrebovať logo na tmavom, treba ho vypýtať od
klientky. **Neprefarbovať a nedokresľovať.**

---

## 3. Farby skutočne použité na webe

Zdroj: inline `<style>` bloky homepage (88 942 B), ktoré generuje téma Impreza
z nastavení webu. Stĺpec „výskytov" je počet výskytov hexu v týchto blokoch —
je to hrubá miera dôležitosti, nie presné meranie plochy.

### 3.1 Značkové farby

| Hex       | Výskytov | Kde sa používa                                                                                                                                                                                                                                                                                  |
| --------- | -------: | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `#ef4a85` |       42 | `--color-content-link` **a** `--color-content-link-hover`, `--color-alt-content-link(-hover)`; tlačidlo `.us-btn-style_2` (obrys aj text); tlačidlo `.us-btn-style_3` (plná plocha, biely text); hover v akordeóne; odosielacie tlačidlo Contact Form 7; nadpisové „eyebrow" popisky verzálkami |
| `#232a65` |       32 | primárne tlačidlo `.us-btn-style_1` (pozadie, biely text); tmavé kontaktné pásy a panely; nadpisy a citácie v sekciách; text v prilepenej hlavičke                                                                                                                                              |
| `#e53172` |        8 | **hover** primárneho tlačidla `.us-btn-style_1:hover`; text tlačidla `.us-btn-style_4`; hover pozadie kariet; akcenty v karuseloch                                                                                                                                                              |
| `#e95095` |        7 | hover odkazov v hlavičke a pätičke — `--color-header-middle-text-hover`, `--color-header-top-text-hover`, `--color-footer-link-hover`, `--color-subfooter-link-hover`; `--color-alt-content-overlay` a jeho gradient                                                                            |
| `#484f8b` |        8 | svetlejšia navy: popisky verzálkami, dátumy článkov, orámovanie a šípky pri hoveri                                                                                                                                                                                                              |

### 3.2 Neutrály a plochy

| Hex       | Výskytov | Premenná / použitie                                                                  |
| --------- | -------: | ------------------------------------------------------------------------------------ |
| `#ffffff` |       43 | `--color-content-bg`, `--color-header-middle-bg`, text na navy a na ružovej          |
| `#1a1a1a` |        8 | `--color-content-heading` (nadpisy), `--color-subfooter-bg`, `--color-footer-bg-alt` |
| `#3b3b3b` |        3 | `--color-content-text` — základný text stránky                                       |
| `#333333` |        4 | `--color-header-middle-text`, `--color-alt-content-text`, `--color-footer-border`    |
| `#222222` |        4 | `--color-footer-bg`, `--color-subfooter-bg-alt`                                      |
| `#999999` |        3 | `--color-content-faded`, `--color-footer-text`                                       |
| `#757575` |        3 | drobné texty pod obrázkami                                                           |
| `#cccccc` |        1 | `--color-footer-link`                                                                |
| `#bbbbbb` |        1 | `--color-subfooter-text`                                                             |
| `#f5f5f5` |        8 | `--color-content-bg-alt`, `--color-header-top-bg`                                    |
| `#f3f4f7` |        5 | svetlé pozadie obsahových sekcií (WPBakery)                                          |
| `#e5e5e5` |       14 | deliace čiary a orámovania v sekciách                                                |
| `#e8e8e8` |        1 | `--color-content-border`                                                             |
| `#dddddd` |        1 | `--color-alt-content-border`                                                         |

Hexy `#abb8c3`, `#f78da7`, `#cf2e2e`, `#ff6900`, `#fcb900`, `#7bdcb5`, `#00d084`,
`#8ed1fc`, `#0693e3`, `#9b51e0`, `#32373c` sú predvolená paleta editora
WordPress (`--wp--preset--color--*`). **Nie sú to brand farby** a web ich
nepoužíva.

### 3.3 Hero ilustrácia

`https://www.akmotuzova.sk/wp-content/uploads/2022/04/Group-565.svg` (450 kB,
`viewBox 0 0 659.033 516.958`) je z väčšej časti vložený raster v base64.
Vektorové časti používajú `#ef4a85`, `#484f8b`, `#c8cad8`, `#a7aac7`.

### 3.4 Zlatá na webe nie je

Vyhľadávanie `eeba2b` naprieč homepage, oboma súbormi loga aj hero ilustráciou:
**0 výskytov**. Web nemá žiadnu zlatú, žltú ani okrovú značkovú farbu.
Jediná žltá v zdroji je `#fcb900`, čo je predvoľba editora WordPress.

---

## 4. Spor o ružovú — rozhodnutý

Doteraz stáli proti sebe dve hodnoty: `#ef4a85` zo zadania klientky a `#e55789`
odmerané zo screenshotu loga v Canve (ΔE 2,19). Web tento spor rozhodne, ale
inak, než sa čakalo.

### 4.1 Namerané vzdialenosti

Algoritmus `scripts/delta-e.mjs` (CIEDE2000), spustený na hodnotách z webu:

```
ZADANIE #ef4a85 vs WEB CSS link #ef4a85     #ef4a85 vs #ef4a85  ΔE =   0.00  nepostrehnuteľné
ZADANIE #ef4a85 vs LOGO SVG z webu #ee4a83  #ef4a85 vs #ee4a83  ΔE =   0.45  nepostrehnuteľné
ZADANIE #ef4a85 vs CANVA meranie #e55789    #ef4a85 vs #e55789  ΔE =   2.19  JASNE VIDITEĽNÉ
LOGO SVG #ee4a83 vs CANVA meranie #e55789   #ee4a83 vs #e55789  ΔE =   2.30  JASNE VIDITEĽNÉ
ZADANIE #ef4a85 vs WEB hover #e53172        #ef4a85 vs #e53172  ΔE =   5.19  JASNE VIDITEĽNÉ
ZADANIE #ef4a85 vs WEB hover #e95095        #ef4a85 vs #e95095  ΔE =   4.00  JASNE VIDITEĽNÉ
CANVA #e55789 vs PNG-logo ruzova #e53172    #e55789 vs #e53172  ΔE =   6.38  JASNE VIDITEĽNÉ
SVG-logo #ee4a83 vs PNG-logo #e53172        #ee4a83 vs #e53172  ΔE =   4.92  JASNE VIDITEĽNÉ
```

### 4.2 Čo z toho vyplýva

**Zadanie klientky sedí s webom presne.** `--color-content-link: #EF4A85` je
doslova tá istá hodnota, akú klientka uviedla. Nie je to náhoda ani zaokrúhlenie
— je to nastavenie jej vlastnej témy.

**Ružová v logu a ružová zo zadania sú tá istá farba.** Zdrojový SVG má
`#ee4a83`, čo je od `#ef4a85` vzdialené **ΔE 0,45**. To je pod prahom
postrehnuteľnosti aj pri priamom porovnaní vedľa seba. Rozdiel je jeden bod
v červenom a dva v modrom kanáli, čiže bežné zaokrúhlenie pri prevode z CMYK.

**`#e55789` nie je brand farba.** Nevyskytuje sa v CSS webu, ani v SVG loga, ani
v PNG loga, ani v hero ilustrácii. Od každej skutočnej hodnoty je vzdialená
viac než od `#ef4a85`. Je to takmer isto artefakt Canvy — ide o meranie
z vyrenderovaného screenshotu, kde sa uplatnil farebný profil, kompresia alebo
priehľadnosť podkladu. Meranie zo screenshotu je slabší dôkaz než zdrojový
súbor, a tu máme zdrojový súbor.

**Tretia hodnota tu je, ale nie tá očakávaná.** Web má vlastnú tmavšiu ružovú
`#e53172` (ΔE 5,19 od `#ef4a85`) — je to hover primárneho tlačidla a zároveň
farba štvorca v sekundárnom PNG logu. A štvrtú, `#e95095`, ako hover odkazov
v hlavičke a pätičke. Obe sú **zámerné hover odtiene**, nie alternatívy
základnej ružovej. Toto je legitímna otázka na brand manuál, ale nemení
základnú farbu.

### 4.3 Dopad na dohodu „logo a zadanie platí"

Používateľ rozhodol, že logo aj zadanie platia súčasne a logo sa neprefarbuje.
**Toto rozhodnutie zostáva v platnosti a je teraz jednoduchšie na dodržanie** —
lebo žiadny konflikt v skutočnosti neexistuje. Logo sa naozaj neprefarbuje
(používame originálny súbor), a keďže jeho `#ee4a83` je od palety vzdialené
ΔE 0,45, **nevznikne žiadny viditeľný šev, ani keď logo susedí s plochou
`#ef4a85`.**

Opatrenie z `DESIGN.md` (riadok 374 a nasl.), ktoré na základe hodnoty
`#e55789` zakazuje susedstvo loga s plochou `#ef4a85` a vyžaduje medzi ne
odsadenie, tým stráca opodstatnenie. Návrh na jeho zrušenie je v časti 7.

---

## 5. Typografia webu

Len informatívne. **Záväzná typografia projektu je a zostáva Newsreader, Archivo
a IBM Plex Mono** — toto sa nemení.

| Zdroj                                    | Písmo                         |
| ---------------------------------------- | ----------------------------- |
| `--font-body`, `--font-h1` … `--font-h6` | `"Titillium Web", sans-serif` |
| Google Fonts request                     | `Titillium Web:400,700`       |
| Google Fonts request (WPBakery)          | `Abril Fatface:regular`       |

Web teda beží celý na Titillium Web vrátane všetkých úrovní nadpisov; Abril
Fatface je načítané cez WPBakery pre ozdobné prvky. Wordmark v logu je
prevedený na krivky, takže naň nie je potrebný žiadny font.

---

## 6. Overené brand údaje

Použiteľné pre pätičku a právne texty. Pri každom údaji je URL zdroja.

### 6.1 Fakturačné a identifikačné údaje

Zdroj: `https://www.akmotuzova.sk/kontakt/`

| Údaj   | Hodnota      |
| ------ | ------------ |
| IČO    | 51 827 450   |
| DIČ    | 1034862345   |
| IČ DPH | SK1034862345 |

### 6.2 Adresa

Zdroj: `https://www.akmotuzova.sk/kontakt/`

```
Klemensova 4
811 09 Bratislava
```

Web k tomu dodáva: „Sídlime v centre diania, v historickom centre Bratislavy pri
biznis centre Twin City. V blízkosti sa nachádza nové centrum NIVY, sme na skok
zo všetkých softvérových firiem."

### 6.3 Kontakty

Zdroje: `https://www.akmotuzova.sk/kontakt/` a `https://www.akmotuzova.sk/o-nas/`

| Osoba           | Rola podľa webu | Telefón       | E-mail                   |
| --------------- | --------------- | ------------- | ------------------------ |
| Zuzana Motúzová | CEO & advokát   | 0902 203 238  | `motuzova@akmotuzova.sk` |
| Pavel Lacko     | Advokát         | 0905 68 68 62 | `lacko@akmotuzova.sk`    |

Hlavný kontakt uvedený na stránke Kontakt je `0902 203 238` /
`motuzova@akmotuzova.sk`.

### 6.4 Ostatné

| Údaj                      | Hodnota                                                                            | Zdroj                          |
| ------------------------- | ---------------------------------------------------------------------------------- | ------------------------------ |
| Oficiálny názov v titulke | „Motúzová & Lacko advokátska kancelária"                                           | `<title>`, JSON-LD na homepage |
| Copyright v pätičke       | „Všetky práva vyhradené ® Motúzová & Lacko 2025"                                   | pätička homepage               |
| Autor dizajnu webu        | Truben studio                                                                      | pätička homepage               |
| Sekcie webu               | Technológie · Business & Podnikanie · GDPR & Privacy · Aktuality · O nás · Kontakt | hlavná navigácia               |
| Jazykové verzie           | SK, EN (`/en/domov-english/`)                                                      | prepínač jazykov               |

### 6.5 Čo sa nepodarilo overiť

**Zápis v Slovenskej advokátskej komore nie je na webe nikde uvedený.**
Prehľadal som homepage, `/kontakt/`, `/o-nas/` a `/gdpr-a-privacy/` na výrazy
„SAK", „komor", „zapísan", „číslo licencie" — nula relevantných výskytov. Rovnako
tam nie je právna forma (`s. r. o.` sa nevyskytuje), IBAN ani číslo zápisu
v obchodnom registri.

Zostáva to teda otvorená otázka na klientku. Poznámka: IČO 51 827 450 je overené,
takže právnu formu a zápis vie doplniť z verejných registrov, ale **z webu to
doložiť neviem a nevymýšľam si to.**

---

## 7. Odporúčanie pre paletu

`DESIGN.md` som podľa zadania needitoval. Nasleduje návrh na zapracovanie.

### 7.1 Ružová — ponechať `#ef4a85`, zrušiť opatrenie okolo `#e55789`

`magenta-500` = `#ef4a85` **zostáva bez zmeny.** Je to presne hodnota z CSS webu
a zároveň prakticky presne farba loga.

Zmeniť treba len odôvodnenie v `DESIGN.md` pri logu (okolie riadku 374):

- tvrdenie „Štvorec v logu je `#e55789`, nie `#ef4a85` z palety" nahradiť
  zistením, že zdrojový SVG má `#ee4a83`, teda ΔE 0,45 od palety;
- **zrušiť požiadavku na povinné odsadenie medzi logom a plochou `#ef4a85`.**
  Bola postavená na hodnote, ktorá v skutočnosti nikde neexistuje. Pri ΔE 0,45
  nie je čo riešiť.

Odtiene `magenta-600` `#c9265f` (5,35 : 1) a `magenta-700` `#ab1a4e` (7,02 : 1)
odporúčam **ponechať tak, ako sú.** Web má vlastný hover `#e53172`, ale ten má
na bielej len **4,19 : 1**, takže na text nevyhovuje AA. Náš prístupnejší rebrík
je lepšie riešenie a od webu sa líši spôsobom, ktorý používateľ nezaregistruje
ako nesúlad.

### 7.2 Navy — zvážiť `#242a64` → `#232a65`

Web aj wordmark v sekundárnom logu používajú zhodne `#232a65`. Od `#242a64`
zo zadania je to **ΔE 0,30 — nepostrehnuteľné.**

Argument za zmenu je jediný, ale slušný: je to overená hodnota priamo od
klientky, nie prepis. Argument proti: nič sa tým vizuálne nezlepší.

Keďže je to nepostrehnuteľné, **je to bezpečná zmena** — celý zvyšok škály
(`navy-500`, `-600`, `-800`, `-900`) môže zostať nezmenený, nič sa nerozladí.
Overené algoritmom `scripts/contrast.mjs`:

```
navy-700 NOVE #232a65 na bielej                      #232a65 / #ffffff  13.20:1  AAA text | AA veľký/UI
biela na navy-700 NOVE #232a65                       #ffffff / #232a65  13.20:1  AAA text | AA veľký/UI
navy-700 NOVE #232a65 na neutral-50 #f7f7fa          #232a65 / #f7f7fa  12.35:1  AAA text | AA veľký/UI
navy-700 NOVE #232a65 na neutral-100 #eeeff4         #232a65 / #eeeff4  11.50:1  AAA text | AA veľký/UI
gold-500 #eeba2b na navy-700 NOVE #232a65            #eeba2b / #232a65   7.35:1  AAA text | AA veľký/UI
magenta-500 #ef4a85 na navy-700 NOVE #232a65         #ef4a85 / #232a65   3.76:1  text NEVYHOVUJE | AA veľký/UI
neutral-100 #eeeff4 na navy-700 NOVE #232a65         #eeeff4 / #232a65  11.50:1  AAA text | AA veľký/UI
neutral-300 #bfc3d2 na navy-700 NOVE #232a65         #bfc3d2 / #232a65   7.51:1  AAA text | AA veľký/UI
ODLISENIE navy-800 #1b2050 vs navy-700 NOVE #232a65  #1b2050 / #232a65   1.16:1  text NEVYHOVUJE | veľký/UI NEVYHOVUJE
```

Porovnanie s doterajšími hodnotami pre `#242a64`:

| Dvojica                          | `#242a64` | `#232a65` | Rozdiel |
| -------------------------------- | --------- | --------- | ------- |
| na bielej                        | 13,21 : 1 | 13,20 : 1 | −0,01   |
| na `neutral-50`                  | 12,35 : 1 | 12,35 : 1 | 0       |
| na `neutral-100`                 | 11,50 : 1 | 11,50 : 1 | 0       |
| `gold-500` na navy               | 7,35 : 1  | 7,35 : 1  | 0       |
| `magenta-500` na navy            | 3,77 : 1  | 3,76 : 1  | −0,01   |
| `neutral-300` na navy (disabled) | 7,52 : 1  | 7,51 : 1  | −0,01   |
| `navy-800` vs `navy-700`         | 1,16 : 1  | 1,16 : 1  | 0       |

**Žiadny prah WCAG sa nehýbe.** Fokusový outline `navy-700` na svetlom drží
13,20 : 1, chybové stavy postavené na `navy-800` fungujú rovnako, aj argument
o `1,16 : 1` medzi `navy-800` a `navy-700` (prečo sa chyba a fokus nesmú
rozlišovať farbou) platí naďalej.

Ak sa zmena zapracuje, **treba k nej pridať dvojice do `scripts/contrast.mjs`.**
Ja som ich needitoval, aby som neprepísal paralelnú prácu na chybových stavoch —
merania vyššie vznikli na nezmenenej kópii toho istého skriptu.

### 7.3 Gold — otvorená otázka na klientku

`gold-500` `#eeba2b` **nemá na webe kancelárie žiadnu oporu.** Nula výskytov
v CSS, v oboch verziách loga aj v hero ilustrácii. Pochádza výlučne zo zadania
a z podkladov v Canve.

Neodporúčam ju rušiť — používateľ potvrdil, že zadanie platí, a `gold-500` má
v systéme funkčnú rolu (fokusový outline na navy, 7,35 : 1, čo je ťažko
nahraditeľné). Ale **treba to pomenovať ako otvorenú otázku**: buď je to nová
farba, ktorú si klientka želá zaviesť nad rámec doterajšieho webu, alebo je
v podkladoch omylom. Rozdiel je podstatný pre to, koľko priestoru jej v návrhu dať.

Do vyjasnenia navrhujem držať gold v roli, ktorú má teraz — akcent a fokus na
tmavom páse — a **nestavať na nej žiadnu veľkú plochu.**

### 7.4 Čo z webu nepreberať

| Farba z webu                            | Prečo nie                                                                                                                                |
| --------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| `#e53172`, `#e95095`                    | hover odtiene témy; `#e53172` má na bielej 4,19 : 1, `#e95095` 3,47 : 1 — na text nevyhovujú AA                                          |
| `#484f8b`                               | 7,59 : 1, prístupná, ale od nášho `navy-500` `#4a5399` (7,03 : 1) vzdialená ΔE 2,60 — dva takmer rovnaké odtiene v škále nedávajú zmysel |
| `#3b3b3b`, `#1a1a1a`, `#999999`         | neutrály webu sú bez podtónu; naša škála je zámerne chladná, aby ladila s navy. `#3b3b3b` vs `neutral-600` `#474c5e` je ΔE 11,00         |
| `#f3f4f7`                               | ΔE 0,83 od nášho `neutral-50` `#f7f7fa` — netreba meniť, rozdiel je nepostrehnuteľný                                                     |
| `#222222`, `#f5f5f5`, `#e5e5e5` a spol. | predvolené hodnoty témy Impreza, nie brand rozhodnutia                                                                                   |

### 7.5 Zhrnutie navrhovaných zmien

| #   | Zmena                                                                                 | Naliehavosť                                         |
| --- | ------------------------------------------------------------------------------------- | --------------------------------------------------- |
| 1   | Použiť `public/brand/logo.svg` v navigácii a pätičke, zrušiť textový placeholder      | vysoká — odblokované                                |
| 2   | Opraviť tvrdenie o `#e55789` v `DESIGN.md` a zrušiť odsadenie medzi logom a `#ef4a85` | vysoká — opatrenie stojí na neexistujúcej hodnote   |
| 3   | Doplniť do pätičky IČO, DIČ, IČ DPH, adresu a kontakty z časti 6                      | stredná                                             |
| 4   | `navy-700` `#242a64` → `#232a65` + doplniť dvojice do `scripts/contrast.mjs`          | nízka — kozmetická presnosť, nič sa vizuálne nemení |
| 5   | Vypýtať inverznú verziu loga na tmavý podklad                                         | stredná — inak nebude logo na navy páse             |
| 6   | Vypýtať zápis v SAK a právnu formu                                                    | stredná — povinný údaj pre advokátsku kanceláriu    |
| 7   | Overiť s klientkou pôvod zlatej `#eeba2b`                                             | stredná                                             |

---

## 8. Použité zdroje

| Čo                        | URL                                                                             |
| ------------------------- | ------------------------------------------------------------------------------- |
| Homepage                  | `https://akmotuzova.sk` → `https://www.akmotuzova.sk`                           |
| Kontakt                   | `https://www.akmotuzova.sk/kontakt/`                                            |
| O nás                     | `https://www.akmotuzova.sk/o-nas/`                                              |
| GDPR & Privacy            | `https://www.akmotuzova.sk/gdpr-a-privacy/`                                     |
| Mapa stránok              | `https://www.akmotuzova.sk/wp-sitemap.xml`                                      |
| Logo, vektor              | `https://www.akmotuzova.sk/wp-content/uploads/2022/04/Untitled-1.svg`           |
| Logo, raster, navy verzia | `https://www.akmotuzova.sk/wp-content/uploads/2022/01/Group-507@2x.png`         |
| Hero ilustrácia           | `https://www.akmotuzova.sk/wp-content/uploads/2022/04/Group-565.svg`            |
| CSS témy Impreza          | `https://www.akmotuzova.sk/wp-content/themes/Impreza/css/style.min.css?ver=8.7` |
