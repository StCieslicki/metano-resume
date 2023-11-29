import { Events } from "./types";
import { responsibilites } from "./dictionaries/responsibilites";

export const SEPARATOR = ', ';
export const BULLET_SEPARATOR = ' · ';

export const dictionary = {
    cc: 'Clearcode.cc',
    jit: 'Jit.team',
    wroclaw: 'Wrocław',
    gdynia: 'Gdynia',
    vien: 'Vien',
    katowice: 'Katowice',

    technologiesHeader: '_Technologies_: ',
    descriptionHeader: '_Description_: ',
    responsibilitiesHeader: '_Responsibilities_: ',
    achivementsHeader: '_Achievements_: ',
    workPlaceHeader: '_Place of work_: ' ,
    workingTimeHeader: '_Individual working time_: ',
    projectManagementHeader: '_Project management_: ',
    skillsHeader: '_Skills_: ',
    softSkillsHeader: '_Soft skills_: ',

    projectDocumentation: 'Project documentation',
    websites: 'Websites',
    styl: 'Stylizing',
    remotely: 'remotely',
    stationary: 'stationary',

    nodeTsE: '*Node.js*/Typescript',
    nodeTs: 'Node.js/Typescript',

    nestE: '*Nest.js 7*',
    nest: 'Nest.js',

    ts: '*Typescript*',
    js: '*JavaScript*',

    nodeE: '*Node.js*',
    node: 'Node.js',

    awsE: '*AWS*',
    aws: '*AWS*',

    reactE: '*React*',

    postgresE: '*PostgreSQL*',
    postgres: '*PostgreSQL*',

    jiraE: '*Jira*',
    jira: 'Jira',

    prebid: 'Prebid.js',
    mySql: '*Mysql*',
    html: 'HTML',
    css: 'CSS',
    typeOrm: 'TypeORM',
    informatics: 'Applied Informatics',
    restApis: 'Rest APIs',
    rest: 'REST',
    problemSolving: '*Problem Solving*',
    softwareTesting: 'Software testing',
    jest: 'Jest',
    bash: 'Bash',
    git: 'Git',
    linux: 'Linux',
    sql: 'Sql',
    english: 'English',
    docker: 'Docker',
    kubernetes: 'Kubernetes',

    express: 'Express.js',

    php: 'PHP',
    php5: '*PHP5*',
    php7: '*PHP7*',
    ssh: 'Secure Shell (SSH)',

    symfonyFramework: 'Symfony Framework',
    symfony3: 'Symfony 3',
    symfony4: '*Symfony 4*',

    docu: 'documentation',

    ciCd: 'CI/CD: Bitbucket',
    azure: 'Azure',
    video: 'Video',
    azureCiCd: 'CI/CD: Azure Pipelines',
};

const position = {
    softEngineer: 'Software Engineer',
    mediumNodeJs: 'Medium Node.js Developer',
    seniorPhp: 'Senior PHP Developer',
    seniorWp: 'Senior Wordpress Developer',
}
const project = {
    mediumNodeJs: 'Node.js Project',
    seniorPhp: 'PHP Project',
}

