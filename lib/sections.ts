/**
 * Manifest sekcií landing page — poradie, copy, kotvy.
 * Ceny / lektori / firma: import z packages / team / site, nie duplikát.
 */

import { PACKAGES } from "@/lib/packages";
import { LAW_FIRM } from "@/lib/site";
import { LECTURERS, OFFICE_TEAM } from "@/lib/team";

export type SectionId =
  | "nav"
  | "hero"
  | "trust"
  | "problem"
  | "bridge"
  | "why-law-firm"
  | "methodology"
  | "update"
  | "packages"
  | "comparison"
  | "stats"
  | "lecturers"
  | "process"
  | "testimonials"
  | "faq"
  | "contact-cta"
  | "footer";

export type Surface = "neutral-0" | "neutral-50" | "navy" | "bands";

export const NAV_LINKS = [
  { href: "#terminy", label: "Termíny" },
  { href: "#metodika", label: "Čo sa naučíte" },
  { href: "#lektori", label: "Lektori" },
  { href: "#faq", label: "FAQ" },
] as const;

export const NAV = {
  id: "nav" as const,
  order: 1,
  cta: { href: "#terminy", label: "Vybrať termín" },
  logo: {
    src: "/brand/logo.svg",
    alt: `${LAW_FIRM.shortName} — advokátska kancelária`,
    width: 280,
    height: 76,
  },
};

export const HERO = {
  id: "hero" as const,
  order: 2,
  surface: "neutral-0" as Surface,
  /** Semantické h1 — vizuálne malý eyebrow. */
  eyebrow: "Školenie GDPR pre zodpovedné osoby",
  /**
   * Desktop vizuálny nadpis (nie h1). Druhá veta ide do <em>.
   * Slovo „doložiť“ — magenta underline (cieľový screenshot).
   */
  titleDesktop:
    "Úrad oceňuje pripravenosť, ktorú viete doložiť. Naučia vás ju advokáti, ktorí pri kontrole stoja na vašej strane.",
  titleDesktopLead: "Úrad oceňuje pripravenosť, ktorú viete ",
  titleDesktopAccent: "doložiť",
  titleDesktopLeadEnd: ". ",
  titleDesktopEm:
    "Naučia vás ju advokáti, ktorí pri kontrole stoja na vašej strane.",
  /** Mobil <768 — dlhá desktop veta sa nezobrazuje (CSS, nie JS). */
  titleMobile: "Pripravenosť, ktorú Úrad uzná.",
  subtitle:
    "Zásada zodpovednosti od vás nežiada presvedčenie, ale dôkaz — vrátane preukázateľnej odbornej spôsobilosti zodpovednej osoby. Školíme DPO presne na to, čo Úrad pri kontrole reálne žiada vidieť, a odchádzate s dokladom, ktorý ide priamo do vašej dokumentácie.",
  /** Doplnok subhead — len mobile. */
  subtitleMobileExtra:
    "Vedú advokáti, ktorí klientov pri kontrolách ÚOOÚ SR zastupujú.",
  primaryCta: { href: "#terminy", label: "Vybrať termín školenia" },
  secondaryCta: {
    href: "#na-mieru",
    label: "Zostaviť školenie pre váš tím",
  },
  /**
   * Trust: plain text s interpunct ·, bez ikon.
   * Porovnávacie „nie …“ tóny zjemnené (právny marketing).
   */
  trustItems: [
    "Osvedčenie o absolvovaní ako doklad do dokumentácie",
    "Aktuálne k rozhodovacej praxi ÚOOÚ a usmerneniam EDPB",
    "Vedené advokátmi z dennej praxe kancelárie",
  ] as const,
  /**
   * Canva kompozit Motúzová & Lacko (2400×1200) — next/image quality 100, bez upscale.
   */
  photo: {
    src: "/brand/hero-motuzova-lacko.png",
    width: 2400,
    height: 1200,
    alt: "Zuzana Motúzová a Pavel Lacko, partneri advokátskej kancelárie Motúzová & Lacko",
  },
};

