import React from "react";
import axios from "axios";
import "./Users.css";

function Users() {
  const [data, setData] = React.useState([]);
  React.useEffect(() => {
    axios.get("http://localhost:9002/api/user/getAllUsers").then((res) => {
    console.log(res);  
    if (res.data.success === true) {
        console.log(res.status);
        setData(res.data.data);
      }
    });
  },[])
  const listUsers = () => {
    if (data.length>0) {
      return data.map((value) => (
        <div className="oneUser">
          <img src={value.profilePicture} className="oneUser_picture" />
          <div className="oneUser_text">{value.name}</div>
          <div className="oneUser_text">{value.email}</div>
          <div className="oneUser_text">{value.contactNumber}</div>
        </div>
      ));
    } else {
      return <>
        <div>
          <p>Loading...</p>
        </div>
      </>;
    }
  };
  return (
    <div className="allUsers">
      <div className="oneUser">
        <div className="oneUser_picture"> Profile Picture </div>
        <div className="oneUser_text">Full Name</div>
        <div className="oneUser_text">Email</div>
        <div className="oneUser_text">Contact Number</div>
      </div>
      {listUsers()}
    </div>
  );
}

export default Users;
