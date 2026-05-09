import https from 'https';
import http from 'http';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.join(__dirname, '..');

// Ensure directories exist
['public/images', 'public/seo'].forEach(dir => {
  fs.mkdirSync(path.join(rootDir, dir), { recursive: true });
});

const assets = [
  // Images
  { url: 'https://www.dvlop.in/V.svg', dest: 'public/V.svg' },
  { url: 'https://www.dvlop.in/images/hero_card_clients.png', dest: 'public/images/hero_card_clients.png' },
  { url: 'https://www.dvlop.in/images/hero_card_years.png', dest: 'public/images/hero_card_years.png' },
  { url: 'https://res.cloudinary.com/dw6u7awlo/image/upload/v1773129340/ucfw36ww8egqvn4cbb6d.png', dest: 'public/images/kalapi-fashion.png' },
  { url: 'https://res.cloudinary.com/dw6u7awlo/image/upload/v1770747494/q0cygtokr06d10ccq1lw.jpg', dest: 'public/images/ashion.jpg' },
  { url: 'https://res.cloudinary.com/dw6u7awlo/image/upload/v1770740006/zygmmhqkvbnsqnwnthre.jpg', dest: 'public/images/prysmor.jpg' },
  { url: 'https://res.cloudinary.com/dw6u7awlo/image/upload/v1770737990/de7s7nouoasq5vojfvng.jpg', dest: 'public/images/ccms.jpg' },
  // Favicons & meta
  { url: 'https://www.dvlop.in/favicon.ico', dest: 'public/seo/favicon.ico' },
  { url: 'https://www.dvlop.in/favicon.svg', dest: 'public/seo/favicon.svg' },
  { url: 'https://www.dvlop.in/apple-touch-icon.png', dest: 'public/seo/apple-touch-icon.png' },
  { url: 'https://www.dvlop.in/site.webmanifest', dest: 'public/seo/site.webmanifest' },
];

function downloadFile(url, dest) {
  return new Promise((resolve, reject) => {
    const protocol = url.startsWith('https') ? https : http;
    const fullPath = path.join(rootDir, dest);
    
    // Skip if already exists
    if (fs.existsSync(fullPath)) {
      console.log(`  ✓ Already exists: ${dest}`);
      resolve();
      return;
    }

    const file = fs.createWriteStream(fullPath);
    protocol.get(url, (response) => {
      if (response.statusCode === 301 || response.statusCode === 302) {
        // Follow redirect
        downloadFile(response.headers.location, dest).then(resolve).catch(reject);
        return;
      }
      if (response.statusCode !== 200) {
        reject(new Error(`Failed to download ${url}: ${response.statusCode}`));
        return;
      }
      response.pipe(file);
      file.on('finish', () => {
        file.close();
        console.log(`  ✓ Downloaded: ${dest}`);
        resolve();
      });
    }).on('error', (err) => {
      fs.unlink(fullPath, () => {});
      reject(err);
    });
  });
}

async function downloadAll() {
  console.log('Downloading assets...');
  const batchSize = 4;
  for (let i = 0; i < assets.length; i += batchSize) {
    const batch = assets.slice(i, i + batchSize);
    await Promise.all(batch.map(a => downloadFile(a.url, a.dest).catch(err => {
      console.error(`  ✗ Failed: ${a.dest} - ${err.message}`);
    })));
  }
  console.log(`\nDownloaded ${assets.length} assets`);
}

downloadAll();
