import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'


import './ProjectCard.css'

class ProjectCard extends React.Component {
    render() {
        return (
            <div className="project-card">
                <div className="card-text">
                    <div className="skill-list">
                        <span className="skill-item">
                            Skill 1
                    </span>
                        <span className="skill-item">
                            Skill 1
                    </span>
                        <span className="skill-item">
                            Skill 1
                    </span>
                    </div>


                    <div className="project-title">CLOTHING E-COMMERCE STORE</div>
                    <div className="project-subtitle">Yelworks Advertising Co.</div>
                    <div className="project-desc">
                        <ul>
                            <li>An E-commerce website made with ReactJS complete with payments and a cart system</li>
                            <li>Libraries/Technologies : Redux, Firebase, Stripe, SCSS</li>
                            {/* <li>An E-commerce website made with ReactJS complete with payments and a cart system</li> */}
                        </ul>
                    </div>
                </div>
                <div className="card-buttons">
                    <a href="www.github.com/VrajKD" className="card-button br3 git"><FontAwesomeIcon icon={faGithub} className="button-icon" />LINK TO REPO</a>
                    <a href="www.github.com/VrajKD" className="card-button br3 proj"><FontAwesomeIcon icon={faGithub} className="button-icon" />VIEW PROJECT</a>
                </div>
            </div>
        )
    }
}

export default ProjectCard;