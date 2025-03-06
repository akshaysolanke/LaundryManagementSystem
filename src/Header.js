import React, { useState, useEffect } from "react";
import "./Header.css";
import { IoIosLogOut } from "react-icons/io";
import { FaUserCircle } from "react-icons/fa";
import { NavLink } from "react-router-dom";

export function Header() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // Check if the user is logged in (assuming a token or flag in localStorage)
    const userLoggedIn = localStorage.getItem("isLoggedIn") === "true";
    setIsLoggedIn(userLoggedIn);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn"); // Clear login state
    setIsLoggedIn(false);
  };

  return (
    <header>
      <div className="container">
        <div className="row">
           {/* left logo part of header */}
          <div className="col-12 col-lg-6 logo ml-4">
            <div style={{display:"flex", alignItems:"center", justifyContent:"start"}}>
            <img src="images/logo2.jpg" alt="img" />
            <h5 className="pt-2" style={{fontFamily:"All Round Gothic"}}>Rutuja Drycleaners</h5>
            </div>
          </div>
          {/* The Right portion Navlink part is started  */}
          <div className="col-12 col-lg-6">
            <div className="h_right">
              <nav className="navbar">
              <ul className="gap-4 ">
                <li>
                  <NavLink to={"/"}>Home</NavLink>
                </li>
                <li>
                  <NavLink to={"/aboutus"}>About us</NavLink>
                </li>
                <li>
                  <NavLink to={"/services"}>Services</NavLink>
                </li>
                <li>
                {isLoggedIn ? (
                      <div className="profile-dropdown">
                        <FaUserCircle className="profile-icon"/>
                        <button onClick={handleLogout} className="logout-btn"><IoIosLogOut size={20} />                        </button>
                      </div>
                    ) : (
                      <NavLink to={"/registration"}>
                        <button className="a_btn">Register/Login</button>
                      </NavLink>
                    )}
                </li>
              </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
