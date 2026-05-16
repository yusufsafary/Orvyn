import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";

// import.meta.dirname is available in Node 21.2+ (ESM-safe replacement for __dirname)
const __dir = import.meta.dirname;
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