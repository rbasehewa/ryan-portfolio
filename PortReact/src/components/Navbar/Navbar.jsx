import { useState } from "react";
import styles from "./Navbar.module.css";
import { getImageUrl } from "../../utils";
import Tippy from "@tippyjs/react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,            // About
  faBriefcase,       // Experience
  faDiagramProject,  // Projects
  faEnvelope         // Contact
} from "@fortawesome/free-solid-svg-icons";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className={styles.navbar}>
      <div className={styles.brand}>
        <Tippy
          content="Where code meets creativity"
          delay={[120, 0]}
          animation="scale"
          placement="bottom-start"
        >
          <span className={styles.brandWrap} tabIndex={0}>
            <a className={styles.title} href="/">Ryan’s Studio</a>
            <span className={styles.subtitle}>Full-Stack Development & AI Integration</span>
          </span>
        </Tippy>
      </div>

      <div className={styles.menu}>
        <img
          className={styles.menuBtn}
          src={menuOpen ? getImageUrl("nav/closeIcon.png") : getImageUrl("nav/menuIcon.png")}
          alt="menu"
          onClick={() => setMenuOpen(!menuOpen)}
        />

        <ul
          className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`}
          onClick={() => setMenuOpen(false)}
        >
          <li>
            <a href="#about">
              <FontAwesomeIcon icon={faUser} className={styles.navIcon} aria-hidden="true" />
              <span>About</span>
            </a>
          </li>
          <li>
            <a href="#experience">
              <FontAwesomeIcon icon={faBriefcase} className={styles.navIcon} aria-hidden="true" />
              <span>Experience</span>
            </a>
          </li>
          <li>
            <a href="#projects">
              <FontAwesomeIcon icon={faDiagramProject} className={styles.navIcon} aria-hidden="true" />
              <span>Projects</span>
            </a>
          </li>
          <li>
            <a href="#contacts">
              <FontAwesomeIcon icon={faEnvelope} className={styles.navIcon} aria-hidden="true" />
              <span>Contact</span>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};