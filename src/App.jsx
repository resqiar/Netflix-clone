import React, { useEffect } from "react";
import "./App.css";
import HomeScreen from "./screens/Home/HomeScreen";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Login from "./screens/Auth/Login";
import { auth } from "./config/Firebase";
import { login, logout, selectUser } from "./features/userSlice";
import { useDispatch, useSelector } from "react-redux";

function App() {
  const user = useSelector(state => selectUser);
  const dispatch = useDispatch()

  useEffect(() => {
    const subscribe = auth.onAuthStateChanged((user) => {
      // LISTEN TO USER LOGIN/LOGOUT
      if (user) {
        dispatch(
          login({
            uid: user.uid,
            email: user.email,
          })
        )
      } else {
        // LOGOUT
        dispatch(logout)
      }
    })

    return subscribe;
  }, [])

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
