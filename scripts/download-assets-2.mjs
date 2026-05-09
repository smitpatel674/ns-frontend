import https from 'https';
import http from 'http';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.join(__dirname, '..');

const assets = [
  // About page leadership photos
  { url: 'https://res.cloudinary.com/dw6u7awlo/image/upload/v1770820602/boij7jfkfne8m5gefaba.jpg', dest: 'public/images/aman-nayak.jpg' },
  { url: 'https://res.cloudinary.com/dw6u7awlo/image/upload/v1769347620/azrrinlepboxwiuhpeye.jpg', dest: 'public/images/hiren-dadhaniya.jpg' },
  { url: 'https://cgstudio.onrender.com/static/default-placeholder.jpg', dest: 'public/images/unnati-dubal.jpg' },
  { url: 'https://res.cloudinary.com/dw6u7awlo/image/upload/v1773338239/ehpe48tqi2otjkpelvym.png', dest: 'public/images/rahul-chaudhary.png' },
  { url: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=2000', dest: 'public/images/about-hero.jpg' },
  // Extra project images for projects page
  { url: 'https://res.cloudinary.com/dw6u7awlo/image/upload/v1769783967/i7zsfsvq7y1bkibqxard.webp', dest: 'public/images/road-traffic-accident.webp' },
  { url: 'https://res.cloudinary.com/dw6u7awlo/image/upload/v1769783799/rbj4nedhhmtdbqedomlj.webp', dest: 'public/images/makhan-mirch.webp' },
  { url: 'https://res.cloudinary.com/dw6u7awlo/image/upload/v1769783736/icrtwyprc6bbwh2diy9z.webp', dest: 'public/images/mitrayana.webp' },
];

function downloadFile(url, dest) {
  return new Promise((resolve, reject) => {
    const protocol = url.startsWith('https') ? https : http;
    const fullPath = path.join(rootDir, dest);
    if (fs.existsSync(fullPath)) { console.log(`  ✓ Exists: ${dest}`); resolve(); return; }
    const file = fs.createWriteStream(fullPath);
    protocol.get(url, (response) => {
      if (response.statusCode === 301 || response.statusCode === 302) { downloadFile(response.headers.location, dest).then(resolve).catch(reject); return; }
      if (response.statusCode !== 200) { reject(new Error(`${url}: ${response.statusCode}`)); return; }
      response.pipe(file);
      file.on('finish', () => { file.close(); console.log(`  ✓ Downloaded: ${dest}`); resolve(); });
    }).on('error', reject);
  });
}

async function downloadAll() {
  console.log('Downloading additional assets...');
  for (let i = 0; i < assets.length; i += 4) {
    await Promise.all(assets.slice(i, i + 4).map(a => downloadFile(a.url, a.dest).catch(e => console.error(`  ✗ ${a.dest}: ${e.message}`))));
  }
}

downloadAll();
