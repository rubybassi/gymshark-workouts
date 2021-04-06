import React from "react";
import "./card.css";

const CardItem = ({ src, name }) => {
  return (
      <div className="card-item-wrapper">
        <img src={src} alt={name} />
        <div className="card-item-content card-item-text">
          <h3>{name}</h3>
          <a href="/#">View exercise</a>
        </div>
      </div>
  );
};

export default CardItem;
