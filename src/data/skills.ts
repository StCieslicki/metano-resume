import { SkillBase } from "./types";

type Skills = (SkillBase & {
    type: string,
    icon?: string,
    disabled?: boolean,
    important?: boolean,
    copyright?: string
})[];

const backend = [
    {
        name: 'Node.js',
        important: true,
        weight: 80,
        priority: 100,
        since: 2018,
        type: 'backend',
        icon: 'simple-icons:nodedotjs',
    },
];

const languages = [
    {
        name: 'Javascript',
        weight: 40,
        priority: 120,
        since: 2017,//?
        type: 'js', //?
        icon: 'simple-icons:javascript',
        copyright: 'mit'
    },
    {
        name: 'TypeScript',
        important: true,
        weight: 60,
        priority: 200,
        since: 2019,
        type: 'backend',
        icon: 'simple-icons:typescript',
        copyright: 'https://www.typescriptlang.org/branding/'

    },
    {
        name: 'PHP',
        important: true,
        weight: 70,
        priority: 800,
        since: 2015,
        type: 'backend',
        icon: 'simple-icons:php',
        copyright: 'CC-BY-SA-4.0'
    },
]

const frontend = [
    {
        name: 'React',
        important: true,
        weight: 40,
        priority: 300,
        since: 2020,
        type: 'frontend',
        icon: 'simple-icons:react',
    },
    {
        name: 'HTML',
        important: true,
        weight: 100,
        priority: 1000,
        since: 2013,
        type: 'frontend',
        icon: 'simple-icons:html5',
    },
    {
        name: 'CSS',
        important: true,
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
        important: true,
        weight: 95,
        priority: 400,
        since: 2015,
        type: 'vcs',
        icon: 'simple-icons:git',
        copyright: 'CC-BY-3.0'
    },
    {
        name: 'Github',
        weight: 40,
        priority: 410, //?
        since: 2017,//?
        type: 'php', //?
        icon: 'simple-icons:github',
        copyright: 'https://github.com/logos',
    },
    {
        name: 'Gitlab',
        weight: 40,
        priority: 420, //?
        since: 2017,//?
        type: 'php', //?
        icon: 'simple-icons:gitlab',
        copyrigth: 'https://handbook.gitlab.com/handbook/marketing/brand-and-product-marketing/brand/brand-activation/trademark-guidelines/'
    },
    {
        name: 'Bitbucket',
        weight: 40,
        priority: 430, //?
        since: 2017,//?
        type: 'php', //?
        icon: 'simple-icons:bitbucket',
        copyrigth: 'https://atlassian.design/foundations/logos'
    },
]

const containers = [
    {
        name: 'Docker',
        important: true,
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
        important: true,
        weight: 80,
        priority: 600,
        since: 2013,
        type: 'database',
    },
    {
        name: 'Influxdb',
        weight: 40,
        priority: 650,
        since: 2017,//?
        type: 'php', //?
        icon: 'simple-icons:influxdb',
        copyrigth: 'https://www.influxdata.com/brand-guidelines/'
    },
    {
        name: 'Postgresql',
        weight: 40,
        priority: 610,
        since: 2017,//?
        type: 'php', //?
        icon: 'simple-icons:postgresql',
        copyrigth: 'https://www.postgresql.org/about/policies/trademarks/'
    },
    {
        name: 'Mysql',
        weight: 40,
        priority: 620,
        since: 2017,//?
        type: 'php', //?
        icon: 'simple-icons:mysql',
        copyrigth: 'https://www.mysql.com/about/legal/logos.html'
    },
    {
        name: 'Mariadb',
        weight: 40,
        priority: 630,
        since: 2017,//?
        type: 'php', //?
        icon: 'simple-icons:mariadb',
        copyrigth: 'https://mariadb.com/about-us/logos/'
    },
    {
        name: 'Sqlite',
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
        important: true,
        weight: 80,
        priority: 700,
        since: 2013,
        type: 'os',
        icon: 'simple-icons:linux',
    },
    {
        name: 'Macos',
        important: true,
        weight: 80,
        priority: 700,
        since: 1998,
        type: 'os',
        icon: 'simple-icons:macos',
    },
]

const management = [
    {
        name: 'JIRA',
        important: true,
        weight: 80,
        priority: 900,
        since: 2015,
        type: 'management',
        icon: 'simple-icons:jira',
        copyrigth: 'https://atlassian.design/foundations/logos'
    },
]

