// =============================================================================
// optimize-videos.mjs
//
// Re-encodes video files in public/animations/ at web-optimized bitrates:
//   - MP4 (H.264):  CRF 28, faststart (streamable from start)
//   - WebM (VP9):   CRF 34 row-mt parallel, deadline good
//
// Quality drop is imperceptible for animation content at these settings,
// but file sizes typically drop 40-60%.
//
// Run with:  node scripts/optimize-videos.mjs
// =============================================================================

import { readdir, stat, rename, unlink } from "node:fs/promises";
import { join, extname } from "node:path";
import { spawn } from "node:child_process";

const ROOT = "public/animations";
const FFMPEG = "C:/Users/Usuario/Downloads/Nova pasta (6)/ffmpeg-2026-01-29-git-c898ddb8fe-essentials_build/bin/ffmpeg.exe";

let beforeTotal = 0;
let afterTotal = 0;
let processed = 0;
let skipped = 0;

function runFfmpeg(args) {
  return new Promise((resolve, reject) => {
    const proc = spawn(FFMPEG, args, { stdio: ["ignore", "pipe", "pipe"] });
    let stderr = "";
    proc.stderr.on("data", (d) => (stderr += d.toString()));
    proc.on("close", (code) => {
      if (code === 0) resolve();
      else reject(new Error(`ffmpeg exit ${code}: ${stderr.slice(-300)}`));
    });
  });
}

async function processFile(filePath) {
  const ext = extname(filePath).toLowerCase();
  if (![".mp4", ".webm"].includes(ext)) return;

  const beforeStat = await stat(filePath);
  const beforeBytes = beforeStat.size;
  beforeTotal += beforeBytes;

  const tmpPath = `${filePath}.optimizing${ext}`;

  let args;
  if (ext === ".mp4") {
    args = [
      "-y",
      "-i", filePath,
      "-c:v", "libx264",
      "-preset", "slow",
      "-crf", "28",
      "-pix_fmt", "yuv420p",
      "-movflags", "+faststart",
      "-an", // no audio (loop animations don't need it)
      tmpPath,
    ];
  } else {
    args = [
      "-y",
      "-i", filePath,
      "-c:v", "libvpx-vp9",
      "-crf", "34",
      "-b:v", "0",
      "-deadline", "good",
      "-cpu-used", "2",
      "-row-mt", "1",
      "-an",
      tmpPath,
    ];
  }

  try {
    await runFfmpeg(args);
    const afterStat = await stat(tmpPath);
    const afterBytes = afterStat.size;

    if (afterBytes < beforeBytes * 0.95) {
      await rename(tmpPath, filePath);
      afterTotal += afterBytes;
      processed++;
      const savedPct = (((beforeBytes - afterBytes) / beforeBytes) * 100).toFixed(1);
      console.log(
        `  ✓ ${filePath.replace("public/animations/", "")}  ${(beforeBytes / 1024).toFixed(0)}KB → ${(afterBytes / 1024).toFixed(0)}KB  (-${savedPct}%)`,
      );
    } else {
      await unlink(tmpPath);
      afterTotal += beforeBytes;
      skipped++;
      console.log(`  · ${filePath.replace("public/animations/", "")}  (já otimizado)`);
    }
  } catch (err) {
    console.error(`  ✗ ${filePath}: ${err.message}`);
    afterTotal += beforeBytes;
    try {
      await unlink(tmpPath);
    } catch {}
  }
}

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

console.log(`\nOtimizando vídeos em ${ROOT}/...\n`);
await walk(ROOT);

const savedTotal = beforeTotal - afterTotal;
const savedPct = ((savedTotal / beforeTotal) * 100).toFixed(1);

console.log(`\n────────────────────────────────────────────`);
console.log(`Total processados:  ${processed} arquivos`);
console.log(`Já otimizados:      ${skipped} arquivos`);
console.log(`Antes:  ${(beforeTotal / 1024 / 1024).toFixed(1)} MB`);
console.log(`Depois: ${(afterTotal / 1024 / 1024).toFixed(1)} MB`);
console.log(`Economia: ${(savedTotal / 1024 / 1024).toFixed(1)} MB (-${savedPct}%)`);
console.log(`────────────────────────────────────────────\n`);
