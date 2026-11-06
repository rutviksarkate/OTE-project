# Website quality report

Date: 6 November 2026. Production build succeeded. The site is served at http://localhost:3456.

## Completed

- All 15 agreed routes, plus a detail page for each published project.
- Cinematic homepage: full-screen offshore photograph, editorial type, scroll-opened lifecycle, discipline studio, three full-bleed project bands, offshore and refinery bands, leadership, ISO panels, closing call to action.
- Old HTML paths redirect to the new routes.
- Unique titles, descriptions and canonicals. Sitemap and robots. Organization, breadcrumb and service structured data.
- The contact form opens Gmail with the enquiry filled in. Careers is an Apply now button that opens Gmail with a career message. The sender attaches a CV and sends it. The site does not send or store the message.
- Reduced motion removes hero, reveal and route animations.
- Unknown project URLs return 404.

## Motion

Framer Motion is used for the hero stagger. Scroll reveal, the hero photograph and route fade are CSS. The lifecycle opens from scroll position and from a click. Discipline panels and project filters switch without a page load. GSAP was not added. The same motion is covered with CSS and a small amount of Framer Motion, which keeps the JavaScript lighter.

## Images

See `docs/IMAGE_SOURCE_REGISTER.md`. Thirteen licensed photographs plus the company logo. Presentation photographs of named vessels and repair work were not published. Alt text says the photographs are context, not OTE assets.

## Presentation content used

Company description, offices, eight disciplines, lifecycle, ISO system names, leadership name and role, and the three public scopes. See `docs/PRESENTATION_CONTENT_AUDIT.md`.

## Withheld

The confidential project register, tonnage and throughput figures, hydrogen and e-methanol quantities and partners, Mystras client and field detail, certificate scans, the organisation chart and the leadership portrait. See `docs/PUBLICATION_APPROVAL_REQUIRED.md`.

## Checks performed

- `npx next build` completed.
- Every public route returned 200. An unknown project slug returned 404.
- Contact and career forms open a mail link instead of posting to the server.
- The homepage hero rendered with the offshore photograph, headline and both calls to action.
- The FPSO filter left only FPSO Mystras.
- Client names from the deck were searched in the site source and appear only in the approval document.

## Not claimed

Lighthouse was not run, so no score is stated. Search Console and analytics are not connected.

## Still needed from the company

- Search Console verification, if required.
- Original certificate PDFs if numbers or scans should be shown.
- Written approval before any item in the approval register is added to a public page.
- Confirmation before any leadership photograph is used.
