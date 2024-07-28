import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/pdd-am/",
  build: {
    outDir: "dist",
  },
  esbuild: {
    target: "es2020",
  },
  server: {
    host: "0.0.0.0", // Это позволит Vite слушать на всех интерфейсах
    port: 5173,
  },
});
