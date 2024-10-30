import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Sachin</h1>
        <p className={styles.description}>
        🎓 Aspiring Computer Science student passionate about exploring technology and hands-on learning in software development. Skilled in Web Development, Data Science, and Cloud Computing with a growth-focused mindset and strong teamwork abilities. 
        Excited to connect, learn, and contribute to impactful tech projects.
        </p>
        <a href="mailto:sachin.kumar@iiitg.ac.in" className={styles.contactBtn}>
        Get in Touch
        </a>
      </div>
      <img
        src={getImageUrl("hero/Untitled_design11-removebg-preview.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
