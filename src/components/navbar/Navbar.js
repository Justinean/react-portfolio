import Link from '../navlinks/Link';
import React from 'react';
import './navbar.css';

function Navbar({ currentPage, handlePageChange }) {
    let links = false;

    const checkSize = () => {
        let linkEls = document.querySelectorAll(".navlink")
        linkEls.forEach(item => {
            item.classList.add("hidden");
            links = false;
        })
    }

    const showLinks = () => {
        let linkEls = document.querySelectorAll(".navlink")
        if (links) {
            linkEls.forEach(item => {
                item.classList.add("hidden")
            })
            links = false;
        } else {
            linkEls.forEach(item => {
                item.classList.remove("hidden")
            })
            links = true;
        }
    }

    window.onresize = checkSize;

    return (
        <div className="navbar">
            <h1>Justin Hoch's Portfolio</h1>
            <button className="linkButton" onClick={showLinks}><p>_</p><p>_</p><p>_</p></button>
            <div className="navbarLinks">
                <Link currentPage={currentPage} handlePageChange={handlePageChange} displayName="About Me" locationName="aboutme" />
                
                <Link currentPage={currentPage} handlePageChange={handlePageChange} displayName="Portfolio" locationName="portfolio" />
                
                <Link currentPage={currentPage} handlePageChange={handlePageChange} displayName="Contact" locationName="contact" />
                
                <Link currentPage={currentPage} handlePageChange={handlePageChange} displayName="Resume" locationName="resume" />
            </div>
        </div>
    )
}

export default Navbar;