// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

const SITE = 'https://yardmetric.com';

// Build date in W3C date format (YYYY-MM-DD) for lastmod
const BUILD_DATE = new Date().toISOString().split('T')[0];

export default defineConfig({
  site: 'https://yardmetric.com',
  trailingSlash: 'always',

  integrations: [
    sitemap({
      filter: (page) =>
        !page.endsWith('/404/') && !page.endsWith('/500/'),

      serialize(item) {
        const path = item.url.replace(SITE, '');

        if (path === '/' || path === '') {
          return { ...item, priority: 1.0, changefreq: 'weekly', lastmod: BUILD_DATE };
        }
        if (path.startsWith('/calculators/')) {
          return { ...item, priority: 0.9, changefreq: 'monthly', lastmod: BUILD_DATE };
        }
        if (
          path.startsWith('/landscaping/') ||
          path.startsWith('/construction/') ||
          path.startsWith('/pavers-outdoor/') ||
          path.startsWith('/lumber-woodworking/')
        ) {
          return { ...item, priority: 0.8, changefreq: 'weekly', lastmod: BUILD_DATE };
        }
        if (path.startsWith('/about/')) {
          return { ...item, priority: 0.5, changefreq: 'monthly', lastmod: BUILD_DATE };
        }
        return { ...item, priority: 0.3, changefreq: 'yearly', lastmod: BUILD_DATE };
      },
    }),
  ],

  vite: {
    plugins: [tailwindcss()],
  },
});
