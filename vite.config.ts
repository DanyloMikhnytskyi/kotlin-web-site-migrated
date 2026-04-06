import { reactRouter } from "@react-router/dev/vite";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
import commonjs from "vite-plugin-commonjs";

export default defineConfig({
  resolve: {
    alias: {
      // Force resolve to the compiled JS file since `module: "lib/index.ts"` in package.json is broken
      "@rescui/card": "@rescui/card/lib/index.js",
    },
  },
  plugins: [
    reactRouter(),
    tsconfigPaths(),

    commonjs({
      filter(id) {
        if (id.includes("@jetbrains/kotlin-web-site-ui")) {
          return true;
        }
        return false;
      },
    }),
  ],
  ssr: {
    noExternal: ["@rescui/*", "@jetbrains/*"],
  },
});
