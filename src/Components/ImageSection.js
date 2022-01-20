import React from "react";

import styles from "./ImageSection.module.css";

import resume from "../img/resume.jpg";
import PrimaryButton from "./PrimaryButton";

function ImageSection() {
  return (
    <div className={styles.imageSectionStyled}>
      <div className={styles.leftContent}>
        <img src={resume} alt="" />
      </div>
      <div className={styles.rightContent}>
        <h4>
          I am <span>Lorem Ipsum</span>
        </h4>
        <p className={styles.paragraph}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem,
          natus quas vero enim praesentium delectus est id fugiat ab libero
          adipisci recusandae at maxime veritatis! Lorem ipsum, dolor sit amet
          consectetur adipisicing elit. Excepturi, nesciunt.
        </p>
        <div className={styles.aboutInfo}>
          <div className={styles.infoTitle}>
            <p>Full Name</p>
            <p>Age</p>
            <p>Nationality </p>
            <p>Languages </p>
            <p>Location</p>
            <p>Service</p>
          </div>
          <div className={styles.info}>
            <p>: Amirali Karimi</p>
            <p>: 21</p>
            <p>: Persian </p>
            <p>: Farsi, English </p>
            <p>: Tehran, Iran</p>
            <p>: Front-end with react-js</p>
          </div>
        </div>
        <PrimaryButton title={"Download Cv"} />
      </div>
    </div>
  );
}
export default ImageSection;
