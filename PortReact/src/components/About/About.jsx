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
              <ul className={styles.itemBody}>
                <li>Built Canvas Apps to support internal healthcare workflows.</li>
                <li>Developed Power Automate flows for approvals, notifications, and system updates.</li>
                <li>Cut regression testing time by <strong>40%</strong> using Playwright in Azure DevOps.</li>
                <li>Improved system security with role based access control and audit logs.</li>
                <li>Boosted frontend performance by <strong>25%</strong> through Angular standalone migration.</li>

                <li><strong>Business impact:</strong></li>
                <li>Reduced manual processing and improved turnaround times for operational teams.</li>
                <li>Improved release confidence by reducing regression effort and stabilising deployments.</li>
              </ul>
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
              <ul className={styles.itemBody}>
                <li>
                  Led full UI redesign of mobile sales funnels for Dodo &
                  iPrimus.
                </li>
                <li>
                  Increased new customer conversion rates within months of
                  launch.
                </li>
                <li>
                  Improved checkout completion through UX optimisation of energy
                  sales flows.
                </li>
                <li>
                  Reduced bounce rates by delivering faster, mobile-first
                  responsive interfaces.
                </li>
                <li>
                  Directly contributed to revenue growth through improved funnel
                  performance.
                </li>
              </ul>
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
              <ul className={styles.itemBody}>
                <li>
                  Developed enterprise .NET systems used by logistics and SME
                  clients.
                </li>
                <li>
                  Designed secure REST APIs with authentication and role-based
                  security.
                </li>
                <li>Deployed production systems on Microsoft Azure and AWS.</li>
                <li>
                  Built scalable full-stack JavaScript applications with modern
                  frameworks.
                </li>
                <li>
                  Established strong foundations in secure, maintainable system
                  design.
                </li>
              </ul>
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