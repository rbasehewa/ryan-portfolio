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
        Angular 17+ • .NET Core • Power Platform • Azure DevOps • AI Integration
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
                "AI Expertise: Integrating Claude, Gemini, and GPT into production Angular/.NET applications."
              }
              strongRanges={[
                { start: 9, end: 23 }, // digital systems
                { start: 35, end: 42 }, // smarter
              ]}
            />
            <FontAwesomeIcon className="text-2xl me-3 align-[-0.2em]" icon={faTabletScreenButton} aria-hidden="true" />
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
                "Healthcare Security: HIPAA-compliant systems with encryption, access controls, and audit trails."
              }
              strongRanges={[
                { start: 16, end: 34 }, // privacy-by-design
                { start: 36, end: 46 }, // encryption
                { start: 52, end: 74 }, // least-privilege access
              ]}
            />
            <FontAwesomeIcon icon={faRobot} className="text-2xl me-3 align-[-0.2em]" aria-hidden="true" />
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
        src={getImageUrl("hero/myImage.webp")}
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
