import { CitationMark } from "@/components/ui/CitationMark";
import { Reveal } from "@/components/ui/Reveal";
import { Section, SectionHeader } from "@/components/ui/Section";
import { SectionIcon } from "@/components/ui/SectionIcon";
import { PROBLEM } from "@/lib/sections";

export function Problem() {
  return (
    <Section id="problem" surface={PROBLEM.surface}>
      <SectionHeader
        eyebrow={PROBLEM.eyebrow}
        title={PROBLEM.title}
        subtitle={PROBLEM.subtitle}
      />
      <div className="citation-axis pl-6 md:pl-8">
        <ul>
          {PROBLEM.situations.map((item, i) => (
            <li key={item.citation} className="editorial-row">
              <Reveal delay={Math.min(i, 5) * 0.05}>
                <div className="grid gap-3 md:grid-cols-[minmax(0,1fr)_auto] md:items-start md:gap-8">
                  <div className="flex gap-4">
                    <span className="text-navy-700 mt-1 shrink-0">
                      <SectionIcon name={item.icon} className="size-5" />
                    </span>
                    <div>
                      <h3 className="text-display-sm text-navy-700">
                        {item.title}
                      </h3>
                      <p className="text-body measure mt-2 text-neutral-600">
                        {item.text}
                      </p>
                    </div>
                  </div>
                  <CitationMark
                    citation={item.citation}
                    className="text-navy-700 mt-1"
                  />
                </div>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
