import Header from "./components/Header/Header";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Intro from "./components/Intro/Intro";
import Timeline from "./components/Timeline/Timeline";

function App() {
  return (
    <div className="App">
      <Header />
      <Intro />
      <About />
      <Skills />
      <Timeline />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
