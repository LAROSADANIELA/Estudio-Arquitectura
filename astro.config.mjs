import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import vercel from '@astrojs/vercel/serverless';

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  site: 'https://www.friendlyuser.github.io',
  base: "/astrobiz",
  integrations: [tailwind(), react()],
   output: 'server',
  adapter: vercel(),
});
