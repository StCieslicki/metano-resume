import { SkillBase } from "./types";

type Skills = (SkillBase & {
    type: string,
    icon?: string
})[];

const backend = [
    {
        name: 'Node.js',
        weight: 80,
        priority: 10,
        since: 2018,
        type: 'backend',
        icon: 'simple-icons:nodedotjs',
        enabled: true
    },
];

const languages = [
    {
        name: 'javascript',
        weight: 40,
        priority: 130, //?
        since: 2017,//?
        type: 'php', //?
        icon: 'simple-icons:javascript'
    },
    {
        name: 'TypeScript',
        weight: 60,
        priority: 20,
        since: 2019,
        type: 'backend',
        icon: 'simple-icons:typescript',
        enabled: true

    },
    {
        name: 'PHP',
        weight: 70,
        priority: 80,
        since: 2015,
        type: 'backend',
        icon: 'simple-icons:php',
        enabled: true

    },
]

const frontend = [
    {
        name: 'React',
        weight: 40,
        priority: 30,
        since: 2020,
        type: 'frontend',
        icon: 'simple-icons:react',
        enabled: true

    },
    {
        name: 'HTML',
        weight: 100,
        priority: 100,
        since: 2013,
        type: 'frontend',
        icon: 'simple-icons:html5',
        enabled: true

    },
    {
        name: 'CSS',
        weight: 100,
        priority: 100,
        since: 2013,
        type: 'frontend',
        icon: 'simple-icons:css3',
        enabled: true

    },
]

const vcs = [
    {
        name: 'Git',
        weight: 95,
        priority: 40,
        since: 2015,
        type: 'vcs',
        icon: 'simple-icons:git',
        enabled: true

    },
    {
        name: 'github',
        weight: 40,
        priority: 130, //?
        since: 2017,//?
        type: 'php', //?
        icon: 'simple-icons:github'
    },
    {
        name: 'gitlab',
        weight: 40,
        priority: 130, //?
        since: 2017,//?
        type: 'php', //?
        icon: 'simple-icons:gitlab'
    },
]

const containers = [
    {
        name: 'Docker',
        weight: 80,
        priority: 50,
        since: 2017,
        type: 'infrastructure',
        icon: 'simple-icons:docker',
        enabled: true

    },
]
const rdbs = [
    {
        name: 'SQL',
        weight: 80,
        priority: 60,
        since: 2013,
        type: 'database',
        enabled: true

    },
    {
        name: 'influxdb',
        weight: 40,
        priority: 130, //?
        since: 2017,//?
        type: 'php', //?
        icon: 'simple-icons:influxdb'
    },
    {
        name: 'postgresql',
        weight: 40,
        priority: 130, //?
        since: 2017,//?
        type: 'php', //?
        icon: 'simple-icons:postgresql'
    },
    {
        name: 'mysql',
        weight: 40,
        priority: 130, //?
        since: 2017,//?
        type: 'php', //?
        icon: 'simple-icons:mysql'
    },
    {
        name: 'mariadb',
        weight: 40,
        priority: 130, //?
        since: 2017,//?
        type: 'php', //?
        icon: 'simple-icons:mariadb'
    },
    {
        name: 'sqlite',
        weight: 40,
        priority: 130, //?
        since: 2017,//?
        type: 'php', //?
        icon: 'simple-icons:sqlite'
    },
]

const os = [
    {
        name: 'Linux',
        weight: 80,
        priority: 70,
        since: 2013,
        type: 'os',
        icon: 'simple-icons:linux',
        enabled: true

    },
]

const management = [
    {
        name: 'JIRA',
        weight: 80,
        priority: 90,
        since: 2015,
        type: 'management',
        icon: 'simple-icons:jira',
        enabled: true

    },
]

const cloud = [
    {
        name: 'AWS',
        weight: 30,
        priority: 120,
        since: 2017,
        type: 'cloud',
        icon: 'simple-icons:amazonaws',
        enabled: true
    },
    {
        name: 'AWS dynamoDB',
        weight: 30,
        priority: 120, //?
        since: 2017, //?
        type: 'cloud',
        icon: 'simple-icons:amazondynamodb'
    },
    {
        name: 'AWS EC2',
        weight: 30,
        priority: 120, //?
        since: 2017, //?
        type: 'cloud',
        icon: 'simple-icons:amazonec2'
    },
    {
        name: 'AWS RDS',
        weight: 30,
        priority: 120, //?
        since: 2017, //?
        type: 'cloud',
        icon: 'simple-icons:amazonrds'
    },
    {
        name: 'AWS S3',
        weight: 30,
        priority: 120, //?
        since: 2017, //?
        type: 'cloud',
        icon: 'simple-icons:amazons3'
    },
    {
        name: 'AWS Lambda',
        weight: 30,
        priority: 120, //?
        since: 2017, //?
        type: 'cloud',
        icon: 'simple-icons:awslambda'
    },
    {
        name: 'AWS SQS',
        weight: 30,
        priority: 120, //?
        since: 2017, //?
        type: 'cloud',
        icon: 'simple-icons:amazonsqs'
    },
    {
        name: 'kubernetes',
        weight: 40,
        priority: 130, //?
        since: 2017,//?
        type: 'php', //?
        icon: 'simple-icons:kubernetes'
    },
    {
        name: 'Docker',
        weight: 40,
        priority: 130, //?
        since: 2017,//?
        type: 'php', //?
        icon: 'simple-icons:docker'
    },
]

