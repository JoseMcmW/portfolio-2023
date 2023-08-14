import React, { useState } from "react";
import Card from "./Card";
import ProjectDetailModal from "./ProjectDetailModal"; // Importa el componente del modal
import { projects } from "./ProjectsJSON";

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const handleCardClick = (project) => {
    setSelectedProject(project);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };

  return (
    <div className="w-full flex flex-col 3xl:w-screen h-auto items-center bg-white opacity-100">
      <h1 className="w-10/12 lg:w-443 h-16 text-center font-title font-bold tracking-normal text-black opacity-100 text-5xl lg:text-6xl xl:text-7xl mt-16">My Projects</h1>
      <div className="w-52 h-2 bg-red p-0 rounded-md opacity-100 mt-0 lg:mt-5 xl:mt-9 2xl:mt-2.5"></div>
      <div className="w-11/12 grid gap-x-4 gap-y-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-16 mb-16 content-center">
        {projects && projects.map((project, index) => (
          <Card
            key={index}
            title={project.name}
            content={project.description}
            image={project.image}
            frontend={project.technologies.frontend.join(", ")}
            backend={project.technologies.backend.join(", ")}
            onClick={() => handleCardClick(project)} // Llama a handleCardClick con el proyecto seleccionado al hacer clic en la tarjeta
          />
        ))}
      </div>
      {selectedProject && (
        <ProjectDetailModal
          project={selectedProject}
          onClose={handleCloseModal}
        />
      )}
    </div>
  );
};

export default Projects;