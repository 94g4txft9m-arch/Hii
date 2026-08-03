import type { ReactNode } from "react";
import { BrandBackdrop } from "@/components/ui/BrandBackdrop";
import { BrandBands } from "@/components/ui/BrandBands";
import type { Surface } from "@/lib/sections";

const surfaces: Record<Surface, string> = {
  "neutral-0": "bg-neutral-0 text-navy-700",
  "neutral-50": "bg-neutral-50 text-navy-700",
  navy: "bg-navy-900 text-neutral-0",
  bands: "bg-navy-900 text-neutral-0",
};

type SectionProps = {
  id?: string;
  surface?: Surface;
  children: ReactNode;
  className?: string;
  as?: "section" | "footer" | "div";
};

export function Section({
  id,
  surface = "neutral-0",
  children,
  className = "",
  as: Tag = "section",
}: SectionProps) {
  return (
    <Tag
      id={id}
      data-surface={surface}
      className={`section-y relative overflow-hidden ${surfaces[surface]} ${className}`}
    >
      {surface === "bands" ? <BrandBands /> : null}
      {surface === "navy" ? <BrandBackdrop variant="navy" /> : null}
      <div className="container-page relative z-10">{children}</div>
    </Tag>
  );
}

type SectionHeaderProps = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  onNavy?: boolean;
  className?: string;
  /** Predvolene h2 — vedľajšie bloky môžu ísť na h3 kvôli SEO poradiu. */
  headingLevel?: 2 | 3;
};

export function SectionHeader({
  eyebrow,
  title,
  subtitle,
  onNavy,
  className = "",
  headingLevel = 2,
}: SectionHeaderProps) {
  const HeadingTag = headingLevel === 3 ? "h3" : "h2";

  return (
    <header className={`mb-12 max-w-3xl md:mb-16 ${className}`}>
      {eyebrow ? (
        <p
          className={`text-eyebrow mb-4 ${onNavy ? "text-gold-500" : "text-navy-600"}`}
        >
          {eyebrow}
        </p>
      ) : null}
      <HeadingTag
        className={`text-display-md text-balance ${onNavy ? "text-neutral-0" : "text-navy-700"}`}
      >
        {title}
      </HeadingTag>
      {subtitle ? (
        <p
          className={`text-body-lg measure mt-5 ${onNavy ? "text-neutral-100" : "text-neutral-600"}`}
        >
          {subtitle}
        </p>
      ) : null}
    </header>
  );
}
