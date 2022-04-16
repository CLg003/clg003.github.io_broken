import React from 'react';
import instagramLogo from '../images/logos/instagram/Instagram_Glyph_Gradient_RGB.png';
import linkedInLogo from '../images/logos/linked_in/LI-In-Bug.png';
import gitHubLogo from '../images/logos/github/GitHub-Mark-120px-plus.png';

const About = () => {

    return (
        <div id="about">
            <h2>About</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Purus sit amet luctus venenatis lectus. Sed augue lacus viverra vitae congue eu consequat ac. Vel facilisis volutpat est velit egestas dui id. Nunc sed id semper risus in. Mattis pellentesque id nibh tortor id aliquet. Est placerat in egestas erat imperdiet. Amet commodo nulla facilisi nullam vehicula ipsum a. Velit scelerisque in dictum non consectetur a. Massa vitae tortor condimentum lacinia. Cursus metus aliquam eleifend mi in nulla posuere sollicitudin. Porttitor leo a diam sollicitudin tempor id eu.</p>
            <div id="social-media">
                <a href="https://github.com/CLg003" target="_blank"><img src={gitHubLogo} alt="GitHub logo"></img></a>
                <a href="https://www.linkedin.com/in/claire-laing-b05007a4/" target="_blank"><img src={linkedInLogo} alt="LinkedIn logo"></img></a>
                <a href="https://www.instagram.com/clairelaing003/" target="_blank"><img src={instagramLogo} alt="Instagram logo"></img></a>
            </div>
        </div>
    );

}

export default About;