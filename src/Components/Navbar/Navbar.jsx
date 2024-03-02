import React from 'react'
import myImg from '../../assets/Images/navicon2cropremove.png'
import { GiHamburgerMenu } from "react-icons/gi";
import { MdClose } from "react-icons/md";
import './Navbar.css'
//import styles 
import 'react-modern-drawer/dist/index.css'
import MobileNav from './MobileNav/MobileNav';

function navbar() {
    
        const navLinks = [
            {name:'Home', path:'#/'},
            {name:'Skills', path:'#Skills'},
            {name:'Projects', path:'#Projects'},
            {name:'Work Experience', path:'#workExperience'},
            {name:'Contact Me', path:'#contactMe'},
        ]
    const [openMenu, setOpenMenu] = React.useState(false)
    const toggleMenu = () => {
        setOpenMenu(!openMenu)
    }

    return (
        <>
            <MobileNav isOpen={openMenu} toggleMenu={toggleMenu} />
            <nav className='nav-wrapper'>
                <div className='nav-content'>
                    {/* <a href='#/' className='menu-item2'> */}
                        <img src={myImg} className='nav-name' width={'10%'}/>
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