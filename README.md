# gsuair.com

Marketing site for **Germ Solutions USA** (ActivePure® / Beyond by Aerus air and surface purification), rebuilt off GoDaddy Website Builder as a static Astro site.

## Layout

| Path | What's in it |
|---|---|
| `site/` | The website (Astro + Tailwind). This is what deploys. |
| `gsuair/content/` | Original page copy salvaged from the GoDaddy site, as markdown. |
| `gsuair/gsuair-assets/` | **Archive** — every image, PDF and raw page HTML pulled off GoDaddy's CDN. |
| `gsuair/design-notes.md` | Brand, sitemap and cleanup notes from the migration. |

The `gsuair-assets/` archive matters: those files live on GoDaddy's CDN and **stop resolving once the subscription is cancelled**. This repo is the only copy.

## Develop

```bash
cd site
npm install
npm run dev      # http://localhost:4321
npm run build    # -> site/dist
npm run preview
```

Requires Node 20.3+. Node 22+ is recommended (see *Known issues*).

## Editing content

Business facts (address, phone, email, hours) and the nav live in **`site/src/consts.ts`** — one place, used by every page, the footer and the SEO schema. The old site drifted into two different addresses and two different phone numbers by hardcoding them per page; don't reintroduce that.

Address and phone are confirmed as **204 North Main Street** and **724.900.3853**.

## Before going live

1. **Wire up the contact form.** Create a form at [formspree.io](https://formspree.io) and put its ID in `FORMSPREE_ID` in `site/src/consts.ts`. Until then the form posts to a placeholder and submissions go nowhere.
2. Deploy (Netlify config is in `netlify.toml`; base dir `site`).
3. Point DNS at the new host, verify the live site, **then** cancel GoDaddy.

## What was fixed in the rebuild

- Removed the GoDaddy template filler about **booking air travel** (wrong business) from Technology and Retail.
- Removed editor notes that had shipped to production ("THIS INTRO IS NOT FINISHED...", "FUNDING....change copy below", "IDENTIFY WHY RETAIL NEEDS OUR PRODUCT", and others).
- Collapsed builder-artifact duplicate headings ("Pure & Clean" ×5, "GROW ROOMS" ×5).
- Fixed typos: containments→contaminants, FACITIY→FACILITY, effectivity→effectively, LIVE→LIVES, MSRA→MRSA.
- Resolved the address/phone contradictions to a single source of truth.
- **Recovered copy that was trapped inside images.** Four infographics (system benefits, symptoms, facts) were flat PNGs — invisible to search engines and screen readers. They're real HTML text now.
- Restored the logo's alpha channel, which GoDaddy's image service had flattened onto a white background.
- Old URLs (`/products-2`, `/education`, `/cambria-county-gov`, …) redirect to the new structure so inbound links survive.

Pages with no content on the old site (About Us, Testimonials, Accreditations, Locations, Medical) are intentionally left out of the nav rather than shipped blank.

## Known issues

- **Node 20 pins us to Astro 5.** Astro 6/7 require Node 22.12+. Astro 5 carries open advisories that are dev-server/SSR-shaped and don't affect this static build, but upgrading Node to 22 and running `npx @astrojs/upgrade` is the right follow-up.
