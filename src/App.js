import React, { useState, useEffect } from "react";
import "./App.css";
import Nav from "./components/nav/Nav";
import HeroBanner from "./components/hero-banner/HeroBanner";
import CardItem from "./components/cards/CardItem";
import FeatureBar from "./components/featureBar/FeatureBar";

const URL =
  "https://private-922d75-recruitmenttechnicaltest.apiary-mock.com/customexercises/";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [workouts, setWorkouts] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");
  const [genderToggle, setGenderToggle] = useState("womens");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(URL);
        const payload = await response.json();
        if (payload && Array.isArray(payload.exercises)) {
          setWorkouts(payload.exercises.slice(0, 10) || []); // just displaying 10 results but will try to add pagination as ~250 results
          setIsLoading(false);
        } else throw new Error("Sorry, there are no workouts to display");
      } catch (error) {
        console.log(error.message);
        setErrorMessage("Sorry there has been an error fetching data");
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  const handleGenderSelection = (e) => setGenderToggle(e.target.value);

  return (
    <div>
      <Nav />
      <HeroBanner />
      <FeatureBar handleGenderSelection={handleGenderSelection} genderToggle={genderToggle} />
      <main className="container">
        {isLoading ? (
          <h2>Please wait ...</h2>
        ) : (
          <>
            {errorMessage && <h2>{errorMessage}</h2>}
            {workouts.length > 0 ? (
              workouts.map((exercise) => (
                <CardItem
                  key={exercise.id}
                  genderToggle={genderToggle}
                  name={exercise.name}
                  femaleImage={exercise.female.image}
                  maleImage={exercise.male.image}
                />
              ))
            ) : (
              <h2>No exercises to display</h2>
            )}
          </>
        )}
      </main>
    </div>
  );
}

export default App;
