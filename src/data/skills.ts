import { SkillBase } from "./types";

type Skills = (SkillBase & {
    type: string,
    icon?: string,
    enabled?: boolean,
})[];

const backend = [
    {
        name: 'Node.js',
        enabled: true,
        weight: 80,
        priority: 100,
        since: 2018,
        type: 'backend',
        icon: 'simple-icons:nodedotjs',
    },
];

const languages = [
    {
        name: 'javascript',
        weight: 40,
        priority: 120,
        since: 2017,//?
        type: 'js', //?
        icon: 'simple-icons:javascript'
    },
    {
        name: 'TypeScript',
        enabled: true,
        weight: 60,
        priority: 200,
        since: 2019,
        type: 'backend',
        icon: 'simple-icons:typescript',

    },
    {
        name: 'PHP',
        enabled: true,
        weight: 70,
        priority: 800,
        since: 2015,
        type: 'backend',
        icon: 'simple-icons:php',

    },
]

const frontend = [
    {
        name: 'React',
        enabled: true,
        weight: 40,
        priority: 300,
        since: 2020,
        type: 'frontend',
        icon: 'simple-icons:react',
    },
    {
        name: 'HTML',
        enabled: true,
        weight: 100,
        priority: 1000,
        since: 2013,
        type: 'frontend',
        icon: 'simple-icons:html5',
    },
    {
        name: 'CSS',
        enabled: true,
        weight: 100,
        priority: 1010,
        since: 2013,
        type: 'frontend',
        icon: 'simple-icons:css3',

    },
]

const vcs = [
    {
        name: 'Git',
        enabled: true,
        weight: 95,
        priority: 400,
        since: 2015,
        type: 'vcs',
        icon: 'simple-icons:git',
    },
    {
        name: 'github',
        weight: 40,
        priority: 410, //?
        since: 2017,//?
        type: 'php', //?
        icon: 'simple-icons:github'
    },
    {
        name: 'gitlab',
        weight: 40,
        priority: 420, //?
        since: 2017,//?
        type: 'php', //?
        icon: 'simple-icons:gitlab'
    },
    {
        name: 'Bitbucket',
        weight: 40,
        priority: 430, //?
        since: 2017,//?
        type: 'php', //?
        icon: 'simple-icons:bitbucket'
    },
]

const containers = [
    {
        name: 'Docker',
        enabled: true,
        weight: 80,
        priority: 500,
        since: 2017,
        type: 'infrastructure',
        icon: 'simple-icons:docker',
    },
]
const rdbs = [
    {
        name: 'SQL',
        enabled: true,
        weight: 80,
        priority: 600,
        since: 2013,
        type: 'database',
    },
    {
        name: 'influxdb',
        weight: 40,
        priority: 650,
        since: 2017,//?
        type: 'php', //?
        icon: 'simple-icons:influxdb'
    },
    {
        name: 'postgresql',
        weight: 40,
        priority: 610,
        since: 2017,//?
        type: 'php', //?
        icon: 'simple-icons:postgresql'
    },
    {
        name: 'mysql',
        weight: 40,
        priority: 620,
        since: 2017,//?
        type: 'php', //?
        icon: 'simple-icons:mysql'
    },
    {
        name: 'mariadb',
        weight: 40,
        priority: 630,
        since: 2017,//?
        type: 'php', //?
        icon: 'simple-icons:mariadb'
    },
    {
        name: 'sqlite',
        weight: 40,
        priority: 640,
        since: 2017,//?
        type: 'php', //?
        icon: 'simple-icons:sqlite'
    },
]

const os = [
    {
        name: 'Linux',
        enabled: true,
        weight: 80,
        priority: 700,
        since: 2013,
        type: 'os',
        icon: 'simple-icons:linux',
    },
]

const management = [
    {
        name: 'JIRA',
        enabled: true,
        weight: 80,
        priority: 900,
        since: 2015,
        type: 'management',
        icon: 'simple-icons:jira',
    },
]

