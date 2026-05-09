import { chromium } from 'playwright';

(async () => {
  const browser = await chromium.launch({ headless: false });
  
  // Check clone renders correctly
  const cloneCtx = await browser.newContext({ viewport: { width: 1440, height: 900 } });
  const clonePage = await cloneCtx.newPage();
  await clonePage.goto('http://localhost:3000/', { waitUntil: 'domcontentloaded', timeout: 30000 });
  await clonePage.waitForLoadState('load', { timeout: 30000 }).catch(() => {});
  await clonePage.waitForTimeout(3000);
  
  // Get clone text
  const cloneText = await clonePage.evaluate(() => document.body.innerText);
  console.log('=== CLONE HOMEPAGE TEXT ===');
  console.log(cloneText);
  console.log('\n=== LENGTH:', cloneText.length);

  // Take screenshots
  await clonePage.screenshot({ path: 'docs/design-references/clone-home-check.png', fullPage: true });
  console.log('\nScreenshot saved');

  // Check services page
  await clonePage.goto('http://localhost:3000/services', { waitUntil: 'domcontentloaded', timeout: 30000 });
  await clonePage.waitForLoadState('load', { timeout: 30000 }).catch(() => {});
  await clonePage.waitForTimeout(3000);
  const servicesText = await clonePage.evaluate(() => document.body.innerText);
  console.log('\n=== CLONE SERVICES TEXT ===');
  console.log(servicesText.slice(0, 3000));
  
  // Check if deliverables are rendered
  const hasDeliverables = servicesText.includes('Deliverables');
  const hasStartProtocol = servicesText.includes('Start Protocol');
  const hasFrontend = servicesText.includes('Frontend Project');
  console.log('\nHas Deliverables:', hasDeliverables);
  console.log('Has Start Protocol:', hasStartProtocol);
  console.log('Has Frontend Project:', hasFrontend);

  await browser.close();
})();
