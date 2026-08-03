import type { NextConfig } from "next";

/**
 * STATIC_EXPORT=1 → statický export pre GitHub Pages (basePath, bez image
 * optimalizácie, bez server redirectov). Bez príznaku beží plný server
 * (Vercel / `next start`).
 */
const isStaticExport = process.env.STATIC_EXPORT === "1";
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const nextConfig: NextConfig = {
  ...(isStaticExport
    ? {
        output: "export" as const,
        basePath,
        images: {
          loader: "custom" as const,
          loaderFile: "./lib/image-loader.ts",
        },
      }
    : {
        images: {
          qualities: [75, 92, 95, 100],
          deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 2400],
        },
        async redirects() {
          return [
            {
              source: "/",
              destination: "/skolenie-gdpr-zodpovedna-osoba",
              permanent: false,
            },
          ];
        },
      }),
};

export default nextConfig;
