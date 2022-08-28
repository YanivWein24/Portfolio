const myProducts: { id: number, name: string, description: string, image: string, tools: string[], links: string[] }[] = [
    {
        id: 0,
        name: "Get Jokes",
        description: "A MERN stack application that provides custom jokes from Joke-API. Users can register (also with their Google and Facebook accounts) and create a private collection of jokes. Also features a custom dark theme! The theme preference gets saved in the user's local storage for the next time they visit.",
        image: "https://user-images.githubusercontent.com/97472180/180994846-79087300-248a-4439-8160-4f6668497bc4.png",
        tools: ["React", "Javascript-ES6", "Express", "Node.js", "MongoDB", "Redux", "Axios", "Passport.js", "OAuth2.0", "Bcrypt", "Bootstrap", "HTML5", "CSS3"],
        links: ["https://github.com/YanivWein24/Get-Jokes", "https://get-jokes-gen.herokuapp.com/"]
    },
    {
        id: 1,
        name: "Chat App",
        description: "Cross-platform chat Application. Users can join or create live rooms, and chat with their friends online! It supports all the classic emojis, auto notifies when users join/leave the room, and contain a dedicated screen that presents the current users in the room.",
        image: "https://user-images.githubusercontent.com/97472180/178511493-91d1e17a-3203-4f45-b74c-eb87b28b019b.PNG",
        tools: ["React", "Javascript-ES6", "Node.js", "Socket-IO", "HTML5", "CSS3"],
        links: ["https://github.com/YanivWein24/Chat-App-Socket-IO", "https://socket-io-messenger.herokuapp.com/"]
    },
    {
        id: 2,
        name: "Portfolio",
        description: "Fully responsive portfolio website, built using React-Typescript and Bootstrap. Using modern and user-friendly design. Press the 'Live Project' button to learn about recursion!",
        image: "https://user-images.githubusercontent.com/97472180/187076963-fc0efe71-7c53-48ac-a1ae-3e52083fca28.png",
        tools: ["React", "Typescript", "Bootstrap", "HTML5", "CSS3"],
        links: ["https://github.com/YanivWein24/Portfolio", "/"]
    }
]

export default myProducts