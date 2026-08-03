import { Reveal } from "@/components/ui/Reveal";
import { Section, SectionHeader } from "@/components/ui/Section";
import { STATS } from "@/lib/sections";

export function Stats() {
  return (
    <Section surface={STATS.surface}>
      <SectionHeader
        eyebrow={STATS.eyebrow}
        title={STATS.title}
        subtitle={STATS.subtitle}
        headingLevel={3}
      />
      <ul className="grid border-t border-neutral-200 sm:grid-cols-2 lg:grid-cols-4">
        {STATS.items.map((item, i) => {
          const pending = "pending" in item && item.pending;
          return (
            <li
              key={item.label}
              className="border-b border-neutral-200 py-8 sm:px-6 sm:odd:border-r lg:border-b-0 lg:border-r lg:last:border-r-0 lg:first:pl-0"
            >
              <Reveal delay={i * 0.05}>
                <p
                  className={`text-stat ${
                    pending ? "text-neutral-400" : "text-navy-700"
                  }`}
                >
                  {item.value}
                </p>
                <p className="text-body-sm mt-3 text-neutral-600">
                  {item.label}
                </p>
              </Reveal>
            </li>
          );
        })}
      </ul>
    </Section>
  );
}
