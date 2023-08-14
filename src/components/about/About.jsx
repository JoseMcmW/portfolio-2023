import React, { useState } from "react";
import CVModal from "../CV/ShowCv";

const About = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="flex flex-col w-screen 3xl:w-screen 3xl:h-799 items-center opacity-100 bg-gray-medium p-0">
      <h1 className="w-full 2xl:w-610 h-16 text-center font-bold font-title text-black opacity-100 tracking-normal text-5xl lg:text-6xl xl:text-7xl mt-16 3xl:mt-28">Get to Know me!</h1>
      <div className="w-52 h-2 bg-red p-0 rounded-md opacity-100 mt-0 xl:mt-9 2xl:mt-2.5"></div>
      <p className="w-10/12 2xl:w-7/12 2xl:h-44 text-center tracking-normal text-text opacity-100 text-xl lg:text-2xl xl:text-3xl 2xl:text-5xl leading-9 text-pharagrap mt-8 2xl:mt-24">The hardest part is getting started, the rest we will build together, I can help you connect with the world through your web app. I'm excited to work with you and bring your ideas to life</p>
      <p className="w-10/12 2xl:w-2/4 2xl:h-20 text-center tracking-normal text-text opacity-100 text-xl lg:text-2xl 2xl:text-5xl xl:text-3xl leading-9 text-pharagrap font-bold mt-8">Let's talk about your new project over a cup of coffee.</p>
      <button onClick={openModal} className="w-40 h-20 bg-red rounded-md opacity-100 m-20 font-pharagrap font-bold">
        <span className="w-16 h-8 mt-24 text-left text-pharagrap tracking-normal text-white opacity-100 text-xl">My Resume</span>
      </button>
      {isModalOpen && <CVModal onClose={closeModal} />}
    </div>
  )
}

export default About;