// @ts-check
import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  base: process.env.PUBLIC_BASE_PATH ?? "/",
  integrations: [tailwind(), mdx()],
});
