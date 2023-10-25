import React from 'react'
import { getImageUrl } from '../../utils';
import styles from "./About.module.css";

export const About = () => {
  return (

  <section className={styles.container} id="about">
    <h2 className={styles.title}>About</h2>
    <div className={styles.content}>
        <img src={getImageUrl("about/aboutImage.png")} alt="Simply about me" className={styles.aboutImage} />
        <ul className={styles.aboutItems}>
            <li className={styles.aboutItem}>
                <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor icon" />
                <div className={styles.aboutItemText}>
                    <h3>Frontend Developer, Digital team – Vocus Group</h3>
                    <p>Developed and maintained dynamic and interactive user interfaces, using JavaScript frameworks such as React and Angular.</p>
                    <p>Implemented responsive web design using HTML, CSS, and JavaScript, resulting in a consistent user experience across all devices.</p>
                </div>
            </li>
            <li className={styles.aboutItem}>
                <img src={getImageUrl("about/serverIcon.png")} alt="Server icon" />
                <div className={styles.aboutItemText}>
                    <h3>Software Developer, ITechYouLearn Software Development Company, Adelaide</h3>
                    <p>Utilized Microsoft C# and the .NET platform to design, develop, and maintain responsive websites and web applications.</p>
                    <p>Leveraged AWS Cloud offerings, including Lambda, EC2, DynamoDB, and S3, to develop and deploy scalable and efficient web applications and services.</p>
                </div>
            </li>
            <li className={styles.aboutItem}>
                <img src={getImageUrl("about/uiIcon.png")} alt="UI icon" />
                <div className={styles.aboutItemText}>
                    <h3>Assistant Web Developer</h3>
                    <p>Built and maintained a variety of dynamic web applications using Laravel framework with PHP, HTML5, SCSS, JQuery, and AJAX, providing high-quality user experiences and improving business efficiency.</p>
                    <p>Integrated with a variety of RESTful APIs to provide dynamic, up-to-date content to the website, enhancing user engagement and satisfaction.</p>
                    <p>Managed code versioning and collaboration using Git and GitHub, ensuring that development progress is tracked and easily accessible to the team.</p>
                </div>
            </li>
        </ul>
    </div>
  </section>
  );
}

