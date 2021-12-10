import './project.css';

function Project({ imageName, altTag, languages, name, link, repo, description}) {
    return (
        <div className={`projectDiv ${imageName}`}>
            <div className="project">
                <img src={`./images/${imageName}.png`} alt={altTag} width="500px" height="250px" />
                <div className="layer" onClick={() => window.open(link, "_blank")}>
                    <div className="text" onClick={() => window.open(link, "_blank")}>
                        <h2>{name}</h2>
                        <br />
                        <img src="./images/githubproject.png" alt="GitHub Cat" width="50px" height="50px" onClick={() => window.open(`https://github.com/Justinean/${repo}`, "_blank")} />
                        <p>{languages}</p>
                    </div>
                </div>
                <h2 className="description">{description}</h2>
            </div>
        </div>
    )
}

export default Project;