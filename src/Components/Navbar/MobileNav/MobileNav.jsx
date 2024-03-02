import React from 'react'
import './MobileNav.css'

function MobileNav({ toggleMenu, isOpen }) {
    return (
        <>
            <div className={`mobile-menu ${isOpen ? 'active' : ''}`}
                onClick={toggleMenu}>
                <div className='mobile-menu-container'>
                    <a href='#/' className='menu-item2'>
                        <h1 className='nav-name' >Muhammad Hammad</h1>
                    </a>
                    <ul>
                        <li>
                            <a className='menu-item' href='#/'>Home</a>
                        </li>
                        <li>
                            <a className='menu-item' href='#skills'>Skills</a>
                        </li>
                        <li>
                            <a className='menu-item' href='#workExperience'>Work Experience</a>
                        </li>
                        <li>
                            <a className='menu-item' href='#contactMe'>Contact Me</a>
                        </li>
                        {/* <a className='menu-item2' href='#contactMe'>
                            <button className='contact-btn'>
                                Hire Me
                            </button>
                        </a> */}
                    </ul>
                </div>
            </div>
        </>
    )
}

export default MobileNav