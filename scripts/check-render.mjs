import { chromium } from 'playwright';

(async () => {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
  
  await page.goto('http://localhost:3000/', { waitUntil: 'domcontentloaded', timeout: 30000 });
  await page.waitForLoadState('load', { timeout: 30000 }).catch(() => {});
  await page.waitForTimeout(5000);
  
  const text = await page.evaluate(() => document.body.innerText);
  console.log(text);
  console.log('\n=== LENGTH:', text.length);
  
  // Check specific items
  const items = ['Explore Services', 'Achievements', 'Our Expertise', 'Explore All Services', 'Case Studies', 'Full Portfolio', 'Get In Touch', 'Get A Quote', 'Trusted tech partners'];
  for (const item of items) {
    console.log(`Has "${item}":`, text.includes(item));
  }

  await browser.close();
})();
