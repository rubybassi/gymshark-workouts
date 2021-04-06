import React from "react";
import CardItem from "./CardItem";
import "./card.css";

const Cards = ({ exercise, genderToggle }) => {
  // return <CardItem {...genderToggle ? src={exercise.female.image} : src={exercise.male.image}}  name={exercise.name} />;
  return <CardItem exercise={exercise} genderToggle={genderToggle}/>;
};

export default Cards;
