// =============================================================================
// optimize-images.mjs
//
// Recompresses all images in public/images/ in-place:
//   - Resizes to max 1600px on the longest side (more than enough for retina)
//   - PNG: optimized palette + adaptive filter (lossless visual quality)
//   - JPG: quality 85 mozjpeg (visually identical to source for photos)
//
// Run with:  node scripts/optimize-images.mjs
// =============================================================================

import { readdir, stat, rename } from "node:fs/promises";
import { join, extname } from "node:path";
import sharp from "sharp";

const ROOT = "public/images";
const MAX_DIMENSION = 1600;

// Hero/portrait images preserved at full quality (visible at large sizes)
const PRESERVE = new Set([
  "public/images/story_images/tarcila.png",
  "public/images/story_images/tarcila9x16.png",
]);

let beforeTotal = 0;
let afterTotal = 0;
let processed = 0;
let skipped = 0;

async function walk(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  for (const entry of entries) {
    const full = join(dir, entry.name);
    if (entry.isDirectory()) {
      await walk(full);
    } else {
      await processFile(full);
    }
  }
}

async function processFile(filePath) {
  const ext = extname(filePath).toLowerCase();
  if (![".png", ".jpg", ".jpeg"].includes(ext)) return;

  const normalized = filePath.replace(/\\/g, "/");
  if (PRESERVE.has(normalized)) {
    skipped++;
    console.log(`  · ${filePath.replace("public/images/", "")}  (preservada — qualidade alta)`);
    const beforeStat = await stat(filePath);
    beforeTotal += beforeStat.size;
    afterTotal += beforeStat.size;
    return;
  }

  try {
    const beforeStat = await stat(filePath);
    const beforeBytes = beforeStat.size;
    beforeTotal += beforeBytes;

    const tmpPath = `${filePath}.optimizing`;
    const image = sharp(filePath, { failOn: "none" });
    const metadata = await image.metadata();

    const needsResize =
      (metadata.width && metadata.width > MAX_DIMENSION) ||
      (metadata.height && metadata.height > MAX_DIMENSION);

    let pipeline = image.rotate(); // honor EXIF orientation
    if (needsResize) {
      pipeline = pipeline.resize({
        width: MAX_DIMENSION,
        height: MAX_DIMENSION,
        fit: "inside",
        withoutEnlargement: true,
      });
    }

    if (ext === ".png") {
      pipeline = pipeline.png({
        compressionLevel: 9,
        adaptiveFiltering: true,
        palette: true,
        quality: 90,
      });
    } else {
      pipeline = pipeline.jpeg({
        quality: 85,
        mozjpeg: true,
        progressive: true,
      });
    }

    await pipeline.toFile(tmpPath);
    const afterStat = await stat(tmpPath);
    const afterBytes = afterStat.size;

    // Only replace if smaller (otherwise keep original)
    if (afterBytes < beforeBytes) {
      await rename(tmpPath, filePath);
      afterTotal += afterBytes;
      processed++;
      const savedPct = (((beforeBytes - afterBytes) / beforeBytes) * 100).toFixed(1);
      console.log(
        `  ✓ ${filePath.replace("public/images/", "")}  ${(beforeBytes / 1024).toFixed(0)}KB → ${(afterBytes / 1024).toFixed(0)}KB  (-${savedPct}%)`,
      );
    } else {
      // Keep original; remove temp
      await rename(tmpPath, `${tmpPath}.discarded`);
      const { unlink } = await import("node:fs/promises");
      await unlink(`${tmpPath}.discarded`);
      afterTotal += beforeBytes;
      skipped++;
      console.log(`  · ${filePath.replace("public/images/", "")}  (já otimizado)`);
    }
  } catch (err) {
    console.error(`  ✗ ${filePath}: ${err.message}`);
  }
}

console.log(`\nOtimizando imagens em ${ROOT}/...\n`);
await walk(ROOT);

const savedTotal = beforeTotal - afterTotal;
const savedPct = ((savedTotal / beforeTotal) * 100).toFixed(1);

console.log(`\n────────────────────────────────────────────`);
console.log(`Total processados:  ${processed} arquivos`);
console.log(`Já otimizados:      ${skipped} arquivos (mantidos)`);
console.log(`Antes:  ${(beforeTotal / 1024 / 1024).toFixed(1)} MB`);
console.log(`Depois: ${(afterTotal / 1024 / 1024).toFixed(1)} MB`);
console.log(`Economia: ${(savedTotal / 1024 / 1024).toFixed(1)} MB (-${savedPct}%)`);
console.log(`────────────────────────────────────────────\n`);
