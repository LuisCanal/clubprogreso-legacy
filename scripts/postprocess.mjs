#!/usr/bin/env node
/**
 * Post-procesa el export estático para Cloudflare Pages:
 * - SEO (meta, Open Graph, JSON-LD)
 * - Google Analytics GA4
 * - Embeds de Facebook
 * - URLs legacy absolutas -> relativas
 * - sitemap.xml y robots.txt
 */

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '../simply-static-1-1779722027');
const SITE_URL = 'https://www.clubprogreso.com.ar';
const GA4_ID = 'G-7S7175G53J';
const DEFAULT_OG_IMAGE = `${SITE_URL}/wp-content/uploads/2015/06/logo-cpc-3.png`;

const SITEMAP_PATHS = [
  '/',
  '/contactenos/',
  '/deportes/',
  '/novedades/',
  '/suscribase/',
  '/direccion/',
  '/institucional/',
  '/institucional/comision-directiva/',
  '/institucional/historia/',
  '/institucional/ex-presidentes/',
  '/institucional/convenios/',
  '/sociales/',
  '/sociales/salones/',
  '/sociales/reservas/',
  '/sociales/eventos/',
];

const SEO = {
  '/': {
    title: 'Club Progreso Concordia | Club social y deportivo desde 1874',
    description:
      'Club Progreso Concordia: salones para eventos, pileta, deportes, restaurant y actividades sociales en Concordia, Entre Ríos. Tradición desde 1874.',
    keywords:
      'Club Progreso, Club Progreso Concordia, club social Concordia, salones eventos Concordia, pileta Concordia, reservas salones',
  },
  '/contactenos/': {
    title: 'Contáctenos | Club Progreso Concordia',
    description:
      'Contacte al Club Progreso Concordia por formulario, teléfono o email. Secretaría de lunes a viernes.',
    keywords: 'contacto Club Progreso, Club Progreso Concordia contacto, secretaría club',
  },
  '/deportes/': {
    title: 'Deportes | Club Progreso Concordia',
    description:
      'Actividades deportivas en Club Progreso Concordia: pileta, pelota paleta, gimnasia para mujeres y colonia de verano.',
    keywords: 'deportes Concordia, pileta Club Progreso, pelota paleta, gimnasia mujeres',
  },
  '/novedades/': {
    title: 'Novedades | Club Progreso Concordia',
    description:
      'Suscríbase al boletín de novedades del Club Progreso Concordia y reciba información para socios.',
    keywords: 'novedades Club Progreso, boletín club Concordia, newsletter club',
  },
  '/suscribase/': {
    title: 'Suscríbase | Club Progreso Concordia',
    description:
      'Suscríbase al boletín informativo del Club Progreso Concordia completando el formulario online.',
    keywords: 'suscribirse Club Progreso, newsletter club Concordia',
  },
  '/direccion/': {
    title: 'Dirección | Club Progreso Concordia',
    description: 'Ubicación y dirección del Club Progreso Concordia en la ciudad de Concordia, Entre Ríos.',
    keywords: 'dirección Club Progreso Concordia, ubicación club Concordia',
  },
  '/institucional/': {
    title: 'Institucional | Club Progreso Concordia',
    description:
      'Información institucional del Club Progreso Concordia: historia, comisión directiva y convenios.',
    keywords: 'institucional Club Progreso, club social Concordia historia',
  },
  '/institucional/comision-directiva/': {
    title: 'Comisión Directiva | Club Progreso Concordia',
    description: 'Conozca la comisión directiva del Club Progreso Concordia.',
    keywords: 'comisión directiva Club Progreso Concordia',
  },
  '/institucional/historia/': {
    title: 'Historia | Club Progreso Concordia',
    description: 'Historia del Club Progreso Concordia, fundado en 1874 en la ciudad de Concordia.',
    keywords: 'historia Club Progreso Concordia, club desde 1874',
  },
  '/institucional/ex-presidentes/': {
    title: 'Ex Presidentes | Club Progreso Concordia',
    description: 'Listado de ex presidentes del Club Progreso Concordia a lo largo de su historia.',
    keywords: 'ex presidentes Club Progreso Concordia',
  },
  '/institucional/convenios/': {
    title: 'Convenios | Club Progreso Concordia',
    description: 'Convenios y beneficios para socios del Club Progreso Concordia.',
    keywords: 'convenios Club Progreso Concordia, beneficios socios',
  },
  '/sociales/': {
    title: 'Sociales | Club Progreso Concordia',
    description: 'Área sociales del Club Progreso Concordia: salones, eventos y reservas.',
    keywords: 'sociales Club Progreso, eventos club Concordia',
  },
  '/sociales/salones/': {
    title: 'Restaurant y Salones | Club Progreso Concordia',
    description:
      'Salones y restaurant del Club Progreso Concordia para fiestas y eventos de 30 a 450 personas.',
    keywords: 'salones eventos Concordia, restaurant club, fiestas Club Progreso',
  },
  '/sociales/reservas/': {
    title: 'Reservas | Club Progreso Concordia',
    description:
      'Reservá salones del Club Progreso Concordia online. Salón Verde, Pérgola, Quincho y más.',
    keywords: 'reservas salones Concordia, reservar Club Progreso',
  },
  '/sociales/eventos/': {
    title: 'Eventos | Club Progreso Concordia',
    description: 'Eventos y actividades sociales organizadas por el Club Progreso Concordia.',
    keywords: 'eventos Club Progreso Concordia, actividades sociales club',
  },
};

