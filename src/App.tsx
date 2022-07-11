import React, { FC } from 'react';
// import { Container } from 'react-bootstrap'
import Header from './components/Header/Header'
import About from './components/About/About'

const App: FC = () => {
  return (
    <div className="App">
      <Header />
      <About />
    </div>
  );
}

export default App;
