// eslint-disable-next-line no-unused-vars
import React from "react";
import style from "./landing.module.css";

// eslint-disable-next-line react/prop-types
const Landing = ({ tecnologies, projects, contact }) => {
  return (
    <div className={`flex flex-col 3xl:w-screen 3xl:h-screen items-center opacity-100 bg-black ${style.landingContainer}`}>
      <img src="../../../public/img/logo-jose.svg" alt="logo" className={`w-20 h-20 mt-28 opacity-100 mx-auto ${style.logo}`}/>
      <div className="flex flex-row mt-56 w-930 h-32 opacity-100">
        <h1 className={`w-28 h-28 text-left tracking-normal font-bold text-8xl font-title mr-8 ${style.hi}`}>Hi,</h1>
        <h1 className={`w-780 h-32 text-left tracking-normal opacity-100 text-8xl text-gray font-title font-bold ${style.name}`}>I'm Jose Centeno</h1>
      </div>
      <h1 className={`w-443 h-11 text-left tracking-normal opacity-100 text-gray text-3xl font-title mt-12 ${style.subtitle}`}>A Full Stack Web Developer</h1>
      <div className="flex flex-row mt-36 space-x-10">
        <a href=""><img src="../../../public/img/Icon feather-linkedin.svg" alt="linkedin" className="w-11 h-10 opacity-100"/></a>
        <a href=""><img src="../../../public/img/Icon feather-github.svg" alt="github" className="w-11 h-10 opacity-100"/></a>
        <a href=""><img src="../../../public/img/ic-whatsapp.svg" alt="whatsapp" className="w-11 h-10 opacity-100"/></a>
        <a href=""><img src="../../../public/img/ic-cv.svg" alt="cv" className="w-11 h-10 opacity-100"/></a>
      </div>
      <img src="../../../public/img/chevrons-down.svg" alt="arrow" className={`w-20 opacity-100 mt-40 mb-24 ${style.iconShadow}`}/>
    </div>
  );
};

export default Landing;
