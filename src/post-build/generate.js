import puppeteer from 'puppeteer';
import {header} from "../data/simpleHeader.js";

function generateFileName(name, version = 'post', extended = false) {
    const extension = 'pdf';

    const versionDate = new Date()
        .toISOString()
        .split('T')[0]
        .split('-')
        .join('')
        .slice(2);

    let fileName;

    if (name) {
        fileName = name;
    } else {
        fileName = `${header.title} - ${header.subtitle}`;
    }

    fileName = fileName
        .split('.')
        .map(item => item.indexOf('pdf') === -1 ? item : null)
        .filter(item => item)
        .join('.');


    if (version === 'post') {
        fileName = `${fileName}-${versionDate}`;
    } else {
        fileName = `${versionDate}-${fileName}`;
    }

    if (extended) {
        fileName = `${fileName}-extended`;
    }

    return `${fileName.replaceAll(' ', '_')}.${extension}`;
}

export async function generatePDF({
    name,
    url = 'http://localhost:3000/resume',
    displayHeaderFooter = false,
    version = 'post'
}) {
    const fileName = generateFileName(name, version, url.indexOf('extended') !== -1);

// Launch a new browser instance
    const browser = await puppeteer.launch();
// Create a new page
    const page = await browser.newPage();
// Go to a webpage
//     await page.goto('https://resume.metano.pl');
//     await page.goto('https://metano-resume.onrender.com/');
    await page.goto(url);
// Generate PDF and save it
    await page.pdf({
        path: `./public/download/${fileName}`,
        format: 'A4',
        margin: { top: '1cm', bottom: '1cm' },
        printBackground: true,
        displayHeaderFooter
    });
// Close the browser
    await browser.close();
}
