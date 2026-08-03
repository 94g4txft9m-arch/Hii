import type { Metadata, Viewport } from "next";
import { fontVariables } from "./fonts";
import {
  LANDING_CANONICAL,
  LAW_FIRM,
  SITE_NAME,
  SITE_URL,
} from "@/lib/site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `Školenie GDPR pre zodpovedné osoby (DPO) | ${LAW_FIRM.shortName}`,
    template: `%s | ${LAW_FIRM.shortName}`,
  },
  description:
    "Školenie a aktualizačné školenie pre zodpovedné osoby. Vedú advokáti, ktorí klientov pri kontrolách ÚOOÚ SR zastupujú. Osvedčenie o absolvovaní. Aktuálne termíny.",
  applicationName: SITE_NAME,
  authors: [{ name: LAW_FIRM.name, url: LAW_FIRM.web }],
  openGraph: {
    type: "website",
    locale: "sk_SK",
    url: LANDING_CANONICAL,
    siteName: SITE_NAME,
    title: `Školenie GDPR pre zodpovedné osoby (DPO) | ${LAW_FIRM.shortName}`,
    description:
      "Školenie a aktualizačné školenie pre zodpovedné osoby. Vedú advokáti, ktorí klientov pri kontrolách ÚOOÚ SR zastupujú. Osvedčenie o absolvovaní. Aktuálne termíny.",
  },
  twitter: {
    card: "summary_large_image",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: LANDING_CANONICAL,
  },
};

export const viewport: Viewport = {
  themeColor: "#242a64",
  colorScheme: "light",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sk">
      <body className={`${fontVariables} antialiased`}>{children}</body>
    </html>
  );
}
