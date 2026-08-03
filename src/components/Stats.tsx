import { motion } from "framer-motion";
import { stats } from "../data/content";

export function Stats() {
  return (
    <section className="mx-auto mt-20 max-w-6xl px-4">
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
        {stats.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.08 }}
            className="glass rounded-2xl p-5 text-center"
          >
            <div className="bg-gradient-to-br from-white to-magenta-300 bg-clip-text font-[var(--font-display)] text-3xl font-bold text-transparent sm:text-4xl">
              {s.value}
            </div>
            <div className="mt-2 text-xs leading-snug text-white/55 sm:text-sm">
              {s.label}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
