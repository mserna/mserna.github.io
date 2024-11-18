import React from 'react';

import "./App.scss";
import { Home } from './home';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Home/>
      <Projects />
      <Experience />
      <Footer />
    </>
  );
}

export default App;
