import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

import "./ProjectCard.css";

class ProjectCard extends React.Component {
  render() {
    const {
      title,
      subtitle,
      skills,
      points,
      gitLink,
      projLink,
    } = this.props.data;
    return (
      <div className="project-card">
        <div className="card-text">
          <div className="skill-list">
            {skills.map((skill) => (
              <span className="skill-item">{skill}</span>
            ))}
          </div>

          <div className="project-title">{title}</div>
          <div className="project-subtitle">{subtitle}</div>
          <div className="project-desc">
            <ul>
              {points.map((point) => (
                <li>{point}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className="card-buttons">
          <a
            href={gitLink}
            className="card-button br3 git"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faGithub} className="button-icon" />
            LINK TO REPO
          </a>
          <a
            href={projLink}
            className="card-button br3 proj"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faGithub} className="button-icon" />
            VIEW PROJECT
          </a>
        </div>
      </div>
    );
  }
}

export default ProjectCard;