const FB_ALBUMS = {
  gimnasia: 'https://www.facebook.com/media/set/?set=a.557983080993449.1073741834.411575172300908',
  salones: 'https://www.facebook.com/media/set/?set=a.764218813703207.1073741838.411575172300908',
};

function walkHtmlFiles(dir, files = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      walkHtmlFiles(fullPath, files);
    } else if (entry.name === 'index.html') {
      files.push(fullPath);
    }
  }
  return files;
}

function pagePathFromFile(filePath) {
  const rel = path.relative(ROOT, path.dirname(filePath));
  if (rel === '.') return '/';
  return `/${rel.replaceAll('\\', '/')}/`;
}

function facebookEmbed(albumUrl, height = 750) {
  const href = encodeURIComponent(albumUrl);
  return `<div class="cpc-fb-embed">
<iframe src="https://www.facebook.com/plugins/post.php?href=${href}&amp;width=500&amp;show_text=true&amp;height=${height}&amp;appId" width="500" height="${height}" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
<p class="cpc-fb-embed-link"><a href="${albumUrl}" target="_blank" rel="noopener noreferrer">Ver álbum completo en Facebook</a></p>
</div>`;
}

function removeLegacyAnalytics(html) {
  return html
    .replace(/<script>\s*\(function\(i,s,o,g,r,a,m\)[\s\S]*?ga\('send', 'pageview'\);\s*<\/script>/g, '')
    .replace(
      /<!-- Fragmento de código de la etiqueta de Google \(gtag\.js\) añadida por Site Kit -->[\s\S]*?gtag\("config", "GT-MK4LK56"\);\s*\/\/# sourceURL=google_gtagjs-js-after\s*<\/script>/g,
      '',
    );
}

function injectHeadExtras(html, pagePath, seo) {
  const canonical = `${SITE_URL}${pagePath === '/' ? '/' : pagePath}`;
  const title = seo?.title || extractTitle(html);
  const description = seo?.description || 'Club Progreso Concordia - club social y deportivo en Concordia, Entre Ríos.';
  const keywords = seo?.keywords || 'Club Progreso Concordia, club social, Concordia, Entre Ríos';

  const extras = `
<meta name="description" content="${escapeAttr(description)}">
<meta name="keywords" content="${escapeAttr(keywords)}">
<link rel="canonical" href="${canonical}">
<meta property="og:type" content="website">
<meta property="og:site_name" content="Club Progreso Concordia">
<meta property="og:title" content="${escapeAttr(title)}">
<meta property="og:description" content="${escapeAttr(description)}">
<meta property="og:url" content="${canonical}">
<meta property="og:image" content="${DEFAULT_OG_IMAGE}">
<meta property="og:locale" content="es_AR">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="${escapeAttr(title)}">
<meta name="twitter:description" content="${escapeAttr(description)}">
<meta name="twitter:image" content="${DEFAULT_OG_IMAGE}">
<link rel="stylesheet" href="/assets/cpc-facebook-embed.css">
<script async src="https://www.googletagmanager.com/gtag/js?id=${GA4_ID}"></script>
<script>
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${GA4_ID}', { 'linker': { 'domains': ['www.clubprogreso.com.ar'] } });
</script>
<script type="application/ld+json">${JSON.stringify(buildJsonLd(pagePath, title, description, canonical))}</script>`;

  if (html.includes('name="description"')) {
    html = html.replace(/<meta name="description"[^>]*>/g, '');
  }
  if (html.includes('rel="canonical"')) {
    html = html.replace(/<link rel="canonical"[^>]*>/g, '');
  }

  return html.replace('</head>', `${extras}\n</head>`);
}

function buildJsonLd(pagePath, title, description, canonical) {
  const base = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: title,
    description,
    url: canonical,
    inLanguage: 'es-AR',
    isPartOf: {
      '@type': 'WebSite',
      name: 'Club Progreso Concordia',
      url: SITE_URL,
    },
  };

  if (pagePath === '/') {
    return {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'Organization',
          name: 'Club Progreso Concordia',
          url: SITE_URL,
          logo: DEFAULT_OG_IMAGE,
          sameAs: [
            'https://www.facebook.com/ClubProgresoConcordia',
            'https://twitter.com/cpc1874',
          ],
          contactPoint: {
            '@type': 'ContactPoint',
            telephone: '+54-345-421-7451',
            email: 'info@clubprogreso.com.ar',
            contactType: 'customer service',
            areaServed: 'AR',
            availableLanguage: 'Spanish',
          },
        },
        {
          '@type': 'SportsClub',
          name: 'Club Progreso Concordia',
          url: SITE_URL,
          foundingDate: '1874',
          address: {
            '@type': 'PostalAddress',
            addressLocality: 'Concordia',
            addressRegion: 'Entre Ríos',
            addressCountry: 'AR',
          },
        },
        base,
      ],
    };
  }

  return base;
}

