import { chromium } from 'playwright';

(async () => {
  const browser = await chromium.launch({ headless: false });
  
  // Desktop viewport
  const desktopContext = await browser.newContext({ viewport: { width: 1440, height: 900 } });
  const desktopPage = await desktopContext.newPage();
  await desktopPage.goto('https://www.dvlop.in/', { waitUntil: 'domcontentloaded', timeout: 30000 });
  await desktopPage.waitForLoadState('load', { timeout: 30000 }).catch(() => {});
  await desktopPage.waitForTimeout(3000);

  // Mobile screenshot
  const mobileContext = await browser.newContext({ viewport: { width: 390, height: 844 } });
  const mobilePage = await mobileContext.newPage();
  await mobilePage.goto('https://www.dvlop.in/', { waitUntil: 'domcontentloaded', timeout: 30000 });
  await mobilePage.waitForLoadState('load', { timeout: 30000 }).catch(() => {});
  await mobilePage.waitForTimeout(3000);
  await mobilePage.screenshot({ path: 'docs/design-references/dvlop-mobile-full.png', fullPage: true });
  console.log('Mobile full-page screenshot saved');

  // Extract the inner structure of main content area
  const mainContent = await desktopPage.evaluate(() => {
    const mainDiv = document.querySelector('#root > div > div:nth-child(2)');
    if (!mainDiv) return { error: 'Main content div not found' };
    
    // Get all direct children sections
    const sections = [...mainDiv.children].map((child, index) => {
      const cs = getComputedStyle(child);
      return {
        index,
        tag: child.tagName,
        id: child.id,
        className: child.className?.toString()?.slice(0, 200),
        childCount: child.children.length,
        textPreview: child.textContent?.trim()?.slice(0, 300),
        display: cs.display,
        position: cs.position,
        width: cs.width,
        height: cs.height,
        paddingTop: cs.paddingTop,
        paddingBottom: cs.paddingBottom,
        paddingLeft: cs.paddingLeft,
        paddingRight: cs.paddingRight,
        marginTop: cs.marginTop,
        marginBottom: cs.marginBottom,
        backgroundColor: cs.backgroundColor,
        overflow: cs.overflow
      };
    });
    
    return { sections };
  });
  console.log('\n=== MAIN CONTENT SECTIONS ===');
  console.log(JSON.stringify(mainContent, null, 2));

  await browser.close();
  console.log('\n=== MOBILE & STRUCTURE EXTRACTION COMPLETE ===');
})();
