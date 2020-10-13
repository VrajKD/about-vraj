import React from "react";
import "./EndPage.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faFacebook,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import {
  faUserSecret,
  faPaperPlane,
  faPhoneAlt,
} from "@fortawesome/free-solid-svg-icons";
import ZoomInLeft from "react-reveal/Zoom";
import Fade from "react-reveal/Fade";
class EndPage extends React.Component {
  render() {
    return (
      <ZoomInLeft>
        <div className="end-container shadow-5">
          <div className="end-profile shadow-5" />
          <div className="end-item">
            <FontAwesomeIcon icon={faUserSecret} className="end-item-icon" />
            VRAJ KISHAN DUGAR
          </div>
          <div className="end-item">
            <FontAwesomeIcon icon={faPaperPlane} className="end-item-icon" />
            vrajkishan@gmail.com
          </div>

          <div className="end-item">
            <FontAwesomeIcon icon={faPhoneAlt} className="end-item-icon" /> +91
            9879202825
          </div>
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
        </div>
      </ZoomInLeft>
    );
  }
}

export default EndPage;
