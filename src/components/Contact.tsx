import { useState, type FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Phone, Send, CheckCircle2, MapPin } from "lucide-react";
import { SectionTitle } from "./SectionTitle";

export function Contact() {
  const [sent, setSent] = useState(false);
  const [name, setName] = useState("");

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <section id="kontakt" className="mx-auto mt-28 max-w-6xl scroll-mt-24 px-4">
      <SectionTitle
        eyebrow="Kontakt"
        title="Dohodnime si nezáväznú konzultáciu"
        subtitle="Napíšte nám a ozveme sa najneskôr do 24 hodín."
      />

      <div className="mt-14 grid gap-6 lg:grid-cols-[1fr_1.1fr]">
        {/* Kontaktné údaje */}
        <div className="flex flex-col gap-4">
          <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-navy-800 to-navy-950 p-7">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-magenta-300">
              Priamy kontakt
            </p>
            <p className="mt-2 font-[var(--font-display)] text-2xl font-bold text-white">
              Tomáš Liptai
            </p>
            <p className="text-sm text-white/50">
              Spolupráca s kanceláriou Motúzová &amp; Lacko
            </p>

            <div className="mt-6 space-y-3">
              <a
                href="mailto:office.liptai@gmail.com"
                className="flex items-center gap-3 text-white/85 transition-colors hover:text-magenta-300"
              >
                <span className="grid h-10 w-10 place-items-center rounded-xl bg-magenta-500/15">
                  <Mail className="h-5 w-5 text-magenta-300" />
                </span>
                office.liptai@gmail.com
              </a>
              <a
                href="tel:+420776883265"
                className="flex items-center gap-3 text-white/85 transition-colors hover:text-magenta-300"
              >
                <span className="grid h-10 w-10 place-items-center rounded-xl bg-magenta-500/15">
                  <Phone className="h-5 w-5 text-magenta-300" />
                </span>
                +420 776 883 265
              </a>
              <div className="flex items-center gap-3 text-white/85">
                <span className="grid h-10 w-10 place-items-center rounded-xl bg-magenta-500/15">
                  <MapPin className="h-5 w-5 text-magenta-300" />
                </span>
                Školenia online &amp; v celej SR a ČR
              </div>
            </div>
          </div>
        </div>

        {/* Formulár */}
        <div className="relative rounded-3xl border border-white/10 bg-white/[0.03] p-7">
          <AnimatePresence mode="wait">
            {sent ? (
              <motion.div
                key="ok"
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex min-h-[20rem] flex-col items-center justify-center text-center"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 200, damping: 14 }}
                  className="grid h-16 w-16 place-items-center rounded-full bg-magenta-500/20"
                >
                  <CheckCircle2 className="h-9 w-9 text-magenta-300" />
                </motion.div>
                <h3 className="mt-5 font-[var(--font-display)] text-2xl font-bold text-white">
                  Ďakujeme{name ? `, ${name}` : ""}!
                </h3>
                <p className="mt-2 max-w-sm text-sm text-white/60">
                  Vaša žiadosť bola odoslaná. Tomáš Liptai sa vám ozve do 24
                  hodín na uvedený kontakt.
                </p>
                <button
                  onClick={() => {
                    setSent(false);
                    setName("");
                  }}
                  className="mt-6 rounded-xl border border-white/15 px-5 py-2.5 text-sm font-semibold text-white hover:border-white/30"
                >
                  Odoslať ďalšiu správu
                </button>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                onSubmit={onSubmit}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="grid gap-4"
              >
                <div className="grid gap-4 sm:grid-cols-2">
                  <Field
                    label="Meno a priezvisko"
                    id="name"
                    value={name}
                    onChange={setName}
                    placeholder="Jana Nováková"
                    required
                  />
                  <Field
                    label="Firma / organizácia"
                    id="company"
                    placeholder="Vaša firma s.r.o."
                  />
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <Field
                    label="E-mail"
                    id="email"
                    type="email"
                    placeholder="jana@firma.sk"
                    required
                  />
                  <Field
                    label="Telefón"
                    id="phone"
                    type="tel"
                    placeholder="+421 900 000 000"
                  />
                </div>
                <div>
                  <label
                    htmlFor="msg"
                    className="mb-1.5 block text-xs font-medium text-white/60"
                  >
                    Správa
                  </label>
                  <textarea
                    id="msg"
                    rows={4}
                    placeholder="Mám záujem o školenie GDPR pre firmy…"
                    className="w-full resize-none rounded-xl border border-white/10 bg-navy-950/60 px-4 py-3 text-sm text-white placeholder:text-white/30 outline-none transition-colors focus:border-magenta-500/60"
                  />
                </div>
                <button
                  type="submit"
                  className="group inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-magenta-500 to-magenta-400 px-6 py-3.5 text-sm font-semibold text-white shadow-glow transition-transform hover:-translate-y-0.5"
                >
                  Odoslať žiadosť
                  <Send className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </button>
                <p className="text-center text-xs text-white/40">
                  Odoslaním súhlasíte so spracovaním údajov za účelom vybavenia
                  dopytu.
                </p>
              </motion.form>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

type FieldProps = {
  label: string;
  id: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
  value?: string;
  onChange?: (v: string) => void;
};

function Field({
  label,
  id,
  type = "text",
  placeholder,
  required,
  value,
  onChange,
}: FieldProps) {
  return (
    <div>
      <label htmlFor={id} className="mb-1.5 block text-xs font-medium text-white/60">
        {label}
        {required && <span className="text-magenta-400"> *</span>}
      </label>
      <input
        id={id}
        type={type}
        required={required}
        placeholder={placeholder}
        value={value}
        onChange={onChange ? (e) => onChange(e.target.value) : undefined}
        className="w-full rounded-xl border border-white/10 bg-navy-950/60 px-4 py-3 text-sm text-white placeholder:text-white/30 outline-none transition-colors focus:border-magenta-500/60"
      />
    </div>
  );
}
