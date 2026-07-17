#!/usr/bin/env bash
#
# download-assets.sh
# Downloads all images and PDFs from gsuair.com (GoDaddy-hosted) to local folders,
# so you have a full copy of the media before migrating off GoDaddy.
#
# Requirements: bash, curl, and wget (all standard on macOS/Linux; on Windows use Git Bash or WSL).
# Usage:  chmod +x download-assets.sh && ./download-assets.sh
#
set -uo pipefail

OUT="gsuair-assets"
mkdir -p "$OUT/images" "$OUT/pdfs" "$OUT/html"

PAGES=(
  "https://gsuair.com/"
  "https://gsuair.com/products-2"
  "https://gsuair.com/technology"
  "https://gsuair.com/education"
  "https://gsuair.com/government-facilities"
  "https://gsuair.com/manufacturing"
  "https://gsuair.com/medical"
  "https://gsuair.com/residences%2Fhome-offices"
  "https://gsuair.com/retail-sector"
  "https://gsuair.com/articles-1"
  "https://gsuair.com/funding"
  "https://gsuair.com/about-us"
  "https://gsuair.com/testimonials"
  "https://gsuair.com/accreditations"
  "https://gsuair.com/contact-us"
  "https://gsuair.com/locations-1"
  "https://gsuair.com/cambria-county-gov"
  "https://gsuair.com/beyond-brochure"
  "https://gsuair.com/brochure-pure-%26-clean"
  "https://gsuair.com/eans-application"
)

UA="Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120 Safari/537.36"

echo "==> Saving raw HTML for each page..."
for url in "${PAGES[@]}"; do
  name=$(echo "$url" | sed -E 's#https://gsuair.com/?##; s#[/%]#_#g')
  [ -z "$name" ] && name="home"
  curl -sL -A "$UA" "$url" -o "$OUT/html/${name}.html"
  echo "    saved $name.html"
done

echo "==> Extracting all img1.wsimg.com asset URLs from the HTML..."
# Pull every wsimg URL (images live under /isteam/, downloads under /blobby/)
grep -rhoE 'https://img1\.wsimg\.com[^"'"'"' )]+' "$OUT/html" \
  | sed -E 's/\\u002f/\//g; s/&amp;/\&/g' \
  | sort -u > "$OUT/all-asset-urls.txt"

echo "    found $(wc -l < "$OUT/all-asset-urls.txt") unique asset URLs"

echo "==> Downloading images (isteam) ..."
grep '/isteam/' "$OUT/all-asset-urls.txt" | while read -r u; do
  # strip GoDaddy's on-the-fly crop/resize suffix (everything after '/:/') to get the original
  clean="${u%%/:/*}"
  wget -q --user-agent="$UA" -P "$OUT/images" "$clean" && echo "    img: $(basename "$clean")"
done

echo "==> Downloading PDFs / downloads (blobby) ..."
grep '/blobby/' "$OUT/all-asset-urls.txt" | while read -r u; do
  wget -q --user-agent="$UA" --content-disposition -P "$OUT/pdfs" "$u" && echo "    pdf: got one"
done

echo ""
echo "Done. Everything is under ./$OUT/"
echo "  - $OUT/html/    raw HTML of every page (design reference)"
echo "  - $OUT/images/  all images"
echo "  - $OUT/pdfs/    all downloadable PDFs"
echo "  - $OUT/all-asset-urls.txt  the full list, in case any download needs a manual retry"
