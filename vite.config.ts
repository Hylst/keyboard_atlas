import path from 'path';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

import fsSite from 'node:fs';
import pathSite from 'node:path';
import type { Plugin as PluginSite } from 'vite';

// Domaine du site, lu au build : SITE_URL (https://hylst.fr par defaut). Il remplace %SITE_URL% dans index.html
// et dans les fichiers publics listes, pour que l'app change de domaine sans toucher au code.
const SITE_URL = (process.env.SITE_URL || 'https://hylst.fr').replace(/\/+$/, '');
const siteUrl = (fichiersPublics: string[]): PluginSite => {
  let outDir = '';
  return {
    name: 'site-url',
    configResolved(config) {
      outDir = pathSite.resolve(config.root, config.build.outDir);
    },
    transformIndexHtml: { order: 'pre', handler: (html) => html.replaceAll('%SITE_URL%', SITE_URL) },
    writeBundle: {
      order: 'pre',
      sequential: true,
      handler() {
        for (const f of fichiersPublics) {
          const p = pathSite.join(outDir, f);
          fsSite.writeFileSync(p, fsSite.readFileSync(p, 'utf8').replaceAll('%SITE_URL%', SITE_URL));
        }
      },
    },
  };
};

export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, '.', '');
    return {
      server: {
        port: 3000,
        host: '0.0.0.0',
      },
      plugins: [siteUrl(['sitemap.xml']), react()],
      base: '/keyboard_atlas/',

      resolve: {
        alias: {
          '@': path.resolve(__dirname, '.'),
        }
      }
    };
});
