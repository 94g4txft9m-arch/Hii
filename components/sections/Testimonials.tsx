import { Reveal } from "@/components/ui/Reveal";
import { Section, SectionHeader } from "@/components/ui/Section";
import { TESTIMONIALS } from "@/lib/sections";

export function Testimonials() {
  if (!TESTIMONIALS.enabled) return null;

  return (
    <Section id={TESTIMONIALS.anchor} surface={TESTIMONIALS.surface}>
      <SectionHeader
        eyebrow={TESTIMONIALS.eyebrow}
        title={TESTIMONIALS.title}
        subtitle={TESTIMONIALS.subtitle}
        headingLevel={3}
      />
      <ul className="grid border-t border-neutral-200 md:grid-cols-3">
        {TESTIMONIALS.items.map((item, i) => (
          <li
            key={item.attribution}
            className="border-b border-neutral-200 py-8 md:border-r md:border-b-0 md:px-8 md:last:border-r-0 md:first:pl-0 md:last:pr-0"
          >
            <Reveal delay={i * 0.06}>
              <blockquote className="flex h-full flex-col">
                <p
                  className={`font-display text-[1.1rem] leading-snug tracking-[-0.015em] ${
                    item.pending ? "text-neutral-400" : "text-navy-700"
                  }`}
                >
                  „{item.quote}“
                </p>
                <footer className="mt-auto pt-8">
                  <p className="text-eyebrow text-navy-600">Účastník</p>
                  <p className="text-ui text-navy-700 mt-2">
                    {item.attribution}
                  </p>
                  {item.pending ? (
                    <p className="text-ui-sm mt-2 text-neutral-400">
                      Placeholder — čaká na súhlas so zverejnením
                    </p>
                  ) : null}
                </footer>
              </blockquote>
            </Reveal>
          </li>
        ))}
      </ul>
    </Section>
  );
}
