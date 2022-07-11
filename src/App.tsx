import React, { FC } from 'react'
import Header from './components/Header/Header'
import About from './components/About/About'
import Skills from './components/Skills/Skills'
import Projects from './components/Projects/Projects'

const App: FC = () => {
  return (
    <div className="App">
      <Header />
      <About />
      <Skills />
      <Projects />
    </div>
  );
}

export default App;
