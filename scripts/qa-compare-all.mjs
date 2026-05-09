import { chromium } from 'playwright';

(async () => {
  const browser = await chromium.launch({ headless: true });
  
  const pages = [
    { path: '/', name: 'home' },
    { path: '/about', name: 'about' },
    { path: '/services', name: 'services' },
    { path: '/projects', name: 'projects' },
    { path: '/careers', name: 'careers' },
    { path: '/client', name: 'client' },
  ];

  for (const p of pages) {
    const origCtx = await browser.newContext({ viewport: { width: 1440, height: 900 } });
    const origPage = await origCtx.newPage();
    const cloneCtx = await browser.newContext({ viewport: { width: 1440, height: 900 } });
    const clonePage = await cloneCtx.newPage();

    await origPage.goto(`https://www.dvlop.in${p.path}`, { waitUntil: 'domcontentloaded', timeout: 30000 });
    await origPage.waitForLoadState('load', { timeout: 30000 }).catch(() => {});
    await origPage.waitForTimeout(3000);

    await clonePage.goto(`http://localhost:3000${p.path}`, { waitUntil: 'domcontentloaded', timeout: 30000 });
    await clonePage.waitForLoadState('load', { timeout: 30000 }).catch(() => {});
    await clonePage.waitForTimeout(3000);

    const origText = await origPage.evaluate(() => document.body.innerText);
    const cloneText = await clonePage.evaluate(() => document.body.innerText);

    console.log(`\n========== ${p.name.toUpperCase()} COMPARISON ==========`);
    console.log(`Original length: ${origText.length} | Clone length: ${cloneText.length}`);
    
    const origLines = origText.split('\n').map(l => l.trim()).filter(Boolean);
    const cloneLines = cloneText.split('\n').map(l => l.trim()).filter(Boolean);
    const cloneLower = cloneLines.map(l => l.toLowerCase());
    
    const missing = [];
    for (const line of origLines) {
      const lineLower = line.toLowerCase();
      if (line.length > 10 && !cloneLower.some(cl => cl.includes(lineLower.slice(0, 50)))) {
        missing.push(line.slice(0, 100));
      }
    }
    
    if (missing.length > 0) {
      console.log(`MISSING in clone (${missing.length} items):`);
      missing.slice(0, 20).forEach(m => console.log(`  - ${m}`));
    } else {
      console.log('All key content present ✓');
    }
    
    await origCtx.close();
    await cloneCtx.close();
  }
  
  await browser.close();
  console.log('\n=== COMPARISON COMPLETE ===');
})();
