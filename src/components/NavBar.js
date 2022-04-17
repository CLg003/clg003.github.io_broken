import React from 'react';
import { Link } from 'react-scroll';



const NavBar = () => {
    

    return (
            <nav>
                <Link to="header" spy={true} offset={-90} smooth={true} duration={1500} >Home</Link>
                <Link to="about" spy={true} offset={-90} smooth={true} duration={1500} >About</Link>
                <Link to="projects" spy={true} offset={-90} smooth={true} duration={1500} >Projects</Link>
                <Link to="tech-stack" spy={true} offset={-90} smooth={true} duration={1500} >Tech Stack</Link>
                <Link to="contact" spy={true} offset={-200} smooth={true} duration={1500} >Contact</Link>
            </nav>
    );
}

export default NavBar;