export const TRUST = {
  id: "trust" as const,
  order: 3,
  surface: "neutral-50" as Surface,
  /**
   * Lead pod hero — nie H2 (SEO H2 štruktúra začína sekciou Problem).
   * Musí prirodzene obsahovať „školenie GDPR" aj „zodpovedná osoba".
   */
  lead: "Školenie GDPR pre zodpovednú osobu vedieme ako súčasť každodennej advokátskej praxe — nie ako jednorazový produkt mimo spisov a kontrol.",
  signals: [
    {
      icon: "building" as const,
      label: `Od ${LAW_FIRM.foundedYear}`,
      text: "Advokátska prax Motúzová & Lacko. GDPR je súčasť dennej agendy.",
    },
    {
      icon: "scale" as const,
      label: "Kontroly ÚOOÚ",
      text: "Klientov zastupujeme aj počas kontroly úradu — nie len pred ňou.",
    },
    {
      icon: "file-pen" as const,
      label: "Spisy, nie šablóny",
      text: "Dokumentáciu píšeme. Incidenty riešime. Postupy skúšame v praxi.",
    },
  ],
};

export const PROBLEM = {
  id: "problem" as const,
  order: 4,
  surface: "neutral-50" as Surface,
  eyebrow: "Cieľová skupina",
  title: "Pre koho je školenie GDPR určené",
  subtitle:
    "Pre zodpovednú osobu a organizáciu, ktoré potrebujú postup — nie prezentáciu. Toto sú situácie, v ktorých sa rozhoduje. Každá má predpis. Každá má lehotu. Každá vyžaduje jasný krok.",
  signatureAxis: "vertical" as const,
  situations: [
    {
      icon: "scale" as const,
      title: "Kontrola ÚOOÚ alebo výzva na podklady",
      text: "Úrad žiada vysvetlenia, výpisy zo spracúvaní, internú dokumentáciu. DPO musí vedieť, čo predložiť — a v akej lehote.",
      citation: "čl. 58 GDPR",
    },
    {
      icon: "siren" as const,
      title: "Ohlásenie porušenia ochrany údajov",
      text: "Od zistenia incidentu beží čas. Bez postupu sa stráca. S postupom sa rozhoduje.",
      citation: "čl. 33 GDPR",
    },
    {
      icon: "user-round-search" as const,
      title: "Žiadosti dotknutých osôb",
      text: "Prístup, výmaz, námietka, prenositeľnosť. Každá žiadosť má vlastné podmienky a lehoty.",
      citation: "čl. 12–22 GDPR",
    },
    {
      icon: "file-search" as const,
      title: "Posúdenie vplyvu na ochranu údajov",
      text: "Pri rizikových spracúvaniach treba DPIA skôr, než sa systém alebo proces spustí.",
      citation: "čl. 35 GDPR",
    },
    {
      icon: "badge-check" as const,
      title: "Vymenovanie a postavenie DPO",
      text: "Kedy je vymenovanie povinné. Aké sú úlohy. Ako má byť DPO nezávislý voči vedeniu.",
      citation: "čl. 37–39 GDPR",
    },
    {
      icon: "handshake" as const,
      title: "Dodávatelia a sprostredkovatelia",
      text: "Zmluvy, pokyny, kontroly. Voči tým, ktorí spracúvajú údaje v mene organizácie.",
      citation: "čl. 28 GDPR",
    },
    {
      icon: "cpu" as const,
      title: "Nové spracúvania a nástroje s AI",
      text: "Bez posúdenia rizík a právneho základu vzniká slepá škvrna. Compliance ju nemôže nechať.",
      citation: "čl. 5 a 6 GDPR",
      note: "Sankcie podľa čl. 83 GDPR sa na stránke spomínajú raz — v FAQ.",
    },
  ],
};

export const BRIDGE = {
  id: "bridge" as const,
  order: 5,
  surface: "neutral-50" as Surface,
  text: "Od pomenovania rizika k praxi kancelárie, ktorá dokumentáciu píše a pri kontrole zastupuje.",
};

