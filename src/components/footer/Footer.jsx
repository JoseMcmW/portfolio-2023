import React, { useState } from "react";
import CVModal from "../CV/ShowCv";
import linkedin from "../../assets/img/Icon feather-linkedin.svg";
import github from "../../assets/img/Icon feather-github.svg";
import whatsap from "../../assets/img/ic-whatsapp.svg";
import cv from "../../assets/img/ic-cv.svg"

const Footer = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="w-screen 3xl:w-screen lg:h-96 bg-black opacity-100 flex flex-col items-center">
      <div className="mt-12 lg:mt-24 flex flex-col md:flex-row lg:flex-row md:space-x-40 lg:space-x-96 xl:space-x-585 2xl:space-x-710 3xl:w-1624px 3xl:space-x-1005px items-center">
        <div>
          <h2 className="h-11 text-gray text-3xl font-bold opacity-100 font-title tracking-normal text-center md:text-left lg:text-left">Jose Centeno</h2>
          <h3 className="lg:w-308 h-8 text-center lg:text-left font-title tracking-normal text-gray opacity-100 text-2xl">A Full Stack Web Developer</h3>
        </div>
        <div>
        <div className="flex flex-row space-x-10 w-72 h-10 opacity-100 mt-10">
          <a href="https://www.linkedin.com/in/josemcentenoc/"><img src={linkedin} alt="linkedin" className="w-11 h-10 opacity-100 transform transition-transform hover:scale-150"/></a>
          <a href="https://github.com/JoseMcmW"><img src={github} alt="github" className="w-11 h-10 opacity-100 transform transition-transform hover:scale-150"/></a>
          <a href="https://wa.me/5491137857337"><img src={whatsap} alt="whatsapp" className="w-11 h-10 opacity-100 transform transition-transform hover:scale-150"/></a>
          <button onClick={openModal}>
            <img src={cv} alt="cv" className="w-11 h-10 opacity-100 transform transition-transform hover:scale-150"/>
          </button>
        </div>
        </div>
      </div>
      <div className="w-9/12 h-1 border-2 border-solid border-gray opacity-100 mt-10 lg:mt-10 "></div>
      <div className="lg:w-44 h-7 text-left font-pharagrap tracking-normal text-gray opacity-100 mt-7 mb-7">2023 Jose Centeno</div>
      {isModalOpen && <CVModal onClose={closeModal} />}
    </div>

  )
  }

  export default Footer;