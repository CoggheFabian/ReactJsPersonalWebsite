import React from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import './App.css';
import HomePage from "./Components/HomePage/HomePage";
import Skills from "./Components/Skills/skills";

function App() {
  return (
      <div className="App">
          <BrowserRouter>
              <Switch>
                  <Route path="/"  component={HomePage} exact/>
                  <Route path="/skills"  component={Skills} exact/>
              </Switch>
          </BrowserRouter>
      </div>
  );
}

export default App;
