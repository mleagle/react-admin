import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Login from "./pages/Login";
import Home from "./pages/Home";
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
          <SecurityRouter component={Home} path="/home" />
        </Switch>
      </BrowserRouter>
    )
  }
}

export default App;
