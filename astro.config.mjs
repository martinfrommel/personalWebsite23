import { defineConfig } from "astro/config";
import partytown from "@astrojs/partytown";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [partytown(), sitemap(), tailwind()],
  experimental: {
    viewTransitions: true,
    assets: true,
  },
});