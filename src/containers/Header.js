import React from 'react';
import headerLogo from '../images/header_1.png';


const Header = () => {

    return (
        <header id="header">
            <img src={headerLogo} alt="Claire Laing - Junior software developer"/>
            {/* <h1>Claire Laing</h1>
            <h2>Junior software developer</h2> */}
        </header>
    );

}

export default Header;