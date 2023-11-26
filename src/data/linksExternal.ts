type Links = {
    name: string;
    url: string;
    enabled?: boolean;
    priority?: number;
    since?: number;
    ariaLabel?: string;
    icon?: string
}[];

export const offersGeneral = [
    {
        name: 'Pracuj.pl',
        url: 'https://www.pracuj.pl',
    },
    {
        name: 'infopraca.pl',
        url: 'https://www.infopraca.pl/praca?ct=it-programowanie-analizy',
    },
    {
        name: 'olx.pl',
        url: 'https://www.olx.pl/praca/informatyka/',
    },
    {
        name: 'michaelpage.pl',
        url: 'https://www.michaelpage.pl/jobs/informatyka',
    },
    {
        name: 'jobs.pl',
        url: 'https://www.jobs.pl/oferty/it-rozwoj-oprogramowania',
    },
    {
        name: 'praca.pl',
        url: 'https://www.praca.pl/informatyka-programowanie.html',
    },
    {
        name: 'jooble.org',
        url: 'https://pl.jooble.org/',
    },
    {
        name: 'indeed.pl',
        url: [
            'https://pl.indeed.com/q-backend-developer-oferty-pracy.html?vjk=66c376e53d42b964',
            'https://pl.indeed.com/q-developer-oferty-pracy.html',
            'https://pl.indeed.com/q-front-end-oferty-pracy.html?vjk=93de0878a5568b9e',
            'https://pl.indeed.com/q-front-end-developer-oferty-pracy.html?vjk=35e529cea0fd3ae2',
            'https://pl.indeed.com/q-front-end-developer-junior-oferty-pracy.html?vjk=7b8995d6dccfc61e',
            'https://pl.indeed.com/q-frontend-developer-oferty-pracy.html?vjk=f41c342b6b354c1f',
            'https://pl.indeed.com/q-full-stack-oferty-pracy.html?vjk=9a0606e309fa9531',
            'https://pl.indeed.com/q-full-stack-developer-oferty-pracy.html?vjk=9a0606e309fa9531',
            'https://pl.indeed.com/q-fullstack-developer-oferty-pracy.html?vjk=66b73958a3061b60',
            'https://pl.indeed.com/q-javascript-developer-oferty-pracy.html?vjk=9a3e05957aba21fd',
            'https://pl.indeed.com/q-node-js-developer-oferty-pracy.html?vjk=17739387746efb28',

            'https://pl.indeed.com/q-php-backend-developer-oferty-pracy.html',
            'https://pl.indeed.com/q-php-developer-oferty-pracy.html?vjk=c43dad4a7e56e2f3',
            'https://pl.indeed.com/q-react-developer-oferty-pracy.html?vjk=da070341246c32c2',
            'https://pl.indeed.com/q-react-developer-junior-oferty-pracy.html?vjk=9a3e05957aba21fd',
            'https://pl.indeed.com/q-react-frontend-developer-oferty-pracy.html?vjk=a0ff449171df38f2',
            'https://pl.indeed.com/q-software-developer-oferty-pracy.html?vjk=35b57cea4b739ca8',
            'https://pl.indeed.com/q-software-engineer-oferty-pracy.html?vjk=d71e7a1aac6f95a0',
            'https://pl.indeed.com/q-sztucznej-inteligencji-oferty-pracy.html',
            'https://pl.indeed.com/q-web-designer-oferty-pracy.html?vjk=5ec756e017c5e734',
            'https://pl.indeed.com/q-web-developer-oferty-pracy.html?vjk=93de0878a5568b9e',
            'https://pl.indeed.com/q-wordpress-developer-oferty-pracy.html?vjk=191cde446f58f0d4',
            'https://pl.indeed.com/q-zdalna-developer-oferty-pracy.html?vjk=da070341246c32c2',
        ],
    },
]

