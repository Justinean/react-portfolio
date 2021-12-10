import Project from "../project/Project";
import './portfolio.css';

function Portfolio() {
    return (
        <div className="portfolio">
            <Project imageName="enviropact" altTag="EnviroPact" languages="MERN Stack" name="EnviroPact" link="https://enviropact.herokuapp.com/" repo="EnviroPact" description="A pact to improve our environment, economy, and society by holding businesses, corporations, and governments accountable for their actions and damages. Our mission and goal at EnviroPact is to make information and data more accessible and transparent to the public so that together we can work towards creating a world with values."/>
            <Project imageName="managemenow" altTag="Manage Me Now" languages="HTML/CSS/JS/Express" name="Manage Me Now" link="https://manage-me-now.herokuapp.com/" repo="Manage-Me-Now" description="A project and employee manager application. Managers can create projects and tasks and assign those to employees. Employees can not change anything but they can change their profile pictures and view company projects and their own projects."/>
            <Project imageName="project1" altTag="BlitzAndChaos" languages="HTML/CSS/JS" name="Blitz and Chaos" link="https://justinean.github.io/BlitzandChaos/" repo="BlitzandChaos" description="An interactive story where the main character - YOU, the user - will embark on a mission to save the world from a DRAGON! The user will read a story and make decisions, which will determine the final outcome. In the end, you will either find a way to save everyone (including yourself) or be forced to watch everything burn in an unstoppable, fiery apocalypse. The choice is yours. Choose wisely."/>
            <Project imageName="weather" altTag="Weather Dashboard" languages="HTML/CSS/JS" name="Weather Dashboard" link="https://Justinean.github.io/weather-dashboard/" repo="weather-dashboard" description="A weather dashboard that you can search for the weather using the postal code and the country of the location you want the weather of. It stores previously searched locations so the user can just click on a button to display the weather of that location again. The user can also clear the previously searched locations."/>
        </div>
    )
}

export default Portfolio;