const testing = [
    {
        name: 'Jest',
        weight: 40,
        priority: 130, //?
        since: 2017,//?
        type: 'api', //?
        icon: 'simple-icons:jest'
    },
]

const packageManagers = [
    {
        name: 'npm',
        weight: 40,
        priority: 130, //?
        since: 2017,//?
        type: 'php', //?
        icon: 'simple-icons:npm'
    },
    {
        name: 'Composer',
        weight: 40,
        priority: 130, //?
        since: 2017,//?
        type: 'php', //?
        icon: 'simple-icons:composer'
    },
]

const videos = [
    {
        name: 'zoom',
        weight: 40,
        priority: 130, //?
        since: 2017,//?
        type: 'php', //?
        icon: 'simple-icons:zoom'
    },
    {
        name: 'microsoftteams',
        weight: 40,
        priority: 130, //?
        since: 2017,//?
        type: 'php', //?
        icon: 'simple-icons:microsoftteams'
    },
    {
        name: 'googlemeet',
        weight: 40,
        priority: 130, //?
        since: 2017,//?
        type: 'php', //?
        icon: 'simple-icons:googlemeet'
    },
    {
        name: 'googlehangouts',
        weight: 40,
        priority: 130, //?
        since: 2017,//?
        type: 'php', //?
        icon: 'simple-icons:googlehangouts'
    },
    {
        name: 'slack',
        weight: 40,
        priority: 130, //?
        since: 2017,//?
        type: 'php', //?
        icon: 'simple-icons:slack'
    },
]

const frameworks = [
    {
        name: 'Nest.js',
        weight: 40,
        priority: 130, //?
        since: 2017,//?
        type: 'api', //?
        icon: 'simple-icons:nestjs'
    },
    {
        name: 'Express',
        weight: 40,
        priority: 130, //?
        since: 2017,//?
        type: 'api', //?
        icon: 'simple-icons:express'
    },
    {
        name: 'fastify',
        weight: 40,
        priority: 130, //?
        since: 2017,//?
        type: 'php', //?
        icon: 'simple-icons:fastify'
    },
    {
        name: 'symfony',
        weight: 40,
        priority: 130, //?
        since: 2017,//?
        type: 'php', //?
        icon: 'simple-icons:symfony'
    },
]

const cms = [
    {
        name: 'wordpress',
        weight: 40,
        priority: 130, //?
        since: 2017,//?
        type: 'php', //?
        icon: 'simple-icons:wordpress'
    },
]

const ide = [
    {
        name: 'webstorm',
        weight: 40,
        priority: 130, //?
        since: 2017,//?
        type: 'php', //?
        icon: 'simple-icons:webstorm'
    },
    {
        name: 'phpstorm',
        weight: 40,
        priority: 130, //?
        since: 2017,//?
        type: 'php', //?
        icon: 'simple-icons:phpstorm'
    },
    {
        name: 'intellijidea',
        weight: 40,
        priority: 130, //?
        since: 2017,//?
        type: 'php', //?
        icon: 'simple-icons:intellijidea'
    },
]

const render = [
    {
        name: 'render',
        weight: 40,
        priority: 130, //?
        since: 2017,//?
        type: 'php', //?
        icon: 'simple-icons:render'
    },
    {
        name: 'netlify',
        weight: 40,
        priority: 130, //?
        since: 2017,//?
        type: 'php', //?
        icon: 'simple-icons:netlify'
    },
]

const hw = [
    {
        name: 'raspberrypi',
        weight: 40,
        priority: 130, //?
        since: 2017,//?
        type: 'php', //?
        icon: 'simple-icons:raspberrypi'
    },
    {
        name: 'linux',
        weight: 40,
        priority: 130, //?
        since: 2017,//?
        type: 'php', //?
        icon: 'simple-icons:linux'
    },
]

const passwordManagers = [
    {
        name: 'lastpass',
        weight: 40,
        priority: 130, //?
        since: 2017,//?
        type: 'php', //?
        icon: 'simple-icons:lastpass'
    },
]

const groupWork = [
    {
        name: 'mural',
        weight: 40,
        priority: 130, //?
        since: 2017,//?
        type: 'php', //?
        icon: 'simple-icons:mural'
    },
    {
        name: 'miro',
        weight: 40,
        priority: 130, //?
        since: 2017,//?
        type: 'php', //?
        icon: 'simple-icons:miro'
    },
]

