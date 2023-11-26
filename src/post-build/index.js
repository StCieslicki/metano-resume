import {generatePDF} from "./generate.js";

console.log('Hi');

// dodać parametry do tworzenia pliku
// --url remote|local|remote-ext|local-ext
// --name nazwa pliku

// --versioning pre|post - czy ma być wersjonowanie pliku 'pre' przed nazwą 231123- 'post' po nazwia -231123 a przed pdf

generatePDF({ url: 'http://localhost:3000/extended/resume' });
generatePDF({ url: 'http://localhost:3000/resume' });
// todo fix this
// generatePDF({ url: 'https://resume.metano.pl/extended/resume' });
// generatePDF({ url: 'https://resume.metano.pl/resume' });
