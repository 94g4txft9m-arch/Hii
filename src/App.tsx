import { motion } from "framer-motion";

/**
 * Vizuálny lab — žiadny finálny marketingový copy.
 * Tehla po tehle pridávame panely, typografiu, motion a kompozície.
 * Text príde neskôr z originálu Hii (tag fixacia-2026-08-04).
 */
export function App() {
  return (
    <div className="min-h-screen">
      <header className="border-b border-neutral-200 bg-neutral-0">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
          <img
            src="/brand/logo.svg"
            alt="Motúzová & Lacko"
            width={220}
            height={60}
            className="h-10 w-auto"
          />
          <p className="text-xs font-medium tracking-[0.18em] text-magenta-500 uppercase">
            DOCTA DESIGNE GDPR · vizuálny lab
          </p>
        </div>
      </header>

      <main>
        {/* Tehla 1 — hero plocha (len vizuál, placeholder text) */}
        <section className="relative overflow-hidden bg-neutral-0">
          <div className="mx-auto grid max-w-6xl lg:grid-cols-2 lg:min-h-[70vh]">
            <div className="flex flex-col justify-center px-6 py-16 lg:py-24">
              <p className="text-xs font-semibold tracking-[0.2em] text-magenta-500 uppercase">
                Tehla 01 · Hero
              </p>
              <h1 className="mt-4 font-[family-name:var(--font-display)] text-4xl leading-tight text-navy-700 md:text-5xl">
                Vizuálna plocha
              </h1>
              <p className="mt-4 max-w-md text-neutral-600">
                Tu skladáme grafiku. Finálny text príde z originálu Hii po
                dokončení vizuálu.
              </p>
            </div>
            <div className="relative min-h-[22rem] lg:min-h-full">
              <motion.img
                src="/brand/hero-motuzova-lacko.png"
                alt=""
                initial={{ opacity: 0, scale: 1.04 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                className="absolute inset-0 h-full w-full object-contain object-right"
              />
            </div>
          </div>
        </section>

        {/* Tehla 2 — pruhový navy pás */}
        <section className="relative overflow-hidden px-6 py-20 text-neutral-0">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: "url(/brand/brand-stripes.png)" }}
            aria-hidden
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(105deg, rgba(18,22,58,0.9) 0%, rgba(18,22,58,0.74) 48%, rgba(18,22,58,0.58) 100%)",
            }}
            aria-hidden
          />
          <div className="relative mx-auto max-w-6xl">
            <p className="text-xs font-semibold tracking-[0.2em] text-gold-500 uppercase">
              Tehla 02 · Navy pás
            </p>
            <h2 className="mt-3 font-[family-name:var(--font-display)] text-3xl md:text-4xl">
              Pruhový brand podklad
            </h2>
            <p className="mt-4 max-w-xl text-neutral-100/90">
              Raster 2880×1620 pod tmavým závojom — čitateľnosť textu
              zachovaná. Copy sem neskôr z originálu.
            </p>
          </div>
        </section>

        {/* Tehla 3 — portréty */}
        <section className="bg-neutral-0 px-6 py-20">
          <div className="mx-auto max-w-6xl">
            <p className="text-xs font-semibold tracking-[0.2em] text-magenta-500 uppercase">
              Tehla 03 · Portréty
            </p>
            <h2 className="mt-3 font-[family-name:var(--font-display)] text-3xl text-navy-700">
              Tím — vizuálna mriežka
            </h2>
            <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {[
                ["zuzana-motuzova.png", "Lektorka"],
                ["pavel-lacko.png", "Lektor"],
                ["jozef-manuel-sencak.png", "Tím"],
                ["tomas-liptai.png", "Tím"],
              ].map(([file, role]) => (
                <li key={file} className="group">
                  <div className="overflow-hidden bg-lavender">
                    <img
                      src={`/team/${file}`}
                      alt=""
                      className="aspect-square w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <p className="mt-3 text-xs tracking-[0.16em] text-neutral-500 uppercase">
                    {role}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </main>

      <footer className="border-t border-neutral-200 bg-neutral-50 px-6 py-8 text-sm text-neutral-500">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 sm:flex-row sm:justify-between">
          <p>DOCTA DESIGNE GDPR — vizuálny lab</p>
          <p>
            Text:{" "}
            <a
              className="text-magenta-600 underline-offset-2 hover:underline"
              href="https://github.com/94g4txft9m-arch/Hii/tree/fixacia-2026-08-04"
            >
              Hii @ fixacia-2026-08-04
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
}
