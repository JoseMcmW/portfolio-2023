import React from "react";

const ProjectDetailModal = ({ project, onClose }) => {
  const handleOutsideClick = (event) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  return (
    <div className="fixed top-0 left-0 w-screen h-screen flex justify-center items-center bg-opacity-50 bg-black">
      <div
        className="fixed top-0 left-0 w-screen h-screen flex justify-center items-center"
        onClick={handleOutsideClick}
      >
        <div className="bg-white rounded-lg p-4 w-8/12 h-auto overflow-auto">
          <h2 className="text-5xl font-bold mb-10 text-center">
            {project.name}
          </h2>
          <div className="flex flex-row">
            <div className="w-6/12 flex justify-center items-center mr-5">
              <img
                src={project.image}
                alt="img"
                className="max-w-full h-auto mb-4"
              />
            </div>
            <div className="w-6/12">
              <p className="mb-2">
                <b>Date:</b> {project.date.toLocaleDateString()}
              </p>
              <p className="mb-3">
                <b>Lenguage:</b> {project.language}
              </p>
              <p>{project.description}</p>
              <p className="mt-3">
                <b>Frontend:</b>{" "}
                {project.technologies.frontend &&
                project.technologies.frontend.join(", ")
                  ? project.technologies.frontend.join(", ")
                  : "N/A"}
              </p>
              <p className="mb-3">
                <b>Backend:</b>{" "}
                {project.technologies.backend &&
                project.technologies.backend.join(", ")
                  ? project.technologies.backend.join(", ")
                  : "N/A"}
              </p>
            </div>
          </div>
          <div className="mt-4 text-center">
            <button
              className="px-4 py-2 bg-black text-white rounded"
              onClick={(e) => {
                e.stopPropagation(); // Evita que el clic se propague al fondo
                onClose();
              }}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetailModal;
