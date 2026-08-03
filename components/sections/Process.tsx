import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { PROCESS } from "@/lib/sections";

export function Process() {
  const accent = PROCESS.titleAccent;
  const titleParts =
    accent && PROCESS.title.includes(accent)
      ? PROCESS.title.split(accent)
      : null;

  return (
    <Section id={PROCESS.anchor} surface={PROCESS.surface}>
      <header className="mb-12 max-w-3xl md:mb-16">
        <p className="text-eyebrow mb-4 text-navy-600">{PROCESS.eyebrow}</p>
        <h3 className="text-display-md text-balance">
          {titleParts ? (
            <>
              {titleParts[0]}
              <em className="text-magenta-600 not-italic">{accent}</em>
              {titleParts[1]}
            </>
          ) : (
            PROCESS.title
          )}
        </h3>
        {PROCESS.subtitle ? (
          <p className="text-body-lg measure mt-5 text-neutral-600">
            {PROCESS.subtitle}
          </p>
        ) : null}
      </header>
      <ol className="citation-axis-h grid gap-10 pt-4 sm:grid-cols-2 lg:grid-cols-3">
        {PROCESS.steps.map((step, i) => (
          <li key={step.n}>
            <Reveal delay={Math.min(i, 5) * 0.05}>
              <p className="text-meta text-magenta-600" aria-hidden>
                {step.n}
              </p>
              <h4 className="text-display-sm text-navy-700 mt-3">
                {step.title}
              </h4>
              <p className="text-body-sm mt-2 text-neutral-600">{step.text}</p>
            </Reveal>
          </li>
        ))}
      </ol>
    </Section>
  );
}
