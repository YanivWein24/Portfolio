import { Project } from "../types/Projects";

const MyProjects: Project[] = [
  {
    id: 0,
    name: "Similarity API ⚖️",
    description:
      "A Full-Stack Next.js project, containing a rate-limited API in the backend and a user dashboard with documentation in the frontend. The API receives 2 pieces of text and returns a number between 0-1, representing their similarity.",
    image: [
      "https://user-images.githubusercontent.com/97472180/232338288-338c4f62-600e-438f-850c-f58a1f93f362.png",
      "https://user-images.githubusercontent.com/97472180/232347078-333578bd-e49e-4e48-bcfe-238b0266198f.gif",
    ],
    tools: ["Next.js", "TypeScript", "Next-auth", "Prisma", "Redis"],
    links: [
      "https://github.com/YanivWein24/Similarity-API-Next.js",
      "https://similarity-api-next.vercel.app",
    ],
  },
  {
    id: 1,
    name: "Post It 🔥",
    description:
      "Full-Stack social media application built with Next.js. Users can sign up and authenticate with Google or GitHub to start sharing and commenting on posts.",
    image: [
      "https://user-images.githubusercontent.com/97472180/230383665-d73d4364-c24a-4ecd-b2d8-a5ecfdda23ef.png",
      "https://user-images.githubusercontent.com/97472180/230383676-ba8c0517-d6ea-4419-b3d3-8c762c5a5ae9.gif",
    ],
    tools: ["Next.js", "TypeScript", "Next-auth", "Prisma", "React-Query"],
    links: [
      "https://github.com/YanivWein24/Post-It-Next.js",
      "https://post-it-next-js.vercel.app/",
    ],
  },
  {
    id: 2,
    name: "Get Jokes 😂",
    description:
      "Full-Stack application that provides custom jokes from Joke-API. Users can register (also using their Google / Meta accounts) and create their private collection of jokes.",
    image: [
      "https://user-images.githubusercontent.com/97472180/211169796-f8472f4d-5cac-46bb-b156-8d071211a9cf.PNG",
      "https://user-images.githubusercontent.com/97472180/211169602-9b7471de-dd74-4d04-adf8-2bc5ba27a4f3.gif",
    ],
    tools: [
      "React",
      "Redux",
      "Node.js",
      "Express",
      "MongoDB",
      "Passport.js",
      "OAuth2.0",
      "Bcrypt",
      "Bootstrap",
    ],
    links: [
      "https://github.com/YanivWein24/Get-Jokes",
      "https://get-jokes.onrender.com/",
    ],
  },
  {
    id: 3,
    name: "IP Tracker 🌎",
    description:
      "Tracking app that locates users by their IP address. Can locate any valid IPv4 address on the globe! Using 3 different APIs: to find the local IP (optional), track its location, and display it on a live map!",
    image: [
      "https://user-images.githubusercontent.com/97472180/196441374-09abfd78-c2d8-4144-8d4a-1e0bca7322fa.PNG",
      "https://user-images.githubusercontent.com/97472180/196443648-30870f0c-fe51-4971-949a-6458f873f54f.gif",
    ],
    tools: [
      "React",
      "TypeScript",
      "IPify-API",
      "IP-Geolocation-API",
      "Leaflet-Map",
    ],
    links: [
      "https://github.com/YanivWein24/IP-Address-Tracker",
      "https://react-app-ip-tracker.netlify.app",
    ],
  },
  {
    id: 4,
    name: "Shortly 🔗",
    description: "Links shortener website. convert any valid URL to a short link, using shrtco.de API. A pixel-perfect implementation of the \"Shortly URL shortening API Challenge\" on frontend master.",
    image: [
      "https://user-images.githubusercontent.com/97472180/205455630-d3a19391-159b-4010-9a39-9c6750c81cc8.png",
      "https://user-images.githubusercontent.com/97472180/205455533-faa3ca83-3043-4bf3-9de9-9ee08acef7ec.gif",
    ],
    tools: ["React", "TypeScript", "SCSS", "shrtco.de API"],
    links: [
      "https://github.com/YanivWein24/shortly",
      "https://shortly-links-shortener.netlify.app/",
    ],
  },
  {
    id: 5,
    name: "Git Finderr 🔍",
    description:
      "Search engine for GitHub users. All data is coming from GitHub's REST-API. Also features light/dark themes. using localStorage to memorize the user's theme for the next visit!",
    image: [
      "https://user-images.githubusercontent.com/97472180/196447088-96140c51-4b8f-47bc-b5d2-8413c248838a.PNG",
      "https://user-images.githubusercontent.com/97472180/195998154-d0aa6a65-1035-48e1-89f4-e9707b1cea64.gif",
    ],
    tools: ["React", "TypeScript", "Context", "GitHub-API"],
    links: [
      "https://github.com/YanivWein24/Git-Finder",
      "https://git-finderr.netlify.app/",
    ],
  }
];

export default MyProjects;
