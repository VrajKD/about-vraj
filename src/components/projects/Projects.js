import React from 'react';
import './Projects.css'
import ProjectCard from './project-card/ProjectCard';
import Zoom from 'react-reveal/Zoom'

class Projects extends React.Component {

    render() {
        const projects = [{
            title: "CLOTHING E-COMMERCE STORE",
            subtitle: "CRWN CLOTHING CO.",
            skills: ["REACTJS", "REDUX", "STRIPE", "SCSS"],
            points: ["An E-commerce website made with ReactJS complete with payments and a cart system", "Libraries/Technologies : Redux, Firebase, Stripe, SCSS"],
            gitLink: "https://github.com/VrajKD/vkd-kart",
            projLink: "https://vkd-kart.herokuapp.com/"
        },
        {
            title: "FACE RECOGNITION WEB APP",
            subtitle: "FACEDEC",
            skills: ["REACTJS", "REST API", "NODEJS", "POSTGRESSQL"],
            points: ["Multiple face-recognition using the Clarifai API", "Progressive web-app (PWA) made using React and PostgresSQL using Tachyons for the styling"],
            gitLink: "https://github.com/VrajKD/face-recognition-frontend",
            projLink: "https://face-recog-vrajkd.herokuapp.com/"
        },
        {
            title: "CAMPGROUND LISTING WEBSITE",
            subtitle: "THE TRAVELLERS ARENA",
            skills: ["BOOTSTRAP", "REST API", "NODEJS", "MONGODB", "HTML/CSS"],
            points: ["Campground listing website made using Bootstrap and basic HTML / CSS", "Authentication features added along with campground modification access"],
            gitLink: "https://github.com/VrajKD/travellers-arena",
            projLink: "https://travellersarena.herokuapp.com/"
        },]
        return (
            <Zoom>
                <div className="projects-container shadow-5">

                    <div className="project-section-title">
                        Projects
                </div>

                    <div className="project-cards">
                        {projects.map(project => (<ProjectCard data={project} />))}
                    </div>
                    {/* <div className="type-tag">This is supposed to be typed out</div> */}
                </div>
            </Zoom>
        )
    }
}

export default Projects;