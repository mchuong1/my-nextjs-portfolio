import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: '', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'Matthew Chuong',
  subtitle: 'JavaScript Developer',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'IMG_4028.JPG',
  paragraphOne: 'Hello, I have been in the web development field professionally for 3 years.',
  paragraphTwo: 'I have a broad range of experiences from insurance to parking.',
  paragraphThree: 'I enjoy trying to eat at new restaurants, and traveling.',
  resume: '', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  // {
  //   id: nanoid(),
  //   img: 'Corona Virus Stats.png',
  //   title: 'Covid19 Virus Stats',
  //   info: 'A website to keep track on how the virus is affecting the world and country daily.',
  //   info2: '',
  //   url: 'https://mc-coronavirusstats.netlify.app/Country',
  //   repo: 'https://github.com/mchuong1/CoronaVirusStats', // if no repo, the button will not show up
  // },
  {
    id: nanoid(),
    img: 'dayInthelife.png',
    title: 'Day In The Life',
    info: "An application that will let you see what it's like to be someone else for the day.",
    info2: 'Made with ReactJS, NodeJS, and ExpressJS. Deployed with netlify and render',
    url: 'https://dayinthelife-mc.netlify.app/',
    repo: 'https://github.com/mchuong1/DayInTheLife', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'TipsyBarBoca.png',
    title: 'Tipsy Nailbar Boca Raton',
    info: 'A normal 5 page website to attract customers and give more presence for Tipsy Nailbar in Boca Raton',
    info2: '',
    url: 'https://tipsynailbarboca.com/',
    repo: 'https://github.com/mchuong1/tipsy-boca-raton', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'vnmiScreenshot.png',
    title: 'V&Mi Nail Salon',
    info: 'A website for a local business to showcase their services and products.',
    info2: '',
    url: 'https://www.vnminailspa.com/',
    repo: 'https://github.com/mchuong1/vminailspa',
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'mchuong1993@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    // {
    //   id: nanoid(),
    //   name: 'twitter',
    //   url: '',
    // },
    // {
    //   id: nanoid(),
    //   name: 'codepen',
    //   url: '',
    // },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/matthew-chuong-38b551157/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/mchuong1',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: true, // set to false to disable the GitHub stars/fork buttons
};
