import React, {useState} from 'react';

import Header from './Header';
import NavBar from '../components/NavBar';
import About from './About';
import Projects from './Projects';
import TechStack from './TechStack';
import Contact from './Contact'
import Footer from '../components/Footer';

const Portfolio = () => {


    return (
            <div id="portfolio">
                <Header />
                <NavBar />
                <main>
                    <About />
                    <hr/>
                    <Projects />
                    <hr/>
                    <TechStack />
                    <hr/>
                    <Contact />
                </main>
                <Footer />
            </div>
    );
}

export default Portfolio;