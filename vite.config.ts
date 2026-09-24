import path from 'path';
import fs from 'fs';
import { defineConfig, loadEnv, Plugin } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

function dynamicSitemapPlugin(): Plugin {
  return {
    name: 'vite-plugin-dynamic-sitemap',
    configureServer(server) {
      server.middlewares.use(async (req, res, next) => {
        const url = req.url ? req.url.split('?')[0] : '';
        if (url === '/sitemap.xml') {
          try {
            const mod = await server.ssrLoadModule('/src/utils/sitemapGenerator.ts');
            const host = req.headers.host;
            const protocol = req.headers['x-forwarded-proto'] || 'https';
            const baseUrl = host ? `${protocol}://${host}` : undefined;
            const xml = mod.generateSitemapXml(baseUrl);
            res.setHeader('Content-Type', 'application/xml; charset=utf-8');
            res.setHeader('Cache-Control', 'public, max-age=3600');
            res.end(xml);
            return;
          } catch (err) {
            console.error('[sitemap] Error generating dynamic sitemap:', err);
            next();
          }
        } else if (url === '/robots.txt') {
          try {
            const mod = await server.ssrLoadModule('/src/utils/sitemapGenerator.ts');
            const host = req.headers.host;
            const protocol = req.headers['x-forwarded-proto'] || 'https';
            const baseUrl = host ? `${protocol}://${host}` : undefined;
            const txt = mod.generateRobotsTxt(baseUrl);
            res.setHeader('Content-Type', 'text/plain; charset=utf-8');
            res.setHeader('Cache-Control', 'public, max-age=3600');
            res.end(txt);
            return;
          } catch (err) {
            console.error('[robots] Error generating dynamic robots:', err);
            next();
          }
        }
        next();
      });
    }
  };
}

export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, '.', '');
    return {
      server: {
        port: 3000,
        host: '0.0.0.0',
      },
      plugins: [react(), tailwindcss(), dynamicSitemapPlugin()],
      define: {
        'process.env.API_KEY': JSON.stringify(env.GEMINI_API_KEY),
        'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY)
      },
      resolve: {
        alias: {
          '@': path.resolve(__dirname, '.'),
        }
      },
      build: {
        chunkSizeWarningLimit: 1000,
        rollupOptions: {
          output: {
            manualChunks: {
              vendor: ['react', 'react-dom', 'react-router-dom'],
              motion: ['motion'],
              icons: ['lucide-react']
            }
          }
        }
      }
    };
});

