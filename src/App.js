import React from "react";
import "./App.css";
import Nav from "./components/nav/Nav";
import HeroBanner from "./components/hero-banner/HeroBanner";

function App() {
  return (
    <div>
      <Nav />
      <HeroBanner />
      <div className="container">
        <h1>Browse hundreds of training videos</h1>
      </div>
    </div>
  );
}

export default App;
