// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()]
  },
  //output: 'server' // Esto convierte Astro en SSR
  outDir: 'docs' // Esto convierte Astro en SSG
});