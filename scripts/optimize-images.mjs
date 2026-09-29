#!/usr/bin/env node
/**
 * Image pipeline for the portfolio.
 *
 * Convention (mirrored in images/ and public/work/):
 *
 *   images/<slug>/                 originals (gitignored, any extension)
 *   public/work/<slug>/            optimized 2400px JPEG (committed)
 *     cover/
 *       home-desktop.jpg           4:3  — Home scroller card (desktop)
 *       home-mobile.jpg            3:4  — Home card + Work row (mobile ≤900px)
 *       work-desktop.jpg           16:9 — Work list row (desktop) + detail hero
 *     sections/
 *       01-context.jpg             NN = section number, then kebab-case name
 *       02-sketches.jpg
 *       02-wireframes.jpg          two images in one section share the same NN
 *
 * Usage:
 *   npm run images:init   — create empty cover/ + sections/ folders for every slug
 *   npm run images        — optimize images/<slug>/** → public/work/<slug>/**.jpg
 *   npm run images -- --force  — rebuild even if output is newer than source
 *
 * Rules:
 *   - Files/folders starting with _ are skipped (e.g. _unused-mp-000.jpg, _unsorted/)
 *   - Output is always .jpg at max-width 2400, quality 88, mozjpeg
 *   - No enlargement of smaller sources
 *   - To replace: drop a file at the same relative path in images/, run npm run images, commit public/
 */

import { mkdir, readdir, stat } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import { join, relative, dirname, extname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const SRC_ROOT = join(ROOT, 'images');
const OUT_ROOT = join(ROOT, 'public', 'work');
const WIDTH = 2400;
const QUALITY = 88;
const IMAGE_EXT = new Set(['.jpg', '.jpeg', '.png', '.webp', '.tif', '.tiff', '.avif']);

const SLUGS = [
  'palphone',
  'marefat',
  'leitner',
  'payman',
  'tabassom',
  'identity',
  'phonepay',
  'carpino',
  'fanavacard',
];

const force = process.argv.includes('--force');
const initOnly = process.argv.includes('--init');

async function ensureDirs() {
  for (const slug of SLUGS) {
    await mkdir(join(SRC_ROOT, slug, 'cover'), { recursive: true });
    await mkdir(join(SRC_ROOT, slug, 'sections'), { recursive: true });
  }
  console.log(`Created cover/ + sections/ for ${SLUGS.length} projects under images/`);
}

async function walk(dir, base = dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  const files = [];
  for (const e of entries) {
    if (e.name.startsWith('_') || e.name.startsWith('.')) continue;
    const full = join(dir, e.name);
    if (e.isDirectory()) {
      files.push(...(await walk(full, base)));
    } else if (IMAGE_EXT.has(extname(e.name).toLowerCase())) {
      files.push({ full, rel: relative(base, full) });
    }
  }
  return files;
}

async function optimizeOne(src, out) {
  await mkdir(dirname(out), { recursive: true });
  if (!force && existsSync(out)) {
    const [si, oi] = await Promise.all([stat(src), stat(out)]);
    if (oi.mtimeMs >= si.mtimeMs) {
      console.log(`  skip  ${relative(ROOT, out)} (up to date)`);
      return 'skip';
    }
  }
  const info = await sharp(src)
    .rotate()
    .resize({ width: WIDTH, withoutEnlargement: true })
    .jpeg({ quality: QUALITY, mozjpeg: true })
    .toFile(out);
  console.log(`  write ${relative(ROOT, out)} (${info.width}×${info.height}, ${Math.round(info.size / 1024)} KB)`);
  return 'write';
}

async function optimizeAll() {
  if (!existsSync(SRC_ROOT)) {
    console.error('images/ not found. Run npm run images:init first.');
    process.exit(1);
  }
  let written = 0;
  let skipped = 0;
  for (const slug of SLUGS) {
    const slugDir = join(SRC_ROOT, slug);
    if (!existsSync(slugDir)) continue;
    const files = await walk(slugDir);
    if (!files.length) continue;
    console.log(`\n${slug}/`);
    for (const { full, rel } of files) {
      const outRel = join(slug, rel.replace(extname(rel), '.jpg'));
      const out = join(OUT_ROOT, outRel);
      const result = await optimizeOne(full, out);
      if (result === 'write') written++;
      else skipped++;
    }
  }
  console.log(`\nDone. ${written} written, ${skipped} skipped.`);
}

if (initOnly) {
  await ensureDirs();
} else {
  await ensureDirs();
  await optimizeAll();
}
