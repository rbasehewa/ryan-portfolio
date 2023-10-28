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
                    <h3>Professional Journey at Vocus Group</h3>
                    <p>My journey began as a Frontend Developer in the Digital team at Vocus Group, where I honed my skills and developed a strong commitment to crafting remarkable web experiences.</p>
                </div>
            </li>
            <li className={styles.aboutItem}>
                <img src={getImageUrl("about/serverIcon.png")} alt="Server icon" />
                <div className={styles.aboutItemText}>
                    <h3>Experience at ITechYouLearn</h3>
                    <p>Prior to that, I had the opportunity to work as a Software Developer at ITechYouLearn Software Development Company in Adelaide.</p>
                    <p>It was here that I gained valuable insights and experience, which further fueled my passion for web development.</p>
                </div>
            </li>
            <li className={styles.aboutItem}>
                <img src={getImageUrl("about/uiIcon.png")} alt="UI icon" />
                <div className={styles.aboutItemText}>
                    <h3>Early Web Development Days</h3>
                    <p>My journey started as an Assistant Web Developer, and with each role, I've had the privilege of learning and growing, which has contributed to my ability to deliver outstanding web solutions.</p>
                </div>
            </li>

            <li className={styles.aboutItem}>
                <img src={getImageUrl("about/social.png")} alt="Social icon" />

                <div className={styles.aboutItemText}>
                        <h3>Life Beyond the Code</h3>
                        <p>In my free time, I'm an outdoor enthusiast, a gaming enthusiast, and a passionate cook. I love learning and tackling new challenges..</p>
                </div>
            </li>
        </ul>
    </div>
  </section>
  );
}

