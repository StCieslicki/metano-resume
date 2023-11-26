type Links = {
    name: string;
    enabled: boolean;
    priority: number;
    since: number;
    url: string;
    ariaLabel: string;
    icon: string
}[];
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
        url: 'https://youtube.com/stahoos',
        ariaLabel: 'youtube',
        icon: 'simple-icons:youtube'
    },
];
