import { ContactForm } from "@/components/forms/ContactForm";
import { Section, SectionHeader } from "@/components/ui/Section";
import { CONTACT_CTA } from "@/lib/sections";

export function ContactCta() {
  return (
    <Section id={CONTACT_CTA.anchor} surface={CONTACT_CTA.surface}>
      {CONTACT_CTA.aliasAnchors.map((alias) => (
        <span key={alias} id={alias} className="sr-only" />
      ))}
      <div className="grid gap-12 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-16">
        <SectionHeader
          eyebrow={CONTACT_CTA.eyebrow}
          title={CONTACT_CTA.title}
          subtitle={CONTACT_CTA.subtitle}
          onNavy
          className="mb-0"
        />
        <ContactForm />
      </div>
    </Section>
  );
}
