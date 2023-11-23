import { details, header } from "./data";

export const addresses = {
    to: {
        name: 'Hiring Manager',
        place: 'Wrocław',
    },
    from: {
        name: header.title,
        subtitle: header.subtitle,
        address: details.address.join(', '),
        phone: details.phone,
        email: details.email
    }
};

const dictionary = {
    '[Your Name]': addresses.from.name,
    'experienced software engineer': ['experienced software engineer', 'experienced software developer', 'experienced software programmer'],
    'Node.js, React, AWS, OpenAI, and PostgreSQL': ['Node.js/Typescript, React, AWS, OpenAI, and PostgreSQL'],
    'over 10 years of experience': ['over 8 years of experience', 'many years of experience'],
}
const content = [
    `Dear ${addresses.to.name},`,
    'I am writing to express my interest in the position of experienced software engineer, utilizing technologies such as Node.js, React, AWS, OpenAI, and PostgreSQL. With over 10 years of experience in the IT industry, I am confident that my skills and experience in these areas would be a valuable asset to your team.',
    'Throughout my career, I have worked on various projects, ranging from simple web applications to complex systems. I have extensive experience in designing, developing, and maintaining web applications, as well as working with databases such as PostgreSQL. I am proficient in using Node.js, React, AWS, OpenAI, and other technologies to deliver high-quality software solutions.',
    'I am particularly interested in working for your company due to its innovative approach and commitment to continuous development. I believe that my skills and experience in working with Node.js, React, AWS, OpenAI, and PostgreSQL would enable me to contribute to the further growth of your company.',
    'I am a team player, but I am also capable of working independently. My analytical skills, problem-solving abilities, and programming experience enable me to effectively and efficiently perform my duties as a software engineer.',
    'I am excited about the opportunity to work in a dynamic environment where I can continue to develop my skills and gain new experiences. I assure you that I will work with dedication and professionalism to help your company achieve its goals.',
    'Thank you for considering my application. I am available to provide any additional information or clarification you may require.',
    'Sincerely,',
    '[Your Name]'
];

export function getContent() {
    const keys = Object.keys(dictionary);

    return content.map(item => (item.replace(keys[0], dictionary[keys[0]])));
}
