import React from 'react';
import './Title.css'
import Fade from 'react-reveal/Fade'
import ReactTypingEffect from 'react-typing-effect'

class Title extends React.Component {
    render() {
        const text = ["web developer.", "full - stack web developer.", "3rd year B.Tech student", "Cricket and Manchester United fan!"];
        return (
            <div className="title-container shadow-5">
                <Fade right><img src="https://i.dlpng.com/static/png/6889287_preview.png" alt="laptop-clip" /></Fade>
                <Fade left><div className="name-tag">Hi, I am Vraj Dugar</div><br />
                    <div className="type-tag"><ReactTypingEffect text={text} staticText="I am a " speed="100" eraseDelay="500" /></div></Fade>
                {/*  */}
            </div>
        )
    }
}

export default Title;