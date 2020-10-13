import React from "react";
import "./Title.css";
import Fade from "react-reveal/Fade";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ReactTypingEffect from "react-typing-effect";
import {
  faFacebook,
  faGithub,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";

class Title extends React.Component {
  render() {
    const text = [
      "front - end web developer.",
      "Final year B.Tech student",
      "Cricket and Manchester United fan!",
    ];
    return (
      <div className="title-container shadow-5">
        <Fade right>
          <div className="avatar-pic"></div>
        </Fade>
        <Fade left>
          <div className="name-tag">Hi, I am Vraj Dugar</div>
          <br />
          <div className="type-tag">
            <ReactTypingEffect
              text={text}
              staticText="I am a "
              speed="100"
              eraseDelay="100"
              typingDelay="200"
            />
          </div>
        </Fade>
        <Fade right>
          <div className="social-div">
            <a href="www.facebook.com/vraj.dugar">
              <FontAwesomeIcon
                icon={faFacebook}
                className="fb-icon social-icon"
              />
            </a>
            <a href="www.github.com/VrajKD">
              <FontAwesomeIcon
                icon={faGithub}
                className="gh-icon social-icon"
              />
            </a>
            <a href="www.linkedin.com/in/vrajdugar">
              <FontAwesomeIcon
                icon={faLinkedinIn}
                className="social-icon fb-icon"
              />
            </a>
          </div>
        </Fade>
        {/*  */}
      </div>
    );
  }
}

export default Title;
