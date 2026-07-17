# GSUAIR.com — Design Notes

Current site is built on **GoDaddy Website Builder 8.0** (Websites + Marketing). There's no source code to export — the HTML is machine-generated at render time. These notes capture the design intent so you can rebuild cleanly.

## Brand identity
- **Company:** GERM SOLUTIONS USA (Germ Solutions Service USA)
- **Product line resold:** Beyond by Aerus / ActivePure® technology air + surface purification
- **Logo:** "LOGO GERM TRANSPARENT.png" (transparent PNG, download via script)
- **Theme color (from meta):** `#2f6594` — a medium slate blue. This is the primary brand color.
- **Tone:** health / science / trust. B2B and B2C mixed (schools, government, cannabis grow, cigar/tobacco retail, homes).

## Suggested palette (derived from the #2f6594 brand color)
- Primary blue: `#2f6594`
- Darker blue (headers/footer): `#22496b`
- Accent / CTA: a clean green works well for an air/clean theme, e.g. `#4a9d5b` (ties to "germ-free / fresh air")
- Neutral background: `#ffffff` / very light gray `#f5f7fa`
- Body text: `#333333`
(Confirm exact accent by eye once you have the screenshots/images downloaded.)

## Typography
GoDaddy builder templates typically use clean sans-serif system/web fonts (Montserrat, Open Sans, or similar). Nothing distinctive to preserve — pick a solid modern pairing for the rebuild, e.g.:
- Headings: a strong geometric/grotesque sans (Montserrat, Archivo, or Inter Tight)
- Body: a highly readable sans (Inter, Source Sans, or IBM Plex Sans)

## Layout pattern (per page)
Consistent structure across all pages:
1. Thin top utility bar: "WEBSITE CURRENTLY UNDER CONSTRUCTION" link (remove in rebuild)
2. Sticky header: logo left, horizontal nav right, hamburger "More" menu on mobile
3. Page hero: big uppercase headline (often with phone number inline), sometimes a hero image
4. Body: alternating text blocks + images, occasional Vimeo/YouTube embed, bulleted feature lists, and "card" style repeated sub-headings
5. Standard footer block: business name, address, phone, email
6. Cookie consent banner

## Navigation structure (sitemap)
```
Home (/)
Products (/products-2)
Technology (/technology)
Industries (dropdown)
  ├─ Education (/education)
  ├─ Government Facilities (/government-facilities)  ──► Case study: Cambria County (/cambria-county-gov)
  ├─ Manufacturing (/manufacturing)         [cannabis grow rooms]
  ├─ Medical (/medical)                     [EMPTY]
  ├─ Residences/Home Offices (/residences/home-offices)
  └─ Retail Sector (/retail-sector)         [cigar/tobacco]
Press (dropdown)
  └─ Articles (/articles-1)                 [PDF downloads]
Funding (/funding)
About (dropdown)
  ├─ About Us (/about-us)                   [EMPTY]
  ├─ Testimonials (/testimonials)           [EMPTY]
  └─ Accreditations (/accreditations)       [EMPTY]
Contact Us (dropdown)
  ├─ Contact Us (/contact-us)               [form]
  └─ Locations (/locations-1)               [EMPTY]
```

## Contact / business facts (RESOLVE inconsistencies before building)
- Name: GERM SOLUTIONS USA
- Address: **204** N. Main Street (footer) vs **104** North Main Street (contact page) — Zelienople, PA 16063. ⚠️ confirm.
- Phone: **724.900.3853** (footer/home) vs **724.900.8353** (contact page) — ⚠️ confirm.
- Email: info@GermSolutionsUSA.com
- Hours: 9:00 am – 5:00 pm

## Things to clean up in the rebuild (leftover builder filler on the LIVE site)
- Home: "THIS INTRO IS NOT FINISHED..." and "Perhaps move EPA info here..." editor notes
- Technology: entire "air travel booking" paragraph (wrong business — template filler)
- Retail: "IDENTIFY WHY RETAIL NEEDS OUR PRODUCT" placeholder heading + air-travel intro paragraph
- Government: "FUNDING....change copy below" placeholder heading
- Education: "If we have a school video IF NOT A TESTIMONIAL" note
- Residences: "I will fix the boxed bulleted images once we decide on final page copy" note
- Funding/EANS 11: generic "biotechnology solutions" filler paragraph
- Multiple duplicate card headings ("Pure & Clean" ×5, "GROW ROOMS" ×5) — collapse to intended count
- Assorted typos flagged in each content file (containments→contaminants, FACITIY→FACILITY, effectivity→effectively, LIVE→LIVES, MSRA→MRSA, Releif→Relief)

## Migration reminders (order of operations)
1. Run download-assets.sh to grab all images + PDFs while GoDaddy is still live
2. Rebuild the site (see claude-code-brief.md)
3. Stand up the new site on your chosen host (Netlify/Vercel/Cloudflare Pages for static; or WordPress etc.)
4. Point DNS at the new host (or transfer the domain) — GoDaddy → DNS settings, or get the EPP/auth code to transfer registration
5. Rebuild the contact form against a real handler (Formspree, Netlify Forms, or your own endpoint) — the GoDaddy form won't migrate
6. Only cancel the GoDaddy Website Builder subscription once the new site is verified live
