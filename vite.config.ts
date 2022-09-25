import { defineConfig } from "vite";
import path from "path";
import { fileURLToPath } from "url";
import PurgeIcons from "vite-plugin-purge-icons";

export default defineConfig({
  plugins: [
    PurgeIcons({
      content: ["./templates/**/*.html"],
    }),
  ],
  build: {
    lib: {
      entry: path.resolve(__dirname, "src/main.ts"),
      name: "main",
      fileName: "main",
      formats: ["iife"],
    },
    outDir: fileURLToPath(new URL("./templates/assets/dist", import.meta.url)),
    emptyOutDir: true,
  },
});
