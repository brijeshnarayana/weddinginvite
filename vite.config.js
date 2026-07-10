import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Relative base ("./") makes assets load correctly no matter what the repo
// is named or what sub-path GitHub Pages serves from. No base-path headaches.
export default defineConfig({
  plugins: [react()],
  base: "./",
});
