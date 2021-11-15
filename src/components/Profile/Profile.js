import React from "react";
import axios from "axios";
import "./Profile.css";

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
      <div style={{ marginTop: "3rem" }} className="ProfileBox row">

        
          <div className="col s12" style={{ paddingLeft: "11.250px" }}>
            <h4>
              <b>User Details</b>
            </h4>
          </div>
        
    

        <img className="Profile_picture" src={user.user.profilePicture} alt='profile-img' />
        <div className="Profile_textBox">
          
            <div className="input-field col s12">
              <input
                onChange={(e) => setName(e.target.value)}
                value={name}
                type="text"
                name="name"
              />
              <label htmlFor="name">Full Name</label>
            </div>



            <div className="input-field col s12">
              <input
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                type="password"
                name="password"
              />
              <label htmlFor="password">Password</label>
            </div>
          
          
            <div className="input-field col s12">
              <input
                onChange={(e) => setContact(e.target.value)}
                value={contact}
                type="text"
                name="contact"
                
              />
              <label htmlFor="contact">Contact No.</label>
            </div>
          
        </div>
      </div>

      <div className="col s12" style={{ paddingLeft: "11.250px" }}>
        <button
          style={{
            width: "150px",
            borderRadius: "3px",
            letterSpacing: "1.5px",
            marginTop: "1rem",
          }}
          
          className="btn btn-large waves-effect waves-light hoverable blue accent-3"
        >
          Update
        </button>
      </div>

      <div className="col s12" style={{ paddingLeft: "11.250px" }}>      
        <button
          style={{
            width: "150px",
            borderRadius: "3px",
            letterSpacing: "1.5px",
            marginTop: "1rem",
          }}
          onClick={() => { setLoginUser(null) }}
          className="btn btn-large waves-effect waves-light hoverable blue accent-3"
        >
          Logout
        </button>
      </div>
    </div>
  );
}

export default Profile;
