import { LANDING_CANONICAL, LAW_FIRM, SITE_NAME } from "@/lib/site";

/**
 * Schema.org Course + Organization.
 * hasCourseInstance zámerne nie je nasadené s falošnými dátumami —
 * po doplnení termínov od klientky doplniť live instance.
 */
export function JsonLd() {
  const course = {
    "@context": "https://schema.org",
    "@type": "Course",
    name: "Školenie GDPR pre zodpovedné osoby (DPO)",
    description:
      "Školenie a aktualizačné školenie pre zodpovedné osoby. Vedú advokáti, ktorí klientov pri kontrolách ÚOOÚ SR zastupujú. Osvedčenie o absolvovaní. Aktuálne termíny.",
    url: LANDING_CANONICAL,
    inLanguage: "sk",
    provider: {
      "@type": "Organization",
      name: LAW_FIRM.name,
      url: LAW_FIRM.web,
      address: {
        "@type": "PostalAddress",
        streetAddress: LAW_FIRM.address.street,
        postalCode: LAW_FIRM.address.postalCode,
        addressLocality: LAW_FIRM.address.city,
        addressCountry: LAW_FIRM.address.country,
      },
    },
    educationalCredentialAwarded: "Osvedčenie o absolvovaní školenia",
    /*
     * TODO: {{ DOPLNIŤ }} hasCourseInstance po potvrdení termínov klientkou.
     * Nesprávne dátumy sú horšie než žiadne — instance zatiaľ nevyplňujeme.
     *
     * "hasCourseInstance": [
     *   {
     *     "@type": "CourseInstance",
     *     "courseMode": "online",
     *     "startDate": "DOPLNIŤ",
     *     "endDate": "DOPLNIŤ",
     *     "location": { "@type": "VirtualLocation", "url": "DOPLNIŤ" }
     *   }
     * ]
     */
  };

  const org = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: LAW_FIRM.name,
    alternateName: SITE_NAME,
    url: LAW_FIRM.web,
    foundingDate: String(LAW_FIRM.foundedYear),
    address: {
      "@type": "PostalAddress",
      streetAddress: LAW_FIRM.address.street,
      postalCode: LAW_FIRM.address.postalCode,
      addressLocality: LAW_FIRM.address.city,
      addressCountry: LAW_FIRM.address.country,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(course) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(org) }}
      />
    </>
  );
}
