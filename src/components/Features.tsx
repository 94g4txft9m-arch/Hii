import { motion } from "framer-motion";
import { features } from "../data/content";
import { SectionTitle } from "./SectionTitle";

export function Features() {
  return (
    <section id="preco" className="mx-auto mt-28 max-w-6xl scroll-mt-24 px-4">
      <SectionTitle
        eyebrow="Prečo GDPR Akadémia"
        title="Súlad, ktorý obstojí pri kontrole"
        subtitle="Spájame advokátsku prax kancelárie Motúzová & Lacko s praktickými školeniami. Žiadne prázdne šablóny — riešenia šité na vašu prevádzku."
      />

      <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((f, i) => (
          <motion.article
            key={f.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: (i % 3) * 0.1 }}
            className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-magenta-500/40 hover:bg-white/[0.05]"
          >
            <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-magenta-500/10 blur-2xl transition-opacity duration-300 group-hover:opacity-100 opacity-0" />
            <div className="relative grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br from-magenta-500/20 to-navy-600/30 ring-1 ring-white/10">
              <f.icon className="h-6 w-6 text-magenta-300" />
            </div>
            <h3 className="mt-5 font-[var(--font-display)] text-lg font-semibold text-white">
              {f.title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-white/60">
              {f.text}
            </p>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
