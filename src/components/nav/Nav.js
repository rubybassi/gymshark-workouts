import React from "react";
import "./nav.css";
import Logo from "../../assets/logo.svg";

const Nav = () => {
  return (
    <nav className="nav-container">
      <div className="nav-logo">
        <img src={Logo} alt="gymshark logo"/>
      </div>
    </nav>
  );
};

export default Nav;
