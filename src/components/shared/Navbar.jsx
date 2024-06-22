import React from "react";
import { FaLinkedin, FaFacebook } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";

const Navbar = () => {
  return (
    <div className="w-full max-w-[1640px] mx-auto flex justify-between items-center p-4">
      <div className="w-[50%] sm:w-[15%] lg:w-[10%] flex items-center">
        <h1>N.H Portfolio</h1>
      </div>
      <div className="w-[50%] lg:w-[30%] hidden sm:flex justify-between items-center">
        <h1
          className="hover:cursor-pointer"
          onClick={() => (location.href = "#projects")}
        >
          Projects
        </h1>
        <h1
          className="hover:cursor-pointer"
          onClick={() => (location.href = "#technologies")}
        >
          Technologies
        </h1>
        <h1
          className="hover:cursor-pointer"
          onClick={() => (location.href = "#about-me")}
        >
          About Me
        </h1>
      </div>
      <div className="w-[30%] sm:w-[15%] lg:w-[10%] flex justify-between items-center"></div>
    </div>
  );
};

export default Navbar;
