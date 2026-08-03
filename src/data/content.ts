import type { LucideIcon } from "lucide-react";
import {
  ShieldCheck,
  FileCheck2,
  Users,
  Scale,
  GraduationCap,
  Building2,
  Cpu,
  Lock,
  ClipboardList,
  Search,
  PenLine,
  Rocket,
} from "lucide-react";

export type Feature = {
  icon: LucideIcon;
  title: string;
  text: string;
};

export type Course = {
  icon: LucideIcon;
  title: string;
  level: string;
  duration: string;
  points: string[];
  featured?: boolean;
};

export const stats: { value: string; label: string }[] = [
  { value: "12+", label: "rokov praxe v ochrane údajov" },
  { value: "480+", label: "vyškolených firiem a úradov" },
  { value: "3 200+", label: "absolventov školení" },
  { value: "98 %", label: "spokojnosť klientov" },
];

export const partners: string[] = [
  "MESTO KOŠICE",
  "UNILAB",
  "TATRA CLINIC",
  "EDUNET",
  "PROMED",
  "LEGIS PARTNERS",
  "DATACORP",
  "SANITAS",
];

export const features: Feature[] = [
  {
    icon: ShieldCheck,
    title: "Súlad s GDPR na mieru",
    text: "Nastavíme procesy presne podľa vašej prevádzky — od poučení až po bezpečnostné opatrenia.",
  },
  {
    icon: FileCheck2,
    title: "Kompletná dokumentácia",
    text: "Záznamy o spracovateľských činnostiach, zmluvy, súhlasy a interné smernice pripravené na kontrolu.",
  },
  {
    icon: Scale,
    title: "Právna istota",
    text: "Advokátsky pohľad Motúzová & Lacko — obhájiteľné riešenia, nie prázdne formuláre.",
  },
  {
    icon: Users,
    title: "Zodpovedná osoba (DPO)",
    text: "Prevezmeme rolu DPO alebo vyškolíme vašu internú zodpovednú osobu.",
  },
  {
    icon: Cpu,
    title: "GDPR & AI 2026",
    text: "Posudzovanie AI nástrojov, automatizované rozhodovanie a nové povinnosti podľa AI Act.",
  },
  {
    icon: Lock,
    title: "Bezpečnosť údajov",
    text: "Praktické technicko-organizačné opatrenia a plán reakcie na bezpečnostné incidenty.",
  },
];

export const courses: Course[] = [
  {
    icon: GraduationCap,
    title: "GDPR Základ",
    level: "Pre zamestnancov",
    duration: "1 deň · online / prezenčne",
    points: [
      "Zásady spracúvania osobných údajov",
      "Práva dotknutých osôb v praxi",
      "Ako rozpoznať a hlásiť incident",
    ],
  },
  {
    icon: Building2,
    title: "GDPR pre firmy",
    level: "Pre manažment",
    duration: "2 dni · workshop",
    featured: true,
    points: [
      "Analýza rizík a DPIA",
      "Dokumentácia a záznamy o činnostiach",
      "Zmluvy so sprostredkovateľmi",
      "Príprava na kontrolu ÚOOÚ",
    ],
  },
  {
    icon: ShieldCheck,
    title: "DPO Akadémia",
    level: "Certifikačný program",
    duration: "5 modulov · 6 týždňov",
    points: [
      "Rola a zodpovednosť DPO",
      "GDPR + AI Act 2026",
      "Praktické prípadové štúdie",
    ],
  },
];

export type Step = { icon: LucideIcon; title: string; text: string };

export const steps: Step[] = [
  {
    icon: Search,
    title: "Audit",
    text: "Zmapujeme, aké údaje spracúvate a kde vznikajú riziká.",
  },
  {
    icon: ClipboardList,
    title: "Plán",
    text: "Navrhneme konkrétne opatrenia a harmonogram nápravy.",
  },
  {
    icon: PenLine,
    title: "Implementácia",
    text: "Pripravíme dokumentáciu a vyškolíme váš tím.",
  },
  {
    icon: Rocket,
    title: "Údržba",
    text: "Priebežne aktualizujeme súlad podľa nových predpisov.",
  },
];

export const faqs: { q: string; a: string }[] = [
  {
    q: "Pre koho sú školenia určené?",
    a: "Pre firmy, úrady, zdravotnícke zariadenia aj školy — od radových zamestnancov až po vedenie a zodpovedné osoby (DPO).",
  },
  {
    q: "Robíte školenia online aj prezenčne?",
    a: "Áno. Ponúkame online kurzy, prezenčné workshopy u vás vo firme aj hybridné formáty s certifikátom o absolvovaní.",
  },
  {
    q: "Čo prinesie novela a AI Act v roku 2026?",
    a: "Nové povinnosti pri používaní AI nástrojov, prísnejšie posudzovanie rizík a rozšírené práva dotknutých osôb. Všetko premietame priamo do školení.",
  },
  {
    q: "Dokážete prevziať rolu zodpovednej osoby (DPO)?",
    a: "Áno, poskytujeme externú zodpovednú osobu vrátane zastupovania pri komunikácii s Úradom na ochranu osobných údajov.",
  },
];
