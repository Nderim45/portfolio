import React from "react";
import Navbar from "../components/shared/Navbar";
import Hero from "../components/Hero";
import Projects from "../components/Projects";

const Home = () => {
  return (
    <div className="flex-col w-full max-w-[1640px] mx-auto px-10">
      <Navbar />
      <Hero />
      <Projects />
    </div>
  );
};

export default Home;
