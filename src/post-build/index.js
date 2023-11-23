// const puppeteer = require('puppeteer');
import puppeteer from 'puppeteer';

export async function generatePDF() {
// Launch a new browser instance
    const browser = await puppeteer.launch();
// Create a new page
    const page = await browser.newPage();
// Go to a webpage
//     await page.goto('https://resume.metano.pl');
//     await page.goto('https://metano-resume.onrender.com/');
    await page.goto('http://localhost:3000/resume');
// Generate PDF and save it
    await page.pdf({
        path: './public/download/cv.pdf',
        format: 'A4',
        margin: { top: '1cm', bottom: '1cm' },
        printBackground: true,
        // displayHeaderFooter: true
    });
// Close the browser
    await browser.close();
}

generatePDF();
