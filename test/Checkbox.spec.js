const { test, expect } = require('@playwright/test');

test('checkbox marking', async ({ page }) => { 
    
    await page.goto('https://demoqa.com/checkbox'); //go to website
    await page.locator('#tree-node svg').nth(3).check(); //checkbox marking
    await page.pause();
 });

 test('uncheckbox', async ({ page }) => { 
   await page.goto('https://demoqa.com/checkbox'); //go to website
   await page.locator('#tree-node svg').nth(3).check(); 
   await page.pause();
   await page.locator('#tree-node svg').nth(3).uncheck(); //uncheckbox
 });
