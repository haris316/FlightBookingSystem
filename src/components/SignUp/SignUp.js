import React, { useState } from "react";
import "./SignUp.css";
import axios from "axios";
import { useHistory } from "react-router-dom";

const SignUp = () => {
  const History = useHistory();

  const [user, setUser] = React.useState({
    name: "",
    email: "",
    password: "",
    repassword: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const register = () => {
    const { name, email, password, repassword } = user;
    if (name && email && password && repassword) {
      if (email.includes(".com")) {
        if (password === repassword)
          axios.post("http://localhost:9002/signup", user).then((res) => {
            alert(res.data.message);
            if (res.data.success === true) {
              History.push("/");
            }
          });
        else {
          alert("Passwords do not match");
        }
      } else {
        alert("Enter Valid Email");
      }
    } else {
      alert("Please enter all details");
    }
  };

  return (
    <div className="SignUp">
      <div className="text">Sign Up</div>
      <input
        type="text"
        name="name"
        value={user.name}
        onChange={handleChange}
        placeholder="Name"
      ></input>
      <input
        type="text"
        name="email"
        value={user.email}
        onChange={handleChange}
        placeholder="Email"
      ></input>
      <input
        type="password"
        name="password"
        value={user.password}
        onChange={handleChange}
        placeholder="Password"
      ></input>
      <input
        type="password"
        name="repassword"
        value={user.repassword}
        onChange={handleChange}
        placeholder="Re-enter Password"
      ></input>
      <div className="button" onClick={register}>
        Register
      </div>
      <div className="button" onClick={() => History.push("/login")}>
        Back to Login
      </div>
    </div>
  );
};

export default SignUp;
