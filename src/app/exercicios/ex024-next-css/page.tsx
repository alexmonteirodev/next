import React from "react";
import styles from "./ex024.module.css";

const page = () => {
  return (
    <div>
      <h1 className={styles.titulo}>Next - CSS</h1>
      <p className={styles.texto}>Assim se cria modules de css em next</p>
    </div>
  );
};

export default page;
