# M Solutions website

## Run locally

Use Node.js 22 LTS or newer. Install the locked dependencies with `npm ci`, then run `npm run dev`.

## Production

Run `npm run build`. Publish the generated `dist` directory to a static web host with HTTPS. `npm run preview` is for local build verification, not a production server.

The canonical URL, social metadata, robots.txt, and sitemap.xml currently use https://www.msolutions.pk. Update these together if deploying to another domain. Keep `/msolutions-mark.svg`, `/msolutions-logo-original.png`, and `/site.webmanifest` publicly accessible. Use a short cache lifetime for HTML and long immutable caching for hashed assets under `/assets/`.

## Contact and content

Business details and the six service definitions are in `src/data/siteConfig.js`. FAQs are in `src/data/faqData.js`. The enquiry form prepares a WhatsApp message; visitors must review and send it in WhatsApp. It does not submit to a database or email service.

The optional Three.js graphic is lazy-loaded and has a static fallback. Fonts load from Google Fonts with local system fallbacks. The active page does not depend on remote stock photography.

Before publishing, confirm the domain, phone, email, service descriptions, and support terms with the business owner. Named customer testimonials and numerical performance guarantees are intentionally absent until verified.

## Release checks

Check the header menu with keyboard and touch, each section link, FAQs, empty and invalid form fields, email/telephone links, and WhatsApp handoff. Check a narrow phone, tablet, and desktop viewport, with reduced motion enabled as well as disabled.

## SEO build

`npm run build` builds the browser bundle, renders the full homepage into `dist/index.html`, and generates ProfessionalService, WebSite, WebPage, and service catalog structured data from the displayed service definitions. The `.prerender` folder is temporary build output; publish only `dist`.

The infrastructure scope is maintained in `src/data/infrastructureScope.js`. Update `scripts/build.mjs` along with the source metadata and public sitemap if the production domain changes. After deployment, verify ownership in Google Search Console and submit `/sitemap.xml`. Search visibility and rankings depend on crawling and other factors; local preview checks do not establish indexing.