function extractTitle(html) {
  const match = html.match(/<title>([^<]+)<\/title>/i);
  return match ? match[1].trim() : 'Club Progreso Concordia';
}

function escapeAttr(value) {
  return value.replaceAll('&', '&amp;').replaceAll('"', '&quot;');
}

function fixLegacyUrls(html) {
  return html
    .replaceAll('http://c2001384.ferozo.com/wp-content/', '/wp-content/')
    .replaceAll('https://c2001384.ferozo.com/wp-content/', '/wp-content/')
    .replaceAll('@import url(http://fonts.googleapis.com', '@import url(https://fonts.googleapis.com');
}

function fixFacebookEmbeds(html, pagePath) {
  html = html.replace(
    /<p>\[facebook https:\/\/www\.facebook\.com\/media\/set\/\?set=a\.557983080993449\.1073741834\.411575172300908\]<\/p>/g,
    facebookEmbed(FB_ALBUMS.gimnasia),
  );

  html = html.replace(
    /<p>\[facebook https:\/\/www\.facebook\.com\/media\/set\/\?set=a\.556458994479191\.1073741833\.411575172300908 \]<\/p>/g,
    '',
  );

  html = html.replace(
    /<div class="cpc-fb-embed">[\s\S]*?556458994479191[\s\S]*?<\/div>/g,
    '',
  );

  if (pagePath === '/sociales/salones/') {
    html = html.replace(
      /<p>\s*<a href="https:\/\/www\.facebook\.com\/media\/set\/\?set=a\.764218813703207\.1073741838\.411575172300908">https:\/\/www\.facebook\.com\/media\/set\/\?set=a\.764218813703207\.1073741838\.411575172300908<\/a><\/p>/,
      facebookEmbed(FB_ALBUMS.salones),
    );
  }

  return html;
}

