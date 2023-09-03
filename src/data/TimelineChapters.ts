import TimelineChapter from "../types/TimelineChapters";
import Socialo from "../assets/media/Socialo.png";
import eBigay from "../assets/media/eBigay.png";

const TimelineChapters: TimelineChapter[] = [
  {
    id: 0,
    header: "Full-Stack Developer",
    subHeader: "Socialo",
    text: "Building an AI-based B2B SaaS digital-marketing platform for businesses and marketing agencies. Leading product development from planning to production. Working end-to-end, writing clean, reusable, and type-safe code, managing integrations (AI models, Social networks, Analytics, etc.), building CI/CD pipelines, working with SCRUM methodology.",
    date: "Jan 2023 - Present",
    type: "work",
    link: "https://www.socialo.app",
    image: Socialo,
    alt: "Socialo",
    technologies: [
      "React",
      "Node.js",
      "MongoDB",
      "Oauth",
      "TypeScript",
      "Context",
      "React-Query",
      "Formik",
      "Styled-Components",
      "Material-UI",
    ],
  },
  {
    id: 1,
    header: "Front-End Developer",
    subHeader: "eBigay",
    text: "Working in the frontend team for a marketplace web app that connects donors with those in need. Developing responsive and user-friendly UI from scratch, according to the given design in Figma. Consuming the server API and working alongside the back-end team. Working with SCRUM methodology.",
    date: "Oct 2022 - Feb 2023",
    type: "work",
    image: eBigay,
    alt: "eBigay",
    technologies: [
      "React",
      "TypeScript",
      "PWA",
      "Context",
      "React-Query",
      "Formik",
      "Styled-Components",
      "Material-UI",
    ],
  },
  {
    id: 2,
    header: "Full-Stack Development",
    subHeader: "Self study",
    text: "Learn Full-Stack web development using online courses and a lot of hands-on projects, mostly with React and Node.js.",
    date: "2022",
    type: "school",
  },
  {
    id: 3,
    header: "Control Systems Technician",
    subHeader: "Israeli Navy",
    text: "Locating and solving complex problems on large-scale naval systems. Working in a team and working with tight schedules.",
    date: "2019 - 2022",
    type: "military",
  },
  {
    id: 4,
    header: "Practical Engineering",
    subHeader: "Kziney-Yam Acre",
    text: "Electrical And Electronics Engineering.",
    date: "2017 - 2019",
    type: "school",
    scores: {
      final: "87",
      project: "97",
    },
  },
  {
    id: 5,
    header: "High-School",
    subHeader: "Kziney-Yam Acre",
    text: "Electrical And Electronics Engineering - 10 points",
    date: "2015 - 2017",
    type: "school",
    scores: {
      final: "94",
      project: "100",
    },
  },
];

export default TimelineChapters;
