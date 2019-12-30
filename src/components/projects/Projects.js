import React from 'react';
import './Projects.css'
import ProjectCard from './project-card/ProjectCard';
import Zoom from 'react-reveal/Zoom'

class Projects extends React.Component {
    render() {
        return (
            <Zoom>
                <div className="projects-container shadow-5">

                    <div className="project-section-title">
                        Projects
                </div>

                    <div className="project-cards">
                        <ProjectCard />
                        <ProjectCard />
                        <ProjectCard />
                    </div>
                    {/* <div className="type-tag">This is supposed to be typed out</div> */}
                </div>
            </Zoom>
        )
    }
}

export default Projects;