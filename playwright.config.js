import { chromium, PlaywrightTestConfig } from '@playwright/test';
import { devices } from '@playwright/test';
const config = {
    retries:1,
    timeout:300000,
    reporter: 'allure-playwright', //report line
    use:{
      baseURL:"https://demoqa.com/", //main url is set here
      headless: true,
      viewport:{width:1200, height:720},
      video:"on", //take a video of each test
      //on-first-retry //take a video if the test is wrong
      screenshot:"on", //take screenshot of each test
      //only-on-failure //take screenshot on faulty test


      permissions: ['geolocation'], //gives you the location you specify to go to the site
      geolocation: { latitude: 40.879326, longitude: 29.258135 },


    },

    
  projects: [ //Runs the test in browsers chromium, firefox, webkit
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },
   {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
    },
  ],
};

module.exports = config;