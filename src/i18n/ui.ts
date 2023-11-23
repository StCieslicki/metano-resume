export const languages = {
    en: 'English',
    pl: 'Polish',
};

export const defaultLang = 'en';
export const showDefaultLang = false;

export const ui = {
    en: {
        'nav.home': 'Home',
        'nav.about': 'About',
        'nav.projects': 'Projects',
        'nav.contact': 'Contact',
        'nav.twitter': 'Twitter',
        'nav.github': 'GitHub',
        'nav.linkedin': 'LinkedIn',
        'nav.download': 'Download CV',
        'about.title': 'About me',
        'about.content': `
        Here is your description in English! Lorem ipsum dolor sit amet, consectetur adipiscing elit,
\t\t\tsed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
\t\t\tquis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
\t\t\tirure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
\t\t\tExcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim
\t\t\tid est laborum
        `,
        'hero.title1': 'Hi! My name is',
        'hero.title2': 'and I am a fullstack developer based in Wrocław, PL / remote.',
        'hero.more': 'Learn more',
        'projects.title': 'Projects',
        'projects.links': 'View full private projects archive',
        'contact.title': 'Say hello!',
        'calendly.button': 'Schedule time with me',
        'ribbon.name': 'Open to work',
    },
    pl: {
        'nav.home': 'Strona główna',
        'nav.about': 'O mnie',
        'nav.projects': 'Projekty',
        'nav.contact': 'Kontakt',
        'nav.download': 'Pobierz CV',
        'about.title': 'O mnie',
        'about.content': `
Tutaj jest twoje opis po polsku! Lorem ipsum dolor sit amet, consectetur adipiscing elit,
        `,
        'hero.title1': 'Cześć! Nazywam się',
        'hero.title2': 'i jestem fullstack developerem pracuję z Wrocławia lub zdalnie.',
        'hero.more': 'Więcej',
        'projects.title': 'Projekty',
        'projects.links': 'Zobacz pełną listę prywatnych projektów',
        'contact.title': 'Napisz do mnie!',
        'calendly.button': 'Umów ze mną spotkanie',
        'ribbon.name': 'do wynajęcia',
    },
} as const;
