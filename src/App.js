import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import './App.css';
import { Home } from './home';
import Experience from './components/Experience';
import Projects from './components/Projects';
import { NavBar } from './navbar/nav';

function App() {

  return (
    <div className="app-container bg-light">
      <NavBar />
      <div className="container pt-4 pb-4">
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/experience" component={Experience} />
          <Route exact path="/projects" component={Projects} />
          <Redirect from="*" to="/" />
        </Switch>
      </div>
    </div>
  );
}

export default App;
