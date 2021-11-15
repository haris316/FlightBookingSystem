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


  const [name,setName]=React.useState(user.user.name);
  const [contact,setContact]=React.useState(user.user.contactNumber);
  const [password,setPassword]=React.useState(user.user.password);
  return (
    <div className="ProfileContainer">
      <h3>User Details</h3>
      <div className="ProfileBox">
        <img className="Profile_picture" src={user.user.profilePicture} />
        <div className="Profile_textBox">
          <div className="Profile_subTextBox">
            <div className="Profile_desc">Full Name : </div>
            <div className="Profile_field">
            <input
              type="text"
              placeholder={name}
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
            </div>
          </div>
          <div className="Profile_subTextBox">
            <div className="Profile_desc">Password : </div>
            <div className="Profile_field">
            <input
              type="text"
              placeholder={password}
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            </div>
          </div>
          <div className="Profile_subTextBox">
            <div className="Profile_desc">Contact Number : </div>
            <div className="Profile_field">
            <input
              
              type="text"
              placeholder={contact}
              value={contact}
              onChange={(e) => {
                setContact(e.target.value);
              }}
            />
            </div>
          </div>
        </div>
      </div>
      <div className="profile_button"> Update Details </div>
      <div className="profile_button" onClick={() => setLoginUser(null)}>
        Logout
      </div>
    </div>
  );
}

export default Profile;
