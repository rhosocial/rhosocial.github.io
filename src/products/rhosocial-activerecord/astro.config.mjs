import { defineConfig } from 'astro/config';

const site = 'https://rhosocial.github.io';

export default defineConfig({
  site,
  base: '/products/rhosocial-activerecord',
  outDir: 'dist',
  publicDir: 'public',
  srcDir: 'src',
  build: {
    format: 'file',
  },
  server: {
    port: 4321,
  },
  vite: {
    css: {
      preprocessorOptions: {},
    },
  },
});