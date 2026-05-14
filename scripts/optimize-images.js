#!/usr/bin/env node
/**
 * Image Optimization Script for FoodSpot Mobile
 * Converts PNG/JPEG images to WebP and reports savings
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import sharp from 'sharp';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT = path.join(__dirname, '..');

const IMAGE_DIRS = ['public'];
const QUALITY = 70;

async function findImages(dir) {
  const files = [];
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isFile() && /\.(png|jpe?g|gif)$/i.test(entry.name)) {
      files.push(fullPath);
    }
  }
  
  return files;
}

function formatBytes(bytes) {
  if (bytes === 0) return '0 B';
  const k = 1024;
  const sizes = ['B', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
}

async function optimize() {
  console.log('🔍 Scanning for images...\n');
  
  let allImages = [];
  for (const dir of IMAGE_DIRS) {
    const fullDir = path.join(ROOT, dir);
    if (fs.existsSync(fullDir)) {
      const images = await findImages(fullDir);
      allImages = allImages.concat(images);
    }
  }
  
  if (allImages.length === 0) {
    console.log('No images found.');
    return;
  }
  
  console.log(`Found ${allImages.length} image(s)\n`);
  console.log('=' .repeat(70));
  console.log('📊 IMAGE OPTIMIZATION REPORT');
  console.log('=' .repeat(70));
  
  let totalOriginal = 0;
  let totalWebP = 0;
  
  for (const imagePath of allImages) {
    const ext = path.extname(imagePath).toLowerCase();
    const baseName = path.basename(imagePath, ext);
    const dir = path.dirname(imagePath);
    const webpPath = path.join(dir, `${baseName}.webp`);
    
    const originalSize = fs.statSync(imagePath).size;
    totalOriginal += originalSize;
    
    // Convert to WebP
    await sharp(imagePath)
      .webp({ quality: QUALITY, effort: 6 })
      .toFile(webpPath);
    
    const webpSize = fs.statSync(webpPath).size;
    totalWebP += webpSize;
    
    const savings = originalSize - webpSize;
    const savingsPercent = ((savings / originalSize) * 100).toFixed(1);
    
    console.log(`\n🖼️  ${path.basename(imagePath)}`);
    console.log(`   Original: ${formatBytes(originalSize)}`);
    console.log(`   WebP:     ${formatBytes(webpSize)}`);
    console.log(`   Saved:    ${formatBytes(savings)} (${savingsPercent}%)`);
  }
  
  const totalSavings = totalOriginal - totalWebP;
  const totalSavingsPercent = ((totalSavings / totalOriginal) * 100).toFixed(1);
  
  console.log('\n' + '='.repeat(70));
  console.log('📈 TOTALS');
  console.log('='.repeat(70));
  console.log(`Original size: ${formatBytes(totalOriginal)}`);
  console.log(`WebP size:     ${formatBytes(totalWebP)}`);
  console.log(`Saved:         ${formatBytes(totalSavings)} (${totalSavingsPercent}%)`);
  console.log('='.repeat(70));
  
  // Write report to file
  const reportPath = path.join(ROOT, 'image-optimization-report.txt');
  const report = `
Image Optimization Report
Generated: ${new Date().toISOString()}
Quality: ${QUALITY}%

Total Original: ${formatBytes(totalOriginal)}
Total WebP:     ${formatBytes(totalWebP)}
Total Saved:    ${formatBytes(totalSavings)} (${totalSavingsPercent}%)
`.trim();
  
  fs.writeFileSync(reportPath, report);
  console.log(`\n📝 Report saved to: image-optimization-report.txt`);
}

optimize().catch(console.error);
