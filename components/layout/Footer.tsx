import Image from "next/image";
import Link from "next/link";
import { FOOTER, NAV } from "@/lib/sections";
import { LAW_FIRM, SITE_NAME } from "@/lib/site";

export function Footer() {
  const { address } = LAW_FIRM;

  return (
    <footer
      className="section-panel-footer text-navy-700 relative overflow-hidden"
      data-surface="panel"
    >
      <div className="container-page section-y relative z-10 grid gap-12 md:grid-cols-[1.3fr_1fr_1fr]">
        <div>
          <Image
            src={NAV.logo.src}
            alt={NAV.logo.alt}
            width={NAV.logo.width}
            height={NAV.logo.height}
            className="h-10 w-auto"
          />
          <p className="text-body-sm mt-5 max-w-sm text-neutral-600">
            {SITE_NAME} — školiace programy DPO advokátskej kancelárie{" "}
            {LAW_FIRM.shortName}.
          </p>
        </div>

        <div>
          <p className="text-eyebrow mb-3 text-navy-700">Kontakt</p>
          <ul className="text-body-sm space-y-2 text-neutral-600">
            <li>
              <a
                href={`mailto:${LAW_FIRM.emails.motuzova}`}
                className="hover:text-magenta-600 underline-offset-2 hover:underline"
              >
                {LAW_FIRM.emails.motuzova}
              </a>
            </li>
            <li>
              <a
                href={`mailto:${LAW_FIRM.emails.lacko}`}
                className="hover:text-magenta-600 underline-offset-2 hover:underline"
              >
                {LAW_FIRM.emails.lacko}
              </a>
            </li>
            <li>
              <a
                href={`tel:${LAW_FIRM.phones.motuzova.replace(/\s/g, "")}`}
                className="hover:text-magenta-600 underline-offset-2 hover:underline"
              >
                {LAW_FIRM.phones.motuzova}
              </a>
            </li>
            <li>
              <a
                href={LAW_FIRM.web}
                className="hover:text-magenta-600 underline-offset-2 hover:underline"
                rel="noopener noreferrer"
                target="_blank"
              >
                {LAW_FIRM.web.replace(/^https?:\/\//, "")}
              </a>
            </li>
          </ul>
        </div>

        <div>
          <p className="text-eyebrow mb-3 text-navy-700">Kancelária</p>
          <address className="text-body-sm text-neutral-600 not-italic">
            {LAW_FIRM.name}
            <br />
            {address.street}
            <br />
            {address.postalCode} {address.city}
          </address>
          <p className="text-body-sm mt-3 text-neutral-600">
            IČO: {LAW_FIRM.companyId}
            <br />
            DIČ: {LAW_FIRM.taxId}
            <br />
            IČ DPH: {LAW_FIRM.vatId}
          </p>
          <p className="text-body-sm mt-3 text-neutral-500">
            {LAW_FIRM.bar}
            <br />
            {LAW_FIRM.barRegistration ?? FOOTER.sakPlaceholder}
          </p>
        </div>
      </div>

      <div className="relative z-10 border-t border-neutral-200">
        <div className="container-page text-body-sm flex flex-col gap-3 py-6 text-neutral-500 sm:flex-row sm:items-center sm:justify-between">
          <p>© {LAW_FIRM.foundedYear}–{new Date().getFullYear()} {LAW_FIRM.shortName}</p>
          <div className="flex flex-wrap gap-4">
            <Link
              href={FOOTER.privacyHref}
              className="hover:text-magenta-600 underline-offset-2 hover:underline"
            >
              Ochrana osobných údajov
            </Link>
            <Link
              href={FOOTER.cookiesHref}
              className="hover:text-magenta-600 underline-offset-2 hover:underline"
            >
              Cookies (vzor)
            </Link>
          </div>
        </div>
      </div>

      <div id="ochrana-udajov" className="sr-only">
        Informácie o ochrane osobných údajov — {"{{ DOPLNIŤ }}"} úplný text po
        dodaní klientkou.
      </div>
      <div id="cookies" className="sr-only">
        Informácie o cookies — vzor; {"{{ DOPLNIŤ }}"} finálne znenie.
      </div>
    </footer>
  );
}
