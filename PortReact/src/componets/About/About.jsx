import React from 'react'
import { getImageUrl } from '../../utils';
import styles from "./About.module.css";

export const About = () => {
  return (

  <section className={styles.container} id="about">
    <h2 className={styles.title}>About</h2>
    <div className={styles.content}>
        <img src={getImageUrl("about/aboutme.png")} alt="Simply about me" className={styles.aboutImage} />
        <ul className={styles.aboutItems}>
            <li className={styles.aboutItem}>
                <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor icon" />
                <div className={styles.aboutItemText}>
                    <h3>Professional Journey at Ocean Health Systems</h3>
                    <p>I currently work as a Frontend Developer at Ocean Health Systems, where I build modern Angular applications that simplify healthcare workflows and enhance user experiences across web and mobile platforms.</p>
                </div>
            </li>
            <li className={styles.aboutItem}>
                <img src={getImageUrl("about/serverIcon.png")} alt="Server icon" />
                <div className={styles.aboutItemText}>
                    <h3>Experience at Vocus Group</h3>
                    <p>Before joining Ocean Health Systems, I worked as a Frontend Developer in the Digital Team at Vocus Group, contributing to the Dodo and iPrimus products.</p>
                    <p>My time there strengthened my technical and creative skills in crafting customer-focused web experiences within a large enterprise environment.</p>
                </div>
            </li>
            <li className={styles.aboutItem}>
                <img src={getImageUrl("about/uiIcon.png")} alt="UI icon" />
                <div className={styles.aboutItemText}>
                    <h3>Early Web Development Days</h3>
                    <p>I began my career as a Software Developer at ITechYouLearn in Adelaide, gaining valuable experience and a strong foundation in building scalable and responsive web solutions.</p>
                </div>
            </li>

            <li className={styles.aboutItem}>
                <img src={getImageUrl("about/social.png")} alt="Social icon" />

                <div className={styles.aboutItemText}>
                        <h3>Life Beyond the Code</h3>
                        <p>Outside of work, I enjoy spending time outdoors, gaming, and experimenting with new recipes. I’m always eager to learn and take on new challenges.</p>
                </div>
            </li>
        </ul>
    </div>
  </section>
  );
}

