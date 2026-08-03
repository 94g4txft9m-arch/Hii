import { DetailsItem } from "@/components/ui/Accordion";
import { Section, SectionHeader } from "@/components/ui/Section";
import { formatPrice } from "@/lib/format";
import { PACKAGES } from "@/lib/packages";
import { COMPARISON } from "@/lib/sections";

export function Comparison() {
  const rows: { label: string; values: string[] }[] = [
    {
      label: "Rozsah",
      values: PACKAGES.map((p) => p.scope.label),
    },
    {
      label: "Časti programu",
      values: PACKAGES.map((p) =>
        p.scope.parts
          .map((part) => `${part.name} (${part.hours} h)`)
          .join("; "),
      ),
    },
    {
      label: "Konzultácia",
      values: PACKAGES.map((p) =>
        p.consultation
          ? `${p.consultation.minutes} min${p.consultation.deadline ? `, ${p.consultation.deadline}` : ""}`
          : "—",
      ),
    },
    {
      label: "Materiály / potvrdenie",
      values: PACKAGES.map((p) => {
        const bits = [...p.includes];
        if (bits.length === 0) {
          return "V častiach programu (potvrdenie a materiály pri START)";
        }
        return bits.join("; ");
      }),
    },
    {
      label: "Follow-up zľava",
      values: PACKAGES.map((p) =>
        p.followUpDiscount
          ? `${p.followUpDiscount.percent} % — ${p.followUpDiscount.condition}`
          : "—",
      ),
    },
    {
      label: "Cena online (bez DPH)",
      values: PACKAGES.map((p) =>
        p.price.online ? `od ${formatPrice(p.price.online)}` : "—",
      ),
    },
    {
      label: "Cena prezenčne (bez DPH)",
      values: PACKAGES.map((p) =>
        p.price.onsite ? formatPrice(p.price.onsite) : "—",
      ),
    },
    {
      label: "Výsledok",
      values: PACKAGES.map((p) => p.outcome.join(" ")),
    },
  ];

  return (
    <Section id={COMPARISON.anchor} surface={COMPARISON.surface}>
      <SectionHeader
        eyebrow={COMPARISON.eyebrow}
        title={COMPARISON.title}
        subtitle={COMPARISON.subtitle}
        headingLevel={3}
      />

      <div className="border-t border-neutral-200">
        <DetailsItem
          title="Zobraziť detailné porovnanie balíčkov"
          open
          tone="light"
        >
          <div className="overflow-x-auto">
            <table className="w-full min-w-[640px] border-collapse text-left">
              <thead>
                <tr className="border-b border-neutral-200">
                  <th className="text-ui-sm px-3 py-3 text-neutral-500">
                    Položka
                  </th>
                  {PACKAGES.map((p) => (
                    <th key={p.id} className="text-ui text-navy-700 px-3 py-3">
                      {p.name}
                      {p.recommended ? (
                        <span className="text-ui-sm text-magenta-600 mt-1 block">
                          Odporúčame
                        </span>
                      ) : null}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {rows.map((row) => (
                  <tr key={row.label} className="border-b border-neutral-200">
                    <th className="text-ui-sm text-navy-700 px-3 py-3 align-top font-medium">
                      {row.label}
                    </th>
                    {row.values.map((value, i) => (
                      <td
                        key={`${row.label}-${PACKAGES[i].id}`}
                        className="text-body-sm px-3 py-3 align-top text-neutral-600"
                      >
                        {value}
                      </td>
                    ))}
                  </tr>
                ))}
                <tr>
                  <th className="text-ui-sm text-navy-700 px-3 py-3 align-top font-medium">
                    CTA
                  </th>
                  {PACKAGES.map((p) => (
                    <td key={p.id} className="text-body-sm px-3 py-3 align-top">
                      <a
                        href={p.cta.href}
                        className="text-magenta-600 hover:underline"
                      >
                        {p.cta.label}
                      </a>
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>
        </DetailsItem>
      </div>
    </Section>
  );
}
