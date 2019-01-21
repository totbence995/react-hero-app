import React, { Component } from "react";

import "./App.css";

import Characters from "./containers/characters/characters";
import Footer from "./components/Footer/Footer";
import NavigationItems from "./components/Navigation/NavigationItems/NavigationItems";

import { Switch, Route } from "react-router";

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavigationItems
          navItems={[
            { name: "Characters", link: "Characters" },
            { name: "Discussion", link: "Discussion" },
            { name: "History", link: "History" }
          ]}
        />
        <Switch>
          <Route exact path="/Characters" component={Characters} />
          <Route exact path="/Discussion" component={Characters} />
          <Route exact path="/History/" />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default App;
