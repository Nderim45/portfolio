import React from "react";
import { FaLinkedin, FaFacebook } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";

const Navbar = () => {
  return (
    <div className="w-full max-w-[1640px] mx-auto flex justify-between items-center p-4">
      <div className="w-[10%] flex items-center">
        <h1>J.D Portfolio</h1>
      </div>
      <div className="w-[30%] hidden sm:flex justify-between items-center">
        <h1>Projects</h1>
        <h1>Technologies</h1>
        <h1>About Me</h1>
      </div>
      <div className="w-[10%] flex justify-between items-center">
        <FaLinkedin fontSize={30} />
        <FaFacebook fontSize={30} />
        <RiInstagramFill fontSize={30} />
      </div>
    </div>
  );
};

export default Navbar;
