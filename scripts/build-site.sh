#!/bin/sh
set -eu
cd "$(dirname "$0")/.."
rm -rf dist
mkdir -p dist
git archive --format=tar HEAD \
  index.html robots.txt sitemap.xml llms.txt llms-full.txt \
  css js data learn \
  favicon.svg favicon.ico favicon-96x96.png \
  apple-touch-icon.png icon-192.png icon-512.png site.webmanifest | tar -xf - -C dist
printf 'Site files copied to dist/\n'
