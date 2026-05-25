# Club Progreso Concordia — Cloudflare Pages

Sitio estático del Club Progreso Concordia, migrado desde WordPress/Simply Static para deploy en Cloudflare Pages.

## Estructura

- `simply-static-1-1779722027/` — sitio estático (directorio de salida)
- `functions/` — Cloudflare Pages Functions (API de formularios)
- `scripts/postprocess.mjs` — SEO, GA4, embeds de Facebook y fixes

## Deploy en Cloudflare Pages

1. Conectá este repositorio en Cloudflare Pages.
2. Configuración de build:
   - **Build command:** `npm run build`
   - **Build output directory:** `simply-static-1-1779722027`
   - **Root directory:** `/` (raíz del repo)
3. Configurá las variables de entorno listadas en [`.env.example`](.env.example).
4. Deploy.

Las **Pages Functions** en `functions/` se despliegan automáticamente junto al sitio estático.

## URLs vanity (redirects 301)

Las rutas cortas del sitio original se mantienen vía `_redirects`:

| Vanity URL | Destino |
|------------|---------|
| `/comision-directiva/` | `/institucional/comision-directiva/` |
| `/historia/` | `/institucional/historia/` |
| `/ex-presidentes/` | `/institucional/ex-presidentes/` |
| `/convenios/` | `/institucional/convenios/` |
| `/salones/` | `/sociales/salones/` |
| `/eventos/` | `/sociales/eventos/` |
| `/reservas/` | `/sociales/reservas/` |
| `/noticias/` | `/novedades/` |

## Formularios

| Página | Endpoint | Backend |
|--------|----------|---------|
| `/contactenos/` | `POST /api/contact` | Resend |
| `/sociales/reservas/` | `POST /api/reservas` | Resend |
| `/novedades/`, `/suscribase/` | `POST /api/newsletter` | Mailchimp API |

El diseño y markup de los formularios se mantienen iguales (Contact Form 7 / Mailchimp for WP). El envío lo intercepta `/assets/cpc-forms.js`.

## Desarrollo local

```bash
npm install
npm run build
npx wrangler pages dev simply-static-1-1779722027 --compatibility-date=2025-03-20
```

Para probar formularios localmente, creá un archivo `.dev.vars` en la raíz con las mismas variables que en Cloudflare.

## SEO

El script de build genera:

- `sitemap.xml` — páginas principales del club
- `robots.txt` — optimizado para indexar contenido relevante
- Meta description, keywords, Open Graph y JSON-LD por página
- Google Analytics GA4: `G-7S7175G53J`

## Álbumes de Facebook

En `/deportes/` (Gimnasia), `/sociales/salones/` y `/sociales/eventos/` se reemplazaron los shortcodes rotos de WordPress por embeds oficiales de Facebook con enlace al álbum completo.
