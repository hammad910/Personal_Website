import React from 'react'
import './SkillsInfoCard.css'

function SkillsInfoCard({heading, skills}) {
  return (
    <div className='skills-info-card' data-aos="slide-up" data-aos-duration="6000">
        <h6>{heading}</h6>
        <div className='skills-info-content'>
            {skills.map((item, index) => (
                <React.Fragment key={`skills_${index}`}>
                    <div className='skills-info'>
                        <p>{item.skill}</p>
                        <p className='percentage'>{item.percentage}</p>
                    </div>
                    <div className='skills-progress-bg'>
                        <div className='skills-progress' style={{ width: item.percentage }}></div>
                    </div>
                </React.Fragment>
            ))}
        </div>
    </div>
  )
}

export default SkillsInfoCard