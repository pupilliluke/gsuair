# Claude Code Brief — Rebuild GSUAIR.com

Drop this whole folder into a repo and open Claude Code in it. Below is a ready-to-paste starting prompt, plus context so you (or Claude Code) can rebuild the site.

---

## Paste this to Claude Code to start

> I'm rebuilding my company website, GSUAIR.com (GERM SOLUTIONS USA — ActivePure/Aerus air & surface purification). The old site was on GoDaddy Website Builder and I'm moving off it. This repo contains all the salvaged content and design notes:
> - `content/` — every page's text as markdown, in nav order
> - `design-notes.md` — brand color (#2f6594), layout pattern, sitemap, and a list of cleanup items
> - `images-and-assets.md` + `gsuair-assets/` — logo, images, and PDFs (after I run download-assets.sh)
>
> Build a modern, fast, responsive marketing site as a **static site** (my preference: [Astro / Next.js static export / plain HTML+Tailwind — pick one]). Requirements:
> 1. Follow the sitemap in design-notes.md; skip the pages marked EMPTY for now or stub them with a "coming soon" that's easy to fill later.
> 2. Use the brand color #2f6594 as primary; clean health/science aesthetic; strong typographic hierarchy.
> 3. Pull body copy from the content/ files, but FIX the flagged typos and REMOVE all the leftover builder filler (the "air travel booking" paragraphs, editor notes, duplicate card headings — all listed in design-notes.md).
> 4. Reuse my logo and images from gsuair-assets/. Keep the Vimeo/YouTube embeds.
> 5. Contact form should post to [Formspree / Netlify Forms / my endpoint] — the old GoDaddy form doesn't come with me.
> 6. Resolve the address/phone inconsistencies to: [I'll confirm — 204 vs 104 N. Main St, and 724.900.3853 vs .8353].
>
> Start by proposing a file/component structure and the homepage, then we'll iterate page by page.

---

## Recommended stack options (pick based on comfort)
Given your background (React/TypeScript), any of these are a good fit:
- **Astro** — best for a content/marketing site; ships almost no JS, markdown-native so your content/ files map almost 1:1, trivial to host free on Netlify/Vercel/Cloudflare Pages. Strong recommendation.
- **Next.js (static export)** — if you want React everywhere and might add dynamic features later.
- **Plain HTML + Tailwind** — simplest, no build step, fine for ~15 pages.

## What will NOT carry over from GoDaddy (rebuild these)
- Contact form backend (use Formspree/Netlify Forms/your FastAPI endpoint)
- reCAPTCHA (re-add if you want it)
- Any GoDaddy analytics/SEO settings
- Cookie-consent banner (add a lightweight one if you still want it)

## Content status cheat-sheet
| Page | Status |
|------|--------|
| Home | ✅ content (has editor-note filler to strip) |
| Products | ✅ content (2 products: Beyond Guardian Air, Pure & Clean) |
| Technology | ⚠️ real content thin + wrong "air travel" filler to remove; has white paper PDF |
| Education | ✅ content |
| Government Facilities | ✅ content + links to Cambria case study |
| Manufacturing | ✅ content (cannabis grow rooms) |
| Medical | ❌ empty — write or drop |
| Residences/Home Offices | ✅ content |
| Retail Sector | ⚠️ real content (cigars/tobacco) + air-travel filler to remove |
| Articles | ✅ list of PDFs |
| Funding | ✅ content (ESSER, COSTARS, UGG, FEMA, CAPE, contract #s) |
| About Us | ❌ empty |
| Testimonials | ❌ empty |
| Accreditations | ❌ empty |
| Contact Us | ✅ form + business info |
| Locations | ❌ empty |
| Cambria County (case study) | ✅ content (hidden page) |

## Suggested first-pass scope
Ship the pages that have real content first (Home, Products, Technology, the 5 non-empty Industries, Funding, Articles, Contact, Case study). Leave the 5 empty pages out of the nav until you have copy for them — a smaller complete site beats a big site full of blank pages.
