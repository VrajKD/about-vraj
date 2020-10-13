import React from "react";
import "./Work.css";
import WorkCard from "./work-card/WorkCard";
import Zoom from "react-reveal/Zoom";

class Work extends React.Component {
  render() {
    const projects = [
      {
        title: "FRONT-END DEVELOPER",
        subtitle: "APPLUTIONS SOFTECH | JUNE 2020 - PRESENT | PART-TIME",
        skills: ["REACTJS", "REDUX", "STRIPE", "SCSS"],
        points: [
          "Responsible for developing the admin panel and trailer booking websites for one of Australia's largest trailer rental services, using ReactJS",
          "Managed and guided a junior developer and supported him with the user interface.",
          "Liased with the back-end, design and leadership team for successful and seamless deployment.",
        ],
      },
      {
        title: "FRONT-END DEVELOPER",
        subtitle: "TAGIT | FEBRUARY - APRIL 2020 | PART-TIME",
        skills: ["REACTJS", "REST API", "NODEJS", "POSTGRESSQL"],
        points: [
          "Developed and designed the admin portal for their patented shoplifting prevention device, using ReactJS",
          "Assisted team with various back-end and design aspects of the interface.",
          "Collaborated with senior stakeholders to achieve a website design they required",
        ],
      },
      {
        title: "WEB DEVELOPER",
        subtitle: "BTV CONSULTANTS | OCTOBER - DECEMBER 2019 | CONTRACT",
        skills: ["BOOTSTRAP", "REST API", "NODEJS", "MONGODB", "HTML/CSS"],
        points: [
          "Developed IT Solutions for a client of the agency , using HTML/CSS, Bootstrap and JavaScript",
          "Collaborated with senior stakeholders to achieve a website design they required",
        ],
      },
    ];
    return (
      <Zoom>
        <div className="works-container shadow-5">
          <div className="work-section-title">Work</div>
          <div className="work-cards">
            {projects.map((project) => (
              <WorkCard data={project} />
            ))}
          </div>
        </div>
      </Zoom>
    );
  }
}

export default Work;
