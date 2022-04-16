import React, {useState} from 'react';

import Header from './Header';
import NavBar from '../components/NavBar';
import About from './About';
import Projects from './Projects';
import Contact from './Contact'
import Footer from '../components/Footer';

const Portfolio = () => {

    const [selectedNav, setSelectedNav] = useState(null);

    const focusSelectedNav = (clickedNav) => {
        setSelectedNav(clickedNav);
    }

    return (
            <div id="portfolio">
                <Header />
                <NavBar selectedNav={selectedNav} focusSelectedNav={focusSelectedNav}/>
                <main>
                    <About />
                    <hr/>
                    <Projects />
                    <hr/>
                    <Contact />
                </main>
                <Footer />
            </div>
    );
}

export default Portfolio;