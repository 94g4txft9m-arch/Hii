import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  // GitHub Pages serves the site from https://<owner>.github.io/Hii/
  base: "/Hii/",
  plugins: [react(), tailwindcss()],
  server: {
    host: true,
    port: 5173,
  },
});
