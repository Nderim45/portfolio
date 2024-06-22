import React from "react";

const ProjectCard = ({
  image,
  name,
  description,
  technologies,
  link,
  frontend,
  backend,
}) => {
  return (
    <div data-aos="fade-up" className="flex flex-col w-full border-2 border-[#8b61d5] rounded-3xl p-5">
      <img src={image} alt="" className="w-full h-[250px]" />
      <div className="mt-5">
        <h1 className="text-2xl font-semibold">{name}</h1>
        <p className="mt-3 text-slate-400">{description}</p>
      </div>
      <div className="flex flex-wrap space-y-2 justify-between mt-auto">
        <div className="flex mt-5">{technologies.map((tech) => tech)}</div>
        <button
          className="w-full bg-gradient-to-r from-[#8b61d5] border-transparent to-[#19a9c6] rounded-full py-3 hover:bg-none border-2 hover:border-[#8b61d5]"
          onClick={() => window.open(link, "_blank")}
        >
          Preview
        </button>
        <div className="w-full flex justify-between space-x-3">
          <button
            className="w-full border-2 border-[#8b61d5]  rounded-full py-3 hover:bg-gradient-to-r from-[#8b61d5] to-[#19a9c6] hover:border-2 hover:border-[#19a9c6] "
            onClick={() => window.open(frontend, "_blank")}
          >
            Frontend Code on GitHub
          </button>
          {backend && (
            <button
              className=" w-full border-2 border-[#8b61d5]  rounded-full py-3 hover:bg-gradient-to-r from-[#8b61d5] to-[#19a9c6] hover:border-2 hover:border-[#19a9c6] "
              onClick={() => window.open(backend, "_blank")}
            >
              Backend Code on GitHub
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
