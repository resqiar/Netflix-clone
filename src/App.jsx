import React, { useEffect } from "react";
import "./App.css";
import HomeScreen from "./screens/Home/HomeScreen";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Login from "./screens/Auth/Login";
import { auth } from "./config/Firebase";
import { login, logout, selectUser } from "./features/userSlice";
import { useDispatch, useSelector } from "react-redux";
import ProfileScreen from "./screens/profile/ProfileScreen";


function App() {
  const user = useSelector(selectUser) // login || logout
  const dispatch = useDispatch()
  
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((auth) => {
      // LISTEN TO USER LOGIN/LOGOUT
      if (auth) {
        dispatch(
          login({
            uid: auth.uid,
            email: auth.email,
          })
        )
      } else {
        // LOGOUT
        dispatch(logout())
      }
    })
    
    return unsubscribe;
  }, [dispatch])

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
              <Route path="/profile">
                <ProfileScreen />
              </Route>
            </Switch>
          )}
      </Router>
    </div>
  );
}

export default App;
