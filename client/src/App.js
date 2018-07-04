import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Saved from "./pages/Saved";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";
import Jumbotron from "./components/Jumbotron";
import Footer from "./components/Footer";
import "./index.css";

const App = () => (
  <Router>
    <div class="container-fluid">
      <Jumbotron />
      <Nav />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/saved" component={Saved} />
        <Route component={NoMatch} />
      </Switch>
      <Footer />
    </div>
  </Router>
);

export default App;
