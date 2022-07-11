import React, { FC } from 'react'
import Header from './components/Header/Header'
import About from './components/About/About'
import Skills from './components/Skills/Skills'

const App: FC = () => {
  return (
    <div className="App">
      <Header />
      <About />
      <Skills />
    </div>
  );
}

export default App;
