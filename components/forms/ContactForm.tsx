"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/Button";
import { TextInput, TextSelect, TextTextarea } from "@/components/ui/FormField";
import { CONTACT_CTA } from "@/lib/sections";
import { LAW_FIRM } from "@/lib/site";

const schema = z.object({
  name: z.string().trim().min(2, "Zadajte meno a priezvisko (aspoň 2 znaky)."),
  company: z.string().trim().min(2, "Zadajte názov firmy (aspoň 2 znaky)."),
  email: z.email("Zadajte platnú e-mailovú adresu."),
  phone: z
    .string()
    .trim()
    .min(6, "Zadajte telefónne číslo.")
    .regex(/^[\d\s+\-()/]+$/, "Telefón môže obsahovať číslice a bežné znaky."),
  dpoCount: z.string().trim().min(1, "Uveďte počet DPO."),
  format: z.enum(["online", "onsite", "unknown"], {
    message: "Vyberte preferovaný formát.",
  }),
  message: z.string().trim().max(2000, "Správa môže mať najviac 2000 znakov."),
});

type FormValues = z.infer<typeof schema>;

const formatLabels: Record<FormValues["format"], string> = {
  online: "Online",
  onsite: "Prezenčne",
  unknown: "Neviem / poradíte",
};

export function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      name: "",
      company: "",
      email: "",
      phone: "",
      dpoCount: "",
      format: "unknown",
      message: "",
    },
  });

  const onSubmit = (data: FormValues) => {
    // TODO: napojiť API endpoint / server action na odoslanie dopytu.
    const body = [
      `Meno: ${data.name}`,
      `Firma: ${data.company}`,
      `E-mail: ${data.email}`,
      `Telefón: ${data.phone}`,
      `Počet DPO: ${data.dpoCount}`,
      `Formát: ${formatLabels[data.format]}`,
      "",
      data.message || "(bez správy)",
    ].join("\n");

    console.info("[GDPR Akadémia] dopyt (stub)", data);

    const mailto = `mailto:${LAW_FIRM.emails.motuzova}?subject=${encodeURIComponent(
      `Dopyt GDPR Akadémia — ${data.company}`,
    )}&body=${encodeURIComponent(body)}`;

    window.alert(
      "Ďakujeme. Dopyt je pripravený na odoslanie e-mailom (dočasný stub pred API).",
    );
    window.location.href = mailto;
    reset();
  };

  const privacy = CONTACT_CTA.privacy;
  const hasErrors = Object.keys(errors).length > 0;

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      className="space-y-5"
      data-surface="navy"
      aria-label="Dopyt na školenie GDPR"
    >
      {hasErrors ? (
        <div
          role="alert"
          className="border-neutral-0/40 bg-navy-800 text-body-sm rounded-[var(--radius-sm)] border border-l-4 px-4 py-3 text-neutral-100"
        >
          Skontrolujte vyznačené polia — niektoré údaje chýbajú alebo nie sú v
          správnom tvare.
        </div>
      ) : null}

      <div className="grid gap-5 sm:grid-cols-2">
        <TextInput
          id="name"
          label="Meno a priezvisko"
          autoComplete="name"
          onNavy
          error={errors.name?.message}
          {...register("name")}
        />
        <TextInput
          id="company"
          label="Firma"
          autoComplete="organization"
          onNavy
          error={errors.company?.message}
          {...register("company")}
        />
        <TextInput
          id="email"
          label="E-mail"
          type="email"
          autoComplete="email"
          onNavy
          error={errors.email?.message}
          {...register("email")}
        />
        <TextInput
          id="phone"
          label="Telefón"
          type="tel"
          autoComplete="tel"
          onNavy
          error={errors.phone?.message}
          {...register("phone")}
        />
        <TextInput
          id="dpoCount"
          label="Počet DPO"
          inputMode="numeric"
          onNavy
          error={errors.dpoCount?.message}
          {...register("dpoCount")}
        />
        <TextSelect
          id="format"
          label="Preferovaný formát"
          onNavy
          error={errors.format?.message}
          {...register("format")}
        >
          <option value="unknown">Neviem / poradíte</option>
          <option value="online">Online</option>
          <option value="onsite">Prezenčne</option>
        </TextSelect>
      </div>

      <TextTextarea
        id="message"
        label="Správa (voliteľné)"
        onNavy
        error={errors.message?.message}
        {...register("message")}
      />

      <aside className="text-body-sm border-neutral-0/20 space-y-2 border-t pt-5 text-neutral-100">
        <p>
          <strong className="text-neutral-0 font-medium">
            Prevádzkovateľ:
          </strong>{" "}
          {privacy.controller}
        </p>
        <p>
          <strong className="text-neutral-0 font-medium">Účel:</strong>{" "}
          {privacy.purpose}
        </p>
        <p>
          <strong className="text-neutral-0 font-medium">Právny základ:</strong>{" "}
          {privacy.legalBasis}
        </p>
        <p>
          <strong className="text-neutral-0 font-medium">
            Doba uchovávania:
          </strong>{" "}
          {privacy.retention}
        </p>
        <p>
          <a
            href={privacy.moreHref}
            className="text-magenta-500 underline-offset-2 hover:underline"
          >
            {privacy.moreLabel}
          </a>
        </p>
      </aside>

      <Button type="submit" variant="magenta" disabled={isSubmitting}>
        {isSubmitting ? "Odosielam…" : "Odoslať dopyt"}
      </Button>
    </form>
  );
}
