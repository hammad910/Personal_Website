import React from "react";
import "./ProjectsCard.css";


function Projects_Card({ details }) {
  return (
    <div className="Projects-card">
        <h6>{details.title}</h6>
        <div className="Projects-skill">{details.skill}</div>
        <div
          className="status"
          style={{ color: details.status === "Complete" ? "green" : "red" }}
        >
          {details.status}
        </div>

      <a href={details.link} className="link" target="_blank">
        <img src={details.img} alt="" />
      </a>
    </div>
  );
}

export default Projects_Card;
