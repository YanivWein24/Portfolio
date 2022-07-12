
const myProducts: { id: number, name: string, description: string, image: string, tools: string[], links: string[] }[] = [
    {
        id: 0,
        name: "Get Jokes",
        description: "A MERN stack application that provides custom jokes from joke-api. Users can register (also with their Google and Facebook accounts) and create a private collection of jokes.",
        image: "https://user-images.githubusercontent.com/97472180/175826891-93e84b82-8e03-41a6-ab40-94ed4fe289a3.png",
        tools: ["React", "Javascript-ES6", "Express", "Node.js", "MongoDB", "Axios", "Context-API", "Passport.js", "OAuth2.0", "Bcrypt", "Bootstrap", "HTML5", "CSS3"],
        links: ["https://github.com/YanivWein24/Get-Jokes", "https://get-jokes-gen.herokuapp.com/"]
    },
    {
        id: 1,
        name: "Chat App",
        description: "A live chat application built with 'Socket-IO'. Users can create and enter live rooms and chat with other users online.",
        image: "https://user-images.githubusercontent.com/97472180/178511493-91d1e17a-3203-4f45-b74c-eb87b28b019b.PNG",
        tools: ["React", "Javascript-ES6", "Node.js", "Socket-io", "HTML5", "CSS3"],
        links: ["https://github.com/YanivWein24/Chat-App-Socket-IO", "https://socket-io-messenger.herokuapp.com/"]
    },
    {
        id: 2,
        name: "Portfolio",
        description: "Fully responsive portfolio website, built mostly using React and Bootstrap. Press the 'Live Project' button to learn about recursion!",
        image: "https://user-images.githubusercontent.com/97472180/178359824-7ee68cce-b847-4e15-ade8-e4e12bffe2b6.png",
        tools: ["React", "Typescript", "Bootstrap", "HTML5", "CSS3"],
        links: ["https://github.com/YanivWein24/Portfolio", "/"]
    }
]

export default myProducts