import express from 'express';
import { createServer as createViteServer } from 'vite';
import path from 'path';

async function startServer() {
  const app = express();
  const PORT = 3000;

  // Add Security Headers
  app.use((req, res, next) => {
    // Basic CSP (allowing inline scripts for Vite dev and React, plus external images/fonts)
    res.setHeader(
      'Content-Security-Policy',
      "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval'; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; img-src 'self' data: https:; connect-src 'self' https: wss: ws:;"
    );
    // HSTS Policy
    res.setHeader('Strict-Transport-Security', 'max-age=31536000; includeSubDomains; preload');
    // COOP
    res.setHeader('Cross-Origin-Opener-Policy', 'same-origin');
    // X-Frame-Options (Clickjacking)
    res.setHeader('X-Frame-Options', 'SAMEORIGIN');
    // X-Content-Type-Options
    res.setHeader('X-Content-Type-Options', 'nosniff');
    next();
  });

  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath, {
      setHeaders: (res, path) => {
        if (path.endsWith('.js')) {
          // Source maps are built, but we prevent missing warnings.
        }
      }
    }));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
