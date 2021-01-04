import React, { Component } from 'react';
import { HashRouter, Route } from 'react-router-dom'
import Home from './pages/Home';
import About from './pages/About';
import Login from "./pages/Login";
import Index from "./pages/Index";

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <HashRouter>
        <Route exact component={Home} path="/" />
        <Route component={Index} path="/index" />
        <Route component={About} path="/about" />
        <Route component={Login} path="/login" />
      </HashRouter>
    )
  }
}

export default App;