const cloud = [
    {
        name: 'AWS',
        enabled: true,
        weight: 30,
        priority: 1200,
        since: 2017,
        type: 'cloud',
        icon: 'simple-icons:amazonaws',
    },
    {
        name: 'AWS dynamoDB',
        weight: 30,
        priority: 1200,
        since: 2017, //?
        type: 'cloud',
        icon: 'simple-icons:amazondynamodb'
    },
    {
        name: 'AWS EC2',
        weight: 30,
        priority: 1200,
        since: 2017, //?
        type: 'cloud',
        // icon: 'simple-icons:amazonec2'
        icon: 'amazonec2'
    },
    {
        name: 'AWS RDS',
        weight: 30,
        priority: 1200,
        since: 2017, //?
        type: 'cloud',
        // icon: 'simple-icons:amazonrds'
        icon: 'amazonrds'
    },
    {
        name: 'AWS S3',
        weight: 30,
        priority: 1200,
        since: 2017, //?
        type: 'cloud',
        icon: 'simple-icons:amazons3'
    },
    {
        name: 'AWS Lambda',
        weight: 30,
        priority: 1200,
        since: 2017, //?
        type: 'cloud',
        // icon: 'simple-icons:awslambda'
        icon: 'awslambda'
    },
    {
        name: 'AWS SQS',
        weight: 30,
        priority: 1200,
        since: 2017, //?
        type: 'cloud',
        // icon: 'simple-icons:amazonsqs'
        icon: 'amazonsqs'
    },
    {
        name: 'kubernetes',
        weight: 40,
        priority: 510, //?
        since: 2017,//?
        type: 'php', //?
        icon: 'simple-icons:kubernetes'
    },
]

const testing = [
    {
        name: 'Jest',
        enabled: true,
        weight: 40,
        priority: 1300,
        since: 2020,
        type: 'testing',
        icon: 'simple-icons:jest'
    },
    {
        // ????
        name: 'playwright',
        enabled: true,
        weight: 40,
        priority: 1300,
        since: 2020,
        type: 'testing',
        // icon: 'simple-icons:playwright'
        icon: 'playwright'
    },
    {
        // ????
        name: 'dotenv',
        enabled: true,
        weight: 40,
        priority: 1300,
        since: 2020,
        type: 'testing',
        // icon: 'simple-icons:dotenv'
        icon: 'dotenv'
    },
    {
        // ????
        name: 'gnubash',
        enabled: true,
        weight: 40,
        priority: 1300,
        since: 2020,
        type: 'testing',
        icon: 'simple-icons:gnubash'
        // icon: 'dotenv'
    },
]

const packageManagers = [
    {
        name: 'npm',
        weight: 40,
        priority: 110,
        since: 2017,//?
        type: 'php', //?
        icon: 'simple-icons:npm'
    },
    {
        name: 'yarn',
        weight: 40,
        priority: 9000,
        since: 2017,//?
        type: 'php', //?
        icon: 'simple-icons:yarn'
    },
    {
        name: 'pnpm',
        weight: 40,
        priority: 9000,
        since: 2017,//?
        type: 'php', //?
        icon: 'simple-icons:pnpm'
    },
    {
        name: 'Composer',
        weight: 40,
        priority: 810,
        since: 2017,//?
        type: 'php', //?
        icon: 'simple-icons:composer'
    },
]

const videos = [
    {
        name: 'zoom',
        weight: 40,
        priority: 1400,
        since: 2017,//?
        type: 'php', //?
        icon: 'simple-icons:zoom'
    },
    {
        name: 'microsoftteams',
        weight: 40,
        priority: 1400,
        since: 2017,//?
        type: 'php', //?
        icon: 'simple-icons:microsoftteams'
    },
    {
        name: 'googlemeet',
        weight: 40,
        priority: 1400,
        since: 2017,//?
        type: 'php', //?
        icon: 'simple-icons:googlemeet'
    },
    {
        name: 'googlehangouts',
        weight: 40,
        priority: 1400,
        since: 2017,//?
        type: 'php', //?
        icon: 'simple-icons:googlehangouts'
    },
    {
        name: 'slack',
        weight: 40,
        priority: 1400,
        since: 2017,//?
        type: 'php', //?
        icon: 'simple-icons:slack'
    },
    {
        name: 'discord',
        weight: 40,
        priority: 1400,
        since: 2017,//?
        type: 'php', //?
        icon: 'simple-icons:discord'
    },
    {
        name: 'skype',
        weight: 40,
        priority: 1400,
        since: 2017,//?
        type: 'php', //?
        icon: 'simple-icons:skype'
    },
    {
        name: 'whatsapp',
        weight: 40,
        priority: 1400,
        since: 2017,//?
        type: 'php', //?
        icon: 'simple-icons:whatsapp'
    },
    {
        name: 'telegram',
        weight: 40,
        priority: 1400,
        since: 2017,//?
        type: 'php', //?
        icon: 'simple-icons:telegram'
    },
    {
        name: 'signal',
        weight: 40,
        priority: 1400,
        since: 2017,//?
        type: 'php', //?
        icon: 'simple-icons:signal'
    },
]

