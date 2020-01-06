import React from 'react';
import './Title.css'
import Fade from 'react-reveal/Fade'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
import ReactTypingEffect from 'react-typing-effect'

class Title extends React.Component {
    render() {
        const text = ["web developer.", "full - stack web developer.", "3rd year B.Tech student", "Cricket and Manchester United fan!"];
        return (
            <div className="title-container shadow-5">
                <Fade right><FontAwesomeIcon icon={faUserSecret} className="title-icon" /></Fade>
                <Fade left><div className="name-tag">Hi, I am Vraj Dugar</div><br />
                    <div className="type-tag"><ReactTypingEffect text={text} staticText="I am a " speed="100" eraseDelay="100" typingDelay="200" /></div></Fade>
                {/*  */}
            </div>
        )
    }
}

export default Title;