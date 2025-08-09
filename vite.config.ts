import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import svgr from "vite-plugin-svgr";

export default defineConfig({
  plugins: [
    [
      react(),
      svgr({
        include: "**/*.svg",
      }),
    ],
  ],
  base:
    process.env.NODE_ENV === "production"
      ? process.env.VERCEL
        ? "/"
        : "/02-react-cafe/"
      : "./",
  build: {
    sourcemap: true,
  },
});
