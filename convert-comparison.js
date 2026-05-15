import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function convertImage() {
  try {
    const inputPath = path.join(__dirname, 'public', 'comparison.png');
    const outputPath = path.join(__dirname, 'public', 'comparison.webp');

    if (!fs.existsSync(inputPath)) {
      console.error('❌ Error: comparison.png not found in public folder');
      console.log('📝 Please save your comparison image as public/comparison.png first');
      process.exit(1);
    }

    await sharp(inputPath)
      .webp({ quality: 80 })
      .toFile(outputPath);

    const inputSize = fs.statSync(inputPath).size;
    const outputSize = fs.statSync(outputPath).size;
    const reduction = Math.round(((inputSize - outputSize) / inputSize) * 100);

    console.log(`✅ Conversion complete!`);
    console.log(`📊 ${inputPath} (${(inputSize / 1024).toFixed(1)}KB)`);
    console.log(`📊 ${outputPath} (${(outputSize / 1024).toFixed(1)}KB) - ${reduction}% smaller`);
  } catch (error) {
    console.error('❌ Conversion failed:', error.message);
    process.exit(1);
  }
}

convertImage();
