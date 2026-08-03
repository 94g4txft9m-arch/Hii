import { DetailsItem } from "@/components/ui/Accordion";
import { Reveal } from "@/components/ui/Reveal";
import { Section, SectionHeader } from "@/components/ui/Section";
import { FAQ } from "@/lib/sections";

/**
 * FAQ — čisté biele, hairline separators, kruhové +.
 * Cieľový stav zo screenshotu (nie navy filled karty).
 */
export function Faq() {
  return (
    <Section id={FAQ.anchor} surface="neutral-0">
      <SectionHeader
        eyebrow={FAQ.eyebrow}
        title={FAQ.title}
        subtitle={FAQ.subtitle}
        className="mb-10 md:mb-12"
      />
      <Reveal>
        <div className="max-w-3xl border-t border-neutral-200">
          {FAQ.items.map((item) => (
            <DetailsItem key={item.question} title={item.question} tone="light">
              <p className="text-body measure text-neutral-600">{item.answer}</p>
            </DetailsItem>
          ))}
        </div>
      </Reveal>
    </Section>
  );
}