const nodejs: Events = [
    {
        //summary
        summary: true,
        subject: `${position.softEngineer} @ Rignier Axel Springer Tech`,
        place: `${dictionary.wroclaw} - ${dictionary.remotely}/${dictionary.stationary}`,
        since: '2022.01.03',
        until: '2023.12.31',
        description: [
            dictionary.technologiesHeader + [
                dictionary.nodeTsE,
                dictionary.reactE,
                dictionary.awsE + ': ' + [
                    'dynamoDB',
                    'Lambda',
                    'S3',
                    'SQS'
                ].join(SEPARATOR),
                'use of AI (*ChatGPT*) for modules',
                dictionary.postgresE,
                'highly distributed architecture',
                'microservices',
                '*Bamboo CI/CD*',
                dictionary.jiraE,
                'Figma (as a reader).',
            ].join(SEPARATOR),

            dictionary.responsibilitiesHeader + [
                responsibilites.technical.requirementsAnalysis,
                responsibilites.technical.softwareDesign,
                responsibilites.technical.programming,
                responsibilites.technical.testingSoftwareDevelopment,
                responsibilites.technical.debuggingAndCorrection,
                // responsibilites.technical.collaboratingWithTeam,
                responsibilites.technical.documentation,
                responsibilites.technical.optimisationAndPerformance,
                responsibilites.technical.troubleshooting,
                responsibilites.technical.technologyTrendTracking,
                responsibilites.technical.softwareDeployment,
                responsibilites.technical.technicalSupport,
                responsibilites.technical.codeMaintenance,
                responsibilites.technical.versionManagement,
                // responsibilites.technical.softwareSecurity,

                // todo: do opisu projektu
                'Building and managing: _REST - like_ *AWS Lambda APIs*',
                '*modules frontend*',
                '*modules backend*',
                '*CI/CD*',
                '*modules that use AI*',
                'databases',
                dictionary.docu,
                'tests',
                'monitoring',
                'deployment' + '.',
                ].join(SEPARATOR),
            // ' building and managing infrastructure,' +
            // ' building and managing architecture,' +
            // ' building and managing security,' +
            // ' building and managing development environment,' +
            // ' building and managing production environment,' +
            // ' building and managing staging environment,' +
            // ' building and managing development process,' +
            // ' building and managing development tools,' +
            // ' building and managing development standards,' +
            // ' building and managing development guidelines,' +
            // ' building and managing development patterns,' +
            // ' building and managing development practices,' +
            // ' building and managing development culture,' +
            // ' building and managing development team,' +
            // ' building and managing development company.',
            // '_Achievements_:',

            dictionary.skillsHeader + [
                dictionary.informatics,
                dictionary.restApis,
                dictionary.problemSolving,
                dictionary.jest,
                dictionary.softwareTesting,
                dictionary.kubernetes,
                dictionary.express,
                dictionary.rest,
                dictionary.projectDocumentation,
                dictionary.styl,
                dictionary.websites,
                dictionary.ts,
                dictionary.bash,
                dictionary.js,
                dictionary.nodeE,
                dictionary.git,
                dictionary.linux,
                // dictionary.mySql,
                dictionary.html,
                dictionary.sql,
                dictionary.jira,
                dictionary.ssh,
                dictionary.english,
                dictionary.postgres,
                dictionary.aws
            ].join(BULLET_SEPARATOR),

            dictionary.workingTimeHeader + '*fulltime*, team: *5* people'
        ],
    },
    {
        //summary
        summary: true,
        subject: `${position.mediumNodeJs} @ ${dictionary.jit} and CX-Labs`,
        place: `${dictionary.gdynia}/${dictionary.vien} - ${dictionary.remotely}`,
        since: '2021.06.01',
        until: '2021.12.31',
        description: [
            dictionary.node + ' Backend development',
            'Building and implementing new solutions',
            'Implementation of best practices and patterns',
            'Code refactoring and optimisation',
            'Building and implementing e2e tests, from scratch on existing code',

            dictionary.technologiesHeader + [
                dictionary.nodeTsE,
                dictionary.nestE,
                dictionary.typeOrm,
                dictionary.postgresE
            ].join(SEPARATOR),

            dictionary.skillsHeader + [
                dictionary.informatics,
                dictionary.express,
                dictionary.rest,
                dictionary.projectDocumentation,
                dictionary.problemSolving,
                dictionary.styl,
                dictionary.websites,
                dictionary.ts,
                dictionary.bash,
                dictionary.js,
                dictionary.nodeE,
                dictionary.git,
                dictionary.linux,
                // dictionary.mySql,
                dictionary.html,
                dictionary.sql,
                dictionary.ssh,
                dictionary.english,
                dictionary.postgres
            ].join(BULLET_SEPARATOR),

            'Individual working time: '+ ' *fulltime*, team: *2* people'
        ]
    },
    {
        subject: `${project.mediumNodeJs} @ ${dictionary.jit}`,
        place: `${dictionary.gdynia} - ${dictionary.remotely}`,
        since: '2021.10.01',
        until: '2021.12.31',
        description: [
            dictionary.node + ' Backend development',
            'Building and implementing new solutions',
            'Implementation of best practices and patterns',
            'Code refactoring and optimisation',
            'Building and implementing e2e tests, from scratch on existing code',

            dictionary.technologiesHeader + [
                dictionary.nodeTsE,
                dictionary.nestE,
                dictionary.typeOrm,
                dictionary.postgresE
            ].join(SEPARATOR),

            'Individual working time: ' + '*fulltime*, team: *2* people'
        ]
    },
    {
        subject: `${project.mediumNodeJs} @ CX-Labs via ${dictionary.jit}`,
        place: `${dictionary.vien} - ${dictionary.remotely}`,
        since: '2021.06.01',
        until: '2021.09.31',
        description: [
            dictionary.node + ' Backend development',
            'Building and implementing new solutions',
            'Implementation of best practices and patterns',
            'Code refactoring and optimisation',
            'Building and implementing e2e tests, from scratch on existing code',
            'Consulting and advising on new solutions and architecture for extension of an existing project',

            dictionary.technologiesHeader + [
                dictionary.nodeTsE,
                dictionary.postgresE,
            ].join(SEPARATOR),

            'Individual working time: ' + '*fulltime*, team: *2* people'
        ]
    },
    {
        //summary
        summary: true,
        subject: `${position.mediumNodeJs} @ ${dictionary.cc}`,
        place: `${dictionary.wroclaw} - ${dictionary.stationary}/${dictionary.remotely}`,
        since: '2019.01.01',
        until: '2021.03.31',
        description: [
            'Ability to work independently as well as in a team environment.',
            'Problem Solving Skills.',
            'Excellent time management skills and ability to work on multiple tasks simultaneously.',
            'High level of technical competence.',
            'Collaborate with other team members to achieve success.',
            'Keep constantly updated theoretical and practical knowledge of technology.',
            'Project management: Jira (company-owned, client-based).',

            dictionary.technologiesHeader + [
                dictionary.nodeTsE,
                dictionary.typeOrm,
                dictionary.postgresE,
                dictionary.nestE,
                dictionary.express,
                dictionary.prebid,
                dictionary.ciCd + ' pipeline',
                dictionary.azureCiCd,
                dictionary.aws,
                dictionary.azure,
                'Terraform',
                'Databricks',
                dictionary.docker,
                'traefik',
                'docker swarm',
                'docker compose',
                ].join(SEPARATOR),

            dictionary.skillsHeader + [
                dictionary.informatics,
                dictionary.restApis,
                dictionary.problemSolving,
                dictionary.jest,
                dictionary.softwareTesting,
                dictionary.kubernetes,
                dictionary.express,
                dictionary.rest,
                dictionary.projectDocumentation,
                dictionary.styl,
                dictionary.websites,
                dictionary.bash,
                dictionary.js,
                dictionary.nodeE,
                dictionary.git,
                dictionary.linux,
                // dictionary.mySql,
                dictionary.html,
                dictionary.sql,
                dictionary.jira,
                dictionary.docker,
                dictionary.ssh,
                dictionary.english,
                dictionary.postgres,
                dictionary.aws
            ].join(BULLET_SEPARATOR),

            '_Responsibility_: ' + 'Building and managing REST APIs,'
        ]
    },
    {
        subject: `${project.mediumNodeJs} @ ${dictionary.cc}`,
        place: `${dictionary.wroclaw} - ${dictionary.remotely}`,

        since: '2020.12.01',
        until: '2021.02.28',
        description: [
            dictionary.technologiesHeader + [
                dictionary.nodeTsE,
                dictionary.nestE,
                dictionary.typeOrm,
                dictionary.prebid,
                dictionary.postgresE,
                dictionary.azure,
                'Terraform',
                'Databricks',
                dictionary.azureCiCd,
                ].join(SEPARATOR),

            dictionary.workingTimeHeader + '*295 WMh*, team: about *10* people'
        ]
    },
    {
        subject: `${project.mediumNodeJs} @ ${dictionary.cc}`,
        place: `${dictionary.wroclaw} - ${dictionary.remotely}`,

        since: '2020.10.01',
        until: '2020.12.01',
        description: [
            '_Project_ for a mobile advertising agency',

            dictionary.technologiesHeader + [
                dictionary.nodeTs,
                dictionary.postgres,
                dictionary.aws,
                ].join(SEPARATOR),

            dictionary.workingTimeHeader + '*176 WMh*, team: about *10* people'
        ]
    },
    {
        subject: `${project.mediumNodeJs} @ ${dictionary.cc}`,
        place: `${dictionary.wroclaw} - ${dictionary.stationary}/${dictionary.remotely}`,
        since: '2020.03.01',
        // until: '2021.01.31',
        until: '2020.10.01',
        description: [
            '_Project_: designed and built from start to finish',

            '_Components_: ' + [
                'adserver',
                'sdk (for selecting and serving ads)',
                'adapter for prebid.js',
                'report-service',
                'backend',
                'client',
            ].join(SEPARATOR),

            dictionary.technologiesHeader + [
                dictionary.nodeTs,
                dictionary.nest +  ' - backend',
                dictionary.typeOrm,
                dictionary.postgres,
                dictionary.aws,
                dictionary.prebid,
                dictionary.ciCd + ' pipeline',
                ].join(SEPARATOR),

            '_Responsibility_: ' + 'Building and managing REST APIs, ',

            dictionary.workingTimeHeader + '*1050 WMh*, team: about *10* people'
        ]
    },
    {
        subject: `${project.mediumNodeJs} @ ${dictionary.cc}`,
        place: `${dictionary.wroclaw} - ${dictionary.stationary}`,
        since: '2019.11.01',
        until: '2020.03.31',
        description: [
            '_Project_: Design and construction of an SSP solution',

            dictionary.technologiesHeader + [
                dictionary.nodeE,
                dictionary.typeOrm,
                dictionary.aws,
                dictionary.postgres,
            ].join(SEPARATOR),

            '_Responsibility_: ' + 'Building a REST API',

            dictionary.workingTimeHeader + '*579 WMh*, team: about *10* people'
        ]
    },
];

