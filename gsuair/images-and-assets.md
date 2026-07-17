# Images & Downloadable Assets

All media lives on GoDaddy's CDN (img1.wsimg.com). Once you cancel GoDaddy these URLs will eventually stop working, so **download everything now** using the script in this folder (`download-assets.sh`).

## Known image URLs (from page metadata + inline)
- LOGO (transparent): https://img1.wsimg.com/isteam/ip/3944f97f-1570-4b70-8225-225ab423c95e/LOGO%20GERM%20TRANSPARENT.png
- Products page hero: https://img1.wsimg.com/isteam/ip/3944f97f-1570-4b70-8225-225ab423c95e/blob-59ba9a7.png
- Funding page header: https://img1.wsimg.com/isteam/ip/3944f97f-1570-4b70-8225-225ab423c95e/blob-0badcaf.png

NOTE: Many images on the site render from `![]()` with empty src in the extracted text (they're loaded via the builder's lazy-loader / background CSS). The script below crawls the live HTML to catch every img1.wsimg.com asset automatically — that's the reliable way to get them all.

## Downloadable PDFs
- White Paper - ActivePure Technology (PCO):
  https://img1.wsimg.com/blobby/go/3944f97f-1570-4b70-8225-225ab423c95e/downloads/6511ca09-01d7-4deb-bfec-c64c3067a5cf/WhitePaper_PCOtechnology_Short.pdf
- 2024 Legislative News:
  https://img1.wsimg.com/blobby/go/3944f97f-1570-4b70-8225-225ab423c95e/downloads/e0e6b0d2-3df4-4fb2-8a2c-a4d834aa2854/legislative%20converted%20to%20work%20Article_IndoorAi.pdf
- 2022 Good Ventilation Helps Respiratory Viruses:
  https://img1.wsimg.com/blobby/go/3944f97f-1570-4b70-8225-225ab423c95e/downloads/c73faa56-0dce-4a27-a90b-0adeb7a89611/Article_About%20Ventilation%20and%20Respiratory%20Viru.pdf
- 2024 Wildfires and Your Mind:
  https://img1.wsimg.com/blobby/go/3944f97f-1570-4b70-8225-225ab423c95e/downloads/1fe5a4d8-53a8-4853-aade-a33f60966d13/Article_ProtectYourBrainAgainstWildfires.pdf
- 2024 Dallas TX Residential Health Care Facility (Covid -94%):
  https://img1.wsimg.com/blobby/go/3944f97f-1570-4b70-8225-225ab423c95e/downloads/f1b03d6a-4ffb-49ce-8d80-751153324330/Article_Study_ResidentialHealthCareFacility.pdf
- 2023 ActivePure Solution for Medical Industry:
  https://img1.wsimg.com/blobby/go/3944f97f-1570-4b70-8225-225ab423c95e/downloads/737e7f4d-db6d-4a35-a617-a6e3fc10fcda/Article_ActivePure%20Medical_s%20Technology.pdf
- 2023 Study Gives Great Hope in Combating MRSA: (URL truncated in fetch — grab from live /articles-1 page)

## Also grab (internal brochure/application pages — may host their own PDFs)
- gsuair.com/beyond-brochure
- gsuair.com/brochure-pure-%26-clean
- gsuair.com/eans-application

## Videos (NOT downloadable via script — hosted on Vimeo/YouTube)
These belong to the ActivePure/Aerus/GSU accounts. If they're yours, keep the embed URLs; otherwise re-embed:
- Vimeo main: https://player.vimeo.com/video/1047595425 (hash d2fc01db4e)
- Vimeo residences (East Palestine story): https://player.vimeo.com/video/1051369131 (hash 29bb480f3f)
- YouTube education: https://youtube.com/embed/6eXyTL8-2_A
