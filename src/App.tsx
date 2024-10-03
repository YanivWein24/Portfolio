import Header from "./components/Layout/Header/Header";
import Intro from "./components/Sections/Intro/Intro";
import About from "./components/Sections/About/About";
import Skills from "./components/Sections/Skills/Skills";
import Timeline from "./components/Sections/Timeline/Timeline";
import Projects from "./components/Sections/Projects/Projects";
import Contact from "./components/Sections/Contact/Contact";
import Footer from "./components/Layout/Footer/Footer";

export default function App() {
  return (
    <>
      <Header />
      <Intro />
      <About />
      <Skills />
      <Timeline />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}
