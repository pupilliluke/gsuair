// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

/**
 * Pages that render <meta name="robots" content="noindex"> via the Base layout.
 * They must also stay out of the sitemap: submitting a noindex URL is a direct
 * contradiction, and Search Console reports it as "Submitted URL marked
 * 'noindex'". Keep this list in sync with the `noindex` prop in src/pages.
 */
const NOINDEX_PATHS = ['/industries/medical/', '/about-us/'];

export default defineConfig({
  site: 'https://gsuair.com',
  integrations: [
    sitemap({
      filter: (page) => !NOINDEX_PATHS.some((path) => new URL(page).pathname === path),
    }),
  ],
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
