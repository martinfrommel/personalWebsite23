import { defineConfig } from "astro/config";
// import partytown from "@astrojs/partytown";
import prefetch from "@astrojs/prefetch";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [
    // partytown(),
    prefetch(),
    sitemap(),
    tailwind(),
  ],
  experimental: {
    viewTransitions: true,
    assets: true,
  },
});