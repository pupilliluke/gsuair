#!/usr/bin/env bash
#
# download-assets-curl.sh
# Same job as download-assets.sh, but curl-only (Git Bash on Windows has no wget).
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
  code=$(curl -sL -A "$UA" -w '%{http_code}' --max-time 45 "$url" -o "$OUT/html/${name}.html")
  echo "    $code  $name.html"
done

echo "==> Extracting all img1.wsimg.com asset URLs..."
grep -rhoE 'https://img1\.wsimg\.com[^"'"'"' )\\]+' "$OUT/html" \
  | sed -E 's/&amp;/\&/g' \
  | sort -u > "$OUT/all-asset-urls.txt"
echo "    found $(wc -l < "$OUT/all-asset-urls.txt") unique asset URLs"

echo "==> Downloading images (isteam) ..."
grep '/isteam/' "$OUT/all-asset-urls.txt" | while read -r u; do
  clean="${u%%/:/*}"
  base=$(basename "$clean" | sed 's/%20/_/g')
  [ -f "$OUT/images/$base" ] && continue
  if curl -sfL -A "$UA" --max-time 60 "$clean" -o "$OUT/images/$base"; then
    echo "    img: $base"
  else
    rm -f "$OUT/images/$base"
    echo "    MISS: $clean"
  fi
done

echo "==> Downloading PDFs / downloads (blobby) ..."
grep '/blobby/' "$OUT/all-asset-urls.txt" | while read -r u; do
  base=$(basename "$u" | sed 's/%20/_/g')
  case "$base" in *.pdf|*.PDF) ;; *) base="${base}.pdf" ;; esac
  [ -f "$OUT/pdfs/$base" ] && continue
  if curl -sfL -A "$UA" --max-time 120 "$u" -o "$OUT/pdfs/$base"; then
    echo "    pdf: $base"
  else
    rm -f "$OUT/pdfs/$base"
    echo "    MISS: $u"
  fi
done

echo ""
echo "Done. Everything is under ./$OUT/"
