import React, { Component } from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import store from "./store";
import Navbar from "./components/Navabr";
import Homepage from "./Page/Homepage";
import PlayerStats from "./Page/PlayerStats";
import Test from "./components/Test/test";
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <Router>
            <Navbar />
            <Switch>
              <Route exact path="/" component={Homepage} />
              <Route exact path="/player" component={PlayerStats} />
            </Switch>
          </Router>
        </div>
      </Provider>
    );
  }
}

export default App;
