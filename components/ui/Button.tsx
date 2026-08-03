import Link from "next/link";
import type { ComponentPropsWithoutRef, ReactNode } from "react";

type Variant = "primary" | "magenta" | "secondary" | "ghost" | "ghost-on-navy";

const variants: Record<Variant, string> = {
  primary: "bg-navy-700 text-neutral-0 hover:bg-navy-600 active:bg-navy-800",
  magenta:
    "bg-magenta-500 text-neutral-0 hover:bg-magenta-600 active:bg-magenta-700",
  secondary:
    "border border-navy-700 bg-transparent text-navy-700 hover:bg-neutral-50 active:bg-neutral-100",
  ghost: "bg-transparent text-navy-700 hover:bg-neutral-100",
  "ghost-on-navy":
    "border border-neutral-0/40 bg-transparent text-neutral-0 hover:border-magenta-500 hover:text-magenta-500",
};

const base =
  "inline-flex items-center justify-center gap-2 rounded-[var(--radius-sm)] px-5 py-3 text-ui transition-[transform,colors,background-color,border-color] duration-150 hover:-translate-y-px active:translate-y-0 active:scale-[0.985] disabled:cursor-not-allowed disabled:bg-neutral-100 disabled:text-neutral-500 disabled:hover:translate-y-0 motion-reduce:transition-colors motion-reduce:hover:translate-y-0 motion-reduce:active:scale-100";

type ButtonAsButton = {
  href?: undefined;
  variant?: Variant;
  className?: string;
  children: ReactNode;
} & Omit<ComponentPropsWithoutRef<"button">, "className" | "children">;

type ButtonAsLink = {
  href: string;
  variant?: Variant;
  className?: string;
  children: ReactNode;
} & Omit<ComponentPropsWithoutRef<"a">, "className" | "children" | "href">;

export type ButtonProps = ButtonAsButton | ButtonAsLink;

export function Button({
  variant = "primary",
  className = "",
  children,
  ...props
}: ButtonProps) {
  const classes = `${base} ${variants[variant]} ${className}`;

  if ("href" in props && props.href) {
    const { href, ...linkProps } = props;
    return (
      <Link href={href} className={classes} {...linkProps}>
        {children}
      </Link>
    );
  }

  const { type = "button", ...buttonProps } = props as Omit<
    ButtonAsButton,
    "variant" | "className" | "children"
  >;

  return (
    <button type={type} className={classes} {...buttonProps}>
      {children}
    </button>
  );
}
