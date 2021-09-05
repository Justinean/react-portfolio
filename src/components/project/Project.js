import './project.css';

function Project({imageName, altTag, languages, name, link, repo}) {
    return (
        <div className="projectDiv">
            <div className="project">
                <img src={`./images/${imageName}.png`} alt={altTag} width="500px" height="250px"/>
                <div className="layer" onClick={() => window.open(link, "_blank")}>
                    <div className="text" onClick={() => window.open(link, "_blank")}>
                        <h2>{name}</h2>
                        <img src="./images/github.png" alt="GitHub Cat" width="50px" height="50px" onClick={() => window.open(`https://github.com/Justinean/${repo}`, "_blank")} />
                        <p>{languages}</p>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Project;