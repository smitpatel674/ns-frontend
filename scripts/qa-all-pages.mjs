import { chromium } from 'playwright';

(async () => {
  const browser = await chromium.launch({ headless: false });
  const pages = ['/'];
  
  for (const path of pages) {
    const context = await browser.newContext({ viewport: { width: 1440, height: 900 } });
    const page = await context.newPage();
    try {
      await page.goto(`http://localhost:3000${path}`, { waitUntil: 'domcontentloaded', timeout: 30000 });
    } catch (error) {
      console.warn(`⚠️ Failed to open ${path}:`, error?.message ?? error);
      await context.close();
      continue;
    }
    await page.waitForLoadState('load', { timeout: 30000 }).catch(() => {});
    await page.waitForTimeout(2000);
    const name = path === '/' ? 'home' : path.slice(1);
    await page.screenshot({ path: `docs/design-references/clone-${name}-desktop.png`, fullPage: true });
    console.log(`✓ Clone ${name} desktop screenshot saved`);
    await context.close();
  }
  
  // Also take mobile screenshots
  for (const path of ['/', '/about', '/services']) {
    const context = await browser.newContext({ viewport: { width: 390, height: 844 } });
    const page = await context.newPage();
    await page.goto(`http://localhost:3000${path}`, { waitUntil: 'domcontentloaded', timeout: 30000 });
    await page.waitForLoadState('load', { timeout: 30000 }).catch(() => {});
    await page.waitForTimeout(2000);
    const name = path === '/' ? 'home' : path.slice(1);
    await page.screenshot({ path: `docs/design-references/clone-${name}-mobile.png`, fullPage: true });
    console.log(`✓ Clone ${name} mobile screenshot saved`);
    await context.close();
  }
  
  await browser.close();
  console.log('\nAll QA screenshots complete');
})();
