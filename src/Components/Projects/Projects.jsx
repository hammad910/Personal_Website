import React, { useRef } from 'react'
import './Projects.css'
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import Slider from 'react-slick'
import ProjectsCard from './ProjectsCard/ProjectCard'
import { PROJECTS } from '../../utils/data'

function Projects() {
  const sliderRef = useRef()

  const rightSlider = () => {
    sliderRef.current.slickNext()
  }

  const leftSlider = () => {
    sliderRef.current.slickPrev()
  }

  const setting = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        },
      },
    ]
  }

  return (
    <section className='projects-container' id='Projects' data-aos="slide-up" data-aos-duration="6000">
      <h5>Projects </h5>
      <div className='projects-content'>
        <div className='arrow-left' onClick={leftSlider}>
          <span><FaArrowLeft /></span>
        </div>
        <div className='arrow-right' onClick={rightSlider}>
          <span><FaArrowRight /></span>
        </div>
        <Slider ref={sliderRef} {...setting}>
          {PROJECTS.map((item) => (
            <ProjectsCard key={item.title} details={item} />
          ))}
        </Slider>
      </div>
    </section>
  )
}

export default Projects