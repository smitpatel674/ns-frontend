import { chromium } from 'playwright';

(async () => {
  const browser = await chromium.launch({ headless: false });
  const context = await browser.newContext({
    viewport: { width: 1440, height: 900 },
  });
  const page = await context.newPage();

  // Navigate to target site
  console.log('Navigating to http://dvlop.in/...');
  await page.goto('http://dvlop.in/', { waitUntil: 'domcontentloaded', timeout: 30000 });
  
  // Wait for page to fully load
  await page.waitForLoadState('load', { timeout: 30000 }).catch(() => {});
  await page.waitForTimeout(3000);

  // Take full-page screenshot at desktop
  await page.screenshot({ 
    path: 'docs/design-references/dvlop-desktop-full.png', 
    fullPage: true 
  });
  console.log('Desktop full-page screenshot saved');

  // Get page title and URL
  const title = await page.title();
  const url = page.url();
  console.log(`Page title: ${title}`);
  console.log(`Final URL: ${url}`);

  // Extract global font info
  const fontData = await page.evaluate(() => {
    const elements = document.querySelectorAll('*');
    const fonts = new Set();
    const fontFamilies = [];
    for (let i = 0; i < Math.min(elements.length, 200); i++) {
      const family = getComputedStyle(elements[i]).fontFamily;
      if (family && !fonts.has(family)) {
        fonts.add(family);
        fontFamilies.push({
          element: elements[i].tagName,
          className: elements[i].className?.toString()?.slice(0, 50),
          fontFamily: family,
          fontSize: getComputedStyle(elements[i]).fontSize,
          fontWeight: getComputedStyle(elements[i]).fontWeight
        });
      }
    }
    return fontFamilies;
  });
  console.log('\n=== FONT DATA ===');
  console.log(JSON.stringify(fontData, null, 2));

  // Extract all images
  const imageData = await page.evaluate(() => {
    return {
      images: [...document.querySelectorAll('img')].map(img => ({
        src: img.src || img.currentSrc,
        alt: img.alt,
        width: img.naturalWidth,
        height: img.naturalHeight,
        parentClasses: img.parentElement?.className?.toString()?.slice(0, 100),
        position: getComputedStyle(img).position,
        zIndex: getComputedStyle(img).zIndex
      })),
      backgroundImages: [...document.querySelectorAll('*')].filter(el => {
        const bg = getComputedStyle(el).backgroundImage;
        return bg && bg !== 'none' && bg.includes('url');
      }).map(el => ({
        url: getComputedStyle(el).backgroundImage,
        element: `${el.tagName}.${el.className?.toString()?.split(' ').slice(0, 3).join('.')}`,
        position: getComputedStyle(el).position
      })),
      svgCount: document.querySelectorAll('svg').length,
      videoCount: document.querySelectorAll('video').length
    };
  });
  console.log('\n=== IMAGE/ASSET DATA ===');
  console.log(JSON.stringify(imageData, null, 2));

  // Extract favicon/meta links
  const metaLinks = await page.evaluate(() => {
    return [...document.querySelectorAll('link')].map(l => ({
      rel: l.rel,
      href: l.href,
      sizes: l.sizes,
      type: l.type
    }));
  });
  console.log('\n=== META LINKS ===');
  console.log(JSON.stringify(metaLinks, null, 2));

  // Extract page structure - top level sections
  const sections = await page.evaluate(() => {
    const body = document.body;
    const children = [...body.children];
    return children.map(child => ({
      tag: child.tagName,
      id: child.id,
      className: child.className?.toString()?.slice(0, 100),
      children: child.children.length,
      textPreview: child.textContent?.trim()?.slice(0, 100),
      position: getComputedStyle(child).position,
      zIndex: getComputedStyle(child).zIndex,
      display: getComputedStyle(child).display,
      height: getComputedStyle(child).height
    }));
  });
  console.log('\n=== PAGE SECTIONS ===');
  console.log(JSON.stringify(sections, null, 2));

  await browser.close();
  console.log('\n=== EXTRACTION COMPLETE ===');
})();
