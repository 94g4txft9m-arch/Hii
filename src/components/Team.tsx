import { motion } from "framer-motion";
import { Quote, Mail, Phone } from "lucide-react";
import { SectionTitle } from "./SectionTitle";

export function Team() {
  return (
    <section id="tim" className="mx-auto mt-28 max-w-6xl scroll-mt-24 px-4">
      <SectionTitle
        eyebrow="Náš tím"
        title="Ľudia, ktorí za tým stoja"
        subtitle="Advokátska kancelária Motúzová & Lacko a tím GDPR Akadémie — spojenie právnej istoty a praktických skúseností."
      />

      <div className="mt-14 grid gap-6 lg:grid-cols-[1.4fr_1fr]">
        {/* Karta kancelárie */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-navy-800 to-navy-950 p-8"
        >
          <div className="slant absolute -left-6 top-0 h-full w-1/3 bg-gradient-to-br from-magenta-500/30 to-transparent" />
          <Quote className="h-10 w-10 text-magenta-400" />
          <p className="relative mt-5 max-w-xl font-[var(--font-display)] text-xl font-medium leading-relaxed text-white sm:text-2xl">
            „GDPR nie je o strachu z pokút. Je o dôvere klientov a poriadku vo
            vlastných procesoch — a presne to učíme."
          </p>
          <p className="mt-6 text-sm font-semibold text-magenta-300">
            Advokátska kancelária Motúzová &amp; Lacko
          </p>
          <p className="text-xs text-white/50">
            Ochrana osobných údajov · právo IT · compliance
          </p>
        </motion.div>

        {/* Karta Tomáš Liptai */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-6"
        >
          <div className="flex items-center gap-4">
            <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-2xl ring-2 ring-magenta-500/40">
              <img
                src={`${import.meta.env.BASE_URL}graphics/tomas-liptai.png`}
                alt="Tomáš Liptai — GDPR Akadémia"
                className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div>
              <h3 className="font-[var(--font-display)] text-lg font-bold text-white">
                Tomáš Liptai
              </h3>
              <p className="text-sm text-magenta-300">
                Spolupráca s kanceláriou
              </p>
            </div>
          </div>

          <p className="mt-5 text-sm leading-relaxed text-white/60">
            „V úzkej spolupráci s kanceláriou Motúzová &amp; Lacko prepájame
            právo s praxou, aby bol súlad s GDPR pre klientov jednoduchý a
            udržateľný."
          </p>

          <div className="mt-6 space-y-2">
            <a
              href="mailto:office.liptai@gmail.com"
              className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.02] px-4 py-2.5 text-sm text-white/80 transition-colors hover:border-magenta-500/40 hover:text-white"
            >
              <Mail className="h-4 w-4 text-magenta-300" />
              office.liptai@gmail.com
            </a>
            <a
              href="tel:+420776883265"
              className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.02] px-4 py-2.5 text-sm text-white/80 transition-colors hover:border-magenta-500/40 hover:text-white"
            >
              <Phone className="h-4 w-4 text-magenta-300" />
              +420 776 883 265
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
