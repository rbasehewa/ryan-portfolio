import styles from "./Contact.module.css";

import Tippy from "@tippyjs/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

export const Contact = () => {
  return (
    <footer className={styles.container} id="contacts">
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach me out!</p>
      </div>

      <ul className={styles.links}>
        <li className={styles.link}>
          <Tippy
            content="Email Ryan"
            placement="top"
            animation="scale"
            delay={[100, 0]}
          >
            <a href="mailto:rbasehewa@gmail.com" aria-label="Email Ryan">
              <FontAwesomeIcon icon={faEnvelope} className={styles.icon} />
              <span className={styles.linkText}>rbasehewa@gmail.com</span>
            </a>
          </Tippy>
        </li>

        <li className={styles.link}>
          <Tippy
            content="Ryan on LinkedIn"
            placement="top"
            animation="scale"
            delay={[100, 0]}
          >
            <a
              href="https://www.linkedin.com/in/ryanmaddumahewa/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Ryan on LinkedIn"
            >
              <FontAwesomeIcon icon={faLinkedin} className={styles.icon} />
              <span className={styles.linkText}>linkedin.com/ryanmaddumahewa</span>
            </a>
          </Tippy>
        </li>

        <li className={styles.link}>
          <Tippy
            content="Ryan on GitHub"
            placement="top"
            animation="scale"
            delay={[100, 0]}
          >
            <a
              href="https://github.com/rbasehewa"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Ryan on GitHub"
            >
              <FontAwesomeIcon icon={faGithub} className={styles.icon} />
              <span className={styles.linkText}>github.com/rbasehewa</span>
            </a>
          </Tippy>
        </li>
      </ul>
    </footer>
  );
};