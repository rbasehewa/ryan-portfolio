import React from 'react'
import { getImageUrl } from '../../utils';
import styles from "./Hero.module.css";

export const Hero = () => {
  return (
    <section className={styles.container}>
        <div className={styles.content}>
            <h1 className={styles.title}>Ryan Maddumahewa</h1>
            <p className={styles.description}>Hello, I'm Ryan, a full-stack developer who loves creating outstanding web experiences. I'm a dedicated and passionate developer with over 5 years of experience in the field. This portfolio features my carefully crafted web projects, demonstrating my dedication to responsive design, interactive apps, and creative interfaces.</p>
            <p className={styles.description}>Explore the projects, and feel free to reach out if you have any questions or if you'd like to discuss potential collaborations. Thanks for stopping by!</p> 
            <a href="mailto:rbasehewa@gmail.com" className={styles.contactBtn}>shoot me an email!!!</a>
        </div>
        <img src={getImageUrl("hero/myImage.png")} 
        alt="rbasehewa" 
        className={styles.heroImg}
        />
        <div className={styles.topBlur}></div>
        <div className={styles.bottomBlur}></div>
    </section>
  );
};