export const WHY_LAW_FIRM = {
  id: "why-law-firm" as const,
  order: 6,
  surface: "navy" as Surface,
  anchor: "preco",
  eyebrow: "Prečo Motúzová & Lacko",
  title: "Školí ten, kto GDPR praktizuje.",
  subtitle:
    "Kurz vedú advokáti z praxe. So spismi. S kontrolami. S dokumentáciou, ktorú sami pripravujú.",
  tiles: [
    {
      icon: "scale" as const,
      title: "Advokát pred úradom",
      text: "Kurz vedie advokát, ktorý klientov pred dozorným orgánom aj zastupuje.",
    },
    {
      icon: "folder-open" as const,
      title: "Anonymizované spisy",
      text: "Incidenty, žiadosti, kontroly — z reálnych prípadov. Bez mien klientov.",
    },
    {
      icon: "file-text" as const,
      title: "Vzory použiteľné hneď",
      text: "Študijné materiály a vzory dokumentácie. Pripravené na použitie po školení.",
    },
    {
      icon: "book-open" as const,
      title: "Obsah podľa praxe úradov",
      text: "Aktualizujeme podľa rozhodnutí ÚOOÚ, EDPB a súdov.",
    },
  ],
  aside: {
    text: "Povieme vám aj to, keď kurz nepotrebujete.",
    href: "#na-mieru",
  },
};

export const METHODOLOGY = {
  id: "methodology" as const,
  order: 7,
  surface: "navy" as Surface,
  anchor: "metodika",
  eyebrow: "Program",
  title: "Čo sa na školení naučíte",
  subtitle:
    "Od vstupného školenia po praktický follow-up. Tri rozsahy, jasné hodiny — programy z cenníka, nie marketingové „moduly“.",
  signatureAxis: "marks" as const,
  steps: [
    {
      icon: "graduation-cap" as const,
      mark: "16 h",
      title: "Vstupné školenie DPO START",
      text: "Právna aj bezpečnostná časť. Praktické prípady. Prípadová štúdia incidentu. Záverečný test.",
    },
    {
      icon: "refresh-cw" as const,
      mark: "6 h",
      title: "Praktický follow-up",
      text: "V DPO PROFESSIONAL PATH — približne tri mesiace po vstupe. Upevnenie na situáciách z praxe účastníkov.",
    },
    {
      icon: "messages-square" as const,
      mark: "90 min",
      title: "Spoločná konzultácia",
      text: "V PROFESSIONAL PATH: školitelia s DPO jednej organizácie. Nie je to úplný GDPR audit organizácie.",
    },
  ],
  legalNote: PACKAGES.find((p) => p.id === "dpo-update")?.legalBasis ?? null,
};

export const PACKAGES_SECTION = {
  id: "packages" as const,
  order: 8,
  surface: "neutral-0" as Surface,
  /** Kotva CTA hero — termíny a ceny. */
  anchor: "terminy",
  /** Alias pre staršie odkazy #balicky. */
  aliasAnchors: ["balicky"] as const,
  eyebrow: "Balíčky",
  title: "Termíny a ceny školení",
  subtitle:
    "Tri programy podľa toho, kde váš DPO stojí. Ceny bez DPH. Online alebo prezenčne — obsah je rovnaký, líši sa cena.",
  packageIds: PACKAGES.map((p) => p.id),
  vatNote: "* Ceny bez DPH.",
};

/** Aktualizačné školenie — H2 medzi metodikou a termínmi. */
export const UPDATE_SECTION = {
  id: "update" as const,
  order: 7.5,
  surface: "neutral-50" as Surface,
  anchor: "aktualizacne",
  eyebrow: "DPO UPDATE",
  title: "Aktualizačné školenie GDPR pre zodpovedné osoby",
  subtitle:
    "Pre skúseného DPO, ktorý potrebuje aktualizáciu znalostí podľa rozhodovacej praxe a usmernení — nie všeobecný refresh bez spisu.",
  packageId: "dpo-update" as const,
};

export const COMPARISON = {
  id: "comparison" as const,
  order: 9,
  surface: "neutral-0" as Surface,
  anchor: "porovnanie",
  eyebrow: "Porovnanie",
  title: "Čo je v ktorom balíčku.",
  subtitle: "Rozsah, konzultácia, materiály, výsledok — vedľa seba.",
};

export const STATS = {
  id: "stats" as const,
  order: 10,
  surface: "neutral-50" as Surface,
  eyebrow: "Údaje",
  title: "Čísla, ktoré vieme doložiť.",
  subtitle:
    "Len overiteľné hodnoty z cenníka a z údajov kancelárie — bez marketingových štatistík bez zdroja.",
  items: [
    {
      value: String(LAW_FIRM.foundedYear),
      label: "rok založenia kancelárie",
      icon: "building" as const,
    },
    {
      value: "16 + 6 h",
      label: "rozsah DPO PROFESSIONAL PATH",
      icon: "graduation-cap" as const,
    },
    {
      value: "90 min",
      label: "konzultácia v PROFESSIONAL PATH",
      icon: "messages-square" as const,
    },
    {
      value: String(PACKAGES.length),
      label: "programy DPO v ponuke",
      icon: "file-text" as const,
    },
  ],
};

