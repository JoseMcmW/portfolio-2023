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
    <div className="flex flex-col items-center pb-20 pt-20 bg-medium">
      <h1 className="text-4xl font-bold mb-8 text-ligth bg-dark rounded">Proyects</h1>
      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 mx-4">
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