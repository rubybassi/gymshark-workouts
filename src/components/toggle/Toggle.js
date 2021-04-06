import React from "react";
import "./toggle.css";

const Toggle = ({ handleGenderSelection, genderToggle }) => {
  return (
      <div className="toggle-container">
        <input
          type="radio"
          id="radio-one"
          value="mens"
          checked={genderToggle === "mens"}
          onChange={handleGenderSelection}
        />
        <label htmlFor="radio-one">Mens</label>
        <input
          type="radio"
          id="radio-two"
          value="womens"
          checked={genderToggle === "womens"}
          onChange={handleGenderSelection}
        />
        <label htmlFor="radio-two">Womens</label>
      </div>
  );
};

export default Toggle;
