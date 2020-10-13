import React from "react";

import "./WorkCard.css";

class WorkCard extends React.Component {
  render() {
    const { title, subtitle, points } = this.props.data;
    return (
      <div className="work-card">
        <div className="work-text">
          <div className="work-head">
            <div className="work-title">{title}</div>
            <div className="work-subtitle">{subtitle}</div>
          </div>
          <div className="work-desc">
            <ul>
              {points.map((point) => (
                <li>{point}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default WorkCard;
