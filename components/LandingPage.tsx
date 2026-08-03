import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { Bridge } from "@/components/sections/Bridge";
import { Comparison } from "@/components/sections/Comparison";
import { ContactCta } from "@/components/sections/ContactCta";
import { Faq } from "@/components/sections/Faq";
import { Hero } from "@/components/sections/Hero";
import { Lecturers } from "@/components/sections/Lecturers";
import { Methodology } from "@/components/sections/Methodology";
import { Packages } from "@/components/sections/Packages";
import { Problem } from "@/components/sections/Problem";
import { Process } from "@/components/sections/Process";
import { Stats } from "@/components/sections/Stats";
import { Testimonials } from "@/components/sections/Testimonials";
import { TrustBar } from "@/components/sections/TrustBar";
import { UpdateTraining } from "@/components/sections/UpdateTraining";
import { WhyLawFirm } from "@/components/sections/WhyLawFirm";
import { JsonLd } from "@/components/seo/JsonLd";

/**
 * Hlavná landing — H2 SEO poradie:
 * 1 Pre koho · 2 Čo sa naučíte · 3 Aktualizačné · 4 Termíny a ceny
 * 5 Na mieru · 6 Kto vedie · 7 FAQ
 */
export function LandingPage() {
  return (
    <div>
      <JsonLd />
      <Header />
      <main>
        <Hero />
        <TrustBar />
        <Problem />
        <Bridge />
        <Methodology />
        <UpdateTraining />
        <Packages />
        <WhyLawFirm />
        <Comparison />
        <Stats />
        <ContactCta />
        <Lecturers />
        <Process />
        <Testimonials />
        <Faq />
      </main>
      <Footer />
    </div>
  );
}
