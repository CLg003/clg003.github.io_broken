import React from 'react';
import instagramLogo from '../images/logos/instagram/Instagram_Glyph_Gradient_RGB.png';
import linkedInLogo from '../images/logos/linked_in/LI-In-Bug.png';
import gitHubLogo from '../images/logos/github/GitHub-Mark-120px-plus.png';

const About = () => {

    return (
        <div id="about">
            <h2>About</h2>
            <p>I am a junior software developer with a background in broadcasting and libraries. I spent seven years in a creative-technical TV post-production role, developing strong organisational and interpersonal skills through working with clients on a range of productions. Following this I took a career break to be a full-time parent, during which time I continued my learning and development through volunteering roles and online education. On returning to work I spent several years as a library adviser with Edinburgh City Libraries, but I missed the creative challenges of working in the tech industry and began to explore other avenues. I have always been passionate about working with software but had never considered myself a potential programmer before signing up to my first coding course. As a natural problem solver, I quickly discovered that programming is both something that I enjoy and that suits my skillset, and I am excited about pursuing a career back in the tech industry as a software developer.</p>
            <div id="social-media">
                <a href="https://github.com/CLg003" target="_blank"><img src={gitHubLogo} alt="GitHub logo"></img></a>
                <a href="https://www.linkedin.com/in/clairemjlaing" target="_blank"><img src={linkedInLogo} alt="LinkedIn logo"></img></a>
            </div>
        </div>
    );

}

export default About;