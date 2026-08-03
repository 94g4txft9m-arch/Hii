"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/Button";
import { NAV, NAV_LINKS } from "@/lib/sections";
import { LANDING_PATH } from "@/lib/site";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const reduce = useReducedMotion();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`sticky top-0 z-50 border-b backdrop-blur-md transition-[height,border-color,background-color,box-shadow] duration-200 motion-reduce:transition-none ${
        scrolled
          ? "bg-neutral-0/95 h-[4.5rem] border-neutral-200 shadow-[0_1px_0_rgba(36,42,100,0.04)]"
          : "bg-neutral-0/90 h-[5.5rem] border-transparent"
      } ${reduce ? "" : ""}`}
    >
      <div className="container-page flex h-full items-center justify-between gap-6">
        <Link
          href={LANDING_PATH}
          className="shrink-0"
          aria-label="GDPR Akadémia — úvod"
        >
          <Image
            src={NAV.logo.src}
            alt={NAV.logo.alt}
            width={NAV.logo.width}
            height={NAV.logo.height}
            priority
            className={`w-auto transition-[height] duration-200 motion-reduce:transition-none ${scrolled ? "h-12 md:h-14" : "h-14 md:h-16"}`}
          />
        </Link>

        <nav
          className="hidden items-center gap-9 xl:gap-11 lg:flex"
          aria-label="Hlavná navigácia"
        >
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-navy-700 hover:text-magenta-600 text-[1.05rem] leading-snug font-medium tracking-[-0.01em] transition-colors duration-150 motion-reduce:transition-none"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Button
            href={NAV.cta.href}
            variant="magenta"
            className="hidden sm:inline-flex"
          >
            {NAV.cta.label}
          </Button>
          <button
            type="button"
            className="text-navy-700 inline-flex size-11 items-center justify-center rounded-[var(--radius-sm)] lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Zavrieť menu" : "Otvoriť menu"}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? (
              <X aria-hidden className="size-6" />
            ) : (
              <Menu aria-hidden className="size-6" />
            )}
          </button>
        </div>
      </div>

      {open ? (
        <div
          id="mobile-nav"
          className="bg-neutral-0 absolute inset-x-0 top-full border-t border-neutral-200 lg:hidden"
        >
          <nav
            className="container-page flex flex-col gap-1 py-5"
            aria-label="Mobilná navigácia"
          >
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-navy-700 rounded-[var(--radius-sm)] px-2 py-3.5 text-[1.15rem] font-medium hover:bg-neutral-50"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Button
              href={NAV.cta.href}
              variant="magenta"
              className="mt-2"
              onClick={() => setOpen(false)}
            >
              {NAV.cta.label}
            </Button>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
