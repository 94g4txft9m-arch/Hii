import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";
import { Section, SectionHeader } from "@/components/ui/Section";
import { SectionIcon } from "@/components/ui/SectionIcon";
import { WHY_LAW_FIRM } from "@/lib/sections";

export function WhyLawFirm() {
  return (
    <Section id={WHY_LAW_FIRM.anchor} surface={WHY_LAW_FIRM.surface}>
      <SectionHeader
        eyebrow={WHY_LAW_FIRM.eyebrow}
        title={WHY_LAW_FIRM.title}
        subtitle={WHY_LAW_FIRM.subtitle}
        onNavy
        headingLevel={3}
        className="relative max-w-2xl"
      />
      <ul className="relative grid gap-0 border-t border-neutral-0/15 sm:grid-cols-2 lg:grid-cols-3">
        {WHY_LAW_FIRM.tiles.map((tile, i) => (
          <li
            key={tile.title}
            className="group border-b border-neutral-0/15 py-8 transition-colors duration-300 hover:bg-neutral-0/[0.04] sm:px-6 sm:odd:border-r lg:border-r lg:[&:nth-child(3n)]:border-r-0 lg:first:pl-0"
          >
            <Reveal delay={i * 0.05} className="h-full">
              <div className="flex h-full flex-col gap-3">
                <span className="icon-anim text-magenta-500">
                  <SectionIcon name={tile.icon} className="size-5" />
                </span>
                <h3 className="text-display-sm text-neutral-0">{tile.title}</h3>
                <p className="text-body-sm text-neutral-100">{tile.text}</p>
              </div>
            </Reveal>
          </li>
        ))}
        <li className="border-b border-neutral-0/15 py-8 sm:col-span-2 sm:px-6 lg:col-span-1 lg:border-r-0 lg:pl-6">
          <Reveal delay={WHY_LAW_FIRM.tiles.length * 0.05} className="h-full">
            <Link
              href={WHY_LAW_FIRM.aside.href}
              className="group flex h-full flex-col justify-between gap-6 text-neutral-0"
            >
              <div>
                <p className="text-eyebrow text-gold-500">Konzultácia</p>
                <h3 className="text-display-sm mt-3 text-neutral-0">
                  {WHY_LAW_FIRM.aside.text}
                </h3>
                <p className="text-body-sm mt-3 text-neutral-100">
                  15 minút s advokátom — bez záväzku, s jasným odporúčaním
                  ďalšieho kroku.
                </p>
              </div>
              <span className="text-ui text-magenta-500 inline-flex items-center gap-2 transition-transform duration-150 group-hover:translate-x-0.5 motion-reduce:transition-none">
                Dohodnúť konzultáciu
                <span aria-hidden>→</span>
              </span>
            </Link>
          </Reveal>
        </li>
      </ul>
    </Section>
  );
}
