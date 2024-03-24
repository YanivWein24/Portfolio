import TimelineChapter from "../types/TimelineChapters";
import Socialo from "../assets/media/Socialo.jpg";
import eBigay from "../assets/media/eBigay.jpg";
import Productive from "../assets/media/Productive.jpg";

const TimelineChapters: TimelineChapter[] = [
  {
    header: "CRM Developer",
    subHeader: "Productive Software",
    text: "Building custom CRM systems tailored to diverse clients, ranging from small businesses to large companies. Utilizing platforms such as Salesforce and Monday.com for CRM functionalities, alongside Make (Integromat) for automation and API integrations. Leading the development process from the initial characterization stage through to production, and working in an agile environment.",
    date: "Dec 2023 - Present",
    type: "work",
    link: "https://productive.co.il",
    image: Productive,
    technologies: ["Salesforce", "Monday", "Make", "Automation", "Jira"],
  },
  {
    header: "Front-End Developer",
    subHeader: "Fluffy Finder",
    text: "Joining the frontend team to continue a Work-In-Progress centralized system for reporting lost/found pets that use AI and algorithms to match between reports. Improving and refactoring the existing user interface, adding new features, integrating with the backend API and analytics providers, working alongside other development teams, designers, QA and a product manager.",
    date: "Oct 2023 - Present",
    type: "work",
    link: "https://fluffyfinder.org/",
    image:
      "https://github.com/YanivWein24/Portfolio/assets/97472180/56cc72d9-dc78-48d2-b34d-052e1c985d40",
    technologies: [
      "React",
      "TypeScript",
      "Context",
      "Material-UI",
      "Auth0",
      "PWA",
    ],
  },
  {
    header: "Full-Stack Developer",
    subHeader: "Socialo",
    text: "Building an AI-based B2B SaaS digital-marketing platform for businesses and marketing agencies. Leading product development from planning to production. Working end-to-end, writing clean, reusable, and type-safe code, managing integrations (AI models, Social networks, Analytics, etc.), building CI/CD pipelines, working with SCRUM methodology.",
    date: "Jan 2023 - Sep 2023",
    type: "work",
    link: "https://www.socialo.app",
    image: Socialo,
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
    header: "Front-End Developer",
    subHeader: "eBigay",
    text: "Working in the frontend team for a marketplace web app that connects donors with those in need. Developing responsive and user-friendly UI from scratch, according to the given design in Figma. Consuming the server API and working alongside the back-end team. Working with SCRUM methodology.",
    date: "Oct 2022 - Feb 2023",
    type: "work",
    image: eBigay,
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
    header: "Full-Stack Development",
    subHeader: "Self study",
    text: "Learn Full-Stack web development using online courses and a lot of hands-on projects, mostly with React and Node.js.",
    date: "2022",
    type: "school",
  },
  {
    header: "Control Systems Technician",
    subHeader: "Israeli Navy",
    text: "Locating and solving complex problems on large-scale naval systems. Working in a team and working with tight schedules.",
    date: "2019 - 2022",
    type: "military",
  },
  {
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
