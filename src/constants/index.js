export const navLinks = [
  {
    id: 1,
    name: "Home",
    href: "#home",
  },
  {
    id: 2,
    name: "About",
    href: "#about",
  },
  {
    id: 3,
    name: "Work History",
    href: "#work",
  },
  {
    id: 4,
    name: "Projects",
    href: "#projects",
  },
  {
    id: 5,
    name: "Contact",
    href: "#contact",
  },
];

export const clientReviews = [
  {
    id: 1,
    name: "Emily Johnson",
    position: "Marketing Director at GreenLeaf",
    img: "assets/review1.png",
    review:
      "Working with Adrian was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.",
  },
  {
    id: 2,
    name: "Mark Rogers",
    position: "Founder of TechGear Shop",
    img: "assets/review2.png",
    review:
      "Adrian’s expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He’s a true professional! Fantastic work.",
  },
  {
    id: 3,
    name: "John Dohsas",
    position: "Project Manager at UrbanTech ",
    img: "assets/review3.png",
    review:
      "I can’t say enough good things about Adrian. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.",
  },
  {
    id: 4,
    name: "Ether Smith",
    position: "CEO of BrightStar Enterprises",
    img: "assets/review4.png",
    review:
      "Adrian was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend backend dev are top-notch.",
  },
];

export const myProjects = [
  {
    title: "Frontend eHub",
    desc: "A full-stack React e-commerce application with JWT authentication, optimized UX, and intelligent handling of backend cold starts across independent Netlify and Render deployments.",
    subdesc: [
      "Built using modern React hooks, Context API, and useReducer for scalable state management and action dispatching.",
      "Implemented complete authentication flows including user registration, login/logout with JWT, protected routes, cart, and checkout functionality.",
      "Integrated APIs using json-server-auth with frontend and backend deployed independently on Netlify and Render.",
      "Enhanced performance and UX with image loaders, skeleton screens, lazy loading, and graceful handling of slow network responses.",
      "Mitigated backend cold starts using global loaders, health-check based warm-up logic, and an uptime bot to periodically ping the backend.",
    ],
    href: "https://fehub.netlify.app",
    texture: "/textures/project/fehub.mp4",
    logo: "/assets/mylogo.png",
    logoStyle: {
      backgroundColor: "#2A1816",
      border: "0.2px solid #36201D",
      boxShadow: "0px 0px 60px 0px #AA3C304D",
    },
    spotlight: "/assets/spotlight1.png",
    tags: [
      {
        id: 1,
        name: "React.js",
        path: "/assets/react.svg",
      },
      {
        id: 2,
        name: "TailwindCSS",
        path: "assets/tailwindcss.png",
      },
      {
        id: 3,
        name: "JavaScript",
        path: "/assets/js.svg",
      },
    ],
  },
  {
    title: "React Quizzy",
    desc: "A React-based quiz application featuring difficulty-based gameplay, timed sessions, high-score tracking, and reducer-driven state management.",
    subdesc: [
      "Implemented the quiz using React hooks and useReducer to manage complex state such as questions, progress, timer, scores, and answer validation.",
      "Added difficulty-level selection with persistent high-score tracking per difficulty, along with a global session timer to increase engagement.",
      "Integrated a json-server backend deployed on Render for dynamic question fetching, with the frontend hosted on Netlify and optimized for smooth user feedback.",
    ],
    href: "https://react-quizzy.netlify.app/",
    texture: "/textures/project/react-quizzy.mp4",
    logo: "/assets/react.svg",
    tags: [
      {
        id: 1,
        name: "React.js",
        path: "/assets/react.svg",
      },
      {
        id: 2,
        name: "JavaScript",
        path: "/assets/js.svg",
      },
    ],
  },
];

export const calculateSizes = (isSmall, isMobile, isTablet) => {
  return {
    deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
    deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
    tsPosition: isSmall
      ? [4, -5, 0]
      : isMobile
      ? [4, -5, 2]
      : isTablet
      ? [5, -5, 0]
      : [9, -6, 0],
    reactLogoPosition: isSmall
      ? [3, 4, 0]
      : isMobile
      ? [4, 4, 0]
      : isTablet
      ? [5, 2, 5]
      : [10, 3, 0],
    reduxPosition: isSmall
      ? [-4, 4, 5]
      : isMobile
      ? [-3, 3, 5]
      : isTablet
      ? [-5, 2, 5]
      : [-6, 2, 5],
    jsPosition: isSmall
      ? [-5, -8, 2]
      : isMobile
      ? [-3, -5, 3]
      : isTablet
      ? [-3, -5, 5]
      : [-6, -5, 4],
  };
};

export const workExperiences = [
  {
    id: 1,
    name: "Thoughtworks",
    pos: "Senior Consultant (Frontend Developer)",
    duration: "July 2023 - Present",
    title: [
      "Built interactive map-based experiences using Google Maps Advanced Markers and implemented UI-level RBAC for secure, role-driven access.",
      "Architected scalable frontend systems using Redux Toolkit, Storybook, and proven design patterns to ensure consistency and maintainability.",
      "Improved application reliability by writing unit and integration tests using Jest and React Testing Library (RTL).",
    ],
    icon: "/assets/twlogo.svg",
    animation: "victory",
  },
  {
    id: 2,
    name: "Innominds - (Microsoft Contractor)",
    pos: "Senior Engineer (UI Dev)",
    duration: "June 2021 - June 2023",
    title: [
      "Worked on Microsoft internal platforms including MPN (Microsoft Partner Network) and APPG (App Governance), delivering scalable and secure frontend solutions",
      "Built interactive and movable data visualizations using amCharts, leveraged Material UI extensively, and handled complex asynchronous workflows",
    ],
    icon: "/assets/innominds_logo.svg",
    animation: "clapping",
  },
  {
    id: 3,
    name: "Infosys",
    pos: "Senior Engineer (UI Dev)",
    duration: "Dec 2020 - May 2021",
    title: [
      "Led migration of the application from Angular to React, setting up the project from scratch and independently managing sprint planning, delivery, and execution",
    ],
    icon: "/assets/infosys_logo.svg",
    animation: "salute",
  },
  {
    id: 4,
    name: "GGK Technologies",
    pos: "Software Engineer (UI Dev)",
    duration: "May 2018 - Nov 2020",
    title: [
      "Collaborated in a large Agile environment, supporting CI/CD pipelines for automated builds, testing, and deployments",
    ],
    icon: "/assets/ggktech_logo.svg",
    animation: "salute",
  },
];
