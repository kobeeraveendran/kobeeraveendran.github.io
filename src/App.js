import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Navigation, Footer, Home, About, Contact } from "./components"
import { Route, Router, Switch } from 'react-router-dom';

function App() {

  return (
    <div className = "App">
      <Router>
        <Navigation />
        <Switch>
          <Route path = "/" exact component = {() => <Home />} />
          <Route path = "/about" exact component = {() => <About />} />
          <Route path = "/contact" exact component = {() => <Contact />} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
