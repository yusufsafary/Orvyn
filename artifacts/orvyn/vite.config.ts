import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";
import { fileURLToPath } from "url";

const __dir = path.dirname(fileURLToPath(import.meta.url));
const workspaceRoot = path.resolve(__dir, "../..");

export default defineConfig({
  root: workspaceRoot,
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(workspaceRoot, "src"),
      "@assets": path.resolve(workspaceRoot, "attached_assets"),
    },
  },
  build: {
    outDir: path.resolve(__dir, "dist/public"),
    emptyOutDir: true,
  },
});