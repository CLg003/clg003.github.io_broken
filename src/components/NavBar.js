import React from 'react';
import { Link } from 'react-scroll';



const NavBar = ({selectedNav, focusSelectedNav}) => {
    
    
    const handleClick = (event) => {
        focusSelectedNav(event.target.value);
    }

    return (
            <nav>
                <Link to="header" onClick={handleClick} spy={true} offset={-90} smooth={true} duration={1500} >Home</Link>
                <Link to="about" onClick={handleClick} spy={true} offset={-90} smooth={true} duration={1500} >About</Link>
                <Link to="projects" onClick={handleClick} spy={true} offset={-90} smooth={true} duration={1500} >Projects</Link>
                <Link to="contact" onClick={handleClick} spy={true} offset={-90} smooth={true} duration={1500} >Contact</Link>
            </nav>
    );
}

export default NavBar;