function fixBrokenHead(html) {
  return html.replace(/<\/script><html><head>/g, '</script>\n');
}

function fixWhatsApp(html) {
  const groupInvite =
    'https:\\/\\/chat.whatsapp.com\\/EQuPUtcPzEdIZVlT8JyyNw';

  return html
    .replaceAll('&quot;whatsapp_link_type&quot;:&quot;web&quot;', '&quot;whatsapp_link_type&quot;:&quot;api&quot;')
    .replaceAll('"whatsapp_link_type":"web"', '"whatsapp_link_type":"api"')
    .replaceAll(`&quot;group&quot;:&quot;${groupInvite}&quot;`, '&quot;group&quot;:&quot;&quot;')
    .replaceAll(`"group":"${groupInvite}"`, '"group":""');
}

const FORM_CAPTCHA_ROW = `
	<tr class="cpc-captcha-row">
		<td style="text-align:right;">
			<p>Verificación anti-bots: <span class="cpc-required-mark" aria-hidden="true">*</span></p>
		</td>
		<td>
			<p><span class="cpc-captcha-wrap"><label id="cpc-captcha-question" for="cpc-captcha-answer">Cargando verificación...</label><br><input type="number" id="cpc-captcha-answer" name="cpc-captcha-answer" class="wpcf7-form-control wpcf7-text" inputmode="numeric" autocomplete="off" aria-required="true"><input type="hidden" id="cpc-captcha-token" name="cpc-captcha-token" value=""></span></p>
		</td>
	</tr>`;

const SUBMIT_ROW_PREFIX = `\t<tr>
\t\t<td>
\t\t</td>
\t\t<td>
\t\t\t<p><input class="wpcf7-form-control wpcf7-submit has-spinner" type="submit" value="Enviar">`;

function addFormEnhancements(html, requiredLabels, introFrom, introTo) {
  if (html.includes('cpc-captcha-row')) {
    return html;
  }

  for (const [from, to] of requiredLabels) {
    html = html.replaceAll(from, to);
  }

  html = html.replace(introFrom, introTo);

  html = html.replace(
    SUBMIT_ROW_PREFIX,
    `${FORM_CAPTCHA_ROW}
${SUBMIT_ROW_PREFIX}`,
  );

  if (!html.includes('/assets/cpc-forms.css')) {
    html = html.replace(
      '<link rel="stylesheet" id="contact-form-7-css"',
      '<link rel="stylesheet" href="/assets/cpc-forms.css">\n<link rel="stylesheet" id="contact-form-7-css"',
    );
  }

  return html;
}

const RESERVA_REQUIRED_LABELS = [
  ['Su nombre y apellido:', 'Su nombre y apellido: <span class="cpc-required-mark" aria-hidden="true">*</span>'],
  ['Su e-mail:', 'Su e-mail: <span class="cpc-required-mark" aria-hidden="true">*</span>'],
  ['Su teléfono:', 'Su teléfono: <span class="cpc-required-mark" aria-hidden="true">*</span>'],
  ['Espacio a Reservar:', 'Espacio a Reservar: <span class="cpc-required-mark" aria-hidden="true">*</span>'],
  ['Fecha de Reserva:', 'Fecha de Reserva: <span class="cpc-required-mark" aria-hidden="true">*</span>'],
  ['Horario:', 'Horario: <span class="cpc-required-mark" aria-hidden="true">*</span>'],
];

const CONTACT_REQUIRED_LABELS = [
  ['Su nombre y apellido:', 'Su nombre y apellido: <span class="cpc-required-mark" aria-hidden="true">*</span>'],
  ['Su e-mail:', 'Su e-mail: <span class="cpc-required-mark" aria-hidden="true">*</span>'],
  ['Mensaje - Nota:', 'Mensaje - Nota: <span class="cpc-required-mark" aria-hidden="true">*</span>'],
];