const frameworks = [
    {
        name: 'Nest.js',
        weight: 40,
        priority: 1500,
        since: 2017,//?
        type: 'api', //?
        icon: 'simple-icons:nestjs'
    },
    {
        name: 'Express',
        weight: 40,
        priority: 1500,
        since: 2017,//?
        type: 'api', //?
        icon: 'simple-icons:express'
    },
    {
        name: 'fastify',
        weight: 40,
        priority: 1500,
        since: 2017,//?
        type: 'php', //?
        icon: 'simple-icons:fastify'
    },
    {
        name: 'symfony',
        weight: 40,
        priority: 820,
        since: 2017,//?
        type: 'php', //?
        icon: 'simple-icons:symfony'
    },
]

const cms = [
    {
        name: 'wordpress',
        weight: 40,
        priority: 1600,
        since: 2017,//?
        type: 'php', //?
        icon: 'simple-icons:wordpress'
    },
]

const ide = [
    {
        name: 'webstorm',
        weight: 40,
        priority: 1720,
        since: 2017,//?
        type: 'php', //?
        icon: 'simple-icons:webstorm'
    },
    {
        name: 'phpstorm',
        weight: 40,
        priority: 1710,
        since: 2017,//?
        type: 'php', //?
        icon: 'simple-icons:phpstorm'
    },
    {
        name: 'intellijidea',
        weight: 40,
        priority: 1700,
        since: 2017,//?
        type: 'php', //?
        icon: 'simple-icons:intellijidea'
    },
    {
        name: 'visualstudiocode',
        weight: 40,
        priority: 1730,
        since: 2017,//?
        type: 'php', //?
        icon: 'simple-icons:visualstudiocode'
    },
]

const render = [
    {
        name: 'Render',
        weight: 40,
        priority: 1800,
        since: 2017,//?
        type: 'php', //?
        // icon: 'simple-icons:render'
        icon: 'render'
    },
    {
        name: 'netlify',
        weight: 40,
        priority: 1800,
        since: 2017,//?
        type: 'php', //?
        icon: 'simple-icons:netlify'
    },
]

const hw = [
    {
        name: 'raspberrypi',
        weight: 40,
        priority: 710,
        since: 2017,//?
        type: 'php', //?
        icon: 'simple-icons:raspberrypi'
    },
]

const passwordManagers = [
    {
        name: 'lastpass',
        weight: 40,
        priority: 1900,
        since: 2017,//?
        type: 'php', //?
        icon: 'simple-icons:lastpass'
    },
]

const groupWork = [
    {
        name: 'mural',
        weight: 40,
        priority: 2000,
        since: 2017,//?
        type: 'php', //?
        // icon: 'simple-icons:mural'
        icon: 'mural'
    },
    {
        name: 'miro',
        weight: 40,
        priority: 2100,
        since: 2017,//?
        type: 'php', //?
        icon: 'simple-icons:miro'
    },
]

const builders = [
    {
        name: 'Astro',
        weight: 10,
        priority: 1100,
        since: 2023,
        type: 'frontend',
        icon: 'simple-icons:astro',
        enabled: true
    },
]

