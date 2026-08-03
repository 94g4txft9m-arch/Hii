import { CitationMark } from "@/components/ui/CitationMark";
import { Reveal } from "@/components/ui/Reveal";
import { Section, SectionHeader } from "@/components/ui/Section";
import { SectionIcon } from "@/components/ui/SectionIcon";
import { METHODOLOGY } from "@/lib/sections";

export function Methodology() {
  return (
    <Section id={METHODOLOGY.anchor} surface={METHODOLOGY.surface}>
      <SectionHeader
        eyebrow={METHODOLOGY.eyebrow}
        title={METHODOLOGY.title}
        subtitle={METHODOLOGY.subtitle}
        onNavy
      />
      <div className="citation-axis pl-6 md:pl-8">
        <ol>
          {METHODOLOGY.steps.map((step, i) => (
            <li
              key={step.mark}
              className="editorial-row border-neutral-0/15"
            >
              <Reveal delay={i * 0.05}>
                <div className="grid gap-4 md:grid-cols-[5rem_minmax(0,1fr)] md:gap-8">
                  <div className="flex items-start gap-3 md:flex-col md:gap-2">
                    <span className="mt-0.5 text-magenta-500">
                      <SectionIcon name={step.icon} className="size-5" />
                    </span>
                    <span className="text-meta text-magenta-500">
                      {step.mark}
                    </span>
                  </div>
                  <div>
                    <h3 className="text-display-sm text-neutral-0">
                      {step.title}
                    </h3>
                    <p className="text-body measure mt-2 text-[#e8eaf2]">
                      {step.text}
                    </p>
                  </div>
                </div>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
      {METHODOLOGY.legalNote ? (
        <aside className="mt-14 flex flex-col gap-2 border-t border-neutral-0/20 pt-8 sm:flex-row sm:items-start sm:gap-6">
          <CitationMark citation={METHODOLOGY.legalNote.citation} />
          <p className="text-body-sm measure text-[#e8eaf2]">
            {METHODOLOGY.legalNote.text}
          </p>
        </aside>
      ) : null}
    </Section>
  );
}
