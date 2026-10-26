export const LINKS = {
  linkedin: "https://www.linkedin.com/in/sandip-saseendran/",
  github: "https://github.com/sandipsaseendran",
  airwave: "https://airwave-lemon.vercel.app/#home",
  tallywise: "https://tally-wise.vercel.app/login",
};

export const ROLES = [
  "Full-Stack Developer",
  "MERN Stack Engineer",
  "React Specialist",
  "API Architect",
];

export const MARQUEE_ITEMS = [
  "React.js",
  "TypeScript",
  "Node.js",
  "NestJS",
  "MongoDB",
  "Express.js",
  "Redux Toolkit",
  "Tailwind CSS",
  "REST APIs",
  "Socket.io",
  "Docker",
  "AWS EC2",
];

export interface SkillCategory {
  id: string;
  title: string;
  blurb: string;
  items: string[];
  span?: boolean;
}

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: "frontend",
    title: "Frontend Engineering",
    blurb: "Interfaces that feel fast, look sharp and scale cleanly.",
    items: [
      "React.js",
      "Redux Toolkit",
      "Tailwind CSS",
      "Shadcn UI",
      "Material UI",
      "Bootstrap",
      "EJS",
      "HTML5",
      "CSS3",
    ],
  },
  {
    id: "backend",
    title: "Backend & Architecture",
    blurb: "Secure, well-structured services built for real load.",
    items: [
      "Node.js",
      "Express.js",
      "NestJS",
      "REST APIs",
      "JWT",
      "Session Management",
      "MVC",
      "Clean Architecture",
    ],
  },
  {
    id: "languages",
    title: "Languages",
    blurb: "Typed where it counts, pragmatic everywhere else.",
    items: ["JavaScript", "TypeScript", "Data Structures & Algorithms"],
  },
  {
    id: "database",
    title: "Databases",
    blurb: "Data modelled for performance, queried with intent.",
    items: ["MongoDB (Atlas)", "Mongoose", "Aggregation Pipelines", "Schema Design"],
  },
  {
    id: "integrations",
    title: "Integrations & Services",
    blurb: "Third-party systems wired in without the duct tape.",
    items: [
      "Razorpay",
      "Stripe",
      "Cloudinary",
      "Socket.io",
      "Nodemailer",
      "Multer",
      "Passport",
      "Firebase",
    ],
  },
  {
    id: "devops",
    title: "Deployment & Tooling",
    blurb: "From local build to live URL, without the drama.",
    items: ["AWS EC2", "Render", "Vercel", "Git", "Docker", "Postman", "Figma"],
  },
];

export const SOFT_SKILLS = [
  {
    title: "Problem Solving",
    desc: "Dissecting complex full-stack problems into efficient, scalable solutions.",
  },
  {
    title: "Adaptability",
    desc: "Quick to learn and integrate new technologies in fast-paced environments.",
  },
  {
    title: "AI Integration",
    desc: "Building AI-powered tooling that automates workflows and solves real problems.",
  },
];

export interface Project {
  index: string;
  name: string;
  tagline: string;
  status: "Live" | "Latest";
  description: string;
  highlights: string[];
  tech: string[];
  live: string;
  github: string;
  image: string;
}

export const EXPERIENCE = [
  {
    type: "work" as const,
    role: "Web Development Intern",
    org: "Nestsoft Technologies",
    period: "Feb 2025 — May 2025",
    points: [
      "Built and shipped responsive, production-grade interfaces with React.js and Tailwind CSS.",
      "Integrated REST APIs, authentication flows and state management with Redux Toolkit.",
      "Collaborated with senior engineers through code reviews, Git workflows and sprint cycles.",
    ],
  },
  {
    type: "edu" as const,
    role: "Bachelor of Computer Applications",
    org: "Bangalore University",
    period: "2022 — 2025",
    points: [
      "Core computer science foundations: Data Structures & Algorithms, DBMS, Operating Systems and Networks.",
      "Specialised in full-stack web development through self-driven projects and internship work.",
    ],
  },
];

export const NAV_ITEMS = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Work", href: "#work" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];
