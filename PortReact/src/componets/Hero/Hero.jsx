import React from 'react'
import { getImageUrl } from '../../utils';
import styles from "./Hero.module.css";

export const Hero = () => {
  return (
    <section className={styles.container}>
        <div className={styles.content}>
            <h1 className={styles.title}>HI, I'm Ryan Maddumahewa</h1>
            <p className={styles.description}>I'm a full-stack developer with a passion for creating interactive applications and user experiences on the web.</p>
            <p className={styles.description}>With a background in computer science and hands-on experience working with APIs, templates, and responsive design, I have the technical skills and creative vision to bring even the most complex projects to life. </p> 
            <p className={styles.description}>When I'm not coding, you'll find me hiking, playing video games, or trying out new recipes in the kitchen. I believe in the power of continuous learning and am always seeking new challenges and opportunities to grow as a developer and as a person.</p>
            <p className={styles.description}>Thank you for visiting my portfolio! I look forward to the opportunity to bring my passion and expertise to your next project.</p>
            <a href="mailto:rbasehewa@gmail.com" className={styles.contactBtn}>shoot me an email!!!</a>
        </div>
        <img src={getImageUrl("hero/heroImage.png")} 
        alt="rbasehewa" 
        className={styles.heroImg}
        />
        <div className={styles.topBlur}></div>
        <div className={styles.bottomBlur}></div>
    </section>
  );
};