export const LECTURERS_SECTION = {
  id: "lecturers" as const,
  order: 11,
  surface: "neutral-0" as Surface,
  anchor: "lektori",
  eyebrow: "Lektori & tím",
  title: "Kto stojí za GDPR Akadémiou",
  subtitle:
    "Školenie DPO vedú partneri kancelárie. Pri online prezentácii a agende ich dopĺňa tím Motúzová & Lacko.",
  groups: [
    {
      id: "lecturers",
      title: "Lektori školenia",
      subtitle: null as string | null,
      members: LECTURERS,
    },
    {
      id: "office",
      title: "Tím kancelárie",
      subtitle: "Kolegovia, ktorí stoja za agendou a digitálnou prezentáciou kancelárie.",
      members: OFFICE_TEAM,
    },
  ],
  /** Spätná kompatibilita — všetci v poradí lektori → tím. */
  lecturers: LECTURERS,
  officeTeam: OFFICE_TEAM,
  bioPlaceholder: "{{ DOPLNIŤ }} — profil sa dopĺňa",
};

export const PROCESS = {
  id: "process" as const,
  order: 12,
  surface: "neutral-50" as Surface,
  anchor: "priebeh",
  eyebrow: "Ako to prebieha",
  title: "Od dopytu po osvedčenie o absolvovaní.",
  titleAccent: "osvedčenie",
  subtitle: "Šesť krokov. Bez skrytých etáp.",
  signatureAxis: "horizontal" as const,
  steps: [
    {
      n: "01",
      title: "Dopyt / konzultácia",
      text: "15 minút. Zistíme, ktorý program sedí vašej situácii.",
    },
    {
      n: "02",
      title: "Výber balíčka a formy",
      text: "Online alebo prezenčne. Počet účastníkov. Termínové preferencie.",
    },
    {
      n: "03",
      title: "Termín a potvrdenie",
      text: "Organizačné potvrdenie e-mailom po dohode strán.",
    },
    {
      n: "04",
      title: "Školenie",
      text: "V dohodnutom rozsahu podľa zvoleného balíčka.",
    },
    {
      n: "05",
      title: "Konzultácia v cene",
      text: "Ak balíček zahŕňa konzultáciu — v lehote uvedenej v popise.",
    },
    {
      n: "06",
      title: "Potvrdenie o absolvovaní",
      text: "Osvedčenie / potvrdenie o absolvovaní školenia — nie certifikácia podľa čl. 42 GDPR.",
    },
  ],
};

/**
 * Referencie — zapnuté ako prestížny blok s anonymizovanými placeholdermi.
 * Žiadne vymyslené mená, citáty ani hviezdičky bez zdroja.
 */
export const TESTIMONIALS = {
  id: "testimonials" as const,
  order: 13,
  enabled: true,
  surface: "neutral-0" as Surface,
  anchor: "referencie",
  eyebrow: "Referencie",
  title: "Nehovoríme, že to funguje. Hovoria to klienti.",
  subtitle:
    "Citáty zverejníme po súhlase. Dovtedy je tu štruktúra — bez falošných recenzií.",
  items: [
    {
      quote: "{{ DOPLNIŤ }} — citát po súhlase so zverejnením",
      attribution: "compliance manažérka, výrobná spoločnosť, 500+ zamestnancov",
      pending: true,
    },
    {
      quote: "{{ DOPLNIŤ }} — citát po súhlase so zverejnením",
      attribution: "DPO, finančná inštitúcia, regulovaný sektor",
      pending: true,
    },
    {
      quote: "{{ DOPLNIŤ }} — citát po súhlase so zverejnením",
      attribution: "právny riaditeľ, IT spoločnosť, medzinárodná skupina",
      pending: true,
    },
  ],
};

