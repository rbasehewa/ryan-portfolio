// About.tsx
import 'tippy.js/dist/tippy.css';
import 'tippy.js/animations/scale.css';

import Tippy from '@tippyjs/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHospital,
  faBuilding,
  faLaptopCode,
  faLeaf,
  faUserGroup,
  faBicycle,
  faSeedling,
  faUser,
} from '@fortawesome/free-solid-svg-icons';

import { getImageUrl } from '../../utils';
import styles from './About.module.css';

export const About = () => {
  return (
    <section className={styles.container} id="about" aria-labelledby="about-heading">
      <h2 id="about-heading" className={styles.title}>
            <span className={styles.iconWrap} aria-hidden="true">
      <FontAwesomeIcon icon={faUser} size="1x" className={styles.icon} />
    </span> About
      </h2>

      <div className={styles.content}>
        <img
          src={getImageUrl('about/aboutme.png')}
          alt="Collage of photos from work and outdoors"
          className={styles.aboutImage}
          loading="lazy"
          decoding="async"
        />

<ul className={styles.aboutItems} role="list">

{/* Ocean Health Systems */}
<li className={styles.aboutItem}>
  <span className={styles.iconWrap} aria-hidden="true">
    <FontAwesomeIcon icon={faHospital} size="2x" className={styles.icon} />
  </span>
  <div className={styles.aboutItemText}>
    <h3 className={styles.itemTitle}>Ocean Health Systems</h3>
    <p className={styles.itemBody}>
      Frontend Developer delivering Angular UIs for clinicians and healthcare support staff.
      Handle sensitive clinical data with strict confidentiality while building secure,
      accessible, and reusable components that streamline healthcare workflows.
    </p>
  </div>
</li>

{/* Vocus Group — Digital */}
<li className={styles.aboutItem}>
  <span className={styles.iconWrap} aria-hidden="true">
    <FontAwesomeIcon icon={faBuilding} size="2x" className={styles.icon} />
  </span>
  <div className={styles.aboutItemText}>
    <h3 className={styles.itemTitle}>Vocus Group — Digital</h3>
    <p className={styles.itemBody}>
      Frontend Developer for B2C brands Dodo and iPrimus, integrating Salesforce to manage
      customer journeys. Improved UX patterns, accessibility, and performance across
      high-traffic, enterprise-scale platforms.
    </p>
  </div>
</li>

<li className={styles.aboutItem}>
  <span className={styles.iconWrap} aria-hidden="true">
    <FontAwesomeIcon icon={faLaptopCode} size="2x" className={styles.icon} />
  </span>

  <div className={styles.aboutItemText}>
    <h3 className={styles.itemTitle}>Early Web Dev</h3>
    <p className={styles.itemBody}>
      Began my career as a .NET developer after completing my bachelor’s degree, then pursued my
      master’s while expanding into full-stack development. Joined Enee in Adelaide as a Full-Stack
      Developer, later moved to Melbourne to work with Vocus Digital, and now based in Perth with
      Ocean Health Systems. Passionate about exploring Big Data, AI, and scalable web technologies.
    </p>
  </div>
</li>


<li className={styles.aboutItem}>
  <span className={styles.iconWrap} aria-hidden="true">
    <FontAwesomeIcon icon={faLeaf} size="2x" className={styles.icon} />
  </span>

  <div className={styles.aboutItemText}>
    <h3 className={styles.itemTitle}>
      <Tippy content="Hobbies & interests beyond work" animation="scale" delay={[120, 0]}>
        <span>Life Beyond Code</span>
      </Tippy>
    </h3>
    <p className={styles.itemBody}>
      Proud dad of two <FontAwesomeIcon icon={faUserGroup} aria-hidden="true" />.
      I recharge through cycling <FontAwesomeIcon icon={faBicycle} aria-hidden="true" /> and
      gardening <FontAwesomeIcon icon={faSeedling} aria-hidden="true" />, which keep my creativity
      grounded and energy balanced outside of development.
    </p>
  </div>
</li>

</ul>

      </div>
    </section>
  );
};