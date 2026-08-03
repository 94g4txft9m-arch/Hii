import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { BRIDGE } from "@/lib/sections";

export function Bridge() {
  return (
    <Section surface={BRIDGE.surface} className="!py-20 md:!py-28">
      <Reveal>
        <p className="font-display measure text-navy-700 mx-auto max-w-3xl text-center text-[clamp(1.45rem,2.8vw,2.05rem)] leading-[1.3] font-medium tracking-[-0.025em]">
          {BRIDGE.text}
        </p>
      </Reveal>
    </Section>
  );
}
