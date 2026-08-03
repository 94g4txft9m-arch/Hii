import { Reveal } from "./Reveal";

type Props = {
  eyebrow: string;
  title: string;
  subtitle?: string;
};

export function SectionTitle({ eyebrow, title, subtitle }: Props) {
  return (
    <div className="mx-auto max-w-2xl text-center">
      <Reveal>
        <span className="inline-block rounded-full border border-magenta-500/20 bg-magenta-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-magenta-300">
          {eyebrow}
        </span>
      </Reveal>
      <Reveal delay={0.05}>
        <h2 className="mt-4 font-[var(--font-display)] text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
          {title}
        </h2>
      </Reveal>
      {subtitle && (
        <Reveal delay={0.1}>
          <p className="mt-4 text-base leading-relaxed text-white/60">
            {subtitle}
          </p>
        </Reveal>
      )}
    </div>
  );
}
