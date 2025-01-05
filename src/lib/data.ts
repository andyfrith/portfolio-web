export type Experience = {
  id: number;
  company: ExperienceCompany;
  role: ExperienceRole;
  dates: ExperienceDates;
  summary: ExperienceSummary;
  results: ExperienceResults;
  skills: ExperienceSkills;
};

export type ExperienceCompany = {
  name: string;
  city: string;
  state: string;
  summary: string;
};

export type ExperienceRole = string;
export type ExperienceDates = string;
export type ExperienceSummary = string;
export type ExperienceResults = Array<{ id: number; summary: string }>;
export type ExperienceSkills = Array<string>;

export const experiencesData: Array<Experience> = [
  {
    id: 1,
    company: {
      name: "Optii Solutions",
      city: "Austin",
      state: "TX",
      summary: "Hotel Operations Software and Predictive Technology",
    },
    role: "Senior React Developer • Team Lead • Director",
    dates: "05.2022 - 08.2024",
    summary:
      "As Director and Team Lead, I empowered the Optii engineering organization while delivering software solutions that optimized labor and streamlined operations within hotel operations. Developed product features that empowered housekeeping, preventative maintenance teams and enhanced service delivery and internal communications.",
    results: [
      {
        id: 1,
        summary: "Agile product development strategy",
      },
      {
        id: 2,
        summary: "Hiring, coaching and mentoring of teammates",
      },
      {
        id: 3,
        summary:
          "Modernization of UI platform, including migration to React 18",
      },
      {
        id: 4,
        summary:
          "React UI development using Ant Design, Redux, Formik, Capacitor",
      },
      {
        id: 5,
        summary:
          "Microservices API development w/ Typescript, Node.js and Apollo GraphQL",
      },
    ],
    skills: [
      "Leadership",
      "Management",
      "Mentoring",
      "Project Management",
      "React",
      "TypeScript",
      "Node.js",
      "GraphQL",
      "Apollo",
      "Next.js",
      "GCP",
      "Capacitor",
      "Twilio",
      "SPA",
      "PWA",
      "Microservices",
      "iOS",
      "Nest",
      "Jest",
      "HTML",
      "CSS",
      "JavaScript",
      "Git",
      "Tailwind",
      "Drizzle",
      "Prisma",
      "Redux",
      "PostgreSQL",
      "Framer Motion",
      "Nx",
    ],
  },
  {
    id: 2,
    company: {
      name: "Avero, Inc.",
      city: "New York",
      state: "NY",
      summary: "Restaurant Operations Software",
    },
    role: "Senior React Developer • Project Lead",
    dates: "05.2018 - 03.2022",
    summary:
      "Responsible for delivering software solutions within the restaurant and hospitality space. Built customer facing web applications prioritizing a positive user experience, multi-browser compatibility, and scalability concerns.",
    results: [
      {
        id: 1,
        summary:
          "React UI development using Material UI, Formik and state management libraries; such as Redux and XState",
      },
      {
        id: 2,
        summary:
          "Microservices development w/ Typescript, Node.js and Apollo GraphQL",
      },
      {
        id: 3,
        summary:
          "Integration of 3rd party APIs- Salesforce CRM and Oracle Netsuite ERP",
      },
    ],
    skills: [
      "React",
      "TypeScript",
      "Node.js",
      "GraphQL",
      "Apollo",
      "Next.js",
      "React Native",
      "SPA",
      "Microservices",
      "Jest",
      "HTML",
      "CSS",
      "JavaScript",
      "Git",
      "Emotion",
      "Styled Components",
      "Redux",
      "XState",
      "Mongo DB",
      "PostgreSQL",
      "Motion",
    ],
  },
  {
    id: 3,
    company: {
      name: "Blue Spruce Capital",
      city: "Broomfield",
      state: "CO",
      summary: "Private Equity & Wealth Management",
    },
    role: "Senior React Developer • Full-Stack Developer",
    dates: "05.2017 - 01.2018",
    summary:
      "Led API development for the BSCC Employee Portal application. Developed highly scalable, secure backend services. Produced innovative React.js and Node.js solutions based on the NATS microservices architecture.",
    results: [
      {
        id: 1,
        summary:
          "API development for BSCC Employee Portal application using GraphQL",
      },
      {
        id: 2,
        summary:
          "Microservices development with the NATS Server messaging system",
      },
      {
        id: 3,
        summary:
          "Implementation of SSO authentication with Azure based on the SAML 2.0 protocol",
      },
    ],
    skills: [
      "React",
      "TypeScript",
      "Node.js",
      "NATS",
      "Redis",
      "GraphQL",
      "Apollo",
      "Next.js",
      "SPA",
      "Microservices",
      "Jest",
      "HTML",
      "CSS",
      "JavaScript",
      "Git",
      "Redux",
      "Mongo DB",
      "PostgreSQL",
      "SAML",
    ],
  },
  {
    id: 4,
    company: {
      name: "DarkOwl Cybersecurity",
      city: "Denver",
      state: "CO",
      summary: "Darknet Data, Threat Intelligence Software",
    },
    role: "Senior Frontend Developer • AngularJS Developer • UX Developer",
    dates: "03.2016 - 11.2016",
    summary:
      "Led the UX Strategy in problem discovery, requirements definition and prioritization for challenging startup projects. Inspired product innovation in company-wide initiatives which leveraged cybersecurity and OSINT domain expertise and customer knowledge.",
    results: [
      {
        id: 1,
        summary:
          "UX development of OWL Vision Professional Tools using AngularJS",
      },
      {
        id: 2,
        summary:
          "Integration of OWL Vision Platform with Maltego, interactive data mining, link analysis, and graphing",
      },
      {
        id: 3,
        summary:
          "Data Visualization of OWL Vision Platform data using D3 and AngularJS",
      },
    ],
    skills: [
      "UX Design",
      "Angular",
      "D3",
      "SPA",
      "Jest",
      "HTML",
      "CSS",
      "JavaScript",
      "Git",
      "Mongo DB",
      "PostgreSQL",
      "OSINT",
      "Maltego",
    ],
  },
  {
    id: 5,
    company: {
      name: "Isobar",
      city: "Denver",
      state: "CO",
      summary: "Dow Jones WSJ Subscription Software",
    },
    role: "Senior Frontend Developer • AngularJS Developer",
    dates: "10.2014 - 11.2015",
    summary:
      "Responsible for the development of the Dow Jones WSJ international subscription product. Delivered well-architected UI- a scalable, elegant, optimized, responsive design for mobile, tablet and desktop. Addressed cross-browser compatibility issues while delivering a superior User Experience.",
    results: [
      {
        id: 1,
        summary: "HTML, CSS3 and AngularJS 1.5 UI development",
      },
      {
        id: 2,
        summary: "Integration of Node.js subscription API services",
      },
      {
        id: 3,
        summary: "Implementing performance optimizations",
      },
    ],
    skills: [
      "Angular",
      "SPA",
      "Jest",
      "HTML",
      "CSS",
      "JavaScript",
      "Git",
      "Mongo DB",
    ],
  },
] as const;
