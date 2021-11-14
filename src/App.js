import React from "react";
import "./App.css";
import AdminHome from "./AdminScreens/AdminHome";
import Home from "./components/Home/Home";
import SignUp from "./components/SignUp/SignUp";
import Login from "./components/Login/Login"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useState } from "react";

function App() {
  const [user, setLoginUser] = useState({
    token: "123",
    role: "admin",
    user: { name: "haris" },
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
          <Route path="/signup">
            <SignUp user={user} setLoginUser={setLoginUser} />
          </Route>
          <Route path="/login">
            <Login user={user} setLoginUser={setLoginUser}/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
