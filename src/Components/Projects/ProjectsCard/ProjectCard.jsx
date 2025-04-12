import React from "react";
import "./ProjectsCard.css";

function Projects_Card({ details }) {
  return (
    <div className="Projects-card">
      <h2>{details.title}</h2>
      {details.description && (
        <p className="description">{details.description}</p>
      )}
      <div className="Projects-skill">{details.skill}</div>
      {details.img &&
        (details.link ? (
          <a href={details.link} className="link" target="_blank">
            <img src={details.img} alt="" />
          </a>
        ) : (
          <img src={details.img} alt="" />
        ))}
    </div>
  );
}

export default Projects_Card;
