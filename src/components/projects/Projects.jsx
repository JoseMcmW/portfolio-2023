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
    <div className="flex flex-col 3xl:w-screen h-auto items-center bg-white opacity-100">
      <h1 className="w-443 h-24 text-center font-title font-bold tracking-normal text-black opacity-100 text-7xl mt-24">My Proyects</h1>
      <div className="w-52 h-3 bg-red p-0 rounded-md opacity-100 mt-2.5"></div>
      <div className="grid gap-x-48 gap-y-12 grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-2 mt-28 mb-28">
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