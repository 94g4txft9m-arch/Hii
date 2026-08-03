import Image from "next/image";
import { Mail, Phone } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { Section, SectionHeader } from "@/components/ui/Section";
import { LECTURERS_SECTION } from "@/lib/sections";
import type { TeamMember } from "@/lib/team";

const contactLinkClassName =
  "text-ui text-navy-700 hover:text-magenta-600 inline-flex items-center gap-2.5 underline-offset-4 hover:underline";

function formatPhoneDisplay(phone: string) {
  return phone;
}

function formatPhoneHref(phone: string) {
  return `tel:${phone.replace(/[^\d+]/g, "")}`;
}

/**
 * Layout zo screenshotu: foto → meno → bio → citát (bledá magenta) → kontakty.
 * 2 stĺpce lektori, potom „Tím kancelárie“.
 */
function PersonCard({
  person,
  placeholder,
}: {
  person: TeamMember;
  placeholder: string;
}) {
  const hasContact = Boolean(person.email || person.phone);

  return (
    <article className="flex h-full flex-col">
      <div className="photo-zoom relative aspect-square w-full max-w-[280px] overflow-hidden bg-navy-700">
        <Image
          src={person.photo.src}
          alt={person.photo.alt}
          fill
          quality={100}
          sizes="(max-width: 1024px) 50vw, 280px"
          className="object-cover object-center"
        />
      </div>

      <p className="text-eyebrow mt-6 text-neutral-500">{person.role}</p>
      <h4 className="text-display-sm text-navy-700 mt-2">{person.name}</h4>
      <p className="text-body mt-4 text-neutral-600">
        {person.bio ?? placeholder}
      </p>

      {person.quote ? (
        <blockquote className="quote-tint text-navy-700 mt-6 px-5 py-4">
          <p className="font-display text-[1.05rem] leading-snug tracking-[-0.01em] italic">
            „{person.quote}“
          </p>
        </blockquote>
      ) : null}

      {hasContact ? (
        <div className="mt-auto flex flex-col items-start gap-2.5 pt-6">
          {person.email ? (
            <a
              href={`mailto:${person.email}`}
              className={contactLinkClassName}
            >
              <span className="icon-anim">
                <Mail
                  className="size-4 shrink-0"
                  strokeWidth={1.5}
                  aria-hidden
                />
              </span>
              {person.email}
            </a>
          ) : null}
          {person.phone ? (
            <a
              href={formatPhoneHref(person.phone)}
              className={contactLinkClassName}
            >
              <span className="icon-anim">
                <Phone
                  className="size-4 shrink-0"
                  strokeWidth={1.5}
                  aria-hidden
                />
              </span>
              <span>{formatPhoneDisplay(person.phone)}</span>
            </a>
          ) : null}
        </div>
      ) : null}
    </article>
  );
}

export function Lecturers() {
  return (
    <Section id={LECTURERS_SECTION.anchor} surface="neutral-0">
      <SectionHeader
        eyebrow={LECTURERS_SECTION.eyebrow}
        title={LECTURERS_SECTION.title}
        subtitle={LECTURERS_SECTION.subtitle}
      />
      <div className="space-y-20 md:space-y-24">
        {LECTURERS_SECTION.groups.map((group) => (
          <div key={group.id}>
            {group.id !== "lecturers" ? (
              <div className="mb-10 max-w-2xl border-t border-neutral-200 pt-12 md:mb-12">
                <h3 className="text-display-md text-navy-700">{group.title}</h3>
                {group.subtitle ? (
                  <p className="text-body mt-3 text-neutral-600">
                    {group.subtitle}
                  </p>
                ) : null}
              </div>
            ) : null}
            <ul className="grid gap-12 lg:grid-cols-2 lg:gap-x-14 lg:gap-y-16">
              {group.members.map((person, i) => (
                <li key={person.slug}>
                  <Reveal delay={i * 0.05}>
                    <PersonCard
                      person={person}
                      placeholder={LECTURERS_SECTION.bioPlaceholder}
                    />
                  </Reveal>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}
