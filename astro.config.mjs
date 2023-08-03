import { defineConfig } from "astro/config";
// import partytown from "@astrojs/partytown";
import prefetch from "@astrojs/prefetch";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
// import alpinejs from "@astrojs/alpinejs";

// https://astro.build/config
export default defineConfig({
  integrations: [
    // partytown(),
    prefetch(),
    sitemap(),
    tailwind(),
    // alpinejs(),
  ],
  experimental: {
    viewTransitions: true,
    assets: true,
  },
});
