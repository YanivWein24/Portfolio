import { Project } from "../../types/Projects"

const Projects: Project[] = [
  {
    id: 0,
    name: "Get Jokes 😂",
    description: "A MERN stack application that provides custom jokes from Joke-API. Users can register (also using their Google / Meta accounts) and create their private collection of jokes.",
    image: ["https://user-images.githubusercontent.com/97472180/190004399-e3a20011-8b87-42f6-9620-aa857e623f27.png", "https://user-images.githubusercontent.com/97472180/191485163-4e68f614-d672-444d-ad17-d2603cdab483.gif"],
    tools: ["React", "Redux", "Node.js", "Express", "MongoDB", "Passport.js", "OAuth2.0", "Bcrypt", "Bootstrap"],
    links: ["https://github.com/YanivWein24/Get-Jokes", "https://get-jokes.onrender.com/"]
  },
  {
    id: 1,
    name: "Chat App 💬",
    description: "Cross-platform chat Application. Users can join or create live rooms, and chat with their friends online! It supports all the classic emojis, auto notifies when users join/leave the room, and contain a dedicated screen that presents the current users in the room.",
    image: ["https://user-images.githubusercontent.com/97472180/178511493-91d1e17a-3203-4f45-b74c-eb87b28b019b.PNG", "https://user-images.githubusercontent.com/97472180/191557958-d28c9db2-dc75-4e8b-a4f9-bf31f71633b3.gif"],
    tools: ["React", "Router", "Node.js", "Express", "Socket-IO"],
    links: ["https://github.com/YanivWein24/Chat-App-Socket-IO", "https://chat-app-faoy.onrender.com/"]
  },
  {
    id: 2,
    name: "IP Tracker 🌎",
    description: "A tracking app that locates users by their IP address. Can locate any valid IPv4 address on the globe! Using 3 different APIs: to find the local IP (optional), track its location, and display it on a live map!",
    image: ["https://user-images.githubusercontent.com/97472180/196441374-09abfd78-c2d8-4144-8d4a-1e0bca7322fa.PNG", "https://user-images.githubusercontent.com/97472180/196443648-30870f0c-fe51-4971-949a-6458f873f54f.gif"],
    tools: ["React", "Typescript", "IPify-API", "IP-Geolocation-API", "Leaflet-Map"],
    links: ["https://github.com/YanivWein24/IP-Address-Tracker", "https://react-app-ip-tracker.netlify.app"]
  },
  {
    id: 3,
    name: "Shortly 🔗",
    description: `Links shortener website. convert any valid URL to a short link, using shrtco.de API. A pixel-perfect implementation of the "Shortly URL shortening API Challenge" on frontend master.`,
    image: ["https://user-images.githubusercontent.com/97472180/205455630-d3a19391-159b-4010-9a39-9c6750c81cc8.png", "https://user-images.githubusercontent.com/97472180/205455533-faa3ca83-3043-4bf3-9de9-9ee08acef7ec.gif"],
    tools: ["React", "Typescript", "SASS", "shrtco.de API"],
    links: ["https://github.com/YanivWein24/shortly", "https://shortly-links-shortener.netlify.app/"]
  },
  {
    id: 4,
    name: "Git Finderr 🔍",
    description: "Search engine for GitHub users. All data is coming from GitHub's REST-API. Also features light/dark themes. using localStorage to memorize the user's theme for the next visit!",
    image: ["https://user-images.githubusercontent.com/97472180/196447088-96140c51-4b8f-47bc-b5d2-8413c248838a.PNG", "https://user-images.githubusercontent.com/97472180/195998154-d0aa6a65-1035-48e1-89f4-e9707b1cea64.gif"],
    tools: ["React", "Typescript", "Context", "GitHub-API"],
    links: ["https://github.com/YanivWein24/Git-Finder", "https://git-finderr.netlify.app/"]
  },
  {
    id: 5,
    name: "Portfolio 👨🏻‍💻",
    description: "My personal portfolio website, Using modern and user-friendly design. Press the 'Live Project' button to learn about recursion!",
    image: ["https://user-images.githubusercontent.com/97472180/194753848-154c5853-c190-4201-bae2-4560e97c0d84.PNG","https://user-images.githubusercontent.com/97472180/194753796-148c3e8a-6fe4-450a-9777-760785a85a3f.gif"],
    tools: ["React", "Typescript", "Bootstrap", "AOS", "EmailJS"],
    links: ["https://github.com/YanivWein24/Portfolio", "/"]
  }
]

export default Projects