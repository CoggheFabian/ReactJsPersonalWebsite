import React from "react";
import { Route, Switch} from "react-router-dom";
import './App.css';
import HomePage from "./Components/HomePage/HomePage";

function App() {
  return (
      <div className="App">
        <Switch>
          <Route path="/"  component={HomePage} />
        </Switch>
      </div>
  );
}

export default App;
