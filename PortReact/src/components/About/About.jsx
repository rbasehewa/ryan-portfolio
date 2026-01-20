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
  faCheckCircle,
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
        </span>
        About
      </h2>

      <div className={styles.content}>
        <div className={styles.aboutImage}>
          <AboutTimeline />
        </div>

        <div className={styles.aboutItems} role="list">
          {/* Ocean Health Systems */}
          <div className={styles.aboutItem}>
            <div className={styles.itemHeader}>
              <span className={styles.iconWrap} aria-hidden="true">
                <FontAwesomeIcon
                  icon={faHospital}
                  size="lg"
                  className={styles.icon}
                />
              </span>
              <h3 className={styles.itemTitle}>Ocean Health Systems</h3>
            </div>

            <div className={styles.itemBody}>
              <div className={styles.achievement}>
                <FontAwesomeIcon icon={faCheckCircle} className={styles.checkIcon} />
                <p>Migrated Angular applications to latest framework (v21) using <strong>signals</strong>, <strong>reactive forms</strong>, and standalone components with lazy loading for improved performance.</p>
              </div>
              <div className={styles.achievement}>
                <FontAwesomeIcon icon={faCheckCircle} className={styles.checkIcon} />
                <p>Implemented <strong>caching strategies</strong> and HTTP interceptors for optimised API calls and error handling across frontend and backend layers.</p>
              </div>
              <div className={styles.achievement}>
                <FontAwesomeIcon icon={faCheckCircle} className={styles.checkIcon} />
                <p>Applied <strong>role-based access controls (RBAC)</strong> and <strong>audit logging</strong> to support secure handling of sensitive healthcare data with full traceability.</p>
              </div>
              <div className={styles.achievement}>
                <FontAwesomeIcon icon={faCheckCircle} className={styles.checkIcon} />
                <p>Integrated with external systems including the Australian Immunisation Register (AIR) via REST APIs using <strong>Auth0</strong> secured authentication and token-based authorization.</p>
              </div>
              <div className={styles.achievement}>
                <FontAwesomeIcon icon={faCheckCircle} className={styles.checkIcon} />
                <p>Developed Power Automate flows for approvals, notifications, and system updates to improve turnaround times.</p>
              </div>
              <div className={styles.achievement}>
                <FontAwesomeIcon icon={faCheckCircle} className={styles.checkIcon} />
                <p>Established <strong>error logging</strong> and monitoring pipelines with structured exception handling to track system health and security events.</p>
              </div>
              <div className={styles.achievement}>
                <FontAwesomeIcon icon={faCheckCircle} className={styles.checkIcon} />
                <p>Cut regression testing time by <strong>40%</strong> by introducing Playwright E2E automation in Azure DevOps pipelines.</p>
              </div>
            </div>
          </div>

          {/* Vocus Group */}
          <div className={styles.aboutItem}>
            <div className={styles.itemHeader}>
              <span className={styles.iconWrap} aria-hidden="true">
                <FontAwesomeIcon
                  icon={faBuilding}
                  size="lg"
                  className={styles.icon}
                />
              </span>
              <h3 className={styles.itemTitle}>
                Vocus Group — Digital (Dodo & iPrimus)
              </h3>
            </div>

            <div className={styles.itemBody}>
              <div className={styles.achievement}>
                <FontAwesomeIcon icon={faCheckCircle} className={styles.checkIcon} />
                <p>Built and enhanced responsive sales funnels for mobile, broadband, and energy services, helping <strong>boost conversion rates by 12%</strong> and contributing to stronger customer acquisition.</p>
              </div>
              <div className={styles.achievement}>
                <FontAwesomeIcon icon={faCheckCircle} className={styles.checkIcon} />
                <p>Maintained and upgraded the MyDodo self-service portal serving <strong>200K+ customers</strong>, making it easier for them to manage internet, mobile, and energy accounts without calling support.</p>
              </div>
              <div className={styles.achievement}>
                <FontAwesomeIcon icon={faCheckCircle} className={styles.checkIcon} />
                <p>Integrated Salesforce CRM and MuleSoft REST APIs for real-time customer, billing, and order synchronisation using OpenAPI specs, <strong>cutting data errors by over half</strong>.</p>
              </div>
              <div className={styles.achievement}>
                <FontAwesomeIcon icon={faCheckCircle} className={styles.checkIcon} />
                <p>Delivered UX and performance improvements that <strong>reduced support call volumes by 15-20%</strong> and helped improve customer retention through a smoother online experience.</p>
              </div>
              <div className={styles.achievement}>
                <FontAwesomeIcon icon={faCheckCircle} className={styles.checkIcon} />
                <p>Mentored junior developers and actively contributed to design discussions on scalability, accessibility, and frontend best practices.</p>
              </div>
            </div>
          </div>

          {/* ITechYouLearn */}
          <div className={styles.aboutItem}>
            <div className={styles.itemHeader}>
              <span className={styles.iconWrap} aria-hidden="true">
                <FontAwesomeIcon
                  icon={faLaptopCode}
                  size="lg"
                  className={styles.icon}
                />
              </span>
              <h3 className={styles.itemTitle}>ITechYouLearn — EdTech Platform</h3>
            </div>

            <div className={styles.itemBody}>
              <div className={styles.achievement}>
                <FontAwesomeIcon icon={faCheckCircle} className={styles.checkIcon} />
                <p>Built and maintained an e-learning platform serving <strong>10,000+</strong> users with course delivery, assessments, and student progress tracking.</p>
              </div>
              <div className={styles.achievement}>
                <FontAwesomeIcon icon={faCheckCircle} className={styles.checkIcon} />
                <p>Developed Angular components and responsive layouts ensuring accessibility across devices and browsers.</p>
              </div>
              <div className={styles.achievement}>
                <FontAwesomeIcon icon={faCheckCircle} className={styles.checkIcon} />
                <p>Deployed and monitored production workloads on AWS Lambda and EC2, improving uptime and scalability.</p>
              </div>
              <div className={styles.achievement}>
                <FontAwesomeIcon icon={faCheckCircle} className={styles.checkIcon} />
                <p>Integrated Node.js and .NET APIs for content management and authentication workflows with focus on security and performance.</p>
              </div>
              <div className={styles.achievement}>
                <FontAwesomeIcon icon={faCheckCircle} className={styles.checkIcon} />
                <p>Integrated WordPress and Webflow with modern frontend workflows for scalable, CMS-driven digital platforms.</p>
              </div>
              <div className={styles.achievement}>
                <FontAwesomeIcon icon={faCheckCircle} className={styles.checkIcon} />
                <p>Optimised frontend performance by profiling components and reducing load times through asset compression and caching.</p>
              </div>
            </div>
          </div>

          {/* Life Beyond Code */}
          <div className={styles.aboutItem}>
            <div className={styles.itemHeader}>
              <span className={styles.iconWrap} aria-hidden="true">
                <FontAwesomeIcon
                  icon={faLeaf}
                  size="lg"
                  className={styles.icon}
                />
              </span>
              <h3 className={styles.itemTitle}>
                <Tippy
                  content="Hobbies & interests beyond work"
                  animation="scale"
                  delay={[120, 0]}
                >
                  <span>Life Beyond Code</span>
                </Tippy>
              </h3>
            </div>

            <p className={styles.lifeBeyondText}>
              Proud dad of two <FontAwesomeIcon icon={faUserGroup} aria-hidden="true" />. I recharge through cycling <FontAwesomeIcon icon={faBicycle} aria-hidden="true" /> and gardening <FontAwesomeIcon icon={faSeedling} aria-hidden="true" />, which keep my creativity grounded and energy balanced outside of development.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};