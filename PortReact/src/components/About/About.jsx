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
                At Ocean Health Systems, I delivered a fully functional Immuniser Dashboard that centralised vaccination management, improving data accessibility and efficiency across multiple hospitals. I integrated an end-to-end testing framework using Playwright and automated it in Azure DevOps pipelines, improving release reliability and cutting regression time by 40%. I implemented role-based user management and real-time audit logging, enhancing system security and compliance with healthcare standards. Additionally, I led the migration of frontend components to Angular standalone architecture, improving maintainability and load performance by 25%.
              </p>
            </div>
          </li>

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
                <strong>Vocus Group — Digital (Dodo & iPrimus)</strong>
              </h3>
              <p className={styles.itemBody}>
                At Vocus Group, I led a complete UI refresh for the mobile sales funnel flow, resulting in a significant increase in new user conversions within the first few months. I completely redesigned the energy sales funnel UI, leading to higher customer completion rates and an improved user experience. Furthermore, I delivered a faster, more responsive frontend that increased engagement and reduced bounce rates, directly contributing to improved business retention and revenue growth.
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
                <strong>Early Web Development (.NET & Full-Stack)</strong>
              </h3>
              <p className={styles.itemBody}>
                My early career began as a .NET developer, creating scalable enterprise applications for logistics and SME clients. I later transitioned into full-stack JavaScript development, gaining experience in RESTful API design, authentication workflows, and cloud deployment on Azure and AWS. These experiences helped shape my foundation in building secure, maintainable, and user-centric applications.
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
                Proud dad of two {""}
                <FontAwesomeIcon icon={faUserGroup} aria-hidden="true" />. I
                recharge through cycling {""}
                <FontAwesomeIcon icon={faBicycle} aria-hidden="true" /> and
                gardening {""}
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