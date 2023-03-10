import {
  python,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  git,
  chackra,
  next,
  carrent,
  jobit,
  tripguide,
  threejs,
  rn,
  kos,
  templ8,
  hertz,
  babylon,
  apollo,
  graph,
  query,
  django,
  express,
  prisma,
  socket,
  grpc
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: reactjs,
  },
  {
    title: "React Native Developer",
    icon: rn,
  },
  {
    title: "Backend Developer",
    icon: nodejs,
    icon2: python,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "React Native",
    icon: rn,
  },
  {
    name: "NextJs",
    icon: next,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Chakra ui",
    icon: chackra,
  },
  {
    name: "Graphql",
    icon: graph,
  },
  {
    name: "Apollo",
    icon: apollo,
  },
  {
    name: "React Query",
    icon: query,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "Babylon",
    icon: babylon,
  },
  {
    name: "nodejs",
    icon: nodejs,
  },
  {
    name: "express",
    icon: express,
  },
  {
    name: "socket",
    icon: socket,
  },
  {
    name: "grpc",
    icon: grpc,
  },
  {
    name: "prisma",
    icon: prisma,
  },
  {
    name: "python",
    icon: python,
  },
  {
    name: "django",
    icon: django,
  },
  {
    name: "git",
    icon: git,
  },
];


const experiences = [
  {
    title: "Full Stack Web Developer",
    company_name: "Kosmos",
    icon: kos,
    iconBg: "#000",
    date: "Jan 2021 - Mar 2022",
    points: [
      "Developing frontend applications using Next.js and Chakra UI.",
      "Manipulating 3D scenes using Babylon.js or Three.js to provide users with an immersive gaming experience.",
      "Implementing responsive design and ensuring a seamless gaming experience across desktop and mobile devices.",
      "Developing and maintaining various Node.js microservices that communicate via REST, WebSockets and gRPC protocols.",
    ],
  },
  {
    title: "React Developer",
    company_name: "Templ8",
    icon: templ8,
    iconBg: "#000",
    date: "Apr 2021 - Dec 2022",
    points: [
      "Developing and maintaining web applications using Next.js, Chackra UI and other related technologies.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "React and React Native Developer",
    company_name: "Hertz",
    icon: hertz,
    iconBg: "#fff",
    date: "Jan 2022 - Present",
    points: [
      "Developing and maintaining React.js microfrontends between different Hertz brands.",
      "Developing and maintaining React Native apps between different Hertz brands.",
      "Collaborating with cross-functional teams designers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Create unit tests using Jest and React Testing Library and E2E cypress.",
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
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
