import React from 'react';

import "./App.scss";
import { Home } from './home';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Footer from './components/Footer';

function App() {

  return (
    <>
      <Home/>
      <Projects/>
      <Experience/>
      <Footer />
    </>
  );
}

export default App;
