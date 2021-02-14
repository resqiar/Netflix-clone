import React from "react";
import "./App.css";
import HomeScreen from "./screens/Home/HomeScreen";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Login from "./screens/Auth/Login";

function App() {
  const user = undefined;

  return (
    <div className="app">
      <Router>
        {!user ? (
          <Login />
        ) : (
          <Switch>
            <Route exact path="/">
              <HomeScreen />
            </Route>
          </Switch>
        )}
      </Router>
    </div>
  );
}

export default App;
