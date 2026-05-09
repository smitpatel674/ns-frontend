import { chromium } from 'playwright';

(async () => {
  const browser = await chromium.launch({ headless: false });
  const context = await browser.newContext({
    viewport: { width: 1440, height: 900 },
  });
  const page = await context.newPage();

  await page.goto('https://www.dvlop.in/', { waitUntil: 'domcontentloaded', timeout: 30000 });
  await page.waitForLoadState('load', { timeout: 30000 }).catch(() => {});
  await page.waitForTimeout(3000);

  // Extract detailed section structure with computed styles
  const detailedSections = await page.evaluate(() => {
    const root = document.querySelector('#root > div');
    if (!root) return { error: 'Root div not found' };
    
    // Get direct children of the main container
    const sections = [...root.children].map((child, index) => {
      const cs = getComputedStyle(child);
      return {
        index,
        tag: child.tagName,
        id: child.id,
        className: child.className?.toString()?.slice(0, 150),
        children: child.children.length,
        textPreview: child.textContent?.trim()?.slice(0, 200),
        display: cs.display,
        position: cs.position,
        zIndex: cs.zIndex,
        width: cs.width,
        height: cs.height,
        paddingTop: cs.paddingTop,
        paddingBottom: cs.paddingBottom,
        paddingLeft: cs.paddingLeft,
        paddingRight: cs.paddingRight,
        backgroundColor: cs.backgroundColor,
        overflow: cs.overflow
      };
    });
    
    // Also get the nav/header specifically
    const nav = document.querySelector('nav, header, .nav, .header');
    const navInfo = nav ? {
      tag: nav.tagName,
      className: nav.className?.toString()?.slice(0, 150),
      position: getComputedStyle(nav).position,
      zIndex: getComputedStyle(nav).zIndex,
      top: getComputedStyle(nav).top,
      width: getComputedStyle(nav).width,
      height: getComputedStyle(nav).height,
      backgroundColor: getComputedStyle(nav).backgroundColor,
      backdropFilter: getComputedStyle(nav).backdropFilter
    } : null;

    // Check for Lenis
    const lenisInfo = {
      hasLenis: document.documentElement.classList.contains('lenis'),
      lenisClasses: [...document.querySelectorAll('[class*="lenis"]')].map(el => el.className?.toString()?.slice(0, 100))
    };

    return { sections, navInfo, lenisInfo };
  });
  console.log('\n=== DETAILED SECTIONS ===');
  console.log(JSON.stringify(detailedSections, null, 2));

  // Extract all text content by section
  const allText = await page.evaluate(() => {
    const root = document.querySelector('#root > div');
    if (!root) return [];
    return [...root.children].map((child, i) => ({
      section: i,
      tag: child.tagName,
      className: child.className?.toString()?.slice(0, 50),
      headings: [...child.querySelectorAll('h1, h2, h3, h4, h5, h6')].map(h => ({
        tag: h.tagName,
        text: h.textContent?.trim(),
        className: h.className?.toString()?.slice(0, 100)
      })),
      buttons: [...child.querySelectorAll('button, a[class*="button"], a[class*="btn"]')].map(b => ({
        tag: b.tagName,
        text: b.textContent?.trim(),
        href: b.href,
        className: b.className?.toString()?.slice(0, 100)
      })),
      links: [...child.querySelectorAll('a')].slice(0, 10).map(a => ({
        text: a.textContent?.trim()?.slice(0, 50),
        href: a.href
      }))
    }));
  });
  console.log('\n=== ALL TEXT CONTENT ===');
  console.log(JSON.stringify(allText, null, 2));

  // Test scroll behavior - capture nav at top
  const navAtTop = await page.evaluate(() => {
    const nav = document.querySelector('nav, header, [class*="nav"], [class*="header"]');
    if (!nav) return null;
    return {
      className: nav.className?.toString(),
      backgroundColor: getComputedStyle(nav).backgroundColor,
      backdropFilter: getComputedStyle(nav).backdropFilter,
      borderBottom: getComputedStyle(nav).borderBottom,
      boxShadow: getComputedStyle(nav).boxShadow,
      height: getComputedStyle(nav).height,
      position: getComputedStyle(nav).position,
      zIndex: getComputedStyle(nav).zIndex
    };
  });
  console.log('\n=== NAV AT TOP ===');
  console.log(JSON.stringify(navAtTop, null, 2));

  // Scroll down and check if nav changes
  await page.evaluate(() => window.scrollTo(0, 500));
  await page.waitForTimeout(1000);
  
  const navAfterScroll = await page.evaluate(() => {
    const nav = document.querySelector('nav, header, [class*="nav"], [class*="header"]');
    if (!nav) return null;
    return {
      className: nav.className?.toString(),
      backgroundColor: getComputedStyle(nav).backgroundColor,
      backdropFilter: getComputedStyle(nav).backdropFilter,
      borderBottom: getComputedStyle(nav).borderBottom,
      boxShadow: getComputedStyle(nav).boxShadow,
      height: getComputedStyle(nav).height,
      position: getComputedStyle(nav).position,
      zIndex: getComputedStyle(nav).zIndex
    };
  });
  console.log('\n=== NAV AFTER SCROLL (500px) ===');
  console.log(JSON.stringify(navAfterScroll, null, 2));

  // Scroll back to top
  await page.evaluate(() => window.scrollTo(0, 0));
  await page.waitForTimeout(500);

  // Extract global CSS variables/colors
  const colors = await page.evaluate(() => {
    const root = document.documentElement;
    const cs = getComputedStyle(root);
    const colorProps = ['color', 'backgroundColor'];
    const colors = {};
    colorProps.forEach(prop => {
      colors[prop] = cs[prop];
    });
    // Also check common tailwind dark mode classes
    const body = document.body;
    colors.bodyBg = getComputedStyle(body).backgroundColor;
    colors.bodyColor = getComputedStyle(body).color;
    return colors;
  });
  console.log('\n=== GLOBAL COLORS ===');
  console.log(JSON.stringify(colors, null, 2));

  // Check for animations/scroll-driven behaviors
  const animations = await page.evaluate(() => {
    const allElements = document.querySelectorAll('*');
    const animated = [];
    for (let i = 0; i < Math.min(allElements.length, 500); i++) {
      const el = allElements[i];
      const cs = getComputedStyle(el);
      if (cs.animation && cs.animation !== 'none' && cs.animation !== 'normal') {
        animated.push({
          tag: el.tagName,
          className: el.className?.toString()?.slice(0, 100),
          animation: cs.animation,
          animationName: cs.animationName,
          animationDuration: cs.animationDuration,
          animationTimingFunction: cs.animationTimingFunction
        });
      }
      if (cs.transition && cs.transition !== 'none' && cs.transition !== 'all 0s ease 0s') {
        animated.push({
          tag: el.tagName,
          className: el.className?.toString()?.slice(0, 100),
          transition: cs.transition
        });
      }
    }
    return animated.slice(0, 50);
  });
  console.log('\n=== ANIMATIONS & TRANSITIONS ===');
  console.log(JSON.stringify(animations, null, 2));

  await browser.close();
  console.log('\n=== DEEP EXTRACTION COMPLETE ===');
})();
