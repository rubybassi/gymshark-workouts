import React from "react";
import "./card.css";

const CardItem = ({
  genderToggle,
  name,
  femaleImage,
  maleImage,
  id,
  onViewExercise,
}) => {
  return (
    <div className="card-item-wrapper">
        <img
          src={genderToggle === "womens" ? femaleImage : maleImage}
          alt={name}
        />
      <div className="card-item-content">
        <h3>{name}</h3>
        <button
          type="button"
          className="card-button"
          onClick={() => onViewExercise(id)}
        >
          View exercise
        </button>
      </div>
    </div>
  );
};

export default CardItem;
