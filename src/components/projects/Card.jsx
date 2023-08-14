import React from "react";
import "tailwindcss-animated"

const Card = ({ title, frontend, backend, image, onClick }) => {
  const cardStyle = {
    backgroundImage: `url(${image})`, // Establece la imagen como fondo
    backgroundSize: "cover", // Ajusta la imagen al tamaño del contenedor
    backgroundPosition: "center", // Centra la imagen en el contenedor
  };
  return (
    <div className="w-full h-56 md:h-72 lg:h-72 opacity-100 relative rounded-xl overflow-hidden group "
      onClick={onClick}
      style={cardStyle}>
      <div className="w-full md:h-36 lg:opacity-0 group-hover:opacity-100 bg-gradient-to-t from-black via-transparent to-transparent text-white p-2 md:p-3 lg:p-4 absolute bottom-0 flex flex-col justify-end animated fadeInUp">
        <h2 className="w-40 md:w-56 lg:w-64 h-6 md:h-8 lg:h-8 text-left font-bold text-white text-title text-xl md:text-2xl lg:text-2xl ml-2 md:ml-3 lg:ml-4 mb-1 md:mb-2 lg:mb-2">
          {title}
        </h2>
        <p className="w-56 md:w-56 lg:w-64 text-xs md:text-base lg:text-base text-left font-pharagrap tracking-normal text-white ml-2 md:ml-3 lg:ml-4">
          <b>Frontend:</b> {frontend && frontend ? frontend : "N/A"}
        </p>
        <p className="w-56 md:w-56 lg:w-64 text-xs md:text-base lg:text-base text-left font-pharagrap tracking-normal text-white ml-2 md:ml-3 lg:ml-4 mb-2 md:mb-3 lg:mb-3">
          <b>Backend:</b> {backend && backend ? backend : "N/A"}
        </p>
      </div>
    </div>
  );
};

export default Card;
