import React, { Component } from "react";

import "./App.css";
import HeroList from "./containers/hero-list/hero-list";
import Villains from "./containers/villains/villains";

import Footer from "./components/Footer/Footer";
import NavigationItems from "./components/Navigation/NavigationItems/NavigationItems";

import { Switch, Route } from "react-router";

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavigationItems />
        <Switch>
          <Route path="/Heroes" component={HeroList} />
          <Route path="/Villains" component={Villains} />
          <Route path="/Villains/" />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default App;
