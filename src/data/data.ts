import { Events, SkillBase } from "./types";
import { header as simpleHeader } from "./simpleHeader.js";

type Header = {
    title: string;
    subtitle: string
};

// to change Header - goto src/data/simpleHeader.ts
export const header: Header = {
    ...simpleHeader,
};

type Details = {
    address: string[];
    phone: string;
    email: string
};
export const details: Details = {
    address: ['ul. Rybnicka 21/17', '52-016 Wrocław', 'Poland'],
    phone: '+48 790 426 178',
    email: 'staszek@metano.pl'
};

export const embeds = {
  calendly: {
      username: 'staszek-cieslicki',
      eventType: '60min',
  }
};

type Languages = SkillBase[];
export const languages: Languages = [
    {
        name: 'Polish (native)',
        weight: 100,
        priority: 10,
        since: 1977
    },
    {
        name: 'English',
        weight: 60,
        priority: 20,
        since: 1997
    }
];

type Profile = string[];
export const profile: Profile = [
    'Experienced and professional software developer boasting many years (8+ years) of valuable experience in software development, and working with clouds, platforms and data structures.',
    'Confident in your abilities, reliable, hardworking, and committed to results.',
    'Willing to utilize his skills and put energy into his/her new position.'
];

export const education:Events = [
    {
        subject: 'Wrocław University of Technology, Department of Chemistry (no degree)',
        place: 'Wrocław',
        since: '1997.10.01',
        until: '2004.01.20',
        summary: true,
        description: [
            'Field of Study: Chemistry, all computer science classes passed with maximum grades',
            '*studies interrupted due to personal difficulties and pointlessness of further study of chemistry'
        ]
    },
    {
        subject: 'Chemical Technical School (chemical technician)',
        place: 'Wrocław',
        since: '1992.09.01',
        until: '1997.06.30',
        description: [
            'chemical technician with a specialization in chemical analysis',
            'all IT subjects completed with the highest grade'
        ]
    },
];

export const courses: Events = [
    {
        subject: 'Attacking and Protecting Web Applications, Niebezpiecznik.pl',
        since: '2019.05.19',
        until: '2019.05.20',
    }
];

export const gdpr = {
    title: 'GDPR',
    date: Date.now(),
    description: 'I hereby give consent for my personal data to be processed for the purpose of conducting recruitment for the position for which I am applying.'
}

export const rodo = {
    title: 'RODO',
    date: Date.now(),
    description: 'Wyrażam zgodę na przetwarzanie moich danych osobowych w celu prowadzenia rekrutacji na aplikowane przeze mnie stanowisko.'
}