const php: Events = [
    {
        summary: true,
        subject: `${position.seniorPhp} @ ${dictionary.cc}`,
        place: `${dictionary.wroclaw} - ${dictionary.stationary}/${dictionary.remotely}`,
        since: '2013.07.01',
        until: '2019.10.30',
        description: [
            'Ability to work independently as well as in a team environment.',
            'Problem Solving Skills.',
            'Excellent time management skills and ability to work on multiple tasks simultaneously.',
            'High level of technical competence.',
            'Collaborate with other team members to achieve success.',
            'Keep up to date with theoretical and practical knowledge of technology.',

            'Project management: ' + [
                dictionary.jira + ' (corporate, at client)',
                'Redmine (corporate, before Jira)',
                'Asana (at client)',
            ].join(SEPARATOR),

            dictionary.technologiesHeader + [
                dictionary.php5,
                dictionary.php7,
                dictionary.symfony3,
                dictionary.symfony4,
                dictionary.nodeTs,
                dictionary.typeOrm,
                dictionary.mySql,
                'Msql',
                dictionary.postgres,
                'Angular (new frontend)',

                dictionary.aws,
                dictionary.azure,

                dictionary.video,
                'FTP',
                'Api Platform 1',
                dictionary.docker,
                'docker swarm',
                dictionary.kubernetes,
                'ELK',
                'Grafana',
                'RabbitMQ',
                dictionary.ciCd,
                'PHP pure OOP, w/o framework',
            ].join(SEPARATOR),

            dictionary.skillsHeader + [
                dictionary.restApis,
                dictionary.rest,
                dictionary.problemSolving,
                dictionary.projectDocumentation,
                dictionary.styl,
                dictionary.websites,
                dictionary.bash,
                dictionary.git,
                dictionary.linux,
                // dictionary.mySql,
                dictionary.html,
                dictionary.sql,
                dictionary.jira,
                dictionary.symfonyFramework,
                dictionary.docker,
                dictionary.ssh,
                dictionary.english,
                dictionary.postgres
            ].join(BULLET_SEPARATOR),

            dictionary.responsibilitiesHeader + [
                'backend development of near realtime reporting system for large amount of data (visits, clicks, conversions), maintenance, optimization, optimization of data aggregation in database',
                'Building and developing API, Implementing and rapidly building REST API with Api Platform (with Swagger)',
                'Project planning, API and database schema, construction, API development',
                'modification and optimization of php code - backend',
                'development and code optimization of legacy php code, consulting'
            ].join(SEPARATOR),
        ]
    },
    {
        subject: `${project.seniorPhp} @ ${dictionary.cc}`,
        place: `${dictionary.wroclaw} - ${dictionary.stationary}`,
        since: '2019.09.01',
        until: '2019.10.30',
        description: [
            '_Project_ for an advertising agency',

            dictionary.technologiesHeader + [
                'PHP pure OOP',
                'w/o framework'
            ].join(SEPARATOR),

            dictionary.responsibilitiesHeader + 'development and optimization of legacy php code, consulting',

            dictionary.workingTimeHeader + '*218 WMh*, team: *2* people'
        ]
    },
    {
        subject: `${project.seniorPhp} @ ${dictionary.cc}`,
        place: `${dictionary.wroclaw} - ${dictionary.stationary}`,
        since: '2019.05.01',
        until: '2019.07.30',
        description: [
            '_Internal project_',

            dictionary.technologiesHeader + [
                dictionary.php,
                dictionary.nodeE,
                dictionary.aws,
                dictionary.docker,
            ].join(SEPARATOR),

            dictionary.responsibilitiesHeader + 'Building Api',

            dictionary.workingTimeHeader + '*383 WMh*'
        ]
    },
    {
        subject: `${project.seniorPhp} @ ${dictionary.cc}`,
        place: `${dictionary.wroclaw} - ${dictionary.stationary}`,
        since: '2019.02.01',
        until: '2019.03.31',
        description: [
            '_Internal project_, building the base and foundation (core) for building DMP solutions for customers',

            dictionary.technologiesHeader + [
                dictionary.php7,
                dictionary.nodeE,
                dictionary.typeOrm,
                dictionary.mySql,
                dictionary.aws,
                dictionary.docker,
                dictionary.kubernetes,
            ].join(SEPARATOR),

            dictionary.responsibilitiesHeader + [
                'Planning the project',
                'API and database schema',
                'building and expanding the API.',
            ].join(SEPARATOR),

            dictionary.achivementsHeader + 'Implementation and rapid build of REST API with Api Platform (with Swagger, with potential to migrate to GraphQL).',

            dictionary.workingTimeHeader + '*43 WMh*, team: about *10* people'
        ]
    },
    {
        subject: `${project.seniorPhp} @ ${dictionary.cc}`,
        place: `${dictionary.wroclaw} - ${dictionary.stationary}`,
        since: '2019.01.01',
        until: '2019.02.28',
        description: [
            '_Internal project_, built from the beginning, the basis and foundation (core) for building solutions for customers',

            '_Components_: ' + [
                'exchange',
                'populator',
                'ssp (api, frontend)',
                'visitor-sdk'
            ].join(SEPARATOR),

            dictionary.technologiesHeader+ [
                dictionary.php7,
                dictionary.nodeTs,
                dictionary.typeOrm,
                dictionary.mySql,
                dictionary.aws,
                dictionary.docker,
                dictionary.kubernetes,
            ].join(SEPARATOR),

            dictionary.responsibilitiesHeader + [
                'Project planning',
                'API and database schema',
                'construction',
                'API development',
            ].join(SEPARATOR),

            dictionary.achivementsHeader + 'Implementation and rapid build of REST API with Api Platform (with Swagger).',

            dictionary.workingTimeHeader + '*176 WMh*, team: about *10* people'
        ]
    },
    {
        subject: `${project.seniorPhp} @ ${dictionary.cc}`,
        place: `${dictionary.katowice} - ${dictionary.remotely}`,
        since: '2018.01.01',
        until: '2018.10.30',
        description: [
            `_Project_ built from start to finish, workshops and storymapping with the client stationary in ${dictionary.katowice}`,

            dictionary.descriptionHeader + 'Building a system to scan the cookies used on websites and collect (store) the consents given due to the upcoming GDPR/RODO',

            dictionary.technologiesHeader + [
                dictionary.php7,
                'Api Platform 1',
                dictionary.symfony4,
                dictionary.postgres,
                'Msql',
                dictionary.azure,
                'docker swarm',
                'ELK',
                'Grafana',
                'RabbitMQ',
                dictionary.ciCd,
            ].join(SEPARATOR),

            dictionary.responsibilitiesHeader + 'Building and developing API, Implementing and rapidly building REST API with Api Platform (with Swagger)',

            dictionary.projectManagementHeader + 'Jira at the client\'s site',

            dictionary.workingTimeHeader + '*1379 WMh*, team: about *10* people',

            dictionary.workPlaceHeader + `${dictionary.katowice} - ${dictionary.remotely} (visiting the office 0.5-1 times/msc)`
        ]
    },
    {
        subject: `${project.seniorPhp} @ ${dictionary.cc}`,
        place: `${dictionary.katowice} - ${dictionary.remotely}`,
        since: '2017.11.01',
        until: '2017.12.31',
        description: [
            dictionary.descriptionHeader + 'private (user-related) video content workflow management system',

            dictionary.technologiesHeader + [
                dictionary.php5,
                dictionary.symfony3,
                dictionary.mySql,
                dictionary.video,
                'FTP',
            ].join(SEPARATOR),

            dictionary.responsibilitiesHeader + 'modification and optimization of php code - backend',

            dictionary.achivementsHeader + 'backend optimization and profiling in PHP, live presentation about php profiling between teams from USA, Poland, and Russia',

            dictionary.projectManagementHeader + 'Jira at the client\'s site',

            dictionary.workingTimeHeader + '*166 WMh*, team: about *5* people',

            dictionary.workPlaceHeader + `${dictionary.katowice} - ${dictionary.remotely} (visiting the office 0.5-1 times/msc)`
        ]
    },
    {
        subject: `${project.seniorPhp} @ ${dictionary.cc}`,
        place: `${dictionary.wroclaw} - ${dictionary.stationary}`,
        since: '2015.07.01',
        until: '2017.11.30',
        description: [
            '_Project_ taken over in development, old backend/frontend: CodeIgniter',

            dictionary.descriptionHeader + 'Near real-time reporting system for an agency trading advertising traffic on the Internet',

            dictionary.technologiesHeader + [
                dictionary.php5,
                dictionary.symfony3 + ' (new backend)',
                dictionary.mySql,
                'Angular (new frontend)',
                dictionary.aws,
                ].join(SEPARATOR),

            dictionary.responsibilitiesHeader + 'backend development of near realtime reporting system for large amount of data (visits, clicks, conversions), maintenance, optimization, optimization of data aggregation in database',

            dictionary.achivementsHeader + 'introduction to Sentry backend, motion support: 10-12 million clicks / 24h',

            dictionary.workingTimeHeader + '*3359 WMh*, team: *5-10* people'
        ]
    },
];

