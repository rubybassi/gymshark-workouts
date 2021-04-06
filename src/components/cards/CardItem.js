import React from "react";
import "./card.css";

const CardItem = ({ genderToggle, name, femaleImage, maleImage, id, handlebtn }) => {

  return (
    <div className="card-item-wrapper">
      <img
        src={genderToggle === "womens" ? femaleImage : maleImage}
        alt={name}
      />
      <div className="card-item-content">
        <h3>{name}</h3>
        <button className="card-button" id={id} onClick={handlebtn}>View exercise</button>
      </div>
    </div>
  );
};

export default CardItem;
