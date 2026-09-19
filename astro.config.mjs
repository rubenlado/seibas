import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://asseibas.com',
  output: 'static',
  trailingSlash: 'always',
  build: {
    format: 'directory',
  },
});
