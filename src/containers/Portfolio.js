import React from 'react';
import Header from './Header';
import About from './About';
import Projects from './Projects';
import Contact from './Contact'
import Footer from '../components/Footer';

const Portfolio = () => {

    return (
        <div id="portfolio">
            <Header />
            <main>
                <About />
                <Projects />
                <Contact />
            </main>
            <Footer />
        </div>
    );
}

export default Portfolio;