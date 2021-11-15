import React from "react"
import "./Home.css"
import { Link } from "react-router-dom";

const Home = ({setLoginUser,user}) => {
    return (
        <div className="Home">
            <div className="text">Home Page</div>
            <br />
            <div>Welcome {user.user.name}</div>
            <div className="button" onClick={()=>setLoginUser(null)} > Logout </div>
            <Link to={`/profile/${user.user.email}`}> <div className="button"> Profile </div> </Link>
        </div>
    )
}

export default Home