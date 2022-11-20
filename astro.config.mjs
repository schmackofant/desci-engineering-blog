import preact from '@astrojs/preact';
import { defineConfig } from 'astro/config';
import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  integrations: [preact(), mdx()],
  site: 'https://desci-engineering.netlify.app'
});