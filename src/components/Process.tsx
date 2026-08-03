import { motion } from "framer-motion";
import { steps } from "../data/content";
import { SectionTitle } from "./SectionTitle";

export function Process() {
  return (
    <section id="postup" className="mx-auto mt-28 max-w-6xl scroll-mt-24 px-4">
      <SectionTitle
        eyebrow="Ako to funguje"
        title="Cesta k súladu v štyroch krokoch"
      />

      <div className="relative mt-14">
        <div className="absolute left-0 right-0 top-8 hidden h-px bg-gradient-to-r from-transparent via-magenta-500/40 to-transparent lg:block" />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              className="relative text-center"
            >
              <div className="mx-auto grid h-16 w-16 place-items-center rounded-2xl border border-white/10 bg-navy-900 shadow-card">
                <s.icon className="h-7 w-7 text-magenta-300" />
                <span className="absolute -right-1 -top-1 grid h-6 w-6 place-items-center rounded-full bg-gradient-to-br from-magenta-500 to-magenta-400 text-xs font-bold text-white">
                  {i + 1}
                </span>
              </div>
              <h3 className="mt-5 font-[var(--font-display)] text-lg font-semibold text-white">
                {s.title}
              </h3>
              <p className="mx-auto mt-2 max-w-[15rem] text-sm leading-relaxed text-white/60">
                {s.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
