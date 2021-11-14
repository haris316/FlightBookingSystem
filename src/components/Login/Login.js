import React from "react";
import "./Login.css";
import axios from 'axios';
import { useHistory } from "react-router-dom";

const Login = ({setLoginUser}) => {

  const History = useHistory();
  console.log()
  const [user, setUser] = React.useState({
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const login = () => {
    const { email, password } = user;
    if (email && password) {
      axios.post("http://localhost:9002/login", user)
      .then((res) => {
        alert(res.data.message)
        if(res.data.success === true){
          console.log(res.data)
          setLoginUser(res.data);
          History.push("/")          
        }
      });
    } else {
      alert("Please enter all details");
    }
  };

  return (
    <div className="Login">
      <div className="text">Login</div>
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
      <div className="button" onClick={login}>Login</div>
      <p className="extra">Don't have an account?</p>
      <div className="button" onClick={()=>History.push("/signup")}>Register</div>
    </div>
  );
};

export default Login;