function enhanceReservasForm(html) {
  return addFormEnhancements(
    html,
    RESERVA_REQUIRED_LABELS,
    '<p>Para realizar reservas, puede contactarse con Secretaría de Lunes a Viernes 09:00 a 13:00 horas o bien completar el formulario debajo y le responderemos a la brevedad.</p>',
    '<p>Para realizar reservas, puede contactarse con Secretaría de Lunes a Viernes 09:00 a 13:00 horas o bien completar el formulario debajo y le responderemos a la brevedad.</p>\n<p class="cpc-required-note"><small>Los campos marcados con <span class="cpc-required-mark" aria-hidden="true">*</span> son obligatorios.</small></p>',
  );
}

function enhanceContactForm(html) {
  return addFormEnhancements(
    html,
    CONTACT_REQUIRED_LABELS,
    '<p>Puede contactarse con Secretaría de Lunes a Viernes 14:00 a 18:00 horas o bien completar el formulario debajo y le responderemos a la brevedad.</p>',
    '<p>Puede contactarse con Secretaría de Lunes a Viernes 14:00 a 18:00 horas o bien completar el formulario debajo y le responderemos a la brevedad.</p>\n<p class="cpc-required-note"><small>Los campos marcados con <span class="cpc-required-mark" aria-hidden="true">*</span> son obligatorios.</small></p>',
  );
}

function injectBodyExtras(html) {
  const snippet = `
<script src="/assets/cpc-forms.js" defer></script>
<script src="/assets/cpc-whatsapp.js" defer></script>`;
  if (html.includes('/assets/cpc-whatsapp.js')) {
    if (!html.includes('/assets/cpc-forms.js')) {
      return html.replace('</body>', `\n<script src="/assets/cpc-forms.js" defer></script>\n</body>`);
    }
    return html;
  }
  if (html.includes('/assets/cpc-forms.js')) {
    return html.replace(
      '<script src="/assets/cpc-forms.js" defer></script>',
      snippet.trim(),
    );
  }
  return html.replace('</body>', `${snippet}\n</body>`);
}

function writeRobots() {
  const content = `User-agent: *
Allow: /

Disallow: /wp-admin/
Disallow: /wp-includes/
Disallow: /author/
Disallow: /category/
Disallow: /tag/
Disallow: /type/
Disallow: /page/
Disallow: /?s=
Disallow: /search

Sitemap: ${SITE_URL}/sitemap.xml
`;
  fs.writeFileSync(path.join(ROOT, 'robots.txt'), content, 'utf8');
}

function writeSitemap() {
  const today = new Date().toISOString().slice(0, 10);
  const urls = SITEMAP_PATHS.map((pagePath) => {
    const loc = pagePath === '/' ? `${SITE_URL}/` : `${SITE_URL}${pagePath}`;
  const priority = pagePath === '/' ? '1.0' : pagePath.split('/').filter(Boolean).length <= 1 ? '0.8' : '0.7';
    return `  <url>
    <loc>${loc}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>${priority}</priority>
  </url>`;
  }).join('\n');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`;
  fs.writeFileSync(path.join(ROOT, 'sitemap.xml'), xml, 'utf8');
}

function processFile(filePath) {
  const pagePath = pagePathFromFile(filePath);
  let html = fs.readFileSync(filePath, 'utf8');
  html = fixBrokenHead(html);
  html = removeLegacyAnalytics(html);
  html = fixLegacyUrls(html);
  html = fixFacebookEmbeds(html, pagePath);
  html = fixWhatsApp(html);
  if (pagePath === '/sociales/reservas/') {
    html = enhanceReservasForm(html);
  }
  if (pagePath === '/contactenos/') {
    html = enhanceContactForm(html);
  }
  html = injectHeadExtras(html, pagePath, SEO[pagePath]);
  html = injectBodyExtras(html);
  fs.writeFileSync(filePath, html, 'utf8');
  return pagePath;
}

const files = walkHtmlFiles(ROOT);
for (const file of files) {
  processFile(file);
}

writeRobots();
writeSitemap();

console.log(`Post-procesadas ${files.length} páginas HTML.`);
console.log(`Generados sitemap.xml y robots.txt en ${ROOT}`);
