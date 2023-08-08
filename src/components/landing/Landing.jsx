// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
import { RxDoubleArrowDown } from "react-icons/rx";
import { PiArrowDown } from "react-icons/pi";
import style from "./landing.module.css"

// eslint-disable-next-line react/prop-types
const Landing = ({ tecnologies, projects, contact }) => {
  //Show actual date
  const [currentDateTime, setCurrentDateTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 1000);

    // Limpieza del intervalo cuando el componente se desmonte
    return () => clearInterval(interval);
  }, []);

  const getFormattedDateTime = () => {
    const options = {
      year: "numeric",
      month: "numeric",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: true,
    };

    return new Intl.DateTimeFormat("es-ES", options).format(currentDateTime);
  };

  //Go to other component
  const handleScrollTo = (ref) => {
    if (ref && ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-black">
      <p className="absolute top-0 right-0 p-4 text-medium">{getFormattedDateTime()}</p>
      <h1 className="text-6xl text-ligth pb-5 font-title mt-12">Full Stack Web Developer</h1>
      <h2 className="text-5xl mb-10 font-title text-ligth">Jose Centeno</h2>
{/*       <h3 className="text-2xl mt-4 font-text text-white">Welcome to my portfolio</h3> */}
      <div className="flex space-x-4 mt-4 mb-10 font-text">
        <a href="#" onClick={() => handleScrollTo(tecnologies)}
        className=" rounded-3xl w-40 text-center text-white font-bold px-5 py-2 transition-all duration-300 transform hover:scale-105 focus:scale-105 shadow-inner shadow-dark hover:shadow-ligth hover:shadow-md focus:shadow-md">
          Tecnologies
        </a>
        <a href="#" onClick={() => handleScrollTo(projects)}
        className=" rounded-3xl w-40 text-center text-white font-bold px-5 py-2 transition-all duration-300 transform hover:scale-105 focus:scale-105 shadow-inner shadow-dark hover:shadow-ligth hover:shadow-md focus:shadow-md">
          Projects
        </a>
        <a href="#" onClick={() => handleScrollTo(contact)}
        className=" rounded-3xl w-40 text-center text-white font-bold px-5 py-2 transition-all duration-300 transform hover:scale-105 focus:scale-105 shadow-inner shadow-dark hover:shadow-ligth hover:shadow-md focus:shadow-md">
          Contact
        </a>
      </div>
      <div className="flex flex-col items-center mt-10">
        <h3 className="text-white font-bold">Or Scroll Down</h3>
        <p className="text-white text-4xl mt-4 font-bold">
          <PiArrowDown className={style.iconShadow}/>
          <RxDoubleArrowDown className={style.iconShadow}/>
        </p>
      </div>
    </div>
  );
};

export default Landing;