const builders = [
    {
        name: 'Astro',
        weight: 10,
        priority: 110,
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
    ...vcs,
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
        priority: 130,
        since: 2017,
        type: 'api',
        icon: 'simple-icons:typescript',
        enabled: true
    },

    {
        name: 'Appwrite',
        weight: 40,
        priority: 130, //?
        since: 2017,//?
        type: 'api', //?
        icon: 'simple-icons:appwrite'
    },
    {
        name: 'Asana',
        weight: 40,
        priority: 130, //?
        since: 2017,//?
        type: 'api', //?
        icon: 'simple-icons:asana'
    },
    {
        name: 'Atlassian',
        weight: 40,
        priority: 130, //?
        since: 2017,//?
        type: 'api', //?
        icon: 'simple-icons:atlassian'
    },
    {
        name: 'Auth0',
        weight: 40,
        priority: 130, //?
        since: 2017,//?
        type: 'api', //?
        icon: 'simple-icons:auth0'
    },
    {
        name: 'Authy',
        weight: 40,
        priority: 130, //?
        since: 2017,//?
        type: 'api', //?
        icon: 'simple-icons:authy'
    },
    {
        name: 'Bower',
        weight: 40,
        priority: 130, //?
        since: 2017,//?
        type: 'api', //?
        icon: 'simple-icons:bower'
    },
    {
        name: 'CircleCI',
        weight: 40,
        priority: 130, //?
        since: 2017,//?
        type: 'api', //?
        icon: 'simple-icons:circleci'
    },
    {
        name: 'Confluence',
        weight: 40,
        priority: 130, //?
        since: 2017,//?
        type: 'php', //?
        icon: 'simple-icons:confluence'
    },

    {
        name: 'Eslint',
        weight: 40,
        priority: 130, //?
        since: 2017,//?
        type: 'php', //?
        icon: 'simple-icons:eslint'
    },
    {
        name: 'figma',
        weight: 40,
        priority: 130, //?
        since: 2017,//?
        type: 'php', //?
        icon: 'simple-icons:figma'
    },
    {
        name: 'grafana',
        weight: 40,
        priority: 130, //?
        since: 2017,//?
        type: 'php', //?
        icon: 'simple-icons:grafana'
    },
    {
        name: 'graphql',
        weight: 40,
        priority: 130, //?
        since: 2017,//?
        type: 'php', //?
        icon: 'simple-icons:graphql'
    },
    {
        name: 'homeassistant',
        weight: 40,
        priority: 130, //?
        since: 2017,//?
        type: 'php', //?
        icon: 'simple-icons:homeassistant'
    },

    {
        name: 'json',
        weight: 40,
        priority: 130, //?
        since: 2017,//?
        type: 'php', //?
        icon: 'simple-icons:json'
    },
    {
        name: 'jsonwebtokens',
        weight: 40,
        priority: 130, //?
        since: 2017,//?
        type: 'php', //?
        icon: 'simple-icons:jsonwebtokens'
    },

    {
        name: 'less',
        weight: 40,
        priority: 130, //?
        since: 2017,//?
        type: 'php', //?
        icon: 'simple-icons:less'
    },

    {
        name: 'lodash',
        weight: 40,
        priority: 130, //?
        since: 2017,//?
        type: 'php', //?
        icon: 'simple-icons:lodash'
    },

    {
        name: 'markdown',
        weight: 40,
        priority: 130, //?
        since: 2017,//?
        type: 'php', //?
        icon: 'simple-icons:markdown'
    },

    {
        name: 'mqtt',
        weight: 40,
        priority: 130, //?
        since: 2017,//?
        type: 'php', //?
        icon: 'simple-icons:mqtt'
    },
    {
        name: 'phpmyadmin',
        weight: 40,
        priority: 130, //?
        since: 2017,//?
        type: 'php', //?
        icon: 'simple-icons:phpmyadmin'
    },


    {
        name: 'postman',
        weight: 40,
        priority: 130, //?
        since: 2017,//?
        type: 'php', //?
        icon: 'simple-icons:postman'
    },
    {
        name: 'redux',
        weight: 40,
        priority: 130, //?
        since: 2017,//?
        type: 'php', //?
        icon: 'simple-icons:redux'
    },
    {
        name: 'redis',
        weight: 40,
        priority: 130, //?
        since: 2017,//?
        type: 'php', //?
        icon: 'simple-icons:redis'
    },
    {
        name: 'serverless',
        weight: 40,
        priority: 130, //?
        since: 2017,//?
        type: 'php', //?
        icon: 'simple-icons:serverless'
    },

    {
        name: 'swagger',
        weight: 40,
        priority: 130, //?
        since: 2017,//?
        type: 'php', //?
        icon: 'simple-icons:swagger'
    },

    {
        name: 'tailwindcss',
        weight: 40,
        priority: 130, //?
        since: 2017,//?
        type: 'php', //?
        icon: 'simple-icons:tailwindcss'
    },
    {
        name: 'tsnode',
        weight: 40,
        priority: 130, //?
        since: 2017,//?
        type: 'php', //?
        icon: 'simple-icons:tsnode'
    },

];
