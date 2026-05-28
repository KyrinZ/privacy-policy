// @ts-check
import { defineConfig } from "astro/config";

import vue from "@astrojs/vue";

import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  site: "https://kyrinz.github.io",
  base: "/privacy-policy-generator",
  integrations: [vue()],

  vite: {
    plugins: [tailwindcss()],
  },
});
