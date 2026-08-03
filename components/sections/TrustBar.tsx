import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { SectionIcon } from "@/components/ui/SectionIcon";
import { TRUST } from "@/lib/sections";

export function TrustBar() {
  return (
    <Section surface={TRUST.surface}>
      <Reveal>
        <p className="text-display-sm measure mx-auto max-w-3xl text-center text-balance">
          {TRUST.lead}
        </p>
        <ul className="mt-16 grid gap-10 border-t border-neutral-200 pt-12 md:grid-cols-3 md:gap-12">
          {TRUST.signals.map((signal, i) => (
            <Reveal key={signal.label} delay={i * 0.06}>
              <li className="group flex gap-4">
                <span className="icon-anim text-navy-700 mt-0.5 shrink-0">
                  <SectionIcon name={signal.icon} className="size-5" />
                </span>
                <div>
                  <p className="text-meta text-navy-700">{signal.label}</p>
                  <p className="text-body mt-2 text-neutral-600">
                    {signal.text}
                  </p>
                </div>
              </li>
            </Reveal>
          ))}
        </ul>
      </Reveal>
    </Section>
  );
}
