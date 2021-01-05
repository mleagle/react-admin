import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from './pages/Home';
import About from './pages/About';
import Login from "./pages/Login";
import Index from "./pages/Index";
import SecurityRouter from "./components/SecurityRouter"

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact render={() => <Login />} path="/" />
          <SecurityRouter component={Index} path="/index" />
        </Switch>
      </BrowserRouter>
    )
  }
}

export default App;
