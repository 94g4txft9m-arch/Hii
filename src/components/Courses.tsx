import { motion } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";
import { courses } from "../data/content";
import { SectionTitle } from "./SectionTitle";

export function Courses() {
  return (
    <section id="kurzy" className="mx-auto mt-28 max-w-6xl scroll-mt-24 px-4">
      <SectionTitle
        eyebrow="Kurzy a školenia"
        title="Vyberte si formát, ktorý vám sadne"
        subtitle="Od základov pre zamestnancov až po certifikačnú DPO Akadémiu. Online, prezenčne aj hybridne — vždy s certifikátom."
      />

      <div className="mt-14 grid gap-5 lg:grid-cols-3">
        {courses.map((c, i) => (
          <motion.div
            key={c.title}
            initial={{ opacity: 0, y: 34 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            className={`relative flex flex-col rounded-3xl border p-7 ${
              c.featured
                ? "border-magenta-500/50 bg-gradient-to-b from-magenta-500/10 to-transparent shadow-glow"
                : "border-white/10 bg-white/[0.03]"
            }`}
          >
            {c.featured && (
              <span className="absolute -top-3 left-7 rounded-full bg-gradient-to-r from-magenta-500 to-magenta-400 px-3 py-1 text-xs font-bold text-white">
                Najobľúbenejšie
              </span>
            )}
            <div className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br from-magenta-500/25 to-navy-600/30 ring-1 ring-white/10">
              <c.icon className="h-6 w-6 text-magenta-300" />
            </div>
            <h3 className="mt-5 font-[var(--font-display)] text-xl font-bold text-white">
              {c.title}
            </h3>
            <p className="mt-1 text-sm font-medium text-magenta-300">
              {c.level}
            </p>
            <p className="mt-1 text-xs text-white/45">{c.duration}</p>

            <ul className="mt-6 space-y-3">
              {c.points.map((p) => (
                <li key={p} className="flex items-start gap-2.5 text-sm text-white/70">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-magenta-400" />
                  {p}
                </li>
              ))}
            </ul>

            <a
              href="#kontakt"
              className={`group mt-8 inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold transition-transform hover:-translate-y-0.5 ${
                c.featured
                  ? "bg-gradient-to-r from-magenta-500 to-magenta-400 text-white shadow-glow"
                  : "border border-white/15 text-white hover:border-white/30"
              }`}
            >
              Mám záujem
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
