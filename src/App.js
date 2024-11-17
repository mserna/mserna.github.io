import React from 'react';

import './App.css';
import "./App.scss";
import { Home } from './home';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Education from './components/School';
import Footer from './components/Footer';

function App() {

  return (
    <div className="app-container bg-light">
      <div className="container pt-4 pb-4">
        <Home/>
        <Projects/>
        <Experience/>
        <Footer />
      </div>
    </div>
  );
}

export default App;
