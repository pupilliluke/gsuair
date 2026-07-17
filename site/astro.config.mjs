// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://gsuair.com',
  integrations: [sitemap()],
  vite: { plugins: [tailwindcss()] },

  // Old GoDaddy URLs -> new structure. Keeps existing inbound links and
  // search results working after the DNS cutover.
  redirects: {
    '/products-2': '/products',
    '/education': '/industries/education',
    '/government-facilities': '/industries/government-facilities',
    '/manufacturing': '/industries/manufacturing',
    '/retail-sector': '/industries/retail',
    '/residences/home-offices': '/industries/residences',
    '/cambria-county-gov': '/industries/government-facilities/cambria-county',
    '/articles-1': '/articles',
    '/contact-us': '/contact',
  },
});
