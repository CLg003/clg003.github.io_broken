import React from 'react';
import headerLogo from '../images/simon-berger-twukN12EN7c-unsplash-crop.jpg';


const Header = () => {

    return (
        <header id="header">
            <img src={headerLogo} alt="Claire Laing - Junior software developer"/>
            <h1>Claire <strong>Laing</strong></h1>
            <h2>Junior software developer</h2>
        </header>
    );

}

export default Header;