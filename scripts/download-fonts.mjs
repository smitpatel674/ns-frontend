import https from 'https';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.join(__dirname, '..');
const fontsDir = path.join(rootDir, 'src/app/fonts');

fs.mkdirSync(fontsDir, { recursive: true });

// Fontshare CDN URLs for Author and General Sans
const fonts = [
  // Author font (headings)
  { url: 'https://api.fontshare.com/v2/fonts/author/woff2/Author-Light.woff2', dest: 'Author-Light.woff2' },
  { url: 'https://api.fontshare.com/v2/fonts/author/woff2/Author-Regular.woff2', dest: 'Author-Regular.woff2' },
  { url: 'https://api.fontshare.com/v2/fonts/author/woff2/Author-Medium.woff2', dest: 'Author-Medium.woff2' },
  // General Sans font (body)
  { url: 'https://api.fontshare.com/v2/fonts/general-sans/woff2/GeneralSans-Regular.woff2', dest: 'GeneralSans-Regular.woff2' },
  { url: 'https://api.fontshare.com/v2/fonts/general-sans/woff2/GeneralSans-Medium.woff2', dest: 'GeneralSans-Medium.woff2' },
  { url: 'https://api.fontshare.com/v2/fonts/general-sans/woff2/GeneralSans-Semibold.woff2', dest: 'GeneralSans-Semibold.woff2' },
  { url: 'https://api.fontshare.com/v2/fonts/general-sans/woff2/GeneralSans-Bold.woff2', dest: 'GeneralSans-Bold.woff2' },
];

function downloadFile(url, dest) {
  return new Promise((resolve, reject) => {
    const fullPath = path.join(fontsDir, dest);
    
    if (fs.existsSync(fullPath)) {
      console.log(`  ✓ Already exists: ${dest}`);
      resolve();
      return;
    }

    const file = fs.createWriteStream(fullPath);
    https.get(url, (response) => {
      if (response.statusCode === 301 || response.statusCode === 302) {
        https.get(response.headers.location, (redirected) => {
          redirected.pipe(file);
          file.on('finish', () => { file.close(); console.log(`  ✓ Downloaded: ${dest}`); resolve(); });
        }).on('error', reject);
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
    }).on('error', reject);
  });
}

async function downloadAll() {
  console.log('Downloading fonts from Fontshare...');
  for (const font of fonts) {
    await downloadFile(font.url, font.dest).catch(err => {
      console.error(`  ✗ Failed: ${font.dest} - ${err.message}`);
      console.log(`  ℹ Try manual download from: ${font.url}`);
    });
  }
  console.log(`\nFont download complete`);
}

downloadAll();
