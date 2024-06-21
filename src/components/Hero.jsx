import React from "react";

const Hero = () => {
  return (
    <div className="w-full max-w-[1640px] mx-auto mt-20 px-10 flex flex-col-reverse lg:flex-row-reverse ">
      <div className="lg:w-[40%] mt-20 lg:mt-0 z-0 flex justify-center">
        <div className="w-[350px] h-[350px] border-2 border-[#8b61d5] absolute rounded-full right-60 lg:right-[150px] lg:top-[200px]"></div>
        <div className="w-[150px] h-[150px] absolute bg-gradient-to-t from-[#8b61d5] to-[#19a9c6] rounded-full right-36 mt-24 lg:right-[100px] lg:top-[200px]"></div>
        <div className="bg-[url('/src/assets/hero.png')] bg-cover w-[200px] h-[200px] border-2 absolute rounded-full right-52 lg:right-[130px] z-10"></div>
      </div>
      <div className="lg:w-[60%] z-100">
        <h1 className="text-5xl font-semibold bg-gradient-to-r from-[#8b61d5] to-[#19a9c6] inline-block text-transparent bg-clip-text">
          Hello, I'm Nderim Hasani
        </h1>
        <h1 className="text-5xl font-semibold">frontend developer</h1>
        <p className="mt-5">
          Dedicated Front End React Developer with 1.5 years of experience
          crafting engaging and dynamic user interfaces. Proficient in
          leveraging React.js to build responsive and interactive web
          applications that meet both user needs and business goals. Skilled in
          JavaScript, ES6+, and modern front-end development practices. Adept at
          collaborating with cross-functional teams to deliver high-quality
          solutions on time and within scope. Passionate about working in new
          projects, developing my knowledge and learn new technologies.
        </p>
        <div className="mt-10">
          <button className="px-5 py-2 rounded-full bg-gradient-to-r from-[#8b61d5] to-[#19a9c6]">
            Download CV
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
