"use client";

import { CircleAlert } from "lucide-react";
import type {
  InputHTMLAttributes,
  ReactNode,
  SelectHTMLAttributes,
  TextareaHTMLAttributes,
} from "react";

type FieldShellProps = {
  id: string;
  label: string;
  error?: string;
  onNavy?: boolean;
  children: ReactNode;
  iconTop?: boolean;
};

export function FieldShell({
  id,
  label,
  error,
  onNavy,
  children,
  iconTop,
}: FieldShellProps) {
  const errorId = `${id}-error`;
  return (
    <div className="space-y-1.5">
      <label
        htmlFor={id}
        className={`text-ui-sm block ${onNavy ? "text-neutral-100" : "text-navy-700"}`}
      >
        {label}
      </label>
      <div className="relative">
        {children}
        {error ? (
          <CircleAlert
            aria-hidden
            className={`pointer-events-none absolute right-3 size-4 ${
              iconTop ? "top-3" : "top-1/2 -translate-y-1/2"
            } ${onNavy ? "text-neutral-0" : "text-navy-800"}`}
          />
        ) : null}
      </div>
      {error ? (
        <p
          id={errorId}
          className={`text-body-sm flex items-start gap-1.5 ${onNavy ? "text-neutral-100" : "text-navy-900"}`}
          role="alert"
        >
          <CircleAlert aria-hidden className="mt-0.5 size-4 shrink-0" />
          <span>{error}</span>
        </p>
      ) : null}
    </div>
  );
}

const inputBase =
  "w-full rounded-[var(--radius-sm)] border bg-neutral-0 px-3 py-2.5 text-body text-navy-700 placeholder:text-neutral-500";

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  error?: string;
  onNavy?: boolean;
};

export function TextInput({
  id,
  label,
  error,
  onNavy,
  className = "",
  ...rest
}: InputProps) {
  const errorId = `${id}-error`;
  return (
    <FieldShell id={id!} label={label} error={error} onNavy={onNavy}>
      <input
        id={id}
        className={`${inputBase} ${error ? "field-error pr-10" : "border-neutral-500"} ${className}`}
        aria-invalid={error ? true : undefined}
        aria-describedby={error ? errorId : undefined}
        {...rest}
      />
    </FieldShell>
  );
}

type TextareaProps = TextareaHTMLAttributes<HTMLTextAreaElement> & {
  label: string;
  error?: string;
  onNavy?: boolean;
};

export function TextTextarea({
  id,
  label,
  error,
  onNavy,
  className = "",
  ...rest
}: TextareaProps) {
  const errorId = `${id}-error`;
  return (
    <FieldShell
      id={id!}
      label={label}
      error={error}
      onNavy={onNavy}
      iconTop
    >
      <textarea
        id={id}
        className={`${inputBase} min-h-28 ${error ? "field-error pr-10" : "border-neutral-500"} ${className}`}
        aria-invalid={error ? true : undefined}
        aria-describedby={error ? errorId : undefined}
        {...rest}
      />
    </FieldShell>
  );
}

type SelectProps = SelectHTMLAttributes<HTMLSelectElement> & {
  label: string;
  error?: string;
  onNavy?: boolean;
  children: ReactNode;
};

export function TextSelect({
  id,
  label,
  error,
  onNavy,
  className = "",
  children,
  ...rest
}: SelectProps) {
  const errorId = `${id}-error`;
  return (
    <FieldShell id={id!} label={label} error={error} onNavy={onNavy}>
      <select
        id={id}
        className={`${inputBase} ${error ? "field-error pr-10" : "border-neutral-500"} ${className}`}
        aria-invalid={error ? true : undefined}
        aria-describedby={error ? errorId : undefined}
        {...rest}
      >
        {children}
      </select>
    </FieldShell>
  );
}
