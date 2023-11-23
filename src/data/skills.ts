import { SkillBase } from "./types";

type Skills = (SkillBase & {
    type: string
})[];

export const skills: Skills = [
    {
        name: 'Node.js',
        weight: 80,
        priority: 10,
        since: 2018,
        type: 'backend'
    },
    {
        name: 'TypeScript',
        weight: 60,
        priority: 20,
        since: 2019,
        type: 'backend'
    },
    {
        name: 'React',
        weight: 40,
        priority: 30,
        since: 2020,
        type: 'frontend'
    },
    {
        name: 'Git',
        weight: 95,
        priority: 40,
        since: 2015,
        type: 'vcs'
    },
    {
        name: 'Docker',
        weight: 80,
        priority: 50,
        since: 2017,
        type: 'infrastructure'
    },
    {
        name: 'SQL',
        weight: 80,
        priority: 60,
        since: 2013,
        type: 'database'
    },
    {
        name: 'Linux',
        weight: 80,
        priority: 70,
        since: 2013,
        type: 'os'
    },
    {
        name: 'PHP',
        weight: 70,
        priority: 80,
        since: 2015,
        type: 'backend'
    },
    {
        name: 'JIRA',
        weight: 80,
        priority: 90,
        since: 2015,
        type: 'management'
    },
    {
        name: 'HTML & CSS',
        weight: 100,
        priority: 100,
        since: 2013,
        type: 'frontend'
    },
    {
        name: 'Astro',
        weight: 10,
        priority: 110,
        since: 2023,
        type: 'frontend'
    },
    {
        name: 'AWS',
        weight: 30,
        priority: 120,
        since: 2017,
        type: 'cloud'
    },
    {
        name: 'REST',
        weight: 70,
        priority: 130,
        since: 2017,
        type: 'api'
    },
];