export const skills: Skills = [
    ...backend,
    ...languages,
    ...frontend,
    ...vcs,
    ...containers,
    ...rdbs,
    ...os,
    ...management,
    ...builders,
    ...cloud,
    ...testing,
    ...frameworks,
    ...packageManagers,
    ...passwordManagers,
    ...groupWork,
    ...hw,
    ...render,
    ...ide,
    ...cms,
    ...videos,

    {
        name: 'REST',
        weight: 70,
        priority: 9000,
        since: 2017,
        type: 'api',
        icon: 'simple-icons:rest',
        enabled: true
    },

    {
        name: 'Appwrite',
        weight: 40,
        priority: 2200,
        since: 2017,//?
        type: 'api', //?
        icon: 'simple-icons:appwrite'
    },
    {
        name: 'Asana',
        weight: 40,
        priority: 930,
        since: 2017,//?
        type: 'api', //?
        icon: 'simple-icons:asana'
    },
    {
        name: 'Atlassian',
        weight: 40,
        priority: 920,
        since: 2017,//?
        type: 'api', //?
        icon: 'simple-icons:atlassian'
    },
    {
        name: 'Auth0',
        weight: 40,
        priority: 9000,
        since: 2017,//?
        type: 'api', //?
        icon: 'simple-icons:auth0'
    },
    {
        name: 'Authy',
        weight: 40,
        priority: 9000,
        since: 2017,//?
        type: 'api', //?
        icon: 'simple-icons:authy'
    },
    {
        name: 'Bower',
        weight: 40,
        priority: 9000,
        since: 2017,//?
        type: 'api', //?
        icon: 'simple-icons:bower'
    },
    {
        name: 'Gulp',
        weight: 40,
        priority: 9000,
        since: 2017,//?
        type: 'api', //?
        icon: 'simple-icons:gulp'
    },
    {
        name: 'Webpack',
        weight: 40,
        priority: 9000,
        since: 2017,//?
        type: 'api', //?
        icon: 'simple-icons:webpack'
    },
    {
        name: 'CircleCI',
        weight: 40,
        priority: 2310,
        since: 2017,//?
        type: 'api', //?
        icon: 'simple-icons:circleci'
    },
    {
        name: 'bamboo',
        weight: 40,
        priority: 2300,
        since: 2017,//?
        type: 'api', //?
        icon: 'simple-icons:bamboo'
    },
    {
        name: 'Confluence',
        weight: 40,
        priority: 910,
        since: 2017,//?
        type: 'php', //?
        icon: 'simple-icons:confluence'
    },

    {
        name: 'Eslint',
        weight: 40,
        priority: 2400,
        since: 2017,//?
        type: 'php', //?
        icon: 'simple-icons:eslint'
    },
    {
        name: 'figma',
        weight: 40,
        priority: 2500,
        since: 2017,//?
        type: 'php', //?
        icon: 'simple-icons:figma'
    },
    {
        name: 'grafana',
        weight: 40,
        priority: 2600,
        since: 2017,//?
        type: 'php', //?
        icon: 'simple-icons:grafana'
    },
    {
        name: 'graphql',
        weight: 40,
        priority: 710,
        since: 2017,//?
        type: 'php', //?
        icon: 'simple-icons:graphql'
    },
    {
        name: 'homeassistant',
        weight: 40,
        priority: 2700,
        since: 2017,//?
        type: 'php', //?
        icon: 'simple-icons:homeassistant'
    },

    {
        name: 'json',
        weight: 40,
        priority: 2800,
        since: 2017,//?
        type: 'php', //?
        icon: 'simple-icons:json'
    },
    {
        name: 'jsonwebtokens',
        weight: 40,
        priority: 2900,
        since: 2017,//?
        type: 'php', //?
        icon: 'simple-icons:jsonwebtokens'
    },

    {
        name: 'less',
        weight: 40,
        priority: 1020,
        since: 2017,//?
        type: 'php', //?
        icon: 'simple-icons:less'
    },
{
        name: 'SASS',
        weight: 40,
        priority: 1020,
        since: 2017,//?
        type: 'php', //?
        icon: 'simple-icons:sass'
    },

    {
        name: 'lodash',
        weight: 40,
        priority: 3000,
        since: 2017,//?
        type: 'php', //?
        icon: 'simple-icons:lodash'
    },

    {
        name: 'markdown',
        weight: 40,
        priority: 3100,
        since: 2017,//?
        type: 'php', //?
        icon: 'simple-icons:markdown'
    },

    {
        name: 'mqtt',
        weight: 40,
        priority: 3200,
        since: 2017,//?
        type: 'php', //?
        // icon: 'simple-icons:mqtt'
        icon: 'mqtt'
    },
    {
        name: 'phpmyadmin',
        weight: 40,
        priority: 3300,
        since: 2017,//?
        type: 'php', //?
        icon: 'simple-icons:phpmyadmin'
    },


    {
        name: 'postman',
        weight: 40,
        priority: 3400,
        since: 2017,//?
        type: 'php', //?
        icon: 'simple-icons:postman'
    },
    {
        name: 'Insomnia',
        weight: 40,
        priority: 3400,
        since: 2017,//?
        type: 'php', //?
        icon: 'simple-icons:insomnia'
    },
    {
        name: 'redux',
        weight: 40,
        priority: 310,
        since: 2017,//?
        type: 'php', //?
        icon: 'simple-icons:redux'
    },
    {
        name: 'redis',
        weight: 40,
        priority: 3500,
        since: 2017,//?
        type: 'php', //?
        icon: 'simple-icons:redis'
    },
    {
        name: 'serverless',
        weight: 40,
        priority: 3600,
        since: 2017,//?
        type: 'php', //?
        icon: 'simple-icons:serverless'
    },

    {
        name: 'swagger',
        weight: 40,
        priority: 9010,
        since: 2017,//?
        type: 'php', //?
        icon: 'simple-icons:swagger'
    },

    {
        name: 'tailwindcss',
        weight: 40,
        priority: 1020,
        since: 2017,//?
        type: 'php', //?
        icon: 'simple-icons:tailwindcss'
    },
    {
        name: 'tsnode',
        weight: 40,
        priority: 220,
        since: 2017,//?
        type: 'php', //?
        icon: 'simple-icons:tsnode'
    },
];
