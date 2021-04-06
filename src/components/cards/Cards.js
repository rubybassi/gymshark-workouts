import React from "react";
import CardItem from "./CardItem";
import "./card.css";

const Cards = ({ exercise }) => {
  return <CardItem src={exercise.female.image} name={exercise.name} />;
};

export default Cards;