const cloud = [
    {
        name: 'AWS',
        important: true,
        weight: 30,
        priority: 1200,
        since: 2017,
        type: 'cloud',
        icon: 'simple-icons:amazonaws', //?
    },
    {
        name: 'AWS dynamoDB',
        weight: 30,
        priority: 1200,
        since: 2017, //?
        type: 'cloud',
        icon: 'simple-icons:amazondynamodb',
        copyrigth: 'https://aws.amazon.com/architecture/icons/'
    },
    {
        name: 'AWS EC2',
        weight: 30,
        priority: 1200,
        since: 2017, //?
        type: 'cloud',
        // icon: 'simple-icons:amazonec2'
        icon: 'amazonec2',
        copyrigth: 'https://aws.amazon.com/architecture/icons/'
    },
    {
        name: 'AWS RDS',
        weight: 30,
        priority: 1200,
        since: 2017, //?
        type: 'cloud',
        // icon: 'simple-icons:amazonrds'
        icon: 'amazonrds',
        copyrigth: 'https://aws.amazon.com/architecture/icons/'
    },
    {
        name: 'AWS S3',
        weight: 30,
        priority: 1200,
        since: 2017, //?
        type: 'cloud',
        icon: 'simple-icons:amazons3',
        copyrigth: 'https://aws.amazon.com/architecture/icons/'
    },
    {
        name: 'AWS Lambda',
        weight: 30,
        priority: 1200,
        since: 2017, //?
        type: 'cloud',
        // icon: 'simple-icons:awslambda'
        icon: 'awslambda',
        copyrigth: 'https://aws.amazon.com/architecture/icons/'
    },
    {
        name: 'AWS SQS',
        weight: 30,
        priority: 1200,
        since: 2017, //?
        type: 'cloud',
        // icon: 'simple-icons:amazonsqs'
        icon: 'amazonsqs',
        copyrigth: 'https://aws.amazon.com/architecture/icons/'
    },
    {
        name: 'amazonapigateway',
        weight: 30,
        priority: 1200,
        since: 2017, //?
        type: 'cloud',
        // icon: 'simple-icons:amazonapigateway',
        icon: 'amazonapigateway',
        copyrigth: 'https://aws.amazon.com/architecture/icons/'
    },
    {
        name: 'Kubernetes',
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
        important: true,
        weight: 40,
        priority: 1300,
        since: 2020,
        type: 'testing',
        icon: 'simple-icons:jest'
    },
    {
        // ????
        name: 'Playwright',
        weight: 40,
        priority: 1300,
        since: 2020,
        type: 'testing',
        // icon: 'simple-icons:playwright'
        icon: 'playwright',
        disabled: true
    },
    {
        // ????
        name: 'Dotenv',
        weight: 40,
        priority: 1300,
        since: 2020,
        type: 'testing',
        // icon: 'simple-icons:dotenv'
        icon: 'dotenv'
    },
    {
        // ????
        name: 'Openvpn',
        weight: 40,
        priority: 9000,
        since: 2020,
        type: 'testing',
        icon: 'simple-icons:openvpn',
        copyrigth: 'https://openvpn.net/legal/'
    },
    {
        // ????
        name: 'Gnubash',
        weight: 40,
        priority: 1300,
        since: 2020,
        type: 'testing',
        icon: 'simple-icons:gnubash',
        copyrigth: 'mit'
        // icon: 'dotenv'
    },
]