export const offersSpecialistic = [
    {
        name: 'rocketjobs.pl', // it kieruje na justjoin.it
        enabled: false,
        url: 'https://rocketjobs.pl',
    },
    {
        name: 'justjoin.it',
        url: 'https://justjoin.it/all-locations/javascript',
    },
    {
        name: 'inhire.io',
        url: 'https://app.inhire.io/job-offers?contractTypes=contract&employment_types=contract&roles=backend_developer,frontend_developer,full_stack_developer&technologies=25,4,1,71,97',
    },
    {
        name: 'theprotocol.it',
        url: 'https://theprotocol.it/filtry/aws,html,node.js,sql;t/1;s/praca/nodejs-developer-krako-w,oferta,20e40000-8020-8a60-43e4-08dbe0f7991f?utm_source=rtbhouse&utm_medium=retargeting&utm_campaign=protocol&utm_term=RET_DESKTOP&utm_content=light&rtbhc=KmEUsNWAAb59LPpplMSlmqNC2-I3ooESACe5DlKcr6Q.20e40000-8020-8a60-ee65-08dbdea3aeff.1700209610615&s=-8722975952&searchId=7d883720-8aa5-11ee-a567-6590882916e5',
    },
    {
        name: 'nofluffjobs.com',
        url: 'https://nofluffjobs.com/pl/job/senior-nodejs-backend-developer-rits-professional-services-remote',
    },
    {
        name: 'bulldogjob.pl',
        url: 'https://bulldogjob.pl/companies/jobs/s/skills,JavaScript/role,fullstack,backend,frontend/withSalary,true/experienceLevel,medium,senior/employmentType,full_time/city,Remote,Wrocław',
    },
]

export const agenciesSpecialistic = [
    {
        name: 'hays.pl',
        url: 'https://www.hays.pl/znajdz-prace?q=&location=&specialismId=&subSpecialismId=&locationf=&industryf=&sortType=0&jobType=-1&flexiWorkType=-1&payTypefacet=-1&minPay=-1&maxPay=-1&jobSource=HaysGCJ&searchPageTitle=Oferty%20pracy:%20Poland%20%7C%20Hays%20Poland&searchPageDesc=Poland%20-%20szukasz%20pracy%20w%20tym%20obszarze%3F%20Hays%20Poland%20partnerem%20Twojej%20kariery%20zawodowej.%20Sprawdź%20nasze%20najnowsze%20oferty%20pracy%20z%20obszaru:%20Poland%20i%20aplikuj%20już%20dziś.',
    },
    {
        name: 'adecco.pl',
        url: 'https://www.adecco.pl/pl-pl/oferty-pracy?k=&l=&jobCategories=ADCPLCAT5008',
    },
]

export const links: Links = [
    {
        name: 'GitHub',
        enabled: true,
        priority: 20,
        since: 2012,
        url: 'https://github.com/StCieslicki',
        ariaLabel: 'github',
        icon: 'simple-icons:github'
    },
    {
        name: 'LinkedIn',
        enabled: true,
        priority: 10,
        since: 2018,
        url: 'https://www.linkedin.com/in/staszek-cieslicki/',
        ariaLabel: 'linkedin',
        icon: 'simple-icons:linkedin'
    },
    {
        name: 'Tweeter',
        enabled: true,
        priority: 40,
        since: 2015,
        url: 'https://twitter.com/StCieslicki',
        ariaLabel: 'twitter',
        icon: 'simple-icons:twitter'
    },
    {
        name: 'Facebook',
        enabled: true,
        priority: 30,
        since: 2010,
        url: 'https://www.facebook.com/staszek.cieslicki/',
        ariaLabel: 'facebook',
        icon: 'simple-icons:facebook'
    },

    {
        name: 'Instagram',
        enabled: true,
        priority: 50,
        since: 2015,
        url: 'https://www.instagram.com/stahoos/',
        ariaLabel: 'instagram',
        icon: 'simple-icons:instagram'
    },
    {
        name: 'Youtube',
        enabled: true,
        priority: 60,
        since: 2015,
        // url: 'https://www.youtube.com/channel/UCBScXHGVH41ITor6itH5tOw',
        url: 'http://youtube.com/stahoos',
        ariaLabel: 'youtube',
        icon: 'simple-icons:youtube'
    },
];
