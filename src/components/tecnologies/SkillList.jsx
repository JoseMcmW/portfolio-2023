import React from "react";

const SkillsList = ({ onCloseSkills, techSkills }) => {
  console.log('techSkills :>> ', techSkills);
  return (
    <div className="3xl:w-screen h-575 transition-all duration-300 bg-skill flex justify-center align-middle">
      <button onClick={onCloseSkills} className="absolute right-14 top-7"><img src="../../../public/img/x-circle.svg" alt="close-button" /></button>
      <div className="w-8/12 flex flex-wrap justify-center align-middle items-center">
      {techSkills && techSkills.map((skill) => {
        return(
          <div key={skill.id} className="bg-gray p-4 mx-4 rounded-lg">
            <p className="text-black font-pharagrap text-3xl">{skill}</p>
          </div>
        )
      })}
      </div>
    </div>
  );
};

export default SkillsList;
