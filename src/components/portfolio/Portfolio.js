import Project from "../project/Project";
import './portfolio.css';

function Portfolio() {
    return (
        <div className="portfolio">
            <Project imageName="managemenow" altTag="Manage Me Now" languages="HTML/CSS/JS/Express" name="Manage Me Now" link="https://manage-me-now.herokuapp.com/" repo="Manage-Me-Now" />
            <Project imageName="project1" altTag="BlitzAndChaos" languages="HTML/CSS/JS" name="Blitz and Chaos" link="https://justinean.github.io/BlitzandChaos/" repo="BlitzandChaos" />
            <Project imageName="weather" altTag="Weather Dashboard" languages="HTML/CSS/JS" name="Weather Dashboard" link="https://Justinean.github.io/weather-dashboard/" repo="weather-dashboard" />
            <Project imageName="password" altTag="Password Generator" languages="HTML/CSS/JS" name="Password Generator" link="https://justinean.github.io/password-generator/" repo="password-generator" />
        </div>
    )
}

export default Portfolio;