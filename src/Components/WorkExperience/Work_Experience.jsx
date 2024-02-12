import React, { useRef } from 'react'
import './workExperience.css'
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import Slider from 'react-slick'
import Experience_Card from './ExperienceCard/Experience_Card'
import { work_Experience } from '../../utils/data'

function workExperience() {
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
    <section className='experience-container' id='workExperience' data-aos="slide-up" data-aos-duration="6000">
      <h5>Work experience</h5>
      <div className='experience-content'>
        <div className='arrow-left' onClick={leftSlider}>
          <span><FaArrowLeft /></span>
        </div>
        <div className='arrow-right' onClick={rightSlider}>
          <span><FaArrowRight /></span>
        </div>
        <Slider ref={sliderRef} {...setting}>
          {work_Experience.map((item) => (
            <Experience_Card key={item.title} details={item} />
          ))}
        </Slider>
      </div>
    </section>
  )
}

export default workExperience