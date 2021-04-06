import React from "react";
import "./button.css";

const Button = ({ children }) => {
  return (
    <a className="button" href="/#featured">
      {children}
    </a>
  );
};

export default Button;
