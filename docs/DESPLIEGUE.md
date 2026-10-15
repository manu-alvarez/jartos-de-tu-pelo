# Guía de despliegue

## Requisito previo
Completa al menos el bloque 🔴 de `docs/DATOS-A-RELLENAR.md` y ejecuta `npm run build`.

## Opción A — Netlify / Vercel / Cloudflare Pages (recomendado)
1. Sube el repositorio a GitHub.
2. Crea un proyecto web con estos ajustes:
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
3. **SPA fallback (imprescindible):** las rutas `/aviso-legal`, `/privacidad` y `/cookies`
   son del router de cliente. Configura reescritura `/* → /index.html`:
   - Netlify: crea `public/_redirects` con `/*  /index.html  200`
   - Vercel: añade en `vercel.json`: `{ "rewrites": [{ "source": "/(.*)", "destination": "/index.html" }] }`
   - Cloudflare Pages: funciona por defecto con SPA.
4. Asigna el dominio real y actualiza `TODO-DATO-11` (ver checklist).

## Opción B — Hosting clásico (cPanel / FTP)
1. `npm run build` → sube el contenido de `dist/` a `public_html/`.
2. Crea `.htaccess` con fallback SPA:
   ```apache
   RewriteEngine On
   RewriteCond %{REQUEST_FILENAME} !-f
   RewriteCond %{REQUEST_FILENAME} !-d
   RewriteRule ^ index.html [L]
   ```

## Tras publicar
- Envía el sitemap (`https://TU-DOMINIO/sitemap.xml`) a Google Search Console.
- Comprueba el botón de reserva desde un móvil real.
- Pide las primeras reseñas de Google y actívalas (`TODO-DATO-21`).

## Variables de entorno
Este proyecto **no necesita ninguna**. No hay secretos ni claves en el frontend.
Si en el futuro se añade analítica o un backend de citas, se documentará aquí
junto a un `.env.example`.
