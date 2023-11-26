import image from '@astrojs/image';
import mdx from '@astrojs/mdx';
import tailwind from '@astrojs/tailwind';
import { defineConfig } from 'astro/config';

import robotsTxt from "astro-robots-txt";

// https://astro.build/config
export default defineConfig({
  site: 'https://resume.metano.pl',

  srcDir: './src',
  publicDir: './public',
  outDir: './build',
  integrations: [tailwind(), mdx(), image(), robotsTxt(
      {
        sitemap: false,
          policy: [
              {
                  disallow: [
                      '/download/*',
                      '/resume/*',
                      '/cover-letter/*',
                      '/extended/*',
                      '/print/*',
                  ]
              }
          ]
      },
  )]
});
