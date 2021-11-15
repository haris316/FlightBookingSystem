import React from "react";
import axios from "axios";
import "./EditUser.css";

function EditUser(props) {
//   const [data, setData] = React.useState(props.user);
//   React.useEffect(() => {
//     axios.get("http://localhost:9002/api/user/getAllUsers").then((res) => {
//       console.log(res);
//       if (res.data.success === true) {
//         console.log(res.status);
//         setData(res.data.data);
//       }
//     });
//   }, []);

  return (
    <div className="editContainer">
      <h3>Edit User Details</h3>
      <div className="editBox">
        <div className="editUser_picture"> Profile Picture </div>
        <div className="editUser_textBox">
          <div className="editUser_desc">Full Name</div>
          <div className="editUser_field">Haris Zafar</div>
        </div>
      </div>
    </div>
  );
}

export default EditUser;
