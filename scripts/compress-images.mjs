import sharp from 'sharp';
import { readdir, stat } from 'fs/promises';
import path from 'path';

const PUBLIC_DIR = './public';

const TARGETS = [
  // Hero: Lighthouse says 40KB → can save 24KB. Compress aggressively.
  {
    input: 'hero.webp',
    output: 'hero.webp',
    width: 1200,
    quality: 72,
    note: 'LCP image — high priority compression'
  },
  // 1menu: 693x1376 displayed at 549x984 — resize to max 600px wide
  {
    input: '1menu.webp',
    output: '1menu.webp',
    width: 600,
    quality: 75,
    note: 'Oversized for display dimensions'
  },
  // 2brand: likely also oversized
  {
    input: '2brand.png',
    output: '2brand.webp',
    width: 600,
    quality: 75,
    note: 'Convert PNG → WebP'
  },
  // Other images
  {
    input: 'ugc-benefits.webp',
    output: 'ugc-benefits.webp',
    width: 800,
    quality: 75,
    note: 'General optimization'
  },
  {
    input: 'ai-mockup.webp',
    output: 'ai-mockup.webp',
    width: 800,
    quality: 75,
    note: 'General optimization'
  },
  {
    input: 'finance.webp',
    output: 'finance.webp',
    width: 800,
    quality: 75,
    note: 'General optimization'
  },
];

async function getFileSize(filePath) {
  try {
    const s = await stat(filePath);
    return (s.size / 1024).toFixed(1) + 'KB';
  } catch {
    return 'N/A';
  }
}

async function compressImages() {
  console.log('🔧 FoodSpot Landing — Image Compression\n');
  let totalSaved = 0;

  for (const target of TARGETS) {
    const inputPath = path.join(PUBLIC_DIR, target.input);
    const outputPath = path.join(PUBLIC_DIR, target.output);

    try {
      const beforeSize = await getFileSize(inputPath);

      await sharp(inputPath)
        .resize(target.width, null, {
          withoutEnlargement: true,
          fit: 'inside'
        })
        .webp({ quality: target.quality })
        .toFile(outputPath + '.tmp');

      // Replace original
      const { rename } = await import('fs/promises');
      await rename(outputPath + '.tmp', outputPath);

      const afterSize = await getFileSize(outputPath);
      console.log(`✅ ${target.input}`);
      console.log(`   Before: ${beforeSize} → After: ${afterSize}`);
      console.log(`   Note: ${target.note}\n`);

    } catch (err) {
      console.log(`⚠️  Skipped ${target.input}: ${err.message}\n`);
    }
  }

  console.log('✅ Done! Rebuild and re-audit to see improvement.');
}

compressImages();
