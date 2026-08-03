/**
 * Lektori GDPR Akadémie a tím kancelárie.
 *
 * Zdroje: fotografie od klienta (`public/team/`), profily a citáty z
 * https://www.akmotuzova.sk/o-nas/ (26. 7. 2026), bio Tomáša Liptaia
 * dodané klientom doslovne.
 */

export type TeamPhoto = {
  src: string;
  width: number;
  height: number;
  alt: string;
};

export type TeamMember = {
  slug: string;
  name: string;
  /** Magenta eyebrow — rola / tituly. */
  role: string;
  email: string | null;
  /** Telefón — len ak je verejný kontakt na stránke. */
  phone: string | null;
  photo: TeamPhoto;
  /** Krátke bio pod menom. */
  bio: string | null;
  /** Voliteľný citát (bledá magenta plocha). */
  quote: string | null;
};

export type Lecturer = TeamMember & {
  /** TODO: {{ DOPLNIŤ }} — oblasti praxe. */
  specializations: string[] | null;
  /** TODO: {{ DOPLNIŤ }} — prednášková a publikačná činnosť. */
  speaking: string[] | null;
};

/** Lektori školenia DPO — partneri, ktorí kurzy vedú. */
export const LECTURERS: Lecturer[] = [
  {
    slug: "zuzana-motuzova",
    name: "Mgr. Zuzana Motúzová",
    role: "Lektorka DPO · zakladateľka a partnerka",
    email: "motuzova@akmotuzova.sk",
    phone: "+421 902 203 238",
    photo: {
      src: "/team/zuzana-motuzova.png",
      width: 800,
      height: 800,
      alt: "Portrét Mgr. Zuzany Motúzovej",
    },
    bio: "Špecializuje sa na IT právo, zmluvnú dokumentáciu a zastupovanie klientov z technologického sektora. Pravidelne prednáša k právu a informačným technológiám; venuje sa aj obchodnému právu, duševnému vlastníctvu a rodinnému právu.",
    quote:
      "Nerada sa púšťam do konfliktov, sporné veci radšej vyriešime rozhovormi a hľadaním najvhodnejšieho spôsobu ako sa dohodnúť. Mojou výhodou je, že som vždy o krok (niekedy aj dva) pred konkurenciou. Pracujem tak, aby boli zmluvy nastavené win-win pre klienta. Všetko informácie dôkladne zanalyzujem, idem do hĺbky, nevynechám žiadny detail.",
    specializations: null,
    speaking: null,
  },
  {
    slug: "pavel-lacko",
    name: "Pavel Lacko",
    role: "Lektor DPO · partner, LL.M.",
    email: "lacko@akmotuzova.sk",
    phone: "+421 905 686 862",
    photo: {
      src: "/team/pavel-lacko.png",
      width: 800,
      height: 800,
      alt: "Portrét Pavla Lacka",
    },
    bio: "Partner kancelárie od roku 2014. Špecializuje sa na obchodné právo, právo obchodných spoločností, riešenie sporov a ochranu osobných údajov. Od roku 2011 prednáša na Právnickej fakulte UK.",
    quote:
      "Na prípady našich klientov kladiem veľký dôraz, prácu sa snažím realizovať rýchlo a kvalitne. Držím sa hesla „thinking out of the box“, aby neboli naše riešenia prvoplánové, ale využili sme dodané informácie do posledného detailu a zúročili ich našim tímovým analytickým prístupom.",
    specializations: null,
    speaking: null,
  },
];

/**
 * Ďalší členovia tímu kancelárie (nie lektori DPO).
 * Tomáš Liptai na webe o-nas zatiaľ nie je — bio dodané klientom.
 */
export const OFFICE_TEAM: TeamMember[] = [
  {
    slug: "jozef-manuel-sencak",
    name: "Jozef Manuel Senčák",
    role: "Paralegal",
    email: "sencak@akmotuzova.sk",
    phone: null,
    photo: {
      src: "/team/jozef-manuel-sencak.png",
      width: 800,
      height: 800,
      alt: "Portrét Jozefa Manuela Senčáka",
    },
    bio: "V kancelárii pomáha s právnym rešeršom, priebežnou agendou a ad hoc úlohami. Zaujíma sa najmä o IT právo, ochranu osobných údajov a trestné právo v digitálnom prostredí.",
    quote:
      "Každú úlohu beriem ako príležitosť učiť sa a prehlbovať svoje znalosti v praxi.",
  },
  {
    slug: "tomas-liptai",
    name: "Tomáš Liptai",
    role: "Digital Marketing & Web Designer",
    email: "liptai@akmotuzova.sk",
    phone: null,
    photo: {
      src: "/team/tomas-liptai.png",
      width: 800,
      height: 800,
      alt: "Portrét Tomáša Liptaia",
    },
    bio: "V advokátskej kancelárii sa venujem webdizajnu, digitálnemu marketingu a tvorbe vizuálnej komunikácie. Podieľam sa na rozvoji online prezentácie kancelárie, navrhujem webové riešenia a grafické materiály, ktoré podporujú budovanie dôveryhodnej značky. Pri svojej práci spájam kreativitu, funkčnosť a strategické myslenie s dôrazom na profesionálnu prezentáciu právnych služieb.",
    quote: null,
  },
];

/** Spoločná fotografia partnerov — na použitie mimo sekcie Lektori. */
export const TEAM_PHOTO = {
  src: "/team/motuzova-lacko.jpg",
  width: 682,
  height: 1024,
  alt: "Zuzana Motúzová a Pavel Lacko, partneri advokátskej kancelárie",
} as const;

/** Cutout bez pozadia (alpha) — hero na geometrických paneloch ako v Canve. */
export const TEAM_CUTOUT = {
  src: "/team/motuzova-lacko-cutout.png",
  width: 629,
  height: 912,
  alt: "Zuzana Motúzová a Pavel Lacko, partneri advokátskej kancelárie",
} as const;
