import React from "react";

const Card = ({ title, frontend,backend, image, onClick }) => {
  console.log('image :>> ', image);
  return (
    <div
      className="bg-dark text-ligth shadow-xl hover:shadow-2xl rounded-lg p-4 m-2 cursor-pointer"
      onClick={onClick} // Llama a la función onClick al hacer clic en la tarjeta
    >
      <h2 className="text-xl font-bold mb-4">{title}</h2>
      <img src={image} alt="img" className="mb-5 rounded-lg"/>
      <p className="mb-3"><b>Frontend:</b> {frontend && frontend ? frontend : "N/A"}</p>
      <p><b>Backend:</b> {backend && backend ? backend : "N/A"}</p>
    </div>
  );
};

export default Card;