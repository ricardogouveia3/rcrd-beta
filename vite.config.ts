import { defineConfig } from "vite";
import path from "path";
import react from "@vitejs/plugin-react-swc";
import { ViteMinifyPlugin } from "vite-plugin-minify";
import { ViteImageOptimizer } from "vite-plugin-image-optimizer";
import { EsLinter, linterPlugin, TypeScriptLinter } from "vite-plugin-linter";
import gzipPlugin from "rollup-plugin-gzip";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// https://vitejs.dev/config/
export default defineConfig((configEnv) => ({
  assetsInclude: ["**/*.webp", "**/*.png", "**/*.jpg", "**/*.jpeg", "**/*.svg"],
  plugins: [
    react(),
    ViteMinifyPlugin({}),
    ViteImageOptimizer({}),
    gzipPlugin(),
    linterPlugin({
      include: ["./src/**/*.ts", "./src/**/*.tsx"],
      linters: [
        new EsLinter({
          configEnv: configEnv,
          serveOptions: { clearCacheOnStart: true },
        }),
        new TypeScriptLinter(),
      ],
      build: {
        includeMode: "filesInFolder",
      },
    }),
  ],
  resolve: {
    alias: {
      "@logos": path.resolve(__dirname, "./src/assets/logos"),
    },
  },
  build: {
    assetsInlineLimit: 8192,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes("node_modules")) {
            return id
              .toString()
              .split("node_modules/")[1]
              .split("/")[0]
              .toString();
          }
        },
      },
    },
  },
}));
