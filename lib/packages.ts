/**
 * Balíčky školení DPO — jediný zdroj pravdy pre cenníkovú sekciu.
 *
 * Zdroj: `Balicky FIRMY.docx` (AK Motúzová, revízia 15, 26. 7. 2026).
 * Dokument klient označil za aktuálny; podklady v Canve sú staré.
 *
 * Texty nie sú prevzaté doslovne všade — formulácie, ktoré porušujú právny
 * rámec z `DESIGN.md` §10, sú prepísané a každý taký zásah je označený
 * komentárom `PRÁVNY ZÁSAH`.
 *
 * Základné pravidlo pre tento súbor: **zobrazuje sa len to, čo klientka
 * napísala.** Nič sa nedopočítava, nezaokrúhľuje ani nedopĺňa odhadom. Kde
 * dokument mlčí alebo si protirečí, je hodnota `null` s `TODO: {{ DOPLNIŤ }}`
 * a s otázkou, ktorú treba klientke položiť.
 *
 * Ceny „od" (`priceFrom`) = najnižšia reálne dostupná cena z cenníka
 * (online forma). Odporúčané sumy v závere docx (2 000 / 1 000 EUR) sú nižšie
 * než cenník — na stránke platia cenníkové sumy (DESIGN.md §10 bod 6).
 *
 * Otvorené body čakajúce na odpoveď klientky:
 *
 * 1. Firemný balíček 4 997 / 5 997 EUR je v docx uvedený „za firmu", počet
 *    osôb dokument neuvádza. Neuvádzame ho teda ani my. Viď `CORPORATE_BUNDLE`.
 * 2. Porovnávacie ceny a úspory pri DPO PROFESSIONAL PATH (3 000 / 3 750 EUR
 *    za samostatné objednanie, úspora 400 / 500 EUR) nesedia s cenníkom
 *    v tom istom dokumente. Na stránku nejdú, kým to klientka nepotvrdí.
 */

export type DeliveryMode = "online" | "onsite";

export type PriceUnit = "person" | "company";

export type Price = {
  amount: number;
  currency: "EUR";
  /** Všetky ceny v docx sú uvedené bez DPH. */
  vatIncluded: false;
  unit: PriceUnit;
};

export type PackagePrice = {
  online: Price | null;
  onsite: Price | null;
  /**
   * Podmienka ceny. Zobrazuje sa priamo pri cene, nie v pätičke
   * (DESIGN.md §10 bod 6).
   */
  condition: string;
};

/** Časť programu — samostatné školenie v rámci balíčka. */
export type PackagePart = {
  name: string;
  hours: number;
  /** Kedy sa časť koná, ak to docx určuje. */
  timing: string | null;
  includes: string[];
};

/** Následná konzultácia zahrnutá v cene balíčka. */
export type IncludedConsultation = {
  /** Rozsah v minútach. */
  minutes: number;
  /** Lehota na čerpanie, ak je určená. */
  deadline: string | null;
  description: string;
  topics: string[] | null;
  /** Ohraničenie rozsahu — musí byť na stránke viditeľné. */
  disclaimer: string | null;
};

/** Zľava na nadväzujúce preškolenie. */
export type FollowUpDiscount = {
  percent: number;
  condition: string;
};

export type LegalBasis = {
  /** Mono značka pre citačnú os, napr. „čl. 38 ods. 2 GDPR". */
  citation: string;
  text: string;
};

export type TrainingPackage = {
  id: string;
  name: string;
  /** Podnadpis pod názvom balíčka. */
  tagline: string;
  /** „Pre koho" — druhý riadok karty. */
  audience: string;
  /** Rozvedenie cieľovej skupiny, ak ho docx uvádza. */
  audienceDetail: string[] | null;
  /** Označenie odporúčaného balíčka. */
  badge: string | null;
  recommended: boolean;
  price: PackagePrice;
  /**
   * Cena „od" na karte — najnižšia reálne dostupná cena z cenníka
   * (online forma). Podmienka formy je v `price.condition`.
   */
  priceFrom: Price | null;
  scope: {
    /** Rozsah tak, ako sa napíše na kartu. */
    label: string;
    totalHours: number;
    parts: PackagePart[];
  };
  /** Spoločné položky balíčka, ktoré nepatria k jednej časti programu. */
  includes: string[];
  consultation: IncludedConsultation | null;
  /** „Výsledok" — čo účastník alebo organizácia z balíčka má. */
  outcome: string[];
  followUpDiscount: FollowUpDiscount | null;
  legalBasis: LegalBasis | null;
  cta: { label: string; href: string };
  notes: string[];
  /** Docx rozlišuje online a prezenčnú formu pri všetkých balíčkoch. */
  deliveryModes: DeliveryMode[];
};

