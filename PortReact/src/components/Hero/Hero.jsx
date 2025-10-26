// Hero.tsx
import "tippy.js/dist/tippy.css";
import "tippy.js/animations/scale.css";
import TypeLine from "../TypeLine";

import Tippy from "@tippyjs/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleCheck,
  faTabletScreenButton,
  faUserShield,
  faRobot,
} from "@fortawesome/free-solid-svg-icons";

import { getImageUrl } from "../../utils";
import styles from "./Hero.module.css";

export const Hero = () => {
  return (
    <section className={styles.container} aria-labelledby="hero-heading">
      <div className={styles.content}>
        <h1 id="hero-heading" className={styles.title}>
          Ryan Maddumahewa
        </h1>

        {/* Tagline (kept) + WCAG tooltip */}
        <p className={styles.tagline}>
          Frontend-focused full-stack developer — <strong>Angular</strong> ·{" "}
          <strong>.NET</strong> · <strong>PostgreSQL</strong> ·{" "}
          <strong>Azure</strong> · <strong>AI &amp; Big Data</strong>{" "}
        </p>

        {/* Bullet list with ticks */}
        <ul className={styles.heroList} role="list">
          <li className={`${styles.heroItem} text-emerald-200/95`}>
            <FontAwesomeIcon
              icon={faCircleCheck}
              className="text-2xl me-3 align-[-0.2em]"
              aria-hidden="true"
            />
            <TypeLine
              mode="char"
              speed={55}
              delay={200}
              text={
                "Building digital systems that think smarter and scale faster."
              }
              strongRanges={[
                { start: 9, end: 23 }, // digital systems
                { start: 35, end: 42 }, // smarter
              ]}
            />
            <FontAwesomeIcon icon={faTabletScreenButton} aria-hidden="true" />
          </li>

          <li className={`${styles.heroItem} text-emerald-200/95`}>
            <FontAwesomeIcon
              icon={faCircleCheck}
              className="text-2xl me-3 align-[-0.2em]"
              aria-hidden="true"
            />
            <TypeLine
              mode="char"
              speed={55}
              delay={1800}
              text={
                "My focus is on privacy-by-design, encryption, and least-privilege access to keep user data safe."
              }
              strongRanges={[
                { start: 16, end: 34 }, // privacy-by-design
                { start: 36, end: 46 }, // encryption
                { start: 52, end: 74 }, // least-privilege access
              ]}
            />
            <FontAwesomeIcon icon={faUserShield} aria-hidden="true" />
          </li>

          <li className={`${styles.heroItem} text-emerald-200/95`}>
            <FontAwesomeIcon
              icon={faCircleCheck}
              className="text-2xl me-3 align-[-0.2em]"
              aria-hidden="true"
            />
            <TypeLine
              mode="char"
              speed={55}
              delay={3600}
              text={
                "I enjoy working with data, exploring AI and LLMs to turn insights into intelligent features."
              }
              strongRanges={[
                { start: 22, end: 26 }, // data
                { start: 38, end: 40 }, // AI
                { start: 45, end: 49 }, // LLMs
              ]}
            />
            <FontAwesomeIcon icon={faRobot} aria-hidden="true" />
          </li>
        </ul>

        <Tippy
          content="Opens chat"
          placement="top"
          animation="scale"
          delay={[120, 0]}
        >
          <button
            type="button"
            className={styles.contactBtn}
            aria-controls="chat-panel"
            onClick={() => window.dispatchEvent(new CustomEvent("open-chat"))}
          >
            Let’s chat!
          </button>
        </Tippy>
      </div>

      <img
        src={getImageUrl("hero/myImage.png")}
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