export const FAQ = {
  id: "faq" as const,
  order: 14,
  surface: "neutral-0" as Surface,
  anchor: "faq",
  eyebrow: "FAQ",
  title: "Otázky k školeniu DPO",
  subtitle:
    "Vecne k balíčkom, osvedčeniu a praxi ÚOOÚ — s odkazom na predpis tam, kde tvrdenie na ňom stojí.",
  items: [
    {
      question: "Ktorý balíček je vhodný pre nového DPO a ktorý pre skúseného?",
      answer:
        "Výber balíčka odporúčame podľa aktuálnej situácie DPO, nie podľa ceny. DPO START (16 hodín) je vstupné školenie pre nového DPO — právna aj bezpečnostná časť, praktické prípady, prípadová štúdia incidentu a záverečný test. DPO UPDATE (8 hodín) je pre skúseného DPO, ktorý potrebuje aktualizáciu podľa rozhodovacej praxe a usmernení. DPO PROFESSIONAL PATH spája vstupné školenie s praktickým follow-upom po približne troch mesiacoch a spoločnou konzultáciou 90 minút — pre firmu, ktorá chce DPO vyškoliť a následne overiť, ako dokáže získané vedomosti používať v praxi. Ak si nie ste istí, 15-minútová konzultácia pred objednávkou je na to.",
    },
    {
      question: "Čím sa líši DPO PROFESSIONAL PATH od samostatného START?",
      answer:
        "START končí vstupným školením, materiálmi, potvrdením o absolvovaní a hodinovou konzultáciou do 30 dní. PROFESSIONAL PATH navyše zahŕňa 6-hodinový follow-up a 90-minútovú spoločnú konzultáciu školiteľov s DPO organizácie. Follow-up nie je to isté ako DPO UPDATE — nie je to všeobecný refresh, ale upevnenie a prax po prvých mesiacoch vo funkcii (vrátane workshopu k žiadostiam dotknutých osôb a simulácie incidentu). Na oboch častiach programu sa môžu zúčastniť prihlásení DPO organizácie bez ohľadu na to, či ide o nového alebo skúsenejšieho DPO.",
    },
    {
      question: "Online alebo prezenčne — čo je v cene rovnaké a čo sa líši?",
      answer:
        "Obsah programu, rozsah hodín, materiály a potvrdenie o absolvovaní sú pri danej forme rovnaké. Líši sa cena: online je najnižšia dostupná sadzba uvedená ako cena „od“. Prezenčná forma má vyššiu sadzbu podľa cenníka. Podmienka ceny je vždy uvedená priamo pri cene na karte balíčka — nie v pätičke stránky. Prepnúť formu môžete v sekcii Termíny a ceny.",
    },
    {
      question: "Dostaneme potvrdenie alebo osvedčenie o absolvovaní?",
      answer:
        "Áno — účastník získa potvrdenie / osvedčenie o absolvovaní školenia, ktoré môže ísť do dokumentácie organizácie ako doklad o preukázateľnej odbornej spôsobilosti. Nejde o certifikáciu podľa čl. 42 GDPR; kancelária nie je akreditovaný certifikačný subjekt v zmysle tohto článku. Na stránke preto hovoríme o osvedčení / potvrdení o absolvovaní, nie o „certifikáte“ v zmysle certifikačného mechanizmu GDPR.",
    },
    {
      question: "Ako často má DPO aktualizovať znalosti?",
      answer:
        "GDPR neurčuje pevnú frekvenciu preškolenia „raz ročne“. Podľa čl. 38 ods. 2 GDPR je prevádzkovateľ povinný podporovať zodpovednú osobu v udržiavaní jej odborných znalostí. Pravidelnú aktualizáciu odporúčajú usmernenia k zodpovedným osobám — ako odporúčaná prax, nie ako výslovná lehota v nariadení. DPO UPDATE je postavený práve na tejto praxi: rozhodnutia súdov, ÚOOÚ a EDPB, vývoj okolo AI a praktické prípady. Sankcie za porušenia GDPR upravuje čl. 83 GDPR; ich výška závisí od konkrétneho prípadu a na stránke ich neuvádzame ako marketingový nátlak.",
    },
    {
      question: "Čo ak termín nevyhovuje?",
      answer:
        "Termíny dohodneme individuálne po konzultácii. Napíšte preferované obdobie, počet účastníkov a preferovanú formu (online / prezenčne) do správy vo formulári — ozveme sa s návrhmi termínov. Ak kurz vo vašej situácii nie je potrebný, povieme vám to.",
    },
    {
      question: "Pre koľko osôb platí firemná cena START + UPDATE?",
      answer:
        "{{ DOPLNIŤ }} — firemný balíček je v cenníku uvedený „za firmu“ bez počtu osôb. Do doplnenia klientkou počet neuvádzame a balíček nie je ako samostatná karta na landingu. Ak potrebujete vyškoliť viacerých DPO naraz, napíšte počet do formulára — pripravíme individuálnu ponuku.",
    },
    {
      question: "Zahŕňa školenie GDPR audit organizácie?",
      answer:
        "Nie. Školenie a konzultácia v cene balíčka neslúžia ako úplný GDPR audit ani ako komplexná kontrola dokumentácie organizácie. Pri PROFESSIONAL PATH je to výslovne uvedené pri konzultácii 90 minút. Ak potrebujete audit alebo revíziu dokumentácie, ide o samostatnú advokátsku agendu — napíšte to do správy a nasmerujeme vás správne.",
    },
    {
      question: "Ako prebieha konzultácia po školení a v akej lehote?",
      answer:
        "Pri START a UPDATE ide o konzultáciu s ktorýmkoľvek školiteľom v rozsahu 60 minút, typicky do 30 dní po školení. Pri PROFESSIONAL PATH je v cene spoločná konzultácia 90 minút s DPO jednej organizácie (lehota v cenníku nie je viazaná na 30 dní). Témy zahŕňajú napríklad nastavenie postavenia DPO, spoluprácu s vedením, právnym a IT oddelením, interné GDPR procesy a plán činnosti — vždy v rozsahu konzultácie, nie auditu.",
    },
    {
      question: "Ako spracúvate údaje z tohto formulára?",
      answer:
        "Prevádzkovateľom je Motúzová & Lacko advokátska kancelária. Účelom je vybavenie dopytu na školenie DPO a súvisiaca komunikácia. Právnym základom je oprávnený záujem na vybavení obchodného dopytu, prípadne kroky pred uzavretím zmluvy na vašu žiadosť. Údaje uchováme po dobu vybavenia dopytu a súvisiacich zákonných povinností. Podrobnosti nájdete v informáciách o ochrane osobných údajov — odkaz je pri formulári a v pätičke.",
    },
    {
      question: "Je súčasťou ponuky mesačná právna podpora?",
      answer:
        "Mesačná podpora nie je súčasťou tejto landing page, kým klientka produkt výslovne nezaradí do ponuky Akadémie. Ak máte záujem o priebežnú právnu spoluprácu mimo školení, napíšte to do správy — smerujeme vás na bežnú agendu kancelárie.",
    },
    {
      question: "Aké sú termíny najbližších školení?",
      answer:
        "{{ DOPLNIŤ }} — termíny najbližších behov zatiaľ neuverejňujeme. Štandardne termín dohodneme individuálne po konzultácii. Preferované obdobie uveďte vo formulári.",
    },
  ],
};