/** Cieľ všetkých CTA — kotva kontaktného formulára. */
const CTA_HREF = "#na-mieru";

export const PACKAGES: TrainingPackage[] = [
  {
    id: "dpo-start",
    name: "DPO START",
    tagline: "Vstupné školenie pre nového DPO",
    audience: "Pre nového DPO, ktorý potrebuje komplexné vstupné vyškolenie.",
    // PRÁVNY ZÁSAH: docx uvádza „ktorých kvalitne zaškolíme za Vás".
    // Hodnotiace „kvalitne" je nepodložené sebahodnotenie (DESIGN.md §10 bod 3).
    audienceDetail: [
      "Balíček je určený pre Vašich nových DPO, ktorých zaškolíme za Vás.",
    ],
    badge: null,
    recommended: false,
    price: {
      online: {
        amount: 2247,
        currency: "EUR",
        vatIncluded: false,
        unit: "person",
      },
      onsite: {
        amount: 2747,
        currency: "EUR",
        vatIncluded: false,
        unit: "person",
      },
      condition:
        "Cena „od“ je za online formu — najnižšia dostupná cena. Cena za jednu osobu, bez DPH. Líši sa podľa formy školenia.",
    },
    // Cena „od" = online z cenníka (2 247 EUR). Odporúčanie docx „od 2 000"
    // nie je reálne dostupná ponuka — na stránke nepoužívame.
    priceFrom: {
      amount: 2247,
      currency: "EUR",
      vatIncluded: false,
      unit: "person",
    },
    scope: {
      label: "16 hodín",
      totalHours: 16,
      parts: [
        {
          name: "DPO START",
          hours: 16,
          timing: null,
          includes: [
            "komplexné odborné školenie DPO v rozsahu 16 hodín",
            "právnu aj bezpečnostnú časť pre DPO",
            "praktické prípady a modelové situácie",
            "prípadovú štúdiu riešenia incidentu",
            "záverečný test",
          ],
        },
      ],
    },
    includes: ["potvrdenie o absolvovaní školenia", "študijné materiály"],
    consultation: {
      minutes: 60,
      deadline: "do 30 dní po školení",
      description:
        "Možnosť konzultácie s ktorýmkoľvek školiteľom v rozsahu 1 hodiny do 30 dní po školení.",
      topics: null,
      disclaimer: null,
    },
    outcome: [
      "Účastník získa základné právne, procesné a bezpečnostné znalosti potrebné na začatie výkonu funkcie DPO.",
    ],
    followUpDiscount: null,
    legalBasis: null,
    cta: { label: "Vyškoliť nového DPO", href: CTA_HREF },
    notes: [],
    deliveryModes: ["online", "onsite"],
  },
  {
    id: "dpo-update",
    name: "DPO UPDATE",
    // PRÁVNY ZÁSAH: docx má podnadpis „preškolenie tak, ako vyžaduje GDPR".
    // GDPR frekvenciu preškolenia neurčuje (DESIGN.md §10 bod 4).
    tagline: "Pravidelná aktualizácia znalostí DPO",
    audience:
      "Pre skúseného DPO, ktorý potrebuje každoročnú aktualizáciu znalostí.",
    audienceDetail: null,
    badge: null,
    recommended: false,
    price: {
      online: {
        amount: 1547,
        currency: "EUR",
        vatIncluded: false,
        unit: "person",
      },
      onsite: {
        amount: 1747,
        currency: "EUR",
        vatIncluded: false,
        unit: "person",
      },
      condition:
        "Cena „od“ je za online formu — najnižšia dostupná cena. Cena za jednu osobu, bez DPH. Líši sa podľa formy školenia.",
    },
    // Cena „od" = online z cenníka (1 547 EUR). Odporúčanie docx „od 1 000"
    // nie je reálne dostupná ponuka — na stránke nepoužívame.
    priceFrom: {
      amount: 1547,
      currency: "EUR",
      vatIncluded: false,
      unit: "person",
    },
    scope: {
      label: "8 hodín",
      totalHours: 8,
      parts: [
        {
          name: "DPO UPDATE",
          hours: 8,
          timing: null,
          includes: [
            // PRÁVNY ZÁSAH: docx uvádza „najnovšie výchytávky a čerstvé
            // novinky" — hovorový register a nepodložený superlatív.
            "preškolenie v rozsahu 8 hodín zamerané na aktuálne zmeny v právnej úprave a praxi",
            "nové rozhodnutia Súdneho dvora EÚ a slovenských a zahraničných súdov",
            "rozhodnutia a usmernenia ÚOOÚ a dozorných orgánov v EÚ",
            "aktuálny vývoj v oblasti umelej inteligencie a jeho dopad na ochranu osobných údajov",
            "praktické prípady a modelové situácie",
            "prípadovú štúdiu s riešením aktuálneho problému alebo incidentu na základe zadania Vášho DPO",
            "priestor na otázky účastníkov z ich vlastnej praxe",
            "záverečný test orientovaný na praktické prípady",
          ],
        },
      ],
    },
    includes: ["potvrdenie o absolvovaní", "študijné materiály"],
    consultation: {
      minutes: 60,
      deadline: "do 30 dní po školení",
      description:
        "Konzultácie s ktorýmkoľvek školiteľom v rozsahu 1 hodiny do 30 dní po školení.",
      topics: null,
      disclaimer: null,
    },
    outcome: [
      "Účastník si aktualizuje svoje právne, procesné a bezpečnostné znalosti a získa prehľad o najdôležitejších zmenách, ktoré má ako DPO zohľadniť vo svojej organizácii.",
    ],
    followUpDiscount: {
      percent: 15,
      condition:
        "Na každé ďalšie preškolenie uhradené do 30 dní od skončenia predchádzajúceho preškolenia.",
    },
    // PRÁVNY ZÁSAH: docx tvrdí „GDPR určuje, že DPO sa má vzdelávať priebežne
    // a pravidelne obnovovať svoje znalosti a to aspoň 1x ročne." GDPR
    // frekvenciu neurčuje — čl. 38 ods. 2 hovorí o povinnosti prevádzkovateľa
    // podporovať DPO v udržiavaní odborných znalostí (DESIGN.md §10 bod 4).
    legalBasis: {
      citation: "čl. 38 ods. 2 GDPR",
      text: "Prevádzkovateľ je povinný podporovať zodpovednú osobu v udržiavaní jej odborných znalostí. Konkrétnu frekvenciu preškolenia GDPR neurčuje; pravidelnú aktualizáciu znalostí odporúčajú usmernenia k zodpovedným osobám.",
    },
    cta: { label: "Objednať aktualizačné školenie", href: CTA_HREF },
    notes: [],
    deliveryModes: ["online", "onsite"],
  },
  {
    id: "dpo-professional-path",
    name: "DPO PROFESSIONAL PATH",
    tagline: "Vstupné školenie a následný praktický follow-up",
    audience:
      "Pre firmu, ktorá chce DPO vyškoliť a následne overiť, ako dokáže získané vedomosti používať v praxi.",
    audienceDetail: [
      "Balíček je určený pre firmy, ktoré chcú svojich DPO nielen vyškoliť, ale aj zabezpečiť, aby získané vedomosti dokázali uplatňovať v praxi.",
      "Na oboch školeniach sa môžu zúčastniť všetci prihlásení DPO organizácie bez ohľadu na to, či ide o nového alebo skúsenejšieho DPO. Nový DPO získa potrebné vstupné vedomosti a skúsenejší DPO si ich zopakuje, aktualizuje a doplní.",
    ],
    // PRÁVNY ZÁSAH: zadanie aj docx označujú balíček ako „Najvýhodnejšie".
    // Je to superlatív bez preukázateľného základu — cenník ho navyše
    // nepotvrdzuje (DESIGN.md §10 bod 3).
    badge: "Odporúčame",
    recommended: true,
    price: {
      online: {
        amount: 2600,
        currency: "EUR",
        vatIncluded: false,
        unit: "person",
      },
      onsite: {
        amount: 3250,
        currency: "EUR",
        vatIncluded: false,
        unit: "person",
      },
      condition:
        "Cena „od“ je za online formu — najnižšia dostupná cena. Cena za jednu osobu, bez DPH. Zahŕňa účasť na vstupnom školení aj na následnom praktickom follow-upe. Líši sa podľa formy školenia.",
    },
    // Cena „od" = online z cenníka (2 600 EUR); zhoda s odporúčaním docx.
    priceFrom: {
      amount: 2600,
      currency: "EUR",
      vatIncluded: false,
      unit: "person",
    },
    scope: {
      label: "16 + 6 hodín a 90 minút konzultácie",
      totalHours: 22,
      parts: [
        {
          name: "Prvá časť — DPO START",
          hours: 16,
          timing: null,
          includes: [
            "komplexné odborné školenie DPO v rozsahu 16 hodín",
            "právnu aj bezpečnostnú časť pre DPO",
            "praktické prípady a modelové situácie",
            "prípadovú štúdiu riešenia incidentu",
            "záverečný test",
            "potvrdenie o absolvovaní školenia",
            "študijné materiály",
          ],
        },
        {
          name: "Druhá časť — DPO FOLLOW-UP",
          hours: 6,
          timing: "približne tri mesiace po vstupnom školení",
          includes: [
            "nadväzujúce praktické školenie v rozsahu 6 hodín",
            "zopakovanie a upevnenie najdôležitejších vedomostí",
            "aktualizáciu právnych a bezpečnostných tém",
            "rozbor problémov, s ktorými sa DPO stretli počas prvých mesiacov výkonu funkcie",
            "riešenie konkrétnych situácií z praxe účastníkov",
            "praktický workshop zameraný na vybavovanie žiadostí dotknutých osôb",
            "simuláciu riešenia porušenia ochrany osobných údajov",
            "identifikáciu nedostatkov v interných GDPR procesoch",
            "odporúčania na ďalší odborný rozvoj DPO",
            "aktualizované študijné materiály",
          ],
        },
      ],
    },
    includes: [],
    consultation: {
      minutes: 90,
      deadline: null,
      description:
        "Balíček zahŕňa aj spoločnú konzultáciu školiteľov s DPO jednej organizácie v rozsahu 90 minút.",
      topics: [
        "nastavenie postavenia a úloh DPO",
        "spoluprácu DPO s vedením, právnym a IT oddelením",
        "interné GDPR procesy",
        "najčastejšie problémy pri výkone funkcie DPO",
        "plán činnosti DPO na nasledujúce obdobie",
      ],
      disclaimer:
        "Konzultácia nepredstavuje úplný GDPR audit ani komplexnú kontrolu dokumentácie organizácie.",
    },
    // PRÁVNY ZÁSAH: docx uvádza „naučí sa ich používať pri riešení reálnych
    // situácií" a „Firma zároveň získa istotu, že...". Oboje sľubuje výsledok
    // (DESIGN.md §10 bod 2).
    outcome: [
      "Účastník nezíska iba teoretické vedomosti potrebné na začatie výkonu funkcie DPO. Počas následného praktického školenia si ich upevní a precvičí ich použitie na reálnych situáciách vo svojej organizácii.",
      "Cieľom programu je, aby nový aj existujúci DPO pracovali s rovnakými informáciami, postupmi a štandardmi.",
    ],
    followUpDiscount: null,
    legalBasis: null,
    cta: { label: "Zabezpečiť komplexné vzdelávanie DPO", href: CTA_HREF },
    // TODO: {{ DOPLNIŤ }} — docx uvádza porovnanie so samostatným objednaním
    // (3 000 EUR online, 3 750 EUR prezenčne) a úsporu 400 / 500 EUR na osobu.
    // Tieto čísla nesedia s cenníkom v tom istom dokumente (START + UPDATE je
    // online 3 794 EUR, prezenčne 4 494 EUR) a druhou časťou programu je
    // FOLLOW-UP, nie UPDATE. Porovnávacie ceny nezverejňujeme, kým to klient
    // nevyjasní.
    notes: [],
    deliveryModes: ["online", "onsite"],
  },
];

