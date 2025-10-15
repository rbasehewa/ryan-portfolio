// Hero.tsx
import 'tippy.js/dist/tippy.css';
import 'tippy.js/animations/scale.css';

import Tippy from '@tippyjs/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faUniversalAccess,
  faLink,
  faTabletScreenButton,
  faCode
} from '@fortawesome/free-solid-svg-icons';

import { getImageUrl } from '../../utils';
import styles from './Hero.module.css';

export const Hero = () => {
  return (
    <section className={styles.container} aria-labelledby="hero-heading">
      <div className={styles.content}>
        <h1 id="hero-heading" className={styles.title}>
          Ryan Maddumahewa
        </h1>

        {/* Tagline (kept) + WCAG tooltip */}
        <p className={styles.tagline}>
          Frontend-focused full-stack developer — Angular · .NET · PostgreSQL · Azure · Databricks · 
          <FontAwesomeIcon icon={faCode} aria-hidden="true" />
        </p>

        {/* Friendlier about-me copy (same class, no style changes) */}
        <p className={styles.description}>
          I love building <strong>scalable apps</strong>
          <FontAwesomeIcon icon={faTabletScreenButton} aria-hidden="true" />
          that feel great to use. I care deeply about{' '}
          <strong>accessibility</strong>{' '}
          <FontAwesomeIcon icon={faUniversalAccess} aria-hidden="true" /> and{' '}
          <strong>interoperability</strong>{' '}
          <FontAwesomeIcon icon={faLink} aria-hidden="true" /> so teams can ship faster and users
          aren’t left behind. I follow{' '}
          <Tippy
            content="Web Content Accessibility Guidelines"
            animation="scale"
            delay={[120, 0]}
          >
            <abbr title="Web Content Accessibility Guidelines">WCAG</abbr>
          </Tippy>{' '}
          principles in my day-to-day work. with growing focus on AI automation and intelligent systems.
        </p>

        <Tippy content="Opens your email app" placement="top" animation="scale" delay={[120, 0]}>
          <a
            href="mailto:rbasehewa@gmail.com"
            className={styles.contactBtn}
            aria-label="Email Ryan Maddumahewa"
          >
            Let’s connect!
          </a>
        </Tippy>
      </div>

      <img
        src={getImageUrl('hero/myImage.png')}
        alt="Ryan Maddumahewa — portrait in a suit"
        className={styles.heroImg}
        loading="eager"
        decoding="async"
      />

      <div className={styles.topBlur} aria-hidden="true"></div>
      <div className={styles.bottomBlur} aria-hidden="true"></div>
    </section>
  );
};
