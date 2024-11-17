import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import './App.css';
import "./App.scss";
import { Home } from './home';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Education from './components/School';
import { NavBar } from './navbar/nav';

function App() {

  return (
    <div className="app-container bg-light">
      <div className="container pt-4 pb-4">
        <Home/>
        <Experience/>
      </div>
    </div>
  );
}

export default App;
