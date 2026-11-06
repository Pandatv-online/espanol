#!/usr/bin/env python3
"""Extract road markings from the official BOE catalogue (RD 465/2025, BOE-A-2025-12199, «Catálogo de marcas viales»).

Usage: python3 -I tools/extract-markings.py <BOE-A-2025-12199.pdf> <out-dir> [first last]

Only pages with a table header «Código» are read. For every row it renders the «Geometría» cell to
<out-dir>/img/<code>.png and writes <out-dir>/markings.json: [{code, page, table, group, funcion, via, img}].
Development tool only; needs poppler (pdftotext, pdftocairo) and Pillow. Legal texts and their annexes
are not protected by copyright in Spain (art. 13 LPI), so the images may be published.
"""
import json
import os
import re
import subprocess
import sys
import tempfile
from html import unescape

from PIL import Image

CODE = re.compile(r'^M-\d+\.\d+[a-z]?$')
WORD = re.compile(r'<word xMin="([\d.]+)" yMin="([\d.]+)" xMax="([\d.]+)" yMax="([\d.]+)">(.*?)</word>')
PAGE = re.compile(r'<page width="([\d.]+)" height="([\d.]+)">(.*?)</page>', re.S)
DPI = 200


def pages(pdf, first, last):
    out = subprocess.run(['pdftotext', '-bbox', '-f', str(first), '-l', str(last), pdf, '-'],
                         capture_output=True, text=True, check=True).stdout
    for m in PAGE.finditer(out):
        yield [(float(a), float(b), float(c), float(d), unescape(t)) for a, b, c, d, t in WORD.findall(m.group(3))]


def text_of(ws):
    rows = []
    for w in sorted(ws, key=lambda w: (round(w[1]), w[0])):
        if rows and abs(rows[-1][0] - w[1]) < 3:
            rows[-1][1].append(w)
        else:
            rows.append([w[1], [w]])
    t = ' '.join(' '.join(x[4] for x in sorted(r[1], key=lambda w: w[0])) for r in rows)
    t = re.sub(r'\s+', ' ', t).strip()
    return re.sub(r'(\w)- (\w)', r'\1\2', t)


def drop_rules(im):
    """Whiten thin table borders: a nearly full row/column with white space on both sides."""
    g = im.convert('L')
    w, h = g.size
    px = g.load()
    dr = [sum(1 for x in range(w) if px[x, y] < 200) / w for y in range(h)]
    dc = [sum(1 for y in range(h) if px[x, y] < 200) / h for x in range(w)]
    out = im.copy()
    white = Image.new('RGB', im.size, 'white')
    for y, f in enumerate(dr):
        if f > 0.6 and (y < 5 or dr[y - 5] < 0.3) and (y + 5 >= h or dr[y + 5] < 0.3):
            out.paste(white.crop((0, 0, w, 3)), (0, max(y - 1, 0)))
    for x, f in enumerate(dc):
        if f > 0.6 and (x < 5 or dc[x - 5] < 0.3) and (x + 5 >= w or dc[x + 5] < 0.3):
            out.paste(white.crop((0, 0, 3, h)), (max(x - 1, 0), 0))
    return out


def trim(path):
    im = Image.open(path).convert('RGB')
    w, h = im.size
    im = drop_rules(im.crop((3, 3, w - 3, h - 3)))
    box = im.convert('L').point(lambda p: 255 if p < 225 else 0).getbbox()
    if box:
        im = im.crop((max(box[0] - 6, 0), max(box[1] - 6, 0), min(box[2] + 6, im.width), min(box[3] + 6, im.height)))
    im.thumbnail((480, 360), Image.LANCZOS)
    im.convert('P', palette=Image.ADAPTIVE, colors=32).save(path, optimize=True)


def main(pdf, out, first=640, last=685):
    os.makedirs(os.path.join(out, 'img'), exist_ok=True)
    rows = []
    scale = DPI / 72.0
    table = group = ''
    for i, ws in enumerate(pages(pdf, first, last)):
        page = first + i
        ws = [w for w in ws if 100 < w[1] < 800 and w[0] < 545]
        head = {w[4]: w for w in ws if w[4] in ('Función', 'Tipo', 'Código', 'Geometría', 'Anchura')}
        if 'Código' not in head or 'Geometría' not in head:
            continue
        hy = head['Código'][3]
        # table title (upper case) and group line (e.g. «Marcas longitudinales discontinuas») above the header
        above = [w for w in ws if w[1] < head['Código'][1] - 2]
        caps = [w for w in above if w[4].isupper() and len(w[4]) > 2]
        if caps:
            y = max(c[1] for c in caps)
            table = text_of([w for w in above if abs(w[1] - y) < 3])
            rest = [w for w in above if w[1] > y + 3]
            group = text_of(rest) if rest else ''
        elif above:
            group = text_of([w for w in above if abs(w[1] - max(a[1] for a in above)) < 3])
        cx = head['Código'][0]
        codes = sorted([w for w in ws if CODE.match(w[4]) and abs(w[0] - cx) < 12 and w[1] > hy], key=lambda w: w[1])
        if not codes:
            continue
        gx0 = head['Código'][2] + 14
        gx1 = head['Anchura'][0] - 8 if 'Anchura' in head else 545
        fx0 = head['Función'][0] - 8 if 'Función' in head else 60
        tx0 = head['Tipo'][0] - 8 if 'Tipo' in head else cx - 10
        bottom = max(w[3] for w in ws) + 6
        mids = [(codes[k][1] + codes[k + 1][1]) / 2 for k in range(len(codes) - 1)]
        for k, c in enumerate(codes):
            gap = (mids[k] - c[1]) if k < len(mids) else (c[1] - mids[k - 1]) if k else 60
            y0 = mids[k - 1] if k else max(hy + 4, c[1] - gap)
            y1 = mids[k] if k < len(mids) else min(bottom, c[1] + gap + 8)
            band = [w for w in ws if y0 <= w[1] < y1]
            funcion = text_of([w for w in band if fx0 <= w[0] < tx0])
            via = text_of([w for w in band if tx0 <= w[0] < cx - 4])
            code = c[4]
            img = os.path.join(out, 'img', code + '.png')
            with tempfile.TemporaryDirectory() as tmp:
                base = os.path.join(tmp, 'cell')
                subprocess.run(['pdftocairo', '-png', '-singlefile', '-r', str(DPI), '-f', str(page), '-l', str(page),
                                '-x', str(int(gx0 * scale)), '-y', str(int(y0 * scale)),
                                '-W', str(int((gx1 - gx0) * scale)), '-H', str(int((y1 - y0) * scale)), pdf, base], check=True)
                os.replace(base + '.png', img)
            trim(img)
            rows.append({'code': code, 'page': page, 'table': table, 'group': group,
                         'funcion': funcion, 'via': via, 'img': 'img/' + code + '.png'})
    with open(os.path.join(out, 'markings.json'), 'w', encoding='utf-8') as f:
        json.dump(rows, f, ensure_ascii=False, indent=1)
    print('markings:', len(rows))


if __name__ == '__main__':
    if len(sys.argv) < 3:
        sys.exit(__doc__)
    main(sys.argv[1], sys.argv[2], *[int(a) for a in sys.argv[3:5]])
