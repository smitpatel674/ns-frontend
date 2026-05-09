import { chromium } from 'playwright';

(async () => {
  const browser = await chromium.launch({ headless: false });
  const context = await browser.newContext({ viewport: { width: 1440, height: 900 } });
  const page = await context.newPage();

  // Extract ALL content from original homepage
  await page.goto('https://www.dvlop.in/', { waitUntil: 'domcontentloaded', timeout: 30000 });
  await page.waitForLoadState('load', { timeout: 30000 }).catch(() => {});
  await page.waitForTimeout(5000);
  
  const homeText = await page.evaluate(() => document.body.innerText);
  console.log('=== CURRENT HOMEPAGE TEXT ===');
  console.log(homeText);
  console.log('\n=== LENGTH:', homeText.length);

  // Extract Services page
  await page.goto('https://www.dvlop.in/services', { waitUntil: 'domcontentloaded', timeout: 30000 });
  await page.waitForLoadState('load', { timeout: 30000 }).catch(() => {});
  await page.waitForTimeout(5000);
  const servicesText = await page.evaluate(() => document.body.innerText);
  console.log('\n=== CURRENT SERVICES TEXT ===');
  console.log(servicesText);

  // Extract About page
  await page.goto('https://www.dvlop.in/about', { waitUntil: 'domcontentloaded', timeout: 30000 });
  await page.waitForLoadState('load', { timeout: 30000 }).catch(() => {});
  await page.waitForTimeout(5000);
  const aboutText = await page.evaluate(() => document.body.innerText);
  console.log('\n=== CURRENT ABOUT TEXT ===');
  console.log(aboutText);

  await browser.close();
})();
