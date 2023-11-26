import image from '@astrojs/image';
import mdx from '@astrojs/mdx';
import tailwind from '@astrojs/tailwind';
import { defineConfig } from 'astro/config';
import robotsTxt from "astro-robots-txt";
import sitemap from "@astrojs/sitemap";

import compress from "astro-compress";

// https://astro.build/config
export default defineConfig({
  site: 'https://resume.metano.pl',
  srcDir: './src',
  publicDir: './public',
  outDir: './build',
  integrations: [tailwind(), mdx(), image(), sitemap({
    filter: page => page.indexOf('/download/') === -1 && page.indexOf('/resume/') === -1 && page.indexOf('/cover-letter/') === -1 && page.indexOf('/extended/') === -1 && page.indexOf('/print/') === -1
  }), robotsTxt({
    // policy: [{
    // allow: '/',
    // disallow: [
    //   '/download/*',
    //   '/resume/*',
    //   '/cover-letter/*',
    //   '/extended/*',
    //   '/print/*'
    // ]
    // }]
  }), compress()]
});