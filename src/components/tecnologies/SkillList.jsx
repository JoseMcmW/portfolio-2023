import React from "react";
import buttonClose from "../../assets/img/x-circle.svg";
import style from "./tecnologies.module.css"

const SkillsList = ({ onCloseSkills, techSkills }) => {

  return (
    <div className={`w-screen 3xl:w-screen h-575 transition-all duration-300 flex justify-center align-middle ${style.skillBg}`}>
      <button onClick={onCloseSkills} className="absolute w-8 right-3 top-2 md:right-8 md:top-8 lg:right-10 lg:top-8 2xl:right-14 2xl:top-7"><img src={buttonClose} alt="close-button" /></button>
      <div className="w-11/12 2xl:w-8/12 flex flex-wrap justify-center align-middle items-center">
      {techSkills && techSkills.map((skill) => {
        return(
          <div key={skill.id} className="bg-gray p-4 mx-4 rounded-lg">
            <p className="text-black font-pharagrap text-md md:text-2xl lg:text-4xl xl:text-3xl 3xl:text-3xl">{skill}</p>
          </div>
        )
      })}
      </div>
    </div>
  );
};

export default SkillsList;
