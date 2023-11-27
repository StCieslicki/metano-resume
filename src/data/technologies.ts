import { EventBase } from "./types";

export const technologies: EventBase[] = [
    {
        subject: '_Job Security_',
        description: '*Corporate VPN* in some companies was OpenVpn'
    },
    {
        subject: '_Secure passwords_',
        description: [
            '*random*',
            '*unique* per service/account',
            'long *min 16 characters* (also in private life)',
            'diverse characters',
            'upper/lower case letters',
            'numbers',
            'special characters',
            '*2fa*'
        ].join(', ')
    },
    {
        subject: '_Password managers_',
        description: [
            '*LastPass* premium',
            '*Apple keychain*'
        ].join(', ')
    },
    {
        subject: '_Regular backups_',
        description: [
            '*TimeMachine*',
            ' *Rsync*'
        ].join(', ')
    },
    {
        subject: '_Drive_',
        description: 'system level *encryption*'
    },
    {
        subject: '_Project management_',
        description: [
            '*Jira* (RASP, Jit.team, Clearcode) - practice',
            '*Trello*',
            '*Asana*',
            '*Redmine* - very long time ago :)'
        ].join(', ')
    },
    {
        subject: '_Programming languages/frameworks (package manager)_',
        description: [
            '*Node.js/Typescript* (npm, yarn, pnpm)',
            '*nestjs*',
            '*express*',
            '*TypeORM*',
            '*Vanilla JS* :)',
            'Node-RED',
            '*PHP* (composer)',
            '*Symfony*',
            '*WordPress*',
            '*WPcli*'
        ].join(', ')
    },
    {
        subject: '_Databases_',
        description: [
            '*DynamoDB*',
            '*Postgresql*',
            '*MySql*',
            '*SQLite*',
            '*Redis*'
        ].join(', ')
    },
    {
        subject: '_Code Management_',
        description: [
            '*GitHub* - commercial practice',
            '*Bitbucket* - commercial practice',
            '*GitLab* - private, hobbyist'
        ].join(', ')
    },
    {
        subject: '_CD/CI_',
        description: [
            '*CircleCI*',
            '*Bamboo*',
            '*Github Actions*'
        ].join(', ')
    },
    {
        subject: '_IDE editors_',
        description: [
            '*InteliJ*',
            '*PhpStorm/WebStorm*',
            '*Visual Code Studio*',
            '*BBedit*'
        ].join(', ')
    },
    {
        subject: '_Code cleanliness_',
        description: [
            '*eslint*',
            '*prettier*',
        ].join(', ')
    },
    {
        subject: '_Log/error tracking_',
        description: [
            'ELK',
            'Sentry'
        ].join(', ')
    }, {
        subject: '_Testing_',
        description: [
            '*jest*',
            '*phpunit*'
        ].join(', ')
    },
    {
        subject: '_Containerization_',
        description: [
            '*Docker*',
            'docker-compose',
            '*Kubernetes*'
        ].join(', ')
    },
    {
        subject: '_Cloud_',
        description: [
            '*AWS* - most projects, also by cli, AWS SDK implementation, Cognito, Lambda, Api Gateway, S3, EC2, Dynamodb, Elasticache and others',
            'Azure: one project'
        ].join(', ')
    },
    {
        subject: '_Chat communication_',
        description: [
            '*Teams* - commercially',
            '*Slack* - commercially in-house',
            '*Discord*',
            '*WhatsApp*',
            '*iMessages*',
            '*Messenger*',
            '*Telegram*',
            '*Signal*'
        ].join(', ')
    },
    {
        subject: '_Video communication_',
        description: [
            '*Teams*',
            '*Google Meets* - commercially',
            '*Google Hangout*',
            '*Zoom*,' +
            '*Skype*',
            '*WhatsApp*'
        ].join(', ')
    },
    {
        subject: '_Group work_',
        description: [
            '*Mural*',
            '*Miro*',
            '*Storyboards*'
        ].join(', ')
    },
    {
        subject: '_Knowledge management_',
        description: '*Confluence*'
    },
    {
        subject: '_Incident Report Solution_',
        description: '*VictorOps* aka Splunk On-Call'
    },
    {
        subject: '_Design_',
        description: '*Figma* as a reader'
    }
];
