import React from "react";
import Home from "./Home";
import { Route, Switch } from "react-router";
import About from "./pages/About";
import Service from "./pages/Service";
import Contact from "./pages/Contact";

const App = () => {
  return <>
    <Switch>
      <Route exact path = "/" component= {Home}></Route>
      <Route path = "/about" component= {About}></Route>
      <Route path = "/service" component= {Service}></Route>
      <Route path = "/contact" component= {Contact}></Route>
      
    </Switch>
  </>;
};

export default App;