import React from "react";
import styles from "./tecnologies.module.css"; // Importa el archivo de estilos

const Tecnologies = ({ techSkills }) => {

  return (
    <div className={styles.parallaxContainer}>
      <div className={styles.layer + " " + styles.layerBack}></div>
      <div className={styles.layer + " " + styles.layerFront}>
        <div className={styles.techSkills}>
          {techSkills.map((skill, index) => (
            <div key={index} className={styles.skill}>
              {skill}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
  }

export default Tecnologies;