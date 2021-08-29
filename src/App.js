import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import logo from './logo.svg';
import './App.css';
import { Home } from './home';
import { NavBar } from './navbar/nav';

function App() {

  return (
    <div className="app-container bg-light">
      <NavBar />
      <div className="container pt-4 pb-4">
        <Switch>
          <Route exact path="/" component={Home}/>
          {/* <Route exact path="/projects" component={Projects}/> */}
          {/* <Route exact path="/experience" component={Experience}/> */}
          <Redirect from="*" to="/" />
        </Switch>
      </div>
    </div>
  );
}

export default App;
