import image from '@astrojs/image';
import mdx from '@astrojs/mdx';
import tailwind from '@astrojs/tailwind';
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
	srcDir: './src',
	publicDir: './public',
	outDir: './build',

	integrations: [tailwind(), mdx(), image()],
});
