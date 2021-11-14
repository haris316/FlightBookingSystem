import React from "react";
import "./AdminHome.css"
import Users from "./AdminComponents/Users/Users"
import Vendors from "./AdminComponents/Vendors/Vendors"
import { Link } from "react-router-dom";
function AdminHome() {
    return (
      <>
        <div className="adminhome_container">
          <div className="sidebar">
          <h2>Admin Dashboard</h2>
            <Link to="/admin">
            <div className="sidebar_object">
              <span>Home</span>
            </div>
            </Link>
            <Link to="/admin">
            <div className="sidebar_object">
              <span>Vendors</span>
            </div>
            </Link>
            <Link to="/admin">
            <div className="sidebar_object">
              <span>Users</span>
            </div>
            </Link>
          </div>
          <div className="admin_content">
            <h1>Users</h1>
            <Users/>
            <h1>Vendors</h1>
            <Vendors/>
          </div>
        </div>
      </>
    );
}

export default AdminHome;
