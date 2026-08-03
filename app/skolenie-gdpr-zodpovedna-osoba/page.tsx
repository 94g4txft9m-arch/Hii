import type { Metadata } from "next";
import { LandingPage } from "@/components/LandingPage";
import { LANDING_CANONICAL, LAW_FIRM } from "@/lib/site";

export const metadata: Metadata = {
  title: {
    absolute: `Školenie GDPR pre zodpovedné osoby (DPO) | ${LAW_FIRM.shortName}`,
  },
  description:
    "Školenie a aktualizačné školenie pre zodpovedné osoby. Vedú advokáti, ktorí klientov pri kontrolách ÚOOÚ SR zastupujú. Osvedčenie o absolvovaní. Aktuálne termíny.",
  alternates: {
    canonical: LANDING_CANONICAL,
  },
  openGraph: {
    url: LANDING_CANONICAL,
    title: `Školenie GDPR pre zodpovedné osoby (DPO) | ${LAW_FIRM.shortName}`,
    description:
      "Školenie a aktualizačné školenie pre zodpovedné osoby. Vedú advokáti, ktorí klientov pri kontrolách ÚOOÚ SR zastupujú. Osvedčenie o absolvovaní. Aktuálne termíny.",
  },
};
export default function SkolenieGdprPage() {
  return <LandingPage />;
}
