import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import Nav from "./components/Nav";
import Article from './components/Article'


function App() {
  return (
    <div>
      <Router>
          <Nav/>
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route exact path="/article" component={Article}></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
