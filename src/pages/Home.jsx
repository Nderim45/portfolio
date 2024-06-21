import React from "react";
import Navbar from "../components/shared/Navbar";
import Hero from "../components/Hero";

const Home = () => {
  return (
    <div className="flex-col">
      <Navbar />
      <Hero />
    </div>
  );
};

export default Home;
