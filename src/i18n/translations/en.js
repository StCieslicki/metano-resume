const nav = {
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.projects': 'Projects',
    'nav.skills': 'Skills',
    'nav.contact': 'Contact',
    'nav.twitter': 'Twitter',
    'nav.github': 'GitHub',
    'nav.linkedin': 'LinkedIn',
    'nav.download': 'Download CV',
};

const about = {
    'about.title': 'About me',
    'about.content': `
        Here is your description in English! Lorem ipsum dolor sit amet, consectetur adipiscing elit,
\t\t\tsed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
\t\t\tquis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
\t\t\tirure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
\t\t\tExcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim
\t\t\tid est laborum
        `,
}

const hero = {
    'hero.title1': 'Hi! My name is',
    'hero.title2': 'and I am a fullstack developer based in Wrocław, PL / remote.',
    'hero.more': 'Learn more',
}

const projects = {
    'projects.title': 'Projects',
    'projects.links': 'View full private projects archive',
}

const others = {
    'contact.title': 'Say hello!',
    'calendly.button': 'Schedule time with me',
    'ribbon.name': 'Open to work',

}

export const en = {
    ...nav,
    ...about,
    ...hero,
    ...projects,
    ...others,
}
