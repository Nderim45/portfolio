import React from "react";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="my-14 flex flex-wrap flex-col sm:flex-row justify-between">
      <h1 className="text-xl font-semibold bg-gradient-to-r from-[#8b61d5] to-[#19a9c6] inline-block text-transparent bg-clip-text">
        Feel free to contanct me
      </h1>
      <h1 className="text-lg font-semibold">nderim258@gmail.com</h1>
      <h1 className="text-lg font-semibold">(+383)45949994</h1>
      <a
      className="hover:cursor-pointer"
        onClick={() =>
          (location.href =
            "https://www.linkedin.com/in/nderim-hasani-228368248/")
        }
      >
        <FaLinkedin size={30} />
      </a>
    </div>
  );
};

export default Footer;
