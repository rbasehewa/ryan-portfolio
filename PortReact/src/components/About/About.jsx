// About.tsx
import "tippy.js/dist/tippy.css";
import "tippy.js/animations/scale.css";

import Tippy from "@tippyjs/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHospital,
  faBuilding,
  faLaptopCode,
  faLeaf,
  faUserGroup,
  faBicycle,
  faSeedling,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import AboutTimeline from "./AboutTimeline";
import styles from "./About.module.css";

export const About = () => {
  return (
    <section
      className={styles.container}
      id="about"
      aria-labelledby="about-heading"
    >
      <h2 id="about-heading" className={styles.title}>
        <span className={styles.iconWrap} aria-hidden="true">
          <FontAwesomeIcon icon={faUser} size="1x" className={styles.icon} />
        </span>{" "}
        About
      </h2>

      <div className={styles.content}>
        <div className={styles.aboutImage}>
          <AboutTimeline />
        </div>

        <ul className={styles.aboutItems} role="list">
          {/* Ocean Health Systems */}
          <li className={styles.aboutItem}>
            <span className={styles.iconWrap} aria-hidden="true">
              <FontAwesomeIcon
                icon={faHospital}
                size="2x"
                className={styles.icon}
              />
            </span>
            <div className={styles.aboutItemText}>
              <h3 className={styles.itemTitle}>
                <strong>Ocean Health Systems</strong>
              </h3>
              <p className={styles.itemBody}>
                Immuniser — A workplace health platform built during the COVID
                era to replace paper-based immunisation records with a secure,
                all-in-one digital system. I helped design and develop the
                end-to-end user flow — from staff record management and clinical
                communication to online consent, appointment booking, and
                automatic updates to the Australian Immunisation Register (AIR).
              </p>
            </div>
          </li>

          {/* Vocus Group — Digital */}
          <li className={styles.aboutItem}>
            <span className={styles.iconWrap} aria-hidden="true">
              <FontAwesomeIcon
                icon={faBuilding}
                size="2x"
                className={styles.icon}
              />
            </span>
            <div className={styles.aboutItemText}>
              <h3 className={styles.itemTitle}>
                <strong>Vocus Group — Digital</strong>
              </h3>
              <p className={styles.itemBody}>
                Worked as a Frontend Developer for B2C brands Dodo and iPrimus
                under Vocus Group’s digital division. I helped modernize their
                customer portals by integrating Salesforce for journey
                management, improving UI consistency, and optimizing
                accessibility and performance across high-traffic Angular-based
                platforms.
              </p>
            </div>
          </li>

          <li className={styles.aboutItem}>
            <span className={styles.iconWrap} aria-hidden="true">
              <FontAwesomeIcon
                icon={faLaptopCode}
                size="2x"
                className={styles.icon}
              />
            </span>

            <div className={styles.aboutItemText}>
              <h3 className={styles.itemTitle}>
                <strong>Early Web Dev</strong>
              </h3>
              <p className={styles.itemBody}>
                Started my career as a .NET developer, building enterprise web
                apps for SMEs and logistics clients before moving into
                full-stack JavaScript development. I later joined Enee Solutions
                and Vocus Digital, gaining hands-on experience in scalable API
                design, frontend architecture, and collaborative agile delivery
                across national teams.
              </p>
            </div>
          </li>

          <li className={styles.aboutItem}>
            <span className={styles.iconWrap} aria-hidden="true">
              <FontAwesomeIcon
                icon={faLeaf}
                size="2x"
                className={styles.icon}
              />
            </span>

            <div className={styles.aboutItemText}>
              <h3 className={styles.itemTitle}>
                <Tippy
                  content="Hobbies & interests beyond work"
                  animation="scale"
                  delay={[120, 0]}
                >
                  <strong>Life Beyond Code</strong>
                </Tippy>
              </h3>
              <p className={styles.itemBody}>
                Proud dad of two{" "}
                <FontAwesomeIcon icon={faUserGroup} aria-hidden="true" />. I
                recharge through cycling{" "}
                <FontAwesomeIcon icon={faBicycle} aria-hidden="true" /> and
                gardening{" "}
                <FontAwesomeIcon icon={faSeedling} aria-hidden="true" />, which
                keep my creativity grounded and energy balanced outside of
                development.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
