import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { ViteMinifyPlugin } from 'vite-plugin-minify'
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';
import { EsLinter, linterPlugin, TypeScriptLinter } from "vite-plugin-linter";
import gzipPlugin from "rollup-plugin-gzip";

// https://vitejs.dev/config/
export default defineConfig((configEnv) => ({
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
      }
    }),
  ],
}));
