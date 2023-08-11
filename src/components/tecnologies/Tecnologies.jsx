import React, { useState } from "react";
import SkillsList from "./SkillList"; // Importa el componente creado
import styles from "./tecnologies.module.css"; // Importa el archivo de estilos

const Tecnologies = ({ techSkills }) => {
  const [isSkillsVisible, setIsSkillsVisible] = useState(false);

  const handleToggleSkills = () => {
    setIsSkillsVisible(!isSkillsVisible);
  };

  return (
    <div className="3xl:w-screen h-575 bg-gray-dark opacity-100 relative">
      {!isSkillsVisible && (
        <>
          <img src="../../../public/img/uparrow.svg" alt="up-arrow" className="w-119 h-40 opacity-100 absolute left-679px top-36 transform -rotate-2 scale-x-1.05"/>
          <button className="absolute top-213px left-789px " onClick={handleToggleSkills}>
            <img src="../../../public/img/skills.png" alt="skills" className="w-343 h-40 opacity-100"/>
          </button>
          <img src="../../../public/img/downarrows.svg" alt="down-arrow" className="w-119 h-40 opacity-100 absolute left-1096px top-320px transform rotate-7 scale-99"/>
        </>
      )}
      {isSkillsVisible && (
        <SkillsList onCloseSkills={handleToggleSkills} techSkills={techSkills}/>
      )}
    </div>
  );
};

export default Tecnologies;
