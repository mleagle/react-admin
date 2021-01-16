import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Login from "./pages/Login";
import Workspace from "./pages/Workspace";
import SecurityRouter from "./components/SecurityRouter";
import { Provider } from "react-redux";
import Store from "./store";

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      //被Provider包裹的，都能共享Store
      <Provider store={Store}>
        <BrowserRouter>
          <Switch>
            <Route exact render={() => <Login />} path="/" />
            <SecurityRouter component={Workspace} path="/workspace" />
          </Switch>
        </BrowserRouter>
      </Provider>
    )
  }
}

export default App;
