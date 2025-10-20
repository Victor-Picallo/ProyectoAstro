// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import mdx from '@astrojs/mdx';

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()]
  },

  // Esto convierte Astro en SSR
  output: 'server'
  /*   base: "/ProyectoAstro/",
    site: "https://victor-picallo.github.io/ProyectoAstro/",
    outDir: './docs', */,

  integrations: [mdx()]
});