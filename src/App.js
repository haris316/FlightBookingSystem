import React from "react";
import "./App.css";
import AdminHome from "./AdminScreens/AdminHome";
import Home from "./components/Home/Home";
import SignUp from "./components/SignUp/SignUp";
import Login from "./components/Login/Login";
import Profile from "./components/Profile/Profile";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useState } from "react";

function App() {
  const [user, setLoginUser] = useState({
    token: "123",
    user: {
      contactNumber: "03352727625",
      email: "gogeto931@gmail.com",
      favorites: [],
      name: "Haris Zafar",
      password: "1234567890",
      profilePicture:
        "https://cdn2.iconfinder.com/data/icons/facebook-51/32/FACEBOOK_LINE-01-512.png",
      role: "admin",
      __v: 0,
      _id: "617d20d37bb2465c40611dc2",
    },
  });
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/admin">
            <AdminHome user={user} setLoginUser={setLoginUser} />
          </Route>
          <Route exact path="/">
            <Home user={user} setLoginUser={setLoginUser} />
          </Route>
          <Route exact path="/profile">
            <Profile user={user} setLoginUser={setLoginUser} />
          </Route>
          <Route path="/signup">
            <SignUp user={user} setLoginUser={setLoginUser} />
          </Route>
          <Route path="/login">
            <Login user={user} setLoginUser={setLoginUser} />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
