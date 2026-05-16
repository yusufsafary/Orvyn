import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";

const workspaceRoot = path.resolve(__dirname, "../..");

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
    outDir: path.resolve(__dirname, "dist/public"),
    emptyOutDir: true,
  },
});