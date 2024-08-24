import React from "react";

const Technologies = () => {
  const technologie = (name, width, level) => {
    return (
      <div className="flex flex-row mt-5">
        <div className="w-[85%]">
          <h1 className="text-xl font-semibold">{name}</h1>
                <div
                    data-aos="fade-right"
            style={{
              width: width,
              height: "20px",
              backgroundImage: "linear-gradient(to right, #8b61d5, #19a9c6)",
              borderRadius: "10px",
            }}
          ></div>
        </div>
        <div className="w-[15%] flex justify-end items-center">
          <h1>{level}</h1>
        </div>
      </div>
    );
  };

  const additionalSkills = (skill) => {
    return (
      <div data-aos="fade-up" className="flex items-center">
        <div className="w-5 h-5 rounded-full mr-3 bg-gradient-to-r from-[#8b61d5] to-[#19a9c6]" />
        <h1 className="text-xl font-semibold">{skill}</h1>
      </div>
    );
  };
  return (
    <div className="mt-20 ">
      <h1 id="technologies" className="text-3xl font-semibold">
        Technologies
      </h1>
      {technologie("HTML", "100%", "Advanced")}
      {technologie("CSS, TailwindCSS, Sass", "100%", "Advanced")}
      {technologie("JavaScript ES6", "100%", "Advanced")}
      {technologie("React.js", "100%", "Advanced")}
      {technologie("TypeScript", "65%", "Intermediate")}
      {technologie("Next.js", "65%", "Intermediate")}
      {technologie("Redux", "30%", "Basic")}
      {technologie("Express.js", "30%", "Basic")}
      {technologie("MongoDB", "30%", "Basic")}
      <h1 id="technologies" className="text-3xl font-semibold mt-10">
        Additional technologies and skills
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-5">
        {additionalSkills("Git")}
        {additionalSkills("B2 English")}
        {additionalSkills("Quick learning")}
        {additionalSkills("Teamwork")}
      </div>
    </div>
  );
};

export default Technologies;
