import React from "react";
import ProjectCard from "./ProjectCard";
import { data } from "./projectsData";

const Projects = () => {
  return (
    <div className="mt-24">
      <h1 id="projects" className="text-3xl font-semibold">
        Projects
      </h1>
      <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-5">
        {data.map((project) => (
          <ProjectCard
            image={project.image}
            name={project.name}
            description={project.description}
            technologies={project.technologies}
            link={project.link}
            frontend={project.frontend_code}
            backend={project.backend_code}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
