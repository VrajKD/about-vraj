import React from 'react';
import './About.css'
import ZoomInUp from 'react-reveal/Zoom';


class About extends React.Component {
    render() {
        return (
            <ZoomInUp>
                <div className="about-container shadow-5">
                    <div className="about-content">
                        <div className="about-personal tc">
                            <div className="personal-title"><span className="bb pb2 b--light-silver">THIS IS ME</span></div>
                            <div className="personal-intro">Dynamic and detail-oriented Web Developer, pursuing my graduation in Information Technology, with a knack for developing elegant, user-friendly solutions effectively and efficiently debugging website codes. Armed with an extensive understanding of ReactJS and NodeJS.</div>
                            <div className="personal-title"><span className="bb pb2 b--light-silver">EDUCATION</span></div>
                            <div className="education">
                                - - VELLORE INSTITUTE OF TECHNOLOGY, VELLORE - -
                            <ul>
                                    <li> Maintained a high CGPA of 9.29</li>
                                    <li> Design Team member at CodeChef - VIT</li>
                                    <li> Received a Merit List certificate for academic achievements.</li>
                                </ul>
                            </div>
                            {/* <div className="personal-point">VRAJ KISHAN DUGAR</div>
                        <div className="personal-point">- - - vrajkishan@gmail.com - - -</div>
                        <div className="personal-point">- - - +91 9879202825 - - -</div> */}
                        </div>
                        <div className="about-skills tc">
                            <div className="personal-title"><span className="bb pb2 b--light-silver">SKILLS</span></div>
                            <div className="about-skills-list">
                                <p className="about-skill-item">ReactJS, Redux</p>
                                <p className="about-skill-item">Vanilla JavaScript</p>
                                <p className="about-skill-item">NodeJS</p>
                                <p className="about-skill-item">MongoDB/PostgresSQL</p>
                                <p className="about-skill-item">Firebase ( FireStore )</p>
                                <p className="about-skill-item">Bootstrap / SCSS</p>
                                <p className="about-skill-item">Material UI</p>
                            </div>
                        </div>
                    </div>
                    <div className="section-title">
                        ABOUT ME
                </div>
                </div>
            </ZoomInUp >
        )
    }
}

export default About;