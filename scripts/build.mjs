import { readFile, writeFile } from 'node:fs/promises';
import { execFileSync } from 'node:child_process';
import { pathToFileURL } from 'node:url';
import { resolve } from 'node:path';
import { siteConfig } from '../src/data/siteConfig.js';
import { infrastructureScope } from '../src/data/infrastructureScope.js';

const vite = resolve('node_modules/vite/bin/vite.js');
execFileSync(process.execPath, [vite, 'build'], { stdio: 'inherit' });
execFileSync(process.execPath, [vite, 'build', '--ssr', 'src/entry-server.jsx', '--outDir', '.prerender'], { stdio: 'inherit' });
const { render } = await import(pathToFileURL(resolve('.prerender/entry-server.js')).href);
const origin = 'https://www.msolutions.pk';
const organization = {
  '@type': 'ProfessionalService',
  '@id': `${origin}/#organization`,
  name: siteConfig.name,
  alternateName: 'Next Rise Solutions by Mubashar Hanif',
  url: `${origin}/`,
  logo: `${origin}/nextrise-logo.png`,
  image: `${origin}/nextrise-logo.png`,
  description: 'Full Stack Websites, Mobile Apps, Custom AI (Chatbots & RAG), and Business Marketing by Mubashar Hanif at Next Rise Solutions.',
  telephone: siteConfig.phone.replace(/[\s-]/g, ''),
  email: siteConfig.email,
  address: { '@type': 'PostalAddress', addressLocality: 'Lahore', addressRegion: 'Punjab', addressCountry: 'PK' },
  areaServed: { '@type': 'Country', name: 'Pakistan' },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Software, AI & Marketing Services',
    itemListElement: [
      ...siteConfig.solutions.map((service) => ({
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: service.title,
          description: service.summary,
          url: `${origin}/#${service.id}`,
          provider: { '@id': `${origin}/#organization` },
        },
      })),
      ...infrastructureScope.map((service) => ({
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: service.title,
          description: service.description,
          url: `${origin}/#capabilities`,
          provider: { '@id': `${origin}/#organization` },
        },
      })),
    ],
  },
};
const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    organization,
    {
      '@type': 'WebSite',
      '@id': `${origin}/#website`,
      name: siteConfig.name,
      url: `${origin}/`,
      publisher: { '@id': organization['@id'] },
    },
    {
      '@type': 'WebPage',
      '@id': `${origin}/#webpage`,
      url: `${origin}/`,
      name: 'Next Rise Solutions — Full Stack Websites, Apps, AI & Business Marketing | Mubashar Hanif',
      inLanguage: 'en-PK',
      isPartOf: { '@id': `${origin}/#website` },
      about: { '@id': organization['@id'] },
    },
  ],
};

let html = await readFile('dist/index.html', 'utf8');
html = html.replace('<div id="root"></div>', `<div id="root">${render()}</div>`);
html = html.replace(/<script type="application\/ld\+json">[\s\S]*?<\/script>/, `<script type="application/ld+json">${JSON.stringify(schema).replace(/</g, '\\u003c')}</script>`);
if (!html.includes('Full Stack Websites, Apps') || !html.includes('MERN &amp; Next.js Full-Stack Architecture')) {
  throw new Error('Prerendered service content is missing');
}
if ((html.match(/<h1[ >]/g) || []).length !== 1) {
  throw new Error('Expected exactly one H1');
}
await writeFile('dist/index.html', html);
console.log('SEO checks passed: prerendered content, one H1, and synchronized service structured data.');
