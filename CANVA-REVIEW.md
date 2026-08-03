# Fáza 2 — čítanie návrhu z Canvy

Zdroj: design `DAHNootchh8` (landing page, 27 strán, nepremenovaný titulok
„Welcome to Leadership in Tech 101 – Webová lokalita") a design `DAFFjAQWLiU`
(„WORKSHOP – Prezentácia", 56 strán, obsah kurzu).

Návrh sa **iba čítal**. V Canve sa nič neupravovalo.

Screenshoty a odvodené výstrižky sú v `.canva-review/`.

---

## 1. Stav prečítania

| Časť                           | Stav                                       |
| ------------------------------ | ------------------------------------------ |
| Landing page, strany 1–5, 7, 8 | prečítané v plnom rozlíšení                |
| Landing page, strany 10–15     | prečítané v plnom rozlíšení                |
| Landing page, strany 6 a 9     | známe len z náhľadu, plný screenshot chýba |
| Landing page, strany 16–27     | nezachytené                                |
| Workshop, strana 1 (logo)      | prečítaná a odmeraná                       |
| Workshop, strany 2–56          | z náhľadov známe len prvé tri              |

**Pozor na číslovanie screenshotov.** Súbory `lp-NN.png` nezodpovedajú číslam
strán — `lp-06` zobrazuje znova stranu 5, `lp-09` znova stranu 8, `lp-14`
a `lp-15` sú identické. Strany 6 a 9 sa nezachytili vôbec. Mapovanie nižšie je
overené podľa zvýrazneného náhľadu v Canve, nie podľa názvu súboru.

| Strana | Súbor                    | Sekcia                                 |
| ------ | ------------------------ | -------------------------------------- |
| 1      | `lp-01.png`              | Hero + navigácia                       |
| 2      | `lp-02.png`              | Trust bar — čísla a dôvera             |
| 3      | `lp-03.png`              | Čo potrebujete? — segmentácia          |
| 4      | `lp-04.png`              | Prečo práve my? — šesť dlaždíc         |
| 5      | `lp-05.png`, `lp-06.png` | Kurzy a cenník                         |
| 6      | chýba                    | Obsah kurzu — „Šesť modulov…"          |
| 7      | `lp-07.png`              | Ako to prebieha — tri kroky            |
| 8      | `lp-08.png`, `lp-09.png` | Mesačná podpora Basic/Standard/Premium |
| 9      | chýba                    | Lektor                                 |
| 10     | `lp-10.png`              | Referencie a výsledky                  |
| 11     | `lp-11.png`, `lp-12.png` | Časté otázky                           |
| 12     | `lp-13.png`              | Záverečné CTA                          |
| 13     | `lp-14.png`              | dekoratívne plochy, bez textu          |
| 14–15  | `lp-16.png`, `lp-17.png` | prázdne strany                         |

Hexy farieb nie sú odhadnuté z oka — sú odčítané zo screenshotov skriptom
`scripts/sample-colors.py`, rozdiely farieb sú spočítané v CIEDE2000 skriptom
`scripts/delta-e.mjs`.

---

## 2. Strana 1 — navigácia a hero, texty doslovne

**Navigácia**

- logo lockup Motúzová & Lacko (vľavo)
- `Kurzy`
- `Ročné preškolenie`
- `Support`
- `Ako to prebieha`
- `FAQ`
- tlačidlo vpravo: `KONZULTÁCIA ZADAR…` — v renderi odrezané pravým okrajom,
  celý reťazec nie je overený

**Hero**

- eyebrow: `★★★★★` (päť plných hviezd, `#eeba2b`) + `Školia advokáti, ktorí kontroly úradu zažili z prvej ruky`
- nadpis H1: `Keď príde kontrola, váš DPO nesmie hádať.`
- podnadpis, dva riadky:
  `Školenie a preškolenie zodpovedných osôb — pre jednotlivcov aj celé firmy.`
  `Učia advokáti, ktorí klientov pri kontrole úradu reálne zastupujú.`
- primárne CTA: `KONZULTÁCIA ZADARMO — 15 MINÚT →`
- sekundárne CTA: `VYBRAŤ KURZ →`
- pod CTA, so zelenou ikonou fajky: `Termín potvrdíme okamžite e-mailom. Bez záväzkov, bez predajného nátlaku`

**Vizuál hero:** veľký šikmý magenta panel, za ním tmavší navy šikmý panel,
vpravo fotografia oboch partnerov (tá istá spoločná fotografia, ktorú máme
v `public/team/motuzova-lacko.jpg`). Pavel Lacko je orezaný pravým okrajom.

---

## 3. Farby — odmerané

| Miesto v návrhu            | Odmeraný hex | Zhoda so záväznou paletou   |
| -------------------------- | ------------ | --------------------------- |
| nadpis H1                  | `#242a64`    | presne navy z palety        |
| primárne CTA               | `#ef4a85`    | presne magenta z palety     |
| hviezdičky                 | `#eeba2b`    | presne gold z palety        |
| **magenta štvorec v logu** | `#e55789`    | **iná farba než `#ef4a85`** |
| svetlý magenta panel hero  | `#f06496`    | odvodený svetlejší odtieň   |
| navy panel hero            | `#3c4174`    | odvodený svetlejší odtieň   |
| text v logu                | `#000000`    | čistá čierna, nie navy      |

### Rozpor: logo má inú ružovú než paleta

| Porovnanie                             | ΔE (CIEDE2000) | Hodnotenie                 |
| -------------------------------------- | -------------- | -------------------------- |
| `#ef4a85` (paleta) vs `#e55789` (logo) | 2,19           | jasne viditeľné vedľa seba |
| `#000000` (text loga) vs `#242a64`     | 24,86          | úplne iná farba            |

Rozdiel 2,19 je nad hranicou, kde to oko pri priamom porovnaní zachytí. Keďže
logo sa nesmie prefarbovať, na stránke by vedľa seba stáli dve podobné, ale
nezhodné ružové — a to sa čita ako chyba, nie ako zámer.

**Odporúčanie:** logo v navigácii a v pätičke izolovať tak, aby jeho ružová
nikdy nesusedila s plochou `#ef4a85`. Prakticky to znamená nedávať primárne
CTA do rovnakého vizuálneho bloku ako logo bez oddelenia bielou plochou.
Alternatívou je potvrdiť u klientky, ktorá ružová je tá správna značková —
je možné, že `#ef4a85` v zadaní je zaokrúhlenie a záväzná je hodnota z loga.
Toto je otázka na klientku, nie vec, o ktorej rozhodneme sami.

### Rozpočet plochy je prekročený

Meranie plochy hero (bez Canva UI): **magenta a ružové plochy zaberajú 18,5 %,
navy len 6,0 %.**

Zadanie hovorí, že magenta má strop približne 5 % a navy nesie stránku.
V návrhu je to obrátené — magenta je nosná plocha a je 3,7× nad stropom.

---

## 4. Typografia

Celý návrh je postavený na jednom geometrickom bezserifovom písme, v nadpise
aj v texte. Vyzerá to na Poppins alebo Montserrat (posudzované vizuálne, nie
odčítané z DOM — označujem ako odhad).

**V návrhu sa nenachádza:** žiadne serifové display písmo, žiadne monospace.

Záväzná typografia zo zadania je Newsreader (display), Archivo (body)
a IBM Plex Mono (ceny, čísla, odkazy na ustanovenia). To znamená, že
**typografiu z Canvy nemožno prevziať** — sú to dva rôzne návrhy. Canva
poslúži ako podklad pre obsah a poradie sekcií, nie pre písmo.

---

## 5. Logo — podoba a proporcie

Zdroj: strana 1 designu `DAFFjAQWLiU`. Výstrižok v plnom rozlíšení:
`.canva-review/logo-crop.png`.

**Skladba:** vodorovný lockup, vľavo značka, vpravo trojriadkový text.

**Značka:** plný štvorec `#e55789`, presne 1 : 1 (odmerané 359 × 359 px).
V ňom bielou **iba obrysovou linkou** (bez výplne) štylizovaný origami vták
alebo papierová vlaštovka. Je zložený z priamych čiar do trojuholníkových
plôch, orientovaný doprava a nahor: dlhé krídlo smeruje vľavo nahor, telo
sa zbieha do hrotu vľavo dole, malá hlava s hrotom je vpravo. Linka je tenká,
vták nemá žiadnu výplň ani tieň.

**Text:** čistá čierna `#000000`, zarovnaný vľavo, tri riadky:

```
Motúzová & Lacko
advokátska kancelária
your lawyer
```

Prvý riadok je výrazne ťažší a väčší. Druhý a tretí riadok sú v základnej
váhe a majú zjavne rozšírené prestrkanie. Značka a text sú vizuálne dva
samostatné prvky, medzi nimi je čistá medzera.

**Odmerané proporcie** (vzťažne k výške značky `H`):

| Rozmer                          | Hodnota                |
| ------------------------------- | ---------------------- |
| štvorec značky                  | `H × H` (presne 1 : 1) |
| medzera značka → text           | `0,242 × H`            |
| šírka celého lockupu            | `3,713 × H`            |
| výška riadku „Motúzová & Lacko" | `0,223 × H`            |
| odstup medzi riadkami textu     | `0,089 × H`            |

Text je vertikálne takmer na strede značky, opticky posunutý nepatrne nižšie.

Tieto proporcie umožnia logo správne osadiť a určiť ochrannú zónu bez toho,
aby sa čokoľvek prekresľovalo.

**SVG stále chýba.** Výstrižok zo screenshotu je rastrový a na produkciu
nepostačuje — na tenkej bielej linke vtáka by sa to prejavilo okamžite.
Vektor je potrebné dodať.

---

## 6. Cenníková časť Canvy je uzavretá — neaktuálna

Klient potvrdil, že údaje v Canve sú staré a záväzný je `Balicky FIRMY.docx`,
spracovaný v `lib/packages.ts`.

Neplatné a na stránku nejde: `Špecialista DPO 980 €`, `Preškolenie`,
`Firemné školenie`, `6 modulov`, `Basic` / `Standard` / `Premium`,
`ročné preškolenie`, `3-dňový kurz`.

Canva je od tejto chvíle **výhradne vizuálna a obsahová referencia** — poradie
sekcií, kompozícia, formulácie mimo cenníka a umiestnenie loga.

Dôsledok pre štruktúru: v návrhu padajú celé strany **5** (Kurzy a cenník)
a **6** (Obsah kurzu — šesť modulov), a v ďalších sekciách každá veta, ktorá
sa na moduly alebo na Basic/Standard/Premium odvoláva.

### Jeden produkt v Canve, ktorý nie je v docx

Strana 8 predáva **mesačnú podporu** — `Basic 90 €`, `Standard 240 €`,
`Premium 490 €`, všetko `/mesiac bez DPH`. To nie sú školiace balíčky, je to
priebežná právna podpora s reakčnými lehotami a SLA.

Docx o tomto produkte mlčí, takže neviem, či sa ešte ponúka. **Otázka na
klientku:** patrí mesačná podpora na túto stránku, alebo ide o samostatnú
službu mimo GDPR Akadémie? Kým neodpovie, sekciu nezaraďujem — nemám k nej
žiadny overený zdroj.

---

## 7. Strany 2–15 — texty a nálezy

### Strana 2 — Trust bar

Eyebrow `PREČO NÁM VERIŤ?`, nadpis `Ochranu osobných údajov neriešime
príležitostne. Riešime ju každý deň.`

Štyri čísla: `2011` / `Rok založenia kancelárie zameranej na technológie
a dáta` · `15+` / `Rokov praxe v IT práve a ochrane osobných údajov` · `6` /
`Modulov kurzu, ktoré vedie aktívny advokát — nie externý školiteľ` · `1 : 1` /
`Konzultácia zadarmo pred rozhodnutím, bez záväzkov`

Pod tým `Klientov zastupujeme aj počas kontroly Úradu na ochranu osobných
údajov SR — vieme, na čo sa pýta a čo chce vidieť.`, potom malý label
`VÝBER KLIENTOV A PARTNEROV` a **päť prázdnych rámov** — logá klientov nie sú
vyplnené, sú to placeholdery.

Nálezy: `2011` a `15+` si navzájom neprotirečia (2026 − 2011 = 15), takže
`15+` je doložiteľné. `6` odkazuje na neplatné moduly a musí von. `1 : 1` nie
je číslo o kancelárii, je to popis ponuky vo statistickom pásme — do stat baru
nepatrí.

### Strana 3 — Čo potrebujete?

Nadpis `Čo potrebujete?`, tri navy karty:

`Som DPO — alebo sa ním chcem stať` / `Prvé školenie alebo preškolenie pre
jednotlivca. Komplexný kurz v 6 moduloch vedený advokátom. Odnášate si
osvedčenie a vzory dokumentácie.` / `Chcem sa stať DPO →`

`Sme firma alebo organizácia` / `Vyškolenie alebo preškolenie vašich
zodpovedných osôb. Kurz prispôsobený potrebám tímu — online aj u vás.
Osvedčenie pre každého účastníka.` / `Chcem ponuku pre tím →`

`Náš DPO potrebuje podporu` / `Balíky Basic, Standard a Premium. Advokát
poruke pri žiadosti, incidente aj kontrole — bez čakania na termín.` /
`Chcem dlhodobú podporu →`

Nálezy: v treťom texte je preklep `Advokát poruke` namiesto `po ruke`. Prvá
karta hovorí o jednotlivcovi, ale záväzné balíčky sú cenené za osobu
v organizácii — segmentácia „jednotlivec verzus firma" nemá v docx oporu.

### Strana 4 — Prečo práve my?

Eyebrow `PREČO PRÁVE MY?`, nadpis `Školenie od ľudí, ktorí obhajujú ochranu
údajov.`, podnadpis `Rozdiel medzi teóriou a praxou sa ukáže až pri prvom
incidente. My ho poznáme z oboch strán stola.`

Šesť dlaždíc:

- `Učia advokáti, nie školitelia` / `Kurz vedie ten, kto v tej istej veci zastupuje klienta pred úradom aj súdom.`
- `Reálne prípady, nie modelové` / `Anonymizované spisy z praxe — incidenty, žiadosti, kontroly, pokuty.`
- `Vzory, ktoré si odnesiete` / `Dokumentácia, ktorú viete použiť hneď v pondelok ráno. Nie šablóny z internetu.`
- `Legislatíva k dnešnému dňu` / `Obsah aktualizujeme podľa rozhodnutí úradu, usmernení EDPB a súdov EÚ.`
- `Podpora aj po kurze` / `Osvedčenie nie je koniec. Keď príde incident, advokát je na telefóne.`
- (magenta dlaždica) `Neviete, čo presne potrebujete?` / `15 minút s advokátom, zadarmo a bez záväzkov. Povieme vám aj to, keď kurz nepotrebujete.`

Toto je obsahovo najsilnejšia sekcia návrhu. `Anonymizované spisy z praxe`
je správne postavené voči povinnosti mlčanlivosti a šiesta dlaždica je
výborný signál dôvery.

### Strana 7 — Ako to prebieha

Nadpis `Ako to prebieha`, tri kroky:

`KROK 1: REZERVÁCIA` / `Vyberiete kurz a termín. Potvrdenie príde okamžite na
e-mail, bez záväzkov.` / tlačidlo `REZERVOVAŤ`

`KROK 2: KURZ S ADVOKÁTOM` / `Samoštúdium vlastným tempom a živé workshopy
s advokátom. Vzory dokumentácie v cene.` / tlačidlo `VYBRAŤ KURZ`

`KROK 3: OSVEDČENIE` / `Získate osvedčenie o absolvovaní. Pri ročnom
preškolení sa osvedčenie každý rok obnovuje.` / tlačidlo `VIAC INFO`

Nálezy: `Samoštúdium vlastným tempom` nemá v docx oporu — balíčky sú
definované ako školenie v hodinách, online alebo prezenčne, o samoštúdiu nič.
Druhá veta kroku 3 implikuje, že osvedčenie má platnosť a exspiruje.

### Strana 10 — Referencie a výsledky

Eyebrow `REFERENCIE A VÝSLEDKY`, nadpis `Nehovoríme, že to funguje. Hovoria to
klienti.`

Tri karty, každá s `★★★★★` a **placeholderom** v hranatých zátvorkách:

- `„[Citát klienta — 2 vety o konkrétnom výsledku: čo nevedeli pred kurzom a čo zvládli po ňom.]"`
- `„[Citát z firemného školenia — ideálne s číslom: počet školených ľudí, ušetrený čas, výsledok auditu.]"`
- `„[Citát k dlhodobej podpore — situácia, keď pomohla rýchla reakcia advokáta.]"`

Podpis vo všetkých `[Meno a priezvisko] · [funkcia], [organizácia]`.

Pod tým navy pás: `Prípadová štúdia: príprava kompletnej GDPR dokumentácie` /
`Privacy policy, záznamy o spracovateľských činnostiach, sprostredkovateľské
zmluvy, balančné testy a DPIA — od auditu až po dokumenty pripravené na
kontrolu.` / `Čítať prípadovú štúdiu →`

Dobrá správa: citáty nie sú vymyslené, sú to zadania pre klientku. Zlá správa:
hviezdičky sú vyplnené na plný počet už teraz, nad prázdnym citátom.

### Strana 11 — Časté otázky

Nadpis `Časté otázky`, tri karty:

`Školenie vs preškolenie?` / `Prvé školenie je kompletný kurz (6 modulov) pre
nových DPO, ktorí ešte nemajú osvedčenie. Preškolenie je jednodňová
aktualizácia pre DPO, ktorí už kurz absolvovali a potrebujú obnoviť osvedčenie
podľa aktuálnej legislatívy.`

`Online alebo prezenčne?` / `Kurzy prebiehajú formou samoštúdia vlastným
tempom a živých online workshopov. Firemné školenia môžeme realizovať aj
priamo u vás alebo online podľa vašich potrieb.`

`Dostaneme osvedčenie? Čo ak termín nevyhovuje?` / `Áno, každý absolvent získa
osvedčenie. Pri ročnom preškolení sa obnovuje každý rok. Ak vám termín
nevyhovuje, bezplatne ho presunieme — rezervácia vás k ničomu nezaväzuje.`

### Strana 12 — Záverečné CTA

Nadpis `Váš DPO si zaslúži istotu`, pod ním `Rezervujte termín online —
potvrdenie príde okamžite na e-mail.` a `Konzultácia zadarmo, 15 minút, bez
záväzkov a bez predajného nátlaku.`

Vpravo fotografia ženy v obleku, ktorá **nie je ani Zuzana Motúzová, ani
nikto z kancelárie** — je to stocková fotografia. Formulár v tejto sekcii
nie je vôbec.

### Strany 13–15

Strana 13 obsahuje len dekoratívne ružové plochy bez textu, strany 14 a 15 sú
prázdne. Návrh teda nie je dokončený.

---

## 8. Konverzné hodnotenie po sekciách

### Hero (strana 1)

Nadpis `Keď príde kontrola, váš DPO nesmie hádať.` je dobrý a nechal by som ho
ako základ. Pomenúva moment, keď problém bolí, je konkrétny a nie je to slogan.

Podnadpis robí svoju prácu — povie, že školia advokáti, ktorí klientov pri
kontrole reálne zastupujú. To je diferenciátor a je povedaný priamo.

Dvojica CTA je postavená správne a veta `Bez záväzkov, bez predajného nátlaku`
znižuje bariéru u človeka, ktorý sa bojí obtelefonovávania.

Čo nefunguje: hviezdičky bez zdroja sú hneď navrchu, čiže prvá vec, ktorú
compliance riaditeľ uvidí, je nedoložené tvrdenie. Nadpis nepovie, čo sa
predáva — slovo „školenie" v ňom nie je, celú záťaž nesie menší podnadpis.
V hero nie je cena, rozsah ani forma, hoci cieľová skupina schvaľuje rozpočet
a najrýchlejší kvalifikátor je cena „od" a počet hodín. Fotografia je
z vylúčeného registra a je orezaná tak, že Pavel Lacko je z polovice mimo
záber. Verzálky v CTA sa čítajú pomalšie a pôsobia akčne.

### Trust bar (strana 2)

Nadpis `Ochranu osobných údajov neriešime príležitostne. Riešime ju každý deň.`
je najlepšia veta celého návrhu. Odpovedá presne na obavu „nie je to len
vedľajšia agenda?" a robí to bez superlatívu.

Nefunguje pomer signálu k šumu. Zo štyroch čísel je jedno neplatné (`6`
modulov) a jedno nie je štatistika, ale popis ponuky (`1 : 1`). Zostávajú dva
reálne údaje. Päť prázdnych rámov na logá klientov je horšie než žiadne —
prázdne miesto na stránke signalizuje nedokončenosť a zároveň vytvára tlak
zaplniť ich menami, ktoré sa bez súhlasu zverejniť nesmú.

### Čo potrebujete? (strana 3)

Segmentácia hneď za trust barom je správny inštinkt — návštevník sa zaradí
a nemusí čítať všetko. Tri vstupné body sú akurát, viac by paralyzovalo.

Nefunguje, že segmentácia nesedí s produktom. Delí na jednotlivca, firmu
a dlhodobú podporu, ale záväzné balíčky delia inak: podľa toho, či je DPO nový,
skúsený, alebo či firma chce oboje. To je iná os a je pre kupujúceho
relevantnejšia — konateľ nerieši „som jednotlivec", rieši „mám nového DPO".
Túto sekciu treba prekresliť na os z docx.

### Prečo práve my? (strana 4)

Obsahovo najsilnejšia sekcia. Šesť dlaždíc, každá povie jednu konkrétnu vec,
žiadna nie je vata. `Dokumentácia, ktorú viete použiť hneď v pondelok ráno`
je konkrétnosť pred chytrosťou presne tak, ako zadanie žiada. Šiesta dlaždica
`Povieme vám aj to, keď kurz nepotrebujete` je najlepší signál dôvery na celej
stránke — kto povie „možno nás nepotrebujete", vyzerá dôveryhodnejšie než kto
sľubuje.

Slabé miesto je forma: šesť rovnakých dlaždíc v mriežke 3 × 2 na navy pozadí,
kde tri sú odrezané pravým okrajom. A štyri z tých šiestich sú postavené ako
protiklad voči niekomu inému — `nie školitelia`, `nie modelové`, `nie šablóny
z internetu`. Vecne to je pravda, ale je to porovnávanie a pri advokátovi je
to rizikový register. To isté sa dá povedať pozitívne: `Kurz vedie advokát,
ktorý v tej istej veci zastupuje klienta pred úradom.`

### Ako to prebieha (strana 7)

Tri kroky sú tu namieste, je to reálna sekvencia a číslovanie je opodstatnené.
Krok 1 dobre znižuje bariéru.

Nefunguje, že proces opisuje iný produkt, než aký sa predáva. `Samoštúdium
vlastným tempom` v docx nie je. A ako proces je to nedostatočné — chýba, čo sa
deje medzi rezerváciou a kurzom, kto sa ozve, ako prebieha fakturácia. Zadanie
žiada časovú os od dopytu po osvedčenie, toto sú tri kroky bez času.

Tri veľké farebné bloky nad textom sú prázdne plochy bez obsahu. Buď tam patrí
skutočný vizuál, alebo ich treba zrušiť.

### Mesačná podpora (strana 8)

Karty sú čitateľné a stupňovanie `všetko z Basic` → `všetko zo Standardu` je
štandardný a funkčný vzorec. Reakčné lehoty `do 24 hodín` a `do 4 hodín` sú
konkrétne a merateľné, čo je dobre.

Nefunguje umiestnenie a rámovanie. Eyebrow `PREČO NÁM VERIŤ?` je skopírovaný
zo strany 2 a nemá tu žiadny zmysel. Nadpis `GDPR nekončí osvedčením.` je
dobrý, ale sekcia prichádza hneď po cenníku školení, takže na stránke sú dva
cenníky za sebou a návštevník nevie, čo si vlastne kupuje. Ak sa produkt
potvrdí, patrí až za referencie a musí byť vizuálne odlíšený od školení.

### Referencie (strana 10)

Nadpis `Nehovoríme, že to funguje. Hovoria to klienti.` je dobrý a zadania pre
citáty sú premyslené — druhé si dokonca vyžaduje číslo, čo je správne.

Nefunguje, že sekcia je prázdna a pritom už má vyplnené hviezdičky. Ak
referencie nebudú, sekciu treba zrušiť, nie nechať skelet. Formát podpisu
`[Meno a priezvisko] · [funkcia], [organizácia]` navyše predpokladá menné
referencie; pri advokátskej kancelárii treba pripraviť aj anonymizovanú
alternatívu.

### FAQ (strana 11)

Tri otázky pokrývajú tri reálne obavy a odpoveď o presune termínu dobre
znižuje riziko rezervácie.

Nefunguje rozsah ani forma. Zadanie žiada minimálne desať otázok s dlhými
vecnými odpoveďami — tu sú tri krátke. Prvá otázka má podľa zadania riešiť
výber balíčka, tu rieši rozdiel medzi produktmi, ktoré už neplatia. Tretia
karta spája dve nesúvisiace otázky do jednej. A forma troch kariet fyzicky
neumožní dlhé odpovede; toto musí byť rozbaliteľný zoznam.

### Záverečné CTA (strana 12)

Zopakovanie `bez záväzkov a bez predajného nátlaku` na konci je správne.

Nefunguje to podstatné: **nie je tam formulár.** Zadanie žiada polia meno,
firma, e-mail, telefón, počet DPO, preferovaný formát a správu, s validáciou
a so vzorovou informáciou o spracúvaní osobných údajov. Tu je len text.
Na stránke GDPR špecialistov je práve formulár prvá vec, ktorú odborník
posudzuje — a v návrhu neexistuje.

Druhý problém je fotografia. Je to stocková fotografia ženy v obleku, ktorá
v kancelárii nepracuje. Na stránke advokátskej kancelárie to je riziko: čitateľ
si ju spojí s tímom. Musí ísť von a nahradiť ju reálnym portrétom, alebo
ničím.

---

## 9. Kolízie s pravidlami právneho marketingu

Zoradené podľa vážnosti.

| Prvok                                                                                      | Strana   | Problém                                                                                                                                                     |
| ------------------------------------------------------------------------------------------ | -------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `★★★★★`                                                                                    | 1, 10    | Hodnotenie bez zdroja, počtu a platformy, na strane 10 dokonca nad prázdnym citátom. Reklama advokáta musí byť vecná a nesmie zavádzať. Von, alebo doložiť. |
| stocková fotografia osoby v obleku                                                         | 12       | Osoba, ktorá v kancelárii nepracuje, v pozícii, kde ju čitateľ spojí s tímom.                                                                               |
| `Najobľúbenejší`                                                                           | 8        | Superlatív o popularite bez údajov.                                                                                                                         |
| `VÝBER KLIENTOV A PARTNEROV` + päť prázdnych rámov                                         | 2        | Povinnosť mlčanlivosti. Logá ani mená klientov bez výslovného súhlasu každého z nich.                                                                       |
| `[Meno a priezvisko] · [funkcia], [organizácia]`                                           | 10       | To isté — formát predpokladá menné referencie.                                                                                                              |
| `Pri ročnom preškolení sa osvedčenie každý rok obnovuje`                                   | 7        | Implikuje platnosť a exspiráciu osvedčenia a ročnú periodicitu. GDPR frekvenciu neurčuje, čl. 38 ods. 2 hovorí o podpore DPO v udržiavaní znalostí.         |
| `potrebujú obnoviť osvedčenie podľa aktuálnej legislatívy`                                 | 11       | To isté tvrdenie inými slovami.                                                                                                                             |
| `Ročné preškolenie` v navigácii                                                            | 1        | Periodicita ako danosť.                                                                                                                                     |
| `Učia advokáti, nie školitelia`, `Reálne prípady, nie modelové`, `Nie šablóny z internetu` | 4        | Porovnávanie znevažujúce nepomenovaných konkurentov. Preformulovať pozitívne.                                                                               |
| `6` (modulov)                                                                              | 2, 3, 11 | Neplatný údaj z neaktuálnej ponuky.                                                                                                                         |
| `15+`                                                                                      | 2        | Doložiteľné (2011 → 2026), ale nech to klientka potvrdí písomne.                                                                                            |
| `1 : 1` ako štatistika                                                                     | 2        | Nie je to číslo o kancelárii, je to popis ponuky.                                                                                                           |
| `Support`                                                                                  | 1        | Anglicizmus v slovenskej navigácii advokátskej kancelárie.                                                                                                  |
| `KONZULTÁCIA ZADARMO` dvakrát                                                              | 1        | „Zadarmo" v navigácii aj v hero tlačí do zľavovej polohy.                                                                                                   |
| `zažili z prvej ruky`                                                                      | 1        | Hovorové. Vecnejšie „zastupujú klientov pri kontrolách ÚOOÚ".                                                                                               |
| `Advokát poruke`                                                                           | 3        | Preklep, správne „po ruke".                                                                                                                                 |
| `Dve cesty` nad tromi kartami                                                              | 5        | Vnútorný rozpor v texte.                                                                                                                                    |

### Terminológia — dobrá správa

Slová **„certifikát" ani „certifikácia" sa v prečítaných stranách nevyskytujú
ani raz.** Návrh dôsledne používa `osvedčenie`, na strane 5 dokonca v správnej
plnej podobe `osvedčením o absolvovaní`. To je v poriadku a treba to tak
zachovať.

Zvyšné strany 16–27 a workshop treba ešte prejsť cielene, kým to potvrdím
s konečnou platnosťou.

Garantované výsledky som nenašiel. Formulácie sú opatrné, `Povieme vám aj to,
keď kurz nepotrebujete` ide priam proti sľubovaniu. Jediné, čo sa sľubu blíži,
je `Váš DPO si zaslúži istotu` — „istota" je vágna a v kontexte kontroly by sa
mohla čítať ako prísľub obstátia. Odporúčam preformulovať.

---

## 10. Export SVG — neoverené

**Nepotvrdené ani nevyvrátené.** Ponuku `Zdieľať → Stiahnuť → Typ súboru` sa
pre tento účet nepodarilo odčítať; prehliadač sa v tomto behu nedostal za
opakované zobrazovanie strany 1.

Preto tu **nepíšem postup, ktorý som nevidel**. Vecné zhrnutie stavu:

- SVG je v Canve viazané na platený plán (Pro / Teams). Účet ho teda mať môže,
  ale aj nemusí.
- Aj keby SVG export bol dostupný, exportuje sa **celá strana**, nie jeden
  objekt. Logo by prišlo v jednom súbore s hero fotografiou, nadpisom
  a ružovými plochami, a bolo by ho treba v editore vyseparovať.
- Písmo v texte loga sa pri SVG exporte z Canvy prevádza na krivky. Živý text
  by sme aj tak nedostali.

Odporúčanie sa tým nemení: **vypýtať si vektor od klientky.** Kancelária logo
niekde v origináli má a je to jednorazová prosba. Aj úspešný SVG export
z Canvy by dal len separovanú kópiu neznámej vernosti — pri tenkej bielej
linke vtáka v značke je to rozdiel, ktorý sa uvidí.

Otázku dostupnosti SVG držím ako otvorenú, nie ako uzavretú negatívnu
odpoveď.

---

## 11. Čo z Canvy zostáva neprečítané

| Chýba                      | Prečo na tom záleží                                                                                    |
| -------------------------- | ------------------------------------------------------------------------------------------------------ |
| Landing page, strana 6     | „Obsah kurzu — Šesť modulov". Cenníkovo neplatná, ale **témy modulov** sú podklad pre sekciu Metodika. |
| Landing page, strana 9     | „Lektor". Jediná sekcia o Motúzovej a Lackovi — dôležitá pre časť O školiteľoch.                       |
| Landing page, strany 18–27 | Desať strán, prehliadač ich nevykreslí — technická blokáda, viď nižšie.                                |
| Workshop `DAFFjAQWLiU`     | 56 strán. Čistejšie vyhotovenie loga a obsahové bloky o moduloch kurzu.                                |

Zo strany 6 sa z náhľadu dá prečítať nadpis `Šesť modulov. Žiadna teória
navyše.` a šesť dlaždíc na navy pozadí, ale názvy modulov sú v náhľade
nečitateľné. Neuvádzam ich, aby sa neprebrali nesprávne — potrebujeme plný
screenshot.

Zo strany 9 je z náhľadu čitateľné len slovo `Lektor` a karta s fotografiou.

### Strany 18–27 sa nedajú zachytiť

Pri skoku za stranu 17 Canva v tomto prehliadači prestane vykresľovať obsah —
plátno zostane prázdne, hoci dáta strany sú načítané. Skúšal sa skok cez pole
na číslo strany, kliknutie na náhľad aj priame kliknutie cez CDP. Panel
náhľadov navyše pre strany nad 17 neponúka klikateľné položky.

Ak sa to nepodarí obísť postupným prechádzaním po jednej strane, tieto strany
si vyžiadame od klientky — buď ako PDF export celého návrhu, alebo stačí
potvrdenie, že za stranou 17 už nie je nič podstatné. Podľa toho, že strany 13
až 15 sú prázdne, je druhá možnosť pravdepodobná, ale **nepredpokladám to** —
môžu tam byť pätička, obchodné podmienky alebo varianty sekcií.

**Rozsah je pritom väčší, než sa zdalo.** Návrh má 27 strán, ale sekcií je
podstatne menej — strana 5 sa v zábere zopakovala, strany 13 až 15 sú
dekoratívne alebo prázdne. Reálna štruktúra je dvanásť sekcií plus nedokončený
zvyšok.
