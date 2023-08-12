import React, { useState } from "react";
import CVModal from "../CV/ShowCv";

const Footer = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="3xl:w-screen h-96 bg-black opacity-100 flex flex-col items-center">
      <div className="mt-24 flex flex-row w-1624 space-x-1040px items-center">
        <div>
          <h2 className="w-56 h-11 text-gray text-3xl font-bold opacity-100 font-title tracking-normal text-left">Jose Centeno</h2>
          <h3 className="w-308 h-8 text-left font-title tracking-normal text-gray opacity-100 text-2xl">A Full Stack Web Developer</h3>
        </div>
        <div>
        <div className="flex flex-row space-x-10 w-72 h-10 opacity-100">
          <a href="https://www.linkedin.com/in/josemcentenoc/"><img src="../../../public/img/Icon feather-linkedin.svg" alt="linkedin" className="w-11 h-10 opacity-100 transform transition-transform hover:scale-150"/></a>
          <a href="https://github.com/JoseMcmW"><img src="../../../public/img/Icon feather-github.svg" alt="github" className="w-11 h-10 opacity-100 transform transition-transform hover:scale-150"/></a>
          <a href="https://wa.me/5491137857337"><img src="../../../public/img/ic-whatsapp.svg" alt="whatsapp" className="w-11 h-10 opacity-100 transform transition-transform hover:scale-150"/></a>
          <button onClick={openModal}>
            <img src="../../../public/img/ic-cv.svg" alt="cv" className="w-11 h-10 opacity-100 transform transition-transform hover:scale-150"/>
          </button>
        </div>
        </div>
      </div>
      <div className="w-1624 h-0 border-2 border-solid border-gray opacity-100 mt-20"></div>
      <div className="w-44 h-7 text-left font-pharagrap tracking--normal text-gray opacity-100 mt-14">2023 Jose Centeno</div>
      {isModalOpen && <CVModal onClose={closeModal} />}
    </div>

  )
  }
  
  export default Footer;