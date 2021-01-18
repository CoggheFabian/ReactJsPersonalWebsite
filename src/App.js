import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import Test from '../src/Components/test';

function App() {
  return (
      <div className="App">
        <Switch>
          <Route path="/test"  component={Test} />
        </Switch>
      </div>
  );
}

export default App;