const packageManagers = [
    {
        name: 'Npm',
        weight: 40,
        priority: 110,
        since: 2017,//?
        type: 'php', //?
        icon: 'simple-icons:npm',
        copyrigth: 'https://docs.npmjs.com/policies/logos-and-usage'
    },
    {
        name: 'Yarn',
        weight: 40,
        priority: 9000,
        since: 2017,//?
        type: 'php', //?
        icon: 'simple-icons:yarn',
        copyrigth: 'CC-BY-4.0'

    },
    {
        name: 'Pnpm',
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
    {
        name: 'Sentry',
        weight: 40,
        priority: 810,
        since: 2017,//?
        type: 'php', //?
        icon: 'simple-icons:sentry'
    },
]

const videos = [
    {
        name: 'Zoom',
        weight: 40,
        priority: 1400,
        since: 2017,//?
        type: 'php', //?
        icon: 'simple-icons:zoom',
        copyrigth: 'https://brand.zoom.us'
    },
    {
        name: 'Microsoftteams',
        weight: 40,
        priority: 1400,
        since: 2017,//?
        type: 'php', //?
        icon: 'simple-icons:microsoftteams',
        copyrigth: 'https://www.microsoft.com/en-us/legal/intellectualproperty/trademarks'
    },
    {
        name: 'Google Meet',
        weight: 40,
        priority: 1400,
        since: 2017,//?
        type: 'php', //?
        icon: 'simple-icons:googlemeet'
    },
    {
        name: 'Google Hangouts',
        weight: 40,
        priority: 1400,
        since: 2017,//?
        type: 'php', //?
        icon: 'simple-icons:googlehangouts'
    },
    {
        name: 'Google Fonts',
        weight: 40,
        priority: 9000,
        since: 2017,//?
        type: 'php', //?
        icon: 'simple-icons:googlefonts'
    },
    {
        name: 'Slack',
        weight: 40,
        priority: 1400,
        since: 2017,//?
        type: 'php', //?
        icon: 'simple-icons:slack',
        copyrigth: 'https://slack.com/media-kit'
    },
    {
        name: 'Discord',
        weight: 40,
        priority: 1400,
        since: 2017,//?
        type: 'php', //?
        icon: 'simple-icons:discord',
        copyrigth: 'https://discord.com/branding'

        //// nie prawdzałem tych poniżej...
    },
    {
        name: 'Skype',
        weight: 40,
        priority: 1400,
        since: 2017,//?
        type: 'php', //?
        icon: 'simple-icons:skype'
    },
    {
        name: 'WhatsApp',
        weight: 40,
        priority: 1400,
        since: 2017,//?
        type: 'php', //?
        icon: 'simple-icons:whatsapp'
    },
    {
        name: 'Telegram',
        weight: 40,
        priority: 1400,
        since: 2017,//?
        type: 'php', //?
        icon: 'simple-icons:telegram'
    },
    {
        name: 'Signal',
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
        name: 'Fastify',
        weight: 40,
        priority: 1500,
        since: 2017,//?
        type: 'php', //?
        icon: 'simple-icons:fastify'
    },
    {
        name: 'Symfony',
        weight: 40,
        priority: 820,
        since: 2017,//?
        type: 'php', //?
        icon: 'simple-icons:symfony'
    },
]

const cms = [
    {
        name: 'Wordpress',
        weight: 40,
        priority: 1600,
        since: 2017,//?
        type: 'php', //?
        icon: 'simple-icons:wordpress'
    },
]

const ide = [
    {
        name: 'Webstorm',
        weight: 40,
        priority: 1720,
        since: 2017,//?
        type: 'php', //?
        icon: 'simple-icons:webstorm'
    },
    {
        name: 'Phpstorm',
        weight: 40,
        priority: 1710,
        since: 2017,//?
        type: 'php', //?
        icon: 'simple-icons:phpstorm'
    },
    {
        name: 'IntelliJ',
        weight: 40,
        priority: 1700,
        since: 2017,//?
        type: 'php', //?
        icon: 'simple-icons:intellijidea'
    },
    {
        name: 'VisualStudio Code',
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
        name: 'Netlify',
        weight: 40,
        priority: 1800,
        since: 2017,//?
        type: 'php', //?
        icon: 'simple-icons:netlify'
    },
]

const hw = [
    {
        name: 'RaspberryPi',
        weight: 40,
        priority: 710,
        since: 2017,//?
        type: 'php', //?
        icon: 'simple-icons:raspberrypi'
    },
]

const passwordManagers = [
    {
        name: 'LastPass',
        weight: 40,
        priority: 1900,
        since: 2017,//?
        type: 'php', //?
        icon: 'simple-icons:lastpass'
    },
]

const groupWork = [
    {
        name: 'Mural',
        weight: 40,
        priority: 2000,
        since: 2017,//?
        type: 'php', //?
        // icon: 'simple-icons:mural'
        icon: 'mural'
    },
    {
        name: 'Miro',
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
        important: true
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
        // icon: 'simple-icons:rest',
        important: true
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
        name: 'Trello',
        weight: 40,
        priority: 930,
        since: 2017,//?
        type: 'api', //?
        icon: 'simple-icons:trello'
    },
    {
        name: 'Redmine',
        weight: 40,
        priority: 930,
        since: 2017,//?
        type: 'api', //?
        icon: 'simple-icons:redmine'
    },
    {
        name: 'Terminal',
        weight: 40,
        priority: 930,
        since: 2017,//?
        type: 'api', //?
        icon: 'gnometerminal'
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
        name: 'NodeRed',
        weight: 40,
        priority: 9000,
        since: 2017,//?
        type: 'api', //?
        icon: 'simple-icons:nodered'
    },
    {
        name: 'Nodemon',
        weight: 40,
        priority: 9000,
        since: 2017,//?
        type: 'api', //?
        icon: 'simple-icons:nodemon'
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
        name: 'Bamboo',
        weight: 40,
        priority: 2300,
        since: 2017,//?
        type: 'api', //?
        icon: 'simple-icons:bamboo'
    },
    {
        name: 'Github Actions',
        weight: 40,
        priority: 2300,
        since: 2017,//?
        type: 'api', //?
        icon: 'simple-icons:githubactions'
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
        name: 'Prettier',
        weight: 40,
        priority: 2400,
        since: 2017,//?
        type: 'php', //?
        icon: 'simple-icons:prettier'
    },
    {
        name: 'Figma',
        weight: 40,
        priority: 2500,
        since: 2017,//?
        type: 'php', //?
        icon: 'simple-icons:figma'
    },
    {
        name: 'Grafana',
        weight: 40,
        priority: 2600,
        since: 2017,//?
        type: 'php', //?
        icon: 'simple-icons:grafana'
    },
    {
        name: 'GraphQl',
        weight: 40,
        priority: 710,
        since: 2017,//?
        type: 'php', //?
        icon: 'simple-icons:graphql'
    },
    {
        name: 'HomeAssistant',
        weight: 40,
        priority: 2700,
        since: 2017,//?
        type: 'php', //?
        icon: 'simple-icons:homeassistant'
    },

    {
        name: 'Json',
        weight: 40,
        priority: 2800,
        since: 2017,//?
        type: 'php', //?
        icon: 'simple-icons:json'
    },
    {
        name: 'Json WebTokens',
        weight: 40,
        priority: 2900,
        since: 2017,//?
        type: 'php', //?
        icon: 'simple-icons:jsonwebtokens'
    },

    {
        name: 'Less',
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
        name: 'Lodash',
        weight: 40,
        priority: 3000,
        since: 2017,//?
        type: 'php', //?
        icon: 'simple-icons:lodash'
    },

    {
        name: 'Markdown',
        weight: 40,
        priority: 3100,
        since: 2017,//?
        type: 'php', //?
        icon: 'simple-icons:markdown'
    },

    {
        name: 'Mqtt',
        weight: 40,
        priority: 3200,
        since: 2017,//?
        type: 'php', //?
        // icon: 'simple-icons:mqtt'
        icon: 'mqtt'
    },
    {
        name: 'PhpMyAdmin',
        weight: 40,
        priority: 3300,
        since: 2017,//?
        type: 'php', //?
        icon: 'simple-icons:phpmyadmin'
    },


    {
        name: 'Postman',
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
        name: 'Redux',
        weight: 40,
        priority: 310,
        since: 2017,//?
        type: 'php', //?
        icon: 'simple-icons:redux'
    },
    {
        name: 'Redis',
        weight: 40,
        priority: 3500,
        since: 2017,//?
        type: 'php', //?
        icon: 'simple-icons:redis'
    },
    {
        name: 'Serverless',
        weight: 40,
        priority: 3600,
        since: 2017,//?
        type: 'php', //?
        icon: 'simple-icons:serverless'
    },

    {
        name: 'Swagger',
        weight: 40,
        priority: 9010,
        since: 2017,//?
        type: 'php', //?
        icon: 'simple-icons:swagger'
    },

    {
        name: 'Tailwindcss',
        weight: 40,
        priority: 1020,
        since: 2017,//?
        type: 'php', //?
        icon: 'simple-icons:tailwindcss'
    },
    {
        name: 'Tsnode',
        weight: 40,
        priority: 220,
        since: 2017,//?
        type: 'php', //?
        icon: 'simple-icons:tsnode'
    },
    {
        name: 'Let\'s Encrypt',
        weight: 40,
        priority: 9000,
        since: 2017,//?
        type: 'php', //?
        icon: 'letsencrypt'
    },
    {
        name: 'Insta360',
        weight: 40,
        priority: 9000,
        since: 2017,//?
        type: 'php', //?
        icon: 'insta360',
        copyright: 'https://www.insta360.com/press/logo'
    },
    {
        name: 'openai',
        weight: 40,
        priority: 9000,
        since: 2017,//?
        type: 'php', //?
        // icon: 'simple-icon:openai',
        icon: 'openai',
    },
    {
        name: 'openssl',
        weight: 40,
        priority: 9000,
        since: 2017,//?
        type: 'php', //?
        // icon: 'simple-icon:openssl',
        icon: 'openssl',
    },
    {
        name: 'swc',
        weight: 40,
        priority: 9000,
        since: 2017,//?
        type: 'php', //?
        // icon: 'simple-icon:swc',
        icon: 'swc',
    },
];
