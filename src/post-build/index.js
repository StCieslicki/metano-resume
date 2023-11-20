// const puppeteer = require('puppeteer');
import puppeteer from 'puppeteer';

async function generatePDF() {
// Launch a new browser instance
    const browser = await puppeteer.launch();
// Create a new page
    const page = await browser.newPage();
// Go to a webpage
//     await page.goto('https://example.com');
    await page.goto('https://metano-resume.onrender.com/');
// Generate PDF and save it
    await page.pdf({ path: './build/download/cv.pdf', format: 'A4' });
// Close the browser
    await browser.close();
}

generatePDF();
