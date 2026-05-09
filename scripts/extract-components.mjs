import { chromium } from 'playwright';

(async () => {
  const browser = await chromium.launch({ headless: false });
  const context = await browser.newContext({ viewport: { width: 1440, height: 900 } });
  const page = await context.newPage();

  await page.goto('https://www.dvlop.in/', { waitUntil: 'domcontentloaded', timeout: 30000 });
  await page.waitForLoadState('load', { timeout: 30000 }).catch(() => {});
  await page.waitForTimeout(3000);

  // Extract Header/Nav
  console.log('=== HEADER/NAV ===');
  const headerData = await page.evaluate(() => {
    const header = document.querySelector('header');
    if (!header) return { error: 'Header not found' };
    
    function extractStyles(el) {
      const cs = getComputedStyle(el);
      const props = [
        'fontSize','fontWeight','fontFamily','lineHeight','letterSpacing','color',
        'textTransform','textDecoration','backgroundColor','background',
        'padding','paddingTop','paddingRight','paddingBottom','paddingLeft',
        'margin','marginTop','marginRight','marginBottom','marginLeft',
        'width','height','maxWidth','minWidth','maxHeight','minHeight',
        'display','flexDirection','justifyContent','alignItems','gap',
        'gridTemplateColumns','gridTemplateRows',
        'borderRadius','border','borderTop','borderBottom','borderLeft','borderRight',
        'boxShadow','overflow','overflowX','overflowY',
        'position','top','right','bottom','left','zIndex',
        'opacity','transform','transition','cursor',
        'objectFit','objectPosition','mixBlendMode','filter','backdropFilter',
        'whiteSpace','textOverflow'
      ];
      const styles = {};
      props.forEach(p => {
        const v = cs[p];
        if (v && v !== 'none' && v !== 'normal' && v !== 'auto' && v !== '0px' && v !== 'rgba(0, 0, 0, 0)') {
          styles[p] = v;
        }
      });
      return styles;
    }
    
    function walk(el, depth) {
      if (depth > 5) return null;
      const children = [...el.children];
      return {
        tag: el.tagName.toLowerCase(),
        classes: el.className?.toString().split(' ').slice(0, 8).join(' '),
        text: el.childNodes.length === 1 && el.childNodes[0].nodeType === 3 ? el.textContent.trim().slice(0, 150) : null,
        styles: extractStyles(el),
        images: el.tagName === 'IMG' ? { src: el.src, alt: el.alt, naturalWidth: el.naturalWidth, naturalHeight: el.naturalHeight } : null,
        svg: el.tagName === 'svg' ? { outerHTML: el.outerHTML.slice(0, 500) } : null,
        href: el.tagName === 'A' ? el.href : null,
        childCount: children.length,
        children: children.slice(0, 30).map(c => walk(c, depth + 1)).filter(Boolean)
      };
    }
    
    return walk(header, 0);
  });
  console.log(JSON.stringify(headerData, null, 2));

  // Extract Hero Section
  console.log('\n=== HERO SECTION ===');
  const heroData = await page.evaluate(() => {
    const mainDiv = document.querySelector('#root > div > div:nth-child(2)');
    const hero = mainDiv?.children[1]; // Section 1 is the hero
    if (!hero) return { error: 'Hero not found' };
    
    function extractStyles(el) {
      const cs = getComputedStyle(el);
      const props = [
        'fontSize','fontWeight','fontFamily','lineHeight','letterSpacing','color',
        'textTransform','textDecoration','backgroundColor','background',
        'padding','paddingTop','paddingRight','paddingBottom','paddingLeft',
        'margin','marginTop','marginRight','marginBottom','marginLeft',
        'width','height','maxWidth','minWidth','maxHeight','minHeight',
        'display','flexDirection','justifyContent','alignItems','gap',
        'gridTemplateColumns','gridTemplateRows',
        'borderRadius','border','borderTop','borderBottom','borderLeft','borderRight',
        'boxShadow','overflow','overflowX','overflowY',
        'position','top','right','bottom','left','zIndex',
        'opacity','transform','transition','cursor',
        'objectFit','objectPosition','mixBlendMode','filter','backdropFilter',
        'whiteSpace','textOverflow'
      ];
      const styles = {};
      props.forEach(p => {
        const v = cs[p];
        if (v && v !== 'none' && v !== 'normal' && v !== 'auto' && v !== '0px' && v !== 'rgba(0, 0, 0, 0)') {
          styles[p] = v;
        }
      });
      return styles;
    }
    
    function walk(el, depth) {
      if (depth > 5) return null;
      const children = [...el.children];
      return {
        tag: el.tagName.toLowerCase(),
        classes: el.className?.toString().split(' ').slice(0, 8).join(' '),
        text: el.childNodes.length === 1 && el.childNodes[0].nodeType === 3 ? el.textContent.trim().slice(0, 150) : null,
        styles: extractStyles(el),
        images: el.tagName === 'IMG' ? { src: el.src, alt: el.alt, naturalWidth: el.naturalWidth, naturalHeight: el.naturalHeight } : null,
        svg: el.tagName === 'svg' ? { outerHTML: el.outerHTML.slice(0, 500) } : null,
        href: el.tagName === 'A' ? el.href : null,
        childCount: children.length,
        children: children.slice(0, 30).map(c => walk(c, depth + 1)).filter(Boolean)
      };
    }
    
    return walk(hero, 0);
  });
  console.log(JSON.stringify(heroData, null, 2));

  await browser.close();
  console.log('\n=== COMPONENT EXTRACTION COMPLETE ===');
})();
