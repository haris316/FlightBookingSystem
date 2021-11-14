import React from "react";
import AdminHome from "../admin screens/Home";
import Home from "../components/Home/Home";
import Login from "../components/Login/Login";
import { useState } from "react";

function StartPage() {
  const [user, setLoginUser] = useState({
    token: "123",
    role: null,
    user: { name: "haris" },
  });
  if (user.token !== null && user.role === "admin")
    return <AdminHome setLoginUser={setLoginUser} user={user} />;
  else if (user.token !== null && user.role === "user")
    return <Home setLoginUser={setLoginUser} user={user} />;
  else return <Login setLoginUser={setLoginUser} />;
}

export default StartPage;
