// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import style from "./landing.module.css";
import CVModal from "../CV/ShowCv";

// eslint-disable-next-line react/prop-types
const Landing = ({ tecnologies, projects, contact }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className={`flex flex-col w-screen 3xl:w-screen items-center opacity-100 bg-black ${style.landingContainer} 3xl:pb-20`}>
      <img src="../../../public/img/logo-jose.svg" alt="logo" className={`w-20 h-20 mt-16 lg:mt-28 opacity-100 3xl:mx-auto ${style.logo}`}/>
      <div className="flex flex-col md:flex-row w-full mt-28 items-center justify-center 2xl:w-930 h-32 opacity-100">
        <h1 className={`w-28 h-28 text-center tracking-normal font-bold text-7xl md:text-8xl font-title md:mr-8 3xl:mr-0 ${style.hi}`}>Hi,</h1>
        <h1 className={`3xl:w-780 h-32 text-center tracking-normal opacity-100 text-7xl md:text-8xl text-gray font-title font-bold ${style.name} relative`}>I'm Jose Centeno</h1>
      </div>
      <h1 className={`w-full 3xl:w-443 h-11 text-center 3xl:text-left tracking-normal opacity-100 text-gray text-3xl font-title mt-36 3xl:mt-24 ${style.subtitle}`}>A Full Stack Web Developer</h1>
      <div className="flex flex-row mt-24 space-x-10">
        <a href="https://www.linkedin.com/in/josemcentenoc/"><img src="../../../public/img/Icon feather-linkedin.svg" alt="linkedin" className="w-11 h-10 opacity-100 transform transition-transform hover:scale-150"/></a>
        <a href="https://github.com/JoseMcmW"><img src="../../../public/img/Icon feather-github.svg" alt="github" className="w-11 h-10 opacity-100 transform transition-transform hover:scale-150"/></a>
        <a href="https://wa.me/5491137857337"><img src="../../../public/img/ic-whatsapp.svg" alt="whatsapp" className="w-11 h-10 opacity-100 transform transition-transform hover:scale-150"/></a>
        <button onClick={openModal}>
          <img src="../../../public/img/ic-cv.svg" alt="cv" className="w-11 h-10 opacity-100 transform transition-transform hover:scale-150"/>
        </button>
      </div>
        <img src="../../../public/img/chevrons-down.svg" alt="arrow" className={`w-20 opacity-100 mt-24 mb-24 ${style.iconShadow}`}/>
      {isModalOpen && <CVModal onClose={closeModal} />}
    </div>
  );
};

export default Landing;
