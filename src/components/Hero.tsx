import { motion } from "framer-motion";
import {
  ArrowRight,
  Sparkles,
  ShieldCheck,
  BadgeCheck,
  Star,
} from "lucide-react";

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.15 },
  },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as const },
  },
};

export function Hero() {
  return (
    <section id="top" className="relative px-4 pt-28 sm:pt-32 lg:pt-36">
      <div className="mx-auto grid max-w-6xl overflow-hidden rounded-[2rem] border border-white/10 shadow-card lg:grid-cols-[1.05fr_0.95fr]">
        {/* ĽAVÝ BIELY PRIESTOR */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="relative z-10 bg-paper px-7 py-12 sm:px-12 sm:py-16"
        >
          <motion.span
            variants={item}
            className="inline-flex items-center gap-2 rounded-full border border-magenta-500/20 bg-magenta-500/10 px-3 py-1.5 text-xs font-semibold text-magenta-600"
          >
            <Sparkles className="h-3.5 w-3.5" />
            Dizajn &amp; obsah 2026 · GDPR + AI Act
          </motion.span>

          <motion.h1
            variants={item}
            className="mt-6 font-[var(--font-display)] text-4xl font-bold leading-[1.05] tracking-tight text-navy-900 sm:text-5xl lg:text-6xl"
          >
            Ochrana údajov,
            <br />
            ktorá dáva
            <span className="relative ml-2 inline-block">
              <span className="text-magenta-500">zmysel</span>
              <svg
                viewBox="0 0 200 20"
                className="absolute -bottom-2 left-0 h-3 w-full text-magenta-400"
                fill="none"
              >
                <path
                  d="M2 14 C 50 4, 150 4, 198 12"
                  stroke="currentColor"
                  strokeWidth="4"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-7 max-w-md text-base leading-relaxed text-navy-800/70 sm:text-lg"
          >
            <strong className="font-semibold text-navy-900">
              Motúzová &amp; Lacko
            </strong>{" "}
            — praktické školenia, audity a poradenstvo v ochrane osobných údajov.
            Zrozumiteľne, právne obhájiteľne a pripravené na kontrolu.
          </motion.p>

          <motion.div variants={item} className="mt-9 flex flex-wrap gap-3">
            <a
              href="#kurzy"
              className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-magenta-500 to-magenta-400 px-6 py-3.5 text-sm font-semibold text-white shadow-glow transition-transform hover:-translate-y-0.5"
            >
              Prehľad kurzov
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#kontakt"
              className="inline-flex items-center gap-2 rounded-xl border border-navy-900/15 bg-white px-6 py-3.5 text-sm font-semibold text-navy-900 transition-colors hover:border-navy-900/30"
            >
              Nezáväzná konzultácia
            </a>
          </motion.div>

          <motion.div
            variants={item}
            className="mt-10 flex items-center gap-6 text-navy-900"
          >
            <div className="flex items-center gap-2">
              <div className="flex -space-x-1 text-magenta-500">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <span className="text-sm font-semibold">4,9/5</span>
            </div>
            <div className="h-8 w-px bg-navy-900/10" />
            <div className="flex items-center gap-2 text-sm font-medium text-navy-800/70">
              <BadgeCheck className="h-5 w-5 text-magenta-500" />
              480+ vyškolených organizácií
            </div>
          </motion.div>
        </motion.div>

        {/* PRAVÝ NAVY PANEL S ĽUĎMI + MAGENTA ŠIKMÉ PANELY */}
        <div className="relative min-h-[26rem] overflow-hidden bg-gradient-to-br from-navy-800 via-navy-900 to-navy-950 lg:min-h-full">
          <div className="slant absolute -left-10 top-0 h-full w-2/3 bg-gradient-to-br from-magenta-500 to-magenta-600 opacity-90" />
          <div className="slant-reverse absolute right-0 top-0 h-full w-1/2 bg-navy-700/60" />
          <div className="noise-overlay absolute inset-0 opacity-10" />

          <motion.img
            src="/graphics/hero-people.png"
            alt="Konzultantky a konzultanti GDPR Akadémie — Motúzová & Lacko"
            initial={{ opacity: 0, scale: 1.06, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="absolute bottom-0 left-1/2 h-[112%] w-auto max-w-none -translate-x-1/2 object-contain drop-shadow-2xl"
          />

          {/* plávajúce sklenené odznaky */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6, duration: 0.7 }}
            className="glass absolute left-5 top-10 flex items-center gap-2 rounded-xl px-3 py-2 text-xs font-semibold text-white animate-[float_7s_ease-in-out_infinite]"
          >
            <ShieldCheck className="h-4 w-4 text-magenta-300" />
            100% súlad s GDPR
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8, duration: 0.7 }}
            className="glass absolute bottom-10 right-5 flex items-center gap-2 rounded-xl px-3 py-2 text-xs font-semibold text-white animate-[float_9s_ease-in-out_infinite]"
          >
            <BadgeCheck className="h-4 w-4 text-magenta-300" />
            Certifikát o absolvovaní
          </motion.div>
        </div>
      </div>
    </section>
  );
}
