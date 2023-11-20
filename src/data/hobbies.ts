const newTechnologies = [
    {
        subject: '*Insta360 X3*',
        description: 'camera owner &amp; fan - to creating videos of tours.'
    },
    {
        subject: '*Apple fan and loyal user*',
        description: ['MacBook Pro 13, iPad Pro 11, iPhone XS, Apple Watch 5 gsm, Apple AirPods Pro, used to: Macintosh Classic, LC, IIVX, Quadra 860, G3']
    },
    {
        subject: '*IoT and automation fan*',
        description: [
            'at home: &gt; 30 TUYA wifi devices, 8 RGBWW bulbs, 7 sockets, 5 switches (including 4 channel), door open sensor, power strip, NFC tags for scene control, led strip',
            'Switching scenes with a cell phone thanks to NFC tags (stuck at home, in front of the bedroom a tag activating "sleep" mode - lights off, night sockets off, at the desk tags: "work" - all lighting on, 100%, and "movie" only mood lighting on 50%, bathroom bulb goes off after 5 minutes, light after sunset dims...',
            'IoT work in Tuya system (app: SmartLife) with integration to Apple HomeKit via Homebrigde gateway (written in node.js, installed on RasprberryPi), main management of Home Assistant',
        ]
    },
    {
        subject: '*RaspberryPi 4, 8gb/256gb* (ssh connections) with your own server',
        description: [
            '*Influxdb* - collecting weather data from own external round weather sensor: https://stahoo.aqi.eco and outdoor service',
            '*Grafana* - for visualization of data series',
            '*Docker*',
            '*Home Assistant* - to manage your home remotely from anywhere in the world',
            '*Appwrite* - locally'
        ]
    },
    {
        subject: '*Internet fan since 1997 and new technologies*',
        description: 'AWS, Serverless, collecting data on the number of cars on the streets of Wroclaw by districts'
    },
    {
        subject: '*Fan of doing things \'before they were fashionable\'*, e.g. I was walrusing before it was fashionable (in 2019:)'
    },
    {
        subject: '*Fan of listening to podcasts* (mostly crime, industry and science)'
    }
];

const sport = [
    {
        subject: 'cycling - I took an active part in BikeMarathons',
    },
    {
        subject: 'hiking in the mountains, I started climbing the Crown of Polish Mountains',
    },
    {
        subject: 'walruses - before it became fashionable ie 2019 :)'
    }
];

export const hobbies = [
    {
        name: 'New technologies',
        content: newTechnologies
    },
    {
        name: 'Sport',
        content: sport
    }
];
