import { defineConfig } from "vite";
import path from "path";
import { fileURLToPath } from "url";

export default defineConfig({
  plugins: [],
  build: {
    lib: {
      entry: path.resolve(__dirname, "src/main.ts"),
      name: "main",
      fileName: "main",
      formats: ["umd"],
    },
    outDir: fileURLToPath(new URL("./templates/assets/dist", import.meta.url)),
    emptyOutDir: true,
  },
});
