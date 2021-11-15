import React from "react";
import axios from "axios";
import "./Profile.css";
import { withRouter, RouteComponentProps } from "react-router";

function Profile({ user, setLoginUser }) {
  // const [data, setData] = React.useState({
  //   name: "default",
  //   email: "default@abc.com",
  //   contactNumber: "default",
  //   profilePicture: "",
  // });
  // const [user, setUser] = React.useState({
  //   email: "",
  // });
  // user.email = urlarr[urlarr.length - 1];

  // React.useEffect(() => {
  //   axios
  //     .post("http://localhost:9002/api/user/getByEmail", user)
  //     .then((res) => {
  //       console.log(res);
  //       if (res.data.success === true) {
  //         setData(res.data.user);
  //       }
  //     });
  // }, []);

  let tempuser = user.user;

  return (
    <div className="ProfileContainer">
      <h3>User Details</h3>
      <div className="ProfileBox">
        <img className="Profile_picture" src={tempuser.profilePicture} />
        <div className="Profile_textBox">
          <div className="Profile_subTextBox">
            <div className="Profile_desc">Full Name : </div>
            <input className="Profile_field" placeholder={tempuser.name} value={tempuser.name} onChange={(e)=>{tempuser.name=e.target.value}} />
          </div>
          <div className="Profile_subTextBox">
            <div className="Profile_desc">Password : </div>
            <div className="Profile_field">{tempuser.password}</div>
          </div>
          <div className="Profile_subTextBox">
            <div className="Profile_desc">Contact Number : </div>
            <div className="Profile_field">{tempuser.contactNumber}</div>
          </div>
        </div>
      </div>
      <div className="profile_button"> Update Details </div>
      <div className="profile_button" onClick={() => setLoginUser(null)}>Logout</div>
    </div>
  );
}

export default Profile;
