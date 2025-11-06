// src/components/Navbar.js
import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "../styles.css"; // make sure this file is imported

const Navbar = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token"); // check if logged in
  const user = JSON.parse(localStorage.getItem("user") || "{}");
  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    alert("Logged out successfully!");
    navigate("/login");
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <img src="/logo512.png" alt="College Logo" />
        
      </div>
      <div className="nav-items">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/colleges">Colleges</NavLink>
        <NavLink to="/reviews">Reviews</NavLink>
        

         {!token ? (
          <>
            <NavLink to="/login">Login</NavLink>
              <NavLink to="/register">Register</NavLink>
            </>
            ) : (
              <div className="user-section">
                <span className="welcome-text">Welcome, {user.name || "User"} 👋</span>
                <button className="logout-btn" onClick={handleLogout}>
                  Logout
                </button>
              </div>
          )}
      </div>
    </nav>
  );
};

export default Navbar;
