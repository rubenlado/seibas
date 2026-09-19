import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://rubenlado.github.io',
  base: '/seibas',
  output: 'static',
  trailingSlash: 'always',
  build: {
    format: 'directory',
  },
});