/**
 * Firemný balíček DPO START + DPO UPDATE.
 *
 * Docx ho neuvádza medzi odporúčanou ponukou na landing page — sú tam len tri
 * balíčky vyššie. Držíme ho mimo `PACKAGES`, aby sa omylom nevykreslil ako
 * štvrtá karta, a zároveň mimo zabudnutia, lebo je súčasťou aktuálnej ponuky.
 *
 * Ceny sú prevzaté presne v znení dokumentu, teda „za firmu". Počet osôb docx
 * neuvádza a nedopĺňame ho.
 */
export const CORPORATE_BUNDLE = {
  id: "dpo-start-update-firemny",
  name: "DPO START + DPO UPDATE",
  tagline: "Spoločný balíček pre nových aj skúsených DPO",
  audience:
    "Balíček je určený pre firmy a organizácie, ktoré potrebujú súčasne:",
  audienceDetail: [
    "zaškoliť nového DPO",
    "aktualizovať znalosti existujúceho DPO",
    "alebo zabezpečiť jednotnú úroveň znalostí viacerých DPO v rámci organizácie",
  ],
  price: {
    online: {
      amount: 4997,
      currency: "EUR",
      vatIncluded: false,
      unit: "company",
    },
    onsite: {
      amount: 5997,
      currency: "EUR",
      vatIncluded: false,
      unit: "company",
    },
    condition: "Cena za firmu, bez DPH. Líši sa podľa formy školenia.",
  },
  scope: { label: "16 + 8 hodín", totalHours: 24 },
  /**
   * TODO: {{ DOPLNIŤ }} — pre koľko osôb cena platí.
   *
   * Docx hovorí „za firmu" a počet osôb neuvádza. Platí presne to, čo je
   * v dokumente, takže počet osôb neuvádzame ani my.
   *
   * Interná poznámka, ktorá sa **nesmie dostať do žiadneho zobrazovaného
   * textu**: z úspor deklarovaných v docx vychádzajú presne dve osoby
   * (2 × [2 247 + 1 547] − 4 997 = 2 591 EUR online, 2 × [2 747 + 1 747]
   * − 5 997 = 2 991 EUR prezenčne). Je to náš dopočet, nie tvrdenie klientky.
   * Slúži len ako podklad k otázke, nie ako údaj na stránku.
   *
   * Otázka pre klientku: koľko osôb je v cene 4 997 / 5 997 EUR za firmu?
   */
  participants: null as number | null,
  followUpDiscount: {
    percent: 15,
    condition:
      "Na pravidelné školenie DPO UPDATE na ďalší rok, ak ho organizácia objedná a uhradí do 30 dní od skončenia posledného preškolenia.",
  },
  /**
   * TODO: {{ DOPLNIŤ }} — deklarovaná zľava 35 % ani úspory 2 591 / 2 991 EUR
   * sa nezobrazujú. Vychádzajú len pri nepotvrdenom výklade na dve osoby,
   * a aj vtedy je zľava voči cenníku 34,1 % online a 33,3 % prezenčne.
   *
   * Otázka pre klientku je spoločná s `participants` — bez počtu osôb sa zľava
   * ani úspora nedá overiť, a teda ani uviesť.
   */
  discountPercent: null as number | null,
  onLandingPage: false,
} as const;

/** Balíček označený ako odporúčaný — najviac jeden. */
export const RECOMMENDED_PACKAGE =
  PACKAGES.find((pkg) => pkg.recommended) ?? null;
