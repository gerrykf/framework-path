import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import { resolve, dirname } from "node:path";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
import VueI18nPlugin from "@intlify/unplugin-vue-i18n/vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
    VueI18nPlugin({
      /* options */
      // locale messages resource pre-compile option
      include: resolve(
        dirname(fileURLToPath(import.meta.url)),
        "./src/i18n/locales/**"
      ),
      runtimeOnly: false, // you must set `runtimeOnly: false` when use i18n-extensions
      strictMessage: false, // If you don't want to see warning message, you can set `strictMessage: false`.
    }),
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});
