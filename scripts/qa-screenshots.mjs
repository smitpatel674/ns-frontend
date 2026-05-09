import { chromium } from 'playwright';

(async () => {
  const browser = await chromium.launch({ headless: false });
  
  // Desktop screenshot of clone
  const desktopContext = await browser.newContext({ viewport: { width: 1440, height: 900 } });
  const desktopPage = await desktopContext.newPage();
  await desktopPage.goto('http://localhost:3000/', { waitUntil: 'domcontentloaded', timeout: 30000 });
  await desktopPage.waitForLoadState('load', { timeout: 30000 }).catch(() => {});
  await desktopPage.waitForTimeout(3000);
  await desktopPage.screenshot({ path: 'docs/design-references/clone-desktop-full.png', fullPage: true });
  console.log('Clone desktop screenshot saved');

  // Mobile screenshot of clone
  const mobileContext = await browser.newContext({ viewport: { width: 390, height: 844 } });
  const mobilePage = await mobileContext.newPage();
  await mobilePage.goto('http://localhost:3000/', { waitUntil: 'domcontentloaded', timeout: 30000 });
  await mobilePage.waitForLoadState('load', { timeout: 30000 }).catch(() => {});
  await mobilePage.waitForTimeout(3000);
  await mobilePage.screenshot({ path: 'docs/design-references/clone-mobile-full.png', fullPage: true });
  console.log('Clone mobile screenshot saved');

  await browser.close();
  console.log('Visual QA screenshots complete');
})();
