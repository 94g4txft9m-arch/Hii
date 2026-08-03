import Link from "next/link";
import { CitationMark } from "@/components/ui/CitationMark";
import { Reveal } from "@/components/ui/Reveal";
import { Section, SectionHeader } from "@/components/ui/Section";
import { PACKAGES } from "@/lib/packages";
import { UPDATE_SECTION } from "@/lib/sections";

const updatePkg = PACKAGES.find((p) => p.id === UPDATE_SECTION.packageId);

export function UpdateTraining() {
  const part = updatePkg?.scope.parts[0];
  const highlights = part?.includes.slice(0, 4) ?? [];

  return (
    <Section id={UPDATE_SECTION.anchor} surface={UPDATE_SECTION.surface}>
      <SectionHeader
        eyebrow={UPDATE_SECTION.eyebrow}
        title={UPDATE_SECTION.title}
        subtitle={UPDATE_SECTION.subtitle}
      />
      <div className="grid gap-12 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:gap-16">
        <Reveal>
          <ul className="border-t border-neutral-200">
            {highlights.map((item) => (
              <li
                key={item.slice(0, 48)}
                className="text-body border-b border-neutral-200 py-4 text-navy-700"
              >
                {item}
              </li>
            ))}
          </ul>
        </Reveal>
        <Reveal delay={0.08}>
          <aside className="border-t border-navy-700 pt-6 lg:border-t-0 lg:border-l lg:pt-0 lg:pl-10">
            <p className="text-meta text-navy-700">
              {updatePkg?.scope.label ?? "8 hodín"}
            </p>
            <p className="text-body mt-3 text-neutral-600">
              {updatePkg?.outcome[0] ??
                "Aktualizácia znalostí DPO podľa praxe Úradu a usmernení."}
            </p>
            <p className="mt-6">
              <Link
                href="#terminy"
                className="text-ui text-magenta-600 hover:text-magenta-700 underline-offset-4 hover:underline"
              >
                Pozrieť termíny a ceny →
              </Link>
            </p>
            {updatePkg?.legalBasis ? (
              <div className="mt-8 border-t border-neutral-200 pt-6">
                <CitationMark citation={updatePkg.legalBasis.citation} />
                <p className="text-body-sm measure mt-3 text-neutral-600">
                  {updatePkg.legalBasis.text}
                </p>
              </div>
            ) : null}
          </aside>
        </Reveal>
      </div>
    </Section>
  );
}
