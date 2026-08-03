"use client";

import Image from "next/image";
import { useReducedMotion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { HERO } from "@/lib/sections";

/**
 * Desktop: Canva kompozit (cutout partnerov na šikmých magenta/navy paneloch)
 * ako full-bleed podklad — text na čistom ľavom stĺpci.
 * Mobile: kompozit pod nadpisom, CTA nižšie.
 * Bez scroll-reveal — above-the-fold musí byť hneď čitateľný.
 */
export function Hero() {
  const reduce = useReducedMotion();

  return (
    <section
      className={`bg-neutral-0 text-navy-700 relative overflow-hidden ${reduce ? "" : "hero-fade-in"}`}
      data-surface="neutral-0"
      aria-labelledby="hero-eyebrow"
    >
      <div
        className="pointer-events-none absolute inset-0 hidden lg:block"
        aria-hidden
      >
        <Image
          src={HERO.photo.src}
          alt=""
          fill
          priority
          quality={100}
          sizes="100vw"
          className="object-contain object-right"
        />
      </div>
      <div className="hero-text-scrim hidden lg:block" aria-hidden />

      <div className="relative z-10 grid lg:min-h-[min(88vh,820px)] lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] lg:items-stretch">
        <div className="flex flex-col justify-center bg-neutral-0 px-[var(--page-pad)] pt-12 pb-6 lg:bg-transparent lg:py-20 xl:pr-10">
          <div className="mx-auto w-full max-w-[42rem] text-center lg:mx-0 lg:max-w-[38rem] lg:text-left">
            <h1
              id="hero-eyebrow"
              className="text-eyebrow text-navy-700 mx-auto max-w-[48ch] lg:mx-0"
            >
              {HERO.eyebrow}
            </h1>

            <p
              className="text-hero-title mx-auto mt-6 hidden max-w-[38rem] text-pretty md:mt-8 md:block lg:mx-0"
              role="heading"
              aria-level={2}
            >
              {HERO.titleDesktopLead}
              <span className="text-hero-accent">{HERO.titleDesktopAccent}</span>
              {HERO.titleDesktopLeadEnd}
              <em className="text-hero-title-em">{HERO.titleDesktopEm}</em>
            </p>

            <p
              className="text-hero-title mx-auto mt-6 text-pretty md:hidden"
              role="heading"
              aria-level={2}
            >
              {HERO.titleMobile}
            </p>

            <div className="hidden md:block">
              <p className="text-body-lg mx-auto mt-7 max-w-[38rem] text-pretty text-neutral-600 lg:mx-0">
                {HERO.subtitle}
              </p>
              <div className="mt-10 flex flex-wrap justify-center gap-3 lg:justify-start">
                <Button href={HERO.primaryCta.href} variant="magenta">
                  {HERO.primaryCta.label}
                </Button>
                <Button href={HERO.secondaryCta.href} variant="secondary">
                  {HERO.secondaryCta.label}
                </Button>
              </div>
              <p className="text-trust mx-auto mt-9 max-w-xl lg:mx-0">
                {HERO.trustItems.join(" · ")}
              </p>
            </div>
          </div>
        </div>

        <div className="hero-visual relative flex min-h-[280px] items-center justify-center sm:min-h-[360px] lg:hidden">
          <Image
            src={HERO.photo.src}
            alt={HERO.photo.alt}
            width={HERO.photo.width}
            height={HERO.photo.height}
            priority
            quality={95}
            sizes="100vw"
            className="h-auto w-full object-contain object-center"
          />
        </div>

        <div className="hidden lg:block" aria-hidden />

        <div className="bg-neutral-0 px-[var(--page-pad)] pt-6 pb-16 text-center md:hidden">
          <p className="text-body-lg measure mx-auto text-neutral-600">
            {HERO.subtitle}
          </p>
          <p className="text-body-lg measure mx-auto mt-3 text-neutral-600">
            {HERO.subtitleMobileExtra}
          </p>
          <div className="mt-9 flex flex-col items-stretch gap-3 sm:flex-row sm:flex-wrap sm:justify-center">
            <Button href={HERO.primaryCta.href} variant="magenta">
              {HERO.primaryCta.label}
            </Button>
            <Button href={HERO.secondaryCta.href} variant="secondary">
              {HERO.secondaryCta.label}
            </Button>
          </div>
          <p className="text-trust mx-auto mt-8 max-w-lg">
            {HERO.trustItems.join(" · ")}
          </p>
        </div>
      </div>

      <span className="sr-only">{HERO.photo.alt}</span>
    </section>
  );
}
