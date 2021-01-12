import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Navigation, Projects, Footer } from "./components";

function App() {
  return (
    <div className="App">
      <Router>
        <Navigation />
        <Switch>
          <Route path="/" exact component={() => <Projects />} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
