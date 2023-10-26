import React from 'react'
import { getImageUrl } from '../../utils';
import styles from "./Contact.module.css";

export const Contact = () => {
  return (
    <footer className={styles.container} id="contacts">
        <div className={styles.text}>
            <h2> Contact</h2>
            <p>Feel free to reach me out!</p>
        </div>
        <ul className={styles.links}>
            <li className={styles.link}>
                <img src={getImageUrl("contact/emailIcon.png")} alt="Email icon" />
                <a href="mailto:rbasehewa@gmail.com">rbasehewa@gmail.com</a>
            </li>

            <li className={styles.link}>
                <img src={getImageUrl("contact/linkedinIcon.png")} alt="LinkedIn icon" />
                <a href="https://www.linkedin.com/in/ryanmaddumahewa/">linkedin.com/ryanmaddumahewa</a>
            </li>

            <li className={styles.link}>
                <img src={getImageUrl("contact/githubIcon.png")} alt="Github icon" />
                <a href="https://github.com/rbasehewa">github.com/rbasehewa</a>
            </li>
        </ul>
    </footer>
  )
}