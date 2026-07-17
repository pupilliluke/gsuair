# GSUAIR.com — Content & Design Export

Everything salvaged from the current GoDaddy site, ready to hand to Claude Code for a rebuild.

## What's here
- **`content/`** — every page's text as clean markdown, numbered in nav order. Typos and leftover builder filler are flagged inline (⚠️) so you know what to fix vs. keep.
- **`design-notes.md`** — brand color, typography, layout pattern, full sitemap, contact-info inconsistencies to resolve, and a cleanup checklist.
- **`images-and-assets.md`** — inventory of the logo, images, PDFs, and video embeds, with their URLs.
- **`download-assets.sh`** — run this **on your own machine** to download all images + PDFs from GoDaddy before you cancel. (My sandbox can't reach gsuair.com, so this step is yours — it's quick.)
- **`claude-code-brief.md`** — a ready-to-paste prompt + context to kick off the rebuild in Claude Code, with a recommended stack and a per-page content status table.

## Important reality check
The old site is **GoDaddy Website Builder**, which has **no exportable source code** — the HTML is generated on their servers. So "downloading all the code" isn't possible in the literal sense. What you actually need to move platforms is exactly what's in this package: the **content**, the **media**, and the **design intent**. That's the real portable asset; the builder markup wouldn't be worth keeping anyway.

## Do this in order
1. **Now, before anything:** run `download-assets.sh` to grab all images + PDFs while GoDaddy is still live.
2. Confirm the two data inconsistencies (address 204 vs 104; phone 3853 vs 8353).
3. Open this folder in Claude Code and paste the prompt from `claude-code-brief.md`.
4. Build + test the new site on a host (Astro on Netlify/Vercel/Cloudflare Pages is my recommendation).
5. Point DNS at the new host, or transfer the domain out of GoDaddy.
6. Rebuild the contact form on a real handler.
7. Only cancel the GoDaddy subscription once the new site is verified live.
