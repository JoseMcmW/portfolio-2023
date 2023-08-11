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
        <div className="bg-gray-medium rounded-lg p-12 w-9/12 h-3/5 overflow-auto opacity-100">
          <div className="flex flex-row mt-3">
            <div className="w-6/12 flex flex-col justify-center items-center mr-5">
              <h2 className="text-5xl font-bold text-center font-title">
                {project.name}
              </h2>
              <div className="w-40 h-2 bg-red p-0 rounded-md opacity-100 mt-3 mb-10"></div>
              <img
                src={project.image}
                alt="img"
                className="max-w-full h-auto mb-4"
              />
            </div>
            <div className="flex flex-col ml-5 justify-center w-6/12 font-pharagrap">
              <p className="mb-2">
                <b className="font-title">Date:</b> {project.date.toLocaleDateString()}w
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
              className="w-40 h-20 text-2xl bg-red text-white rounded-lg opacity-100"
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
