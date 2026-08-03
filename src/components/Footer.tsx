import { ShieldCheck, Mail, Phone } from "lucide-react";

export function Footer() {
  return (
    <footer className="mx-auto mt-28 max-w-6xl px-4 pb-10">
      <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-navy-800 to-navy-950 p-8 sm:p-12">
        <div className="slant absolute -left-8 top-0 h-full w-1/3 bg-gradient-to-br from-magenta-500/25 to-transparent" />
        <div className="relative grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2.5">
              <span className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-magenta-500 to-navy-600">
                <ShieldCheck className="h-5 w-5 text-white" />
              </span>
              <div className="leading-none">
                <div className="font-[var(--font-display)] font-bold text-white">
                  GDPR Akadémia
                </div>
                <div className="text-[10px] uppercase tracking-[0.2em] text-magenta-300">
                  Motúzová &amp; Lacko
                </div>
              </div>
            </div>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/50">
              Praktické školenia, audity a poradenstvo v oblasti ochrany
              osobných údajov. Súlad s GDPR a AI Act pripravený na rok 2026.
            </p>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-white/40">
              Navigácia
            </h4>
            <ul className="mt-4 space-y-2 text-sm text-white/60">
              <li><a href="#preco" className="hover:text-magenta-300">Prečo GDPR</a></li>
              <li><a href="#kurzy" className="hover:text-magenta-300">Kurzy</a></li>
              <li><a href="#postup" className="hover:text-magenta-300">Ako to funguje</a></li>
              <li><a href="#tim" className="hover:text-magenta-300">Tím</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-white/40">
              Kontakt
            </h4>
            <ul className="mt-4 space-y-2 text-sm text-white/60">
              <li>
                <a href="mailto:office.liptai@gmail.com" className="flex items-center gap-2 hover:text-magenta-300">
                  <Mail className="h-4 w-4" /> office.liptai@gmail.com
                </a>
              </li>
              <li>
                <a href="tel:+420776883265" className="flex items-center gap-2 hover:text-magenta-300">
                  <Phone className="h-4 w-4" /> +420 776 883 265
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="relative mt-10 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-6 text-xs text-white/40 sm:flex-row">
          <span>© {new Date().getFullYear()} GDPR Akadémia — Motúzová &amp; Lacko. Všetky práva vyhradené.</span>
          <span>Dizajn 2026 · Ochrana údajov s ľudským prístupom</span>
        </div>
      </div>
    </footer>
  );
}
