import React from "react";
import CardItem from "./CardItem";

const Cards = ({ workouts, onViewExercise, genderToggle }) => {
  return (
    <>
      {workouts.map((exercise) => (
        <CardItem
          key={exercise.id}
          genderToggle={genderToggle}
          name={exercise.name}
          femaleImage={exercise.female.image}
          maleImage={exercise.male.image}
          id={exercise.id}
          onViewExercise={onViewExercise}
        />
      ))}
    </>
  );
};

export default Cards;
