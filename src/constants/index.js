import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "UI/UX Designer",
    icon: mobile,
  },
  {
    title: "Fine Artist",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "JavaScript",
    icon: javascript,
  },
  
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },

];

const experiences = [
  {
    title: "X (ICSE)",
    company_name: "Good Shepherd School, Bagdogra",
    icon: shopify,
    iconBg: "#383E56",
    date: "2016",
    points: [
      
    ],
  },
  {
    title: "XII EPCM (CBSE)",
    company_name: "Bethany Mission School, Raiganj",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "2019",
    points: [
      
    ],
  },
  {
    title: "Bachelor of Computer Applications",
    company_name: "Siliguri Institute of Technology",
    icon: shopify,
    iconBg: "#383E56",
    date: "2019 - 2023",
    points: [
      "Inaugural Member - BCA Dev Club",
      "Developed problem-solving and analytical abilities through academic challenges.",
      "Mentored classmates and juniors in programming and web development.",
      "Collaborated with peers on group projects, fostering teamwork and communication skills."
      
    ],
  },
  {
    title: "Master of Computer Applications",
    company_name: "Siliguri Institute of Technology",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "August 2022 - Present",
    points: [
      "Refined problem-solving and analytical abilities through academic challenges.",
      "Mentored classmates and juniors in programming and web development.",
      "Collaborated with peers on group projects, fostering teamwork and communication skills.",
      "Developed a fundamental understanding of software development principles and practices.",
      "Developed a fundamental understanding of web scraping."
      
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "cryptopulse",
    description:
      "Cryptopulse is a free to use price tracker for over 120+ cryptocurrencies built using React, Axios, Tailwind CSS and a public third party API.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "axios",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/samiranghosh04/cryptopulse",
  },
  {
    name: "BBC Article Scraper",
    description:
      "This is a simple web scraper that fetches the latest articles from the BBC's website and prints an array of objects called 'articles' to the console.",
    tags: [
      {
        name: "express",
        color: "blue-text-gradient",
      },
      {
        name: "axios",
        color: "green-text-gradient",
      },
      {
        name: "cheerio",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/samiranghosh04/bbc-article-web-scraper",
  },
  {
    name: "Image Search Algo",
    description:
      "This is a simple schema and algorithm to store images in a weaviate database, then upload another image and find the closest possible match in the database. ",
    tags: [
      {
        name: "docker",
        color: "blue-text-gradient",
      },
      {
        name: "node",
        color: "green-text-gradient",
      },
      {
        name: "weaviate",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
