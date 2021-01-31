import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Navbar } from "./components/nav/Navbar";
import "./App.css";
import { Home } from "./pages/Home";
import Services from "./pages/Services";
import SignUp from "./pages/SignUp";

const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/my-app/" exact component={Home} />
          <Route path="/my-app/services" component={Services} />
          <Route path="/my-app/sign-up" component={SignUp} />
        </Switch>
      </Router>
    </>
  );
};

export default App;
