import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Navigation } from "./components/Navigation";
import { Footer } from "./components/Footer";
import { Home } from "./components/Home";
import { About } from "./components/About";
import { Contact } from "./components/Contact";
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
