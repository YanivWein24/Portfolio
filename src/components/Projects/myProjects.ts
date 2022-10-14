const myProducts: { id: number, name: string, description: string, image: string[], tools: string[], links: string[] }[] = [
  {
    id: 0,
    name: "Get Jokes 😂",
    description: "A MERN stack application that provides custom jokes from Joke-API, according to the User's preferences. Users can register (also with their Google and Facebook accounts) and create a private collection of jokes. There's also an option to sign in with a 'guest' user! Also features a custom dark theme",
    image: ["https://user-images.githubusercontent.com/97472180/190004399-e3a20011-8b87-42f6-9620-aa857e623f27.png", "https://user-images.githubusercontent.com/97472180/191485163-4e68f614-d672-444d-ad17-d2603cdab483.gif"],
    tools: ["React", "Javascript-ES6", "Node.js", "Express", "MongoDB", "Redux", "Router", "Axios", "Passport.js", "OAuth2.0", "Bcrypt", "Bootstrap", "HTML5", "CSS3"],
    links: ["https://github.com/YanivWein24/Get-Jokes", "https://get-jokes.onrender.com/"]
  },
  {
    id: 1,
    name: "Chat App 💬",
    description: "Cross-platform chat Application. Users can join or create live rooms, and chat with their friends online! It supports all the classic emojis, auto notifies when users join/leave the room, and contain a dedicated screen that presents the current users in the room.",
    image: ["https://user-images.githubusercontent.com/97472180/178511493-91d1e17a-3203-4f45-b74c-eb87b28b019b.PNG","https://user-images.githubusercontent.com/97472180/191557958-d28c9db2-dc75-4e8b-a4f9-bf31f71633b3.gif"],
    tools: ["React", "Javascript-ES6", "Router", "Node.js", "Express", "Socket-IO", "HTML5", "CSS3"],
    links: ["https://github.com/YanivWein24/Chat-App-Socket-IO", "https://chat-app-faoy.onrender.com/"]
  },
  {
    id: 2,
    name: "Git Finderr  🔍",
    description: "A search engine for GitHub users! Type in a valid username and find all the info about that user. All data is coming from GitHub's REST-API. Responsive and well-suited for mobile, tablets, and desktop screens. Also features light/dark themes - using localStorage to save the user's theme for the next visit!",
    image: ["https://user-images.githubusercontent.com/97472180/195613865-a0cd5e6a-b926-4209-bbe3-7590346bf153.PNG","https://user-images.githubusercontent.com/97472180/195998154-d0aa6a65-1035-48e1-89f4-e9707b1cea64.gif"],
    tools: ["React", "Typescript", "Context", "Fetch-API" , "HTML5", "CSS3"],
    links: ["https://github.com/YanivWein24/Git-Finder", "https://git-finderr.netlify.app/"]
  },
]

export default myProducts