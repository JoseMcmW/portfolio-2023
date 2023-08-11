import React from "react";
import "tailwindcss-animated"

const Card = ({ title, frontend, backend, image, onClick }) => {
  const cardStyle = {
    backgroundImage: `url(${image})`, // Establece la imagen como fondo
    backgroundSize: "cover", // Ajusta la imagen al tamaño del contenedor
    backgroundPosition: "center", // Centra la imagen en el contenedor
  };
  return (
    <div className="w-696 h-481 opacity-100 relative rounded-xl overflow-hidden"
      onClick={onClick} // Llama a la función onClick al hacer clic en la tarjeta
      style={cardStyle}>
      <div className="w-full h-72 opacity-100  bg-gradient-to-t from-black via-transparent to-transparent text-white p-5 absolute bottom-0 flex flex-col justify-end">
        <h2 className="w-72 h-12 text-left font-bold text-white opacity-100 text-title text-4xl ml-8 mb-2">{title}</h2>
        <p className="w-610 text-xl text-left font-pharagrap tracking-normal text-white opacity-100 ml-8">
          <b>Frontend:</b> {frontend && frontend ? frontend : "N/A"}
        </p>
        <p className="w-610 text-xl text-left font-pharagrap tracking-normal text-white opacity-100 ml-8 mb-7">
          <b>Backend:</b> {backend && backend ? backend : "N/A"}
        </p>
      </div>
    </div>
  );
};

export default Card;
