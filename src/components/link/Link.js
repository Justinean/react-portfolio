import './link.css';

function Links({currentPage, handlePageChange, locationName, displayName}) {
    return (
            <a href={`/react-portfolio/#${locationName}`} className={currentPage === locationName ? "active navlink hidden" : "navlink hidden"} onClick={() => handlePageChange(locationName)}>{displayName}</a>
    )
}

export default Links;