const wordpress: Events = [
    {
        summary: true,
        subject: `${position.seniorWp} @ ${dictionary.cc}`,
        place: `${dictionary.wroclaw} - ${dictionary.stationary}`,
        since: '2013.07.01',
        until: '2015.05.31',
        description: [
            dictionary.descriptionHeader + 'WordPress Multi User - one engine, one database, on separate subdomains and/or domains',
            'serving about 14 thousand pages (since 2009)',

            dictionary.technologiesHeader + [
                'Wordpress 2.6',
                dictionary.php5,
                dictionary.mySql,
                dictionary.html,
                dictionary.css,
                dictionary.js,
            ].join(SEPARATOR),

            dictionary.skillsHeader + [
                dictionary.problemSolving,
                dictionary.projectDocumentation,
                dictionary.styl,
                dictionary.websites,
                dictionary.bash,
                dictionary.git,
                dictionary.linux,
                dictionary.mySql,
                dictionary.html,
                dictionary.sql,
                dictionary.jira,
                dictionary.english
            ].join(BULLET_SEPARATOR),

            dictionary.responsibilitiesHeader + [
                'building and implementation of new solutions',
                'plugins',
                'skins',
                'backend development',
                'service',
            ].join(SEPARATOR),

            dictionary.achivementsHeader + 'Optimized Dashboard loading speed for admin from 60+ s to a few seconds, moved code base from SVN to Git with history continuity',

            dictionary.projectManagementHeader + 'Redmine, then Jira',

            dictionary.workingTimeHeader + '*2269 WMh*, team: about *5* people'
        ]
    },
];

export const history: Events = [
    ...nodejs,
    ...php,
    ...wordpress
];
