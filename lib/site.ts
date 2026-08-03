/**
 * Centrálne údaje o stránke. Hodnoty označené TODO čakajú na potvrdenie od klienta —
 * nedopĺňať odhadom.
 *
 * Identifikačné a kontaktné údaje overené z https://www.akmotuzova.sk/kontakt/
 * (brand audit 26. 7. 2026) — pozri `BRAND-AUDIT.md`.
 */

/** TODO: {{ DOPLNIŤ }} finálna produkčná doména deployu (preview). */
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.akmotuzova.sk";

export const SITE_NAME = "GDPR Akadémia";

/** Cesta landing page — obsah žije tu; `/` redirectuje sem. */
export const LANDING_PATH = "/skolenie-gdpr-zodpovedna-osoba";

/** Canonical URL podľa SEO zadania (s trailing slash). */
export const LANDING_CANONICAL =
  "https://www.akmotuzova.sk/skolenie-gdpr-zodpovedna-osoba/";

export const LAW_FIRM = {
  name: "Motúzová & Lacko advokátska kancelária",
  shortName: "Motúzová & Lacko",
  claim: "Právnici na Vašej strane.",
  foundedYear: 2011,
  /**
   * Aktuálna adresa podľa webu kancelárie.
   * TODO: {{ DOPLNIŤ }} overiť u klientky, či Grösslingová 62 ešte platí
   * (adresa z briefu; na webe je Klemensova 4).
   */
  address: {
    street: "Klemensova 4",
    postalCode: "811 09",
    city: "Bratislava",
    country: "SK",
  },
  /** IČO — overené z /kontakt/. */
  companyId: "51 827 450",
  /** DIČ — overené z /kontakt/. */
  taxId: "1034862345",
  /** IČ DPH — overené z /kontakt/. */
  vatId: "SK1034862345",
  bar: "Slovenská advokátska komora",
  /** TODO: {{ DOPLNIŤ }} číslo zápisu v Slovenskej advokátskej komore — na webe nie je. */
  barRegistration: null as string | null,
  web: "https://akmotuzova.sk",
  phones: {
    motuzova: "0902 203 238",
    lacko: "0905 68 68 62",
  },
  emails: {
    motuzova: "motuzova@akmotuzova.sk",
    lacko: "lacko@akmotuzova.sk",
  },
} as const;
