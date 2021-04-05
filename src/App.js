import React from "react";
import "./App.css";
import Nav from "./components/nav/Nav";
import HeroBanner from "./components/hero-banner/HeroBanner";
import Cards from "./components/cards/Cards";

function App() {
  return (
    <div>
      <Nav />
      <HeroBanner />
      <div className="container">
        <Cards />
      </div>
    </div>
  );
}

export default App;
