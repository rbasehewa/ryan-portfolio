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
                <li>Migrated Angular applications to latest framework (v21) using <strong>signals</strong>, <strong>reactive forms</strong>, and standalone components with lazy loading for improved performance.</li>
                <li>Implemented <strong>caching strategies</strong> and HTTP interceptors for optimised API calls and error handling across frontend and backend layers.</li>
                <li>Applied <strong>role-based access controls (RBAC)</strong> and <strong>audit logging</strong> to support secure handling of sensitive healthcare data with full traceability.</li>
                <li>Integrated with external systems including the Australian Immunisation Register (AIR) via REST APIs using <strong>Auth0</strong> secured authentication and token-based authorization.</li>
                <li>Developed Power Automate flows for approvals, notifications, and system updates to improve turnaround times.</li>
                <li>Established <strong>error logging</strong> and monitoring pipelines with structured exception handling to track system health and security events.</li>
                <li>Cut regression testing time by <strong>40%</strong> by introducing Playwright E2E automation in Azure DevOps pipelines.</li>
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
                  Built and enhanced responsive sales funnels for mobile, broadband, and energy services, helping <strong>boost conversion rates by 12%</strong> and contributing to stronger customer acquisition.
                </li>
                <li>
                  Maintained and upgraded the MyDodo self-service portal serving <strong>200K+ customers</strong>, making it easier for them to manage internet, mobile, and energy accounts without calling support.
                </li>
                <li>
                  Integrated Salesforce CRM and MuleSoft REST APIs for real-time customer, billing, and order synchronisation using OpenAPI specs, <strong>cutting data errors by over half</strong>.
                </li>
                <li>
                  Delivered UX and performance improvements that <strong>reduced support call volumes by 15-20%</strong> and helped improve customer retention through a smoother online experience.
                </li>
                <li>
                  Mentored junior developers and actively contributed to design discussions on scalability, accessibility, and frontend best practices.
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
                <strong>ITechYouLearn — EdTech Platform</strong>
              </h3>
              <ul className={styles.itemBody}>
                <li>
                  Built and maintained an e-learning platform serving <strong>10,000+</strong> users with course delivery, assessments, and student progress tracking.
                </li>
                <li>
                  Developed Angular components and responsive layouts ensuring accessibility across devices and browsers.
                </li>
                <li>
                  Deployed and monitored production workloads on AWS Lambda and EC2, improving uptime and scalability.
                </li>
                <li>
                  Integrated Node.js and .NET APIs for content management and authentication workflows with focus on security and performance.
                </li>
                <li>Integrated WordPress and Webflow with modern frontend workflows for scalable, CMS-driven digital platforms.</li>
                <li>
                  Optimised frontend performance by profiling components and reducing load times through asset compression and caching.
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