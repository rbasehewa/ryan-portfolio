import projects from "../../data/projects.json";
import { ProjectCard } from "./ProjectCard";
import styles from "./Projects.module.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDiagramProject } from "@fortawesome/free-solid-svg-icons";

export const Projects = () => {
  return (
    <section className={styles.container} id="projects">
      <h2 className={styles.title}>
        <span className={styles.titleRow}>
          <FontAwesomeIcon
            icon={faDiagramProject}
            size="1x"
            className={styles.titleIcon} 
            aria-hidden="true"
          />
          <span>Projects</span>
        </span>
      </h2>

      <div className={styles.projects}>
        {projects.map((project, id) => (
          <ProjectCard key={id} project={project} />
        ))}
      </div>
    </section>
  );
};