export const CONTACT_CTA = {
  id: "contact-cta" as const,
  order: 15,
  surface: "navy" as Surface,
  /** Kotva sekundárneho CTA hero. */
  anchor: "na-mieru",
  /** Alias pre staršie odkazy #kontakt. */
  aliasAnchors: ["kontakt"] as const,
  eyebrow: "Na mieru",
  title: "Školenie GDPR na mieru pre váš tím",
  subtitle:
    "Zostavíme rozsah a termín pre váš tím. Nezáväzná konzultácia 15 minút — bez záväzkov, bez predajného nátlaku. Povieme vám aj to, keď kurz nepotrebujete.",
  privacy: {
    controller: LAW_FIRM.name,
    purpose: "vybavenie dopytu na školenie DPO a súvisiaca komunikácia",
    legalBasis:
      "oprávnený záujem na vybavení obchodného dopytu / kroky pred uzavretím zmluvy na žiadosť dotknutej osoby",
    retention: "po dobu vybavenia dopytu a súvisiacich zákonných povinností",
    moreHref: "#ochrana-udajov",
    moreLabel: "Informácie o ochrane osobných údajov",
  },
};

export const FOOTER = {
  id: "footer" as const,
  order: 16,
  surface: "neutral-0" as Surface,
  privacyHref: "#ochrana-udajov",
  cookiesHref: "#cookies",
  sakPlaceholder: "{{ DOPLNIŤ }} — číslo zápisu v SAK",
};
