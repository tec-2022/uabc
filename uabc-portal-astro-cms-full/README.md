# UABC Portal · Astro + TS + Tailwind + Supabase (CMS)

- Contenido de portada desde BD (`site_content`).
- /admin protegido (redirige a /login si no hay sesión), KPIs via RPC `kpi_counts`, editor de JSON.
- /login con email/contraseña (Supabase Auth).
- Estilos/JS separados y conservan tu diseño.

## Deploy (GitHub + Vercel)
1. Sube este repo a GitHub e impórtalo en Vercel.
2. Variables en Vercel: `SUPABASE_URL`, `SUPABASE_ANON_KEY`.
3. En Supabase (SQL Editor): ejecuta `supabase/sql/site_content.sql`, `supabase/sql/seed_content.sql` y opcional `supabase/sql/kpi_counts.sql`.
4. Sube `public/assets/cv/cv.pdf`.

## DEV local
```bash
npm i
npm run dev
```
Opcional: copia `public/env.js.example` a `public/env.js` con tus claves públicas.

## Dónde pegar tu JS/CSS
- `public/assets/css/portal.css` y `public/assets/js/portal.js`.
- El contenido se consume desde `window.CMS_CONTENT` (lo carga `cms-boot.js`).

## Seguridad
- `site_content`: lectura pública, escritura sólo autenticados (RLS).
- /admin redirige a /login si no hay sesión; /login redirige a /admin si ya hay sesión.
