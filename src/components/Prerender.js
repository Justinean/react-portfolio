import React, {useState} from 'react';
import About from './aboutme/About';
import Contact from './contact/Contact';
import Footer from './footer/Footer';
import Navbar from './navbar/Navbar';
import Portfolio from './portfolio/Portfolio';
import Resume from './resume/Resume';

function Prerender() {
    const [currentPage, setCurrentPage] = useState('aboutme');

    const handlePageChange = (page) => {
        let linkEls = document.querySelectorAll(".navlink")
        linkEls.forEach(item => {
            item.classList.add("hidden");
        })
        setCurrentPage(page)
    };

    const renderPage = () => {
        switch(currentPage) {
            case 'aboutme':
                return <About />
            case 'portfolio':
                return <Portfolio />
            case 'contact': 
                return <Contact />
            case 'resume':
                return <Resume />
            default:
                return <h1>Error 404: Page not found!</h1>
        }

    }
    return (
        <div style={{height: "100%"}}>
            <Navbar currentPage={currentPage} handlePageChange={handlePageChange} />
            {renderPage()}
            <Footer />
        </div>
    )
}

export default Prerender;