import React from "react";
import "./button.css";

const Button = ({ children }) => {
  return (
    <a className="button" href="/#">
      {children}
    </a>
  );
};

export default Button;
