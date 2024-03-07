import React, { useEffect, useState } from 'react'
import myImg from '../../assets/Images/logo2_crop-removebg-preview.png'
import { GiHamburgerMenu } from "react-icons/gi";
import { MdClose } from "react-icons/md";
import './Navbar.css'
//import styles 
import 'react-modern-drawer/dist/index.css'
import MobileNav from './MobileNav/MobileNav';

function navbar() {

    const [show, setShow] = useState(false)
    const [lastScrollY, setLastScrollY] = useState(0)
    const [openMenu, setOpenMenu] = useState(false)

    const controlNav = () => {
        if (window.scrollY > 200) {
          if (window.scrollY > lastScrollY ) {
            setShow(true);
          }
        } else {
          setShow(false);
        }
        setLastScrollY(window.scrollY);
      };
    
    useEffect(() => {
        window.addEventListener('scroll', controlNav)
       return () => {
      window.addEventListener("scroll", controlNav);
    };
    },[lastScrollY])
    console.log(lastScrollY);

    
        const navLinks = [
            {name:'Home', path:'#/'},
            {name:'Skills', path:'#Skills'},
            {name:'Projects', path:'#Projects'},
            // {name:'Work Experience', path:'#workExperience'},
            {name:'Contact Me', path:'#contactMe'},
        ]
    const toggleMenu = () => {
        setOpenMenu(!openMenu)
    }

    return (
        <>
            <MobileNav isOpen={openMenu} toggleMenu={toggleMenu} />
            <nav className={`nav-wrapper ${show ? 'header-hidden' : 'header-visible'}`}>
                <div className='nav-content'>
                    {/* <a href='#/' className='menu-item2'> */}
                        <img src={myImg}/>
                    {/* </a> */}
                    <ul>
                    {navLinks.map((link, key) => (
                        <li >
                            <a className='menu-item' key={link.name} href={link.path} onClick={() => handleLinkClick(link.name)}>{link.name}</a>
                        </li>
                    ))}
                        <a className='menu-item2' href='#contactMe'>
                        {/* <button className='contact-btn' onClick={() => { }}>
                            Hire Me
                        </button> */}
                        </a>
                    </ul>
                    <button class='menu-btn' onClick={toggleMenu}>
                        <span class={'material-symbols-outlined'} style={{ fontSize: '1.8rem' }}>
                            {openMenu ? <MdClose /> : <GiHamburgerMenu />}
                        </span>
                    </button>
                </div>
            </nav>
        </>
    )
                    }

export default navbar