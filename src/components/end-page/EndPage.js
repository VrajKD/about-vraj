import React from 'react'
import "./EndPage.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faUserSecret, faPaperPlane, faPhoneAlt } from '@fortawesome/free-solid-svg-icons'
import ZoomInLeft  from 'react-reveal/Zoom'

class EndPage extends React.Component {
    render() {
        return (
            <ZoomInLeft>
                <div className="end-container">
                    <a href="www.github.com/VrajKD" className="end-git-button">
                        <FontAwesomeIcon icon={faGithub} /> LINK TO GITHUB PROFILE
                </a>
                    <div className="end-item">
                        <FontAwesomeIcon icon={faUserSecret} className="end-item-icon" />VRAJ KISHAN DUGAR
                </div>
                    <div className="end-item">
                        <FontAwesomeIcon icon={faPaperPlane} className="end-item-icon" />vrajkishan@gmail.com
                </div>

                    <div className="end-item">
                        <FontAwesomeIcon icon={faPhoneAlt} className="end-item-icon" /> +91 9879202825
                </div>
                </div>
            </ZoomInLeft>
        )
    }
}

export default EndPage;