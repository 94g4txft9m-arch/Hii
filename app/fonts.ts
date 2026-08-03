import { Archivo, IBM_Plex_Mono, Newsreader } from "next/font/google";

/**
 * Brand typography — Newsreader (display), Archivo (body/UI), IBM Plex Mono (utility).
 */

export const newsreader = Newsreader({
  variable: "--font-display",
  subsets: ["latin", "latin-ext"],
  display: "swap",
  axes: ["opsz"],
});

export const archivo = Archivo({
  variable: "--font-sans",
  subsets: ["latin", "latin-ext"],
  display: "swap",
});

export const plexMono = IBM_Plex_Mono({
  variable: "--font-mono",
  subsets: ["latin", "latin-ext"],
  display: "swap",
  weight: ["400", "500", "600"],
});

export const fontVariables = [
  newsreader.variable,
  archivo.variable,
  plexMono.variable,
].join(" ");
