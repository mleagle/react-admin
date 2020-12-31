import React, {Component} from 'react';
import { HashRouter, Route } from 'react-router-dom'
import Home from './pages/Home';
import About from './pages/About';
import './App.scss';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <HashRouter>
        <Route exact component={Home} path="/" />
        <Route component={About} path="/about" />
      </HashRouter>
    )
  }
}

export default App;
