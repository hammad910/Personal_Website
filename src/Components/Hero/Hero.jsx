import React from 'react'
import icon1 from '../../assets/Images/frontend.png'
import hero2 from '../../assets/Images/hero-2.png'
import hero3 from '../../assets/Images/hero-3.png'
import hero4 from '../../assets/Images/hero-4.png'
import myImg from '../../assets/Images/my 2 pic.png'
import {useTypewriter, Cursor} from 'react-simple-typewriter'
// import 'react-simple-typewriter/dist/App.css'; 
import './Hero.css'

const Hero = () => {

    const [ typeWriter ] = useTypewriter({
        words: ['Coding', 'Problem Solving.', 'Creativity.','Learning.'],
        loop: true,
        // typeSpeed: 120,
        // deleteSpeed: 120
    })

    return (
        <section className='hero-container' id='/' >
            <div className='hero-content'>
                <h2>Hey! I Am</h2>
                <h2>Muhammad Hammad</h2>
                <p >I Like{' '}
                    <span style={{color:'#5185b9'}}>{typeWriter}</span>
                    <Cursor/>
                </p>
            </div>

            <div className='hero-img'>
                <div>
                    <div className='tech-icon'>
                        <img src={hero2} width={'70%'} />
                    </div>
                    <img src={myImg} width={'100%'} />
                </div>

                <div>
                    <div className='tech-icon'>
                        <img src={icon1} width={'90%'} />
                    </div>
                    <div className='tech-icon'>
                        <img src={hero3} width={'70%'} />
                    </div>
                    <div className='tech-icon'>
                        <img src={hero4} width={'70%'} />
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Hero