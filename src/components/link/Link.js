import './link.css';

function Links({currentPage, handlePageChange, locationName, displayName}) {
    if (window.location.origin === "https://justinean.github.io") {
        return (
                <a href={`/react-portfolio/#${locationName}`} className={currentPage === locationName ? "active navlink hidden" : "navlink hidden"} onClick={() => handlePageChange(locationName)}>{displayName}</a>
        )
    } else {
        return (
            <a href={`/#${locationName}`} className={currentPage === locationName ? "active navlink hidden" : "navlink hidden"} onClick={() => handlePageChange(locationName)}>{displayName}</a>
        )
    }
}

export default Links;