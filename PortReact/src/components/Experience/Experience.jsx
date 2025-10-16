import skills from "../../data/skills.json";
import { getImageUrl } from "../../utils";
import history from "../../data/history.json";
import styles from "./Experience.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHospital, faBuilding, faLaptop, faBriefcase } from "@fortawesome/free-solid-svg-icons";

const iconMap = {
  hospital: faHospital,
  building: faBuilding,
  laptop: faLaptop,
};

export const Experience = () => {
  return (
    <section className={styles.container} id="experience">
            <h2 id="experience-heading" className={styles.title}>
                  <span className={styles.iconWrap} aria-hidden="true">
            <FontAwesomeIcon icon={faBriefcase} size="1x" className={styles.icon} />
          </span> Experience
            </h2>

      <div className={styles.content}>
        <div className={styles.skills}>
          {skills.map((skill, id) => (
            <div key={id} className={styles.skill}>
              <div className={styles.skillImageContainer}>
                <img src={getImageUrl(skill.imageSrc)} alt={skill.title} />
              </div>
              <p>{skill.title}</p>
            </div>
          ))}
        </div>

        <ul className={styles.history}>
          {history.map((item, id) => {
            const fa = iconMap[item.icon] || faLaptop;
            return (
              <li key={id} className={styles.historyItem}>
                <span className={styles.historyIconWrap}>
                  <FontAwesomeIcon icon={fa} size="2x" />
                </span>
                <div className={styles.historyItemDetails}>
                  <h3>{`${item.role}, ${item.organisation}`}</h3>
                  <p className={styles.dates}>{`${item.startDate} - ${item.endDate}`}</p>

                  {item.summary && <p className={styles.summary}>{item.summary}</p>}

                  {item.techStack && (
                    <p >
                      <strong>Tech Stack:</strong> 
                      <span className={styles.techStack}>{item.techStack}</span>
                    </p>
                  )}

                  <ul>
                    {item.experiences.map((exp, i) => (
                      <li key={i}>{exp}</li>
                    ))}
                  </ul>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};
