import React, { useState } from 'react'
import './Skills.css'
import { SKILLS } from '../../utils/data'
import SkillCard from './SkillCard/SkillCard'
import SkillsInfoCard from './SkillsInfoCard/SkillsInfoCard'
function Skills() {
    const [selectedSkill, setSelectedSkill] = useState(SKILLS[0])

    const handleSelectedSkill = (data) => {
        setSelectedSkill(data)
    };
  return (
    <section className='skills-container' id='Skills' data-aos="slide-up" data-aos-duration="6000">
        <h5>Technical Proficiency</h5>

        <div className='skills-content'>
            <div className='skills'>
                {SKILLS .map((item) => (
                    <SkillCard
                        key={item.title}
                        iconUrl={item.icon}
                        title={item.title}
                        isActive={selectedSkill.title === item.title}
                        onClick={() => {
                            handleSelectedSkill(item)
                        }}
                    />
                ))}
            </div>

            <div className='skills-info'>
                <SkillsInfoCard
                    heading={selectedSkill.title}
                    skills={selectedSkill.skills}
                />
            </div>
        </div>
    </section>
  )
}

export default Skills