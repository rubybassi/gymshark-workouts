import React, { useState, useEffect } from "react";
import "./App.css";
import Nav from "./components/nav/Nav";
import Footer from "./components/footer/Footer";
import HeroBanner from "./components/hero-banner/HeroBanner";
import FeatureBar from "./components/featureBar/FeatureBar";
import Cards from "./components/cards/Cards";
import ModalData from "./components/modal/ModalData";

const URL =
  "https://private-922d75-recruitmenttechnicaltest.apiary-mock.com/customexercises/";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [workouts, setWorkouts] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");
  const [genderToggle, setGenderToggle] = useState("womens");
  const [showModal, setShowModal] = useState(false);
  const [selectedExercise, setSelectedExcercise] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(URL);
        const payload = await response.json();
        if (payload && Array.isArray(payload.exercises)) {
          //setWorkouts(payload.exercises.slice(0, 12) || []); just displaying 12 results but will try to add pagination as ~250 results
          setWorkouts(payload.exercises || []);
          setIsLoading(false);
        } else throw new Error("payload is empty or not an array");
      } catch (error) {
        console.log(error.message);
        setErrorMessage(
          "Sorry there has been an error fetching your workouts."
        );
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  const handleGenderSelection = (e) => setGenderToggle(e.target.value);

  const onModalToggle = () => setShowModal((prev) => !prev);

  const onViewExercise = (id) => {
    setSelectedExcercise(id);
    setShowModal(true);
  };

  return (
    <div>
      <Nav />
      <HeroBanner />
      <FeatureBar
        handleGenderSelection={handleGenderSelection}
        genderToggle={genderToggle}
      />
      <main className="container">
        {isLoading ? (
          <h2>Fecthing workouts...</h2>
        ) : (
          <>
            {errorMessage && (
              <h2 className="error-message-container">{errorMessage}</h2>
            )}
            {workouts.length > 0 ? (
              <>
                <Cards
                  workouts={workouts}
                  onViewExercise={onViewExercise}
                  genderToggle={genderToggle}
                />
                <ModalData
                  workouts={workouts}
                  showModal={showModal}
                  onModalToggle={onModalToggle}
                  genderToggle={genderToggle}
                  selectedExercise={selectedExercise}
                />
              </>
            ) : null}
          </>
        )}
      </main>
      <Footer />
    </div>
  );
}

export default App;
