import React from "react"
import "./Home.css"
import { useHistory } from "react-router-dom";

const Home = ({setLoginUser,user}) => {
    const History = useHistory();
    console.log(user.user);
    return (
        <div className="Home">
            <div className="text">Home Page</div>
            <br />
            <div>Welcome {user.user.name}</div>
            <div className="button" onClick={()=>setLoginUser(null)} > Logout </div>
            <div className="button" onClick={()=>History.push("/")} >Reload Home</div>
        </div>
    )
}

export default Home