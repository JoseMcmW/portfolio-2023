import React, { useState } from "react";
import SkillsList from "./SkillList"; // Importa el componente creado
import styles from "./tecnologies.module.css"; // Importa el archivo de estilos
import "tailwindcss-animated"
import upArrow from "../../assets/img/uparrow.svg";
import downArrow from "../../assets/img/downarrows.svg";
import skillButton from "../../assets/img/skills.png"


const Tecnologies = ({ techSkills }) => {
  const [isSkillsVisible, setIsSkillsVisible] = useState(false);

  const handleToggleSkills = () => {
    setIsSkillsVisible(!isSkillsVisible);
  };

  return (
    <div className="w-screen 3xl:w-screen h-575 bg-gray-dark opacity-100 relative">
      {!isSkillsVisible && (
        <>
          <img src={upArrow} alt="up-arrow" className="w-24 md:w-32 lg:w-44 xl:w-56 2xl:w-52 opacity-100 absolute top-1/4 left-5 md:left-1/4 xl:top-28 xl:left-80 2xl:left-1/3 2xl:top-1/4 transform -rotate-2 scale-x-1.05 animate-bounce animate-thrice"/>
          <button className="absolute top-2/4 left-2/4 3xl:top-2/4 3xl:left-2/4 -translate-x-2/4 -translate-y-2/4" onClick={handleToggleSkills}>
            <img src={skillButton} alt="skills" className="w-343 xl:w-443 2xl:w-610 h-34 opacity-100 "/>
          </button>
          <img src={downArrow} alt="down-arrow" className="w-24 md:w-32 lg:w-44 xl:w-56 2xl:w-52 opacity-100 absolute xl:bottom-2 lg:bottom-4/4 xl:left-2/3 bottom-1/4 left-3/4 md:left-2/3 2xl:left-2/3 2xl:top-80 transform -rotate-7 scale-99 animate-bounce"/>
        </>
      )}
      {isSkillsVisible && (
        <SkillsList onCloseSkills={handleToggleSkills} techSkills={techSkills}/>
      )}
    </div>
  );
};

export default Tecnologies;
