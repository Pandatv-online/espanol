#!/usr/bin/env python3
"""Extract road signs from the official BOE catalogue (RD 465/2025, BOE-A-2025-12199).

Usage: python3 -I tools/extract-signs.py <BOE-A-2025-12199.pdf> <out-dir>

For every catalogue row (code · name · description) it renders the sign cell to
<out-dir>/img/<code>.png and writes <out-dir>/signs.json:
[{code, page, section, name, desc, img}]. Development tool only; needs poppler
(pdftotext, pdftocairo) and Pillow. Legal texts and their annexes are not
protected by copyright in Spain (art. 13 LPI), so the images may be published.
"""
import json
import os
import re
import subprocess
import sys
import tempfile
from html import unescape

from PIL import Image

CODE = re.compile(r'^[A-Z]{1,3}-\d+[a-z]?(\.\d+)?[a-z]?$')
WORD = re.compile(r'<word xMin="([\d.]+)" yMin="([\d.]+)" xMax="([\d.]+)" yMax="([\d.]+)">(.*?)</word>')
PAGE = re.compile(r'<page width="([\d.]+)" height="([\d.]+)">(.*?)</page>', re.S)
DPI = 200


def words_by_page(pdf, first, last):
    out = subprocess.run(['pdftotext', '-bbox', '-f', str(first), '-l', str(last), pdf, '-'],
                         capture_output=True, text=True, check=True).stdout
    pages = []
    for m in PAGE.finditer(out):
        ws = [(float(a), float(b), float(c), float(d), unescape(t)) for a, b, c, d, t in WORD.findall(m.group(3))]
        pages.append(ws)
    return pages


def lines(ws):
    """Group words into text lines (by yMin) and join them."""
    rows = []
    for w in sorted(ws, key=lambda w: (round(w[1]), w[0])):
        if rows and abs(rows[-1][0] - w[1]) < 3:
            rows[-1][1].append(w)
        else:
            rows.append([w[1], [w]])
    return [' '.join(x[4] for x in sorted(r[1], key=lambda w: w[0])) for r in rows]


def clean(text):
    text = re.sub(r'\s+', ' ', text).strip()
    return re.sub(r'(\w)- (\w)', r'\1\2', text)


def drop_rules(im):
    """Whiten thin table borders: a nearly full row/column with white space on both sides."""
    g = im.convert('L')
    w, h = g.size
    px = g.load()
    dark_row = [sum(1 for x in range(w) if px[x, y] < 200) / w for y in range(h)]
    dark_col = [sum(1 for y in range(h) if px[x, y] < 200) / h for x in range(w)]
    white = Image.new('RGB', im.size, 'white')
    out = im.copy()
    for y, f in enumerate(dark_row):
        if f > 0.6 and (y < 5 or dark_row[y - 5] < 0.3) and (y + 5 >= h or dark_row[y + 5] < 0.3):
            out.paste(white.crop((0, 0, w, 3)), (0, max(y - 1, 0)))
    for x, f in enumerate(dark_col):
        if f > 0.6 and (x < 5 or dark_col[x - 5] < 0.3) and (x + 5 >= w or dark_col[x + 5] < 0.3):
            out.paste(white.crop((0, 0, 3, h)), (max(x - 1, 0), 0))
    return out


def trim(path):
    im = Image.open(path).convert('RGB')
    w, h = im.size
    im = im.crop((3, 3, w - 3, h - 3))
    im = drop_rules(im)
    gray = im.convert('L').point(lambda p: 255 if p < 225 else 0)
    box = gray.getbbox()
    if box:
        pad = 4
        box = (max(box[0] - pad, 0), max(box[1] - pad, 0), min(box[2] + pad, im.width), min(box[3] + pad, im.height))
        im = im.crop(box)
    # keep files small: at most 240 px on the long side, adaptive palette
    im.thumbnail((240, 240), Image.LANCZOS)
    im.convert('P', palette=Image.ADAPTIVE, colors=64).save(path, optimize=True)


def main(pdf, out, first=35, last=160):
    os.makedirs(os.path.join(out, 'img'), exist_ok=True)
    signs = []
    section = ''
    scale = DPI / 72.0
    for idx, ws in enumerate(words_by_page(pdf, first, last)):
        page = first + idx
        ws = [w for w in ws if 100 < w[1] < 800 and w[0] < 540]
        heads = [w for w in ws if w[4] == 'SEÑALES' or w[4] == 'MARCAS' or w[4] == 'PANELES' or w[4] == 'OTRAS']
        codes = [w for w in ws if CODE.match(w[4])]
        if not codes:
            continue
        codex = min(c[0] for c in codes)
        codes = [c for c in codes if abs(c[0] - codex) < 6]
        codes.sort(key=lambda w: w[1])
        if heads:
            top = min(h[1] for h in heads)
            section = clean(' '.join(lines([w for w in ws if abs(w[1] - top) < 3])))
        bottom = max(w[3] for w in ws) + 8
        for i, c in enumerate(codes):
            y0 = c[1] - 7
            y1 = (codes[i + 1][1] - 7) if i + 1 < len(codes) else bottom
            body = [w for w in ws if y0 < w[1] < y1 - 2 and w[0] > codex - 3 and w is not c]
            desc_start = next((w[1] for w in sorted(body, key=lambda w: w[1]) if abs(w[0] - codex) < 3), y1)
            name = clean(' '.join(lines([w for w in body if w[1] < desc_start - 2 and w[0] > c[2] + 4])))
            desc = clean(' '.join(lines([w for w in body if w[1] >= desc_start - 2])))
            code = c[4]
            img = os.path.join(out, 'img', code + '.png')
            x0 = 50
            with tempfile.TemporaryDirectory() as tmp:
                base = os.path.join(tmp, 'cell')
                subprocess.run(['pdftocairo', '-png', '-singlefile', '-r', str(DPI), '-f', str(page), '-l', str(page),
                                '-x', str(int(x0 * scale)), '-y', str(int(y0 * scale)),
                                '-W', str(int((codex - 9 - x0) * scale)), '-H', str(int((y1 - y0) * scale)),
                                pdf, base], check=True)
                os.replace(base + '.png', img)
            trim(img)
            signs.append({'code': code, 'page': page, 'section': section, 'name': name, 'desc': desc,
                          'img': 'img/' + code + '.png'})
    with open(os.path.join(out, 'signs.json'), 'w', encoding='utf-8') as f:
        json.dump(signs, f, ensure_ascii=False, indent=1)
    print('signs:', len(signs))


if __name__ == '__main__':
    if len(sys.argv) < 3:
        sys.exit(__doc__)
    main(sys.argv[1], sys.argv[2], *[int(a) for a in sys.argv[3:5]])
