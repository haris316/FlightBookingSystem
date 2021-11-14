import React from "react";
import axios from "axios"
import "./Vendors.css";

function Vendors() {

  const [data, setData] = React.useState([]);
  React.useEffect(() => {
    axios.get("http://localhost:9002/api/com/getAllCompanies").then((res) => {
    console.log(res);  
    if (res.data.success === true) {
        console.log(res.status);
        setData(res.data.data);
      }
    });
  },[])
  const listVendors = () => {
    if(data.length>0){
    return data.map((value) => (
      <div className="oneVendor">
        <div className="oneVendor_text">{value.name}</div>
        <div className="oneVendor_text">{value.country}</div>
        <div className="oneVendor_text">{value.contactNumber}</div>
      </div>
    ));}
    else{
      return<>
        <div>
          <p>Loading...</p>
        </div>
      </>
    }
  };
  return (
    <div className="allVendors">
      <div className="oneVendor">
        <div className="oneVendor_text">Company Name</div>
        <div className="oneVendor_text">Country</div>
        <div className="oneVendor_text">Contact Number</div>
      </div>
      {listVendors()}
    </div>
  );
}

export default Vendors;
