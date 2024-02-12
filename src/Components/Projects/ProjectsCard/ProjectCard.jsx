import React from 'react'
import './ProjectsCard.css'


function Projects_Card({ details }) {
  return (
    <div className='Projects-card'>
      <h6>{details.title}</h6>
      <div className='Projects-skill'>{details.skill}</div>
      <ul>
        {/* {details.description.map((item) => ( */}
          <li >{details.description1}</li>
          <li >{details.description2}</li>
        {/* ))} */}
      </ul>
    </div>
  )
}

export default Projects_Card