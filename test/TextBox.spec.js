const { test, expect } = require('@playwright/test');

test('Text Box', async ({ page }) => { 
    
    await page.goto('https://demoqa.com/text-box'); //go to website
    await page.getByPlaceholder('Full Name').type('name');//Entering data into text box
    await page.getByPlaceholder('name@example.com').type('email@email.com');
    await page.getByPlaceholder('Current Address').type('Current Address');
    await page.locator('#permanentAddress').type('permanent Address');
    await page.getByRole('button', { name: 'Submit' }).click(); //button click
    await page.pause();
 });

