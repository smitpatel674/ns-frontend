import { chromium } from 'playwright';

(async () => {
  const browser = await chromium.launch({ headless: false });
  const context = await browser.newContext({ viewport: { width: 1440, height: 900 } });
  const page = await context.newPage();

  // === HOME PAGE - extract hero area details ===
  await page.goto('https://www.dvlop.in/', { waitUntil: 'domcontentloaded', timeout: 30000 });
  await page.waitForLoadState('load', { timeout: 30000 }).catch(() => {});
  await page.waitForTimeout(3000);
  
  // Get hero section full structure
  const heroDetail = await page.evaluate(() => {
    const sections = [...document.querySelectorAll('#root > div > div:nth-child(2) > section')];
    return sections.map((s, i) => ({
      index: i,
      className: s.className?.slice(0, 200),
      textContent: s.textContent?.trim()?.slice(0, 500),
      childCount: s.children.length,
      children: [...s.children].map(c => ({
        tag: c.tagName,
        className: c.className?.slice(0, 100),
        text: c.textContent?.trim()?.slice(0, 200),
      }))
    }));
  });
  console.log('=== HOME HERO SECTIONS ===');
  console.log(JSON.stringify(heroDetail, null, 2));

  // === ABOUT PAGE - extract full structure ===
  await page.goto('https://www.dvlop.in/about', { waitUntil: 'domcontentloaded', timeout: 30000 });
  await page.waitForLoadState('load', { timeout: 30000 }).catch(() => {});
  await page.waitForTimeout(3000);
  
  const aboutSections = await page.evaluate(() => {
    const root = document.querySelector('#root > div > div:nth-child(2)');
    if (!root) return { error: 'No main content' };
    return [...root.children].map((c, i) => ({
      tag: c.tagName,
      className: c.className?.slice(0, 200),
      text: c.textContent?.trim()?.slice(0, 400),
      childCount: c.children.length
    }));
  });
  console.log('\n=== ABOUT PAGE STRUCTURE ===');
  console.log(JSON.stringify(aboutSections, null, 2));

  // === SERVICES PAGE - check tab structure ===
  await page.goto('https://www.dvlop.in/services', { waitUntil: 'domcontentloaded', timeout: 30000 });
  await page.waitForLoadState('load', { timeout: 30000 }).catch(() => {});
  await page.waitForTimeout(3000);
  
  // Click through each tab and capture
  const tabs = await page.evaluate(() => {
    return [...document.querySelectorAll('button')].filter(b => {
      const text = b.textContent?.trim();
      return ['Frontend', 'Full Stack', 'AI/ML', 'Custom Web', 'E-Commerce', 'Digital', 'Social'].some(t => text?.includes(t));
    }).map(b => ({
      text: b.textContent?.trim(),
      className: b.className?.slice(0, 100),
    }));
  });
  console.log('\n=== SERVICES TABS ===');
  console.log(JSON.stringify(tabs, null, 2));

  // === CLIENT PAGE - check review card structure ===
  await page.goto('https://www.dvlop.in/client', { waitUntil: 'domcontentloaded', timeout: 30000 });
  await page.waitForLoadState('load', { timeout: 30000 }).catch(() => {});
  await page.waitForTimeout(3000);
  
  const reviewCards = await page.evaluate(() => {
    const cards = [...document.querySelectorAll('[class*="border"]')].filter(el => {
      const text = el.textContent;
      return text?.includes('VERIFIED REVIEW') && text?.includes('PROJECT CLIENT');
    }).map(el => ({
      className: el.className?.slice(0, 100),
      text: el.textContent?.trim()?.slice(0, 500),
    }));
    return cards;
  });
  console.log('\n=== CLIENT REVIEW CARDS ===');
  console.log(`Found ${reviewCards.length} review cards`);

  await browser.close();
})();
