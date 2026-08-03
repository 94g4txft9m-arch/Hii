"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { Section, SectionHeader } from "@/components/ui/Section";
import { formatPrice, priceUnitLabel } from "@/lib/format";
import {
  PACKAGES,
  type DeliveryMode,
  type TrainingPackage,
} from "@/lib/packages";
import { PACKAGES_SECTION } from "@/lib/sections";

/**
 * Cenník v rytme Terzos: Rozsah → Výsledok, nie feature listy.
 */
function PackageCard({
  pkg,
  mode,
}: {
  pkg: TrainingPackage;
  mode: DeliveryMode;
}) {
  const price = pkg.price[mode];
  const showFrom = mode === "online" && pkg.priceFrom !== null;

  return (
    <article
      className={`flex h-full flex-col border-t-2 pt-8 ${
        pkg.recommended
          ? "border-magenta-500"
          : "border-navy-700"
      }`}
    >
      <div className="mb-2 flex flex-wrap items-baseline justify-between gap-3">
        <h3 className="text-display-sm">{pkg.name}</h3>
        {pkg.badge ? (
          <span className="text-eyebrow text-magenta-600">{pkg.badge}</span>
        ) : null}
      </div>
      <p className="text-body-sm text-neutral-600">{pkg.tagline}</p>
      <p className="text-body mt-4 text-navy-700">{pkg.audience}</p>

      <div className="mt-8">
        <p className="text-price text-navy-700">
          {showFrom ? (
            <>
              <span className="text-meta mr-2 align-middle text-neutral-500">
                od
              </span>
              {formatPrice(pkg.priceFrom!)}
            </>
          ) : price ? (
            formatPrice(price)
          ) : (
            "{{ DOPLNIŤ }}"
          )}
        </p>
        <p className="text-body-sm mt-2 text-neutral-500">
          {price
            ? `${priceUnitLabel(price.unit)}, bez DPH · ${mode === "online" ? "online" : "prezenčne"}`
            : null}
        </p>
        <p className="text-body-sm mt-3 text-navy-700">{pkg.price.condition}</p>
      </div>

      <div className="mt-8 space-y-6 border-t border-neutral-200 pt-8">
        <div>
          <p className="text-eyebrow text-navy-600">Rozsah</p>
          <p className="text-meta text-navy-700 mt-2">{pkg.scope.label}</p>
        </div>
        <div>
          <p className="text-eyebrow text-navy-600">Výsledok</p>
          <ul className="text-body-sm mt-2 space-y-2 text-neutral-600">
            {pkg.outcome.map((line) => (
              <li key={line.slice(0, 40)}>{line}</li>
            ))}
          </ul>
        </div>
        {pkg.consultation ? (
          <p className="text-body-sm text-navy-700">
            Konzultácia: {pkg.consultation.minutes} min
            {pkg.consultation.deadline
              ? ` (${pkg.consultation.deadline})`
              : null}
          </p>
        ) : null}
      </div>

      <div className="mt-auto pt-10">
        <Button
          href={pkg.cta.href}
          variant={pkg.recommended ? "magenta" : "primary"}
          className="w-full"
        >
          {pkg.cta.label}
        </Button>
      </div>
    </article>
  );
}

export function Packages() {
  const [mode, setMode] = useState<DeliveryMode>("online");

  return (
    <Section id={PACKAGES_SECTION.anchor} surface={PACKAGES_SECTION.surface}>
      {PACKAGES_SECTION.aliasAnchors.map((alias) => (
        <span key={alias} id={alias} className="sr-only" />
      ))}
      <SectionHeader
        eyebrow={PACKAGES_SECTION.eyebrow}
        title={PACKAGES_SECTION.title}
        subtitle={PACKAGES_SECTION.subtitle}
      />

      <div
        className="mb-12 inline-flex border border-neutral-200 p-1"
        role="group"
        aria-label="Forma školenia"
      >
        {(
          [
            { value: "online", label: "Online" },
            { value: "onsite", label: "Prezenčne" },
          ] as const
        ).map((opt) => (
          <button
            key={opt.value}
            type="button"
            className={`text-ui rounded-[var(--radius-sm)] px-4 py-2.5 transition-colors duration-150 motion-reduce:transition-none ${
              mode === opt.value
                ? "bg-navy-700 text-neutral-0"
                : "text-navy-700 hover:bg-neutral-0"
            }`}
            aria-pressed={mode === opt.value}
            onClick={() => setMode(opt.value)}
          >
            {opt.label}
          </button>
        ))}
      </div>

      <noscript>
        <p className="text-body-sm mb-6 text-navy-700">
          Ceny online a prezenčne nájdete aj v sekcii porovnania nižšie.
        </p>
      </noscript>

      <ul className="grid gap-12 lg:grid-cols-3 lg:gap-10">
        {PACKAGES.map((pkg, i) => (
          <li key={pkg.id} className="h-full">
            <Reveal delay={i * 0.06} className="h-full">
              <PackageCard pkg={pkg} mode={mode} />
            </Reveal>
          </li>
        ))}
      </ul>
      <p className="text-body-sm mt-8 text-neutral-500">
        {PACKAGES_SECTION.vatNote}
      </p>
    </Section>
  );
}
