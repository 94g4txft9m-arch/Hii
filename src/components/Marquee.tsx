import { partners } from "../data/content";

export function Marquee() {
  const items = [...partners, ...partners];
  return (
    <section className="relative mt-16 border-y border-white/5 py-6">
      <p className="mb-4 text-center text-xs font-medium uppercase tracking-[0.25em] text-white/40">
        Dôverujú nám firmy, úrady aj zdravotníctvo
      </p>
      <div className="relative overflow-hidden [mask-image:linear-gradient(90deg,transparent,#000_12%,#000_88%,transparent)]">
        <div className="flex w-max animate-[marquee_32s_linear_infinite] items-center gap-12">
          {items.map((name, i) => (
            <span
              key={i}
              className="whitespace-nowrap font-[var(--font-display)] text-lg font-semibold tracking-wide text-white/35 transition-colors hover:text-white/70"
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
