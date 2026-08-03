"use client";

import { Minus, Plus } from "lucide-react";
import { useId, useState, type ReactNode } from "react";

type Tone = "light" | "navy";

type AccordionItemProps = {
  title: string;
  children: ReactNode;
  defaultOpen?: boolean;
  tone?: Tone;
};

const toneShell: Record<Tone, string> = {
  light: "border-b border-neutral-200",
  navy: "border-b border-neutral-0/20",
};

const toneButton: Record<Tone, string> = {
  light: "text-navy-700 focus-visible:outline-navy-700",
  navy: "text-neutral-0 focus-visible:outline-gold-500",
};

/** Kruhové + ako na cieľovom FAQ screenshote. */
const toneIcon: Record<Tone, string> = {
  light: "border border-neutral-300 text-navy-700",
  navy: "border border-neutral-0/50 text-neutral-0",
};

export function AccordionItem({
  title,
  children,
  defaultOpen = false,
  tone = "light",
}: AccordionItemProps) {
  const [open, setOpen] = useState(defaultOpen);
  const panelId = useId();
  const buttonId = useId();

  return (
    <div className={toneShell[tone]}>
      <h3>
        <button
          id={buttonId}
          type="button"
          className={`font-display flex w-full items-center justify-between gap-4 py-5 text-left text-[1.12rem] leading-snug font-medium tracking-[-0.015em] sm:text-[1.25rem] ${toneButton[tone]}`}
          aria-expanded={open}
          aria-controls={panelId}
          onClick={() => setOpen((v) => !v)}
        >
          <span>{title}</span>
          <span
            aria-hidden
            className={`flex size-9 shrink-0 items-center justify-center rounded-full transition-transform duration-300 motion-reduce:transition-none ${open ? "rotate-180" : ""} ${toneIcon[tone]}`}
          >
            {open ? (
              <Minus className="size-4" strokeWidth={2} />
            ) : (
              <Plus className="size-4" strokeWidth={2} />
            )}
          </span>
        </button>
      </h3>
      <div
        id={panelId}
        role="region"
        aria-labelledby={buttonId}
        hidden={!open}
        className={`pb-6 ${open ? "accordion-panel" : ""}`}
      >
        {children}
      </div>
    </div>
  );
}

/** Progressive enhancement: readable without JS via native details. */
export function DetailsItem({
  title,
  children,
  open,
  tone = "light",
}: {
  title: string;
  children: ReactNode;
  open?: boolean;
  tone?: Tone;
}) {
  return (
    <details className={`group ${toneShell[tone]}`} open={open}>
      <summary
        className={`font-display flex cursor-pointer list-none items-center justify-between gap-4 py-5 text-left text-[1.12rem] leading-snug font-medium tracking-[-0.015em] sm:text-[1.25rem] [&::-webkit-details-marker]:hidden ${toneButton[tone]}`}
      >
        <span>{title}</span>
        <span
          aria-hidden
          className={`relative flex size-9 shrink-0 items-center justify-center rounded-full ${toneIcon[tone]}`}
        >
          <Plus
            className="size-4 transition-opacity duration-150 group-open:opacity-0 motion-reduce:transition-none"
            strokeWidth={2}
          />
          <Minus
            className="absolute size-4 opacity-0 transition-opacity duration-150 group-open:opacity-100 motion-reduce:transition-none"
            strokeWidth={2}
          />
        </span>
      </summary>
      <div className="pb-6">{children}</div>
    </details>
  );
}
